//•|═════════════════════════════|•          //

//              ✯ 𝐌𝐈𝐊𝐇𝐀𝐈𝐄𝐋 𝐎𝐅𝐅𝐈𝐂𝐀𝐋 ✯

//•|════════════════════════════|•      //

require("./config.js")
const { default: JimbruOfficalConnect, WASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, jidNormalizedUser, makeWALegacySocket, useSingleFileLegacyAuthState, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG } = require("@adiwajshing/baileys")
const { MakeSession } = require('./lib/waconnect/auth')  
const { state, saveState } = useSingleFileAuthState(`./lib/auth.json`)
const pino = require('pino')
const fs = require('fs');
const _ = require('lodash')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const CFonts = require('cfonts');
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const figlet = require('figlet')
const {
    color
} = require('./lib/color')
//require("http").createServer((_, res) => res.end("Hello World!")).listen(8080)
global.authFile ='./lib/auth.json'
if(!fs.existsSync('./lib/auth.json')){
    MakeSession(global.session ,authFile)
    }


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
console.log(err)
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
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await JimbruOffical.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                if (anu.action == 'add') {
                const buffer = await getBuffer(ppuser)
                let xeonName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                xeonbody = `┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
   │✑  ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xmembers}th
   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
   │✑ ${xtime} ${xdate}
   └───────────────┈ ⳹`
   //if you copy the code value,
   //dont forget to put my name(Xeon) as credit
   //you fail to put, i sue you for sure!
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
caption: xeonbody,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `Don't forget to read group description`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `${website}`,
mediaUrl: `${website}`
}}
}
XeonBotInc.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                } else if (anu.action == 'remove') {
                	const buffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'xeon', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    xeonbody = `┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗟𝗲𝗳𝘁 
   │✑ ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xeonmembers}th
   │✑  𝗧𝗶𝗺𝗲 : 
   │✑  ${xeontime} ${xeondate}
   └───────────────┈ ⳹`
      //if you copy the code value,
   //dont forget to put my name(Xeon) as credit
   //you fail to put, i sue you for sure!
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
caption: xeonbody,
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
    
// Setting
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

    // Add Other
   
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    JimbruOffical.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: JimbruOffical.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            JimbruOffical.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    JimbruOffical.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        JimbruOffical.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendText = (jid, text, quoted = '', options) => JimbruOffical.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JimbruOffical.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JimbruOffical.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await JimbruOffical.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendTextWithMentions = async (jid, text, quoted, options = {}) => JimbruOffical.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await JimbruOffical.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await JimbruOffical.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	JimbruOffical.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await JimbruOffical.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await JimbruOffical.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    JimbruOffical.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    JimbruOffical.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    JimbruOffical.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await JimbruOffical.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

//sendlistmsg by xeon
        JimbruOffical.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        JimbruOffical.sendMessage(jid, listMes, { quoted: quoted })
        }
        
    JimbruOffical.cMod = (jid, copy, text = '', sender = JimbruOffical.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === JimbruOffical.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    JimbruOffical.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    //send5butgif by xeon
        JimbruOffical.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: JimbruOffical.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            JimbruOffical.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    //send5butvid by xeon
        JimbruOffical.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: JimbruOffical.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            JimbruOffical.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    //send5butmsg
            JimbruOffical.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        JimbruOffical.sendMessage(jid, templateMessage)
        }
        
    JimbruOffical.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await JimbruOffical.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await JimbruOffical.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    JimbruOffical.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return JimbruOffical
}

startJimbruOffical()

        let file = require.resolve(__filename)
        fs.watchFile(file, () => {
	fs.unwatchFile(file)
        console.log(chalk.redBright(`Updated => '${__filename}'`))
	delete require.cache[file]
	require(file)
})
