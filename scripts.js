
let intervalo; 
let intervalo_2;
let finish = false;

function escribirEnPantalla(texto, callback) {
 
  clearInterval(intervalo); 
  finish=false;
  let arr = texto.split("");
  let i = 0;
  intervalo = setInterval(function () {
    if (i == arr.length - 1) {
      document.getElementById("texto-descripcion").innerHTML = arr.join(""); 
      clearInterval(intervalo);
      if (callback) {
        callback();
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
  clearInterval(intervalo_2);

  let arr = texto.split("");
  let i = 0;
  intervalo_2 = setInterval(function () {
    if (i == arr.length - 1) {
      document.getElementById("texto-descripcion_2").innerHTML = arr.join(""); 
      clearInterval(intervalo_2);
      if (callback) {
        callback(); 
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
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('.navbar-nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      var targetPosition = targetSection.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});

function escribirSobreMi() {
  var parrafo = document.getElementById("texto-descripcion_2");
  parrafo.innerHTML = "";
  var texto = 
  '\tHello World!, I'+"'"+'m Alejandro Morales\n' +
  '\tI am a Student of the University Technician degree in Programming at the \n' +
  '\tUTN General Pacheco Regional Faculty. Currently, I am studying my second of three years Programming  \n' +
  '\tstud with the aim of obtaining the title of University Technician in Computer Systems.\n' +
  '\tWith a solid academic background, I have acquired fundamental knowledge in programming,\n' +
  '\tranging from basic concepts to advanced topics.\n' +
  '\t\n' +
  '\tKnowledge:\n' +
  '\t- Programming Fundamentals.\n' +
  '\t- Procedural programming.\n' +
  '\t- Object-oriented programming.\n' +
  '\t- Event-oriented programming.\n' +
  '\t- Layered development.\n' +
  '\t- Interface design.\n' +
  '\t- Exception Handling and testing.\n' +
  '\t- Development of desktop and web programs.\n' +
  '\t- Creation and manipulation of relational and non-relational Model databases.\n'+
  '\t\n' +
  '\t-Programming languages ​​and work environments:\n' +
'\t- - HTML | CSS | JavaScript | Java | C# | C++ | T-SQL | MySql | MongoDB \n' +
'\t- - Experience on .NET framework (ASP.Net, Winforms, Webforms) | Node.js | React.js | Express.js\n' +
'\t- - Power BI | SQL Management Studio | MySqlWorkbrench| Git | Eclipse | VS Code | Imsomnia .\n';
  document.getElementById("texto-descripcion_2").textContent = escribirEnPantalla_2(texto, function () {

  });
}
function cambiarImagenes(numero) {
  var carrusel = document.getElementById('miCarousel');
  var imagenes = carrusel.querySelectorAll('.carousel-item img');
  var descripcion = document.getElementById('texto-descripcion');
  var titulo = document.getElementById('tituloProyecto');
  var enlace = document.getElementById("RepoLink");
  var auxdes = "";
  

  var carruselContainer = document.getElementById('carruselContainer');
  enlace.innerHTML = ' ';
  carruselContainer.style.visibility = 'visible';
  descripcion.style.visibility = 'visible';


  if (numero >= 1 && numero <= 5) {
    titulo.textContent = ''; 
    descripcion.textContent = ''; 
    clearInterval(intervalo);

    switch (numero) {
      case 1:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Cardjitsu Game';
        imagenes[0].setAttribute('src', 'Images/Cardjitsu1.png');
        imagenes[1].setAttribute('src', 'Images/Cardjitsu3.png');
        imagenes[2].setAttribute('src', 'Images/Cardjitsu2.png');
        auxdes = 'Cartjitsu was the first game I programmed at university, a console card game using the C++ language and a useful library, applying procedural programming and using only functions.The game has a series of rules and milestones similar to the card game uno.The program consists of a menu where you can find the game options, which can be Player vs PC or PC vs PC, the score, game rules and credits.';
        enlace.href = "https://github.com/AlejandroDanielMorales/The-Cardjitsu-Game"; 
        escribirEnPantalla(auxdes);
        break;
      case 2:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Nonox Game';
        imagenes[0].setAttribute('src', 'Images/Nonox1.png');
        imagenes[1].setAttribute('src', 'Images/Nonox2.png');
        imagenes[2].setAttribute('src', 'Images/Nonox3.png');
        auxdes = 'A game developed in C++ with the SFML graphics library. Nonox is a nonogram game, a "Japanese puzzle" or "griddler" which is a type of logic puzzle in which the objective is to discover a hidden image through the interpretation of numbers on a grid.The game has of 3 levels  and  "Score" section where the players scores are recorded. This game also has "Power-up s and helps that decrease the final score.';
        enlace.href = "https://github.com/AlejandroDanielMorales/The-Nonox-Game"; 
        escribirEnPantalla(auxdes);
        break;
      case 3:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Catalog Management';
        imagenes[0].setAttribute('src', 'Images/cManager2.png');
        imagenes[1].setAttribute('src', 'Images/cManager3.png');
        imagenes[2].setAttribute('src', 'Images/cManager4.png');
        auxdes = 'Catalog Management is a desktop application made with C# using ADO.Net from the .Net framework which applies object-oriented and layer-oriented programming, the program interacts with the database, giving registrations, cancellations and modifications of ,products, brands and categories, the types of articles to be managed in the database being very scalable.';
        enlace.href = "https://github.com/AlejandroDanielMorales/The-Catalog-Management"; 
        escribirEnPantalla(auxdes);
        break;
      case 4:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Cart Web';
        imagenes[0].setAttribute('src', 'Images/CartWeb1.jpg');
        imagenes[1].setAttribute('src', 'Images/CartWeb2.jpg');
        imagenes[2].setAttribute('src', 'Images/CartWeb3.jpg');
        auxdes = 'This is a web application project that we developed between three colleagues, e-commerce type, where the application communicates with the database and reflects all the products in it. The application is able to place a purchase order, whether it is 1 or more products, the same or different, regret purchases and send automatic emails with details of the purchases made.';
        enlace.href = "https://github.com/AlejandroDanielMorales/The-Cart-Web"; 
        escribirEnPantalla(auxdes);
        break;
   
      case 5:
        carruselContainer.style.visibility = 'visible';
        descripcion.style.visibility = 'visible';
        titulo.textContent = 'Airjet Web';
        imagenes[0].setAttribute('src', 'Images/AirjetWeb1.jpg');
        imagenes[1].setAttribute('src', 'Images/AirjetWeb2.jpg');
        imagenes[2].setAttribute('src', 'Images/AirjetWeb3.jpg');
        auxdes = 'Web application for a private flight reservation system with client and employee user login where only the client can register and the employee is registered.The web application performs the following actions like: make a reservation (client),Approve or cancel it based on the availability of resources (Operator),Create flights, assign resources and crew,Cancel or end flights,Check flights in process, completed or canceled for all the properties shown in the flight table.For registration and saving of credentials in the database, we use an algorithm to encrypt the password and not save the password in plain text in the database.';
        enlace.href = "https://github.com/AlejandroDanielMorales/The-Airjets-web"; 
        escribirEnPantalla(auxdes);
        break;
    }
    
      enlace.innerHTML = 'View the github repository';
    
    
  }
  
}
