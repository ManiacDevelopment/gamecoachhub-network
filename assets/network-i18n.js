(function () {
  const STORAGE_KEY = "gch_language";
  const LEGACY_KEY = "gch-lang";
  const supported = new Set(["en", "da"]);

  const dictionary = {
    en: {
      "nav.home": "Home",
      "nav.games": "Games",
      "nav.tools": "Tools",
      "nav.guides": "Guides",
      "nav.about": "About",
      "nav.backHub": "Back to Game Coach Hub",
      "nav.overview": "Overview",
      "nav.beginner": "Beginner",
      "nav.money": "Money",
      "nav.abilityCards": "Ability Cards",
      "nav.weapons": "Weapons",
      "nav.activities": "Activities",
      "nav.calculators": "Calculators",
      "nav.trackers": "Trackers",
      "nav.buildGenerator": "Build Generator",
      "nav.incomePlanner": "Income Planner",
      "nav.survival": "Survival",
      "nav.illness": "Illness",
      "nav.loot": "Loot",
      "nav.baseBuilding": "Base Building",
      "nav.pvp": "PvP",
      "nav.vehicles": "Vehicles",
      "nav.map": "Map",
      "nav.heroes": "Heroes",
      "nav.builds": "Builds",
      "nav.abilities": "Abilities",
      "nav.items": "Items",
      "nav.strategy": "Strategy",
      "nav.coachTools": "Coach Tools",
      "nav.bases": "Bases",
      "nav.insects": "Insects",
      "nav.armor": "Armor",
      "nav.mutations": "Mutations",
      "nav.labs": "Labs",
      "nav.bosses": "Bosses",
      "nav.year1": "Year 1",
      "nav.crops": "Crops",
      "nav.communityCenter": "Community Center",
      "nav.fishing": "Fishing",
      "nav.mining": "Mining",
      "nav.friendship": "Friendship",
      "net.ribbonLeft": "Concept 3 magazine strategy layout",
      "net.ribbonRight": "EN / DA, mobile-first, revenue-ready",
      "net.topLabel": "Advertisement",
      "net.topCopy": "No advertisement is active in this placement.",
      "net.contentLabel": "Advertisement",
      "net.contentCopy": "Reserved for a clearly labeled in-content ad after approval. No ad is active right now.",
      "net.affiliateLabel": "Recommended tools",
      "net.affiliateTitle": "Affiliate-ready recommendations",
      "net.affiliateCopy": "Reserved for reviewed gaming tools, servers or gear. No affiliate recommendation is active right now.",
      "net.premiumLabel": "Premium",
      "net.premiumTitle": "Future premium path",
      "net.premiumCopy": "Prepared for future ad-free access, saved builds or advanced tools without changing the page structure.",
      "net.footerCopy": "Part of the Game Coach Hub network.",
      "net.footerSponsorLabel": "Sponsored",
      "net.footerSponsorCopy": "Footer sponsor area reserved for a clearly disclosed network partner. No sponsor is active right now."
    },
    da: {
      "nav.home": "Forside",
      "nav.games": "Spil",
      "nav.tools": "Tools",
      "nav.guides": "Guides",
      "nav.about": "Om",
      "nav.backHub": "Tilbage til Game Coach Hub",
      "nav.overview": "Overblik",
      "nav.beginner": "Begynder",
      "nav.money": "Penge",
      "nav.abilityCards": "Ability Cards",
      "nav.weapons": "Våben",
      "nav.activities": "Aktiviteter",
      "nav.calculators": "Calculators",
      "nav.trackers": "Trackers",
      "nav.buildGenerator": "Build Generator",
      "nav.incomePlanner": "Income Planner",
      "nav.survival": "Overlevelse",
      "nav.illness": "Sygdom",
      "nav.loot": "Loot",
      "nav.baseBuilding": "Base Building",
      "nav.pvp": "PvP",
      "nav.vehicles": "Køretøjer",
      "nav.map": "Kort",
      "nav.heroes": "Heroes",
      "nav.builds": "Builds",
      "nav.abilities": "Abilities",
      "nav.items": "Items",
      "nav.strategy": "Strategi",
      "nav.coachTools": "Coach Tools",
      "nav.bases": "Baser",
      "nav.insects": "Insekter",
      "nav.armor": "Armor",
      "nav.mutations": "Mutations",
      "nav.labs": "Labs",
      "nav.bosses": "Bosses",
      "nav.year1": "Year 1",
      "nav.crops": "Afgrøder",
      "nav.communityCenter": "Community Center",
      "nav.fishing": "Fishing",
      "nav.mining": "Mining",
      "nav.friendship": "Friendship",
      "net.ribbonLeft": "Concept 3 magazine strategy layout",
      "net.ribbonRight": "EN / DA, mobile-first, klar til indtjening",
      "net.topLabel": "Annonce",
      "net.topCopy": "Der er ingen aktiv annonce i denne placering.",
      "net.contentLabel": "Annonce",
      "net.contentCopy": "Reserveret til en tydeligt markeret in-content annonce efter godkendelse. Ingen annonce er aktiv lige nu.",
      "net.affiliateLabel": "Anbefalede værktøjer",
      "net.affiliateTitle": "Klar til affiliate-anbefalinger",
      "net.affiliateCopy": "Reserveret til gennemgåede gamingværktøjer, servere eller gear. Ingen affiliate-anbefaling er aktiv lige nu.",
      "net.premiumLabel": "Premium",
      "net.premiumTitle": "Fremtidigt premiumspor",
      "net.premiumCopy": "Forberedt til fremtidig annoncefri adgang, gemte builds eller avancerede værktøjer uden at ændre sidestrukturen.",
      "net.footerCopy": "En del af Game Coach Hub-netværket.",
      "net.footerSponsorLabel": "Sponsoreret",
      "net.footerSponsorCopy": "Footer sponsorområde reserveret til en tydeligt markeret netværkspartner. Ingen sponsor er aktiv lige nu."
    }
  };

  const exactDa = new Map([
    ["Home", "Forside"],
    ["Guides", "Guides"],
    ["Tools", "Tools"],
    ["Network", "Netværk"],
    ["Monetization", "Indtjening"],
    ["Strategy Desk", "Strategi-desk"],
    ["Money", "Penge"],
    ["Gold", "Guld"],
    ["Roles", "Roller"],
    ["Weapons", "Våben"],
    ["Beginner", "Begynder"],
    ["Survival", "Overlevelse"],
    ["Illness", "Sygdom"],
    ["Base", "Base"],
    ["Map", "Kort"],
    ["Open guide", "Åbn guide"],
    ["Open coach", "Åbn coach"],
    ["Recommended tools", "Anbefalede tools"],
    ["Sponsored", "Sponsoreret"],
    ["Advertisement", "Annonce"],
    ["Premium", "Premium"],
    ["Search your hero...", "Søg efter din hero..."],
    ["Search enemy hero...", "Søg efter enemy hero..."],
    ["Music On", "Musik til"],
    ["Music Off", "Musik fra"],
    ["Save build", "Gem build"],
    ["Build saved", "Build gemt"]
  ]);

  const replacementsDa = [
    [/Game Coach Hub network/g, "Game Coach Hub-netværk"],
    [/guide network/g, "guide-netværk"],
    [/Guide network/g, "Guide-netværk"],
    [/strategy guides/g, "strategiguides"],
    [/Strategy guides/g, "Strategiguides"],
    [/Beginner Guide/g, "Begynderguide"],
    [/Survival Guide/g, "Overlevelsesguide"],
    [/Illness Guide/g, "Sygdomsguide"],
    [/Money guide/g, "Pengeguide"],
    [/Weapon guide/g, "Våbenguide"],
    [/Open planner/g, "Åbn planner"],
    [/Open tracker/g, "Åbn tracker"],
    [/Open generator/g, "Åbn generator"],
    [/View builds/g, "Se builds"],
    [/View tiers/g, "Se tiers"],
    [/View weekly/g, "Se weekly"],
    [/Read beginner guide/g, "Læs begynderguide"],
    [/No advertisement is active/g, "Der er ingen aktiv annonce"],
    [/No sponsor is active/g, "Ingen sponsor er aktiv"],
    [/No affiliate recommendation is active/g, "Ingen affiliate-anbefaling er aktiv"],
    [/Future upgrade path/g, "Fremtidig upgrade path"],
    [/Premium-ready/g, "Premium-ready"],
    [/Revenue-ready placement/g, "Revenue-ready placering"],
    [/Hero guides/g, "Hero guides"],
    [/matchup guides/g, "matchup guides"],
    [/counter-items/g, "counter-items"],
    [/Back to Matchup Coach/g, "Tilbage til Matchup Coach"]
  ];

  function initialLanguage() {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (supported.has(urlLang)) return urlLang;
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_KEY);
    if (supported.has(saved)) return saved;
    return "en";
  }

  function translateText(value) {
    if (!value || !value.trim()) return value;
    const trimmed = value.trim();
    if (exactDa.has(trimmed)) return value.replace(trimmed, exactDa.get(trimmed));
    let output = value;
    replacementsDa.forEach(([pattern, replacement]) => {
      output = output.replace(pattern, replacement);
    });
    return output;
  }

  function pageText(lang, key) {
    const pageTranslations = window.GCH_PAGE_TRANSLATIONS;
    if (!pageTranslations || !key) return "";
    return pageTranslations[lang]?.[key] || pageTranslations.en?.[key] || "";
  }

  function setPageMeta(lang) {
    const meta = window.GCH_PAGE_META;
    if (!meta) return;
    const activeMeta = meta[lang] || meta.en || {};
    if (activeMeta.title) document.title = activeMeta.title;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');

    if (description && activeMeta.description) description.setAttribute("content", activeMeta.description);
    if (ogTitle && activeMeta.title) ogTitle.setAttribute("content", activeMeta.title);
    if (ogDescription && activeMeta.description) ogDescription.setAttribute("content", activeMeta.description);
    if (twitterTitle && activeMeta.title) twitterTitle.setAttribute("content", activeMeta.title);
    if (twitterDescription && activeMeta.description) twitterDescription.setAttribute("content", activeMeta.description);
    if (ogLocale) ogLocale.setAttribute("content", lang === "da" ? "da_DK" : "en_US");
  }

  function applyPageTranslations(lang) {
    document.querySelectorAll("[data-page-i18n]").forEach((element) => {
      const value = pageText(lang, element.dataset.pageI18n);
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-page-i18n-html]").forEach((element) => {
      const value = pageText(lang, element.dataset.pageI18nHtml);
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-page-i18n-placeholder]").forEach((element) => {
      const value = pageText(lang, element.dataset.pageI18nPlaceholder);
      if (value) element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-page-i18n-aria-label]").forEach((element) => {
      const value = pageText(lang, element.dataset.pageI18nAriaLabel);
      if (value) element.setAttribute("aria-label", value);
    });
  }

  function shouldSkip(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest("[data-no-i18n]")) return true;
    if (parent.closest("[data-page-i18n],[data-page-i18n-html]")) return true;
    return ["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA", "INPUT", "OPTION"].includes(parent.tagName);
  }

  function applyLanguage(lang) {
    const active = supported.has(lang) ? lang : "en";
    localStorage.setItem(STORAGE_KEY, active);
    document.documentElement.lang = active;
    document.body.dataset.language = active;
    applyPageTranslations(active);
    setPageMeta(active);

    document.querySelectorAll("[data-network-i18n]").forEach((element) => {
      const key = element.dataset.networkI18n;
      const value = dictionary[active][key] || dictionary.en[key];
      if (value) element.textContent = value;
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldSkip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.nodeValue.trim().length < 2) return;
      const parent = node.parentElement;
      if (!parent.dataset.i18nOriginalText) parent.dataset.i18nOriginalText = node.nodeValue;
      const original = parent.dataset.i18nOriginalText;
      node.nodeValue = active === "da" ? translateText(original) : original;
    });

    document.querySelectorAll("[placeholder]").forEach((element) => {
      if (!element.dataset.i18nOriginalPlaceholder) {
        element.dataset.i18nOriginalPlaceholder = element.getAttribute("placeholder") || "";
      }
      const original = element.dataset.i18nOriginalPlaceholder;
      element.setAttribute("placeholder", active === "da" ? translateText(original) : original);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const on = button.dataset.lang === active;
      button.classList.toggle("active", on);
      button.classList.toggle("is-active", on);
      button.setAttribute("aria-pressed", String(on));
    });

    window.dispatchEvent(new CustomEvent("gch:languagechange", { detail: { language: active } }));
  }

  function boot() {
    let queued = false;
    applyLanguage(initialLanguage());
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lang]");
      if (button) applyLanguage(button.dataset.lang);
    });

    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        applyLanguage(localStorage.getItem(STORAGE_KEY) || "en");
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.GCH_APPLY_LANGUAGE = applyLanguage;
  window.addEventListener("gch:contentrendered", () => {
    applyLanguage(localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || "en");
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
