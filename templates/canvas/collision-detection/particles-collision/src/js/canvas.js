import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};
const mouseRadius = 250;

const colors = [
  "rgba(255, 200, 80, 0.5)",
  "rgba(255, 100, 100, 0.5)",
  "rgba(100, 150, 255, 0.5)",
  "rgba(100, 200, 100, 0.5)"
];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5
    };
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.opacity = 0;
  }

  draw() {
    c.beginPath();
    // draw particles
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // reduce whole canvas opacity
    c.save();
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.fill();
    c.restore();
    // draw particle outline
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  }

  update() {
    // pass in particles array for collision detection
    this.update = particles => {
      this.draw();
      for (let i = 0; i < particles.length; i++) {
        // skip comparing itself
        if (this === particles[i]) continue;
        if (utils.distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
          utils.resolveCollision(this, particles[i]);
        }
      }

      // bounce off window
      if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
        this.velocity.y = -this.velocity.y;
      }

      // mouse collision detection
      if (utils.distance(mouse.x, mouse.y, this.x, this.y) < mouseRadius &&
          this.opacity < 1) {
        // increase opacity within mouse radius
        this.opacity += 0.02;
      } else if (this.opacity > 0) {
        // reduce opacity out of mouse radius
        this.opacity -= 0.02;
        // fixes bug when subtracting floats
        this.opacity = Math.max(0, this.opacity);
      }

      // move particles
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }
}

// Implementation
let particles;

function init() {
  particles = [];

  for (let i = 0; i < 500; i++) {
    const radius = 10;
    let x = utils.randomIntFromRange(radius, canvas.width - radius);
    let y = utils.randomIntFromRange(radius, canvas.height - radius);
    const color = utils.randomColor(colors);

    // spawn on free space
    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        // re-spawn if overlapping
        if (utils.distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          // spawn at different location and reset loop
          x = utils.randomIntFromRange(radius, canvas.width - radius);
          y = utils.randomIntFromRange(radius, canvas.height - radius);
          // since we want to go back to 0 and that loops always starts at +1
          j = -1;
        }
      }
    }
    // create particles
    particles.push(new Particle(x, y, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // draw mouse circle
  c.beginPath();
  c.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2, false);
  c.strokeStyle = "rgba(0, 0, 0, 0.5)"
  c.stroke();
  c.closePath();

  // loop through all particles
  particles.forEach((particle) => {
    // update particles and pass in particles array
    particle.update(particles);
  });
}

init();
animate();
