const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.237679845694




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_27_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUxGeEdjbGRIMHExdThrYVVsb2pUdkt1UG9LSFg4ZFhzK2ZLOUE0bDZnaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVdRMVNSNUZUOEtoV2lISTJ3SE9oZ1wiLFxuICBcInBob25lSWRcIjogXCI4ODE5NWVkYy0wODcyLTQzNWMtOTQ5NC0zY2Q4ZTg2ODY5OWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICA3NSxcbiAgICAgIDE1MyxcbiAgICAgIDIyNyxcbiAgICAgIDExMixcbiAgICAgIDE1MixcbiAgICAgIDE5MSxcbiAgICAgIDE0NyxcbiAgICAgIDIxMCxcbiAgICAgIDE1MCxcbiAgICAgIDE1MixcbiAgICAgIDEwMyxcbiAgICAgIDE5MCxcbiAgICAgIDIxMSxcbiAgICAgIDExMSxcbiAgICAgIDgsXG4gICAgICAxNzksXG4gICAgICAxNTYsXG4gICAgICA2OSxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTksXG4gICAgICAyMTIsXG4gICAgICAxMTQsXG4gICAgICAxNzksXG4gICAgICAxMzksXG4gICAgICAyOSxcbiAgICAgIDkwLFxuICAgICAgNzUsXG4gICAgICA5OCxcbiAgICAgIDE4MCxcbiAgICAgIDIwNCxcbiAgICAgIDAsXG4gICAgICAxNzQsXG4gICAgICAyNixcbiAgICAgIDE2NCxcbiAgICAgIDE5NSxcbiAgICAgIDE2NCxcbiAgICAgIDEwOSxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tESWhxUUdFUGVQbDhJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSFNqQ3U1ak52dmZ1emsyTi9CeDVOM2ZUK3doSUV1Wis2L0ZkR0tUTUhrND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6NWtrYVFYNjlBNUxlRjM5WDZuNW8rQnladUROcTQ0NU5oMHFFSnFaTXJrNkZXd3h5SXJWSzNEZ0ljUTNIdzA1OVE2MVdaZFB2UVFOdW9uRlJISzBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiR0hlSmRBbTFlV3JZUzR2cjdjNjJkZnd1TVVOdW1taGlRY1NHa1MyajJnejlOMStnYjhGRWc3Um9yQjNnR0tLa2NIa09HdWJFUmJDejFyRmdyT25odz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3OTg0NTY5NDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk3Dr8SNa8Ovw6tsbCB+IEvDscOvZ2h0c1wiLFxuICAgIFwibGlkXCI6IFwiNjEwMzYwOTkwMjMwNjQ6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2Nzk4NDU2OTQ6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0OTQwMzY0NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Knights",
  ownername:process.env.OWNER_NAME|| "Mickiell Knights",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
