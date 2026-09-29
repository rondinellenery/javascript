function somaMaior() {
    let A= Number(prompt("Digite o primeiro o valor de A:"));
    let B= Number(prompt("Digite o segundo valor de B:"));
    let C= Number(prompt("Digite o terceiro valor de C:"));
    let soma = A + B;
    if (soma < C) {
        alert(`======================
            A soma de A e B é : ${soma}
            =========================
            A: ${A}
            B: ${B}
            C: ${C}
            =========================
            `);
    } else {
        alert(`======================
           "qq é isso?!"
            =========================
            `);
    }
}

function tempoCasamento() {
   let nome = String(prompt("Digite o nome:"));
   let genero = String(prompt("Digite o gênero (M/F):")).toUpperCase();
   let estadoCivil = String(prompt("Digite o estado civil (Solteiro(a)/Casado(a)):")).toUpperCase();
console.log(genero);
console.log(estadoCivil);
console.log(nome);

   if (genero=="F" && estadoCivil=="CASADA") {
       let tempo = Number(prompt("Digite o tempo de casamento em anos:"));
       alert(`A Sra. ${nome} tem ${tempo} anos de casamento.`);
   } else {
       alert(`Não é mulher ou não é casada.`);
   }
}

function imparPar() { 
    let numero = Number(prompt("Digite um número:"));
    if (numero % 2 == 0) {
        alert(`O número ${numero} é par.`);
    } else if (numero % 2 != 0) {
        alert(`O número ${numero} é ímpar.`);
    } else {
        alert(`O número ${numero} é inválido.`);
    }
    // (num % 2 == 0) ? alert(`O número ${num} é par.`) : alert(`O número ${num} é ímpar.`);
}

function valoresIguais() {
    let A = Number(prompt("Digite o valor de A:"));
    let B = Number(prompt("Digite o valor de B:"));
    let C;
//(A === B) ?  (C = A + B, alert(`A soma de A e B é: ${C}`)) : (C = A * B, alert(`A multiplicação de A e B é: ${C}`));
if (A === B) {
    C = A + B;
    alert(`A soma de A e B é: ${C}`);
} else {
    C = A * B;
    alert(`A multiplicação de A e B é: ${C}`)
}
}

function valuePositivoNegativo() {
    let numero = Number(prompt("Digite um número positivo ou negativo:"));

    if (numero > 0) {
        let dobro = numero * 2;
        alert(`O dobro de ${numero} é: ${dobro}`);
    } else {
        let triplo = numero * 3;
        alert(`O triplo de ${numero} é: ${triplo}`);
    }
}

function valorBooleano() {
    let valor1 = Boolean(Number(prompt("Digite 1 para VERDADEIRO ou 0 para FALSO:")));
    let valor2 = Boolean(Number(prompt("Digite 1 para VERDADEIRO ou 0 para FALSO:")));

    if (valor1 === true && valor2 === true) {
        alert("Ambos os valores são VERDADEIROS.");
    } else if (valor1 === false && valor2 === false) {
        alert("Ambos os valores são FALSOS.");
    } else {
        alert("Os valores são diferentes.");
    }
}

function lerVariaveis() {
    let numero = Number(prompt("Digite um número:"));
    let resultado;

    if (numero % 2 === 0) {
        resultado = numero + 5;
        alert(`O número ${numero} é par. Resultado: ${resultado}`);
    } else {
        resultado = numero + 8;
        alert(`O número ${numero} é ímpar. Resultado: ${resultado}`);
    }
}

function ordenarDecrescente() {
    let a = Number(prompt("Digite o primeiro valor:"));
    let b = Number(prompt("Digite o segundo valor:"));
    let c = Number(prompt("Digite o terceiro valor:"));

    let numeros = [a, b, c].sort((x, y) => y - x);

    alert(`Os valores em ordem decrescente são: ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`);
}

function pesoIdeal() {
    let genero = String(prompt("Digite o gênero (M/F):")).toUpperCase();
    let altura = Number(prompt("Digite a altura em metros (ex.: 1.75):"));

    let pesoIdeal;

    if (genero === "M") {
        pesoIdeal = (72.7 * altura) - 58;
        alert(`O peso ideal para um homem com altura ${altura.toFixed(2)}m é ${pesoIdeal.toFixed(2)} kg.`);
    } else if (genero === "F") {
        pesoIdeal = (62.1 * altura) - 44.7;
        alert(`O peso ideal para uma mulher com altura ${altura.toFixed(2)}m é ${pesoIdeal.toFixed(2)} kg.`);
    } else {
        alert("Gênero inválido. Use M ou F.");
    }
}

function descobrirImc() {
    let peso = Number(prompt("Digite o peso em kg:"));
    let altura = Number(prompt("Digite a altura em metros (ex.: 1.75):"));

    if (altura <= 0) {
        alert("Altura inválida. Digite um valor maior que zero.");
        return;
    }

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`);
    } else if (imc < 25) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Seu peso está normal.`);
    } else if (imc < 30) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está em sobrepeso.`);
    } else if (imc < 40) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está obeso.`);
    } else {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está em obesidade grave.`);
    }
}

function verDesconto() {
    let valorCompra = Number(prompt("Digite o valor da compra:"));

    if (valorCompra >= 1000) {
        let desconto = valorCompra * 0.10;
        let totalComDesconto = valorCompra - desconto;
        alert(`Compra: R$ ${valorCompra.toFixed(2)}\nDesconto: R$ ${desconto.toFixed(2)}\nTotal a pagar: R$ ${totalComDesconto.toFixed(2)}`);
    } else {
        alert(`Compra: R$ ${valorCompra.toFixed(2)}\nSem desconto. Total a pagar: R$ ${valorCompra.toFixed(2)}`);
    }
}

function verificarMedia() {
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        alert(`Média: ${media.toFixed(2)}\nAluno aprovado.`);
    } else {
        alert(`Média: ${media.toFixed(2)}\nAluno reprovado.`);
    }
}