//•|═════════════════════════════|•          //

//              ✯ 𝐌𝐈𝐊𝐇𝐀𝐈𝐄𝐋 𝐎𝐅𝐅𝐈𝐂𝐀𝐋 ✯

//•|════════════════════════════|•      //

require('./settings')
const { default: JimbruOfficalConnect, WASocket, DisconnectReason, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, jidNormalizedUser, makeWALegacySocket, useSingleFileLegacyAuthState, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG } = require("@adiwajshing/baileys")
const fs = require('fs')
const path = require('path')
const pino = require('pino')
const axios = require('axios')
const chalk = require('chalk')
const CFonts = require('cfonts');
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const { Boom } = require('@hapi/boom')
const { Collection, Simple, Store } = require("./lib")
const { MakeSession } = require('./lib/waconnect')
const PhoneNumber = require('awesome-phonenumber')
const { exec, spawn, execSync } = require("child_process")
const config = JSON.parse(fs.readFileSync('./config.json'))
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
// Jimbru session
global.authFile ='./Jimbru.json'
if(!fs.existsSync('./Jimbru.json')){
    MakeSession(global.session,authFile)
    }
setTimeout(() => {    
const { state, saveState } = useSingleFileAuthState(`./session.json`)
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// MEMORY STORE 
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
// DATABASE
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}
// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
// 
async function startJimbruOffical() {
console.log(color(figlet.textSync('JIMBRU-MD', {
	   font: 'Pagga',
	   horizontalLayout: 'default',
	   vertivalLayout: 'default',
	   width: 80,
	   whitespaceBreak: true
       }), 'yellow'))
console.log(color('\n🦋 YT : MIKHAIEL','silver'))
console.log(color('🦋 GITHUB : MIKHAIEL ','silver'))
console.log(color('🦋 WHATSAPP : +919544846609 ','silver'))
console.log(color('  🦋 JIMBRU OFFICAL MD. 2022 🦋','mediumseagreen'))
    console.log(color('🦋','red'), color('Thank You For Using Jimbru...!!!', 'yellow'))
    console.log(color('🦋','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('🦋','red'), color('Bug 🐛 , Error , Suggestion 📝 , 📞 Talk to developer:', 'aqua'))
    console.log(color('🦋', 'cyan'), color('🪀 https://wa.me/919544846609'))
    console.log(color('🦋', 'cyan'), color('✅ Login information updated!!!', 'pink'))
    console.log(color('🦋', 'cyan'), color('🪀 Connecting to WhatsApp...Please wait...🧞', 'magenta'))
    console.log(color('🦋','red'), color('Jimbroottan Working 🧞', 'white'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const JimbruOffical = JimbruOfficalConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['JIMBRU-MD','Safari','1.0.0'],
        auth: state,
        version
    })
    
store.bind(JimbruOffical.ev)


















































