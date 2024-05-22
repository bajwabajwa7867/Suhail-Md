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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaIMcs6rsQvcxy5LV3n";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaIMcs6rsQvcxy5LV3n" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923198691123";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923198691123";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_27_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUN4dlNkNG5NeEdiM3BMUDdYRWJURk1LamtIUlJRVVhuQzNkU1ZEalE1OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRnRGZUFJVlVTcXFDNGF4ajUyWko1d1wiLFxuICBcInBob25lSWRcIjogXCI2NTM1ZjdmZC03NGY4LTQxYjEtYjU5YS0zYWMwN2U4MDdiMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMjAsXG4gICAgICAxNDksXG4gICAgICAyMzksXG4gICAgICAyMTMsXG4gICAgICAxMzUsXG4gICAgICA1NixcbiAgICAgIDE1MixcbiAgICAgIDQzLFxuICAgICAgMTAxLFxuICAgICAgMTk5LFxuICAgICAgMjAxLFxuICAgICAgNDcsXG4gICAgICAyMTQsXG4gICAgICAzOCxcbiAgICAgIDEyOSxcbiAgICAgIDEzOCxcbiAgICAgIDIwMSxcbiAgICAgIDI1NCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDExOSxcbiAgICAgIDYzLFxuICAgICAgMjMsXG4gICAgICAyMDMsXG4gICAgICA5OSxcbiAgICAgIDI1MSxcbiAgICAgIDIyLFxuICAgICAgOTQsXG4gICAgICA5NyxcbiAgICAgIDE0OCxcbiAgICAgIDIwMyxcbiAgICAgIDIzMSxcbiAgICAgIDE5NCxcbiAgICAgIDE5MSxcbiAgICAgIDIxMSxcbiAgICAgIDg1LFxuICAgICAgMTgsXG4gICAgICA4NyxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRlRQN0ozOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk4NjkxMTIzOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA4Nzk2MjUwMTI4NDozOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJhdDU3OTM3MVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05yZWdwY0RFSjdKdDdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzdDK3lKRGtzTlRaNzNDd1NUYi9sOWp5T2FCakhlUXF1OHQ5RTk4N2tCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPVUZiSFZ1V2NHTW1tbDVYYkVXQkFrcmN5dEt0TFVpWDA5bGx2Wkkxdm50L2FnUGZaK3d5SXNBTWZ3VkdhNGlkNEtUUVlDOFpqeUhaNTA4bVd3VVlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpc0xoaDVPRzBJTTQrU3V6UmVWSWxjYUlsTWFsdWN6aTBodW5Ecm56OXhOQnVDNTBabmVYWVpvMjR5T0RFWE4vbkY2YWJaUmRCTDB2d2JYejYrS0dEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTg2OTExMjM6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjM4MDgzM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "captainking6",
  packname: process.env.PACK_NAME || "captainking6",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "captainking6",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
