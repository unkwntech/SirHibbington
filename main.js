const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
require("dotenv").config();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('messageCreate', (message) => {
    if(message.mentions.has(client.user.id) && !message.mentions.everyone)
        message.reply("<@421395302495420426>");
})

//https://discord.com/oauth2/authorize?client_id=952261149888483338&permissions=1024&scope=bot
