/* Banner Rotation Script */
let bannerIndex = 0;
const banners = [
  { src: "https://token4fun.github.io/babysherk/banner1.gif", link: "https://sherkfun.io/" },
  { src: "https://sherkfuntoken.github.io/site/pongbanner.gif", link: "https://sherkfuntoken.github.io/site/pong2.html" },
  { src: "https://token4fun.github.io/babysherk/banner3.gif", link: "https://t.me/SherkGameBot" },
  { src: "https://token4fun.github.io/babysherk/banner5.gif", link: "https://t.me/SherkFunCommunity" },
  { src: "https://token4fun.github.io/babysherk/banner6.gif", link: "https://t.me/SherkFunCommunity/1529" },
  { src: "https://sherkfuntoken.github.io/site/banner7.gif", link: "https://www.youtube.com/@SherkFunToken" }
];

function rotateBanner() {
  const bannerElement = document.getElementById("banner");
  const bannerLink = document.getElementById("banner-link");
  if (!bannerElement || !bannerLink) return;
  bannerElement.style.opacity = "0";
  setTimeout(() => {
    bannerIndex = (bannerIndex + 1) % banners.length;
    bannerElement.src = banners[bannerIndex].src;
    bannerLink.href = banners[bannerIndex].link;
    bannerElement.style.opacity = "1";
  }, 500);
}

function prevBanner() {
  const bannerElement = document.getElementById("banner");
  const bannerLink = document.getElementById("banner-link");
  if (!bannerElement || !bannerLink) return;
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  bannerElement.src = banners[bannerIndex].src;
  bannerLink.href = banners[bannerIndex].link;
}

function nextBanner() {
  const bannerElement = document.getElementById("banner");
  const bannerLink = document.getElementById("banner-link");
  if (!bannerElement || !bannerLink) return;
  bannerIndex = (bannerIndex + 1) % banners.length;
  bannerElement.src = banners[bannerIndex].src;
  bannerLink.href = banners[bannerIndex].link;
}

/* Crypto Prices Ticker */
async function fetchCryptoPrices() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=sherk,bitcoin,ethereum,binancecoin,solana&vs_currencies=usd&include_24hr_change=true"
    );
    if (!response.ok) throw new Error("Failed to fetch prices.");
    const data = await response.json();
    let prices = Object.entries(data)
      .map(([key, value]) => {
        const price = value.usd.toFixed(2);
        const change = value.usd_24h_change.toFixed(2);
        const colorClass = change >= 0 ? "positive" : "negative";
        return `${key.toUpperCase()}: $${price} (<span class="${colorClass}">${change}%</span>)`;
      })
      .join(" | ");
    document.getElementById("crypto-prices").innerHTML = prices;
  } catch (error) {
    document.getElementById("crypto-prices").textContent = "Failed to load crypto prices.";
    console.error("Error fetching crypto prices:", error);
  }
}

/* Dynamic Content */

/* First Section */
function getRandomFirstSection() {
  const versions = [
    {
      title: "Introducing the Community Favorite: Sherk Fun Token ($SFT)",
      content: `
        <p>What started as a test token on the Solana network by the SherkFun.io team has blossomed into a highly cherished project, driven by the community. Today, $SFT stands as the flagship token of SherkFun.io, offering unique features that other tokens can only aspire to achieve!</p>
        <p>With cutting-edge tools like the SherkFunBuyBot already operating flawlessly, $SFT is set to transform our interaction with blockchain technology. And there’s more – prepare for the upcoming SherkSnipe&Buy Bot!</p>
      `
    },
    {
      title: "Discover the Sherk Fun Token ($SFT) Revolution",
      content: `
        <p>The journey began with a test token on Solana by the SherkFun.io team and quickly turned into a community favorite. $SFT now serves as the flagship token of SherkFun.io, offering features that outshine the competition.</p>
        <p>Advanced tools like SherkFunBuyBot are already in action, and the future SherkSnipe&Buy Bot is on the horizon to streamline token purchases.</p>
      `
    },
    {
      title: "Get to Know the Sherk Fun Token ($SFT)",
      content: `
        <p>$SFT started as a test token and rapidly evolved into a beloved project, thanks to community support. Now, $SFT proudly stands as the flagship token, offering features that set it apart.</p>
        <p>With the SherkFunBuyBot already running perfectly, and the upcoming SherkSnipe&Buy Bot promising speed and efficiency, join the revolution today!</p>
      `
    }
  ];
  const randomVersion = versions[Math.floor(Math.random() * versions.length)];
  document.getElementById("highlight-title-first").innerHTML = randomVersion.title;
  document.getElementById("dynamic-content-first").innerHTML = randomVersion.content;
}

