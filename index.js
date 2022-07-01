//•|═════════════════════════════|•          //

//    ✯ 𝐌𝐈𝐊𝐇𝐀𝐈𝐄𝐋 𝐎𝐅𝐅𝐈𝐂𝐀𝐋 ✯

//•|════════════════════════════|•      //

require('./config.js')
const { default: JimbruOfficalConnect, WASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, jidNormalizedUser, makeWALegacySocket, useSingleFileLegacyAuthState, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const FileType = require('file-type')
const { MakeSession } = require('./lib/waconnect/auth')
const path = require('path')
const CFonts = require('cfonts');
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const figlet = require('figlet')
const { color } = require('./lib/color')

global.authFile ='./auth.json'
if(!fs.existsSync('./auth.json')){
    MakeSession(global.session,authFile)
    }
setTimeout(() => {    
const { state, saveState } = useSingleFileAuthState(`./auth.json`)
// MEMORY STORE 
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
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
    console.log(color('🦋','red'), color('I Wrote This Script By Myself!', 'yellow'))
    console.log(color('🦋','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('🦋','red'), color('Bug? Error? Suggestion? Talk to developer:', 'aqua'))
    console.log(color('🦋', 'cyan'), color('https://wa.me/919544846609'))
    console.log(color('🦋', 'cyan'), color('✅ Login information updated!', 'pink'))
    console.log(color('🦋', 'cyan'), color('Connecting to WhatsApp...Please wait....', 'magenta'))
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
// anticall auto block
    JimbruOffical.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await JimbruOffical.sendContact(callerId, global.owner)
    JimbruOffical.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : pa7rick })
    await sleep(8000)
    await JimbruOffical.updateBlockStatus(callerId, "block")
    }
    })
JimbruOffical.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!JimbruOffical.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(JimbruOffical, mek, store)
require("./Jimbru")(JimbruOffical, m, chatUpdate, store)
} catch (err) {
// console.log(err)
}
})
//GRUP UPDATE
JimbruOffical.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await JimbruOffical.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe group has been closed by admin, Now only admin can send messages !`, `${botname}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe group has been opened by admin, Now participants can send messages !`, `${botname}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup info has been restricted, Now only admin can edit group info !`, `${botname}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup info has been opened, Now participants can edit group info !`, `${botname}`, wm_fatih, [])
       } else {
       JimbruOffical.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject has been changed to *${pea[0].subject}*`, `${botname}`, wm_fatih, [])
     }
    })
//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

JimbruOffical.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        //if (!wlcm.includes(anu.id)) return //remove forwad slashes to make it welcome on off
        try {
            let metadata = await JimbruOffical.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await JimbruOffical.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await JimbruOffical.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/ddaca390b13a4246bf1ef.jpg'
                }

                if (anu.action == 'add') {
                const buffer = await getBuffer(ppuser)
                let Name = num
                const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "919544846609-1628086590@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'Jimbru', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                body = `
		◈ ʜᴇʏ 👋 @${Name.split("@")[0]},
		
		◈ ᴛɪᴍᴇ : ${time} ${date}
		
                ◈ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ : ${metadata.subject}
		
                ◈ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${metadata.desc}
		
                ◈ ᴛʜᴇ ᴍᴇᴍʙᴇʀꜱ ᴏꜰ ᴛʜᴇ ɢʀᴏᴜᴘ ᴀʀᴇ ᴀʟꜱᴏ ʟɪᴋᴇ ꜰᴀᴍɪʟʏ ꜱᴏ ʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴄᴏᴍᴇ ᴀ ᴘᴀʀᴛ ᴏꜰ ᴏᴜʀ ꜰᴀᴍɪʟʏ ᴡʜɪᴄʜ ɪ ᴀᴍ ᴠᴇʀʏ ʜᴀᴘᴘʏ ᴀɴᴅ ɪ ᴡᴇʟᴄᴏᴍᴇ ʏᴏᴜ ᴛᴏ ᴍʏ ɢʀᴏᴜᴘ. ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴄᴏɴꜱɪᴅᴇʀɪɴɢ ᴏᴜʀ ɢʀᴏᴜᴘ ᴡᴏʀᴛʜʏ ᴀɴᴅ ᴊᴏɪɴᴇᴅ ᴛᴏɢᴇᴛʜᴇʀ !!`
   
   //dont forget to put my name mikhaiel as credit
  
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Welcome'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./Media/theme/doc.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: body,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `ᴅᴏɴ'ᴛ ꜰᴏʀɢᴇᴛ ᴛᴏ ʀᴇᴀᴅ ɢʀᴏᴜᴘ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${website}`,
mediaUrl: `${website}`
}}
}
JimbruOffical.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                                } else if (anu.action == 'remove') {
                	        const buffer = await getBuffer(ppuser)
                                const time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                        const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	        let Name = num
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "919544846609-1628086590@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'Jimbru', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    body = `
		    ◈ @${Name.split("@")[0]}
		    
		    ◈ ᴛɪᴍᴇ : ${time}
		    
		    ◈ ᴅᴀᴛᴇ : ${date}
ᴍᴀʏ ɢᴏᴅ ʙʟᴇꜱꜱ ʏᴏᴜ ᴀɴᴅ ʜᴇʟᴘ ʏᴏᴜ ᴀᴄʜɪᴇᴠᴇ ʏᴏᴜʀ ᴅʀᴇᴀᴍꜱ. ᴅᴏ ɴᴏᴛ ꜰᴏʀɢᴇᴛ ᴜꜱ. ᴡᴇ ᴡɪʟʟ ᴀʟᴡᴀʏꜱ ʙᴇ ᴛʜᴇʀᴇ ꜰᴏʀ ʏᴏᴜ ᴡʜᴇɴᴇᴠᴇʀ ʏᴏᴜ ɴᴇᴇᴅ ᴜꜱ`
    
let buttons = [
{buttonId: `wkwkwk`, buttonText: {displayText: 'RIP'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./Media/theme/doc.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: body,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `Bye! my friend, take care.`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${website}`,
mediaUrl: `${website}`
}}
}
JimbruOffical.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
 JimbruOffical.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    JimbruOffical.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = JimbruOffical.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    JimbruOffical.getName = (jid, withoutContact  = false) => {
        id = JimbruOffical.decodeJid(jid)
        withoutContact = JimbruOffical.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = JimbruOffical.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === JimbruOffical.decodeJid(JimbruOffical.user.id) ?
            JimbruOffical.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
        JimbruOffical.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await JimbruOffical.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await JimbruOffical.getName(i + '@s.whatsapp.net')}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${global.socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	JimbruOffical.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    JimbruOffical.setStatus = (status) => {
        JimbruOffical.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    JimbruOffical.public = true

    JimbruOffical.serializeM = (m) => smsg(JimbruOffical, m, store)

    JimbruOffical.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = lastDisconnect.error ? lastDisconnect?.error?.output.statusCode : 0;
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startJimbruOffical(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startJimbruOffical(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startJimbruOffical(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startJimbruOffical(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        console.log('Connected...', update)
    })
 JimbruOffical.ev.on('creds.update', saveState)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	













