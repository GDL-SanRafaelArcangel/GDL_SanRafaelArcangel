const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach (dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const Barra = dropdown.querySelector('.Barra');
    const options = dropdown.querySelectorAll('.Barra li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clickend');
        caret.classList.toggle('caret-rotate');
        Barra.classList.toggle('Barra-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
        selectend.innerText = option.innerText;
        select.classList.remove('select-clickend');
        caret.classList.remove('caret-rotate'); 
        Barra.classList.remove('Barra-open');
        options.forEach(option => { option.classList.remove('active'); });
        option.classList.add('active');    
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.toggle-section');

    sections.forEach(section => {
        const header = section.querySelector('.toggle-header');
        const body = section.querySelector('.toggle-body');
        const caret = section.querySelector('.caret');

        header.addEventListener('click', () => {
            const isVisible = body.style.display === 'block';
            body.style.display = isVisible ? 'none' : 'block';
            caret.innerHTML = isVisible ? '&#9660;' : '&#9650;';
        });
    });
});



