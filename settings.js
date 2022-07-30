//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+212608018203']
global.premium = ['+212608018203']
global.ownernomer = '+212608018203'
global.ownername = '🐦FRIDRIK BOT'
global.botname = 'frid-rik'
global.footer = 'FRIDRIK BOT'
global.ig = 'https://instagram.com/ismail_office_?igshid=YmMyMTA2M2Y='
global.region = 'MOROCCO'
global.sc = 'https://youtube.com/channel/UCtmrt1Eef3mnmkhvtL376LQ'
global.myweb = 'https://youtube.com/channel/UCtmrt1Eef3mnmkhvtL376LQ'
global.packname = 'FRIDRIK-BOT'
global.author = '🐦FRIDRIK BOT'
global.sessionName = 'YkU1UmZwZ2U='
global.prefa = ['🤩','👺','👻','🐦','🐤','🗿']
global.sp = '🤧'
global.mess = {
    success: 'تم اساط ✓',
    admin: 'هادي غي ديال الادمنات اساط!',
    botAdmin: 'البوت ادمن!',
    owner: 'فريدريڪ بوت!',
    group: 'هادي غي فالڪروبات اساط!',
    private: 'هادي غي بريفي اساط!',
    bot: 'فريدريڪ بوت',
    wait: 'تسنا واحد دقيقة...',
    error: 'غلط ! واش متأڪد داڪشي لي.ڪتبتي صحيح🤔!',
    endLimit: 'عيقتي شوية سير تا تفوت 12 ساعة ورجع',
}
    global.limitawal = {
    premium: "Infinity",
    free: "Infinity",
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
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
