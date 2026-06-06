(function () {
  const STORAGE_KEY = "gch_language";

  const effectKeys = [
    "sniperDamage",
    "normalDamage",
    "sniperSurvivability",
    "generalSurvivability",
    "sustain",
    "mobility",
    "pvp",
    "pve"
  ];

  const metricLabels = {
    en: {
      sniperDamage: "Sniper damage",
      normalDamage: "Normal damage",
      sniperSurvivability: "Sniper survivability",
      generalSurvivability: "General survivability",
      sustain: "Sustain",
      mobility: "Mobility / stamina",
      pvp: "PvP fit",
      pve: "PvE fit"
    },
    da: {
      sniperDamage: "Sniper damage",
      normalDamage: "Normal damage",
      sniperSurvivability: "Sniper survivability",
      generalSurvivability: "General survivability",
      sustain: "Sustain",
      mobility: "Mobility / stamina",
      pvp: "PvP fit",
      pve: "PvE fit"
    }
  };

  const ui = {
    en: {
      emptyTitle: "Pick your cards to generate a build.",
      emptyCopy: "The output updates instantly with build name, ratings, weapons, strengths, weaknesses and recommendations.",
      overall: "Overall rating",
      guideRating: "Guide rating",
      weapons: "Best weapons",
      strengths: "Strengths",
      weaknesses: "Weaknesses",
      recommendations: "Recommendations",
      explanation: "Explanation",
      noMajorWeakness: "No major weakness from this guide model.",
      balancedStrength: "Balanced enough for mixed free roam.",
      defaultRecommendation: "Use the result as a planning baseline, then adjust after testing the build in your preferred activity.",
      duplicatePassive: "Use three different passive cards. Duplicate passive picks are ignored in the rating.",
      scopedMismatch: "Sharpshooter performs best with scoped rifles. Consider Carcano Rifle or Rolling Block Rifle.",
      addSharpshooter: "For a sniper-focused setup, consider adding Sharpshooter.",
      addSustain: "For PvE grinding, consider Strange Medicine, Cold Blooded or Quite an Inspiration for more sustain.",
      addDefense: "This aggressive setup is light on defense. Iron Lung, Fool Me Once or Never Without One can stabilize it.",
      slipperyWeapon: "Slippery Bastard fits evasive close or mixed loadouts better than pure scoped-rifle play.",
      pibWeapons: "Paint It Black pairs well with repeaters, revolvers and headshot-focused PvP routines.",
      slowAggressive: "Slow and Steady is strongest when you accept a defensive tempo instead of forcing a pure rush style.",
      strengthSniperDamage: "Strong scoped-rifle damage profile.",
      strengthNormalDamage: "Strong general damage for repeaters, sidearms or shotguns.",
      strengthSniperSurvival: "Good survivability while taking long-range fights.",
      strengthGeneralSurvival: "Strong general survivability under pressure.",
      strengthSustain: "Good sustain for long sessions and PvE loops.",
      strengthMobility: "Good mobility and stamina support.",
      strengthPvp: "Good PvP fit for contested fights.",
      strengthPve: "Good PvE fit for farming and routine content.",
      weakSniperDamage: "Low sniper damage if you plan to play scoped rifles.",
      weakNormalDamage: "Low general damage for close or repeater fights.",
      weakSniperSurvival: "Limited long-range survivability.",
      weakGeneralSurvival: "Low defensive safety if fights get messy.",
      weakSustain: "Limited sustain for long PvE loops.",
      weakMobility: "Mobility and stamina support are limited.",
      weakPvp: "PvP fit is modest compared with dedicated duel builds.",
      weakPve: "PvE efficiency is modest compared with grind-focused builds."
    },
    da: {
      emptyTitle: "Vælg dine cards for at generere et build.",
      emptyCopy: "Outputtet opdateres med build name, ratings, weapons, strengths, weaknesses og recommendations.",
      overall: "Overall rating",
      guideRating: "Guide rating",
      weapons: "Best weapons",
      strengths: "Strengths",
      weaknesses: "Weaknesses",
      recommendations: "Recommendations",
      explanation: "Forklaring",
      noMajorWeakness: "Ingen stor weakness i denne guide-model.",
      balancedStrength: "Balancen fungerer til mixed free roam.",
      defaultRecommendation: "Brug resultatet som planning baseline, og juster efter test i den aktivitet du spiller mest.",
      duplicatePassive: "Brug tre forskellige passive cards. Duplicate passive picks ignoreres i ratingen.",
      scopedMismatch: "Sharpshooter fungerer bedst med scoped rifles. Overvej Carcano Rifle eller Rolling Block Rifle.",
      addSharpshooter: "Til et sniper-fokuseret setup kan du overveje Sharpshooter.",
      addSustain: "Til PvE grinding kan Strange Medicine, Cold Blooded eller Quite an Inspiration give mere sustain.",
      addDefense: "Dette aggressive setup er let på defense. Iron Lung, Fool Me Once eller Never Without One kan stabilisere det.",
      slipperyWeapon: "Slippery Bastard passer bedre til evasive close eller mixed loadouts end ren scoped-rifle play.",
      pibWeapons: "Paint It Black passer godt med repeaters, revolvers og headshot-fokuserede PvP routines.",
      slowAggressive: "Slow and Steady er stærkest, når du accepterer defensive tempo i stedet for pure rush style.",
      strengthSniperDamage: "Stærk scoped-rifle damage profile.",
      strengthNormalDamage: "Stærk general damage til repeaters, sidearms eller shotguns.",
      strengthSniperSurvival: "God survivability i long-range fights.",
      strengthGeneralSurvival: "Stærk general survivability under pressure.",
      strengthSustain: "God sustain til lange sessions og PvE loops.",
      strengthMobility: "God mobility og stamina support.",
      strengthPvp: "God PvP fit til contested fights.",
      strengthPve: "God PvE fit til farming og routine content.",
      weakSniperDamage: "Lav sniper damage hvis du vil spille scoped rifles.",
      weakNormalDamage: "Lav general damage til close eller repeater fights.",
      weakSniperSurvival: "Begrænset long-range survivability.",
      weakGeneralSurvival: "Lav defensive safety hvis fights bliver messy.",
      weakSustain: "Begrænset sustain til lange PvE loops.",
      weakMobility: "Mobility og stamina support er begrænset.",
      weakPvp: "PvP fit er modest sammenlignet med dedicated duel builds.",
      weakPve: "PvE efficiency er modest sammenlignet med grind-focused builds."
    }
  };

  const cards = [
    {
      id: "paint-it-black",
      type: "deadeye",
      name: "Paint It Black",
      tags: ["accuracy", "headshot", "pvp", "repeater", "sidearm"],
      effects: { normalDamage: 9, mobility: 2, pvp: 8, pve: 5 },
      bestWith: ["Repeaters", "Revolvers", "Bow"],
      copy: {
        en: "Best when you want reliable target painting and headshot pressure.",
        da: "Bedst når du vil have reliable target painting og headshot pressure."
      }
    },
    {
      id: "slow-and-steady",
      type: "deadeye",
      name: "Slow and Steady",
      tags: ["tank", "defensive", "pvp"],
      effects: { sniperSurvivability: 8, generalSurvivability: 12, sustain: 2, mobility: -4, pvp: 5 },
      bestWith: ["Carcano Rifle", "Lancaster Repeater", "Shotgun"],
      copy: {
        en: "A defensive Dead Eye option for slower, safer pressure.",
        da: "Et defensivt Dead Eye valg til langsommere og mere sikker pressure."
      }
    },
    {
      id: "slippery-bastard",
      type: "deadeye",
      name: "Slippery Bastard",
      tags: ["evasive", "mobility", "pvp", "close-range"],
      effects: { generalSurvivability: 6, sustain: -1, mobility: 12, pvp: 7, normalDamage: -2 },
      bestWith: ["Shotgun", "Dual sidearms", "Bow"],
      copy: {
        en: "Built around evasive movement and awkward close-range trades.",
        da: "Bygget omkring evasive movement og akavede close-range trades."
      }
    },
    {
      id: "quite-an-inspiration",
      type: "deadeye",
      name: "Quite an Inspiration",
      tags: ["sustain", "team", "pve"],
      effects: { generalSurvivability: 3, sustain: 12, pve: 8 },
      bestWith: ["Mixed loadout", "Repeater", "Shotgun"],
      copy: {
        en: "A sustain-led option for PvE, team play and long sessions.",
        da: "Et sustain-led valg til PvE, team play og lange sessions."
      }
    },
    {
      id: "focus-fire",
      type: "deadeye",
      name: "Focus Fire",
      tags: ["damage", "team", "pvp", "pve"],
      effects: { sniperDamage: 4, normalDamage: 8, pvp: 6, pve: 4 },
      bestWith: ["Repeaters", "Scoped rifles", "Shotgun"],
      copy: {
        en: "Simple damage pressure for solo and group fights.",
        da: "Simpel damage pressure til solo og group fights."
      }
    },
    {
      id: "a-moment-to-recuperate",
      type: "deadeye",
      name: "A Moment to Recuperate",
      tags: ["sustain", "defensive", "pve"],
      effects: { generalSurvivability: 4, sustain: 10, mobility: -2, pve: 5 },
      bestWith: ["Mixed loadout", "Repeater"],
      copy: {
        en: "A recovery-focused Dead Eye pick for safer PvE routing.",
        da: "Et recovery-fokuseret Dead Eye pick til mere sikker PvE routing."
      }
    },
    {
      id: "sharpshooter",
      type: "passive",
      name: "Sharpshooter",
      tags: ["sniper", "damage", "defensive"],
      effects: { sniperDamage: 14, sniperSurvivability: 8, pvp: 5 },
      bestWith: ["Carcano Rifle", "Rolling Block Rifle"],
      copy: {
        en: "The core passive when scoped-rifle fights matter.",
        da: "Core passive når scoped-rifle fights betyder mest."
      }
    },
    {
      id: "peak-condition",
      type: "passive",
      name: "Peak Condition",
      tags: ["damage", "mobility", "stamina"],
      effects: { normalDamage: 8, mobility: 5, pvp: 3, pve: 4 },
      bestWith: ["Repeaters", "Bow", "Mixed loadout"],
      copy: {
        en: "Rewards stamina management with broad damage value.",
        da: "Belønner stamina management med bred damage value."
      }
    },
    {
      id: "winning-streak",
      type: "passive",
      name: "Winning Streak",
      tags: ["damage", "pvp", "repeaters"],
      effects: { normalDamage: 12, pvp: 6, pve: 4 },
      bestWith: ["Lancaster Repeater", "Dual sidearms"],
      copy: {
        en: "Strong when you keep landing follow-up shots.",
        da: "Stærk når du lander follow-up shots."
      }
    },
    {
      id: "iron-lung",
      type: "passive",
      name: "Iron Lung",
      tags: ["defensive", "stamina"],
      effects: { sniperSurvivability: 3, generalSurvivability: 9, sustain: 3, mobility: 1 },
      bestWith: ["Mixed loadout", "Shotgun", "Scoped rifles"],
      copy: {
        en: "A stable defensive passive for most builds.",
        da: "En stabil defensive passive til de fleste builds."
      }
    },
    {
      id: "fool-me-once",
      type: "passive",
      name: "Fool Me Once",
      tags: ["defensive", "pvp"],
      effects: { generalSurvivability: 10, sniperSurvivability: 4, pvp: 7, pve: 3 },
      bestWith: ["Mixed loadout", "Repeater", "Shotgun"],
      copy: {
        en: "Good when fights become sustained and messy.",
        da: "God når fights bliver sustained og messy."
      }
    },
    {
      id: "strange-medicine",
      type: "passive",
      name: "Strange Medicine",
      tags: ["sustain", "pve"],
      effects: { normalDamage: 2, generalSurvivability: 2, sustain: 10, pvp: 2, pve: 5 },
      bestWith: ["Repeaters", "Shotgun", "Mixed loadout"],
      copy: {
        en: "A sustain pick for players who keep dealing damage.",
        da: "Et sustain pick til spillere der bliver ved med at lave damage."
      }
    },
    {
      id: "never-without-one",
      type: "passive",
      name: "Never Without One",
      tags: ["defensive", "pvp"],
      effects: { sniperSurvivability: 6, generalSurvivability: 8, pvp: 7 },
      bestWith: ["Scoped rifles", "Repeaters", "Mixed loadout"],
      copy: {
        en: "A defensive PvP card that supports safer peeking and trading.",
        da: "Et defensive PvP card der støtter safer peeking og trading."
      }
    },
    {
      id: "gunslingers-choice",
      type: "passive",
      name: "Gunslinger's Choice",
      tags: ["sidearm", "damage", "pvp"],
      effects: { normalDamage: 9, mobility: 2, pvp: 5, pve: 2 },
      bestWith: ["Dual sidearms"],
      copy: {
        en: "Best for dual-sidearm builds and close duels.",
        da: "Bedst til dual-sidearm builds og close duels."
      }
    },
    {
      id: "cold-blooded",
      type: "passive",
      name: "Cold Blooded",
      tags: ["sustain", "pve"],
      effects: { generalSurvivability: 2, sustain: 8, pve: 6 },
      bestWith: ["Repeaters", "Shotgun", "Mixed loadout"],
      copy: {
        en: "A practical sustain card for clearing PvE enemies.",
        da: "Et praktisk sustain card til at rydde PvE enemies."
      }
    },
    {
      id: "eye-for-an-eye",
      type: "passive",
      name: "Eye for an Eye",
      tags: ["headshot", "sustain", "pve"],
      effects: { normalDamage: 1, sustain: 5, mobility: 1, pvp: 3, pve: 3 },
      bestWith: ["Repeaters", "Revolvers", "Bow"],
      copy: {
        en: "Supports headshot-heavy routines and Dead Eye uptime.",
        da: "Støtter headshot-heavy routines og Dead Eye uptime."
      }
    },
    {
      id: "the-unblinking-eye",
      type: "passive",
      name: "The Unblinking Eye",
      tags: ["deadeye", "sustain"],
      effects: { sustain: 6, mobility: 2, pvp: 2, pve: 3 },
      bestWith: ["Mixed loadout", "Scoped rifles"],
      copy: {
        en: "Adds comfort by stretching Dead Eye and Eagle Eye uptime.",
        da: "Tilføjer comfort ved at forlænge Dead Eye og Eagle Eye uptime."
      }
    },
    {
      id: "live-for-the-fight",
      type: "passive",
      name: "Live for the Fight",
      tags: ["deadeye", "sustain", "pve"],
      effects: { sustain: 5, pve: 4 },
      bestWith: ["Mixed loadout"],
      copy: {
        en: "A simple Dead Eye recovery pick for slower content.",
        da: "Et simpelt Dead Eye recovery pick til langsommere content."
      }
    }
  ];

  const weapons = {
    "scoped-rifle": {
      label: { en: "Scoped rifle", da: "Scoped rifle" },
      effects: { sniperDamage: 10, sniperSurvivability: 4, mobility: -2, pvp: 4 },
      weapons: ["Carcano Rifle", "Rolling Block Rifle"]
    },
    repeater: {
      label: { en: "Repeater", da: "Repeater" },
      effects: { normalDamage: 7, mobility: 1, pvp: 3, pve: 4 },
      weapons: ["Lancaster Repeater", "Evans Repeater"]
    },
    "dual-sidearms": {
      label: { en: "Dual sidearms", da: "Dual sidearms" },
      effects: { normalDamage: 6, mobility: 6, pvp: 4 },
      weapons: ["Navy Revolvers", "Mauser Pistols"]
    },
    shotgun: {
      label: { en: "Shotgun", da: "Shotgun" },
      effects: { normalDamage: 5, generalSurvivability: 5, mobility: 2, pvp: 3, pve: 2 },
      weapons: ["Pump-action Shotgun", "Semi-auto Shotgun"]
    },
    bow: {
      label: { en: "Bow", da: "Bow" },
      effects: { normalDamage: 3, sustain: 3, mobility: 6, pve: 4 },
      weapons: ["Bow", "Improved Bow"]
    },
    mixed: {
      label: { en: "Mixed loadout", da: "Mixed loadout" },
      effects: { sniperDamage: 2, normalDamage: 2, generalSurvivability: 2, sustain: 2, pvp: 2, pve: 2 },
      weapons: ["Lancaster Repeater", "Carcano Rifle", "Pump-action Shotgun"]
    }
  };

  const playstyles = {
    sniper: {
      label: { en: "Sniper", da: "Sniper" },
      effects: { sniperDamage: 8, sniperSurvivability: 4, mobility: -1, pvp: 3 }
    },
    "close-range": {
      label: { en: "Close range", da: "Close range" },
      effects: { normalDamage: 6, generalSurvivability: 4, mobility: 2, pvp: 3 }
    },
    balanced: {
      label: { en: "Balanced", da: "Balanced" },
      effects: { sniperDamage: 2, normalDamage: 2, generalSurvivability: 2, sustain: 2, mobility: 2, pvp: 2, pve: 2 }
    },
    support: {
      label: { en: "Support", da: "Support" },
      effects: { generalSurvivability: 4, sustain: 8, pve: 4 }
    },
    "solo-grinder": {
      label: { en: "Solo grinder", da: "Solo grinder" },
      effects: { normalDamage: 2, generalSurvivability: 3, sustain: 6, pve: 6 }
    }
  };

  const focuses = {
    mixed: {
      label: { en: "Mixed", da: "Mixed" },
      effects: { pvp: 4, pve: 4 }
    },
    pvp: {
      label: { en: "PvP", da: "PvP" },
      effects: { pvp: 10, pve: -2 }
    },
    pve: {
      label: { en: "PvE", da: "PvE" },
      effects: { pve: 10, pvp: -2 }
    }
  };

  const stances = {
    flexible: {
      label: { en: "Flexible", da: "Flexible" },
      effects: { normalDamage: 2, generalSurvivability: 2, sustain: 2, mobility: 2 }
    },
    aggressive: {
      label: { en: "Aggressive", da: "Aggressive" },
      effects: { sniperDamage: 4, normalDamage: 4, pvp: 2, generalSurvivability: -1 }
    },
    defensive: {
      label: { en: "Defensive", da: "Defensive" },
      effects: { sniperSurvivability: 5, generalSurvivability: 5, sustain: 5, mobility: -1 }
    }
  };

  const defaults = {
    deadeye: "paint-it-black",
    passive1: "sharpshooter",
    passive2: "winning-streak",
    passive3: "iron-lung",
    weapon: "scoped-rifle",
    playstyle: "sniper",
    focus: "mixed",
    stance: "flexible"
  };

  const form = document.querySelector("#ability-form");
  const output = document.querySelector("#ability-output");

  function language() {
    return (localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || "en").startsWith("da") ? "da" : "en";
  }

  function text(key) {
    const lang = language();
    return ui[lang][key] || ui.en[key] || key;
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function list(items) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function effectsObject(source = {}) {
    return effectKeys.reduce((result, key) => {
      result[key] = Number(source[key] || 0);
      return result;
    }, {});
  }

  function addEffects(target, source = {}) {
    effectKeys.forEach((key) => {
      target[key] += Number(source[key] || 0);
    });
  }

  function clampScore(value) {
    return Math.max(0, Math.min(100, Math.round(value)));
  }

  function cardById(id) {
    return cards.find((card) => card.id === id);
  }

  function populateCardSelects() {
    document.querySelectorAll("[data-card-select]").forEach((select) => {
      const type = select.dataset.cardSelect;
      select.innerHTML = cards
        .filter((card) => card.type === type)
        .map((card) => `<option value="${card.id}">${escapeHtml(card.name)}</option>`)
        .join("");
    });
  }

  function updateStaticOptionLabels() {
    const lang = language();
    const optionGroups = [
      ["weapon", weapons],
      ["playstyle", playstyles],
      ["focus", focuses],
      ["stance", stances]
    ];

    optionGroups.forEach(([selectId, source]) => {
      const select = document.querySelector(`#${selectId}`);
      if (!select) return;
      Array.from(select.options).forEach((option) => {
        option.textContent = source[option.value]?.label[lang] || source[option.value]?.label.en || option.textContent;
      });
    });
  }

  function setDefaults() {
    Object.entries(defaults).forEach(([key, value]) => {
      const field = form.elements[key];
      if (field) field.value = value;
    });
  }

  function selection() {
    return {
      deadeye: form.elements.deadeye.value,
      passives: [form.elements.passive1.value, form.elements.passive2.value, form.elements.passive3.value],
      weapon: form.elements.weapon.value,
      playstyle: form.elements.playstyle.value,
      focus: form.elements.focus.value,
      stance: form.elements.stance.value
    };
  }

  function updatePassiveDisabled() {
    const selected = selection().passives;
    document.querySelectorAll('select[data-card-select="passive"]').forEach((select) => {
      Array.from(select.options).forEach((option) => {
        option.disabled = option.value !== select.value && selected.includes(option.value);
      });
    });
  }

  function scoreBuild(pick) {
    const scores = effectsObject();
    effectKeys.forEach((key) => {
      scores[key] = 48;
    });

    const selectedCards = [cardById(pick.deadeye), ...Array.from(new Set(pick.passives)).map(cardById)].filter(Boolean);
    selectedCards.forEach((card) => addEffects(scores, card.effects));
    addEffects(scores, weapons[pick.weapon]?.effects);
    addEffects(scores, playstyles[pick.playstyle]?.effects);
    addEffects(scores, focuses[pick.focus]?.effects);
    addEffects(scores, stances[pick.stance]?.effects);

    effectKeys.forEach((key) => {
      scores[key] = clampScore(scores[key]);
    });

    const damage = Math.max(scores.sniperDamage, scores.normalDamage);
    const survival = Math.round((scores.sniperSurvivability + scores.generalSurvivability) / 2);
    const focusScore = pick.focus === "pvp" ? scores.pvp : pick.focus === "pve" ? scores.pve : Math.round((scores.pvp + scores.pve) / 2);
    const overall = clampScore((damage * 0.24) + (survival * 0.22) + (scores.sustain * 0.16) + (scores.mobility * 0.12) + (focusScore * 0.26));

    return { scores, selectedCards, overall };
  }

  function hasCard(selectedCards, id) {
    return selectedCards.some((card) => card.id === id);
  }

  function buildName(pick, result) {
    const { scores, selectedCards } = result;
    const lang = language();

    if (hasCard(selectedCards, "sharpshooter") && scores.sniperDamage >= 70 && scores.sniperSurvivability >= 58) {
      return lang === "da" ? "Defensiv Sharpshooter" : "Defensive Sharpshooter";
    }
    if (hasCard(selectedCards, "slippery-bastard") || scores.mobility >= 68) {
      return lang === "da" ? "Evasive Mobility Build" : "Evasive Mobility Build";
    }
    if (hasCard(selectedCards, "slow-and-steady") && scores.generalSurvivability >= 68) {
      return lang === "da" ? "Frontier Tank Build" : "Frontier Tank Build";
    }
    if (scores.sustain >= 70 && scores.pve >= scores.pvp) {
      return lang === "da" ? "PvE Sustain Build" : "PvE Sustain Build";
    }
    if (hasCard(selectedCards, "paint-it-black") && scores.normalDamage >= 64) {
      return lang === "da" ? "Paint It Black Pressure Build" : "Paint It Black Pressure Build";
    }
    if (pick.stance === "aggressive" && Math.max(scores.sniperDamage, scores.normalDamage) >= 66) {
      return lang === "da" ? "Aggressive Damage Build" : "Aggressive Damage Build";
    }

    return lang === "da" ? "Balanced Free Roam Build" : "Balanced Free Roam Build";
  }

  function strengths(scores) {
    const items = [];
    if (scores.sniperDamage >= 68) items.push(text("strengthSniperDamage"));
    if (scores.normalDamage >= 66) items.push(text("strengthNormalDamage"));
    if (scores.sniperSurvivability >= 62) items.push(text("strengthSniperSurvival"));
    if (scores.generalSurvivability >= 64) items.push(text("strengthGeneralSurvival"));
    if (scores.sustain >= 64) items.push(text("strengthSustain"));
    if (scores.mobility >= 64) items.push(text("strengthMobility"));
    if (scores.pvp >= 66) items.push(text("strengthPvp"));
    if (scores.pve >= 66) items.push(text("strengthPve"));
    if (!items.length) items.push(text("balancedStrength"));
    return items;
  }

  function weaknesses(scores, pick) {
    const items = [];
    if (pick.weapon === "scoped-rifle" && scores.sniperDamage < 58) items.push(text("weakSniperDamage"));
    if (pick.weapon !== "scoped-rifle" && scores.normalDamage < 56) items.push(text("weakNormalDamage"));
    if (scores.sniperSurvivability < 52) items.push(text("weakSniperSurvival"));
    if (scores.generalSurvivability < 52) items.push(text("weakGeneralSurvival"));
    if (scores.sustain < 52) items.push(text("weakSustain"));
    if (scores.mobility < 50) items.push(text("weakMobility"));
    if (pick.focus === "pvp" && scores.pvp < 58) items.push(text("weakPvp"));
    if (pick.focus === "pve" && scores.pve < 58) items.push(text("weakPve"));
    if (!items.length) items.push(text("noMajorWeakness"));
    return items;
  }

  function recommendations(pick, result) {
    const { scores, selectedCards } = result;
    const items = [];
    const uniquePassives = new Set(pick.passives);

    if (uniquePassives.size !== pick.passives.length) items.push(text("duplicatePassive"));
    if (hasCard(selectedCards, "sharpshooter") && pick.weapon !== "scoped-rifle") items.push(text("scopedMismatch"));
    if ((pick.weapon === "scoped-rifle" || pick.playstyle === "sniper") && !hasCard(selectedCards, "sharpshooter")) items.push(text("addSharpshooter"));
    if (pick.focus === "pve" && scores.sustain < 64) items.push(text("addSustain"));
    if (pick.stance === "aggressive" && scores.generalSurvivability < 58) items.push(text("addDefense"));
    if (hasCard(selectedCards, "slippery-bastard") && pick.weapon === "scoped-rifle") items.push(text("slipperyWeapon"));
    if (hasCard(selectedCards, "paint-it-black")) items.push(text("pibWeapons"));
    if (hasCard(selectedCards, "slow-and-steady") && pick.stance === "aggressive") items.push(text("slowAggressive"));
    if (!items.length) items.push(text("defaultRecommendation"));

    return items;
  }

  function bestWeapons(pick, selectedCards) {
    const names = new Set(weapons[pick.weapon]?.weapons || []);
    selectedCards.forEach((card) => card.bestWith.forEach((weapon) => names.add(weapon)));
    return Array.from(names).slice(0, 6);
  }

  function explanation(pick, result, name) {
    const lang = language();
    const cardNames = result.selectedCards.map((card) => card.name).join(", ");
    const weapon = weapons[pick.weapon]?.label[lang] || weapons[pick.weapon]?.label.en;
    const playstyle = playstyles[pick.playstyle]?.label[lang] || playstyles[pick.playstyle]?.label.en;
    const focus = focuses[pick.focus]?.label[lang] || focuses[pick.focus]?.label.en;

    if (lang === "da") {
      return `${name} bruger ${cardNames} med ${weapon} og ${playstyle} playstyle. Modellen vægter ${focus} focus og giver rating efter damage, survivability, sustain, mobility og aktivitetsfit.`;
    }

    return `${name} uses ${cardNames} with ${weapon} and a ${playstyle} playstyle. The model weights ${focus} focus and scores the build across damage, survivability, sustain, mobility and activity fit.`;
  }

  function renderRatings(scores) {
    const labels = metricLabels[language()];
    return effectKeys.map((key) => `
      <article class="rating-card">
        <span><b>${escapeHtml(labels[key])}</b><strong>${scores[key]}</strong></span>
        <div class="bar" aria-hidden="true"><i style="width:${scores[key]}%"></i></div>
      </article>
    `).join("");
  }

  function renderOutput() {
    updatePassiveDisabled();
    updateStaticOptionLabels();

    const pick = selection();
    const result = scoreBuild(pick);
    const name = buildName(pick, result);
    const weaponList = bestWeapons(pick, result.selectedCards);
    const buildStrengths = strengths(result.scores);
    const buildWeaknesses = weaknesses(result.scores, pick);
    const buildRecommendations = recommendations(pick, result);

    output.innerHTML = `
      <div class="build-summary">
        <div class="build-heading">
          <div>
            <h2>${escapeHtml(name)}</h2>
            <p>${escapeHtml(text("guideRating"))}: ${escapeHtml(explanation(pick, result, name))}</p>
          </div>
          <div class="overall-score" aria-label="${escapeHtml(text("overall"))}: ${result.overall}">
            ${result.overall}
          </div>
        </div>

        <div class="rating-grid">
          ${renderRatings(result.scores)}
        </div>

        <div class="output-grid">
          <article class="output-card">
            <h3>${escapeHtml(text("weapons"))}</h3>
            <ul>${list(weaponList)}</ul>
          </article>
          <article class="output-card">
            <h3>${escapeHtml(text("strengths"))}</h3>
            <ul>${list(buildStrengths)}</ul>
          </article>
          <article class="output-card">
            <h3>${escapeHtml(text("weaknesses"))}</h3>
            <ul>${list(buildWeaknesses)}</ul>
          </article>
          <article class="output-card">
            <h3>${escapeHtml(text("recommendations"))}</h3>
            <ul>${list(buildRecommendations)}</ul>
          </article>
          <article class="output-card output-card-wide">
            <h3>${escapeHtml(text("explanation"))}</h3>
            <p>${escapeHtml(explanation(pick, result, name))}</p>
          </article>
        </div>
      </div>
    `;
  }

  function boot() {
    populateCardSelects();
    setDefaults();
    updateStaticOptionLabels();
    renderOutput();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderOutput();
    });

    form.addEventListener("change", renderOutput);

    document.querySelector("[data-reset-build]")?.addEventListener("click", () => {
      setDefaults();
      renderOutput();
    });

    window.addEventListener("gch:languagechange", renderOutput);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
