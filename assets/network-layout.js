(function () {
  const siteConfigs = {
    hub: {
      theme: "theme-hub",
      mark: "GCH",
      brand: "Game Coach Hub",
      tagline: "Strategy guides and tools",
      home: "/",
      links: [
        ["nav.home", "Home", "/"],
        ["nav.games", "Games", "#guides"],
        ["nav.tools", "Tools", "#monetization"],
        ["nav.guides", "Guides", "#network"],
        ["nav.about", "About", "#desk"]
      ]
    },
    rdo: {
      theme: "theme-rdo",
      mark: "RDO",
      brand: "Red Dead Online Guide",
      tagline: "Money, roles and builds",
      home: "/red-dead-online/",
      links: [
        ["nav.backHub", "Back to Game Coach Hub", "/"],
        ["nav.overview", "Overview", "/red-dead-online/"],
        ["nav.beginner", "Beginner", "/red-dead-online/beginner-roadmap.html"],
        ["nav.money", "Money", "/red-dead-online/money-guide.html"],
        ["nav.abilityCards", "Ability Cards", "/red-dead-online/ability-card-generator/"],
        ["nav.weapons", "Weapons", "/red-dead-online/weapons.html"],
        ["nav.activities", "Activities", "/red-dead-online/activities.html"],
        ["nav.calculators", "Calculators", "/red-dead-online/calculators.html"],
        ["nav.trackers", "Trackers", "/red-dead-online/daily-tracker.html"],
        ["nav.buildGenerator", "Build Generator", "/red-dead-online/build-generator.html"],
        ["nav.incomePlanner", "Income Planner", "/red-dead-online/income-planner.html"]
      ]
    },
    dayz: {
      theme: "theme-dayz",
      mark: "DZ",
      brand: "DayZ Survival Guide",
      tagline: "Survival, illness and loot",
      home: "/dayz/",
      links: [
        ["nav.backHub", "Back to Game Coach Hub", "/"],
        ["nav.overview", "Overview", "/dayz/"],
        ["nav.beginner", "Beginner", "/dayz/beginner.html"],
        ["nav.survival", "Survival", "/dayz/survival.html"],
        ["nav.illness", "Illness", "/dayz/illness.html"],
        ["nav.loot", "Loot", "/dayz/loot.html"],
        ["nav.baseBuilding", "Base Building", "/dayz/base-building.html"],
        ["nav.weapons", "Weapons", "/dayz/weapons.html"],
        ["nav.pvp", "PvP", "/dayz/pvp.html"],
        ["nav.vehicles", "Vehicles", "/dayz/vehicles.html"],
        ["nav.map", "Map", "/dayz/map-guide.html"]
      ]
    },
    deadlock: {
      theme: "theme-deadlock",
      mark: "DL",
      brand: "Deadlock Coach",
      tagline: "Heroes, matchups and builds",
      home: "/deadlock/",
      links: [
        ["nav.backHub", "Back to Game Coach Hub", "/"],
        ["nav.overview", "Overview", "/deadlock/"],
        ["nav.heroes", "Heroes", "/deadlock/#heroes"],
        ["nav.builds", "Builds", "/deadlock/#builds"],
        ["nav.abilities", "Abilities", "/deadlock/#abilities"],
        ["nav.items", "Items", "/deadlock/#items"],
        ["nav.strategy", "Strategy", "/deadlock/#strategy"],
        ["nav.coachTools", "Coach Tools", "/deadlock/#coach-tools"]
      ]
    },
    grounded: {
      theme: "theme-grounded",
      mark: "GND",
      brand: "Grounded Survival Guide",
      tagline: "Backyard survival and labs",
      home: "/grounded/",
      links: [
        ["nav.backHub", "Back to Game Coach Hub", "/"],
        ["nav.overview", "Overview", "/grounded/"],
        ["nav.beginner", "Beginner", "/grounded/#beginner"],
        ["nav.bases", "Bases", "/grounded/#bases"],
        ["nav.insects", "Insects", "/grounded/#insects"],
        ["nav.weapons", "Weapons", "/grounded/#weapons"],
        ["nav.armor", "Armor", "/grounded/#bases"],
        ["nav.mutations", "Mutations", "/grounded/#future-tools"],
        ["nav.labs", "Labs", "/grounded/#labs"],
        ["nav.bosses", "Bosses", "/grounded/#bosses"]
      ]
    },
    stardew: {
      theme: "theme-stardew",
      mark: "SDV",
      brand: "Stardew Valley Strategy Guide",
      tagline: "Farm planning and economy",
      home: "/stardew-valley/",
      links: [
        ["nav.backHub", "Back to Game Coach Hub", "/"],
        ["nav.overview", "Overview", "/stardew-valley/"],
        ["nav.beginner", "Beginner", "/stardew-valley/#beginner"],
        ["nav.year1", "Year 1", "/stardew-valley/#year-1"],
        ["nav.crops", "Crops", "/stardew-valley/#crops"],
        ["nav.communityCenter", "Community Center", "/stardew-valley/#community-center"],
        ["nav.money", "Money", "/stardew-valley/#money"],
        ["nav.fishing", "Fishing", "/stardew-valley/#future-tools"],
        ["nav.mining", "Mining", "/stardew-valley/#friendship"],
        ["nav.friendship", "Friendship", "/stardew-valley/#friendship"]
      ]
    }
  };

  function detectSite() {
    const explicit = document.body?.dataset?.site;
    if (explicit && siteConfigs[explicit]) return explicit;
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith("/red-dead-online")) return "rdo";
    if (path.startsWith("/dayz")) return "dayz";
    if (path.startsWith("/deadlock")) return "deadlock";
    if (path.startsWith("/grounded")) return "grounded";
    if (path.startsWith("/stardew-valley")) return "stardew";
    return "hub";
  }

  const siteKey = detectSite();
  const config = siteConfigs[siteKey];

  function t(key, fallback) {
    return `<span data-i18n="${key}" data-network-i18n="${key}">${fallback}</span>`;
  }

  function languageSwitch() {
    return [
      '<div class="gch-language-switch" data-no-i18n="true" aria-label="Language selector">',
      '<button class="gch-lang-btn" type="button" data-lang="en" aria-pressed="false">EN</button>',
      '<button class="gch-lang-btn" type="button" data-lang="da" aria-pressed="false">DA</button>',
      "</div>"
    ].join("");
  }

  function linkMarkup([key, label, href]) {
    return `<a href="${href}" data-network-i18n="${key}">${label}</a>`;
  }

  function sectionLinks() {
    return config.links.map(linkMarkup).join("");
  }

  function ensureHeader() {
    const existing = document.querySelector(".site-header,.gch-header,.topbar,.gch-network-header");

    if (!existing) {
      const header = document.createElement("header");
      header.className = "gch-network-header";
      header.innerHTML = [
        '<div class="gch-network-nav">',
        `<a class="gch-network-brand" href="${config.home}" aria-label="${config.brand} home">`,
        `<span class="gch-network-mark">${config.mark}</span>`,
        `<span><strong>${config.brand}</strong><small>${config.tagline}</small></span>`,
        "</a>",
        '<button class="gch-nav-toggle" type="button" aria-expanded="false">Menu</button>',
        '<nav class="gch-links" aria-label="Main navigation">',
        sectionLinks(),
        languageSwitch(),
        "</nav>",
        "</div>"
      ].join("");
      document.body.insertBefore(header, document.body.firstChild);
      bindNav(header);
      return;
    }

    const brand = existing.querySelector(".brand,.gch-brand,.gch-network-brand");
    if (brand) {
      brand.setAttribute("href", config.home);
    }

    const navContainer =
      existing.querySelector(".nav,.gch-nav,.nav-shell,.gch-network-nav") || existing;
    const links =
      existing.querySelector(".nav-links,.gch-links,.site-nav") || existing.querySelector("nav");

    existing.querySelectorAll(".gch-network-links").forEach((element) => element.remove());

    if (links && siteKey !== "hub") {
      links.innerHTML = sectionLinks() + languageSwitch();
    }

    if (links && !links.querySelector(".gch-language-switch,.language-switch")) {
      links.insertAdjacentHTML("beforeend", languageSwitch());
    }

    if (!existing.querySelector(".nav-toggle,.gch-nav-toggle")) {
      const button = document.createElement("button");
      button.className = "nav-toggle";
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Menu";
      navContainer.insertBefore(button, links || navContainer.lastChild);
    }

    bindNav(existing);
  }

  function bindNav(root) {
    const button = root.querySelector(".nav-toggle,.gch-nav-toggle");
    const links = root.querySelector(".nav-links,.gch-links,.site-nav");
    if (!button || !links || button.dataset.gchBound) return;

    button.dataset.gchBound = "true";
    button.addEventListener("click", () => {
      const open = !links.classList.contains("is-open");
      links.classList.toggle("is-open", open);
      links.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open", "open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  function ensureRibbon() {
    if (document.querySelector(".gch-network-ribbon")) return;
    const ribbon = document.createElement("div");
    ribbon.className = "gch-network-ribbon";
    ribbon.innerHTML = [
      `<span><b>${config.brand}:</b> ${t("net.ribbonLeft", "Concept 3 magazine strategy layout")}</span>`,
      `<span>${t("net.ribbonRight", "EN / DA, mobile-first, revenue-ready")}</span>`
    ].join("");
    const after = document.querySelector(".site-header,.gch-header,.topbar,.gch-network-header");
    if (after) after.insertAdjacentElement("afterend", ribbon);
  }

  function zone(kind) {
    if (kind === "top") {
      return `<aside class="gch-monetization-zone gch-top-slot" data-gch-slot="top" data-ad-slot="top-sponsor"><span class="slot-label">${t("net.topLabel", "Advertisement")}</span><p>${t("net.topCopy", "No advertisement is active in this placement.")}</p></aside>`;
    }

    if (kind === "content") {
      return `<aside class="gch-monetization-zone gch-content-slot" data-gch-slot="content" data-ad-slot="in-content"><span class="slot-label">${t("net.contentLabel", "Advertisement")}</span><p>${t("net.contentCopy", "Reserved for a clearly labeled in-content ad after approval. No ad is active right now.")}</p></aside>`;
    }

    if (kind === "affiliate") {
      return `<aside class="gch-affiliate-block" data-gch-slot="affiliate"><span class="slot-label">${t("net.affiliateLabel", "Recommended tools")}</span><h3>${t("net.affiliateTitle", "Affiliate-ready recommendations")}</h3><p>${t("net.affiliateCopy", "Reserved for reviewed gaming tools, servers or gear. No affiliate recommendation is active right now.")}</p></aside>`;
    }

    return `<aside class="gch-premium-cta" data-gch-slot="premium"><span class="slot-label">${t("net.premiumLabel", "Premium")}</span><h3>${t("net.premiumTitle", "Future premium path")}</h3><p>${t("net.premiumCopy", "Prepared for future ad-free access, saved builds or advanced tools without changing the page structure.")}</p></aside>`;
  }

  function ensureMonetizationZones() {
    const main = document.querySelector("main") || document.querySelector(".app") || document.body;

    if (!document.querySelector('[data-gch-slot="top"]')) {
      const header = document.querySelector(".gch-network-ribbon") || document.querySelector(".site-header,.gch-header,.topbar,.gch-network-header");
      const top = document.createElement("div");
      top.innerHTML = zone("top");
      if (header) header.insertAdjacentElement("afterend", top.firstElementChild);
      else main.insertBefore(top.firstElementChild, main.firstChild);
    }

    if (!document.querySelector('[data-gch-slot="content"]')) {
      const anchor = main.querySelector(".section:nth-of-type(2),.section-block:nth-of-type(2),.hero + section,.network-strip,.panel");
      const wrap = document.createElement("div");
      wrap.innerHTML = zone("content");
      if (anchor) anchor.insertAdjacentElement("afterend", wrap.firstElementChild);
      else main.appendChild(wrap.firstElementChild);
    }

    if (!document.querySelector('[data-gch-slot="affiliate"]')) {
      const wrap = document.createElement("div");
      wrap.innerHTML = zone("affiliate");
      const cards = main.querySelector(".cards,.card-grid,.guide-grid,.main-grid");
      if (cards) cards.insertAdjacentElement("afterend", wrap.firstElementChild);
      else main.appendChild(wrap.firstElementChild);
    }

    if (!document.querySelector('[data-gch-slot="premium"]')) {
      const wrap = document.createElement("div");
      wrap.innerHTML = zone("premium");
      main.appendChild(wrap.firstElementChild);
    }
  }

  function ensureFooterSponsor() {
    let footer = document.querySelector(".site-footer,.gch-footer,.footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "gch-footer";
      footer.innerHTML = `<div class="gch-container"><strong>${config.brand}</strong><p>${t("net.footerCopy", "Part of the Game Coach Hub network.")}</p></div>`;
      document.body.appendChild(footer);
    }

    if (footer.querySelector(".gch-footer-sponsor")) return;
    const box = document.createElement("aside");
    box.className = "gch-footer-sponsor";
    box.setAttribute("data-gch-slot", "footer-sponsor");
    box.innerHTML = `<span class="slot-label">${t("net.footerSponsorLabel", "Sponsored")}</span><p>${t("net.footerSponsorCopy", "Footer sponsor area reserved for a clearly disclosed network partner. No sponsor is active right now.")}</p>`;
    footer.appendChild(box);
  }

  function boot() {
    document.body.classList.add("gch-network-page", config.theme);
    ensureHeader();
    ensureRibbon();
    ensureMonetizationZones();
    ensureFooterSponsor();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
