export const builds = {
  abrams: {
    name: "Bruiser Tank Build",
    description: "Bygget til at overleve, engage og blive i fighten længe.",
    early: [
      {
        item: "Extra Regen",
        type: "Survival",
        priority: "High",
        reason: "Giver bedre sustain i lane."
      },
      {
        item: "Melee Lifesteal",
        type: "Sustain",
        priority: "High",
        reason: "Stærk på Abrams fordi han ofte kæmper tæt på."
      },
      {
        item: "Sprint Boots",
        type: "Mobility",
        priority: "Medium",
        reason: "Hjælper dig med at lukke afstand."
      }
    ],
    mid: [
      {
        item: "Spirit Armor",
        type: "Defense",
        priority: "High",
        reason: "Gør dig mere tanky mod spirit damage."
      },
      {
        item: "Warp Stone",
        type: "Engage",
        priority: "Medium",
        reason: "Giver bedre mulighed for at starte fights."
      },
      {
        item: "Improved Cooldown",
        type: "Utility",
        priority: "Medium",
        reason: "Flere engages og mere uptime."
      }
    ],
    late: [
      {
        item: "Colossus",
        type: "Tank",
        priority: "High",
        reason: "Gør dig svær at dræbe i teamfights."
      },
      {
        item: "Leech",
        type: "Sustain",
        priority: "Medium",
        reason: "Giver lang fight value."
      },
      {
        item: "Unstoppable",
        type: "Defense",
        priority: "High",
        reason: "Hjælper mod crowd control."
      }
    ]
  },

  haze: {
    name: "Assassin Carry Build",
    description: "Fokus på attack speed, lifesteal og backline assassination.",
    early: [
      {
        item: "Basic Magazine",
        type: "Weapon",
        priority: "High",
        reason: "Billig damage og bedre farming."
      },
      {
        item: "Sprint Boots",
        type: "Mobility",
        priority: "High",
        reason: "Gør det lettere at finde vinkler."
      },
      {
        item: "Extra Regen",
        type: "Survival",
        priority: "Medium",
        reason: "Giver mere sikker lane."
      }
    ],
    mid: [
      {
        item: "Tesla Bullets",
        type: "Damage",
        priority: "High",
        reason: "God damage og clear."
      },
      {
        item: "Lifesteal",
        type: "Sustain",
        priority: "High",
        reason: "Lader dig blive i fights længere."
      },
      {
        item: "Quicksilver Reload",
        type: "Tempo",
        priority: "Medium",
        reason: "Giver hurtigere burst-window."
      }
    ],
    late: [
      {
        item: "Ricochet",
        type: "Teamfight",
        priority: "High",
        reason: "Massiv damage i grouped fights."
      },
      {
        item: "Glass Cannon",
        type: "Damage",
        priority: "Medium",
        reason: "Meget høj damage, men risky."
      },
      {
        item: "Unstoppable",
        type: "Defense",
        priority: "High",
        reason: "Gør det sværere at stoppe din ultimate."
      }
    ]
  },

  seven: {
    name: "Spirit Burst Build",
    description: "Fokus på cooldowns, spirit damage og stærke teamfights.",
    early: [
      {
        item: "Mystic Reach",
        type: "Spirit",
        priority: "High",
        reason: "Giver bedre range og pressure."
      },
      {
        item: "Extra Charge",
        type: "Utility",
        priority: "Medium",
        reason: "Mere ability uptime."
      },
      {
        item: "Sprint Boots",
        type: "Mobility",
        priority: "Medium",
        reason: "Hjælper med positionering."
      }
    ],
    mid: [
      {
        item: "Mystic Burst",
        type: "Burst",
        priority: "High",
        reason: "Stærkt damage spike."
      },
      {
        item: "Improved Cooldown",
        type: "Cooldown",
        priority: "High",
        reason: "Seven bliver meget bedre med lavere cooldown."
      },
      {
        item: "Spirit Lifesteal",
        type: "Sustain",
        priority: "Medium",
        reason: "Holder dig i live under fights."
      }
    ],
    late: [
      {
        item: "Superior Cooldown",
        type: "Cooldown",
        priority: "High",
        reason: "Maksimerer ability uptime."
      },
      {
        item: "Escalating Exposure",
        type: "Damage",
        priority: "High",
        reason: "Stærk mod targets du rammer flere gange."
      },
      {
        item: "Boundless Spirit",
        type: "Spirit",
        priority: "High",
        reason: "Stor late-game spirit scaling."
      }
    ]
  },

  wraith: {
    name: "Weapon Pickoff Build",
    description: "Fokus på single-target damage, mobility og picks.",
    early: [
      {
        item: "Swift Striker",
        type: "Weapon",
        priority: "High",
        reason: "God tidlig weapon damage."
      },
      {
        item: "Sprint Boots",
        type: "Mobility",
        priority: "High",
        reason: "Hjælper dig med rotations."
      },
      {
        item: "Extra Regen",
        type: "Survival",
        priority: "Medium",
        reason: "Mere sikker lane."
      }
    ],
    mid: [
      {
        item: "Burst Fire",
        type: "Damage",
        priority: "High",
        reason: "Godt mid-game damage spike."
      },
      {
        item: "Fleetfoot",
        type: "Mobility",
        priority: "Medium",
        reason: "Bedre chase og reposition."
      },
      {
        item: "Leech",
        type: "Sustain",
        priority: "Medium",
        reason: "Gør fights mere stabile."
      }
    ],
    late: [
      {
        item: "Crippling Headshot",
        type: "Damage",
        priority: "High",
        reason: "Meget stærk mod vigtige targets."
      },
      {
        item: "Ricochet",
        type: "Teamfight",
        priority: "Medium",
        reason: "Gør dig bedre i store fights."
      },
      {
        item: "Unstoppable",
        type: "Defense",
        priority: "High",
        reason: "Beskytter mod lockdown."
      }
    ]
  },

  infernus: {
    name: "Burn DPS Build",
    description: "Fokus på lange fights, burn damage og movement.",
    early: [
      {
        item: "Monster Rounds",
        type: "Farm",
        priority: "Medium",
        reason: "Gør farming og lane bedre."
      },
      {
        item: "Fleetfoot",
        type: "Mobility",
        priority: "High",
        reason: "Infernus elsker movement speed."
      },
      {
        item: "Extra Regen",
        type: "Survival",
        priority: "Medium",
        reason: "Mere lane sustain."
      }
    ],
    mid: [
      {
        item: "Spirit Burn",
        type: "Damage",
        priority: "High",
        reason: "Passer perfekt til burn playstyle."
      },
      {
        item: "Lifestrike",
        type: "Sustain",
        priority: "Medium",
        reason: "Bedre overlevelse i dueller."
      },
      {
        item: "Improved Spirit",
        type: "Damage",
        priority: "High",
        reason: "Mere burn pressure."
      }
    ],
    late: [
      {
        item: "Escalating Exposure",
        type: "Damage",
        priority: "High",
        reason: "Godt i lange fights."
      },
      {
        item: "Leech",
        type: "Sustain",
        priority: "High",
        reason: "Stærk late-game sustain."
      },
      {
        item: "Unstoppable",
        type: "Defense",
        priority: "Medium",
        reason: "Hjælper dig med at blive i fighten."
      }
    ]
  }
};

export function getBuild(heroId) {
  return builds[heroId] || null;
}
