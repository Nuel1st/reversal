const container = document.getElementById('container');
const registernBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registernBtn.addEventLister('click', () => {
    container.classList.add("active");
});

loginBtn.addEventLister('click', () => {
    container.classList.remove("active");
});