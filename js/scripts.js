
/*-----------------------------------------*/
/*---------------VALORANTAPI---------------*/
/*-----------------------------------------*/


const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();


/*-----------------------------------------*/
/*---------------MenuPabajo----------------*/
/*-----------------------------------------*/
function openDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  var svgIcon = document.querySelector('.my-svg');

  var isOpen = dropdownContent.classList.contains('open');

  if (isOpen) {
    dropdownContent.classList.remove('open');
    svgIcon.classList.remove('open');
  } else {
    dropdownContent.classList.add('open');
    svgIcon.classList.add('open');
  }
}
/*-----------------------------------------*/
/*---------------MODAL CUTRE----------------*/
/*-----------------------------------------*/

function hideModal() {
  const modal = document.querySelector('#myDiv');
  modal.classList.remove('show');

  document.getElementById('overf').style.overflow = 'visible';

}
function showModal() {
  const modal = document.querySelector('#myDiv');
  modal.classList.add('show');
  document.getElementById('overf').style.overflow = 'hidden';
}


/*-----------------------------------------*/
/*---Arbri cosa---*/
/*-----------------------------------------*/
function openSidebar() {
  console.log('sidebar-mainpage');
  document.querySelector('.sidebar-mainpage').classList.add('open');
  document.getElementById('overf').style.overflow = 'hidden';
}
/*-----------------------------------------*/
/*---cerrar cosa---*/
/*-----------------------------------------*/
function closeSidebar() {
  console.log('sidebar-mainpage');
  document.querySelector('.sidebar-mainpage').classList.remove('open');
  document.getElementById('overf').style.overflow = 'visible';
}
/*-----------------------------------------*/
/*---Fechita do merda---*/
/*-----------------------------------------*/
window.addEventListener('scroll', function (e) {
  const arrow = document.querySelector('.arrow-up');
  if (window.scrollY > 200) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
});
/*-----------------------------------------*/
/*---q es esto?¿---*/
/*-----------------------------------------*/
function _scrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

/*-----------------------------------------*/
/*---Validad fORMULARUI MODAL---*/
/*-----------------------------------------*/
let modalo = document.querySelector('.modalv');

function closeModal() {
  modalo.classList.remove('openv');
}

function openModal() {
  modalo.classList.add('openv');
}
/*-----------------------------------------*/
/*---Validad fORMULARUI---*/
/*-----------------------------------------*/

function Validate() {
  //let data = {
  let name1 = document.getElementById("name").value;
  let surname1 = document.getElementById("surname").value;
  let mail = document.getElementById("mail").value;
  let link = document.getElementById("link").value;
  let mapa = document.getElementById("Map").value;
  let personaje = document.getElementById("Character").value;




  //const data = '{name2:  "${this.name1}"  , surname2: "${this.surname1}", phone2: ${this.phone1},pass2: "${this.pass1}", fecha: ${this.day1} + "/" + ${this.month1} + "/" + ${this.year1}}';
  if (name1 === "" || surname1 === "" || mail === "" || link === "" || mapa === "Mapa" || personaje === "Personaje") {
    alert("Falta contenido");
  } else {
    alert("Gracias por el envio");
    openModal();
  }
}

function redirect(pagina) {
  window.location.href = pagina;
}

