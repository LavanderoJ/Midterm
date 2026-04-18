document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const leafContainer = document.getElementById("leaves-container");

function createLeaf() {
  if (!leafContainer) return;

  const img = document.createElement("img");
  img.classList.add("leaf");

  const logos = [
    "images/html.png",
    "images/css-3.png",
    "images/js.png",
    "images/python.png",
    "images/java.png"
  ];

  img.src = logos[Math.floor(Math.random() * logos.length)];
  img.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 30 + 30;
  img.style.width = size + "px";

  img.style.animationDuration = Math.random() * 5 + 5 + "s";
  img.style.transform = `translateX(${Math.random() * 60 - 30}px)`;

  leafContainer.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 10000);
}

setInterval(createLeaf, 500);

const roles = ["Student.", "Aspiring Developer.", "Christian.", "Gamer."];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.getElementById("role");

function typeEffect() {
  if (!roleElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

function downloadCV() {
  const link = document.createElement("a");
    link.href = "images/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}