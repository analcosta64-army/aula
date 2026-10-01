//variáveis
//tipos de variáveis
//comando de saída de dados
//console.log("Hello world");
//alert("Olá mundo")
//typeof() : função para saber o tipo de dado.
//aritimética: soma, divisão, subtração, multivlicação.

//comando de dados
console.log("vamos calcular a sua média")
let n1 = Number(prompt("Digite sua primeira nota: "));
let n2 = Number(prompt("Digite sua segunda nota: "));
let n3 = Number(prompt("Digite sua terceira nota: "))
let n4 = Number(prompt("Digite sua quarta nota: "))
soma = n1 + n2 + n3 + n4
quantidadeDeNota= 4
resultado = soma / quantidadeDeNota
alert("A média é " + resultado);

if(resultado >= 7){
    alert("Você está aprovado!")
}else{
    alert("Você está reprovado!")
}