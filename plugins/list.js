const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'list', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/W24oYoP.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*❖ ᴀͥɴͭᴜᷤܓᴍᴡͫᴏͤʟ ❖ ᴘᴜʙʟɪᴄ ʙᴏᴛ ❖*

*ᴅᴇᴠᴇʟᴏᴘᴇʀ Ᏼʀᴜтᷤᴀͥʟᷢ࿐*

*ɢɪᴛʜᴜʙ: https://github.com/Brutal/AnuMwol*

*ᴍᴏʀᴇ ᴄᴏᴍᴍᴀɴᴅs👇*

 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
*✪ Command:* ```.xmedia```
*➢ Description:* ```It is a plugin with more than 25 media tools.``` 

*✪ Command:* ```.ownercmnd```
*➢ Description:* ```set of commands for bot user or sudo``` 

*✪ Command:* ```.codtts```
*➢ Description:* ```language code to change the voice in .tts & also for .trt translation``` 

*✪ Command:* ```.adan ```
*⟳ Description:* ```Finds prayer time.``` 
*⌨️ Example:* ```.prayer <city>```

*✪ Command:* ```.anime```
*➢ Description:* ```random anime image ``` 

*✪ Command:* ```.apkmod```

*✪ Command:* ```.fatp```

*✪ Command:* ```.inshot```

*✪ Command:* ```.capcut```

*✪ Command:* ```.jetau```

*✪ Command:* ```.ttp ```
*➢ Description:* ```Converts text to plain painting.``` 

*✪ Command:* ```.attp ```
*➢ Description:* ```Adds rainbow effect to the text as a sticker.``` 

*✪ Command:* ```.bgm ```
*⟳ Description:* ```turn on and turn off bgm. -bot owner command``` 
*⌨️ Example:* ```.bgm on / off```

*✪ Command:* ```.carbon```

*✪ Command:* ```.bgm ```
*⟳ Description:* ```change reply message BGM mode``` 
*⌨️ Example:* ```.bgm one / two```

*✪ Command:* ```.mp3```
*➢ Description:* ```Converts video to sound.``` 

*✪ Command:* ```.photo```
*➢ Description:* ```Converts the sticker to a photo.``` 

*✪ Command:* ```.mp4```
*➢ Description:* ```Converts animated stickers to video.``` 

*✪ Command:* ```.deepai```
*➢ Description:* ```Runs the most powerful artificial intelligence tools using artificial neural networks.``` 

*✪ Command:* ```.dict ```
*➢ Description:* ```Use it as a dictionary.
Eg: .dict en_US;lead
 For supporting languages send *.lngcode*``` 

*✪ Command:* ```.bgm ```
*⟳ Description:* ```turn on and turn off bgm. -bot owner command``` 
*⌨️ Example:* ```.bgm on / off```

*✪ Command:* ```.autosticker ```
*⟳ Description:* ```turn on and turn off bgm. -bot owner command``` 
*⌨️ Example:* ```.sticker on / off```

*✪ Command:* ```.sudo ```
*⟳ Description:* ```changes sudo numbers``` 
*⌨️ Example:* ```.sudo *your number*```

*✪ Command:* ```.caption ```
*⟳ Description:* ```changes all captions``` 
*⌨️ Example:* ```.caption *Made by JulieMwol*```

*✪ Command:* ```.handlers ```
*⟳ Description:* ```changes handlers``` 
*⌨️ Example:* ```.handler ^[.!] ```

*✪ Command:* ```.botname ```
*⟳ Description:* ```change your bot name``` 
*⌨️ Example:* ```.botname *name* ```

*✪ Command:* ```.theri  ```
*⟳ Description:* ```change your theri commands``` 
*⌨️ Example:* ```.theri command,command```

*✪ Command:* ```.ffmpeg ```
*➢ Description:* ```Applies the desired ffmpeg filter to the video.
⌨️ Example: .ffmpeg fade=in:0:30``` 

