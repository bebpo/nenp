const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("651800911869509644")
setInterval(function() {
channel.send(`#credits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);