function start(params) {
    // Extraindo os valores da página:
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    // Estabelecendo as variaveis:
    if (num.value.lenght == 0) {
        window.alert("Digite um numero")
    } else {
        let n = Number(num.value)

    // Criando o mecanisnmo da tabuada:
        tab.innerHTML = ''
        for (let index = 1; index <= 10; index++) {
            let item = document.createElement('option')
            let multi = n * index 
            item.text = `${n} x ${index} = ${multi}`
            item.value = `tab${index }`
            tab.appendChild(item)
    }
    }
}