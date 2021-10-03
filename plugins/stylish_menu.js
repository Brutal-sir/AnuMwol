const Shadow = require('../events');
const Config = require('../config');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');

Shadow.addCommand({ pattern: 'admin ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {
return await message.sendMessage(`🎀 ʜᴇʀᴏᴋᴜ ᴄᴏᴍᴍᴀɴᴅs🎀
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎀 ʀᴇsᴛᴀʀᴛ
┣𝕾⃝🎀 sʜᴜᴛᴅᴏᴡɴ
┣𝕾⃝🎀 sᴇᴛᴠᴀʀ
┣𝕾⃝🎀 ɢᴇᴛᴠᴀʀ
┣𝕾⃝🎀 ᴀʟʟᴠᴀʀ
┣𝕾⃝🎀 ᴜᴘᴅᴀᴛᴇ
┣𝕾⃝🎀 ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
🌹ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs🌹
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌹 ᴀᴅᴅ
┣𝕾⃝🌹 ᴋɪᴄᴋ
┣𝕾⃝🌹 ᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴜɴᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴘʀᴏᴍᴏᴛᴇ
┣𝕾⃝🌹 ᴅᴇᴍᴏᴛᴇ
┣𝕾⃝🌹 ɪɴᴠɪᴛᴇ
┣𝕾⃝🌹 ʀᴇᴠᴏᴋᴇ
┣𝕾⃝🌹 ᴡᴇʟᴄᴏᴍᴇ
┣𝕾⃝🌹 ɢᴏᴏᴅʙʏᴇ
┣𝕾⃝🌹 ʟᴇᴀᴠᴇ
┣𝕾⃝🌹 ᴛᴀɢ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍`);
}));
Shadow.addCommand({ pattern: 'misc ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {
return await message.sendMessage(`🌺 ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs🌺
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌺 ᴍᴘ3
┣𝕾⃝🌺 sᴛɪᴄᴋᴇʀ
┣𝕾⃝🌺 ᴘʜᴏᴛᴏ
┣𝕾⃝🌺 ʀᴇᴠᴇʀᴄᴇ
┣𝕾⃝🌺 ʙᴀss
┣𝕾⃝🌺 ᴘɪᴛᴄʜ
┣𝕾⃝🌺 ʟᴏᴡ
┣𝕾⃝🌺 ᴛᴛs
┣𝕾⃝🌺 ᴜɴᴠᴏɪᴄᴇ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇʙɢ
┣𝕾⃝🌺 ᴀᴛᴛᴘ
┣𝕾⃝🌺 ᴇᴍᴏ
┣𝕾⃝🌺 ᴛʀᴛ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ ʟɪsᴛ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇ
┣𝕾⃝🌺 ғɪʟᴛᴇʀ
┣𝕾⃝🌺 ᴊɪᴅ
┣𝕾⃝🌺 ʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴜɴʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴡʜᴏɪs
┣𝕾⃝🌺 ᴘɪɴɢ
┣𝕾⃝🌺 ᴍᴇɴᴜ
┣𝕾⃝🌺 ʜᴇʟᴘ
┣𝕾⃝🌺 ɪɴғᴏ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍`);
}));
Shadow.addCommand({ pattern: 'download ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {
return await message.sendMessage(`🎥 ᴅᴏᴡɴʟᴏᴅ ᴄᴏᴍᴍᴀɴᴅs🎥
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🎥ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 sᴏɴɢ
┣𝕾⃝🎥 ᴠɪᴅᴇᴏ
┣𝕾⃝🎥 ɪɴsᴛᴀ
┣𝕾⃝🎥 sᴛᴏʀʏ
┣𝕾⃝🎥 ғʙ
┣𝕾⃝🎥 ɪᴍɢ
┣𝕾⃝🎥 ᴡɪᴋɪ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍`);
}));
