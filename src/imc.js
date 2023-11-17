const { ValueException } = require('./errors');
class IMC {
    /**
     * Calcula o Índice de Massa Corporal (IMC).
     *
     * @param {number} peso - Peso da pessoa em quilogramas.
     * @param {number} altura - Altura da pessoa em metros.
     * @returns {number} - O valor do IMC calculado.
     * @throws {ValueException} - Se a altura for menor ou igual a zero.
     */
    calcularIMC(peso, altura) {
      if (altura <= 0) {
        throw new ValueException('Altura Inválida');
      }
      return peso / (altura * altura);
    }
  
    /**
     * Retorna a classificação do IMC com base no valor do IMC.
     *
     * @param {number} imc - O valor do IMC calculado.
     * @returns {string} - A classificação do IMC.
     */
    retornarClassificacaoIMC(imc) {
      if (imc <= 18.5) {
        return 'ABAIXO DO PESO';
      } else if (imc <= 24.9) {
        return 'PESO NORMAL';
      } else if (imc <= 29.9) {
        return 'SOBREPESO';
      } else if (imc <= 34.9) {
        return 'OBESIDADE I';
      } else if (imc <= 39.9) {
        return 'OBESIDADE II';
      } else {
        return 'OBESIDADE III';
      }
    }
  }
  module.exports = IMC