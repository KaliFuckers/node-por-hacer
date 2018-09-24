const descripcion = {
    alias: 'd',
    demand: true
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {descripcion})
    .command('actualizar', 'actualiza un elemento por hacer', {descripcion,completado})
    .command('borrar', 'Borrar un elemento', {descripcion})
    .command('listar', 'Ver todos los elementos o ver uno en particular', {
        completo:{
            alias: 'c',
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}