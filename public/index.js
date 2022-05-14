const arrw = document.querySelector('.arrw');
const arrow = document.querySelector('.arrow');
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
const zoop = document.querySelector('.zoop')
const tease = document.querySelector('.tease')
const tea = document.querySelector('.tea')
const about = document.querySelector('.about')
const upbox = document.querySelector('#upbox')
const logoimg = document.querySelector('.logoimg')
const preload = document.querySelector('.preloader')
const myFunction = (e) => {
    console.log(e);
    console.log(this);
}

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
    tl.add('litebar').to(liteleftbox, 0.6, {
        left: '0%',
    }, 'litebar').to(literightbox, 0.6, {
        right: '0%',
        display: 'block',
        opacity: '1'
    }, 'litebar').to(rightbox, .6, {
        right: '0%',
        display: 'block',
        opacity: '1'
    }, 'litebar').to(leftbox, .6, {
        left: '0%',
    }, 'litebar')
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
    tl.add('navbar').to(rightbox, 0.6, {
        right: '-100%',
        opacity: '.5',
        display: 'none',
        ease: Power2.easeInOut
    }, 'navbar').to(leftbox, 0.6, {
        left: '-100%',
        ease: Power2.easeInOut,
    }, 'navbar').to(liteleftbox, .6, {
        left: '-100%',
    }, 'navbar').to(literightbox, .6, {
        right: '-100%',
        opacity: '.5',
        display: 'none'
    }, 'navbar')

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
        cursor.classList.add('ind')
    })
    ham.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigc')
        cursor.classList.remove('ind')
    })
    logoimg.addEventListener('mouseenter', (e) => {
        cursor.classList.add('bigc')
        cursor.classList.add('ind')
    })
    logoimg.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigc')
        cursor.classList.remove('ind')
    })
    cross.addEventListener('mouseenter', (e) => {
        cursor.classList.add('bigc')
    })
    cross.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigc')
    })
    arrw.addEventListener('mouseenter', (e) => {
        cursor.classList.add('bigb')
        cursor.classList.add('mixb')
        tease.classList.add('visible')
    })
    arrw.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('bigb')
        cursor.classList.remove('mixb')
        tease.classList.remove('visible')
    })
    arrw.addEventListener('click', (e) => {
        if (click) {
            click = false
            tl.add('smid').to(one, .5, {
                right: '-100%',
                opacity: '.5'
            }, 'smid').to(one, 1, {
                display: 'none'
            })
            tease.innerHTML = "WATCH TEASER"
        } else {
            click = true
            tl.add('emid').to(one, .5, {
                top: '0',
                right: '0',
                opacity: '1',
                display: 'block'
            }, 'emid')
            tease.innerHTML = "CLOSE TEASER"
        }

    })
    about.addEventListener('click', (e) => {
        tl.fromTo(upbox, .5, {
            bottom:'-100%'
        },{
            top: '-100%'
        })
    })
} else if (window.matchMedia("(max-width: 1200px)").matches) {
    ham.addEventListener('click', e => {
        tl.add('nav').to(leftbox, 0.6, {
            left:'0%'
        }, 'nav')
    })
    arrow.addEventListener('click', (e) => {
        if (click) {
            click = false
            tl.add('smid').to(one, .5, {
                left: '-100%',
                opacity: '.5'
            }, 'smid').to(one, 1, {
                display: 'none'
            }).to(arrow, .1, {backgroundColor:'none'})
            tea.innerHTML = "Click here to watch teaser"
        } else {
            click = true
            
            tl.add('emid').to(one, .5, {
                left: '0%',
                opacity: '1',
                display: 'block'
            }, 'emid').to(arrow, .1, {backgroundColor:'black'})
            console.log('touch');
            tea.innerHTML = "Click here to close teaser"
        }

    })
}

//PRELOADER LIQUID SCREEN LOADER
// Document ready!
function ready(callbackFunc) {
    console.log(1);
    if (document.readyState !== 'loading') {
      // Document is already ready, call the callback directly
      console.log(1);
      callbackFunc();
    } else if (document.addEventListener) {
      // All modern browsers to register DOMContentLoaded
      console.log(2);
      document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
      // Old IE browsers
      console.log(3);
      document.attachEvent('onreadystatechange', function() {
          console.log(4);
        if (document.readyState === 'complete') {
            console.log(5);
          callbackFunc();
        }
      });
    }
  }
  ready(function() {
	var preloader = document.getElementById('preloader');
	var btns = document.getElementsByTagName('button');
	
	// Test
	setTimeout(function(){ preloader.className = 'slide-in' }, 500);
	setTimeout(function(){ preloader.className = 'slide-out' }, 1500);
    setTimeout(() => {
        preloader.style.display='none'
    }, 2300);
	
});