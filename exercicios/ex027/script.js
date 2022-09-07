let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(params) {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Adicionado ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encotrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(params) {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for (const pos in valores) {
            soma += valores[pos]
        }

        for (const pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }  
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado é ${maior}</p>`
        res.innerHTML += `<p>O menor número informado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
    }
}