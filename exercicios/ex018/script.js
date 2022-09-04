function comeco(params) {
    let i = document.querySelector('#txtInicio')
    let f = document.querySelector('input#txtFim')
    let p = document.querySelector('input#txtPasso')
    let res = document.querySelector('div#res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = '<p>Impossivel contar!</p><br>'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let ni = Number(i.value)
        let nf = Number(f.value)
        let np = Number(p.value)
        if (np <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            np = 1
        }
        if (ni < nf) {
            // Contagem crescente:
            for (let c = ni; c < nf; c+= np) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            // Contagem regressiva:
            for (let c = ni; c >= nf; c -= np) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}