
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
/*---Arbri cosa---*/
/*-----------------------------------------*/
function openSidebar() {
  console.log('sidebar');
  document.querySelector('.sidebar').classList.add('open');
}
/*-----------------------------------------*/
/*---cerrar cosa---*/
/*-----------------------------------------*/
function closeSidebar() {
  console.log('sidebar');
  document.querySelector('.sidebar').classList.remove('open');
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