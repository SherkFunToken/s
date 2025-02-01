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

/* Conteúdo Dinâmico */

/* Primeira Seção */
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

/* Segunda Seção */
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

/* Seção Giveaway */
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

/* Enigma Counter (random string com números e letras) */
function updateEnigmaCounter() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 10; // tamanho da string
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("counter").textContent = "Enigma: " + result;
}

/* Atualiza o Enigma Counter a cada 100ms */
function startEnigmaCounter() {
  setInterval(updateEnigmaCounter, 100);
}

/* Movimento aleatório dos elementos PNG com colisão simples */
function initElementMovement() {
  const elements = document.querySelectorAll(".animated-elements .element");
  elements.forEach(el => {
    // Se ainda não tiver posição definida, atribua valores aleatórios
    if (!el.style.left) {
      el.style.left = Math.random() * (window.innerWidth - 150) + "px";
    }
    if (!el.style.top) {
      el.style.top = Math.random() * (window.innerHeight - 150) + "px";
    }
    // Atribuir velocidades randômicas se não existirem
    if (!el.dataset.vx) {
      el.dataset.vx = (Math.random() * 4 - 2).toFixed(2); // de -2 a 2 px/frame
      el.dataset.vy = (Math.random() * 4 - 2).toFixed(2);
    }
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

      // Verifica colisão com bordas da janela
      if (posX <= 0 || posX + rect.width >= window.innerWidth) {
        vx = -vx;
      }
      if (posY <= 0 || posY + rect.height >= window.innerHeight) {
        vy = -vy;
      }
      // Verifica colisão entre elementos (método simples)
      elements.forEach(other => {
        if (other !== el) {
          const r1 = el.getBoundingClientRect();
          const r2 = other.getBoundingClientRect();
          if (!(r1.right < r2.left ||
                r1.left > r2.right ||
                r1.bottom < r2.top ||
                r1.top > r2.bottom)) {
            // Se colidirem, inverte as velocidades
            vx = -vx;
            vy = -vy;
          }
        }
      });
      
      el.dataset.vx = vx.toFixed(2);
      el.dataset.vy = vy.toFixed(2);
      el.style.left = posX + "px";
      el.style.top = posY + "px";
    });
    requestAnimationFrame(animate);
  }
  animate();
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
    // Credenciais de exemplo: admin / password
    if (username === "admin" && password === "password") {
      window.location.href = "adm.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

/* Inicialização Geral */
window.onload = function () {
  setInterval(rotateBanner, 7000);
  fetchCryptoPrices();
  setInterval(fetchCryptoPrices, 60000);
  getRandomFirstSection();
  getRandomSecondSection();
  getRandomGiveaway();
  startEnigmaCounter();
  initAdminModal();
  initElementMovement();
  console.log("Site futurista carregado!");
};
