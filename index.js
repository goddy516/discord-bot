require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('Pong')
  }
});
client.login(process.env.DISCORD_TOKEN);
