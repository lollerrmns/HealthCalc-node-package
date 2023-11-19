const readline = require('readline');
const { CalculadoraIMC, CalculadoraMacroNutrientes } = require('healtcalc-node-package');

const main = (peso, altura) => {
  const calculadoraIMC = new CalculadoraIMC();

  const imc = calculadoraIMC.calcularIMC(peso, altura);
  const classificacaoIMC = calculadoraIMC.classificacaoIMC(imc);

  const calculadoraMacroNutrientes = new CalculadoraMacroNutrientes();

  const macroNutrientesCutting = calculadoraMacroNutrientes.calcularMacroNutrientes(peso, "cutting");
  const macroNutrientesBulking = calculadoraMacroNutrientes.calcularMacroNutrientes(peso, "bulking");
  const macroNutrientesKeep = calculadoraMacroNutrientes.calcularMacroNutrientes(peso, "keep");

  console.log(`Seu IMC é: ${imc}`);
  console.log(`Sua classificação é: ${classificacaoIMC}`);
  console.log('--------------');
  console.log(`Se seu objetivo cutting é: ${macroNutrientesCutting.proteinas}g de proteínas, ${macroNutrientesCutting.gordura}g de gordura, ${macroNutrientesCutting.carboidratos} de carboidratos`);
  console.log(`Se seu objetivo bulking é: ${macroNutrientesBulking.proteinas}g de proteínas, ${macroNutrientesBulking.gordura}g de gordura, ${macroNutrientesBulking.carboidratos} de carboidratos`);
  console.log(`Se seu objetivo keep é: ${macroNutrientesKeep.proteinas}g de proteínas, ${macroNutrientesKeep.gordura}g de gordura, ${macroNutrientesKeep.carboidratos} de carboidratos`);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu peso em kilos? ', (peso) => {
  rl.question('Qual a sua altura em metros? ', (altura) => {
    rl.close();
    main(peso, altura);
  });
});
