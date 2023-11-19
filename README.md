
# HealthCalc-node: Calculadora de IMC (Índice de Massa Corporal) em Node.js
Este é um pacote Node.js simples que permite calcular o IMC e Macro Nutrientes realizado para a disciplina ***Projeto Integrado em Engenharia de Software*** do curso de pós graduação em ***Engenharia de Software*** da PUC Minas.

## Autores
 - Elias Melo
 - Lidiane Alves
 - Flaísa Carolina
 - Leonardo Garcia
 - Tiago Borges

## Requisitos
 - Node 20.9.0
 - Docker *(Opcional)*
 - Make *(Opcional)*

## Executar com Docker
Caso você não tenha o Nodejs instalado na sua máquina e queira executar através de um container docker, você pode executar o comando abaixo para ter acesso ao container com o ambiente pré configurado.
```bash
# docker-compose run -w /application healthcalc-node /bin/bash
```

### Comandos Makefile
Caso você tenha um SO compatível e o Make instalado, você pode utilizar os comandos abaixo para facilitar a utilização:
```bash
# make login // acessa o bash do container
# make build // faz o build da lib
# make test // executa os testes unitários
# make console // executa a aplicação console para testar a lib
```
Quaisquer dúvidas sobre o que cada comando make executa pode ser consulta no arquivo ***Makefile*** na raiz do projeto.

## Instalação do pacote

Para instalar o pacote, você pode usar o npm:
```bash
npm  install  healthcalc-node-package
```

## Utilização
Aqui  está  um  exemplo  de  como  você  pode  usar  este  pacote  em  seu  projeto  Node.js:

```bash
const { CalculadoraIMC, CalculadoraMacroNutrientes } = require('healthcalc-node-package');

const peso = 87;
const altura = 1.82;

const calculadoraIMC = new  CalculadoraIMC();

const imc = calculadoraIMC.calcularIMC(peso, altura);
// 26.26494384736143

const classificacaoIMC = calculadoraIMC.classificacaoIMC(imc);
// SOBREPESO

const calculadoraMacroNutrientes = new  CalculadoraMacroNutrientes();

const macroNutrientesCutting = calculadoraMacroNutrientes.calcularMacroNutrientes(peso, "cutting");
// { proteinas: 174, gordura: 87, carboidratos: 174 }

const macroNutrientesBulking = calculadoraMacroNutrientes.calcularMacroNutrientes(peso, "bulking");
// { proteinas: 174, gordura: 87, carboidratos: 348}

const macroNutrientesKeep = calculadoraMacroNutrientes.calcularMacroNutrientes(peso, "keep");
// { proteinas: 174, gordura: 87, carboidratos: 435}
```
