const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./porHacer/porHacer');

const comando = argv._[0];
let  listado;
switch(comando){
    case 'crear':
        const tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        let actu = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actu);
        break;
    case 'listar':
        /* if(argv.hasOwnProperty('completo')){
            listado = porHacer.getListado(argv.completo);
        } */
        listado = porHacer.getListado(argv.completo);  
        if(listado.length === 0){
            console.log('No hay tareas que listar');
        }
        else{
            for(let i of listado){
                console.log(colors.green('=========Por Hacer========'));
                console.log(i.descripcion);
                console.log('Estado : ', i.completo);
                console.log(colors.green('=========================='));
                console.log('\n');
            }
        }
        break;
    case 'borrar':
        let borrar = porHacer.borrado(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}