let valores = [8, 1 , 7 , 1, 9]

/*
for (let index = 0; index < valores.length; index++) {
    const pos = valores[index];
    console.log(`A posição ${index+1} tem o valor ${pos}`)
}
*/

for (const pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}