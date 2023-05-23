// Esto es para enviar el correo a la direccion desde el formulario
const btnEnvio = document.getElementById('sendEmail');
 
btnEnvio.addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:salguillermo69@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${name}%0ACorreo%3A${email}%0AMensaje%3A${message}`;

    formReset.reset();
     
});