*✪ Command:* ```.git```
*➢ Description:* ```To get github links|http://github.com/Hypersir/Fidha-Mwol.``` 

*✪ Command:* ```.welcome```
*➢ Description:* ```It sets the welcome message. If you leave it blank it shows the welcome message.``` 

*✪ Command:* ```.goodbye```
*➢ Description:* ```Sets the goodbye message. If you leave blank, it show's the goodbye message.``` 

*✪ Command:* ```.help ```
*➢ Description:* ```Gives information about using the bot from the Help menu.``` 

*✪ Command:* ```.antilink ```
*⟳ Description:* ```Activates the Antilink tool.``` 
*⌨️ Example:* ```.antilink on / off```

*✪ Command:* ```.locate```
*➢ Description:* ```It send your location.``` 
*⚠️ Warn:* ```Please open your location before using command!```

*✪ Command:* ```.meme ```
*➢ Description:* ```Photo memes you replied to.``` 

*✪ Command:* ```.menu```
*➢ Description:* ```it send bot menu``` 

*✪ Command:* ```.mmpack```
*➢ Description:* ```*▷🪐നിങ്ങൾ ആഗ്രഹിക്കുന്ന രീതിയിൽ മെമ്മുകൾ ഇച്ഛാനുസൃതമാക്കാൻ മെമ്മെ ലിസ്റ്റ്◁* ``` 

*✪ Command:* ```.moretxt```
*➢ Description:* ```more txtit commands``` 

*✪ Command:* ```.ffire ```
*➢ Description:* ```add your text to random freefire logo``` 

*✪ Command:* ```.emo ```
*➢ Description:* ```emogi to png``` 

*✪ Command:* ```.insta ```
*➢ Description:* ```Downloads Image/Video From Instagram``` 

*✪ Command:* ```.news ```

*✪ Command:* ```.notes```
*➢ Description:* ```Shows all your existing notes.``` 

*✪ Command:* ```.save ```
*➢ Description:* ```Reply a message and type .save or just use .save <Your note> without replying``` 

*✪ Command:* ```.deleteNotes```
*➢ Description:* ```Deletes *all* your saved notes.``` 

*✪ Command:* ```.ocr ```
*➢ Description:* ```Reads the text on the photo you have replied.``` 

*✪ Command:* ```.owner```
*➢ Description:* ```shows the detail of bot owner``` 

*✪ Command:* ```.jid ```
*➢ Description:* ```Giving user's JID.``` 

*✪ Command:* ```.random ```
*➢ Description:* ```word image``` 

*✪ Command:* ```.brdmore ```
*➢ Description:* ```add readmore before your text``` 

*✪ Command:* ```.rdmore ```
*➢ Description:* ```add readmore before your text``` 

*✪ Command:* ```.removebg ```
*➢ Description:* ```Removes the background of the photos.``` 

*✪ Command:* ```.warn ```
*➢ Description:* ```Sends reports to group admins.``` 

*✪ Command:* ```.scan ```
*➢ Description:* ```Checks whether the entered number is registered on WhatApp.``` 

*✪ Command:* ```.trt```
*⟳ Description:* ```It translates with Google Translate. You must reply any message.``` 
*⌨️ Example:* ```.trt tr it (From Turkish to Italian)```

*✪ Command:* ```.detectlang```
*➢ Description:* ```Guess the language of the replied message.``` 

*✪ Command:* ```.currency```

*✪ Command:* ```.tts ```
*➢ Description:* ```It converts text to sound.``` 

*✪ Command:* ```.song ```
*➢ Description:* ```Uploads the song you wrote.``` 

*✪ Command:* ```.video ```
*➢ Description:* ```Downloads video from YouTube.``` 

*✪ Command:* ```.isong ```
*➢ Description:* ```Uploads the song you wrote for ios users.``` 

*✪ Command:* ```.yt ```
*➢ Description:* ```It searchs on YouTube.``` 

*✪ Command:* ```.wiki ```
*➢ Description:* ```Searches query on Wikipedia.``` 

