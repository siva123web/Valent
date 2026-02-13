const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", showLove);
noBtn.addEventListener("mouseover", moveNo);

function showLove() {

    let blast = document.createElement("div");
    blast.className = "blast";
    blast.innerHTML = "💥";
    document.body.appendChild(blast);

    setTimeout(() => {
        blast.remove();
    }, 800);

    document.getElementById("loveContainer").innerHTML =
    "<div class='hearts fadeIn'>💖 💐 🌹 💕 💘 💝</div>" +
    "<h2 style='color:white;'>Ewww! Love You So Much 💥❤️❤️❤️❤️💥 POOJI 💥❤️❤️❤️❤️💥</h2>" +
    "<button class='marryBtn' onclick='showMarriage()'>Will You Marry Me? 💍</button>";
}

function showMarriage() {
    const container = document.getElementById("loveContainer");

    container.innerHTML = `
        <div class="hearts fadeIn">💍 💎 👰 🤵 🎉 ✨</div>

        <h2 style="color:white;">
            She Said YESSSS!!! 💍❤️ Forever Starts Now 💕
        </h2>

        <p style="color:white; font-size:20px; width:70%; margin:20px auto; line-height:1.8;">
            From this moment, I promise to stand beside you in every chapter of life 💖.<br>
            We will build our dream home 🏡 filled with laughter and love.<br>
            Drive into sunsets together 🚗✨ and create a beautiful family 👨‍👩‍👧‍👦.<br>
            You are my today, my tomorrow, and my forever ❤️
        </p>

        
<div class="futureImages fadeIn">
    <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg" alt="Car">
    <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" alt="House">
</div>
    `;
}

function moveNo() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
