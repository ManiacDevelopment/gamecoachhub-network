export const counters = {
  abrams: [
    {
      item: "Slowing Hex",
      timing: "Early / Mid",
      priority: "High",
      goodAgainst: ["Abrams", "Mo & Krill", "Lash"],
      reason: "Gør det sværere for melee heroes at lukke afstand."
    },
    {
      item: "Toxic Bullets",
      timing: "Mid",
      priority: "High",
      goodAgainst: ["Abrams", "Infernus", "Mo & Krill"],
      reason: "Reducerer sustain og healing i lange fights."
    },
    {
      item: "Spirit Armor",
      timing: "Mid",
      priority: "Medium",
      goodAgainst: ["Seven", "Lady Geist", "Kelvin"],
      reason: "Reducerer burst fra spirit-heavy heroes."
    }
  ],

  haze: [
    {
      item: "Return Fire",
      timing: "Mid",
      priority: "High",
      goodAgainst: ["Haze", "Wraith", "Vindicta"],
      reason: "Straffer weapon carries når de fokuserer dig."
    },
    {
      item: "Metal Skin",
      timing: "Mid / Late",
      priority: "High",
      goodAgainst: ["Haze", "Wraith", "Infernus"],
      reason: "Giver et stærkt defensivt vindue mod weapon damage."
    },
    {
      item: "Knockdown",
      timing: "Mid",
      priority: "Medium",
      goodAgainst: ["Haze", "Vindicta", "Pocket"],
      reason: "Kan stoppe mobile eller channel-baserede threats."
    }
  ],

  seven: [
    {
      item: "Spirit Armor",
      timing: "Early / Mid",
      priority: "High",
      goodAgainst: ["Seven", "Lady Geist", "Kelvin"],
      reason: "Reducerer Sevens spirit damage markant."
    },
    {
      item: "Debuff Reducer",
      timing: "Mid",
      priority: "Medium",
      goodAgainst: ["Seven", "Warden", "Kelvin"],
      reason: "Mindsker effekten af crowd control og slows."
    },
    {
      item: "Silence Glyph",
      timing: "Mid / Late",
      priority: "High",
      goodAgainst: ["Seven", "Pocket", "Lady Geist"],
      reason: "Kan forhindre burst-combos og vigtige abilities."
    }
  ],

  wraith: [
    {
      item: "Return Fire",
      timing: "Mid",
      priority: "High",
      goodAgainst: ["Wraith", "Haze", "Vindicta"],
      reason: "Straffer single-target weapon damage."
    },
    {
      item: "Metal Skin",
      timing: "Mid / Late",
      priority: "High",
      goodAgainst: ["Wraith", "Haze", "Infernus"],
      reason: "Reducerer risikoen for at blive slettet hurtigt."
    },
    {
      item: "Slowing Hex",
      timing: "Mid",
      priority: "Medium",
      goodAgainst: ["Wraith", "Pocket", "Lash"],
      reason: "Gør det sværere for mobile heroes at repositionere."
    }
  ],

  infernus: [
    {
      item: "Debuff Remover",
      timing: "Mid",
      priority: "High",
      goodAgainst: ["Infernus", "Warden", "Kelvin"],
      reason: "Hjælper mod burn, slows og andre debuffs."
    },
    {
      item: "Spirit Armor",
      timing: "Mid",
      priority: "Medium",
      goodAgainst: ["Infernus", "Seven", "Lady Geist"],
      reason: "Reducerer spirit/burn pressure."
    },
    {
      item: "Healbane",
      timing: "Mid",
      priority: "High",
      goodAgainst: ["Infernus", "Abrams", "Mo & Krill"],
      reason: "Reducerer healing og sustain i længere fights."
    }
  ]
};

export function getCounters(heroId) {
  return counters[heroId] || [];
}
