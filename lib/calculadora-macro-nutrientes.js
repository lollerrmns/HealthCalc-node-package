class CalculadoraMacroNutrientes {
  
  calcularMacroNutrientes(peso, objetivoFisico) {
    const resultado = {};

    switch(objetivoFisico) {
      case "cutting":
        resultado.proteinas = 2.0 * peso;
        resultado.gordura = 1.0 * peso;
        resultado.carboidratos = 2.0 * peso;
        break;
      case "bulking":
        resultado.proteinas = 2.0 * peso;
        resultado.gordura = 1.0 * peso;
        resultado.carboidratos = 4.0 * peso;
        break;
      case "keep":
        resultado.proteinas = 2.0 * peso;
        resultado.gordura = 1.0 * peso;
        resultado.carboidratos = 5.0 * peso;
        break;
    }

    return resultado;
  }

}

module.exports = CalculadoraMacroNutrientes;
