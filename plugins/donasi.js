let handler = async m => m.reply(`
╭─「 Donasi • Terimakasih 」
│ • DANA : 08988986891
│ • GOPAY : 08281213304135
│ • OVO : 0895609803131
│ • TSEL : 6281213304135
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
