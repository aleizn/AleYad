let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = `⌜ Aleizn-MD ⌟  

Hola Humano

□ Creador: Aleizn
□ Numero del creador: wa.me/51992621601
□ Yape: 914079837
□ 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼:https://www.instagram.com/ale.izn_20/
    
□ COMO COMPRAR EL BOT
wa.me/51992621601

◉ INFO DEL USUARIO
□ 🙌 Registrado: ❌ #verificar
□ 🎟️ Premium: ❌ #pase premium
□ 🔰 Mi estado: #miestado || Estado no asignado
□ 🎖️ Nivel: 0
□ 💎 Diamantes: 8
□ 👾 GeriCoins: 200
□ 🪙 Tokens: 1
□ 🧰 Experiencia: 324
□ ⚓ Rango: NOVATO(A) III 🪤
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
┌───⊷ INFO DEL BOT
┊□ .infobot
┊□ .grupos
┊□ .instalarbot
┊□️ .menu2
┊□ .estado
┊□ .sc
┊□ .ping
┊□ Bot
┊□ ¿Qué es un Bot?
┊□ Términos y condiciones
└─────────────

┌───⊷ UNER UN BOT A TU GRUPO
┆ 🤖 .join link del grupo 
┆ 🤖 .botemporal link de grupo
└─────────────

┌───⊷ SERBOT & JADIBOT
┆ 🤖 .serbot
┆ 🤖 .stop
┆ 🤖 .bots
└─────────────

┌───⊷ JUEGOS
┆ conando para la diversión del tu Grupos
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 🕹 .mates <noob / easy / medium / hard / extreme /impossible /impossible2>
┆ ඬ⃟ 🕹️ .ppt <papel / tijera /piedra>
┆ ඬ⃟ ️🕹 .prostituto <nombre / @tag>
┆ ඬ⃟ 🕹️ .prostituta <nombre / @tag>
┆ ඬ⃟ 🕹️ .gay2 <nombre / @tag>
┆ ඬ⃟ 🕹️ .lesbiana <nombre / @tag>
┆ ඬ⃟ 🕹 .pajero <nombre / @tag>
┆ ඬ⃟ 🕹 .pajera <nombre / @tag>
┆ ඬ⃟ 🕹️ .puto <nombre / @tag>
┆ ඬ⃟ 🕹️ .puta <nombre / @tag>
┆ ඬ⃟ 🕹️ .manco <nombre / @tag>
┆ ඬ⃟ 🕹️ .manca <nombre / @tag>
┆ ඬ⃟ 🕹️ .rata <nombre / @tag>
┆ ඬ⃟ 🕹️ .love <nombre / @tag>
┆ ඬ⃟ 🕹️ .doxear <nombre / @tag>
┆ ඬ⃟ 🕹 .pregunta <texto>
┆ ඬ⃟ 🕹️ .suitpvp <@tag>
┆ ඬ⃟ 🕹️ .slot <apuesta>
┆ ඬ⃟ 🕹️ .ttt <nombre sala>
┆ ඬ⃟ 🕹️ .delttt
┆ ඬ⃟ 🕹️ .simi <texto>
┆ ඬ⃟ 🕹️ .top <texto>
┆ ඬ⃟ 🕹️ .topotakus
┆ ඬ⃟🕹️️ .top10gays
┆ ඬ⃟🕹️️ .toplind@s
┆ ඬ⃟🕹️️ .topput@s
┆ ඬ⃟🕹️️ .toppajer@s
┆ ඬ⃟🕹️️ .topotakus
┆ ඬ⃟🕹️️ .topintegrantes
┆ ඬ⃟🕹️️ .toplagrasa
┆ ඬ⃟🕹️️ .toppanafrescos
┆ ඬ⃟🕹️ .topshiposters
┆ ඬ⃟🕹️️ .toppajeros
┆ ඬ⃟🕹️️ .toplind@s
┆ ඬ⃟🕹️️ .topfamosos
┆ ඬ⃟🕹️️ _.topsoltero
┆ ඬ⃟🕹️️ .topparejas
┆ ඬ⃟ 🕹️ .formarpareja
┆ ඬ⃟ 🕹️ .verdad
┆ ඬ⃟ 🕹️ .reto
┆ ඬ⃟ 🕹️ .cancion
┆ ඬ⃟ 🕹️ .pista
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 💞 𝙋𝙖𝙧𝙚𝙟𝙖𝙨
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ Declarate con alguien
┆ para que sean Parejas!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ ❤️➺ .listaparejas
┆ ඬ⃟ ❤️➺ .mipareja
┆ ඬ⃟ ❤️➺ .pareja @tag
┆ ඬ⃟ ❤️➺ .aceptar @tag
┆ ඬ⃟ ❤️➺ .rechazar @tag
┆ ඬ⃟ ❤️➺ .terminar @tag
└─────────────

┌───⊷ NUMERO DEL CREADOR
┆ඬ⃟ 🤖 .owner
└─────────────

┌───⊷ ACTIVA O DESACTIVAR
┆ Configura si eres Propietario(a) y/o
┆ Admin!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ඬ⃟ ☑️ .enable
└─────────────

┌───⊷ REPORTA COMANDO CON ERRORES
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ Reporta cualquier comando que falle para poder solucionarlo
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ඬ⃟ 🚫 .reporte <texto>
└─────────────

┌───⊷ SER PREMIUM
┆ Convierte en un(a)
┆ Usuario(a) Premium!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ඬ⃟ 🎟️ .listapremium
┆ඬ⃟ 🎟️ .pase premium
┆ඬ⃟ 🎟️ .pass premium
└─────────────

┌───⊷ DESCARGAS
┆ ඬ⃟ 📥 .play <texto>
┆ ඬ⃟ 📥 .play.1 <texto>
┆ ඬ⃟ 📥 .play.2 <texto>
┆ ඬ⃟ 📥 .playdoc <texto>
┆ ඬ⃟ 📥 .playlist <texto>
┆ ඬ⃟ 📥 .playlist2 <texto>
┆ ඬ⃟ 📥 .spotify <texto>
┆ ඬ⃟ 📥 .tiktok <enlace / link / url>
┆ ඬ⃟ 📥 .instagram <enlace / link / url>
┆ ඬ⃟ 📥 .mediafire <enlace / link / url>
┆ ඬ⃟ 📥 .instagram <enlace / link / url>
┆ ඬ⃟ 📥 .gitclone <enlace / link / url>
┆ ඬ⃟ 📥 .gdrive <enlace / link / url>
┆ ඬ⃟ 📥 .xnxxdl <enlace / link / url>
┆ ඬ⃟ 📥 .xvideosdl <enlace / link / url>
┆ ඬ⃟ 📥 .twitter <enlace / link / url>
┆ ඬ⃟ 📥 .fb <enlace / link / url>
┆ ඬ⃟ 📥 .fb2 <enlace / link / url>
┆ ඬ⃟ 📥 .fb3 <enlace / link / url>
┆ ඬ⃟ 📥 .fb4 <enlace / link / url>
┆ ඬ⃟ 📥 .fb5 <enlace / link / url>
┆ ඬ⃟ 📥 .ytmp3 <enlace / link / url>
┆ ඬ⃟ 📥 .ytmp4 <enlace / link / url>
┆ ඬ⃟ 📥 .ytmp3doc <enlace / link / url>
┆ ඬ⃟ 📥 .ytmp4doc <enlace / link / url>
┆ ඬ⃟ 📥 .stickerpack <enlace / link / url>
┆ ඬ⃟ 📥 .stickerly <texto>
┆ ඬ⃟ 📥 .ringtone <texto>
┆ ඬ⃟ 📥 .soundcloud <texto>
┆ ඬ⃟ 📥 .imagen <texto>
┆ ඬ⃟ 📥 .pinteret <texto>
┆ ඬ⃟ 📥 .wallpaper <texto>
┆ ඬ⃟ 📥 .wallpaper2 <texto>
┆ ඬ⃟ 📥 .pptiktok <nombre de usuario>
┆ ඬ⃟ 📥 .igstalk <nombre de usuario>
┆ ඬ⃟ 📥 .igstory <nombre de usuario>
┆ ඬ⃟ 📥 .tiktokstalk <username>
└─────────────

┌───⊷ GRUPOS
┆ Mejora tú Grupo con GeriPium
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 💎 .add <numero>
┆ ඬ⃟ 💎 .kick <@tag>
┆ ඬ⃟ 💎 .grupo <abrir / cerrar>
┆ ඬ⃟ 💎 .grouptime <opcion> <tiempo>
┆ ඬ⃟ 💎 .promote <@tag>
┆ ඬ⃟ 💎 .demote <@tag>
┆ ඬ⃟ 💎 admins <texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┆ ඬ⃟ 💎 .demote <@tag>
┆ ඬ⃟ 💎 .infogroup
┆ ඬ⃟ 💎 .resetlink
┆ ඬ⃟ 💎 .link
┆ ඬ⃟ 💎 .setname <texto>
┆ ඬ⃟ 💎 .setdesc <texto>
┆ ඬ⃟ 💎 .invocar <texto>
┆ ඬ⃟ 💎 .setwelcome <texto>
┆ ඬ⃟ 💎 .setbye <texto>
┆ ඬ⃟ 💎 .hidetag <texto>
┆ ඬ⃟ 💎 .warn <@tag>
┆ ඬ⃟ 💎 .unwarn <@tag>
┆ ඬ⃟ 💎 .listwarn
┆ ඬ⃟ 💎 .fantasmas
┆ ඬ⃟ 💎 .destraba
┆ ඬ⃟ 💎 .setpp <imagen>
└─────────────

┌───⊷ CONVERTIDORES
┆ Convierte sticker en imagen!!
┆ Crea enlace de archivos!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 🧧 .togifaud <video>
┆ ඬ⃟ 🧧 _.robar texto
┆ ඬ⃟ 🧧 _.wm texto
┆ ඬ⃟ 🧧 .toimg <sticker>
┆ ඬ⃟ 🧧 .tomp3 <video>
┆ ඬ⃟ 🧧 .tomp3 <nota de voz>
┆ ඬ⃟ 🧧 .toptt <video / audio>
┆ ඬ⃟ 🧧 .tovideo <sticker>
┆ ඬ⃟ 🧧 .tourl <video / imagen / audio>
┆ ඬ⃟ 🧧 .tts es <texto>
└─────────────

┌───⊷ EFECTOS Y LOGOS
┆ Crea Logos o personaliza
┆ la información del Logo!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 🖍️ .mensajefalso <nombre|mensaje>
┆ ඬ⃟ 🖍️ .phmaker <opcion> <imagen>
┆ ඬ⃟ 🖍️ .logos <efecto> <texto>
┆ ඬ⃟ 🖍️ .logochristmas <texto>
┆ ඬ⃟ 🖍️ .logocorazon <texto>
┆ ඬ⃟ 🖍️ .ytcomment <texto>
┆ ඬ⃟ 🖍️ .hornycard <@tag>
┆ ඬ⃟ 🖍️ .simpcard <@tag>
┆ ඬ⃟ 🖍️ .lolice <@tag>
┆ ඬ⃟ 🖍️ .itssostupid
┆ ඬ⃟ 🖍️ .pixelar
┆ ඬ⃟ 🖍️ .blur
└─────────────

┌───⊷ FRASES Y TEXTOS
┆ Enamora a tu enamorada/o
┆ con esta frases/piropo uwu
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 🥀 .piropo
┆ ඬ⃟ 🥀 .consejo
┆ ඬ⃟ 🥀 .fraseromantica
└─────────────

┌───⊷ RANDOM
┆ ඬ⃟ 👾 .kpop <blackpink / exo / bts>
┆ ඬ⃟ 👾 .cristianoronaldo
┆ ඬ⃟ 👾 .messi
┆ ඬ⃟ 👾 .meme
┆ ඬ⃟ 👾 .itzy
┆ ඬ⃟ 👾 .blackpink
┆ ඬ⃟ 👾 .lolivid
┆ ඬ⃟ 👾 .loli
┆ ඬ⃟ 👾 .navidad
┆ ඬ⃟ 👾 .ppcouple
┆ ඬ⃟ 👾 .wpmontaña
┆ ඬ⃟ 👾 .pubg
┆ ඬ⃟ 👾 .wpgaming
┆ ඬ⃟ 👾 .wpaesthetic
┆ ඬ⃟ 👾 .wpaesthetic2
┆ ඬ⃟ 👾 .wprandom
┆ ඬ⃟ 👾 .wallhp
┆ ඬ⃟ 👾 .wpvehiculo
┆ ඬ⃟ 👾 .wpmoto
┆ ඬ⃟ 👾 .coffee
┆ ඬ⃟ 👾 .pentol
┆ ඬ⃟ 👾 .caricatura
┆ ඬ⃟ 👾 .ciberespacio
┆ ඬ⃟ 👾 .technology
┆ ඬ⃟ 👾 .doraemon
┆ ඬ⃟ 👾 .hacker
┆ ඬ⃟ 👾 .planeta
┆ ඬ⃟ 👾 .randomprofile
┆ ඬ⃟ 👾 .neko
┆ ඬ⃟ 👾 .waifu
┆ ඬ⃟ 👾 .akira
┆ ඬ⃟ 👾 .akiyama
┆ ඬ⃟ 👾 .anna
┆ ඬ⃟ 👾 .asuna
┆ ඬ⃟ 👾 .ayuzawa
┆ ඬ⃟ 👾 .boruto
┆ ඬ⃟ 👾 .chiho
┆ ඬ⃟ 👾 .chitoge
┆ ඬ⃟ 👾 .deidara
┆ ඬ⃟ 👾 .erza
┆ ඬ⃟ 👾 .elaina
┆ ඬ⃟ 👾 .eba
┆ ඬ⃟ 👾 .emilia
┆ ඬ⃟ 👾 .hestia
┆ ඬ⃟ 👾 .hinata
┆ ඬ⃟ 👾 .inori
┆ ඬ⃟ 👾 .isuzu
┆ ඬ⃟ 👾 .itachi
┆ ඬ⃟ 👾 .itori
┆ ඬ⃟ 👾 .kaga
┆ ඬ⃟ 👾 .kagura
┆ ඬ⃟ 👾 .kaori
┆ ඬ⃟ 👾 .keneki
┆ ඬ⃟ 👾 .kotori
┆ ඬ⃟ 👾 .kurumi
┆ ඬ⃟ 👾 .madara
┆ ඬ⃟ 👾 .mikasa
┆ ඬ⃟ 👾 .miku
┆ ඬ⃟ 👾 .minato
┆ ඬ⃟ 👾 .naruto
┆ ඬ⃟ 👾 .nezuko
┆ ඬ⃟ 👾 .sagiri
┆ ඬ⃟ 👾 .sasuke
┆ ඬ⃟ 👾 .sakura
┆ ඬ⃟ 👾 .cosplay
└─────────────

┌───⊷ COMANDO +18
┆ Usar bajo su responsabilidad
┆ Nota: no sea pajero
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟🔞 .hornymenu
└─────────────

┌───⊷ EFECTOS PARA NOTAS DE VOZ/AUDIOS
┆ Realiza Modificaciones
┆ al Audio o Nota de Voz!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟🎤 .audioefectomenu
└─────────────

┌───⊷ AUDIOS
┆ Visita el Menú de Audios!!
┆ Disfruta de una Gran Variedad
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟🔊 .menu2
┆ ඬ⃟🔊 .audios
└─────────────

┌───⊷ CHATS ANONIMO
┆ ¡Escribe con Alguien 
┆ de forma Anónima! 
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 📳 .start
┆ ඬ⃟ 📳 .next
┆ ඬ⃟ 📳 .leave
└─────────────

┌───⊷ BUSCADORES
┆ Busca lo que quieres con el Bot!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 🔍 .stickersearch <texto>
┆ ඬ⃟ 🔍 .stickersearch2 <texto>
┆ ඬ⃟ 🔍 .xnxxsearch <texto>
┆ ඬ⃟ 🔍 .animeinfo <texto>
┆ ඬ⃟ 🔍 .google <texto>
┆ ඬ⃟ 🔍 .letra <texto>
┆ ඬ⃟ 🔍 .wikipedia <texto>
┆ ඬ⃟ 🔍 .ytsearch <texto>
┆ ඬ⃟ 🔍 .apkdone <texto>
┆ ඬ⃟ 🔍 .apkgoogle <texto>
┆ ඬ⃟ 🔍 .apkmody <texto>
┆ ඬ⃟ 🔍 .apkshub <texto>
┆ ඬ⃟ 🔍 .happymod <texto>
┆ ඬ⃟ 🔍 .hostapk <texto>
┆ ඬ⃟ 🔍 .revdl <texto>
┆ ඬ⃟ 🔍 .toraccino <texto>
┆ ඬ⃟ 🔍 .uapkpro <texto>
┆ ඬ⃟ 🔍 .playstore <texto>
└─────────────

┌───⊷ HERRAMIENTAS
┆ ඬ⃟ 🛠️ .spamwa <numero|texto|cantidad>
┆ ඬ⃟ 🛠️ .tamaño <cantidad> <imagen / video>
┆ ඬ⃟ 🛠️ .clima <país> <ciudad>
┆ ඬ⃟ 🛠️ .encuesta <texto1|texto2...>
┆ ඬ⃟ 🛠️ .afk <motivo>
┆ ඬ⃟ 🛠️ .ocr <responde a imagen>
┆ ඬ⃟ 🛠️ .acortar <enlace / link / url>
┆ ඬ⃟ 🛠️ .calc <operacion math>
┆ ඬ⃟ 🛠️ .del <mensaje>
┆ ඬ⃟ 🛠️ .whatmusic <audio>
┆ ඬ⃟ 🛠️ .readqr <imagen (QR)>
┆ ඬ⃟ 🛠️ .qrcode <texto>
┆ ඬ⃟ 🛠️ .readmore <texto1| texto2>
┆ ඬ⃟ 🛠️ .styletext <texto>
┆ ඬ⃟ 🛠️ .traducir <texto>
┆ ඬ⃟ 🛠️ .zoom <texto>
┆ ඬ⃟ 🛠️ .nowa <numero>
┆ ඬ⃟ 🛠️ .horario
└─────────────

┌───⊷ RPG - LIMITES - ECONÓMIAS
┆ Compra, Adquiere Recuersos
┆ Mejora Tú Nivel y Rango!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 💵 .verificar
┆ ඬ⃟ 💵 .unreg <numero de serie>
┆ ඬ⃟ 💵 .claim
┆ ඬ⃟ 💵 .lb
┆ ඬ⃟ 💵 .levelup
┆ ඬ⃟ 💵 .perfil
┆ ඬ⃟ 💵 .minar
┆ ඬ⃟ 💵 .buy
┆ ඬ⃟ 💵 .balance
┆ ඬ⃟ 💵 .myns
┆ ඬ⃟ 💵 .work
┆ ඬ⃟ 💵 .buyall
┆ ඬ⃟ 💵 .transfer <tipo> <cantidad> <@tag>
└─────────────

┌───⊷ TOP EN LOLIBOT-MD
┆ Averigua en que Top te encuentras!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🏆➺ .top | lb | leaderboard
└─────────────

┌───⊷ STICKERS
┆ Realiza stickers o crea
┆ stickers con filtros!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 👽 .sticker <responder a imagen o video>
┆ ඬ⃟ 👽 .sticker <enlace / link / url>
┆ ඬ⃟ 👽 .s <responder a imagen o video>
┆ ඬ⃟ 👽 .s <enlace / link / url>
┆ ඬ⃟ 👽 .sfull <imagen o video>
┆ ඬ⃟ 👽 .emojimix <emoji 1>&<emoji 2>
┆ ඬ⃟ 👽 .scircle <imagen>
┆ ඬ⃟ 👽 .sremovebg <imagen>
┆ ඬ⃟ 👽 .semoji <tipo> <emoji>
┆ ඬ⃟ 👽 .attp <texto>
┆ ඬ⃟ 👽 .attp2 <texto>
┆ ඬ⃟ 👽 .attp3 <texto>
┆ ඬ⃟ 👽 .ttp <texto>
┆ ඬ⃟ 👽 .ttp2 <texto>
┆ ඬ⃟ 👽 .ttp3 <texto>
┆ ඬ⃟ 👽 .ttp4 <texto>
┆ ඬ⃟ 👽 .ttp5 <texto>
┆ ඬ⃟ 👽 .pat <@tag>
┆ ඬ⃟ 👽 .slap <@tag>
┆ ඬ⃟ 👽 .kiss <@tag>
┆ ඬ⃟ 👽 .dado
┆ ඬ⃟ 👽 .wm <packname> <author>
┆ ඬ⃟ 👽 .stickermarker <efecto> <imagen>
┆ ඬ⃟ 👽 .stickerfilter <efecto> <imagen>
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ STICKERS DINÁMICOS
┆ Realiza acciones con Stickers
┆ Etiquetando a alguien!!
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ඬ⃟ ⛱️ .palmaditas | pat @tag
┆ඬ⃟ ⛱️ .bofetada | slap @tag
┆ඬ⃟ ⛱️ .golpear @tag
┆ඬ⃟ ⛱️ .besar | kiss @tag
┆ඬ⃟ ⛱️ _.alimentar | food @tag
└─────────────

┌───⊷ PROPIETARIO DEL BOT
┆ Comando exclusivo para Propietario/owner del bot
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ ඬ⃟ 👑 > <funcion>
┆ ඬ⃟ 👑 => <funcion>
┆ ඬ⃟ 👑 $ <funcion>
┆ ඬ⃟ 👑 .setprefix <prefijo>
┆ ඬ⃟ 👑 .resetprefix
┆ ඬ⃟ 👑 .autoadmin
┆ ඬ⃟ 👑 .leavegc
┆ ඬ⃟ 👑 .cajafuerte
┆ ඬ⃟ 👑 .blocklist
┆ ඬ⃟ 👑 .block <@tag / numero>
┆ ඬ⃟ 👑 .unblock <@tag / numero>
┆ ඬ⃟ 👑 .enable restrict
┆ ඬ⃟ 👑 .disable restrict
┆ ඬ⃟ 👑 .enable autoread
┆ ඬ⃟ 👑 .disable autoread
┆ ඬ⃟ 👑 .enable public
┆ ඬ⃟ 👑 .disable public
┆ ඬ⃟ 👑 .enable pconly
┆ ඬ⃟ 👑 .disable pconly
┆ ඬ⃟ 👑 .enable gconly
┆ ඬ⃟ 👑 .disable gconly
┆ ඬ⃟ 👑 .enable anticall
┆ ඬ⃟ 👑 .disable anticall
┆ ඬ⃟ 👑 .enable antiprivado
┆ ඬ⃟ 👑 .disable antiprivado
┆ ඬ⃟ 👑 .msg <texto>
┆ ඬ⃟ 👑 .banchat
┆ ඬ⃟ 👑 .unbanchat
┆ ඬ⃟ 👑 .banuser <@tag>
┆ ඬ⃟ 👑 .unbanuser <@tag>
┆ ඬ⃟ 👑 .dardiamantes <@tag>
┆ ඬ⃟ 👑 .añadirxp <@tag>
┆ ඬ⃟ 👑 .banuser <@tag>
┆ ඬ⃟ 👑 .bc <texto>
┆ ඬ⃟ 👑 .bcchats <texto>
┆ ඬ⃟ 👑 .bcgc <texto>
┆ ඬ⃟ 👑 .bcbot <texto>
┆ ඬ⃟ 👑 .cleartpm
┆ ඬ⃟ 👑 .restart
┆ ඬ⃟ 👑 .update
┆ ඬ⃟ 👑 .banlist
┆ ඬ⃟ 👑 .addprem <@tag>
┆ ඬ⃟ 👑 .delprem <@tag>
┆ ඬ⃟ 👑 .listprem
┆ ඬ⃟ 👑 .listcmd
┆ ඬ⃟ 👑 .setppbot <responder a imagen>
┆ ඬ⃟ 👑 .addcmd <texto> <responder a sticker/imagen>
┆ ඬ⃟ 👑 .delcmd <responder a sticker/imagen con comando o texto asignado>
└───────────────────`
await conn.sendFile(m.chat, picture, 'gata.mp4', gata, fkontak)}
/*conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar']], fkontak, m)}*/
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu)/i
export default handler
