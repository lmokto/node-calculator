const opt = {
    base: {
      demand: true,
      alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10
    }
}

const argv = require('yargs')
  .command('listar','Imprime en consola la tabla a listar', opt)
  .command('crear','Crea la tabla a listar en un archivo', opt)
  .argv;

module.exports = {
    argv
}