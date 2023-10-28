document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica de autenticación (puedes reemplazar esto con una llamada a una API, por ejemplo)
    if (username === 'usuario' && password === 'contraseña') {
        // Autenticación exitosa, redirigir a otra página o mostrar un mensaje de éxito
        window.location.href = 'index2.html'; // Redirige a dashboard.html después del login
    } else {
        // Mostrar mensaje de error si la autenticación falla
        document.getElementById('error-message').textContent = 'Credenciales inválidas. Por favor, inténtalo de nuevo.';
    }
});
