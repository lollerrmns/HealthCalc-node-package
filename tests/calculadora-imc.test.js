const { CalculadoraIMC, ValueException } = require('../lib/index');

describe('Testes da Calculadora de IMC', () => {
  let calculadoraIMC;

  beforeEach(() => {
    calculadoraIMC = new CalculadoraIMC();
  });

  test('calcularIMC deve calcular o IMC corretamente', () => {
    expect(calculadoraIMC.calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
  });

  test('calcularIMC deve lançar uma exceção para altura inválida', () => {
    expect(() => {
      calculadoraIMC.calcularIMC(70, 0);
    }).toThrow(ValueException);
  });

  test('classificacaoIMC deve retornar "PESO NORMAL" para um IMC normal', () => {
    const imc = 22;
    expect(calculadoraIMC.classificacaoIMC(imc)).toBe('PESO NORMAL');
  });

  test('classificacaoIMC deve retornar "ABAIXO DO PESO" para um IMC baixo', () => {
    const imc = 17;
    expect(calculadoraIMC.classificacaoIMC(imc)).toBe('ABAIXO DO PESO');
  });

  test('classificacaoIMC deve retornar "OBESIDADE III" para um IMC alto', () => {
    const imc = 40;
    expect(calculadoraIMC.classificacaoIMC(imc)).toBe('OBESIDADE III')
  });
}
);