/* Second Section */
function getRandomSecondSection() {
  const versions = [
    {
      title: "Ready to Join the $SFT Revolution? 🚀",
      content: `
        <p>Step into the future with $SFT – the token taking the Solana blockchain by storm! With tools like SherkFunBuyBot and the upcoming SherkSnipe&Buy Bot, $SFT redefines the crypto experience.</p>
        <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
        <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
      `
    },
    {
      title: "Be Part of the Neon Wave 🌟",
      content: `
        <p>$SFT is more than a token – it’s a movement. Embrace the future with advanced trading tools and a community-driven ethos. Don't miss out on this neon revolution!</p>
        <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
        <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
      `
    },
    {
      title: "Experience the Neon Future with $SFT",
      content: `
        <p>Unlock a world of possibilities with $SFT. Enjoy exclusive tools and a secure, community-driven platform that’s setting the standard in the crypto space.</p>
        <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
        <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
      `
    }
  ];
  const randomVersion = versions[Math.floor(Math.random() * versions.length)];
  document.getElementById("highlight-title-second").innerHTML = randomVersion.title;
  document.getElementById("dynamic-content-second").innerHTML = randomVersion.content;
}

/* Giveaway Section */
function getRandomGiveaway() {
  const versions = [
    {
      title: "Giveaway Announcement",
      content: `
        <p>After bonding $SFT to Raydium, 0.5% (5M) of the supply will be given to a new holder! Purchases over $50 qualify, so hold your tokens for at least 48 hours to participate.</p>
      `
    },
    {
      title: "Giveaway Announcement",
      content: `
        <p>Get ready for an exciting giveaway: after bonding to Raydium, 0.5% of $SFT’s total supply is up for grabs! Every purchase over $50 counts – hold your tokens for 48 hours to qualify.</p>
      `
    },
    {
      title: "Giveaway Announcement",
      content: `
        <p>The exclusive $SFT Giveaway is coming once bonded to Raydium! Purchases above $50 will be eligible, and tokens must be held for a minimum of 48 hours to win.</p>
      `
    }
  ];
  const randomVersion = versions[Math.floor(Math.random() * versions.length)];
  document.getElementById("giveaway-title").innerHTML = randomVersion.title;
  document.getElementById("giveaway-content").innerHTML = randomVersion.content;
}

/* Enigma Counter (random alphanumeric string with prefix "Guess and Win:") */
function updateEnigmaCounter() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 20;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("enigma").innerHTML = "Guess and Win:<br>" + result;
}
function startEnigmaCounter() {
  setInterval(updateEnigmaCounter, 100);
}

/* Initialize movement for PNG elements with simple collision detection */
function initElementMovement() {
  const elements = document.querySelectorAll(".animated-elements .element");

  // Atribui posição e velocidade aleatória para cada elemento
  elements.forEach(el => {
    el.style.left = Math.random() * (window.innerWidth - 150) + "px";
    el.style.top = Math.random() * (window.innerHeight - 150) + "px";
    el.dataset.vx = (Math.random() * 4 - 2).toFixed(2); // valor entre -2 e 2
    el.dataset.vy = (Math.random() * 4 - 2).toFixed(2);
  });

  function animate() {
    elements.forEach(el => {
      let vx = parseFloat(el.dataset.vx);
      let vy = parseFloat(el.dataset.vy);
      let posX = parseFloat(el.style.left);
      let posY = parseFloat(el.style.top);
      const rect = el.getBoundingClientRect();

      // Atualiza posição
      posX += vx;
      posY += vy;

      // Rebote nas bordas da janela
      if (posX <= 0 || posX + rect.width >= window.innerWidth) {
        vx = -vx;
      }
      if (posY <= 0 || posY + rect.height >= window.innerHeight) {
        vy = -vy;
      }

      el.dataset.vx = vx.toFixed(2);
      el.dataset.vy = vy.toFixed(2);
      el.style.left = posX + "px";
      el.style.top = posY + "px";
    });
    requestAnimationFrame(animate);
  }
  animate();
}


