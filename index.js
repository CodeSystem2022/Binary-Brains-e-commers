import express from 'express'; // Importamos express

// Inicializamos express
const app = express();
const puerto = 4000


// Archivos estaticos
app.use(express.static('./css'))
app.use(express.static('./src'))
app.use(express.static('./views'))


// Rutas
app.get('/', function(req, res) {
    res.render('index');
});


app.get('/ping', async function(req, res) {
    const resultado = await pool.query('SELECT NOW()')
    res.json(resultado[0])

});

// Iniciamos servidor
app.listen(puerto, function() {
    console.log(`Aplicacion iniciada en el puerto ${puerto}`);
})