*✪ Command:* ```.img ```
*➢ Description:* ```Searches for related pics on Google.``` 

*✪ Command:* ```.github ```
*➢ Description:* ```Collects github information from the given username.
⌨️ Example: .github phaticusthiccy``` 

*✪ Command:* ```.lyric ```
*➢ Description:* ```Finds the lyrics of the song.``` 

*✪ Command:* ```.covid ```
*➢ Description:* ```Shows the daily and overall covid table of more than 15 countries.``` 

*✪ Command:* ```.sweather ```
*➢ Description:* ```Gives you the weekly interpretations of space weather observations provided by the Space Weather Research Center (SWRC) for a p.``` 

*✪ Command:* ```.compliment ```

*✪ Command:* ```.insult ```

*✪ Command:* ```.movie ```
*➢ Description:* ```Shows movie info.``` 

*✪ Command:* ```.joke ```

*✪ Command:* ```.molu ```

*✪ Command:* ```.owner```
*➢ Description:* ```shows the detail of bot owner``` 

*✪ Command:* ```.quote ```

*✪ Command:* ```.ss ```
*➢ Description:* ```Takes a screenshot from the page in the given link.``` 

*✪ Command:* ```.setvar```
*➢ Description:* ```*SETVAR SETTING COMMADS* ``` 

*✪ Command:* ```.show ```
*➢ Description:* ```Get info related to tv series and shows``` 

*✪ Command:* ```.ig ```
*➢ Description:* ```Downloads videos or photos from Instagram.``` 

*✪ Command:* ```.animesay ```
*➢ Description:* ```It writes the text inside the banner the anime girl is holding``` 

*✪ Command:* ```.changesay ```
*➢ Description:* ```Turns the text into the change my mind poster.``` 

*✪ Command:* ```.trumpsay ```
*➢ Description:* ```Converts the text to Trump's tweet.``` 

*✪ Command:* ```.sticker```
*➢ Description:* ```It converts your replied photo or video to sticker.``` 

*✪ Command:* ```.alive```
*➢ Description:* ```Does bot work?``` 

*✪ Command:* ```.info```
*➢ Description:* ```Shows the system properties.``` 

*✪ Command:* ```.tagadmin```
*➢ Description:* ```Tags group admins.``` 

*✪ Command:* ```.tblend ```
*➢ Description:* ```Applies the selected TBlend effect to videos.``` 

*✪ Command:* ```.txttoimg```
*➢ Description:* ```Shows textmaker tools with unlimited access.``` 

*✪ Command:* ```.theri ```
*⟳ Description:* ```To remove members when they use bad language``` 
*⌨️ Example:* ```.theri no / yes```

*✪ Command:* ```.a ```
*➢ Description:* ```Converts audio to sound recording.``` 

*✪ Command:* ```.unvoice```
*➢ Description:* ```Converts audio to sound recording.``` 

*✪ Command:* ```.update```
*➢ Description:* ```Checks the update.``` 

*✪ Command:* ```.update now```
*➢ Description:* ```It makes updates.``` 

*✪ Command:* ```.voicy```
*➢ Description:* ```It converts audio to text.``` 

*✪ Command:* ```.wallpaper```
*➢ Description:* ```It sends high resolution wallpapers.``` 

*✪ Command:* ```.wame ```
*➢ Description:* ```Get a link to the user chat.``` 

*✪ Command:* ```.weather ```
*➢ Description:* ```Shows the weather.``` 

*✪ Command:* ```.speedtest```
*➢ Description:* ```Measures Download and Upload speed.``` 

*✪ Command:* ```.ping```
*➢ Description:* ```Measures your ping.``` 

*✪ Command:* ```.short ```
*➢ Description:* ```Shorten the long link.``` 

*✪ Command:* ```.calc ```
*➢ Description:* ```Performs simple math operations.``` 

*✪ Command:* ```.whois```
*➢ Description:* ```Displays metadata data of group or person.``` 


`}) 

}));
