const ACCESS_CODE = "AMOUZOU";
const ACCESS_STORAGE_KEY = "christian-recipient-access";

function unlockSite() {
  document.body.classList.remove("auth-pending");
  document.querySelector("[data-access-screen]")?.setAttribute("hidden", "");
  document.querySelector(".site-header")?.removeAttribute("aria-hidden");
  document.querySelector("main")?.removeAttribute("aria-hidden");
  document.querySelector(".site-footer")?.removeAttribute("aria-hidden");
  document.body.style.overflow = "";
}

function setupAccessGate() {
  const form = document.querySelector("[data-access-form]");
  const input = document.querySelector("[data-access-input]");
  const error = document.querySelector("[data-access-error]");

  if (localStorage.getItem(ACCESS_STORAGE_KEY) === "granted") {
    unlockSite();
    return;
  }

  document.querySelector(".site-header")?.setAttribute("aria-hidden", "true");
  document.querySelector("main")?.setAttribute("aria-hidden", "true");
  document.querySelector(".site-footer")?.setAttribute("aria-hidden", "true");
  input?.focus();

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value.trim().toUpperCase() === ACCESS_CODE) {
      localStorage.setItem(ACCESS_STORAGE_KEY, "granted");
      unlockSite();
      return;
    }

    if (error) {
      error.textContent = "Code incorrect";
    }
    input.select();
  });
}

const chapters = [
  {
    time: "00:00",
    seconds: 0,
    title: "Entrer dans le récit",
    text: "Ouverture de l’entretien et premiers repères pour comprendre le parcours de Christian."
  },
  {
    time: "02:10",
    seconds: 130,
    title: "L’enfance au Togo",
    text: "Les souvenirs fondateurs, les lieux de l’enfance et ce qui marque une première vie."
  },
  {
    time: "06:35",
    seconds: 395,
    title: "Études et ambition",
    text: "Les apprentissages, le goût du travail et les décisions qui ouvrent la suite du chemin."
  },
  {
    time: "10:50",
    seconds: 650,
    title: "Arrivée à Paris",
    text: "Un changement de décor, de rythme et de perspectives dans la construction d’une vie adulte."
  },
  {
    time: "15:20",
    seconds: 920,
    title: "Vie d’avocat",
    text: "Le métier, les engagements et la manière de traverser une carrière avec exigence."
  },
  {
    time: "20:05",
    seconds: 1205,
    title: "La famille",
    text: "Les liens, la transmission et les valeurs que Christian souhaite voir circuler."
  },
  {
    time: "24:40",
    seconds: 1480,
    title: "Conseils aux générations",
    text: "Une parole plus intime sur ce qui compte, ce qui reste et ce qui mérite d’être partagé."
  },
  {
    time: "28:10",
    seconds: 1690,
    title: "Conclusion",
    text: "Derniers mots de l’entretien court et ouverture vers la version complète."
  }
];

const track = document.querySelector("[data-chapter-track]");
const timeline = document.querySelector("[data-timeline]");
const iframe = document.querySelector("#main-video");

function renderChapters() {
  if (!track) return;

  track.innerHTML = chapters
    .map(
      (chapter) => `
        <button class="chapter-card" type="button" data-seek="${chapter.seconds}">
          <span class="chapter-time">${chapter.time}</span>
          <h3>${chapter.title}</h3>
          <p>${chapter.text}</p>
        </button>
      `
    )
    .join("");
}

function seekVideo(seconds) {
  if (!iframe || !iframe.contentWindow) return;

  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: "seekTo",
      args: [seconds, true]
    }),
    "*"
  );

  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: "playVideo",
      args: []
    }),
    "*"
  );
}

function setupChapterClicks() {
  if (!track) return;

  track.addEventListener("click", (event) => {
    const card = event.target.closest("[data-seek]");
    if (!card) return;

    seekVideo(Number(card.dataset.seek));
    document.querySelector("#film")?.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function setupTimelineMotion() {
  if (!timeline || !track) return;

  let rafId = 0;

  timeline.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = timeline.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollLeft = maxScroll * ratio;
    });
  });
}

function setupScrollButtons() {
  document.querySelectorAll("[data-scroll-chapters]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.scrollChapters);
      track?.scrollBy({
        left: direction * Math.min(420, track.clientWidth * 0.75),
        behavior: "smooth"
      });
    });
  });
}

setupAccessGate();
renderChapters();
setupChapterClicks();
setupTimelineMotion();
setupScrollButtons();
