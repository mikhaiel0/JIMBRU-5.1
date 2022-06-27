//═══════════════════════════════════════════════════════//

// ✯ 𝐌𝐈𝐊𝐇𝐀𝐈𝐄𝐋 𝐎𝐅𝐅𝐈𝐂𝐀𝐋 ✯

//════════════════════════════//
process.on('uncaughtException', console.error) //Error log
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
