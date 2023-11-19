const { CalculadoraMacroNutrientes } = require('../lib/index');

describe('Testes da Calculadora de IMC', () => {
  let calculadoraMacroNutrientes;

  beforeEach(() => {
    calculadoraMacroNutrientes = new CalculadoraMacroNutrientes();
  });

  test('calcularMacroNutrientes deve calcular os valores de cutting', () => {
    expect(calculadoraMacroNutrientes.calcularMacroNutrientes(66,"cutting")).toStrictEqual({"carboidratos": 132, "gordura": 66, "proteinas": 132});
  });
  
  test('calcularMacroNutrientes deve calcular os valores de bulking', () => {
    expect(calculadoraMacroNutrientes.calcularMacroNutrientes(66,"bulking")).toStrictEqual({"carboidratos": 264, "gordura": 66, "proteinas": 132});
  });

  test('calcularMacroNutrientes deve calcular os valores de keep', () => {
    expect(calculadoraMacroNutrientes.calcularMacroNutrientes(66,"keep")).toStrictEqual({"carboidratos": 330, "gordura": 66, "proteinas": 132});
  });

});
