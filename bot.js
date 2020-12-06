const Discord = require('discord.js')
const bot = new Discord.Client();
 
const token = 'Nzg0MDUyNTUyNjk4Mjk4Mzc5.X8jr1w.RUMuMbNDOTE-8obJTSG00UZeEpw';
 
bot.on('ready', () =>{
    console.log('XDXDXDXDXDXDXDXD')
})
 
bot.login(token);
 
bot.on('message', msg=>{
    if(msg.content == "เนส"){
    msg.reply('ไก่สิ')
    }
    if(msg.content == "พี่โย"){
        msg.reply('คนอายุ50ใช่ไหม')
        }
    if(msg.content == "พี่ปาน"){
        msg.reply('คนนี้น่ารักสุดแล้ว')
        }
})
