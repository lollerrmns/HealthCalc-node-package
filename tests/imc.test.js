const { IMC, ValueException } = require('../src/index');

describe('Testes da Calculadora de IMC', () => {
  let calculadoraIMC;

  beforeEach(() => {
    calculadoraIMC = new IMC();
  });

  test('calcularIMC deve calcular o IMC corretamente', () => {
    expect(calculadoraIMC.calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
  });

  test('calcularIMC deve lançar uma exceção para altura inválida', () => {
    expect(() => {
      calculadoraIMC.calcularIMC(70, 0);
    }).toThrow(ValueException);
  });

  test('retornarClassificacaoIMC deve retornar "PESO NORMAL" para um IMC normal', () => {
    const imc = 22;
    expect(calculadoraIMC.retornarClassificacaoIMC(imc)).toBe('PESO NORMAL');
  });

  test('retornarClassificacaoIMC deve retornar "ABAIXO DO PESO" para um IMC baixo', () => {
    const imc = 17;
    expect(calculadoraIMC.retornarClassificacaoIMC(imc)).toBe('ABAIXO DO PESO');
  });

  test('retornarClassificacaoIMC deve retornar "OBESIDADE III" para um IMC alto', () => {
    const imc = 40;
    expect(calculadoraIMC.retornarClassificacaoIMC(imc)).toBe('OBESIDADE III')
  });
}
);
