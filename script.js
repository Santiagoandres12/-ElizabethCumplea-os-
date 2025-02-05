function mostrarInterfaz2() {

    const container = document.querySelector(".container");

    const interfaz2 = document.getElementById("interfaz2");

    // Aplicar transición de desvanecimiento

    container.style.opacity = "0"; // Desvanece la interfaz actual

    setTimeout(() => {

        container.style.display = "none"; // Oculta después de la transición

        interfaz2.style.display = "block"; // Muestra la nueva interfaz

        setTimeout(() => {

            interfaz2.style.opacity = "1"; // Aparece suavemente la nueva interfaz

        }, 50);

    }, 500); // Tiempo de desvanecimiento (en milisegundos)

}

function mostrarInterfaz3() {

    const interfaz2 = document.getElementById("interfaz2");

    const interfaz3 = document.getElementById("interfaz3");

    // Aplicar transición de desvanecimiento

    interfaz2.style.opacity = "0"; // Desvanece la interfaz actual

    setTimeout(() => {

        interfaz2.style.display = "none"; // Oculta después de la transición

        interfaz3.style.display = "block"; // Muestra la nueva interfaz

        setTimeout(() => {

            interfaz3.style.opacity = "1"; // Aparece suavemente la nueva interfaz

        }, 50);

    }, 500); // Tiempo de desvanecimiento (en milisegundos)

}

function escribirTextoLineaPorLinea(id, texto, velocidad) {

    const elemento = document.getElementById(id);

    // Verifica si ya se está escribiendo el texto para evitar duplicaciones

    if (elemento.dataset.escribiendo === "true") {

        return; // Si ya se está escribiendo, no vuelve a ejecutar

    }

    elemento.dataset.escribiendo = "true"; // Marca que está escribiendo

    elemento.innerHTML = ""; // Limpia el contenido previo

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            elemento.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escribir, velocidad);

        } else {

            elemento.dataset.escribiendo = "false"; // Marca como finalizado

        }

    }

    escribir();

}

// Ajustar el formulario para que el texto se muestre con animación

document.getElementById("formulario").addEventListener("submit", function (event) {

    event.preventDefault(); // Evita la redirección del formulario

    const mensaje = "Devido a un pequeño cambio de planes a último momento digamos que el regalo se adelanto un poquito y lo envíe de forma manual, no era mucho y te digo que tengo claro que tú te mereces mucho mas entonces me esforzaré un poco más para la próxima oportunidad que tenga. Ya aparte de todo decirte que no es de la forma que me hubiera gustado ya que tenia otros planes pero bueno igualmente a pesar de todo y que no tengo otra opción quise hacerlo de una manera distinta un poco unica y a mi estilo y espero que te guste el detalle de la pagina que lo hice con mucho cariño y amor para tí. Dudas, quejas o sugerencias en el botón de abajo a la izquierda";

    const elementoID = "mensajeEnviado";

    // Asegurar que el mensaje sea visible antes de la animación

    const mensajeElemento = document.getElementById(elementoID);

    mensajeElemento.style.display = "block";

    // Llama a la función para animar el texto

    escribirTextoLineaPorLinea(elementoID, mensaje, 50);

});

function abrirRegalo() {

    // Referencia al GIF inicial

    const gifSinAbrir = document.getElementById("gifSinAbrir");

    // Cambia el GIF al de regalo abierto

    gifSinAbrir.src = "https://i.ibb.co/2Ky0ZYf/ezgif-5-2ec6e13191.gif"; 

    // Después de 1.5 segundos, pasa a la interfaz 2

    setTimeout(() => {

        reproducirMusicaYMostrarInterfaz2();

    }, 1500);

}

function mostrarInterfaz1() {

    // Ocultar las otras interfaces

    document.getElementById("interfaz2").style.display = "none";

    document.getElementById("interfaz3").style.display = "none";

    // Restablecer configuraciones

    document.getElementById("mensajeEnviado").style.display = "none";

    document.getElementById("formulario").reset(); // Reinicia el formulario

    document.querySelector("form button").disabled = false; // Habilita el botón

    // Cambiar el GIF al estado cerrado

    const gifSinAbrir = document.getElementById("gifSinAbrir");

    gifSinAbrir.src = "https://i.ibb.co/3y6PjT4/ezgif-5-804f50d858.gif"; 

    // Mostrar la interfaz 1

    const interfaz1 = document.querySelector(".container");

    interfaz1.style.display = "block";

    interfaz1.style.opacity = "1";

}

// Detener la música cuando la página está en segundo plano

document.addEventListener("visibilitychange", function () {

    var audio = document.getElementById("background-music");

    if (document.hidden) {

        audio.pause();

    } else {

        audio.play();

    }

});

// Prevenir clic derecho en imágenes

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("contextmenu", event => {

        event.preventDefault();

    });

});

function reproducirMusicaYMostrarInterfaz2() {

    const audio = document.getElementById("background-music");

    audio.play();

    mostrarInterfaz2();

}

// Función para manejar el envío del regalo

function enviarRegalo() {

    const botonEnviar = document.querySelector("#botonEnviar");

    if (botonEnviar.disabled) return; // Evita ejecución múltiple

    botonEnviar.disabled = true;

    document.getElementById("mensajeEnviado").style.display = "block";

    escribirTextoLineaPorLinea("mensajeEnviado", "No es como quisiera, pero sí como puedo.", 50);

    setTimeout(() => {

        botonEnviar.disabled = false;

    }, 2000);

}

// Función para manejar el envío del formulario

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault(); // Previene la acción por defecto (redirección)

    var botonEnviar = document.querySelector("form button");

    botonEnviar.disabled = true; // Deshabilitar el botón

    document.getElementById("mensajeEnviado").style.display = "block"; 

    // Restaurar el botón después de 2 segundos

    setTimeout(function() {

        botonEnviar.disabled = false;

    }, 2000);

});

function mostrarInterfaz3() {

    const mensaje = document.getElementById('mensajePersonalizado');

    mensaje.classList.add('fade');

    setTimeout(function() {

        document.getElementById('interfaz2').style.display = 'none';

        document.getElementById('interfaz3').style.display = 'block';

    }, 2000);

}

// Función para mostrar la interfaz 3 desde la interfaz 2

function mostrarInterfaz3() {

    const mensaje = document.getElementById('mensajePersonalizado');

    mensaje.classList.add('desvanecer'); 

    setTimeout(() => {

        const interfaz2 = document.getElementById('interfaz2');

        interfaz2.classList.remove('mostrar');

        setTimeout(() => {

            interfaz2.style.display = 'none';

            const interfaz3 = document.getElementById('interfaz3');

            interfaz3.style.display = 'block';

            setTimeout(() => {

                interfaz3.classList.add('mostrar');

            }, 10);

        }, 1000);

    }, 2000); 

    document.getElementById("mensajePersonalizado").style.overflow = "hidden";

}