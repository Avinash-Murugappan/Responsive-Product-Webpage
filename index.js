const hamburger = document.querySelector('#hamburger');
const navUL = document.getElementById('Nav-links');
const innerLeft = document.getElementById('inner-left');

hamburger.addEventListener('click', ()=>{
    navUL.classList.toggle('show');
    innerLeft.classList.toggle('hide');

});