/* Contact Modal Handling with Countdown */
function initContactModal() {
  const contactButton = document.getElementById("floating-button");
  const contactModal = document.getElementById("contactModal");
  const contactModalClose = document.getElementById("contactModalClose");
  const countdownElem = document.getElementById("contactCountdown");

  contactButton.addEventListener("click", () => {
    contactModal.style.display = "block";
    let count = 3;
    countdownElem.textContent = count;
    const interval = setInterval(() => {
      count--;
      countdownElem.textContent = count;
      if (count <= 0) {
        clearInterval(interval);
        contactModal.style.display = "none";
        window.location.href = "https://t.me/SherkFunCommunity";
      }
    }, 1000);
  });
  
  contactModalClose.addEventListener("click", () => {
    contactModal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
}

/* Enigma Modal Handling for Guess and Win */
function initEnigmaModal() {
  const enigmaElement = document.getElementById("enigma");
  const enigmaModal = document.getElementById("enigmaModal");
  const enigmaModalClose = document.getElementById("enigmaModalClose");

  enigmaElement.addEventListener("click", () => {
    enigmaModal.style.display = "block";
    updateEnigmaModalText(); 
    enigmaModal.dataset.interval = setInterval(updateEnigmaModalText, 3000);
  });

  enigmaModalClose.addEventListener("click", () => {
    enigmaModal.style.display = "none";
    clearInterval(enigmaModal.dataset.interval);
  });

  window.addEventListener("click", (e) => {
    if (e.target === enigmaModal) {
      enigmaModal.style.display = "none";
      clearInterval(enigmaModal.dataset.interval);
    }
  });
}

/* Update Enigma Modal Text with dynamic phrases about $SFT and mystery */
function updateEnigmaModalText() {
  const phrases = [
    "Every moment, Sherk Fun Token unveils a new secret...",
    "Unlock the neon mystery with $SFT.",
    "Step into the future: Sherk Fun awaits.",
    "In the electric glow, $SFT sparks innovation.",
    "Discover the vibrant pulse of Sherk Fun Token.",
    "Sherk Fun Token: where crypto meets enigma.",
    "The blockchain mystery deepens with $SFT.",
    "Neon dreams and digital secrets: that's $SFT.",
    "Embrace the unknown with Sherk Fun Token.",
    "$SFT shines in the heart of the metaverse.",
    "Every flicker hides a riddle...",
    "Can you decipher the enigma of the night?",
    "Shadows and neon: a puzzle without a solution.",
    "The night whispers secrets beyond the ordinary.",
    "In the dance of light and darkness, mysteries abound.",
    "Dive deep into the digital enigma that is $SFT.",
    "A universe of secrets awaits within Sherk Fun Token.",
    "Every byte hides a brilliant mystery.",
    "Neon lights illuminate the path to $SFT.",
    "Unlock the futuristic code, one glow at a time.",
    "Where crypto and curiosity collide: $SFT.",
    "In the realm of neon, every moment is a revelation.",
    "Follow the luminous trail of Sherk Fun Token.",
    "Mystery dances in every pixel of $SFT.",
    "Let your mind wander through the neon labyrinth.",
    "Every spark of $SFT ignites a thousand questions.",
    "Secrets flow like electric currents through $SFT.",
    "Embrace the chaos of the digital cosmos with $SFT.",
    "The future is written in neon and coded in $SFT.",
    "Each flash of light reveals a new puzzle.",
    "Step beyond the ordinary—$SFT awaits your discovery.",
    "The neon enigma of Sherk Fun Token beckons the brave.",
    "Mysteries unfold in the rhythm of digital beats.",
    "Let the neon night guide your quest for truth in $SFT.",
    "In every shadow, a secret of $SFT is born."
  ];
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("enigmaModalText").textContent = randomPhrase;
}


/* Admin Modal Handling */
function initAdminModal() {
  const adminBtn = document.getElementById("adminBtn");
  const modal = document.getElementById("adminModal");
  const closeBtn = document.getElementById("modalClose");
  const adminForm = document.getElementById("adminForm");
  
  adminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("adminUser").value;
    const password = document.getElementById("adminPass").value;
    if (username === "admin" && password === "password") {
      window.location.href = "adm.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

<!-- FAQ Accordion Script -->
<script>
  /* Lógica do Accordion para o FAQ - Apenas um aberto por vez */
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Verifica se o item clicado já está ativo
      const isActive = item.classList.contains('active');
      
      // Fecha todas as respostas
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Se o item clicado não estava ativo, ativa-o (abre sua resposta)
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
</script>


/* Initialization */
window.onload = function () {
  setInterval(rotateBanner, 7000);
  fetchCryptoPrices();
  setInterval(fetchCryptoPrices, 60000);
  getRandomFirstSection();
  getRandomSecondSection();
  getRandomGiveaway();
  startEnigmaCounter();
  initAdminModal();
  initContactModal();
  initEnigmaModal();
  initElementMovement();
  console.log("Futuristic site loaded!");
};
