const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("651762324927021090")
setInterval(function() {
channel.send(`hello`);
}, 30)
})

client.login(process.env.BOT_TOKEN);