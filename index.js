const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [ Intents.FLAGS.GUILDS ] });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply({ content: 'Pong'})
  }
  
client.login(process.env.TOKEN);
