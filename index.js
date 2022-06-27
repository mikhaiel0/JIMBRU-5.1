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
const { state, saveState } = useSingleFileAuthState(`./Ammu.json`)
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
