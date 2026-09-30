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
    let genero;

    while (true) {
        genero = String(prompt("Digite o gênero (M/F):")).trim().toUpperCase();

        if (genero === "M" || genero === "F") {
            break;
        }

        alert("Gênero inválido. Use apenas M ou F.");
    }

    let altura = parseFloat(prompt("Digite a altura em metros (ex.: 1.75):"));

    if (isNaN(altura) || altura <= 0) {
        alert("Altura inválida. Digite um valor maior que zero.");
        return;
    }

    let pesoIdeal;

    switch (genero) {
        case "M":
            pesoIdeal = (72.7 * altura) - 58;
            alert(`O peso ideal para um homem com altura ${altura.toFixed(2)} m é ${pesoIdeal.toFixed(2)} kg.`);
            break;
        case "F":
            pesoIdeal = (62.1 * altura) - 44.7;
            alert(`O peso ideal para uma mulher com altura ${altura.toFixed(2)} m é ${pesoIdeal.toFixed(2)} kg.`);
            break;
    }
}

function descobrirImc() {
    let peso = Number(prompt("Digite o peso em kg:"));
    let altura = Number(prompt("Digite a altura em metros (ex.: 1.75):"));

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`);
    } else if (imc < 25) {
        alert(`Seu IMC é ${imc.toFixed(2)}. Seu peso está normal.`);
    } else if (imc < 30) {
        let pesoIdeal25 = 25 * (altura * altura);
        let quilosParaFicarNoSobrepeso = peso - pesoIdeal25;

        alert(`Seu IMC é ${imc.toFixed(2)}. Você está em sobrepeso. Para chegar ao limite do sobrepeso, você precisa perder ${quilosParaFicarNoSobrepeso.toFixed(2)} kg.`);
    } else if (imc < 40) {
        let pesoIdeal30 = 30 * (altura * altura);
        let quilosParaChegarEm30 = peso - pesoIdeal30;

        alert(`Seu IMC é ${imc.toFixed(2)}. Você está obeso. Para chegar em 30, você precisa perder ${quilosParaChegarEm30.toFixed(2)} kg.`);
    } else {
        let pesoIdeal30 = 30 * (altura * altura);
        let quilosParaChegarEm30 = peso - pesoIdeal30;

        alert(`Seu IMC é ${imc.toFixed(2)}. Você está em obesidade grave. Para chegar em 30, você precisa perder ${quilosParaChegarEm30.toFixed(2)} kg.`);
    }
}

function verDesconto() {
    let preco = Number(prompt("Digite o valor do produto:"));
    let codigo = parseInt(prompt(`Digite o código do meio de pagamento:
        1 - À vista em dinheiro ou cheque (10% de desconto)
        2 - À vista no cartão de crédito (15% de desconto)
        3 - Em duas vezes, preço normal de etiqueta sem juros
        4 - Em duas vezes, preço normal de etiqueta com 10% de juros`));

    switch (codigo) {
        case 1:
            preco = preco * 0.9;
            break;
        case 2:
            preco = preco * 0.85;
            break;
        case 3:
            preco = preco;
            break;
        case 4:
            preco = preco * 1.1;
            break;
        default:
            alert("Código de pagamento inválido.");
            return;
    }

    alert(`O valor a pagar é: R$ ${preco.toFixed(2)}`);
}

function verificarMedia() {
    let numeroAluno = parseInt(prompt("Digite o número de identificação do aluno:"));
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));
    let conceito;
    const mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;
    switch (true) {
        case (mediaAproveitamento >= 90):
            conceito = 'A';
            break;
        case (mediaAproveitamento >= 75 && mediaAproveitamento < 90):
            conceito = 'B';
            break;
        case (mediaAproveitamento >= 60 && mediaAproveitamento < 75):
            conceito = 'C';
            break;
        case (mediaAproveitamento >= 40 && mediaAproveitamento < 60):
            conceito = 'D';
            break;
        case (mediaAproveitamento < 40):
            conceito = 'E';
            break;
        default:
            alert(`Aluno: ${numeroAluno}\nMédia de Aproveitamento: ${mediaAproveitamento.toFixed(2)}\nConceito: E\nSituação: REPROVADO`);
            return;
    }
     let resultado = ['A', 'B', 'C'].includes(conceito) ? "Aprovado" : "Reprovado";

        alert(`Aluno: ${numeroAluno}
        Notas:
        1º - verificação: ${nota1},
        2º - verificação: ${nota2},
        3º - verificação: ${nota3}
        Média dos Exercícios: ${mediaExercicios}
        Média de Aproveitamento: ${mediaAproveitamento.toFixed(2)}
        Conceito: ${conceito}
        Situação: ${resultado}`);
}
