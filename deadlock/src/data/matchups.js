export const matchups = {
  abrams: {
    strongAgainst: ["Seven", "Vindicta", "Grey Talon"],
    weakAgainst: ["Kelvin", "Warden", "McGinnis"],
    tips: [
      "Force close fights.",
      "Punish squishy backliners.",
      "Avoid getting kited."
    ],
    starterBuild: [
      "Melee Lifesteal",
      "Extra Regen",
      "Monster Rounds",
      "Spirit Armor"
    ]
  },

  haze: {
    strongAgainst: ["Vindicta", "Seven", "Grey Talon"],
    weakAgainst: ["Warden", "Kelvin", "Dynamo"],
    tips: [
      "Play around stealth timing.",
      "Avoid long front-to-back fights.",
      "Flank during teamfights."
    ],
    starterBuild: [
      "Swift Striker",
      "Close Quarters",
      "Fleetfoot",
      "Leech"
    ]
  },

  seven: {
    strongAgainst: ["Abrams", "McGinnis", "Warden"],
    weakAgainst: ["Haze", "Pocket", "Lash"],
    tips: [
      "Play for grouped fights.",
      "Abuse AoE pressure.",
      "Protect your positioning."
    ],
    starterBuild: [
      "Mystic Reach",
      "Spirit Power",
      "Improved Cooldown",
      "Spirit Lifesteal"
    ]
  },

  wraith: {
    strongAgainst: ["Seven", "Vindicta", "Grey Talon"],
    weakAgainst: ["Abrams", "Mo & Krill", "Kelvin"],
    tips: [
      "Look for isolated targets.",
      "Play aggressively in mid game.",
      "Abuse mobility to reposition."
    ],
    starterBuild: [
      "Swift Striker",
      "Burst Fire",
      "Fleetfoot",
      "Leech"
    ]
  },

  infernus: {
    strongAgainst: ["Abrams", "Mo & Krill", "McGinnis"],
    weakAgainst: ["Vindicta", "Haze", "Wraith"],
    tips: [
      "Play extended fights.",
      "Keep burn active on multiple enemies.",
      "Abuse movement speed."
    ],
    starterBuild: [
      "Monster Rounds",
      "Fleetfoot",
      "Spirit Burn",
      "Lifestrike"
    ]
  }
};

export function getMatchup(heroId) {
  return matchups[heroId];
}
