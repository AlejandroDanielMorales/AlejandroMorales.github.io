
let intervalo; // Variable global para almacenar el intervalo del efecto de tipeo

function escribirEnPantalla(texto, callback) {
  clearInterval(intervalo); // Detener cualquier efecto de tipeo anterior

  let arr = texto.split("");
  let i = 0;
  intervalo = setInterval(function () {
    if (i == arr.length - 1) {
      document.getElementById("texto-descripcion").innerHTML = arr.join(""); // Establecer el texto completo
      clearInterval(intervalo);
      if (callback) {
        callback(); // Llamar a la función de devolución de llamada si se proporciona
      }
    } else {
      if (arr[i] == " ") {
        document.getElementById("texto-descripcion").innerHTML += arr[i];
        document.getElementById("texto-descripcion").innerHTML += arr[i + 1];
        i += 2;
      } else {
        document.getElementById("texto-descripcion").innerHTML += arr[i];
        i++;
      }
    }
  }, 75);
}
function escribirEnPantalla_2(texto, callback) {
  clearInterval(intervalo); // Detener cualquier efecto de tipeo anterior

  let arr = texto.split("");
  let i = 0;
  intervalo = setInterval(function () {
    if (i == arr.length - 1) {
      document.getElementById("texto-descripcion_2").innerHTML = arr.join(""); // Establecer el texto completo
      clearInterval(intervalo);
      if (callback) {
        callback(); // Llamar a la función de devolución de llamada si se proporciona
      }
    } else {
      if (arr[i] == " ") {
        document.getElementById("texto-descripcion_2").innerHTML += arr[i];
        document.getElementById("texto-descripcion_2").innerHTML += arr[i + 1];
        i += 2;
      } else {
        document.getElementById("texto-descripcion_2").innerHTML += arr[i];
        i++;
      }
    }
  }, 75);
}
function escribirSobreMi() {
  var parrafo = document.getElementById("texto-descripcion_2");
  parrafo.innerHTML = "";
  var texto = 
  '\tHola Mundo !, Soy Alejandro Morales\n' +
  '\tDe 28 años\n' +
  '\tSoy un Estudiante de  la carrera de Tecnicatura Universitaria en Programación en la \n' +
  '\tUTN Facultad Regional General Pacheco. Actualmente, me encuentro cursando mi segundo de tres \n' +
  '\taños con el objetivo de obtener el título de Técnico Universitario en Sistemas Informáticos\n' +
  '\tCon una sólida formación académica, he adquirido conocimientos fundamentales en programación,\n' +
  '\tabarcando desde los conceptos básicos hasta temas avanzados.\n' +
  '\t\n' +
  '\tConocimientos:\n' +
  '\t- Fundamentos de la programación\n' +
  '\t- Programación procedural\n' +
  '\t- Programación orientada a objetos\n' +
  '\t- Programación orientada a eventos\n' +
  '\t- Desarrollo en capas\n' +
  '\t- Diseño de interfaces\n' +
  '\t- Manejo de excepciones\n' +
  '\t- Desarrollo de programas de escritorio y web.\n' +
  '\t- Creación y manipulación de bases de datos  de Modelo relacional y normalizadas.\n'+
  '\t\n' +
  '\t- Lenguajes de programación y entornos:\n' +
'\t- - HTML | CSS | JavaScript | C# | C++ | T-SQL \n' +
'\t- - Experiencia en el framework .NET (Ado.Net, ASP.Net, Winforms, Webforms)\n' +
'\t- - SQL Server y SQL Management Studio\n';
  document.getElementById("texto-descripcion_2").textContent = escribirEnPantalla_2(texto, function () {

  });
}
function cambiarImagenes(numero) {
  var carrusel = document.getElementById('miCarousel');
  var imagenes = carrusel.querySelectorAll('.carousel-item img');
  var descripcion = document.getElementById('texto-descripcion');
  var titulo = document.getElementById('tituloProyecto');
  var auxdes = "";

  var carruselContainer = document.getElementById('carruselContainer');

  // Mostrar el carrusel y la descripción al hacer clic en un label


  carruselContainer.style.visibility = 'visible';
  descripcion.style.visibility = 'visible';


  if (numero >= 1 && numero <= 5) {
    titulo.textContent = ''; // Limpiar el título mientras se actualiza
    descripcion.textContent = ''; // Limpiar la descripción antes de comenzar el nuevo tipeo
    clearInterval(intervalo); // Detener cualquier efecto de tipeo anterior

    switch (numero) {
      case 1:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Cardjitsu Game';
        imagenes[0].setAttribute('src', 'Cardjitsu1.png');
        imagenes[1].setAttribute('src', 'Cardjitsu3.png');
        imagenes[2].setAttribute('src', 'Cardjitsu2.png');
        auxdes = "Cartjitsu fue el primer juego que programé, un juego de cartas en consola usando lenguaje C++ y librería rlutil aplicando programación procedural y utilizando solo funciones.";
        escribirEnPantalla(auxdes);
        break;
      case 2:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Nonox Game';
        imagenes[0].setAttribute('src', 'Nonox1.png');
        imagenes[1].setAttribute('src', 'Nonox2.png');
        imagenes[2].setAttribute('src', 'Nonox3.png');
        auxdes = 'Un juego tipo , buscaminas/nonograma y de memoria,Fue programado utilizando C++ , el mismo tiene 3 niveles y puntaje que perdura en disco duro.';
        escribirEnPantalla(auxdes);
        break;
      case 3:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Catalog Management';
        imagenes[0].setAttribute('src', 'cManager2.png');
        imagenes[1].setAttribute('src', 'cManager3.png');
        imagenes[2].setAttribute('src', 'cManager4.png');
        auxdes = 'Catalog Management es una aplicacion de escritorio hecho con C#, T-SQL ,Ado.net(.Net Framework), es un ABM que impacta directo en la base de datos.';
        escribirEnPantalla(auxdes);
        break;
      case 4:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Cart Web';
        imagenes[0].setAttribute('src', 'CartWeb1.jpg');
        imagenes[1].setAttribute('src', 'CartWeb2.jpg');
        imagenes[2].setAttribute('src', 'CartWeb3.jpg');
        auxdes = 'Un proyecto  webforms de compra venta de articulos el cual tiene un carrito de compras y busqueda filtrada de articulos, utilizando HTML,CSS, C#,T-SQL con libreria Boostrap y Asp.Net ';
        escribirEnPantalla(auxdes);
        break;
   
      case 5:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Airjet Web';
        imagenes[0].setAttribute('src', 'AirjetWeb1.jpg');
        imagenes[1].setAttribute('src', 'AirjetWeb2.jpg');
        imagenes[2].setAttribute('src', 'AirjetWeb3.jpg');
        auxdes = 'Proyecto webforms de sistema de reservas de vuelos privados  con registro y logueo de  usuarios cliente y empleados, utilizando HTML,CSS, C#,T-SQL con libreria Boostrap y Asp.Net ';
        escribirEnPantalla(auxdes);
        break;

      // Resto de los casos...
    }
  }
}
