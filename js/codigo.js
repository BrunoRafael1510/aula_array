/* let meuArray = ['Bruno', 'Pezinho', 'Biel', 23, 49];


meuArray.push("Senai")
console.table(meuArray)
meuArray.unshift("Brunin Rei Delas")
console.table(meuArray) */

//------------------------------------------------------------------------//

/* var frutas = ["Banana", "Laranja", "Maça", "Manga", "Melão", "Pera", "Melancia", "Abacaxi", "Uva", "Morango"]; */

/*  console.table(frutas)

frutas.splice(0, 2, "Macaco", "Chimpanze");
console.table(frutas)  */

//let posicao = frutas.indexOf("Melão")
/* console.log("Posicao da fruta: " + posicao)
frutas.splice(4,1,"Mamão")
console.table(frutas) */


/* frutas.sort();
console.table(frutas)
 */

//console.log("Tamanho da Matriz: " + frutas.length)


/* Criando a função com o nome SOMA */
/* function somaArray(val1,val2,val3){
    resp = val1+val2+val3
    return resp
}

let x = somaArray(300,300,400)
console.log("Resposta da soma: " + x) */

/* function media(m1, m2, m3, m4) {
    nota = (m1 + m2 + m3 + m4) / 4
    return nota
}
let x = (media)(10,4,7,8)
console.log("Sua Média final é de :" + nota.toFixed(2))
 */


/* Calcular a soma dos numeros de um array */
/* function somarArray(x) {
    let soma = 0;

    for(let a = 0; a < x.length; a++) {
        soma += x[a];
    }
    return soma;
}

let pezinho = [10, 15, 18, 20, 25, 45];
let resultado = somarArray(pezinho);

console.log("Tamanho da matriz: " + pezinho.length)
console.log("Resultado da soma: " + resultado);
 */

function somarArray(x) {
    let soma = 0;

    for (let a = 0; a < x.length; a++) {
        soma += x[a];
        media = soma/4
    }
    return media;
}

let pezinho = [10, 15, 18, 20, 25, 45];
let resultado = somarArray(pezinho);

console.log("Tamanho da matriz: " + pezinho.length)
console.log("Resultado da soma: " + resultado);
