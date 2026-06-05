(function () {
  const STORAGE_KEY = "gch_language";
  const supported = new Set(["en", "da"]);

  const translations = {
    en: {
      "meta.title": "Game Coach Hub | Premium Gaming Strategy Guides",
      "meta.description": "Game Coach Hub is a bilingual premium gaming guide network for Red Dead Online, DayZ, Deadlock, Grounded and Stardew Valley, built around editorial strategy guides, companion tools and transparent monetization zones.",
      "meta.ogTitle": "Game Coach Hub | Premium Gaming Strategy Guides",
      "meta.ogDescription": "A bilingual dark editorial hub for Red Dead Online, DayZ, Deadlock, Grounded and Stardew Valley guides, tools and strategy coverage.",
      "brand.aria": "Game Coach Hub home",
      "brand.tagline": "Strategy guides, tools and network hubs",
      "nav.aria": "Main navigation",
      "nav.menu": "Menu",
      "nav.edition": "Edition",
      "nav.guides": "Guides",
      "nav.desk": "Strategy Desk",
      "nav.monetization": "Monetization",
      "nav.network": "Network",
      "lang.aria": "Language selector",
      "hero.eyebrow": "Concept 3 / Magazine Strategy Layout",
      "hero.title": "Game Coach Hub",
      "hero.lede": "A premium editorial home for serious gaming guides, built to connect Red Dead Online, DayZ, Deadlock, Grounded and Stardew Valley coverage without turning the front page into a plain link directory.",
      "hero.primaryCta": "Explore the guide network",
      "hero.secondaryCta": "Review monetization zones",
      "hero.actionsAria": "Primary actions",
      "hero.imageAlt": "Dark premium editorial gaming strategy desk with maps and tactical screens",
      "hero.captionLabel": "Magazine strategy edition",
      "hero.captionValue": "Five active guide verticals",
      "brief.aria": "Network highlights",
      "brief.item1Label": "Network",
      "brief.item1Value": "5 live guide hubs",
      "brief.item2Label": "Language",
      "brief.item2Value": "English and Danish",
      "brief.item3Label": "SEO",
      "brief.item3Value": "Canonical, OG and sitemap",
      "brief.item4Label": "Revenue",
      "brief.item4Value": "Ad, sponsor and affiliate ready",
      "guides.eyebrow": "Active guide network",
      "guides.title": "Built as a magazine front page, not a bookmark list.",
      "guides.intro": "Each destination keeps its own identity while sharing the same premium editorial structure, card rhythm, disclosure language and mobile navigation rules.",
      "rdo.kicker": "Economy, roles and progression",
      "rdo.title": "Red Dead Online Guide",
      "rdo.copy": "A western strategy hub for money routes, gold planning, XP, roles, ability cards, weapons and practical progression decisions.",
      "dayz.kicker": "Survival, illness and loot",
      "dayz.title": "DayZ Survival Guide",
      "dayz.copy": "A grounded survival archive for beginners, health, food, water, weapons, PvP, base building, vehicles and map knowledge.",
      "deadlock.kicker": "Heroes, matchups and builds",
      "deadlock.title": "Deadlock Coach",
      "deadlock.copy": "A companion-style coaching hub for hero decisions, matchup reading, counters, ability priorities and build direction.",
      "grounded.kicker": "Backyard survival and labs",
      "grounded.title": "Grounded Survival Guide",
      "grounded.copy": "A backyard survival strategy guide for first-day routing, base planning, insect prep, weapons, armor, mutations and lab progression.",
      "stardew.kicker": "Farm planning and economy",
      "stardew.title": "Stardew Valley Strategy Guide",
      "stardew.copy": "A cozy farming optimization guide for Year 1 planning, crops, Community Center prep, money routes, fishing, mining and friendships.",
      "cards.openGuide": "Open guide",
      "cards.openCoach": "Open coach",
      "categories.aria": "Guide categories",
      "categories.survivalTitle": "Survival Guides",
      "categories.survivalCopy": "DayZ and Grounded focus on survival loops, risk management, routes and preparation.",
      "categories.strategyTitle": "Strategy / Economy Guides",
      "categories.strategyCopy": "Red Dead Online and Stardew Valley focus on progression, money planning, systems and long-term decisions.",
      "categories.buildTitle": "Hero / Build Guides",
      "categories.buildCopy": "Deadlock stays focused on heroes, builds, matchups, counters and coaching workflows.",
      "desk.eyebrow": "Strategy desk",
      "desk.title": "The front page now behaves like an editorial issue.",
      "desk.copy": "Visitors get a clear lead story, scan-friendly sections, direct routing to the five guide verticals and a consistent place for future tool, sponsor and premium surfaces.",
      "desk.link": "View the network structure",
      "desk.stackAria": "Editorial priorities",
      "desk.article1Title": "Guide discovery first",
      "desk.article1Copy": "Cards explain why each hub matters before asking the user to leave the page.",
      "desk.article2Title": "Shared visual grammar",
      "desk.article2Copy": "Header, footer, hero, article cards, guide cards and disclosure blocks are reusable across the network.",
      "desk.article3Title": "Mobile-first reading",
      "desk.article3Copy": "Sections collapse into a clean one-column flow with stable cards, readable text and reachable navigation.",
      "money.eyebrow": "Transparent monetization layer",
      "money.title": "Revenue-ready without inactive ads or unapproved partners.",
      "money.intro": "The layout reserves professional surfaces for ads, sponsors, affiliate recommendations and premium upgrades. Empty zones are labeled honestly until real campaigns are active.",
      "money.adLabel": "Advertisement",
      "money.adCopy": "No advertisement is active in this placement.",
      "money.sponsorLabel": "Sponsored",
      "money.sponsorTitle": "Sponsor-ready feature block",
      "money.sponsorCopy": "Reserved for clearly disclosed, relevant gaming sponsors only. No campaign is active right now.",
      "money.affiliateLabel": "Recommended tools",
      "money.affiliateTitle": "Affiliate-ready recommendations",
      "money.affiliateCopy": "Reserved for reviewed tools, servers or gear that fit the guides. No affiliate recommendation is active right now.",
      "money.premiumLabel": "Premium",
      "money.premiumTitle": "Future upgrade path",
      "money.premiumCopy": "The design supports a future ad-free or advanced-tools offer without changing the page structure.",
      "money.premiumCta": "See network links",
      "money.disclosure": "Disclosure: Game Coach Hub may use ads, sponsorships or affiliate links to support free guide content. Paid placements will be clearly labeled.",
      "network.eyebrow": "Network map",
      "network.title": "Five guide verticals connected by one master template.",
      "network.intro": "Game Coach Hub is ready to act as the shared editorial entry point across survival, strategy, economy and build-focused guides.",
      "network.rdo": "Red Dead Online Guide",
      "network.dayz": "DayZ Survival Guide",
      "network.deadlock": "Deadlock Coach",
      "network.grounded": "Grounded Survival Guide",
      "network.stardew": "Stardew Valley Strategy Guide",
      "footer.copy": "Premium bilingual gaming guides, companion tools and strategy pages for the full guide network.",
      "footer.rights": "All rights reserved.",
      "footer.guides": "Guides",
      "footer.revenue": "Revenue",
      "footer.revenueCopy": "Ad, sponsor, affiliate and premium areas are built in with clear disclosure rules.",
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
      "meta.title": "Game Coach Hub | Premium gaming-strategiguides",
      "meta.description": "Game Coach Hub er et tosproget premium gaming-guide-netværk til Red Dead Online, DayZ, Deadlock, Grounded og Stardew Valley med redaktionelle strategiguides, companion-tools og tydelige monetization-zoner.",
      "meta.ogTitle": "Game Coach Hub | Premium gaming-strategiguides",
      "meta.ogDescription": "Et tosproget mørkt editorial hub til Red Dead Online, DayZ, Deadlock, Grounded og Stardew Valley guides, tools og strategiindhold.",
      "brand.aria": "Game Coach Hub forside",
      "brand.tagline": "Strategiguides, tools og network hubs",
      "nav.aria": "Hovednavigation",
      "nav.menu": "Menu",
      "nav.edition": "Edition",
      "nav.guides": "Guides",
      "nav.desk": "Strategi-desk",
      "nav.monetization": "Indtjening",
      "nav.network": "Netværk",
      "lang.aria": "Sprogvælger",
      "hero.eyebrow": "Concept 3 / Magazine Strategy Layout",
      "hero.title": "Game Coach Hub",
      "hero.lede": "En premium redaktionel forside til seriøse gaming-guides, bygget til at forbinde Red Dead Online, DayZ, Deadlock, Grounded og Stardew Valley uden at forsiden bliver en simpel linkliste.",
      "hero.primaryCta": "Udforsk guide-netværket",
      "hero.secondaryCta": "Gennemse monetization-zoner",
      "hero.actionsAria": "Primære handlinger",
      "hero.imageAlt": "Mørkt premium redaktionelt gaming-strategibord med kort og taktiske skærme",
      "hero.captionLabel": "Magazine strategy edition",
      "hero.captionValue": "Fem aktive guide-vertikaler",
      "brief.aria": "Netværks-highlights",
      "brief.item1Label": "Netværk",
      "brief.item1Value": "5 live guide hubs",
      "brief.item2Label": "Sprog",
      "brief.item2Value": "Engelsk og dansk",
      "brief.item3Label": "SEO",
      "brief.item3Value": "Canonical, OG og sitemap",
      "brief.item4Label": "Indtjening",
      "brief.item4Value": "Klar til ads, sponsor og affiliate",
      "guides.eyebrow": "Aktivt guide-netværk",
      "guides.title": "Bygget som en magazine-forside, ikke en bookmark-liste.",
      "guides.intro": "Hver destination beholder sin egen identitet og deler samtidig premium editorial struktur, kortrytme, disclosure-sprog og mobile navigationsregler.",
      "rdo.kicker": "Økonomi, roller og progression",
      "rdo.title": "Red Dead Online Guide",
      "rdo.copy": "Et western strategy hub til money routes, gold planning, XP, roller, ability cards, våben og praktiske progressionsvalg.",
      "dayz.kicker": "Survival, sygdom og loot",
      "dayz.title": "DayZ Survival Guide",
      "dayz.copy": "Et grounded survival-arkiv til begyndere, health, food, water, våben, PvP, base building, vehicles og map knowledge.",
      "deadlock.kicker": "Heroes, matchups og builds",
      "deadlock.title": "Deadlock Coach",
      "deadlock.copy": "Et companion-style coaching hub til hero decisions, matchup reading, counters, ability priorities og build direction.",
      "grounded.kicker": "Backyard survival og labs",
      "grounded.title": "Grounded Survival Guide",
      "grounded.copy": "En backyard survival strategy guide til first-day routing, base planning, insect prep, våben, armor, mutations og lab progression.",
      "stardew.kicker": "Farm planning og economy",
      "stardew.title": "Stardew Valley Strategy Guide",
      "stardew.copy": "En cozy farming optimization guide til Year 1 planning, crops, Community Center prep, money routes, fishing, mining og friendships.",
      "cards.openGuide": "Åbn guide",
      "cards.openCoach": "Åbn coach",
      "categories.aria": "Guide-kategorier",
      "categories.survivalTitle": "Survival Guides",
      "categories.survivalCopy": "DayZ og Grounded fokuserer på survival loops, risk management, routes og preparation.",
      "categories.strategyTitle": "Strategy / Economy Guides",
      "categories.strategyCopy": "Red Dead Online og Stardew Valley fokuserer på progression, money planning, systems og long-term decisions.",
      "categories.buildTitle": "Hero / Build Guides",
      "categories.buildCopy": "Deadlock holder fokus på heroes, builds, matchups, counters og coaching workflows.",
      "desk.eyebrow": "Strategi-desk",
      "desk.title": "Forsiden opfører sig nu som en editorial issue.",
      "desk.copy": "Besøget starter med en klar lead story, scan-venlige sektioner, direkte routing til de fem guide-vertikaler og faste pladser til fremtidige tool-, sponsor- og premium-flader.",
      "desk.link": "Se netværksstrukturen",
      "desk.stackAria": "Redaktionelle prioriteter",
      "desk.article1Title": "Guide discovery først",
      "desk.article1Copy": "Kortene forklarer hvorfor hvert hub er relevant, før brugeren sendes videre.",
      "desk.article2Title": "Fælles visuel grammatik",
      "desk.article2Copy": "Header, footer, hero, article cards, guide cards og disclosure blocks kan genbruges på tværs af netværket.",
      "desk.article3Title": "Mobile-first læsning",
      "desk.article3Copy": "Sektionerne kollapser til et rent one-column flow med stabile kort, læsbar tekst og nem navigation.",
      "money.eyebrow": "Transparent monetization layer",
      "money.title": "Revenue-ready uden inaktive ads eller ikke-godkendte partners.",
      "money.intro": "Layoutet reserverer professionelle flader til ads, sponsors, affiliate recommendations og premium upgrades. Tomme zoner markeres ærligt indtil rigtige kampagner er aktive.",
      "money.adLabel": "Annonce",
      "money.adCopy": "Der er ingen aktiv annonce i denne placering.",
      "money.sponsorLabel": "Sponsoreret",
      "money.sponsorTitle": "Sponsor-ready feature block",
      "money.sponsorCopy": "Reserveret til tydeligt markerede, relevante gaming-sponsorer. Ingen kampagne er aktiv lige nu.",
      "money.affiliateLabel": "Anbefalede tools",
      "money.affiliateTitle": "Affiliate-ready recommendations",
      "money.affiliateCopy": "Reserveret til reviewede tools, servers eller gear der passer til guiderne. Ingen affiliate-anbefaling er aktiv lige nu.",
      "money.premiumLabel": "Premium",
      "money.premiumTitle": "Fremtidig upgrade path",
      "money.premiumCopy": "Designet understøtter et fremtidigt ad-free eller advanced-tools tilbud uden at ændre sidestrukturen.",
      "money.premiumCta": "Se netværkslinks",
      "money.disclosure": "Disclosure: Game Coach Hub kan bruge ads, sponsorships eller affiliate links til at støtte gratis guideindhold. Betalte placeringer markeres tydeligt.",
      "network.eyebrow": "Netværkskort",
      "network.title": "Fem guide-vertikaler forbundet af en master-template.",
      "network.intro": "Game Coach Hub er klar som fælles editorial entry point på tværs af survival, strategy, economy og build-fokuserede guides.",
      "network.rdo": "Red Dead Online Guide",
      "network.dayz": "DayZ Survival Guide",
      "network.deadlock": "Deadlock Coach",
      "network.grounded": "Grounded Survival Guide",
      "network.stardew": "Stardew Valley Strategy Guide",
      "footer.copy": "Premium tosprogede gaming-guides, companion tools og strategisider til hele guide-netværket.",
      "footer.rights": "Alle rettigheder forbeholdes.",
      "footer.guides": "Guides",
      "footer.revenue": "Revenue",
      "footer.revenueCopy": "Ad-, sponsor-, affiliate- og premium-områder er indbygget med klare disclosure-regler.",
      "net.ribbonLeft": "Concept 3 magazine strategy layout",
      "net.ribbonRight": "EN / DA, mobile-first, klar til indtjening",
      "net.topLabel": "Annonce",
      "net.topCopy": "Der er ingen aktiv annonce i denne placering.",
      "net.contentLabel": "Annonce",
      "net.contentCopy": "Reserveret til en tydeligt markeret in-content annonce efter godkendelse. Ingen annonce er aktiv lige nu.",
      "net.affiliateLabel": "Anbefalede tools",
      "net.affiliateTitle": "Affiliate-ready anbefalinger",
      "net.affiliateCopy": "Reserveret til gennemgåede gaming-tools, servere eller gear. Ingen affiliate-anbefaling er aktiv lige nu.",
      "net.premiumLabel": "Premium",
      "net.premiumTitle": "Fremtidig premium path",
      "net.premiumCopy": "Forberedt til fremtidig ad-free adgang, gemte builds eller avancerede tools uden at ændre sidestrukturen.",
      "net.footerCopy": "En del af Game Coach Hub-netværket.",
      "net.footerSponsorLabel": "Sponsoreret",
      "net.footerSponsorCopy": "Footer sponsorområde reserveret til en tydeligt markeret netværkspartner. Ingen sponsor er aktiv lige nu."
    }
  };

  function getInitialLanguage() {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (supported.has(urlLang)) {
      return urlLang;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (supported.has(saved)) {
      return saved;
    }

    return "en";
  }

  function text(lang, key) {
    return translations[lang][key] || translations.en[key] || "";
  }

  function setMeta(lang) {
    document.title = text(lang, "meta.title");

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (description) description.setAttribute("content", text(lang, "meta.description"));
    if (ogTitle) ogTitle.setAttribute("content", text(lang, "meta.ogTitle"));
    if (ogDescription) ogDescription.setAttribute("content", text(lang, "meta.ogDescription"));
    if (twitterTitle) twitterTitle.setAttribute("content", text(lang, "meta.ogTitle"));
    if (twitterDescription) twitterDescription.setAttribute("content", text(lang, "meta.ogDescription"));
    if (ogLocale) ogLocale.setAttribute("content", lang === "da" ? "da_DK" : "en_US");
  }

  function applyLanguage(lang) {
    const activeLang = supported.has(lang) ? lang : "en";
    document.documentElement.lang = activeLang;
    document.body.dataset.language = activeLang;
    localStorage.setItem(STORAGE_KEY, activeLang);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = text(activeLang, element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", text(activeLang, element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", text(activeLang, element.dataset.i18nAlt));
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const isActive = button.dataset.lang === activeLang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setMeta(activeLang);
    window.dispatchEvent(new CustomEvent("gch:languagechange", { detail: { language: activeLang } }));
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button) return;
    applyLanguage(button.dataset.lang);
  });

  applyLanguage(getInitialLanguage());
})();
