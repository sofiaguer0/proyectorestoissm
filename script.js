// Definición de usuarios (puedes inicializarlo con algunos usuarios preexistentes si lo deseas)
let users = [];

// Función para agregar un nuevo usuario a la lista
function addUser() {
    // Obtener los valores del formulario
    let userName = document.getElementById("userName").value;
    let userRole = document.getElementById("userRole").value;

    // Validar que se hayan ingresado valores
    if (userName.trim() === "" || userRole === "") {
        alert("Por favor, ingrese un nombre y seleccione un rol.");
        return;
    }

    // Crear un objeto de usuario
    let newUser = {
        name: userName,
        role: userRole
    };

    // Agregar el nuevo usuario a la lista
    users.push(newUser);

    // Limpiar los campos del formulario
    document.getElementById("userName").value = "";
    document.getElementById("userRole").value = "";

    // Actualizar la tabla de usuarios
    displayUsers();
}

// Función para mostrar los usuarios en la tabla
function displayUsers() {
    let userList = document.getElementById("userList");
    userList.innerHTML = ""; // Limpiar la lista antes de volver a agregar los usuarios

    users.forEach(user => {
        let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.role}</td>
                        <td>
                            <button onclick="removeUser('${user.name}')">Eliminar</button>
                        </td>
                    </tr>`;
        userList.innerHTML += row;
    });
}

// Función para eliminar un usuario de la lista
function removeUser(userName) {
    // Filtrar los usuarios y mantener solo aquellos cuyo nombre no coincida con el proporcionado
    users = users.filter(user => user.name !== userName);

    // Actualizar la tabla de usuarios
    displayUsers();
}

// Mostrar los usuarios al cargar la página
displayUsers();
