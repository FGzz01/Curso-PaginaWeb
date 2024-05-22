document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const backToLoginBtn = document.getElementById('back-to-login-btn');

    loginBtn.addEventListener('click', function() {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerBtn.addEventListener('click', function() {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    backToLoginBtn.addEventListener('click', function() {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Aquí iría la lógica para manejar el login
        console.log(`Login con correo: ${email}, contraseña: ${password}`);
        alert(`Login exitoso para: ${email}`);
        loginForm.reset();
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const birthday = document.getElementById('register-birthday').value;
        const adminRockwell = document.querySelector('input[name="admin-rockwell"]:checked').value;
        const firstname = document.getElementById('register-firstname').value;
        const lastname = document.getElementById('register-lastname').value;
        const email = document.getElementById('register-email').value;
        const company = document.getElementById('register-company').value;
        const partnerRockwell = document.querySelector('input[name="partner-rockwell"]:checked').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Aquí iría la lógica para manejar el registro
        console.log(`Registro con usuario: ${username}, correo: ${email}`);
        alert(`Registro exitoso para: ${username}`);
        registerForm.reset();
    });
});
