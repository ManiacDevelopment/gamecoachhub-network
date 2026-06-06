import { heroes, findHero } from "./src/data/heroes.js";
import { getMatchup } from "./src/data/matchups.js";
import { getBuild } from "./src/data/builds.js";
import { getCounters } from "./src/data/counters.js";
import { getDuel } from "./src/data/duels.js";
import { getAbilities } from "./src/data/abilities.js";
import { getHeroDetails } from "./src/data/heroDetails.js";

const app = document.querySelector("#app");
const state = {
  selectedHero: "seven",
  enemyHero: "abrams",
  search: "",
  enemySearch: "",
  view: "coach",
  musicEnabled: localStorage.getItem("music-enabled") !== "false"
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function filteredHeroes(search, exclude) {
  return heroes.filter((hero) => hero.id !== exclude && hero.name.toLowerCase().includes(search.toLowerCase()));
}

function heroButton(hero, selected, target) {
  return `
    <button class="deadlock-card ${selected ? "active" : ""}" type="button" data-select-${target}="${hero.id}">
      <img src="${hero.image}" alt="${escapeHtml(hero.name)}" loading="lazy">
      <span>
        <strong>${escapeHtml(hero.name)}</strong><br>
        <small>${escapeHtml(hero.role)} / ${escapeHtml(hero.style)}</small>
      </span>
    </button>
  `;
}

function monetizationZone(slot, label, copy) {
  const labelKey = slot === "top" ? "net.topLabel" : "net.contentLabel";
  const copyKey = slot === "top" ? "net.topCopy" : "net.contentCopy";
  return `
    <section class="gch-monetization-zone" data-gch-slot="${slot}" data-ad-slot="deadlock-${slot}">
      <span class="slot-label" data-network-i18n="${labelKey}">${label}</span>
      <p data-network-i18n="${copyKey}">${copy}</p>
    </section>
  `;
}

function premiumCard() {
  return `
    <section class="gch-premium-cta" data-gch-slot="premium">
      <span class="slot-label" data-network-i18n="net.premiumLabel">Premium</span>
      <h3 data-network-i18n="net.premiumTitle">Future premium path</h3>
      <p data-network-i18n="net.premiumCopy">Prepared for future ad-free access, saved builds or advanced tools without changing the page structure.</p>
    </section>
  `;
}

function affiliateBlock() {
  return `
    <section class="gch-affiliate-block" data-gch-slot="affiliate">
      <span class="slot-label" data-network-i18n="net.affiliateLabel">Recommended tools</span>
      <h3 data-network-i18n="net.affiliateTitle">Affiliate-ready recommendations</h3>
      <p data-network-i18n="net.affiliateCopy">Reserved for reviewed gaming tools, servers or gear. No affiliate recommendation is active right now.</p>
    </section>
  `;
}

function renderSelector(title, searchValue, target, selectedId, exclude) {
  const list = filteredHeroes(searchValue, exclude).map((hero) => heroButton(hero, hero.id === selectedId, target)).join("");
  return `
    <section class="deadlock-panel" id="${target === "hero" ? "heroes" : "enemy-heroes"}">
      <p class="eyebrow">${title}</p>
      <div class="deadlock-search">
        <input data-search-${target} value="${escapeHtml(searchValue)}" placeholder="${target === "hero" ? "Search your hero..." : "Search enemy hero..."}">
      </div>
      <div class="deadlock-list">${list}</div>
    </section>
  `;
}

function renderOverview(hero, enemy, duel) {
  return `
    <div class="overview-grid">
      <article class="deadlock-phase"><span class="mini-label">Your Role</span><h3>${escapeHtml(hero?.role || "Unknown")}</h3></article>
      <article class="deadlock-phase"><span class="mini-label">Enemy Style</span><h3>${escapeHtml(enemy?.style || "Unknown")}</h3></article>
      <article class="deadlock-phase"><span class="mini-label">Danger</span><h3>${duel ? `${duel.danger}%` : "Unknown"}</h3></article>
    </div>
  `;
}

function renderAbilities(abilities) {
  if (!abilities?.length) return "";
  return `
    <section id="abilities">
      <h3>Abilities</h3>
      <div class="ability-grid">
        ${abilities.map((ability) => `
          <article class="deadlock-phase">
            <span class="mini-label">${escapeHtml(ability.key)} / ${escapeHtml(ability.type)}</span>
            <h4>${escapeHtml(ability.name)}</h4>
            <p>${escapeHtml(ability.description)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderBuild(build) {
  if (!build) return "";
  const phase = (title, items) => `
    <article class="deadlock-phase">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li><strong>${escapeHtml(item.item)}</strong> / ${escapeHtml(item.reason)}</li>`).join("")}</ul>
    </article>
  `;
  return `
    <section id="builds">
      <h3>${escapeHtml(build.name)}</h3>
      <p>${escapeHtml(build.description)}</p>
      <div class="build-grid">
        ${phase("Early Game", build.early)}
        ${phase("Mid Game", build.mid)}
        ${phase("Late Game", build.late)}
      </div>
    </section>
  `;
}

function renderDuel(duel) {
  if (!duel) return `<section class="deadlock-phase"><h3>No detailed duel guide yet</h3><p>This hero combination still needs more matchup data.</p></section>`;
  const phase = (title, items) => `<article class="deadlock-phase"><h4>${title}</h4><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`;
  return `
    <section id="strategy">
      <h3>${escapeHtml(duel.headline)}</h3>
      <p>${escapeHtml(duel.gameplan)}</p>
      <div class="phase-grid">
        ${phase("Early", duel.early)}
        ${phase("Mid", duel.mid)}
        ${phase("Late", duel.late)}
      </div>
    </section>
  `;
}

function renderCounters(counters) {
  if (!counters?.length) return "";
  return `
    <section id="items">
      <h3>Counter Items</h3>
      <div class="counter-grid">
        ${counters.map((counter) => `
          <article class="deadlock-phase">
            <span class="mini-label">${escapeHtml(counter.priority)} / ${escapeHtml(counter.timing)}</span>
            <h4>${escapeHtml(counter.item)}</h4>
            <p>${escapeHtml(counter.reason)}</p>
            <small>${counter.goodAgainst.map(escapeHtml).join(", ")}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function matchHistoryKey(heroId, enemyId) {
  return `deadlock-match-history:${heroId}:${enemyId}`;
}

function renderTracker(hero, enemy) {
  const key = matchHistoryKey(hero.id, enemy.id);
  const history = JSON.parse(localStorage.getItem(key) || "[]").slice(0, 5);
  return `
    <section class="deadlock-phase">
      <h3>Match Tracker</h3>
      <p>Save quick notes for this matchup locally in your browser.</p>
      <form class="tracker-form" data-tracker-form>
        <div class="tracker-grid">
          <input name="kills" type="number" min="0" placeholder="Kills">
          <input name="deaths" type="number" min="0" placeholder="Deaths">
          <input name="assists" type="number" min="0" placeholder="Assists">
        </div>
        <textarea name="notes" rows="3" placeholder="Notes: what worked and what failed?"></textarea>
        <button class="deadlock-action" type="submit">Save match note</button>
      </form>
      <div class="history-list">
        ${history.map((item) => `<div class="history-item"><strong>${escapeHtml(item.kda)}</strong><p>${escapeHtml(item.notes)}</p></div>`).join("")}
      </div>
    </section>
  `;
}

function renderCoach(hero, enemy) {
  const duel = getDuel(hero.id, enemy.id);
  const abilities = getAbilities(hero.id);
  const matchup = getMatchup(hero.id);
  const build = getBuild(hero.id);
  const counters = getCounters(hero.id);
  return `
    <section class="deadlock-panel">
      <div class="duel-title">
        <div>
          <p class="eyebrow">Selected matchup</p>
          <h2>${escapeHtml(hero.name)} vs ${escapeHtml(enemy.name)}</h2>
        </div>
        <span class="difficulty">${duel?.difficulty || "Unknown"}</span>
      </div>
      ${renderOverview(hero, enemy, duel)}
      ${renderAbilities(abilities)}
      ${monetizationZone("content", "Advertisement", "Reserved for a clearly labeled in-content ad after approval. No ad is active right now.")}
      ${renderDuel(duel)}
      ${renderBuild(build)}
      ${renderCounters(counters)}
      ${matchup ? `<section class="deadlock-phase"><h3>Coaching Tips</h3><ul>${matchup.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul></section>` : ""}
      ${renderTracker(hero, enemy)}
      ${premiumCard()}
    </section>
  `;
}

function renderHeroPage(hero) {
  const details = getHeroDetails(hero.id);
  const abilities = getAbilities(hero.id);
  const build = getBuild(hero.id);
  const counters = getCounters(hero.id);
  return `
    <section class="deadlock-panel">
      <button class="deadlock-action" type="button" data-view="coach">Back to Matchup Coach</button>
      <div class="duel-title">
        <img class="deadlock-portrait" src="${hero.image}" alt="${escapeHtml(hero.name)}">
        <div>
          <p class="eyebrow">Hero guide</p>
          <h2>${escapeHtml(hero.name)}</h2>
          <p>${escapeHtml(details?.overview || hero.description)}</p>
        </div>
      </div>
      ${renderAbilities(abilities)}
      ${renderBuild(build)}
      ${renderCounters(counters)}
    </section>
  `;
}

function render() {
  if (state.selectedHero === state.enemyHero) {
    state.enemyHero = heroes.find((hero) => hero.id !== state.selectedHero)?.id || state.enemyHero;
  }

  const hero = findHero(state.selectedHero) || heroes[0];
  const enemy = findHero(state.enemyHero) || heroes.find((item) => item.id !== hero.id) || heroes[1];

  app.innerHTML = `
    <audio id="ambient" src="music/ambient.mp3" loop></audio>
    <header class="deadlock-topbar">
      <div>
        <p class="eyebrow">Deadlock companion</p>
        <h1>Deadlock Coach</h1>
        <p class="subtitle">Hero guides, builds, matchup guides, abilities and counter-items.</p>
      </div>
      <div class="deadlock-showcase" aria-hidden="true">
        <img src="${hero.image}" alt="" loading="eager">
        <span>VS</span>
        <img src="${enemy.image}" alt="" loading="eager">
      </div>
      <div class="deadlock-actions">
        <div class="gch-language-switch" data-no-i18n="true" aria-label="Language">
          <button class="gch-lang-btn" type="button" data-lang="en">EN</button>
          <button class="gch-lang-btn" type="button" data-lang="da">DA</button>
        </div>
        <button class="deadlock-action" type="button" data-music>${state.musicEnabled ? "Music On" : "Music Off"}</button>
      </div>
    </header>
    <section class="deadlock-network" id="overview">
      <div>
        <p class="eyebrow">Deadlock local menu</p>
        <h2>Deadlock Coach uses the shared premium magazine strategy system.</h2>
        <p>Prepared for relevant sponsor cards, affiliate recommendations and a future premium/ad-free upgrade without disrupting the coach workflow.</p>
      </div>
      <div class="deadlock-network-actions">
        <a href="/">Back to Game Coach Hub</a>
        <a href="/deadlock/">Overview</a>
        <a href="#heroes">Heroes</a>
        <a href="#builds">Builds</a>
        <a href="#abilities">Abilities</a>
        <a href="#items">Items</a>
        <a href="#strategy">Strategy</a>
      </div>
    </section>
    ${monetizationZone("top", "Advertisement", "No advertisement is active in this placement.")}
    <div class="deadlock-tabs" id="coach-tools">
      <button type="button" class="${state.view === "coach" ? "active" : ""}" data-view="coach">Matchup Coach</button>
      <button type="button" class="${state.view === "hero" ? "active" : ""}" data-view="hero">Hero Page</button>
    </div>
    <main class="deadlock-grid ${state.view === "hero" ? "hero-mode" : ""}">
      ${renderSelector("Your Hero", state.search, "hero", hero.id)}
      ${state.view === "coach" ? renderSelector("Enemy Hero", state.enemySearch, "enemy", enemy.id, hero.id) : ""}
      ${state.view === "coach" ? renderCoach(hero, enemy) : renderHeroPage(hero)}
    </main>
    ${affiliateBlock()}
    <footer class="deadlock-footer">
      <strong>Deadlock Coach</strong>
      <p>Part of the Game Coach Hub network.</p>
      <aside class="gch-footer-sponsor" data-gch-slot="footer-sponsor">
        <span class="slot-label" data-network-i18n="net.footerSponsorLabel">Sponsored</span>
        <p data-network-i18n="net.footerSponsorCopy">Footer sponsor area reserved for a clearly disclosed network partner. No sponsor is active right now.</p>
      </aside>
    </footer>
  `;

  window.dispatchEvent(new CustomEvent("gch:contentrendered"));
  window.GCH_APPLY_LANGUAGE?.(localStorage.getItem("gch_language") || document.documentElement.lang || "en");

  const audio = document.querySelector("#ambient");
  if (state.musicEnabled) {
    audio.volume = 0.16;
    audio.play().catch(() => {});
  }
}

app.addEventListener("click", (event) => {
  const hero = event.target.closest("[data-select-hero]");
  const enemy = event.target.closest("[data-select-enemy]");
  const view = event.target.closest("[data-view]");
  const music = event.target.closest("[data-music]");

  if (hero) {
    state.selectedHero = hero.dataset.selectHero;
    render();
  } else if (enemy) {
    state.enemyHero = enemy.dataset.selectEnemy;
    render();
  } else if (view) {
    state.view = view.dataset.view;
    render();
  } else if (music) {
    state.musicEnabled = !state.musicEnabled;
    localStorage.setItem("music-enabled", String(state.musicEnabled));
    render();
  }
});

app.addEventListener("input", (event) => {
  if (event.target.matches("[data-search-hero]")) state.search = event.target.value;
  if (event.target.matches("[data-search-enemy]")) state.enemySearch = event.target.value;
  render();
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-tracker-form]");
  if (!form) return;
  event.preventDefault();
  const hero = findHero(state.selectedHero);
  const enemy = findHero(state.enemyHero);
  const data = new FormData(form);
  const key = matchHistoryKey(hero.id, enemy.id);
  const history = JSON.parse(localStorage.getItem(key) || "[]");
  history.unshift({
    kda: `${data.get("kills") || 0}/${data.get("deaths") || 0}/${data.get("assists") || 0}`,
    notes: data.get("notes") || "No notes added."
  });
  localStorage.setItem(key, JSON.stringify(history.slice(0, 5)));
  render();
});

render();
