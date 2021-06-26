// элемент модального
const modal = document.getElementById("modal"); // модалка
const modalClose = document.getElementById("modal-close"); //крестик
const modalForm = document.getElementById('modal-form');
const btnInnerModal = document.getElementById("btn-inner-modal"); // кнопка в модальном окне
const inputName = document.getElementById('input-name'); //инпут имени
const inputEmail = document.getElementById('input-email'); //инпут имейла
const inputStart = document.getElementById('start'); //футер форма
const startBtn = document.getElementById('start-btn'); //футер кнопка формы

// кнопки
const btnLogin = document.getElementById("btn-login"); // кнопка логина в шапке
const btnModal = document.querySelectorAll(".btn-modal"); // коллекция из всех кнопок


// hamburger 
const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const burgerMenu = document.getElementById('burger-menu');


burgerOpen.addEventListener('click', (event) => {
    burgerMenu.classList.add('menu-show');
    burgerClose.classList.remove('hidden')
})

burgerClose.addEventListener('click', (event) => {
    burgerMenu.classList.remove('menu-show');
    burgerMenu.classList.add('menu-hide');

    burgerClose.classList.add('hidden')
})




  // открытие модалки по каждой кнопке на странице
  btnModal.forEach((button) => {
    button.addEventListener("click", (e) => {
      modal.classList.remove("d-none");
    });
  });

  // закрытие модального окна
  modalClose.addEventListener("click", (event) => {
    modal.classList.add("d-none");
    console.log("click");
  });

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const  emailCheck = (input) => {

    input.addEventListener('keyup', (event) => {
    if (validateEmail(input.value) === true ) {
        // inputEmail.classList.remove('is-invalid');
        // inputEmail.classList.add('is-valid');
        input.classList.remove('not-valid');
    } 
    if (validateEmail(input.value) === false ) {
        // inputEmail.classList.remove('is-valid');
        input.classList.add('not-valid');
    }
})
};
emailCheck(inputEmail);
emailCheck(start);


//очистка модального окна
btnInnerModal.addEventListener('click', (event) => {
    event.preventDefault()
    inputEmail.value = '';
    inputName.value = '';
})

//очистка футер формы
startBtn.addEventListener('click', (event) => {
 event.preventDefault()
 inputStart.value = '';
})


(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js';el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js");};document.getElementsByTagName('body')[0].appendChild(el);})();
