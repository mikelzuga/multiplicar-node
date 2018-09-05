//requires
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('---------------------------'.white);
    console.log(`--------Tabla del ${base}--------`.white);
    console.log('---------------------------'.white);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`)
    }
};

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`'${base}' no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`.white);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}