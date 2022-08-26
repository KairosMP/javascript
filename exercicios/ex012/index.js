var Agora = new Date()
var horas = Agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if (horas < 12 && horas > 6) {
    console.log('Bom Dia!')
} else if(horas <= 6) {
    console.log('Boa madrugada!')
} else if(horas <= 18) {
    console.log('Boa tarde!')
} else (
    console.log('Boa noite')
)
