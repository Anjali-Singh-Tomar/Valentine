 const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const text = document.getElementById("text");
  const buttons = document.getElementById("buttons");

  let stage = 0;

  const stages = [
    "Ye lo Gulab aur bn jao mere valentine? ",
    "Please?",
    "Ab ho ra h mera dimag kharab, Ha kro jaldi!",
    "That’s it. You’re locked in 😈",
    "Only escape left 😌"
  ];

  const gif = document.getElementById("gif");

const gifs = [
 "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWtidnJocG9zOTJlbzNqOGw2bTIyODY5cmJ1MmV2YW5hdGhzMXh0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XHMnN1PSC7ag0c2JuT/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHV1dWQ0eGs2bDJidGs2ZnJ6eXlyMWpscGZ2dGs2c2l0dDVhYW1tbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KvEoHyKtealpHqerBA/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZ5d3M2aGViaWM5M3NidWl6Z3pwbzExenNjaG02cTFnYjl6OHRjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZdIjG0lMimReumioGM/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXRjZ2h1M2pjN3B6bjg0MWpxa3EwbGY2eDg5azdnaTVrcDVuNmZ6aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TMEDD66oVP517r3zJX/giphy.gif"
];


  function vibrate() {
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }

  function moveNoButton() {
    vibrate();

    const maxX = buttons.clientWidth - noBtn.offsetWidth;
    const maxY = buttons.clientHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  noBtn.addEventListener("touchstart", nextStage);
  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", nextStage);

  function nextStage() {
    if (stage < stages.length) {
      text.textContent = stages[stage];
      gif.src = gifs[Math.min(stage, gifs.length - 1)];
      gif.style.display = "block";

      stage++;
      moveNoButton();
    }

    if (stage === 4) {
      noBtn.style.display = "none";
      text.innerHTML = `
        NOW YOU ARE LOCKED IN HELL SIR<br><br>
        Bahar nikalna h toh ha bolo jaldi
      `;
    }
  }

  yesBtn.addEventListener("click", () => {
    celebrate();
    vibrate();

    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding:20px;
        color:#22c55e;
        font-family:system-ui;">
        <img 
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3BqczcwN2R1eXIwcHl6cmw1M3loN3M0enR1aHZwcHV1dmI5czdjdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gJijhzJEeZUF4tRDwe/giphy.gif"
        alt="I love you gif"
        style="
          width:260px;
          max-width:90%;
          border-radius:18px;
          margin-bottom:20px;
        "
      >
        <h1>
          ITS A YES<br><br>
          Aditya is officially<br>
          <strong>MINE</strong><br><br>
          I LOVE YOU MERI JAAN
        </h1>
      </div>
    `;
    startHeartBalloons();

  });

  function celebrate() {
    for (let i = 0; i < 120; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
      c.style.animationDuration = Math.random() * 2 + 2 + "s";
      document.body.appendChild(c);

      setTimeout(() => c.remove(), 4000);
    }
  }
  function startHeartBalloons() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 300);
}

