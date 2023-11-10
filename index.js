import express from 'express'; // Importamos express

// Inicializamos express
const app = express();
const puerto = 4000

// Iniciamos servidor
app.listen(puerto, function() {
    console.log(`Aplicacion iniciada en el puerto ${puerto}`);
})



// Rutas
app.get('/', function(req, res) {
    res.send('aplicacion iniciada')
});


app.get('/', function(req, res) {

});