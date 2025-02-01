// Se desejar adicionar interações extras, scripts ou animações específicas, este arquivo pode ser expandido.
// Por exemplo, se quiser implementar alguma lógica para alternar conteúdos ou controlar os elementos animados:

window.onload = function () {
  console.log("Site futurista carregado!");
  // Adicione aqui quaisquer scripts adicionais conforme a necessidade.
};

/* Banner rotation script */
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
function getRandomFirstSection() {
  const versions = [
    {
      title: "Introducing the Neon Revolution: $SFT",
      content: `
        <p>$SFT começou como um token de teste na Solana e se transformou em um farol do metaverso neon. Junte-se à revolução e experimente velocidade e inovação sem igual!</p>
      `
    },
    {
      title: "Enter the Neon Realm with $SFT",
      content: `
        <p>Descubra a fusão entre blockchain e design futurista. $SFT não é apenas um token – é um movimento movido pela comunidade e tecnologia de ponta.</p>
      `
    },
    {
      title: "Embrace the Future with $SFT",
      content: `
        <p>Dos seus humildes inícios até um espetáculo neon, $SFT ilumina o caminho para uma experiência cripto revolucionária. Faça parte dessa jornada!</p>
      `
    }
  ];
  const randomVersion = versions[Math.floor(Math.random() * versions.length)];
  document.getElementById("highlight-title-first").innerHTML = randomVersion.title;
  document.getElementById("dynamic-content-first").innerHTML = randomVersion.content;
}

function getRandomSecondSection() {
  const versions = [
    {
      title: "Join the $SFT Movement 🚀",
      content: `
        <p>Entre no futuro neon com $SFT. Experimente o poder da comunidade, bots de negociação avançados e transações super-rápidas na rede Solana.</p>
        <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
        <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
      `
    },
    {
      title: "Be Part of the Neon Wave 🌟",
      content: `
        <p>$SFT lidera a investida rumo ao metaverso com tecnologia inovadora e uma abordagem comunitária. Não perca a chance de surfar nessa onda neon!</p>
        <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
        <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
      `
    },
    {
      title: "Experience the Neon Future with $SFT",
      content: `
        <p>Desbloqueie um mundo de possibilidades com $SFT. Aproveite ferramentas exclusivas e uma plataforma segura e descentralizada que redefine as transações cripto.</p>
        <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlightgame">Buy $SFT Now</a>
        <a href="https://t.me/SherkFunCommunity" class="button">Join Telegram</a>
      `
    }
  ];
  const randomVersion = versions[Math.floor(Math.random() * versions.length)];
  document.getElementById("highlight-title-second").innerHTML = randomVersion.title;
  document.getElementById("dynamic-content-second").innerHTML = randomVersion.content;
}

function getRandomGiveaway() {
  const versions = [
    {
      title: "Exclusive Giveaway!",
      content: `
        <p>Após o bonding com Raydium, 0.5% do supply estará disponível para um novo holder! Compre acima de $50 e segure por 48h para participar.</p>
      `
    },
    {
      title: "Neon Giveaway Alert!",
      content: `
        <p>Prepare-se para um giveaway espetacular: 0.5% do supply do $SFT pode ser seu. Garanta sua compra acima de $50 e mantenha seus tokens por 48h!</p>
      `
    },
    {
      title: "Win in the Neon Giveaway!",
      content: `
        <p>Depois do bonding com Raydium, um giveaway de cair o queixo está chegando! Compre acima de $50 e segure por 48h para concorrer.</p>
      `
    }
  ];
  const randomVersion = versions[Math.floor(Math.random() * versions.length)];
  document.getElementById("giveaway-title").innerHTML = randomVersion.title;
  document.getElementById("giveaway-content").innerHTML = randomVersion.content;
}

/* Funcionalidade da Área de Administração (Modal) */
function initAdminModal() {
  const adminBtn = document.getElementById("adminBtn");
  const modal = document.getElementById("adminModal");
  const closeBtn = document.getElementById("modalClose");
  const adminForm = document.getElementById("adminForm");
  const adminArea = document.getElementById("adminArea");

  adminBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("adminUser").value;
    const password = document.getElementById("adminPass").value;
    // Validação simples (apenas para demonstração – não use em produção)
    if (username === "admin" && password === "password") {
      adminArea.style.display = "block";
      adminForm.style.display = "none";
    } else {
      alert("Invalid credentials!");
    }
  });
}

/* Contador de Visitantes */
function startCounter() {
  let count = 0;
  const counterElement = document.getElementById("counter");
  setInterval(() => {
    count++;
    counterElement.textContent = "Visitor Count: " + count;
  }, 1000);
}

/* Inicialização Geral */
window.onload = function () {
  setInterval(rotateBanner, 7000);
  fetchCryptoPrices();
  setInterval(fetchCryptoPrices, 60000);
  getRandomFirstSection();
  getRandomSecondSection();
  getRandomGiveaway();
  initAdminModal();
  startCounter();
};
