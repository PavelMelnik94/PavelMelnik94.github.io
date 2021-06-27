document.addEventListener("DOMContentLoaded", function(event) {


const modal = document.getElementById("modal"); // модалка с
const modalClose = document.getElementById("modal-close"); //крестик
const btnInnerModal = document.getElementById("btn-inner-modal"); // кнопка в модальном окне
const inputName = document.getElementById('input-name'); //инпут имени
const inputEmail = document.getElementById('input-email'); //инпут имейла
const inputStart = document.getElementById('start'); //футер форма
const startBtn = document.getElementById('start-btn'); //футер кнопка формы
const accountExist = document.getElementById('account-alredy-exist'); //аккаунт уже существует

// кнопки
const btnLoginHeader = document.getElementById("btn-login-header"); // кнопка логина в шапке
const btnLoginFooter = document.getElementById("btn-login-footer"); // кнопка логина в шапке
const btnModal = document.querySelectorAll(".btn-modal"); // коллекция из всех кнопок


//login модальное
const login = document.getElementById('modal_login'); // модальное
const loginClose = document.getElementById('modal_login-close'); // крестик
const loginNotAccount = document.getElementById('no-account');

// hamburger 
const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const burgerMenu = document.getElementById('burger-menu');


//open login
const openLogin = (button => {
    button.addEventListener('click', (event) => {
        login.classList.remove('d-none')
        
    })
});
openLogin(btnLoginHeader);
openLogin(btnLoginFooter);

// closed login
loginClose.addEventListener('click', event => {
    login.classList.add('d-none');
})


loginNotAccount.addEventListener('click', event => {
    login.classList.add('d-none');
    modal.classList.remove("d-none");
})

accountExist.addEventListener('click', event => {
    modal.classList.add("d-none");
    login.classList.remove('d-none');
})



burgerOpen.addEventListener('click', (event) => {
    burgerMenu.classList.add('menu-show');
    burgerClose.classList.remove('hidden');
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
        input.classList.remove('not-valid');
    } 
    if (validateEmail(input.value) === false ) {
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

//очистка  формы акции
startBtn.addEventListener('click', (event) => {
 event.preventDefault()
 inputStart.value = '';
})
    
  });




