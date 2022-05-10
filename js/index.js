$(document).ready(function () {
    tsParticles.load("tsparticles", {
        "detectRetina": false,
        "particles": {
            "color": {
                "value": "#ffffff"
            },
            "links": {
                "color": {
                    "value": "#ffffff"
                },
                "distance": 20,
                "enable": true,
                "opacity": 0.7
            },
            "move": {
                "attract": {
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "enable": true,
                "outModes": {
                    "default": "bounce",
                    "bottom": "bounce",
                    "left": "bounce",
                    "right": "bounce",
                    "top": "bounce"
                },
                "speed": .1
            },
            "number": {
                "density": {
                    "area": 200
                },
                "value": 200
            },
            "opacity": {
                "value": {
                    "min": 0.05,
                    "max": 0.4
                },
                "animation": {
                    "enable": true,
                    "minimumValue": 0.05
                }
            },
            "size": {
                "random": {
                    "enable": true
                },
                "value": 1,
                "animation": {
                    "speed": 20,
                    "minimumValue": 0.1
                }
            }
        },
        "polygon": {
            "draw": {
                "enable": true,
                "stroke": {
                    "color": {
                        "value": "rgba(255,255,255,0.2)"
                    },
                    "width": 0.5,
                    "opacity": 0.2
                }
            },
            "enable": true,
            "inline": {
                "arrangement": "one-per-point"
            },
            "move": {
                "radius": 5,
                "type": "path"
            },
            "scale": 1,
            "type": "inline",
            "url": "https://particles.js.org/images/smalldeer.svg"
        }
    })



    // code for responsive navbar in bulma
    // $(".navbar-burger").click(function () {
    //     $(".navbar-burger").toggleClass("is-active");
    //     $(".navbar-menu").toggleClass("is-active");

    // })
})

