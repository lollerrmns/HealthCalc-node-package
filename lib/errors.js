class ValueException extends Error {
  constructor(mensagemDeErro) {
    super(mensagemDeErro);
    this.name = 'ValueException';
  }
}

module.exports = {
  ValueException
};
