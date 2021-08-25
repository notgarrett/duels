import mongoose from "mongoose";
import Discord from "discord.js";
import fs from "fs";
import tokens from "./tokens.json";
import bodyParser from "body-parser";
import express from "express";
import { checkBotAdmin } from "./functions/check-command-admin";
import routes from "./routes/routes";

export const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const token = tokens.token;
const prefix = ">";
const url = tokens.url || "mongodb://localhost:27017/duels";

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

// Mongoose Connection ///////////////////////////////////
////////////////////////////////////////

mongoose.Promise = global.Promise;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Express setup /////////////////////////////////////
/////////////////////////////////////////////////

const app = express();
const PORT = 4002;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server running on port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port: ${PORT}`);
});

/////////////////////////////////////////////
///////////////// BOT //////////////////////
///////////////////////////////////////////

bot.on("ready", () => {
  console.log("bot is operational");
  bot.user.setActivity(`Server up!`);
});

bot.on("message", (msg) => {
  //if (msg.author.bot) return;
  // return;

  let args = msg.content.substring(prefix.length).split(" ");

  if (msg.content.charAt(0) === prefix) {
    //Bot commands are listed in here //////////////////
    ////////////////////////////////////////////
    if (args[0] == "level") {
      bot.commands.get("level").execute(msg, args);
    }
    if (args[0] == "wipe" && checkBotAdmin(msg)) {
      bot.commands.get("wipe").execute(msg, args);
    }
  }
});

bot.login(token);
