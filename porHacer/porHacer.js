const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
}

const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, err => {
        if(err)
            throw new Error('Error al escribir el archivo');
    })
}

const crear = (descripcion) => {
    cargarDB();
    const data = {
        descripcion,
        completo: false
    }

    listadoPorHacer.push(data);
    guardar();
    return 'Archivo creado con exito';
}

const getListado = (completado) => {
    cargarDB();
    let completa;
    if(completado === "false"){
        completa = false;
    }
    else if(completado === "true"){
        completa = true;
    }
    else{
        completa = undefined;
    }

    if(completa === undefined){
        return listadoPorHacer;
    }
    else{
        let b = listadoPorHacer.reduce((total, actual) => {
            if(completa === actual.completo){
                total.push(actual);
            }
            return total;
        }, []);
        return b;
    }
    
}

const actualizar = (descripcion, completo = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    
    if(index >= 0){
        listadoPorHacer[index].completo = completo;
        guardar();
        return true;
    }
    else{
        return false;
    }
    
}

const borrado = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){ 
        listadoPorHacer.splice(index, 1);
        guardar();
        return true;
    }
    else{
        return false;
    }
    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}