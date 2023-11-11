document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe directamente

    const formData = new FormData(this);

    fetch('/registro', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes hacer más cosas aquí, como mostrar un mensaje de éxito al usuario
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
        // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario
    });
});

