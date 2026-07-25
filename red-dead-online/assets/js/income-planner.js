(function () {
  const STORAGE_KEY = "rdoIncomePlanner:v2";
  const LANGUAGE_KEY = "gch_language";
  const ACTIVITIES_URL = "/red-dead-online/data/rdo-income-activities.json";
  const BONUSES_URL = "/red-dead-online/data/rdo-monthly-bonuses.json";

  const roles = [
    {
      id: "bountyHunter",
      maxRank: 20,
      labelEn: "Bounty Hunter",
      labelDa: "Bounty Hunter",
      noteEn: "Regular, legendary and role XP bounty routes.",
      noteDa: "Regular, legendary og role XP bounty routes."
    },
    {
      id: "prestigiousBountyHunter",
      maxRank: 30,
      labelEn: "Prestigious Bounty Hunter",
      labelDa: "Prestigious Bounty Hunter",
      noteEn: "Infamous bounties and extended Bounty Hunter progression.",
      noteDa: "Infamous bounties og udvidet Bounty Hunter progression."
    },
    {
      id: "trader",
      maxRank: 20,
      labelEn: "Trader",
      labelDa: "Trader",
      noteEn: "Cripps production, resupply and wagon deliveries.",
      noteDa: "Cripps production, resupply og wagon deliveries."
    },
    {
      id: "collector",
      maxRank: 20,
      labelEn: "Collector",
      labelDa: "Collector",
      noteEn: "Low-risk cash and XP routes.",
      noteDa: "Low-risk cash og XP routes."
    },
    {
      id: "moonshiner",
      maxRank: 20,
      labelEn: "Moonshiner",
      labelDa: "Moonshiner",
      noteEn: "Passive batch production and deliveries.",
      noteDa: "Passiv batch production og deliveries."
    },
    {
      id: "naturalist",
      maxRank: 20,
      labelEn: "Naturalist",
      labelDa: "Naturalist",
      noteEn: "Samples and legendary animal support.",
      noteDa: "Samples og legendary animal support."
    }
  ];

  const timerDefinitions = [
    {
      id: "legendaryBountyCooldown",
      labelEn: "Legendary bounty cooldown",
      labelDa: "Legendary bounty cooldown",
      defaultMinutes: 48,
      kind: "cooldown",
      noteEn: "Start after finishing a Legendary Bounty.",
      noteDa: "Start efter en Legendary Bounty er færdig."
    },
    {
      id: "bountyTurnIn",
      labelEn: "Bounty turn-in reminder",
      labelDa: "Bounty turn-in reminder",
      defaultMinutes: 12,
      kind: "mission",
      noteEn: "Reminder for efficient normal bounty timing.",
      noteDa: "Reminder til effektiv normal bounty timing."
    },
    {
      id: "traderGoods",
      labelEn: "Trader goods production",
      labelDa: "Trader goods production",
      defaultMinutes: 200,
      kind: "production",
      noteEn: "Large batch estimate using the stable 1 good per 2 minutes model.",
      noteDa: "Large batch estimat med stabil 1 good per 2 minutes model."
    },
    {
      id: "traderResupply",
      labelEn: "Trader resupply reminder",
      labelDa: "Trader resupply reminder",
      defaultMinutes: 60,
      kind: "reminder",
      noteEn: "Check Cripps materials and production.",
      noteDa: "Tjek Cripps materials og production."
    },
    {
      id: "moonshineProduction",
      labelEn: "Moonshine production",
      labelDa: "Moonshine production",
      defaultMinutes: 48,
      kind: "production",
      noteEn: "Strong moonshine batch planning timer.",
      noteDa: "Strong moonshine batch planning timer."
    },
    {
      id: "moonshineDeliveryReady",
      labelEn: "Moonshine delivery ready",
      labelDa: "Moonshine delivery ready",
      defaultMinutes: 10,
      kind: "reminder",
      noteEn: "Short reminder after production is ready so the batch does not sit idle.",
      noteDa: "Kort reminder efter production er klar, så batch ikke står idle."
    },
    {
      id: "collectorRoute",
      labelEn: "Collector route session",
      labelDa: "Collector route session",
      defaultMinutes: 30,
      kind: "route",
      noteEn: "Use for a route block while passive businesses run.",
      noteDa: "Brug til en route block mens passive businesses kører."
    },
    {
      id: "customTimer",
      labelEn: "Custom timer",
      labelDa: "Custom timer",
      defaultMinutes: 30,
      kind: "custom",
      noteEn: "General timer for your own route or cooldown.",
      noteDa: "Generel timer til din egen route eller cooldown."
    }
  ];

  const text = {
    en: {
      loading: "Loading planner data...",
      dataIssue: "Planner data could not be loaded from JSON. The built-in estimate fallback is active.",
      activeBonus: "Active monthly bonus",
      noActiveBonus: "No active monthly bonus is stored in the data file.",
      bonusOutdated: "Bonus data should be updated manually for the current month.",
      manualBonusOnly: "Custom bonus multipliers are available below.",
      estimate: "estimate",
      score: "score",
      locked: "Locked",
      eligible: "Eligible",
      noActivity: "No eligible activity found for this setup. Add a role or lower restrictions.",
      nextActivity: "Recommended next activity",
      why: "Why this is recommended",
      estimatedRates: "Estimated rates",
      cashHour: "RDO$/hour",
      xpHour: "XP/hour",
      goldHour: "Gold/hour",
      roleXpHour: "Role XP/hour",
      whileWaiting: "While passive timers run",
      noPassiveTimers: "No passive production timer is currently running. Start Trader or Moonshine timers to plan filler windows.",
      next30: "Next 30 min",
      next60: "Next 60 min",
      next120: "Next 2 hours",
      quickPlan: "Quick plan",
      efficientPlan: "Efficient plan",
      generated: "Plan generated and saved locally.",
      savedPlan: "Last generated plan restored from localStorage.",
      resetDone: "Setup reset.",
      roleRank: "Role rank",
      owned: "Owned",
      start: "Start",
      pause: "Pause",
      resume: "Resume",
      reset: "Reset",
      readyNow: "ready now",
      running: "running",
      paused: "paused",
      onCooldown: "on cooldown",
      idle: "not running",
      minutes: "Minutes",
      applyPreset: "Start preset",
      riskLow: "low risk",
      riskMedium: "medium risk",
      riskHigh: "high risk",
      rankLocked: "Requires player or role rank",
      roleLocked: "Requires role ownership",
      pvpFiltered: "Removed because PvP-risk avoidance is enabled.",
      timeFit: "Fits inside your available session time.",
      bonusFit: "Matched an active or custom bonus multiplier.",
      passiveFit: "Works well while passive businesses run.",
      goldFit: "Gold-giving activity matches your priority.",
      beginnerFit: "Friendly for lower rank or newer players.",
      lowRiskFit: "Low-risk route matches your settings.",
      roleXpFit: "Supports your selected role XP focus.",
      cashFit: "Strong estimated cash rate for your settings.",
      xpFit: "Strong estimated XP rate for your settings.",
      moonshineWaiting: "Moonshine is producing: use the waiting window for Collector items, regular bounties or Trader support.",
      traderWaiting: "Trader production is running: avoid idle time with Collector, Bounty or resupply work.",
      legendaryCooldown: "Legendary Bounty is on cooldown: use regular or infamous bounty work instead.",
      noWaitWindow: "No passive wait window detected. Start a production timer or run the highest-scored active activity.",
      assumptions: "Estimate model; update data files when verified payout or bonus data changes.",
      sourceManual: "Manual bonus data only; no live source."
    },
    da: {
      loading: "Indlæser planner-data...",
      dataIssue: "Planner-data kunne ikke indlæses fra JSON. Det indbyggede estimate-fallback er aktivt.",
      activeBonus: "Aktiv månedlig bonus",
      noActiveBonus: "Ingen aktiv månedlig bonus ligger i datafilen.",
      bonusOutdated: "Bonusdata bør opdateres manuelt for den aktuelle måned.",
      manualBonusOnly: "Custom bonus multipliers kan bruges nedenfor.",
      estimate: "estimat",
      score: "score",
      locked: "Locked",
      eligible: "Eligible",
      noActivity: "Ingen eligible activity fundet for dette setup. Tilføj en role eller sænk restrictions.",
      nextActivity: "Anbefalet næste aktivitet",
      why: "Hvorfor den anbefales",
      estimatedRates: "Estimerede rates",
      cashHour: "RDO$/time",
      xpHour: "XP/time",
      goldHour: "Gold/time",
      roleXpHour: "Role XP/time",
      whileWaiting: "Mens passive timers kører",
      noPassiveTimers: "Ingen passiv production timer kører lige nu. Start Trader eller Moonshine timers for at planlægge filler windows.",
      next30: "Næste 30 min",
      next60: "Næste 60 min",
      next120: "Næste 2 timer",
      quickPlan: "Hurtig plan",
      efficientPlan: "Effektiv plan",
      generated: "Plan genereret og gemt lokalt.",
      savedPlan: "Seneste plan genskabt fra localStorage.",
      resetDone: "Setup nulstillet.",
      roleRank: "Role rank",
      owned: "Owned",
      start: "Start",
      pause: "Pause",
      resume: "Fortsæt",
      reset: "Reset",
      readyNow: "klar nu",
      running: "i gang",
      paused: "pauset",
      onCooldown: "på cooldown",
      idle: "ikke i gang",
      minutes: "Minutter",
      applyPreset: "Start preset",
      riskLow: "lav risk",
      riskMedium: "medium risk",
      riskHigh: "høj risk",
      rankLocked: "Kræver player eller role rank",
      roleLocked: "Kræver role ownership",
      pvpFiltered: "Fjernet fordi PvP-risk avoidance er slået til.",
      timeFit: "Passer inden for din session time.",
      bonusFit: "Matcher en aktiv eller custom bonus multiplier.",
      passiveFit: "Fungerer godt mens passive businesses kører.",
      goldFit: "Gold-givende aktivitet matcher din prioritet.",
      beginnerFit: "Venlig for lavere rank eller nyere spillere.",
      lowRiskFit: "Low-risk route matcher dine settings.",
      roleXpFit: "Støtter dit valgte role XP focus.",
      cashFit: "Stærk estimeret cash rate for dine settings.",
      xpFit: "Stærk estimeret XP rate for dine settings.",
      moonshineWaiting: "Moonshine producerer: brug ventetiden til Collector items, regular bounties eller Trader support.",
      traderWaiting: "Trader production kører: undgå idle time med Collector, Bounty eller resupply.",
      legendaryCooldown: "Legendary Bounty er på cooldown: brug regular eller infamous bounty work i stedet.",
      noWaitWindow: "Ingen passiv wait window registreret. Start en production timer eller kør den højst-scorede aktive aktivitet.",
      assumptions: "Estimate model; opdater datafiler når verificeret payout eller bonusdata ændrer sig.",
      sourceManual: "Kun manuel bonusdata; ingen live source."
    }
  };

  const defaultSetup = {
    playerRank: 25,
    sessionHours: 1,
    sessionMinutes: 0,
    sessionMode: "solo",
    avoidPvp: true,
    useFastTravel: true,
    saveCashTravel: false,
    naturalistLegendaryAccess: false,
    priority: "balanced",
    roleFocus: "bountyHunter",
    useMonthlyBonuses: true,
    useCustomBonus: false,
    customCashMultiplier: 1,
    customXpMultiplier: 1,
    customRoleXpMultiplier: 1,
    customGoldMultiplier: 1,
    roles: {
      bountyHunter: { owned: true, rank: 5 },
      prestigiousBountyHunter: { owned: false, rank: 0 },
      trader: { owned: true, rank: 5 },
      collector: { owned: true, rank: 5 },
      moonshiner: { owned: false, rank: 0 },
      naturalist: { owned: false, rank: 0 }
    }
  };

  const fallbackRows = [
    ["regular_bounty", "bounty", "Regular Bounty", "Regular Bounty", "bountyHunter", "bountyHunter", 1, 12, 0, 12, 0, 18, 350, 350, 0.24, "medium", true, true, true, "Board bounty filler while passive production runs.", "Board bounty filler mens passiv production kører.", ["gold", "role-xp", "active", "bounty", "filler"]],
    ["legendary_bounty", "bounty", "Legendary Bounty", "Legendary Bounty", "bountyHunter", "bountyHunter", 5, 30, 48, 30, 0, 70, 900, 700, 0.32, "medium", true, true, false, "Strong anchor when off cooldown.", "Stærk anchor når cooldown er fri.", ["gold", "role-xp", "cooldown", "bounty", "active"]],
    ["infamous_bounty", "bounty", "Infamous Bounty", "Infamous Bounty", "bountyHunter", "prestigiousBountyHunter", 1, 15, 0, 15, 0, 30, 500, 500, 0.28, "medium", true, true, false, "Prestigious Bounty Hunter chain.", "Prestigious Bounty Hunter chain.", ["gold", "role-xp", "prestigious", "bounty", "active"]],
    ["trader_local_delivery", "trader_delivery", "Trader Local Delivery", "Trader Local Delivery", "trader", "trader", 1, 12, 0, 12, 0, 125, 650, 650, 0, "low", true, true, true, "Safer Trader delivery option.", "Sikrere Trader delivery option.", ["cash", "role-xp", "low-risk", "trader", "delivery"]],
    ["trader_distant_delivery", "trader_delivery", "Trader Distant Delivery", "Trader Distant Delivery", "trader", "trader", 1, 18, 0, 18, 0, 156, 800, 800, 0, "high", false, true, false, "Higher cash route with PvP exposure.", "Højere cash route med PvP exposure.", ["cash", "role-xp", "pvp-risk", "trader", "delivery"]],
    ["trader_resupply", "trader_resupply", "Trader Resupply", "Trader Resupply", "trader", "trader", 1, 8, 60, 8, 0, 0, 250, 500, 0, "low", true, true, true, "Keeps Cripps production moving.", "Holder Cripps production i gang.", ["role-xp", "support", "trader", "timer"]],
    ["moonshine_delivery", "moonshine_delivery", "Moonshine Delivery", "Moonshine Delivery", "moonshiner", "moonshiner", 1, 10, 0, 10, 0, 170, 450, 500, 0, "medium", true, true, false, "Fast cash when a batch is ready.", "Hurtig cash når batch er klar.", ["cash", "role-xp", "moonshiner", "delivery"]],
    ["moonshiner_bootlegger", "moonshiner_mission", "Bootlegger or Moonshiner Mission", "Bootlegger eller Moonshiner Mission", "moonshiner", "moonshiner", 1, 12, 0, 12, 0, 20, 350, 450, 0, "low", true, true, false, "Moonshiner role XP filler.", "Moonshiner role XP filler.", ["role-xp", "support", "moonshiner", "filler"]],
    ["collector_items", "collector", "Collector Individual Items", "Collector Individual Items", "collector", "collector", 1, 20, 0, 20, 0, 45, 850, 550, 0, "low", true, true, true, "Low-risk active route.", "Low-risk aktiv route.", ["cash", "xp", "low-risk", "collector", "filler"]],
    ["collector_set_sales", "collector", "Collector Set Sales", "Collector Set Sales", "collector", "collector", 1, 45, 0, 45, 0, 210, 1600, 900, 0, "low", true, true, true, "Strong route if sets are nearly complete.", "Stærk route hvis sets næsten er færdige.", ["cash", "xp", "low-risk", "collector", "route"]],
    ["naturalist_samples", "naturalist", "Naturalist Samples", "Naturalist Samples", "naturalist", "naturalist", 1, 20, 0, 20, 0, 35, 500, 700, 0, "low", true, true, false, "Naturalist role XP route.", "Naturalist role XP route.", ["role-xp", "low-risk", "naturalist", "samples"]],
    ["legendary_animal_materials", "naturalist", "Legendary Animal Materials for Trader", "Legendary Animal Materials til Trader", "naturalist", "naturalist", 5, 18, 0, 18, 0, 0, 450, 500, 0, "medium", true, true, false, "Support route for Trader materials.", "Support route til Trader materials.", ["support", "trader", "naturalist", "materials"]],
    ["free_roam_events", "free_roam", "Free Roam Events", "Free Roam Events", "general", null, 1, 12, 0, 12, 0, 12, 400, 0, 0.16, "high", true, true, true, "Optional event filler.", "Valgfri event filler.", ["xp", "gold", "pvp-risk", "general", "event"]],
    ["blood_money_stranger", "mission", "Blood Money or Stranger Mission", "Blood Money eller Stranger Mission", "general", null, 1, 15, 0, 15, 0, 15, 350, 0, 0.2, "medium", true, true, true, "Fallback for new players.", "Fallback til nye spillere.", ["gold", "beginner", "general", "fallback"]]
  ];

  const state = {
    setup: structuredClone(defaultSetup),
    timers: {},
    activities: [],
    bonuses: [],
    bonusMeta: {},
    scored: [],
    lastPlan: null,
    dataWarning: false
  };

  const dom = {};
  let renderedLanguage = null;

  function lang() {
    return (localStorage.getItem(LANGUAGE_KEY) || document.documentElement.lang || "en").startsWith("da") ? "da" : "en";
  }

  function t(key) {
    const active = lang();
    return text[active][key] || text.en[key] || key;
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttrValue(value) {
    if (window.CSS && typeof window.CSS.escape === "function") {
      return window.CSS.escape(value);
    }

    return String(value).replace(/["\\]/g, "\\$&");
  }

  function clampNumber(value, min, max, fallback) {
    const number = Number(value);
    if (!Number.isFinite(number)) return fallback;
    return Math.max(min, Math.min(max, number));
  }

  function money(value) {
    return `$${Math.round(value)}`;
  }

  function xp(value) {
    return `${Math.round(value)}`;
  }

  function gold(value) {
    return value > 0 ? value.toFixed(2) : "0";
  }

  function deepMerge(base, saved) {
    const output = structuredClone(base);
    if (!saved || typeof saved !== "object") return output;
    Object.keys(output).forEach((key) => {
      if (saved[key] === undefined) return;
      if (key === "roles" && saved.roles && typeof saved.roles === "object") {
        Object.keys(output.roles).forEach((roleId) => {
          output.roles[roleId] = Object.assign({}, output.roles[roleId], saved.roles[roleId] || {});
        });
      } else {
        output[key] = saved[key];
      }
    });
    return output;
  }

  function readStoredState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      state.setup = deepMerge(defaultSetup, saved.setup);
      state.timers = saved.timers && typeof saved.timers === "object" ? saved.timers : {};
      state.lastPlan = saved.lastPlan || null;
    } catch {
      state.setup = structuredClone(defaultSetup);
      state.timers = {};
      state.lastPlan = null;
    }
  }

  function saveState() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        setup: state.setup,
        timers: state.timers,
        lastPlan: state.lastPlan
      })
    );
  }

  function activityFromRow(row) {
    return {
      id: row[0],
      activityType: row[1],
      nameEn: row[2],
      nameDa: row[3],
      role: row[4],
      requiredRole: row[5],
      requiredRank: row[6],
      durationMin: row[7],
      cooldownMin: row[8],
      activeTimeMin: row[9],
      passiveTimeMin: row[10],
      baseCash: row[11],
      baseXp: row[12],
      baseRoleXp: row[13],
      baseGold: row[14],
      riskLevel: row[15],
      soloFriendly: row[16],
      posseFriendly: row[17],
      beginnerFriendly: row[18],
      estimate: true,
      notesEn: row[19],
      notesDa: row[20],
      tags: row[21]
    };
  }

  async function loadJson(url, fallback) {
    try {
      if (window.location.protocol === "file:") throw new Error("file protocol fallback");
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch {
      state.dataWarning = true;
      return fallback;
    }
  }

  async function loadData() {
    const activityFallback = {
      schemaVersion: 1,
      activities: fallbackRows.map(activityFromRow)
    };
    const bonusFallback = {
      schemaVersion: 1,
      liveSource: false,
      bonuses: [],
      sourceNoteEn: "Fallback mode: no live bonus source.",
      sourceNoteDa: "Fallback mode: ingen live bonus source."
    };

    const [activityData, bonusData] = await Promise.all([
      loadJson(ACTIVITIES_URL, activityFallback),
      loadJson(BONUSES_URL, bonusFallback)
    ]);

    state.activities = Array.isArray(activityData.activities) ? activityData.activities : activityFallback.activities;
    state.bonuses = Array.isArray(bonusData.bonuses) ? bonusData.bonuses : [];
    state.bonusMeta = bonusData || {};
  }

  function roleLabel(roleId) {
    const role = roles.find((item) => item.id === roleId);
    if (!role) return roleId || "General";
    return lang() === "da" ? role.labelDa : role.labelEn;
  }

  function roleMaxRank(roleId) {
    return roles.find((role) => role.id === roleId)?.maxRank || 20;
  }

  function renderRankOptions(selectedRank, maxRank) {
    const rank = clampNumber(selectedRank, 0, maxRank, 0);
    return Array.from({ length: maxRank + 1 }, (_, value) => {
      return `<option value="${value}" ${value === rank ? "selected" : ""}>${value}</option>`;
    }).join("");
  }

  function activityName(activity) {
    return lang() === "da" ? activity.nameDa || activity.nameEn : activity.nameEn || activity.nameDa;
  }

  function activityNote(activity) {
    return lang() === "da" ? activity.notesDa || activity.notesEn : activity.notesEn || activity.notesDa;
  }

  function renderRoles() {
    dom.roleGrid.innerHTML = roles
      .map((role) => {
        const current = state.setup.roles[role.id] || { owned: false, rank: 0 };
        const owned = Boolean(current.owned);
        const maxRank = roleMaxRank(role.id);
        const rank = owned ? clampNumber(current.rank, 0, maxRank, 0) : 0;
        const label = lang() === "da" ? role.labelDa : role.labelEn;
        const note = lang() === "da" ? role.noteDa : role.noteEn;
        const rankId = `role-rank-${role.id}`;
        return `
          <div class="role-row">
            <div>
              <label class="checkbox-label">
                <input type="checkbox" data-role-owned="${escapeHtml(role.id)}" ${owned ? "checked" : ""} aria-controls="${escapeHtml(rankId)}">
                <span>${escapeHtml(label)}</span>
              </label>
              <small>${escapeHtml(note)}</small>
            </div>
            <label class="role-rank-field" for="${escapeHtml(rankId)}">
              <span>${escapeHtml(t("roleRank"))}</span>
              <select id="${escapeHtml(rankId)}" data-role-rank="${escapeHtml(role.id)}" ${owned ? "" : "disabled"} aria-label="${escapeHtml(label)} ${escapeHtml(t("roleRank"))}">
                ${renderRankOptions(rank, maxRank)}
              </select>
            </label>
          </div>
        `;
      })
      .join("");
  }

  function renderRoleFocus() {
    dom.roleFocus.innerHTML = roles
      .map((role) => `<option value="${escapeHtml(role.id)}">${escapeHtml(lang() === "da" ? role.labelDa : role.labelEn)}</option>`)
      .join("");
    dom.roleFocus.value = state.setup.roleFocus;
  }

  function restoreForm() {
    const setup = state.setup;
    dom.form.playerRank.value = setup.playerRank;
    dom.form.sessionHours.value = setup.sessionHours;
    dom.form.sessionMinutes.value = setup.sessionMinutes;
    dom.form.sessionMode.value = setup.sessionMode;
    dom.form.avoidPvp.checked = Boolean(setup.avoidPvp);
    dom.form.useFastTravel.checked = Boolean(setup.useFastTravel);
    dom.form.saveCashTravel.checked = Boolean(setup.saveCashTravel);
    dom.form.naturalistLegendaryAccess.checked = Boolean(setup.naturalistLegendaryAccess);
    dom.form.useMonthlyBonuses.checked = Boolean(setup.useMonthlyBonuses);
    dom.form.useCustomBonus.checked = Boolean(setup.useCustomBonus);
    dom.form.customCashMultiplier.value = setup.customCashMultiplier;
    dom.form.customXpMultiplier.value = setup.customXpMultiplier;
    dom.form.customRoleXpMultiplier.value = setup.customRoleXpMultiplier;
    dom.form.customGoldMultiplier.value = setup.customGoldMultiplier;
    dom.roleFocus.value = setup.roleFocus;
    document.querySelectorAll("[data-priority]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.priority === setup.priority);
    });
  }

  function readForm() {
    const setup = state.setup;
    setup.playerRank = clampNumber(dom.form.playerRank.value, 1, 1000, 1);
    setup.sessionHours = clampNumber(dom.form.sessionHours.value, 0, 12, 1);
    setup.sessionMinutes = clampNumber(dom.form.sessionMinutes.value, 0, 59, 0);
    setup.sessionMode = dom.form.sessionMode.value === "posse" ? "posse" : "solo";
    setup.avoidPvp = dom.form.avoidPvp.checked;
    setup.useFastTravel = dom.form.useFastTravel.checked;
    setup.saveCashTravel = dom.form.saveCashTravel.checked;
    setup.naturalistLegendaryAccess = dom.form.naturalistLegendaryAccess.checked;
    setup.roleFocus = dom.roleFocus.value || "bountyHunter";
    setup.useMonthlyBonuses = dom.form.useMonthlyBonuses.checked;
    setup.useCustomBonus = dom.form.useCustomBonus.checked;
    setup.customCashMultiplier = clampNumber(dom.form.customCashMultiplier.value, 0, 10, 1);
    setup.customXpMultiplier = clampNumber(dom.form.customXpMultiplier.value, 0, 10, 1);
    setup.customRoleXpMultiplier = clampNumber(dom.form.customRoleXpMultiplier.value, 0, 10, 1);
    setup.customGoldMultiplier = clampNumber(dom.form.customGoldMultiplier.value, 0, 10, 1);

    document.querySelectorAll("[data-role-owned]").forEach((input) => {
      const roleId = input.dataset.roleOwned;
      setup.roles[roleId] ||= { owned: false, rank: 0 };
      setup.roles[roleId].owned = input.checked;
    });
    document.querySelectorAll("[data-role-rank]").forEach((input) => {
      const roleId = input.dataset.roleRank;
      setup.roles[roleId] ||= { owned: false, rank: 0 };
      setup.roles[roleId].rank = setup.roles[roleId].owned ? clampNumber(input.value, 0, roleMaxRank(roleId), 0) : 0;
    });

    saveState();
    return setup;
  }

  function syncRoleRankControls() {
    document.querySelectorAll("[data-role-owned]").forEach((checkbox) => {
      const roleId = checkbox.dataset.roleOwned;
      const rankInput = document.querySelector(`[data-role-rank="${escapeAttrValue(roleId)}"]`);
      if (!rankInput) return;
      rankInput.disabled = !checkbox.checked;
      if (!checkbox.checked) {
        rankInput.value = "0";
      }
    });
  }

  function handleRoleControlChange(event) {
    if (!event.target.matches("[data-role-owned], [data-role-rank]")) return;
    event.stopPropagation();
    if (event.target.matches("[data-role-owned]")) {
      syncRoleRankControls();
    }
    readForm();
    generatePlan();
    renderComparison(scoredActivities());
    renderBonusStatus();
  }

  function sessionMinutes(setup = state.setup) {
    return Math.max(10, setup.sessionHours * 60 + setup.sessionMinutes);
  }

  function activeBonuses() {
    const today = new Date();
    return state.bonuses.filter((bonus) => {
      if (!bonus.startDate || !bonus.endDate) return false;
      const start = new Date(`${bonus.startDate}T00:00:00`);
      const end = new Date(`${bonus.endDate}T23:59:59`);
      return start <= today && today <= end;
    });
  }

  function bonusApplies(activity, bonus) {
    const types = Array.isArray(bonus.activityType) ? bonus.activityType : [bonus.activityType].filter(Boolean);
    const typeMatch = !types.length || types.includes(activity.activityType) || activity.tags?.some((tag) => types.includes(tag));
    const roleMatch = !bonus.role || bonus.role === activity.role || bonus.role === activity.requiredRole;
    return typeMatch && roleMatch;
  }

  function multipliersFor(activity, setup) {
    const multipliers = {
      cash: 1,
      xp: 1,
      roleXp: 1,
      gold: 1,
      hasBonus: false,
      names: []
    };

    if (setup.useMonthlyBonuses) {
      activeBonuses().forEach((bonus) => {
        if (!bonusApplies(activity, bonus)) return;
        multipliers.cash *= Number(bonus.payoutMultiplier || 1);
        multipliers.xp *= Number(bonus.xpMultiplier || 1);
        multipliers.roleXp *= Number(bonus.roleXpMultiplier || 1);
        multipliers.gold *= Number(bonus.goldMultiplier || 1);
        multipliers.hasBonus = true;
        multipliers.names.push(bonus.eventName || t("activeBonus"));
      });
    }

    if (setup.useCustomBonus) {
      multipliers.cash *= setup.customCashMultiplier || 1;
      multipliers.xp *= setup.customXpMultiplier || 1;
      multipliers.roleXp *= setup.customRoleXpMultiplier || 1;
      multipliers.gold *= setup.customGoldMultiplier || 1;
      multipliers.hasBonus = true;
      multipliers.names.push("Custom bonus");
    }

    return multipliers;
  }

  function isTimerRunning(id) {
    const timer = state.timers[id];
    return Boolean(timer?.running && timer.endAt && timer.endAt > Date.now());
  }

  function passiveWaitMinutes() {
    const ids = ["moonshineProduction", "traderGoods", "traderResupply"];
    return ids
      .map((id) => state.timers[id])
      .filter((timer) => timer?.running && timer.endAt > Date.now())
      .map((timer) => Math.ceil((timer.endAt - Date.now()) / 60000));
  }

  function eligibility(activity, setup) {
    const reasons = [];
    if (setup.playerRank < Number(activity.requiredRank || 1)) {
      reasons.push(t("rankLocked"));
    }

    if (activity.requiredRole) {
      const owned = Boolean(setup.roles[activity.requiredRole]?.owned);
      if (!owned) reasons.push(t("roleLocked"));
      const roleRank = Number(setup.roles[activity.requiredRole]?.rank ?? 0);
      if (roleRank < Number(activity.requiredRank || 1)) reasons.push(t("rankLocked"));
    }

    if (activity.id === "legendary_animal_materials" && !setup.naturalistLegendaryAccess) {
      reasons.push(t("roleLocked"));
    }

    if (setup.sessionMode === "solo" && activity.soloFriendly === false) {
      reasons.push(t("roleLocked"));
    }

    if (setup.avoidPvp && activity.riskLevel === "high") {
      reasons.push(t("pvpFiltered"));
    }

    if (activity.durationMin > sessionMinutes(setup)) {
      reasons.push(t("rankLocked"));
    }

    if (activity.id === "legendary_bounty" && isTimerRunning("legendaryBountyCooldown")) {
      reasons.push(t("legendaryCooldown"));
    }

    return { eligible: reasons.length === 0, reasons };
  }

  function weightsFor(priority) {
    const weights = {
      cash: 0.65,
      xp: 0.35,
      gold: 0.45,
      roleXp: 0.35,
      bonus: 18,
      roleNeed: 12,
      lowRisk: 0.2,
      beginner: 0.1,
      passive: 0.2
    };

    if (priority === "cash") return Object.assign(weights, { cash: 1.25, xp: 0.18, gold: 0.15, roleXp: 0.2 });
    if (priority === "xp") return Object.assign(weights, { cash: 0.3, xp: 1.15, gold: 0.2, roleXp: 0.35 });
    if (priority === "gold") return Object.assign(weights, { cash: 0.2, xp: 0.18, gold: 1.5, roleXp: 0.35 });
    if (priority === "roleXp") return Object.assign(weights, { cash: 0.25, xp: 0.3, gold: 0.25, roleXp: 1.25, roleNeed: 32 });
    if (priority === "beginner") return Object.assign(weights, { cash: 0.45, xp: 0.55, gold: 0.35, roleXp: 0.45, beginner: 0.75, lowRisk: 0.65 });
    if (priority === "passive") return Object.assign(weights, { cash: 1.0, xp: 0.25, gold: 0.2, roleXp: 0.3, passive: 0.9 });
    if (priority === "lowRisk") return Object.assign(weights, { cash: 0.65, xp: 0.55, gold: 0.25, roleXp: 0.35, lowRisk: 1.1 });
    return weights;
  }

  function riskPenalty(activity, setup) {
    if (activity.riskLevel === "high") return setup.avoidPvp ? 9999 : 70;
    if (activity.riskLevel === "medium") return setup.avoidPvp ? 22 : 12;
    return 0;
  }

  function roleNeedBonus(activity, setup) {
    if (setup.priority !== "roleXp") return 0;
    if (activity.role !== setup.roleFocus && activity.requiredRole !== setup.roleFocus) return 0;
    const roleRank = Number(setup.roles[setup.roleFocus]?.rank ?? 0);
    return Math.max(0, 30 - roleRank) * 1.4;
  }

  function scoreActivity(activity, setup) {
    const eligibilityResult = eligibility(activity, setup);
    const multipliers = multipliersFor(activity, setup);
    const duration = Math.max(1, Number(activity.durationMin || 1));
    const cash = Number(activity.baseCash || 0) * multipliers.cash;
    const xpValue = Number(activity.baseXp || 0) * multipliers.xp;
    const roleXpValue = Number(activity.baseRoleXp || 0) * multipliers.roleXp;
    const goldValue = Number(activity.baseGold || 0) * multipliers.gold;
    const perHour = {
      cash: (cash / duration) * 60,
      xp: (xpValue / duration) * 60,
      roleXp: (roleXpValue / duration) * 60,
      gold: (goldValue / duration) * 60
    };
    const weights = weightsFor(setup.priority);

    // The score uses normalized hourly rates plus readable bonuses/penalties.
    // This keeps the planner adjustable without pretending to be an exact payout calculator.
    let score =
      weights.cash * perHour.cash +
      weights.xp * (perHour.xp / 4) +
      weights.gold * (perHour.gold * 350) +
      weights.roleXp * (perHour.roleXp / 3) +
      (multipliers.hasBonus ? weights.bonus : 0) +
      roleNeedBonus(activity, setup) -
      riskPenalty(activity, setup);

    if (activity.beginnerFriendly) score += weights.beginner * 35;
    if (activity.riskLevel === "low") score += weights.lowRisk * 42;
    if (activity.tags?.includes("passive") || activity.tags?.includes("delivery")) score += weights.passive * 34;
    if (setup.saveCashTravel && activity.tags?.includes("route")) score -= 12;
    if (setup.useFastTravel && activity.tags?.includes("route")) score += 10;

    return {
      activity,
      eligible: eligibilityResult.eligible,
      lockReasons: eligibilityResult.reasons,
      multipliers,
      perHour,
      adjusted: { cash, xp: xpValue, roleXp: roleXpValue, gold: goldValue },
      score: Math.round(score)
    };
  }

  function scoredActivities() {
    const setup = readForm();
    state.scored = state.activities
      .map((activity) => scoreActivity(activity, setup))
      .filter((item) => item.eligible)
      .sort((a, b) => b.score - a.score);
    return state.scored;
  }

  function reasonsFor(item) {
    const reasons = [];
    const activity = item.activity;
    const setup = state.setup;
    if (activity.durationMin <= sessionMinutes(setup)) reasons.push(t("timeFit"));
    if (item.multipliers.hasBonus) reasons.push(t("bonusFit"));
    if (activity.tags?.includes("filler")) reasons.push(t("passiveFit"));
    if (setup.priority === "gold" && activity.baseGold > 0) reasons.push(t("goldFit"));
    if (setup.priority === "beginner" && activity.beginnerFriendly) reasons.push(t("beginnerFit"));
    if ((setup.priority === "lowRisk" || setup.avoidPvp) && activity.riskLevel === "low") reasons.push(t("lowRiskFit"));
    if (setup.priority === "roleXp" && (activity.role === setup.roleFocus || activity.requiredRole === setup.roleFocus)) reasons.push(t("roleXpFit"));
    if (setup.priority === "cash" && item.perHour.cash > 350) reasons.push(t("cashFit"));
    if (setup.priority === "xp" && item.perHour.xp > 1500) reasons.push(t("xpFit"));
    if (!reasons.length) reasons.push(t("assumptions"));
    return reasons;
  }

  function activeWaitAdvice() {
    const lines = [];
    if (isTimerRunning("moonshineProduction")) lines.push(t("moonshineWaiting"));
    if (isTimerRunning("traderGoods") || isTimerRunning("traderResupply")) lines.push(t("traderWaiting"));
    if (isTimerRunning("legendaryBountyCooldown")) lines.push(t("legendaryCooldown"));
    if (!lines.length) lines.push(t("noWaitWindow"));
    return lines;
  }

  function makeTimeline(minutes, scored) {
    const active = scored.filter((item) => Number(item.activity.activeTimeMin || item.activity.durationMin) > 0);
    const steps = [];
    let remaining = minutes;
    let guard = 0;
    while (remaining > 4 && active.length && guard < 8) {
      const candidate = active.find((item) => item.activity.durationMin <= remaining) || active[0];
      steps.push(candidate);
      remaining -= Math.max(5, Number(candidate.activity.durationMin || 10));
      guard += 1;
    }
    return steps;
  }

  function renderPlanCard(title, items) {
    return `
      <article class="plan-card">
        <h3>${escapeHtml(title)}</h3>
        <ol>
          ${items.map((item) => `<li>${escapeHtml(activityName(item.activity))}</li>`).join("") || `<li>${escapeHtml(t("noActivity"))}</li>`}
        </ol>
      </article>
    `;
  }

  function generatePlan() {
    const scored = scoredActivities();
    renderComparison(scored);

    if (!scored.length) {
      dom.output.innerHTML = `<div class="recommendation-card"><p>${escapeHtml(t("noActivity"))}</p></div>`;
      state.lastPlan = { generatedAt: new Date().toISOString(), bestActivityId: null };
      saveState();
      return;
    }

    const best = scored[0];
    const reasons = reasonsFor(best);
    const waitAdvice = activeWaitAdvice();
    const plan30 = makeTimeline(30, scored);
    const plan60 = makeTimeline(60, scored);
    const plan120 = makeTimeline(120, scored);

    dom.output.innerHTML = `
      <article class="recommendation-card">
        <span class="score-pill">${escapeHtml(t("score"))}: ${best.score}</span>
        <h2>${escapeHtml(activityName(best.activity))}</h2>
        <p>${escapeHtml(activityNote(best.activity))}</p>
        ${best.activity.estimate ? `<span class="estimate-pill">${escapeHtml(t("estimate"))}</span>` : ""}
      </article>

      <div class="metric-grid">
        <div class="metric-card"><span>${escapeHtml(t("cashHour"))}</span><strong>${money(best.perHour.cash)}</strong></div>
        <div class="metric-card"><span>${escapeHtml(t("xpHour"))}</span><strong>${xp(best.perHour.xp)}</strong></div>
        <div class="metric-card"><span>${escapeHtml(t("goldHour"))}</span><strong>${gold(best.perHour.gold)}</strong></div>
      </div>

      <article class="income-card">
        <h3>${escapeHtml(t("why"))}</h3>
        <ul class="tips-list">${reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}</ul>
      </article>

      <article class="income-card">
        <h3>${escapeHtml(t("whileWaiting"))}</h3>
        <ul class="tips-list">${waitAdvice.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </article>

      <div class="plan-grid">
        ${renderPlanCard(t("next30"), plan30)}
        ${renderPlanCard(t("next60"), plan60)}
        ${renderPlanCard(t("next120"), plan120)}
      </div>
    `;

    state.lastPlan = {
      generatedAt: new Date().toISOString(),
      bestActivityId: best.activity.id,
      bestActivityName: activityName(best.activity),
      priority: state.setup.priority,
      setup: state.setup
    };
    saveState();
  }

  function renderComparison(scored = state.scored) {
    const list = (scored.length ? scored : state.activities.map((activity) => scoreActivity(activity, state.setup)))
      .filter((item) => item.eligible)
      .sort((a, b) => b.score - a.score)
      .slice(0, 9);

    dom.comparison.innerHTML =
      list
        .map((item) => {
          const activity = item.activity;
          const riskKey = activity.riskLevel === "high" ? "riskHigh" : activity.riskLevel === "medium" ? "riskMedium" : "riskLow";
          return `
            <article class="activity-card">
              <header>
                <div>
                  <h3>${escapeHtml(activityName(activity))}</h3>
                  <span class="score-pill">${escapeHtml(t("score"))}: ${item.score}</span>
                </div>
                ${activity.estimate ? `<span class="estimate-pill">${escapeHtml(t("estimate"))}</span>` : ""}
              </header>
              <p>${escapeHtml(activityNote(activity))}</p>
              <div class="activity-stats">
                <div><span>${escapeHtml(t("cashHour"))}</span><strong>${money(item.perHour.cash)}</strong></div>
                <div><span>${escapeHtml(t("xpHour"))}</span><strong>${xp(item.perHour.xp)}</strong></div>
                <div><span>${escapeHtml(t("goldHour"))}</span><strong>${gold(item.perHour.gold)}</strong></div>
              </div>
              <div class="activity-tags">
                <span>${escapeHtml(roleLabel(activity.role))}</span>
                <span>${escapeHtml(t(riskKey))}</span>
                ${(activity.tags || []).slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
              </div>
            </article>
          `;
        })
        .join("") || `<article class="activity-card"><p>${escapeHtml(t("noActivity"))}</p></article>`;
  }

  function renderBonusStatus() {
    const active = activeBonuses();
    const status = dom.bonusStatus;
    if (active.length) {
      status.classList.add("is-active");
      status.innerHTML = active
        .map((bonus) => {
          const note = lang() === "da" ? bonus.noteDa || bonus.noteEn : bonus.noteEn || bonus.noteDa;
          return `<strong>${escapeHtml(t("activeBonus"))}: ${escapeHtml(bonus.eventName || "")}</strong><p>${escapeHtml(note || "")}</p>`;
        })
        .join("");
      return;
    }

    status.classList.remove("is-active");
    const sourceNote = lang() === "da" ? state.bonusMeta.sourceNoteDa : state.bonusMeta.sourceNoteEn;
    status.innerHTML = `
      <strong>${escapeHtml(t("noActiveBonus"))}</strong>
      <p>${escapeHtml(t("bonusOutdated"))}</p>
      <p>${escapeHtml(sourceNote || t("sourceManual"))}</p>
    `;
  }

  function formatDuration(ms) {
    if (!Number.isFinite(ms) || ms <= 0) return `0m 00s`;
    const total = Math.ceil(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (h > 0) return `${h}h ${m}m ${String(s).padStart(2, "0")}s`;
    return `${m}m ${String(s).padStart(2, "0")}s`;
  }

  function timerState(timer) {
    if (!timer) return { status: "idle", remaining: 0 };
    if (timer.running && timer.endAt) {
      const remaining = timer.endAt - Date.now();
      if (remaining <= 0) return { status: "ready", remaining: 0 };
      return { status: "running", remaining };
    }
    if (timer.remainingMs > 0) return { status: "paused", remaining: timer.remainingMs };
    return { status: "idle", remaining: 0 };
  }

  function statusLabel(definition, status) {
    if (status === "ready") return t("readyNow");
    if (status === "paused") return t("paused");
    if (status === "running" && definition.kind === "cooldown") return t("onCooldown");
    if (status === "running") return t("running");
    return t("idle");
  }

  function renderTimers() {
    dom.timers.innerHTML = timerDefinitions
      .map((definition) => {
        const timer = state.timers[definition.id] || {};
        const view = timerState(timer);
        const label = lang() === "da" ? definition.labelDa : definition.labelEn;
        const note = lang() === "da" ? definition.noteDa : definition.noteEn;
        const buttonText = view.status === "paused" ? t("resume") : t("start");
        return `
          <article class="timer-card" data-timer-card="${escapeHtml(definition.id)}">
            <span class="timer-state">${escapeHtml(statusLabel(definition, view.status))}</span>
            <h3>${escapeHtml(label)}</h3>
            <p class="timer-note">${escapeHtml(note)}</p>
            <div class="timer-display">${escapeHtml(view.status === "idle" ? "--" : formatDuration(view.remaining))}</div>
            <div class="field-group">
              <label for="timer-${escapeHtml(definition.id)}">${escapeHtml(t("minutes"))}</label>
              <input id="timer-${escapeHtml(definition.id)}" type="number" min="1" max="240" value="${escapeHtml(timer.durationMin || definition.defaultMinutes)}" data-timer-minutes="${escapeHtml(definition.id)}">
            </div>
            <div class="timer-controls">
              <button class="btn primary" type="button" data-timer-start="${escapeHtml(definition.id)}">${escapeHtml(buttonText)}</button>
              <button class="btn" type="button" data-timer-pause="${escapeHtml(definition.id)}">${escapeHtml(t("pause"))}</button>
              <button class="btn" type="button" data-timer-reset="${escapeHtml(definition.id)}">${escapeHtml(t("reset"))}</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function startTimer(id) {
    const definition = timerDefinitions.find((item) => item.id === id);
    if (!definition) return;
    const input = document.querySelector(`[data-timer-minutes="${escapeAttrValue(id)}"]`);
    const saved = state.timers[id] || {};
    const minutes = clampNumber(input?.value, 1, 240, definition.defaultMinutes);
    const remaining = saved.remainingMs > 0 ? saved.remainingMs : minutes * 60000;
    state.timers[id] = {
      durationMin: minutes,
      durationMs: minutes * 60000,
      remainingMs: 0,
      running: true,
      endAt: Date.now() + remaining
    };
    saveState();
    renderTimers();
    generatePlan();
  }

  function pauseTimer(id) {
    const timer = state.timers[id];
    if (!timer?.running) return;
    state.timers[id] = Object.assign({}, timer, {
      running: false,
      remainingMs: Math.max(0, timer.endAt - Date.now()),
      endAt: null
    });
    saveState();
    renderTimers();
    generatePlan();
  }

  function resetTimer(id) {
    delete state.timers[id];
    saveState();
    renderTimers();
    generatePlan();
  }

  function bindEvents() {
    dom.form.addEventListener("submit", (event) => {
      event.preventDefault();
      generatePlan();
    });

    dom.form.addEventListener("input", () => {
      readForm();
      renderComparison(scoredActivities());
    });

    dom.roleGrid.addEventListener("input", handleRoleControlChange);
    dom.roleGrid.addEventListener("change", handleRoleControlChange);

    dom.form.addEventListener("change", (event) => {
      if (event.target.matches("[data-role-owned]")) {
        syncRoleRankControls();
      }
      readForm();
      renderComparison(scoredActivities());
      renderBonusStatus();
    });

    document.addEventListener("click", (event) => {
      const priority = event.target.closest("[data-priority]");
      const resetSetup = event.target.closest("[data-reset-setup]");
      const timerStart = event.target.closest("[data-timer-start]");
      const timerPause = event.target.closest("[data-timer-pause]");
      const timerReset = event.target.closest("[data-timer-reset]");

      if (priority) {
        state.setup.priority = priority.dataset.priority;
        document.querySelectorAll("[data-priority]").forEach((button) => {
          button.classList.toggle("is-active", button === priority);
        });
        readForm();
        generatePlan();
      }

      if (resetSetup) {
        state.setup = structuredClone(defaultSetup);
        state.timers = {};
        renderRoles();
        renderRoleFocus();
        restoreForm();
        renderTimers();
        generatePlan();
        saveState();
      }

      if (timerStart) startTimer(timerStart.dataset.timerStart);
      if (timerPause) pauseTimer(timerPause.dataset.timerPause);
      if (timerReset) resetTimer(timerReset.dataset.timerReset);
    });

    window.addEventListener("gch:languagechange", () => {
      const nextLanguage = lang();
      if (nextLanguage === renderedLanguage) return;
      readForm();
      renderRoles();
      renderRoleFocus();
      restoreForm();
      renderedLanguage = nextLanguage;
      renderBonusStatus();
      renderTimers();
      generatePlan();
    });

    window.setInterval(() => {
      renderTimers();
    }, 1000);
  }

  function cacheDom() {
    dom.form = document.querySelector("#income-planner-form");
    dom.roleGrid = document.querySelector("#role-grid");
    dom.roleFocus = document.querySelector("#roleFocus");
    dom.bonusStatus = document.querySelector("#bonus-status");
    dom.output = document.querySelector("#planner-output");
    dom.timers = document.querySelector("#timer-dashboard");
    dom.comparison = document.querySelector("#activity-comparison");
  }

  async function boot() {
    cacheDom();
    if (!dom.form) return;
    readStoredState();
    renderRoles();
    renderRoleFocus();
    restoreForm();
    renderedLanguage = lang();
    dom.output.innerHTML = `<div class="recommendation-card"><p>${escapeHtml(t("loading"))}</p></div>`;
    await loadData();
    renderBonusStatus();
    renderTimers();
    bindEvents();
    generatePlan();

    if (state.dataWarning) {
      dom.output.insertAdjacentHTML("afterbegin", `<article class="bonus-line"><strong>${escapeHtml(t("dataIssue"))}</strong></article>`);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
