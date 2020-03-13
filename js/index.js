window.onload = () => {
    const intro = document.querySelector('#intro'),
        header = document.querySelector('#header'),
        navToggle = document.querySelector('.nav-toggle'),
        introH = intro.clientHeight;


    //Fixed header
    let scrollOffset = window.pageXOffset;

    window.addEventListener('scroll', () => {
        scrollOffset = this.pageYOffset;
        fixedHeader(scrollOffset);
    })

    function fixedHeader(scrollOffset) {
        if (scrollOffset >= introH) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    }

    //Toggle menu

    navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.nav').classList.toggle('active');
        e.target.classList.toggle('active')
        document.querySelector('.main-page__header').classList.toggle('active');
    })


    //Accordion
    const accordion = document.querySelectorAll(".accordion__header");

    const accordionItems = (e) => {
        e.target.classList.toggle("active");
        const panel = e.target.nextElementSibling;
        debugger
        if (panel.style.display !== 'block') {
            panel.style.display = 'block';
        } else {
            panel.style.display = 'none';
        }


    }

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', accordionItems)
    }


}