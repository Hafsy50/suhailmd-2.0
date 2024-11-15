cons fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104074508";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 
"SUHAIL_19_13_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NixcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImY1K2FEa2N1b1lmYUNZUnd1YlRyUk9XbXQ3cGgzV1dFZjd1YlhGaWlSYjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJ6MUE3UXJvU2JhOHhFRFRXWW45VndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGEzNjQ2ZDUtOTdkZS00NDE4LWExY2EtOWYwMTM5ZDEyODRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMCxcbiAgICAgIDE5NyxcbiAgICAgIDIxMSxcbiAgICAgIDIxMixcbiAgICAgIDIzMixcbiAgICAgIDc3LFxuICAgICAgMTY2LFxuICAgICAgMjAzLFxuICAgICAgMTYxLFxuICAgICAgMTI5LFxuICAgICAgMTYzLFxuICAgICAgMTgsXG4gICAgICAyMixcbiAgICAgIDI1MCxcbiAgICAgIDE2OCxcbiAgICAgIDE3NyxcbiAgICAgIDU0LFxuICAgICAgMjU1LFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTQ1LFxuICAgICAgMzgsXG4gICAgICA1NCxcbiAgICAgIDE2NSxcbiAgICAgIDE2MCxcbiAgICAgIDI0MyxcbiAgICAgIDI0OCxcbiAgICAgIDIyLFxuICAgICAgODUsXG4gICAgICAyMjQsXG4gICAgICAyMTIsXG4gICAgICAxNjEsXG4gICAgICAyNyxcbiAgICAgIDE3LFxuICAgICAgNTQsXG4gICAgICAxMixcbiAgICAgIDQwLFxuICAgICAgMTg3LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFRTU5BRUtYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA0MDc0NTA4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDIyMjE3OTcyMTM3MDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01MWCtPOEJFSys2M3JrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZHpyKzBVM0JhTmdmWVYrYmUyd3haWDd1ZzdZMXV5V040MzdKTEo4ZTRRZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0VzA4Mys1QmNIYnJDTlZqWEtPUjlZRitCMVBSOXkyYThmMms5OW1hcXNUdGlZZVZjUitRdGZoZHBQNS80T3Y4ZVovdmllQllFY2ZkZ3lVVFFXVy9CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqeVd5b0VOOEhIeUxOa25RWmo0YTV3bGJPZVpVL2hYa1J1QjJMelRrVWdZcTRMNzM0bDNpVHlDd2lDcmZpemlYVVVmM0xRNUU2SHNRai80TllzZnRpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0MDc0NTA4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2OTc5NzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJT3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlPeS5qc29uIjogIntcImtleURhdGFcIjpcImlDNVQ1bDgwT1o3SVZpZEQ4MUJqVEE5d05nejVUOUtiNXJONFZySGVKOHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTAzMTk2NjEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0NDIyNjYzNDFcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
