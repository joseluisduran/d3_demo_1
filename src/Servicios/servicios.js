
export const userService = {
    login,
    logout
};

//Funcion de Inicio de Sesión
function login(username, password) {
    if ((username === 'test') && (password === 'test')) {
        const token = "YWNjZXNvQ29ycmVjdG8";
        localStorage.setItem('token', token);
        return Promise.resolve(token);
    } else {
        return Promise.reject("Usuario o Contraseña incorrecta");
    }

}

//Funcion Cerrado de Sesión
function logout() {
    // Elimina el localstorage y ya no se puede entrar a dashboard
    localStorage.removeItem('token');
}

