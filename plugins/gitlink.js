const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');


Asena.addCommand({pattern: 'git', fromMe: false, desc: "*Shows bot info*" }, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/L0rBsgY.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✮  ❖ ᴀͥɴͭᴜᷤܓᴍᴡͫᴏͤʟ ❖  ✮*
 
 ❖ *𝙰ɴᴜᴍᴡᴏʟ ᴠ¹*

 ❖ *ᴏᴡɴᴇʀ: wa.me/917356484508* 

 ❖ *ᴅᴇᴠᴇʟᴏᴘᴇʀ: Ᏼʀᴜтᷤᴀͥʟᷢ࿐⁩*

 ❖ *ɢɪᴛʜᴜʙ ʟɪɴᴋ:http://github.com/Brutal-sir/AnuMwol*`}) 

}));
