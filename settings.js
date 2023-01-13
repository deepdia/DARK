const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'V12', // 👉 login https://api.zeeoneofc.xyz to get apikey
}

// setting 
global.autoread = true // auto read message
global.autobio = false //auto ganti bio
global.anticall = true //anti call 
global.userRegister = false
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = english //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "Dark-Deepོ" //namabot kalian
global.ownername = "Deepdia×" //nama kalian
global.myweb = "https://sites.google.com/view/keplarstudio" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/@deepkumardutta1709" //bebas asal jan hapus
global.myweb2 = "https://sites.google.com/view/keplarstudio" //bebas
global.email = "keplarbot@gmail.com" //bebas
global.region = "India" //bebas
global.timezone = 'Asia/kolkata' //  timezone wib
global.premium = ['916291588399'] //premium user
global.owner = ["6291588399", "916291588399"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6291588399" // nomor wa kalian
global.ownernomerr = "+916291588399" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://i.imgur.com/cwPuTcp.png" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://i.imgur.com/zKwiPvx.mp4'
global.packname = '© Keplrོ' //sticker wm ubah
global.author = 'Made By Dark-Deep' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
   premium: "10000",
   free: 100
}

global.adventureRPG = 'https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg'
global.bankRPG = 'https://telegra.ph/file/ce47dca98cfdb34162abb.png'
global.bansosRPG = 'https://telegra.ph/file/646af753f38fbf7bbbccc.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/ba18a18aac022170c8056.jpg'
global.berburuRPG = 'https://telegra.ph/file/95a202f631ab7172c3f25.jpg'
global.inventoryRPG = 'https://telegra.ph/file/507395e2edbd1d740a0fd.png'
global.cooldownRPG = 'https://telegra.ph/file/5e1e191a47028d9648ffa.jpg'
global.dailyRPG = 'https://telegra.ph/file/17e857848a3afdb1c4fd8.jpg'
global.hourlyRPG = 'https://telegra.ph/file/bcabf71c0f56207d1629e.jpg'
global.kandangRPG = 'https://telegra.ph/file/89c3b3ec69d373da8f64b.jpg'
global.kolamRGP = 'https://telegra.ph/file/0bc07117c78b2c9674b7d.jpg'
global.mancingRPG = 'https://telegra.ph/file/1420d26b7f04f84993225.jpg'
global.monthlyRPG = 'https://telegra.ph/file/7eadf65b95d9f7a3ecb46.jpg'
global.weeklyRPG = 'https://telegra.ph/file/ffc85895d14db97931f0f.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: '📊',
         limit: '🎫',
         health: '❤️',
         exp: '✨',
         money: '💹',
         bank: '🏦',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🛍️',
         mythic: '🎁',
         legendary: '🗃️',
         superior: '💼',
         pet: '🔖',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         pickaxe: '⛏️',
         fishingrod: '🎣',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐴',
         cat: '🐱',
         dog: '🐶',
         fox: '🦊',
         petFood: '🍖',
         iron: '⛓️',
         gold: '🪙',
         emerald: '❇️',
         upgrader: '🧰'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
   sukses: '🤗Done',
   admin: 'This Command Can Only Be Used By Admin !',
   botAdmin: 'This command can only be used when the bot becomes admin !',
   owner: 'This command can only be used by the owner
@916291588399 !',
   group: 'This command can only be used in groups
 !',
   private: 'This command can only be used in private !',
   bot: 'Special Features for Bot Number Users',
   errtoimg: 'Sorry, Currently Not Supporting Gif Sticker !',
   wait: '⏳ Being processed',
   lockCmd: 'Feature Not Activated By Owner!',
   example1: 'Welcome @user By Group @subject Do not forget to read the rules Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
