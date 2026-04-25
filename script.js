function startExperience() {
  const music = document.getElementById("bgMusic");
  const intro = document.getElementById("intro");

  if (music) {
    music.volume = 0.3;

    // 🔥 unlock audio properly
    music.muted = true;

    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        music.muted = false;
      }).catch(() => {
        // fallback: play on next click
        document.body.addEventListener("click", () => {
          music.muted = false;
          music.play();
        }, { once: true });
      });
    }
  }

  // fade intro (ONLY ONCE)
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
  }, 500);
}

  // fade intro
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
  }, 500);
}


// 🌸 FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);


// ✍️ TYPEWRITER
let text = "I know it feels like being good doesn’t always take you somewhere… but that doesn’t mean you’re wrong. It means you’re rare. You didn’t lose anything by being kind. They lost someone who was real. So don’t ever change who you are 💖";

let i = 0;

function typeWriter() {
  const el = document.getElementById("text");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 25);
  }
}
typeWriter();


// 🎁 FINAL MESSAGE
function reveal() {
  document.getElementById("finalMsg").classList.add("show");
}


// ✨ SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});


// 💖 AFFIRMATION ANIMATION
const affirmObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let lines = entry.target.querySelectorAll(".line");
      lines.forEach((line, i) => {
        setTimeout(() => line.classList.add("show"), i * 400);
      });
    }
  });
}, { threshold: 0.5 });

const affirmSection = document.querySelector(".affirmation");
if (affirmSection) affirmObserver.observe(affirmSection);

