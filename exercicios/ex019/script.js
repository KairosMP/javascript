function start(params) {
    let numero = window.document.querySelector('input#Number')
    let n = Number(numero)
    let res = window.document.querySelector('div#res')
    for (let index = 1; index <= 10; index++) {
        let multi = n * index
        res.insertAdjacentHTML('beforeend',multi)

        console.log(multi)
    }
}