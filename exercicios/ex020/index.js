let num = [5, 8, 2, 9, 7, 3, 6]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(1)
if (pos != -1) {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
} else {
    console.log('O valor não foi encotrado')
}