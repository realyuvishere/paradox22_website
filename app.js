const arrw = document.querySelector('.arrw');
const arr = document.querySelector('.arr');
const one = document.querySelector('#one')
const cursor = document.querySelector('.cursor');
const title = document.querySelector('.title')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const cfirst = document.querySelector('.cfirst')
const csecond = document.querySelector('.csecond')
const ham = document.querySelector('.ham')
const cross = document.querySelector('.cross')
const leftbox = document.querySelector('#leftbox')
const rightbox = document.querySelector('#rightbox')
const liteleftbox = document.querySelector('#liteleftbox')
const literightbox = document.querySelector('#literightbox')
const home = document.querySelector('.home')
const tease = document.querySelector('.tease')
const tea = document.querySelector('.tea')
document.addEventListener('mousemove', (e) => {
    setTimeout(() => {
        cursor.setAttribute('style', 'top: ' + (e.pageY) + 'px;' + 'left: ' + (e.pageX) + 'px;')
    }, 30);
    // cursor.setAttribute('style', 'top: ' + e.pageY + 'px;' + 'left: ' + e.pageX + 'px;')
})
let click = false
const tl = new TimelineMax();
ham.addEventListener('click', (e) => {
    tl.add('nav').fromTo(first, .5, {
        width: '50px'
    }, {
        width: '0px'
    }, 'nav').fromTo(second, .5, {
        width: '30px'
    }, {
        width: '0px'
    }, 'nav').fromTo(third, .5, {
        width: '20px'
    }, {
        width: '0px'
    }, 'nav').to(ham, 0.1, {
        visibility: 'hidden'
    })
    tl.add('litebar').to(liteleftbox, 0.5, {
        left: '0%',
    }, 'litebar').to(literightbox, 0.7, {
        right: '0%',
    }, 'litebar')
    tl.add('navbar').to(rightbox, .5, {
        right: '0%',
    }, 'navbar').to(leftbox, .5, {
        left: '0%',
    }, 'navbar')
    tl.add('end').fromTo(cfirst, .5, {
        width: '0px',
        visibility: 'hidden'
    }, {
        width: '40px',
        visibility: 'visible'
    }, 'end').fromTo(csecond, .5, {
        width: '0px',
        visibility: 'hidden'
    }, {
        width: '40px',
        visibility: 'visible'
    }, 'end')
})
cross.addEventListener('click', (e) => {
    console.log(e);
    tl.add('end').fromTo(cfirst, .5, {
        width: '0px',
        visibility: 'visible'
    }, {
        width: '40px',
        visibility: 'hidden'
    }, 'end').fromTo(csecond, .5, {
        width: '0px',
        visibility: 'visible'
    }, {
        width: '40px',
        visibility: 'hidden'
    }, 'end')
    tl.add('navbar').to(rightbox, 0.7, {
        right: '-100%',
        ease: Power2.easeInOut
    }, 'navbar').to(leftbox, 0.5, {
        left: '-100%',
        ease: Power2.easeInOut,
    }, 'navbar')
    tl.add('litebar').to(liteleftbox, 1, {
        left: '-100%',
    }, 'litebar').to(literightbox, 1, {
        right: '-100%',
    }, 'litebar')

    tl.add('nav').to(ham, 0.1, {
        visibility: 'visible'
    }, 'nav').fromTo(first, .5, {
        width: '0px'
    }, {
        width: '50px'
    }, 'nav').fromTo(second, .5, {
        width: '0px'
    }, {
        width: '30px'
    }, 'nav').fromTo(third, .5, {
        width: '0px'
    }, {
        width: '20px'
    }, 'nav')
})
if (window.matchMedia("(min-width: 1200px)").matches) {

    ham.addEventListener('mouseenter', (e) => {
        cursor.classList.add('bigc')
    })
    ham.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigc')
    })
    cross.addEventListener('mouseenter', (e) => {
        cursor.classList.add('bigc')
    })
    cross.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigc')
    })
    arrw.addEventListener('mouseenter', (e) => {
        cursor.classList.add('bigb')
        tease.classList.add('visible')
        cursor.classList.add('ind')
        arrw.classList.add('rembor')
    })
    arrw.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigb')
        tease.classList.remove('visible')
        cursor.classList.remove('ind')
        arrw.classList.remove('rembor')
    })
    arrw.addEventListener('click', (e) => {
        if (click) {
            click = false
            tl.add('smid').to(one, .5, {
                right: '-100%',
                opacity: '.5'
            }, 'smid').to(one, 1, {
                visibility: 'hidden'
            })
            tease.innerHTML = "WATCH TEASER"
        } else {
            click = true
            tl.add('emid').to(one, .5, {
                right: '0%',
                opacity: '1',
                visibility: 'visible'
            }, 'emid')
            tease.innerHTML = "CLOSE TEASER"
        }

    })
} else {
    ham.addEventListener('click', e => {
        tl.add('nav').to(leftbox, 0.6, {
            left:'0%'
        }, 'nav')
    })
    arrw.addEventListener('click', (e) => {
        if (click) {
            click = false
            tl.add('smid').to(one, .5, {
                left: '-100%',
                opacity: '.5'
            }, 'smid').to(one, 1, {
                visibility: 'hidden'
            })
            tea.innerHTML = "Click here to watch teaser"
        } else {
            click = true
            
            tl.add('emid').to(one, .5, {
                left: '0%',
                opacity: '1',
                visibility: 'visible'
            }, 'emid')
            console.log('touch');
            tea.innerHTML = "Click here to close teaser"
        }

    })
}