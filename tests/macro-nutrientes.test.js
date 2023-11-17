const { MacroNutrientes, ValueException } = require('../src/index');

describe('Testes da Calculadora de IMC', () => {
  let calculadoraMacroNutrientes;

  beforeEach(() => {
    calculadoraMacroNutrientes = new MacroNutrientes();
  });

  test('calcularMacroNutrientes deve calcular os valores de cutting', () => {
    expect(calculadoraMacroNutrientes.calcularMacronutrientes(66,"cutting")).toStrictEqual({"carboidratos": 132, "gordura": 66, "proteinas": 132});
  });
  test('calcularMacroNutrientes deve calcular os valores de bulking', () => {
    expect(calculadoraMacroNutrientes.calcularMacronutrientes(66,"bulking")).toStrictEqual({"carboidratos": 264, "gordura": 66, "proteinas": 132});
  });
  test('calcularMacroNutrientes deve calcular os valores de keep', () => {
    expect(calculadoraMacroNutrientes.calcularMacronutrientes(66,"keep")).toStrictEqual({"carboidratos": 330, "gordura": 66, "proteinas": 132});
  });
}
);
