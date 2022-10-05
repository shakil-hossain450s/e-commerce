const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const cross = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}

if (cross) {
    cross.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}


