import express from 'express'; // Importamos express
import conectar from './src/database/database.js';
// import { createPool } from 'mysql2/promise';
// import conectar from './src/database/database.js';

// Inicializamos express
const app = express();
const puerto = 4000

// Iniciamos servidor
app.listen(puerto, function() {
    console.log(`Aplicacion iniciada en el puerto ${puerto}`);
})

// Archivos estaticos
app.use(express.static('./css'))
app.use(express.static('./src'))
app.use(express.static('./views'))


// Rutas
app.get('/', async function(req, res) {
    try{
        conectar();
        res.render('index');
    } catch(err){
        console.log(err.message)
    }
    
});


// app.get('/ping', async function(req, res){
//     const result = await pool.query('SELECT NOW()');
//     res.send(result[0]);
// })

