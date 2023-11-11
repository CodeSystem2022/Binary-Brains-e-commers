// import mysql from 'mysql';
import { createPool } from 'mysql2/promise';
import mysql2 from 'mysql2';

// Paso los parametros para conectarme
// Objeto de conexion

const conecction = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'ecommersBB',
    port:3307,
})

const conectar = () => {
    conecction.connect(error => {
        if (error) throw error;
        console.log('Connection Done');
    })
}

export default conectar