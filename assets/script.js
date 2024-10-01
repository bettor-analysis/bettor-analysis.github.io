// script.js

// Initialize particles.js
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#A2BF57", "#406c90"]
      },
      "shape": {
        "type": ["circle", "polygon"],
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.5,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": ["grab"]
        },
        "onclick": {
          "enable": false
        }
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 0.5
          }
        }
      }
    },
    "retina_detect": true
  });