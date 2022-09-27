const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// h
client.once('ready', () => {
	console.log('h');
});

client.login(token);