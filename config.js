const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_06_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNWFUSE5TQXJHMmZ3OU5vUkoyMXFweGdxZ01BTXRITGYzdFdOelhzQWdtZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTY1NDE4MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRBNTY1MjEzQUVFMjM0MDc1Q0JDMUE5QjZCM0JGNTBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzgxNTk3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1NjU0MTgwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkVCMkU4QUZDOUMxMjQxQ0Y4MEY2MTYzODM5QUM3NTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODE1OTc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhmRkQ2T21aVG1lWVVHSF8zSWZvVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGEwYmVjMDMtZGQ2OC00ZWM2LWFkMTQtYmNlZWMzNDk2ODMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDE2OCxcbiAgICAgIDEzMixcbiAgICAgIDI0MSxcbiAgICAgIDE0NCxcbiAgICAgIDI1MSxcbiAgICAgIDQxLFxuICAgICAgNDksXG4gICAgICAxNDcsXG4gICAgICAxNDksXG4gICAgICAxOCxcbiAgICAgIDI3LFxuICAgICAgMCxcbiAgICAgIDE3MixcbiAgICAgIDkxLFxuICAgICAgMjMxLFxuICAgICAgMTY0LFxuICAgICAgMjE1LFxuICAgICAgMyxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTYyLFxuICAgICAgMTU2LFxuICAgICAgMjQyLFxuICAgICAgMTE4LFxuICAgICAgMTEsXG4gICAgICA1NyxcbiAgICAgIDIzOSxcbiAgICAgIDkzLFxuICAgICAgMTYyLFxuICAgICAgNDMsXG4gICAgICAxNjMsXG4gICAgICAyNTMsXG4gICAgICAxNjUsXG4gICAgICAxMDMsXG4gICAgICAxMzIsXG4gICAgICAxNzIsXG4gICAgICAxMDQsXG4gICAgICAxNTYsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0R1RCR0VHUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzU2NTQxODA4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcxNTIwMjQ4NDUxMjA0OjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSEFQUFkgQklSVEhEQVkg8J+OgvCfjoLwn46J8J+OiSBKXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1h4NEprQ0VLQ1ZqN01HR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUTnhZVkZCeFYvb3VQYWVkSUgrVmpoaEZkTkVya25UVTgxL0RRR2FxQTJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5PUktZVCtPb1JxYVMwT3BCWHNEdDNMRjYvYm9kMy9pOGxWOW5TWWVCMFQwVG1SN1hqSXFaVEx1Z0tqMENYM2Nkcjc1cWxrdXJYS2VyZ2Y0bjdCNkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJzNkR2a1BlbzBrbWprWjlPY2hpQXFMYkdIN2hjZDIranBVdWV5Nk1LaCt4L1MwZ044MlJWL1kweGVOZkNuRERDNkJ6TWNxRno5aGR0SUZSczFuSEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1NjU0MTgwODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODE1OTczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjgyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCODIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJySGN2clZSOHQ0NlptTjNuRHRla2VkZzNRcm40akdyZnA1MkJwd0RnamJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MDg4NzA3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
