export const coachQuestions = [
  {
    id: "lane",
    label: "How do I win lane?",
    type: "lane"
  },
  {
    id: "items",
    label: "What should I buy?",
    type: "items"
  },
  {
    id: "teamfight",
    label: "How do I teamfight?",
    type: "teamfight"
  },
  {
    id: "mistakes",
    label: "What should I avoid?",
    type: "mistakes"
  }
];

export function getCoachAnswer({ hero, enemy, duel, build, counters, type }) {
  if (!hero || !enemy) {
    return "Vælg først din hero og enemy hero.";
  }

  if (!duel) {
    return `${hero.name} vs ${enemy.name} mangler stadig en konkret duel-guide. Brug i stedet build-guiden og counter-items længere nede.`;
  }

  if (type === "lane") {
    return `${hero.name} skal spille lane mod ${enemy.name} sådan her: ${duel.early.join(
      " "
    )}`;
  }

  if (type === "items") {
    const duelItems = duel.recommendedItems?.join(", ");
    const earlyItems = build?.early?.map((item) => item.item).join(", ");
    const counterItems = counters?.map((item) => item.item).join(", ");

    return `Start med: ${earlyItems || "standard early items"}. Mod ${
      enemy.name
    } bør du især overveje: ${duelItems || counterItems || "defensive items"}.`;
  }

  if (type === "teamfight") {
    return `I teamfights mod ${enemy.name}: ${duel.mid.join(" ")} ${duel.late.join(
      " "
    )}`;
  }

  if (type === "mistakes") {
    return `Undgå især: ${duel.avoid.join(" ")}`;
  }

  return duel.gameplan;
}
