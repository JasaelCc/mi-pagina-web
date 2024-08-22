window.addEventListener('scroll', function() {
    const mainTitle = document.getElementById('main-title');
    const subTitle = document.getElementById('sub-title');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        mainTitle.classList.add('shrink');
        subTitle.classList.add('shrink');
    } else {
        mainTitle.classList.remove('shrink');
        subTitle.classList.remove('shrink');
    }
});


document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
