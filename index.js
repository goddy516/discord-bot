const { Client } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.login(process.env.TOKEN);
