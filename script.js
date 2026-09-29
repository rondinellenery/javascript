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
