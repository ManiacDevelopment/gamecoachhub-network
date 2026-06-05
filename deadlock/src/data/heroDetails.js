export const heroDetails = {
  abrams: {
    overview:
      "Abrams er en frontline bruiser, der vinder tætte fights med sustain, crowd control og hårde engages.",
    strengths: [
      "Meget stærk i close-range fights",
      "God sustain og tankiness",
      "Kan starte fights effektivt",
      "Straffer fjender der står tæt på vægge"
    ],
    weaknesses: [
      "Kan blive kitet af mobile heroes",
      "Sårbar mod slows og anti-heal",
      "Kræver god timing på engage",
      "Kan falde bagud hvis han ikke får pressure tidligt"
    ],
    playstyle: [
      "Pres lane tidligt",
      "Force korte trades",
      "Engage når fjenden har brugt escape",
      "Spil foran dit hold i teamfights"
    ],
    bestWith: ["Dynamo", "Kelvin", "Ivy"],
    strugglesAgainst: ["Vindicta", "Grey Talon", "Kelvin"]
  },

  seven: {
    overview:
      "Seven er en spirit caster med stærk AoE damage, waveclear og høj teamfight impact.",
    strengths: [
      "Stærk AoE damage",
      "God waveclear",
      "Skalerer godt til mid/late game",
      "Meget farlig i chokepoints"
    ],
    weaknesses: [
      "Sårbar hvis han bliver dykket",
      "Kræver god positionering",
      "Kan straffes før han får items",
      "Afhænger meget af cooldowns"
    ],
    playstyle: [
      "Farm sikkert early",
      "Spil bag frontline",
      "Brug abilities til zoning",
      "Tag fights i smalle områder"
    ],
    bestWith: ["Abrams", "Dynamo", "Kelvin"],
    strugglesAgainst: ["Haze", "Pocket", "Lash"]
  },

  haze: {
    overview:
      "Haze er en stealth carry, der skalerer hårdt og kan slette backline targets med god timing.",
    strengths: [
      "Meget høj late-game damage",
      "Stærk stealth og pickoff potentiale",
      "God mod squishy targets",
      "Kan carry fights med ultimate"
    ],
    weaknesses: [
      "Sårbar tidligt",
      "Kræver god positioning",
      "Kan stoppes af CC",
      "Dårlig hvis hun engager for tidligt"
    ],
    playstyle: [
      "Farm sikkert early",
      "Find flanks i midgame",
      "Vent på kaos før ultimate",
      "Focus squishy targets først"
    ],
    bestWith: ["Dynamo", "Ivy", "Kelvin"],
    strugglesAgainst: ["Warden", "Abrams", "Kelvin"]
  },

  vindicta: {
    overview:
      "Vindicta er en long-range sniper, der dominerer åbne vinkler og straffer dårlig positionering.",
    strengths: [
      "Ekstrem range",
      "Stærk poke",
      "God execute potentiale",
      "Kontrollerer åbne områder"
    ],
    weaknesses: [
      "Meget sårbar mod dive",
      "Kræver positionering",
      "Dårlig i tætte fights",
      "Kan blive presset af mobile heroes"
    ],
    playstyle: [
      "Hold afstand",
      "Brug high ground",
      "Punish low-health targets",
      "Undgå isolated close-range fights"
    ],
    bestWith: ["Kelvin", "Warden", "Dynamo"],
    strugglesAgainst: ["Haze", "Wraith", "Lash"]
  }
};

export function getHeroDetails(heroId) {
  return heroDetails[heroId] || {
    overview:
      "Denne hero mangler stadig en fuld guide. Data kan tilføjes senere.",
    strengths: ["Mangler data"],
    weaknesses: ["Mangler data"],
    playstyle: ["Mangler data"],
    bestWith: [],
    strugglesAgainst: []
  };
}
