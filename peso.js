const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Digite o seu peso: "));
let height = parseFloat(prompt("Digite a vossa altura: "));
let IMC
IMC = weight / (height * height)


if (IMC <= 15.99) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como abaixo do peso de grau I`)
} else if (IMC > 15.99 && IMC <= 16.99) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como abaixo do peso de grau II`)
} else if (IMC > 16.99 && IMC <= 18.49) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como abaixo do peso de grau III`)
} else if (IMC > 18.49 && IMC <= 24.99) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como peso adequado pelas medidas informadas`)
} else if (IMC > 24.99 && IMC <= 29.99) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como sobrepeso`)
} else if (IMC > 29.99 && IMC <= 34.99) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como Obesidade de grau I`)
} else if (IMC > 34.99 && IMC <= 39.99) {
    console.log(`o seu IMC  ( ${IMC} ) está categorizado como Obesidade de grau II`)
} else if (IMC > 39.99) {
    console.log(`o seu IMC ( ${IMC} ) está categorizado como Obesidade de grau III`)
}