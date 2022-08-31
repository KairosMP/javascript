function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/garoto.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/garota.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}