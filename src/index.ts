import  Calculadora  from './calculadora';

const calculadora = new Calculadora();

const resultadoSoma = calculadora.adicionar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoSubtracao = calculadora.subtrair(10, 7);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = calculadora.multiplicar(4, 6);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = calculadora.dividir(20, 5);
console.log(`Resultado da divisão: ${resultadoDivisao}`);