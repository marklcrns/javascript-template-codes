// Animated Clouds Effect https://www.youtube.com/watch?v=hF-QBhDG-wE
// Euclidean distance formula https://en.wikipedia.org/wiki/Euclidean_distance

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// adjust canvas to window height and width
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

// base size
let baseSize;
if (screenWidth >= screenHeight) {
  baseSize = screenHeight;
} else {
  baseSize = screenWidth;
}

const maxSize = 30;
const minSize = 0;
const mouseRadius = baseSize / 20;
const particleCt = screenWidth * screenHeight * 0.002
let distance;

// gold particle counter
let goldCt = 0;
const goldSize = 5;

// mouse position
const mouse = {
  x: null,
  y: null,
};
window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

// particle container
let particleArray = [];

// regular particles colors
const colors = [
  'rgba(255, 255, 255, 0.7)',
  'rgba(0, 0, 0, 0.7)',
];

// Particle constructor class
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.origColor = color
    this.color = color;
    this.restrict = false;
    this.isGold = false;
    this.shrinkLock = false;
    this.success = false;
  }

  // draw method to particle prototype
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  // check if particle is within restiction
  checkParticleStatus() {
    // get distance from the center
    distance = Math.sqrt(((screenWidth / 2 - this.x) ** 2) + ((screenHeight / 2 - this.y) ** 2));
    if (distance > baseSize / 4 && distance < baseSize / 4 + baseSize / 10) {
      this.restrict = true;
    } else {
      this.restrict = false;
    }
  }

  // turn particle into small gold particle within restriction
  makeGold() {
    this.color = 'rgba(212, 175, 55, 0.8)';
    this.isGold = true;
    goldCt += 1;
    console.log("Gold Particle Ct: " + goldCt);
  }

  // turn particle back to normal
  makeNormal() {
    this.color = this.origColor;
    this.size = 0;
    this.isGold = false;
    goldCt -= 1;
    console.log("Gold Particle Ct: " + goldCt);
  }

  // update method to particle prototype
  update() {
    // bounce off wall to opposite direction
    if (this.x + this.size * 2 > canvas.width
      || this.x - this.size * 2 < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size * 2 > canvas.height
      || this.y - this.size * 2 < 0) {
      this.directionY = -this.directionY;
    }

    // if gold, set slow movement, otherwise
    if (this.isGold && this.shrinkLock) {
      this.x += this.directionX * 0.5;
      this.y += this.directionY * 0.5;
    } else {
      this.x += this.directionX * 5;
      this.y += this.directionY * 5;
    }

    this.checkParticleStatus();

    // enlarge particle when on mouse hover, otherwise shrink to min size.
    // skip if particle is restricted
    // --------------------------------------------------------
    if (mouse.x - this.x < mouseRadius
      && mouse.x - this.x > -mouseRadius
      && mouse.y - this.y < mouseRadius
      && mouse.y - this.y > -mouseRadius) {
      if (this.size < maxSize) {
        // enlarge particle
        this.size += 3;
        // turn particle into gold if restricted
        if (this.restrict && !this.isGold) {
          this.makeGold();
        }
        // turn off shrinklock on golds when mousemove
        if (this.isGold) {
          this.shrinkLock = false;
        }
      }
    } else if (this.size > minSize && !this.shrinkLock) {
      this.size -= 0.5;
      if (this.size <= goldSize && this.isGold) {
        this.shrinkLock = true;
      }
    }

    // turn back to normal if particle escaped
    if (!this.restrict && this.isGold) {
      this.makeNormal();
      this.shrinkLock = false;
    }

    // hide particle
    if (this.size < 0) {
      this.size = 0;
    }

    // draw particle
    this.draw();
  }
}

// create particle array
function init() {
  particleArray = [];
  for (let i = 0; i < particleCt; i += 1) {
    const size = 0;
    // generate random particle location
    const x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
    const y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
    // generate random particle direction
    const directionX = (Math.random() * 0.2) - 0.1;
    const directionY = (Math.random() * 0.2) - 0.1;
    // get random colors from colors dictionary
    const color = colors[Math.floor(Math.random() * colors.length)];

    particleArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// animate particles
function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < particleArray.length; i += 1) {
    particleArray[i].update();
  }
}
init();
animate();

// resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// remove mouse position periodically for when to lose focus
setInterval(() => {
  mouse.x = undefined;
  mouse.y = undefined;
}, 1000);
