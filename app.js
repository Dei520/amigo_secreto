// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Mi primer proyecto amigo secreto:3
const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById
("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco
    if (!nombre) {
        alert("debes ingresar un nombre")
        return; // Detener la ejecución si el campo está vacío
    }

    if (listaAmigos.includes(nombre)) { // Validar duplicados 
        alert("Ese nombre ya está en la lista.");
        inputAmigo.value = ""; // limpia 
        return;
    }
    listaAmigos.push(nombre);
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`; // Manera optimizada 
    inputAmigo.value = ""; // Limpiar 
    
    console.log("Antes de limpiar: ", inputAmigo.value); // Debug
    inputAmigo.value = ""; // Intento de limpieza
    console.log("Después de limpiar: ", inputAmigo.value); // Debug
}
function sortearAmigo () {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const random = Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto= listaAmigos[random]
    ulResultado.innerHTML =  `<li>El amigo secreto es:${amigoSecreto}</li>`;


}
