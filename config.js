//════════════════════════════//

//ＭＩＫＨＡＩＥＬ

//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//auto function
global.session = process.env.SESSION_ID || 'WlNkMjZkQWg'
global.owner = process.env.OWNERNUMBER || ['919544846609'] //ur owner number
global.ownername = process.env.OWNERNAME || 'Mikhaiel'
global.ytname = process.env.YTNAME || 'YT: Mikhaiel' //ur yt chanel name
global.socialm = process.env.SOCIALMEDIA || 'GitHub: Mikhaiel'  //ur github or insta name
global.location = process.env.LOCATION || 'India, Kerala, Pathanamthitta' //ur location

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//bot bombdy
global.botname = process.env.BOT_NAME || 'Jimbru-v4.2' //ur bot name
global.website = "https://instagram.com/the_real_mikhaiel" //ur website
global.vidmenu = { url: 'https://www.instagram.com/reel/CfMGePqj5KM/?igshid=YmMyMTA2M2Y=.mp4' } //gif and video menu
global.packname = process.env.PACK_NAME || 'Jimbru \n\n\n\n\n\n\n❤‍🩹'
global.author = process.env.AUTHOR_NAME || 'Made By'
global.themeemoji = process.env.THEME_EMOGI || '🧞'
global.reactmoji = process.env.REACT_EMOGI || '🧞'
global.ownertag = process.env.OWNER_TAG ||['919544846609'] //ur owner tag
global.ownernummenu = process.env.OWNER_NUM_MENU || ['919544846609'] //ur owner number in menu and all
global.watermark = "© Mikhaiel." //ur watermark
global.botscript = "https://github.com/Mikhaiel/Jimbru-MD"
global.links = "https://chat.whatsapp.com/BuYtj7IRcd2E2EaBftF9fC"
global.linkz = "https://chat.whatsapp.com/BuYtj7IRcd2E2EaBftF9fC"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//Bot theme media
global.thum = fs.readFileSync("./Media/theme/Jimbru.jpg") //ur thumb pic
global.logo = fs.readFileSync("./Media/theme/Jimbru.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/Jimbru.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/Jimbru.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}
global.mess = {
    success: 'Done✓',
    admin: 'This feature is only for admins!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This feature is only for owner',
    group: 'This feature is only for groups!',
    private: 'This feature is only for private chats!',
    bot: 'This feature is only for bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 999999,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 999999
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': '2D8C144E4C',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
