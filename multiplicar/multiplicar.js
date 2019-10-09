/*jshint esversion: 8 */
var colors = require('colors');
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    console.log('=========================='.red);
    console.log(`Tabla de ${ base }`.red);
    console.log('=========================='.red);
    
    for (let index = 1; index <= limite; index++) {
        var result = base * index;
        console.log(`${base} * ${ index } = ${ result }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let index = 1; index <= limite; index++) {
            var result = base * index;
            data += `${base} * ${ index } = ${ result }\n`;
        }
        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`./tablas/tabla-${base}-al-${limite}.txt`)
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}