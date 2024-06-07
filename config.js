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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_35_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxZ0oxWWY5R2xlOXA5cm9xSG84NTBqNDVzcFE5K1FZSUM5a0JpRmZjRlBjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1NjU0MTgwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREQ4N0ZFNUZCRjJDMkRGRTdFRUExQ0E5NEUxOUYyQ0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NzQ5MzA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzU2NTQxODA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1OUExNUI3MTM3NkZFQzdCQTA3MjJFQzAzNzlGRjMxM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc3NDkzMDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0xOVDJ5aDFUM1NfWXgzeDBmUWl6d1wiLFxuICBcInBob25lSWRcIjogXCI0MGVmN2VmZS1mNDNkLTQxY2YtYjAzOC1iMGM5OWFlNjZlZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICAyNSxcbiAgICAgIDE4MyxcbiAgICAgIDI0MyxcbiAgICAgIDg3LFxuICAgICAgOTMsXG4gICAgICA4NSxcbiAgICAgIDEwMSxcbiAgICAgIDI0LFxuICAgICAgOTEsXG4gICAgICAxNTEsXG4gICAgICA5MCxcbiAgICAgIDE1NyxcbiAgICAgIDEyMCxcbiAgICAgIDk2LFxuICAgICAgMTI0LFxuICAgICAgMTY0LFxuICAgICAgMTQ4LFxuICAgICAgMjMzLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICA0MSxcbiAgICAgIDE3NixcbiAgICAgIDMwLFxuICAgICAgMTY3LFxuICAgICAgMjksXG4gICAgICAyNDAsXG4gICAgICAxNDcsXG4gICAgICAxMjMsXG4gICAgICA4OSxcbiAgICAgIDI1MyxcbiAgICAgIDE0OSxcbiAgICAgIDE5MyxcbiAgICAgIDE5MixcbiAgICAgIDEzMyxcbiAgICAgIDE2MyxcbiAgICAgIDE4OSxcbiAgICAgIDE5MCxcbiAgICAgIDM1LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGU1I0QUdTWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzU2NTQxODA4OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjcxNTIwMjQ4NDUxMjA0OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSEFQUFkgQklSVEhEQVkg8J+OgvCfjoLwn46J8J+OiSBKXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1h4NEprQ0VMS01pN01HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUTnhZVkZCeFYvb3VQYWVkSUgrVmpoaEZkTkVya25UVTgxL0RRR2FxQTJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZUemp2cXJRRlFWNkFScVBLVmIwVXBkWkRPTUFHb2c2dFBRVVMxTlZ6dXJ0bUdkYW9EbElJMXFQN1pqT21NaFVrd1B4bVhuN2xiMzNDeUlQc0VuMEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIit3WUlZNmJVcFRyMlZnQnM2Tytic20vTk9jamR6cGNIRTgrRE5oNzlXSFlrNTJiMzNHMWNsQkVCYy8yRUN5OU9kMm5xcWFkMVM0K1N3ZHcyTmlBcEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1NjU0MTgwODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzQ5MzAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjgyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCODIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJySGN2clZSOHQ0NlptTjNuRHRla2VkZzNRcm40akdyZnA1MkJwd0RnamJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MDg4NzA3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
