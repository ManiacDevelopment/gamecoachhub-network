export const abilities = {
  abrams: [
    {
      key: "1",
      name: "Siphon Health",
      type: "Sustain",
      description: "Dræner liv fra fjender foran Abrams og hjælper ham med at overleve tætte fights."
    },
    {
      key: "2",
      name: "Shoulder Charge",
      type: "Engage",
      description: "Charger frem, rammer fjender og kan stun hvis de bliver presset ind i en væg."
    },
    {
      key: "3",
      name: "Infernal Resilience",
      type: "Passive",
      description: "Gendanner en del af den skade Abrams tager over tid."
    },
    {
      key: "4",
      name: "Seismic Impact",
      type: "Ultimate",
      description: "Springer op og crasher ned i et område, hvor fjender tager skade og bliver stunned."
    }
  ],

  apollo: [
    {
      key: "1",
      name: "Disengaging Sigil",
      type: "Mobility",
      description: "Springer bagud og laver skade foran det sted, han forlader."
    },
    {
      key: "2",
      name: "Riposte",
      type: "Counter",
      description: "Kan parere næste angreb, blive kortvarigt usårlig og dash frem med stun."
    },
    {
      key: "3",
      name: "Flawless Advance",
      type: "Damage",
      description: "Lunger frem i flere hits. God timing giver højere skade."
    },
    {
      key: "4",
      name: "Itani Lo Sahn",
      type: "Ultimate",
      description: "Charger op og laver et kraftigt dash-slash, der især straffer low-health targets."
    }
  ],

  bebop: [
    {
      key: "1",
      name: "Exploding Uppercut",
      type: "Displacement",
      description: "Slår fjender væk og laver område-skade hvor de lander."
    },
    {
      key: "2",
      name: "Sticky Bomb",
      type: "Burst",
      description: "Sætter en bombe på et target, som eksploderer efter kort tid."
    },
    {
      key: "3",
      name: "Hook",
      type: "Pick",
      description: "Skyder en hook ud, trækker første ramte hero ind og sætter op til combo."
    },
    {
      key: "4",
      name: "Hyper Beam",
      type: "Ultimate",
      description: "Lader en kraftig laser, der laver stor skade og slow på fjender."
    }
  ],

  billy: [
    {
      key: "1",
      name: "Bashdown",
      type: "Melee",
      description: "Smadrer fjender ned med bat og sender dem op i luften."
    },
    {
      key: "2",
      name: "Rising Ram",
      type: "Engage",
      description: "Charger frem og løfter både Billy og ramte fjender op."
    },
    {
      key: "3",
      name: "Blasted",
      type: "Buff",
      description: "Forstærker melee og skud, mens Billy får ammo og debuffs via melee."
    },
    {
      key: "4",
      name: "Chain Gang",
      type: "Ultimate",
      description: "Kæder fjender fast tæt på Billy og trækker dem ind efter kort delay."
    }
  ],

  calico: [
    {
      key: "1",
      name: "Gloom Bombs",
      type: "AoE",
      description: "Sender bomber ud, der eksploderer efter kort delay."
    },
    {
      key: "2",
      name: "Leaping Slash",
      type: "Dive",
      description: "Springer frem og laver melee damage i et område. Healer hvis hun rammer hero."
    },
    {
      key: "3",
      name: "Ava",
      type: "Mobility",
      description: "Bliver til en hurtig spirit-cat form, der kan bevæge sig gennem små områder."
    },
    {
      key: "4",
      name: "Return to Shadows",
      type: "Ultimate",
      description: "Bliver kortvarigt untargetable og laver skade ved start og slut af transformationen."
    }
  ],

  celeste: [
    {
      key: "1",
      name: "Light Eater",
      type: "Cone Damage",
      description: "Skader fjender i en cone og gør dem mere sårbare for Celestes angreb."
    },
    {
      key: "2",
      name: "Dazzling Trick",
      type: "Barrier",
      description: "Giver barrier og movement speed. Hvis barrieren brydes, silence og skades fjender tæt på."
    },
    {
      key: "3",
      name: "Radiant Daggers",
      type: "AoE Buff",
      description: "Markerer et område, der skader fjender og giver Celeste ekstra spirit damage."
    },
    {
      key: "4",
      name: "Shining Wonder",
      type: "Ultimate",
      description: "Kaster en lys-orb, der rammer, slower og forsøger at hoppe videre til flere fjender."
    }
  ],

  doorman: [
    {
      key: "1",
      name: "Call Bell",
      type: "Harass",
      description: "Kaster en klokke, der eksploderer efter delay eller kan detoneres tidligt."
    },
    {
      key: "2",
      name: "Doorway",
      type: "Portal",
      description: "Placerer forbundne døre på vægge, som spillere og projektiler kan gå/se gennem."
    },
    {
      key: "3",
      name: "Luggage Cart",
      type: "Control",
      description: "Sender en vogn frem, som skader og trækker fjender med sig. Kan stun mod væg."
    },
    {
      key: "4",
      name: "Hotel Guest",
      type: "Ultimate",
      description: "Sender en fjende væk midlertidigt. Hvis de ikke slipper ud, tager de stor skade."
    }
  ],

  drifter: [
    {
      key: "1",
      name: "Rend",
      type: "Melee Cone",
      description: "Lader op og slasher fjender i en cone. Tætte fjender tager ekstra skade."
    },
    {
      key: "2",
      name: "Stalker's Mark",
      type: "Pick",
      description: "Markerer en fjende med damage over time og kan reaktiveres for teleport bag target."
    },
    {
      key: "3",
      name: "Bloodscent",
      type: "Passive",
      description: "Isolerede fjender efterlader spor, og Drifter gør mere skade mod dem."
    },
    {
      key: "4",
      name: "Eternal Night",
      type: "Ultimate",
      description: "Reducerer fjenders vision tæt på og giver Drifter movement speed og bonus damage."
    }
  ],

  dynamo: [
    {
      key: "1",
      name: "Kinetic Pulse",
      type: "Crowd Control",
      description: "Udsender en energipuls, der knockupper fjender."
    },
    {
      key: "2",
      name: "Quantum Entanglement",
      type: "Mobility",
      description: "Forsvinder kortvarigt og dukker op igen med reload og fire-rate bonus."
    },
    {
      key: "3",
      name: "Rejuvenating Aurora",
      type: "Heal",
      description: "Channeler healing til Dynamo og allies tæt på."
    },
    {
      key: "4",
      name: "Singularity",
      type: "Ultimate",
      description: "Skaber en singularitet, der trækker fjender ind, skader dem og knockupper dem."
    }
  ],

  graves: [
    {
      key: "1",
      name: "Jar of Dead",
      type: "Summon",
      description: "Samler charges fra døde units og bruger dem til at sende minions ud."
    },
    {
      key: "2",
      name: "Grasping Hands",
      type: "Zone Control",
      description: "Laver en linje på jorden, som skader og immobilizer fjender der krydser den."
    },
    {
      key: "3",
      name: "Essence Theft",
      type: "Passive",
      description: "Angreb stjæler midlertidigt weapon damage og spirit resistance."
    },
    {
      key: "4",
      name: "Borrowed Decree",
      type: "Ultimate",
      description: "Sætter en gravsten, der løbende spawner minions mod fjendens base."
    }
  ],

  "grey-talon": [
    {
      key: "1",
      name: "Charged Shot",
      type: "Skillshot",
      description: "Lader et kraftigt skud op, der kan pierce gennem fjender."
    },
    {
      key: "2",
      name: "Rain of Arrows",
      type: "Air Control",
      description: "Sender Grey Talon op i luften, hvor han får ekstra weapon damage og multishot."
    },
    {
      key: "3",
      name: "Immobilizing Trap",
      type: "Trap",
      description: "Placerer en trap, der curser og slower fjender når den trigger."
    },
    {
      key: "4",
      name: "Guided Owl",
      type: "Ultimate",
      description: "Sender en styrbar spirit owl, der eksploderer, skader og stunner fjender."
    }
  ],

  haze: [
    {
      key: "1",
      name: "Sleep Dagger",
      type: "Disable",
      description: "Kaster en dagger, der skader og sover target kortvarigt."
    },
    {
      key: "2",
      name: "Smoke Bomb",
      type: "Stealth",
      description: "Gør Haze usynlig og giver sprint speed. Angreb bryder stealth."
    },
    {
      key: "3",
      name: "Fixation",
      type: "Passive",
      description: "Skud på samme target bygger stacks, der øger bullet damage mod target."
    },
    {
      key: "4",
      name: "Bullet Dance",
      type: "Ultimate",
      description: "Skyder automatisk på fjender tæt på med høj præcision og fire-rate bonus."
    }
  ],

  holliday: [
    {
      key: "1",
      name: "Powder Keg",
      type: "AoE",
      description: "Kaster en tønde, der eksploderer og knockupper fjender. Kan detoneres tidligt."
    },
    {
      key: "2",
      name: "Bounce Pad",
      type: "Mobility",
      description: "Placerer en pad, som sender heroes op i luften og laver impact damage ved landing."
    },
    {
      key: "3",
      name: "Crackshot",
      type: "Passive",
      description: "Headshots laver bonus damage og slow."
    },
    {
      key: "4",
      name: "Spirit Lasso",
      type: "Ultimate",
      description: "Kaster en lasso, der stunner, skader og trækker en fjende med."
    }
  ],

  infernus: [
    {
      key: "1",
      name: "Catalyst",
      type: "Debuff",
      description: "Sprøjter napalm, der slower fjender og gør Infernus’ skade mod dem stærkere."
    },
    {
      key: "2",
      name: "Flame Dash",
      type: "Mobility",
      description: "Dasher frem og efterlader et brændende spor, mens Infernus får slow resistance."
    },
    {
      key: "3",
      name: "Afterburn",
      type: "Passive",
      description: "Skud bygger en burn-effekt op, som bullets og abilities kan refresh."
    },
    {
      key: "4",
      name: "Concussive Combustion",
      type: "Ultimate",
      description: "Bliver til en levende bombe, der eksploderer, skader og stunner fjender."
    }
  ],

  ivy: [
    {
      key: "1",
      name: "Kudzu Bomb",
      type: "Zone",
      description: "Skaber et område med vines, der skader og slower fjender."
    },
    {
      key: "2",
      name: "Watchers' Covenant",
      type: "Link",
      description: "Forbinder Ivy med en ally og deler healing og bonuses."
    },
    {
      key: "3",
      name: "Stone Form",
      type: "Defense",
      description: "Bliver til sten, falder ned og stunner/skader fjender. Healer Ivy."
    },
    {
      key: "4",
      name: "Air Drop",
      type: "Ultimate",
      description: "Flyver med en ally eller bombe og dropper dem for stor AoE impact."
    }
  ],

  kelvin: [
    {
      key: "1",
      name: "Frost Grenade",
      type: "AoE Slow",
      description: "Kaster en frostgranat, der skader og slower fjender."
    },
    {
      key: "2",
      name: "Ice Path",
      type: "Mobility",
      description: "Laver en flydende issti, der giver movement bonus."
    },
    {
      key: "3",
      name: "Arctic Beam",
      type: "Channel",
      description: "Skyder en froststråle, der skader og bygger slow/fire-rate slow på target."
    },
    {
      key: "4",
      name: "Frozen Shelter",
      type: "Ultimate",
      description: "Skaber en dome, hvor allies regenererer hurtigt og fjender bliver slowed."
    }
  ],

  "lady-geist": [
    {
      key: "1",
      name: "Essence Bomb",
      type: "Burst",
      description: "Ofre eget liv for at kaste en bombe, der skader et område efter landing."
    },
    {
      key: "2",
      name: "Life Drain",
      type: "Sustain",
      description: "Dræner en fjende over tid og healer Lady Geist."
    },
    {
      key: "3",
      name: "Malice",
      type: "Debuff",
      description: "Kaster blood shards, der slower og får target til at tage mere skade."
    },
    {
      key: "4",
      name: "Soul Exchange",
      type: "Ultimate",
      description: "Bytter health-level med en fjende på kort range."
    }
  ],

  lash: [
    {
      key: "1",
      name: "Ground Strike",
      type: "Dive",
      description: "Stomper jorden og skader foran sig. Fra luften bliver angrebet stærkere."
    },
    {
      key: "2",
      name: "Grapple",
      type: "Mobility",
      description: "Trækker Lash gennem luften mod et target og resetter air movement."
    },
    {
      key: "3",
      name: "Flog",
      type: "Sustain",
      description: "Slår med whip i en cone og stjæler liv fra fjender."
    },
    {
      key: "4",
      name: "Death Slam",
      type: "Ultimate",
      description: "Fanger fjender med whips, løfter dem og smadrer dem ned et valgt sted."
    }
  ],

  mcginnis: [
    {
      key: "1",
      name: "Mini Turret",
      type: "Deployable",
      description: "Sætter en turret, der automatisk skyder fjender."
    },
    {
      key: "2",
      name: "Medicinal Specter",
      type: "Heal",
      description: "Deployer en spirit, der healer allies i et område."
    },
    {
      key: "3",
      name: "Spectral Wall",
      type: "Wall",
      description: "Skaber en væg, der deler terrain og skader/slower fjender ved oprettelse."
    },
    {
      key: "4",
      name: "Heavy Barrage",
      type: "Ultimate",
      description: "Channeler en strøm af raketter mod et område."
    }
  ],

  mina: [
    {
      key: "1",
      name: "Rake",
      type: "Cone Damage",
      description: "Slasher i en cone og laver mere skade mod low-health enemies."
    },
    {
      key: "2",
      name: "Sanguine Retreat",
      type: "Escape",
      description: "Bliver kortvarigt untargetable og dasher i valgt retning."
    },
    {
      key: "3",
      name: "Love Bites",
      type: "Passive",
      description: "Angreb og abilities bygger bonus damage op mod fjender."
    },
    {
      key: "4",
      name: "Nox Nostra",
      type: "Ultimate",
      description: "Sender bats ud, der søger targets, skader og silencer."
    }
  ],

  mirage: [
    {
      key: "1",
      name: "Fire Scarabs",
      type: "Debuff",
      description: "Sender scarabs ud, der stjæler max health og reducerer resistances."
    },
    {
      key: "2",
      name: "Tornado",
      type: "Mobility",
      description: "Dasher som tornado, bliver untargetable og løfter fjender kortvarigt."
    },
    {
      key: "3",
      name: "Djinn's Mark",
      type: "Mark",
      description: "Angreb markerer fjender. Aktivering forbruger marks for burst og reveal."
    },
    {
      key: "4",
      name: "Traveler",
      type: "Ultimate",
      description: "Teleporterer til ally, objective eller synlig enemy på minimap efter channel."
    }
  ],

  "mo-krill": [
    {
      key: "1",
      name: "Scorn",
      type: "Sustain",
      description: "Skader fjender tæt på og healer Mo & Krill baseret på skade."
    },
    {
      key: "2",
      name: "Burrow",
      type: "Mobility",
      description: "Graver under jorden, bevæger sig hurtigt og knockupper ved exit."
    },
    {
      key: "3",
      name: "Sand Blast",
      type: "Disarm",
      description: "Sprøjter sand i en cone, skader og disarmer fjender."
    },
    {
      key: "4",
      name: "Combo",
      type: "Ultimate",
      description: "Holder en fjende fast, stunner og laver skade under channel."
    }
  ],

  paige: [
    {
      key: "1",
      name: "Conjure Dragon",
      type: "AoE",
      description: "Kaster en drage, der skader ved landing og efterlader en brændende sti."
    },
    {
      key: "2",
      name: "Defend and Fight!",
      type: "Shield",
      description: "Giver shield til sig selv eller ally og buff til weapon damage."
    },
    {
      key: "3",
      name: "Captivating Read",
      type: "Control",
      description: "Markerer område, slower fjender og immobilizer efter delay."
    },
    {
      key: "4",
      name: "Rallying Charge",
      type: "Ultimate",
      description: "Sender riddere over kortet, healer allies og skader/stunner fjender."
    }
  ],

  paradox: [
    {
      key: "1",
      name: "Pulse Grenade",
      type: "AoE Debuff",
      description: "Kaster en grenade, der pulserer skade, slow og damage amplification."
    },
    {
      key: "2",
      name: "Time Wall",
      type: "Wall",
      description: "Stopper fjendtlige bullets/projectiles og skader/slower fjender der rører væggen."
    },
    {
      key: "3",
      name: "Kinetic Carbine",
      type: "Charged Shot",
      description: "Lader et skud op, der laver spirit damage og time-stop effekt."
    },
    {
      key: "4",
      name: "Paradoxical Swap",
      type: "Ultimate",
      description: "Skyder et projektil, der bytter position med en enemy hero."
    }
  ],

  pocket: [
    {
      key: "1",
      name: "Barrage",
      type: "Projectile",
      description: "Channeler projektiler, der skader og slower. Hits giver stacking damage amp."
    },
    {
      key: "2",
      name: "Flying Cloak",
      type: "Mobility",
      description: "Sender cloak frem, skader fjender og kan bruges som teleportpunkt."
    },
    {
      key: "3",
      name: "Enchanter's Satchel",
      type: "Escape",
      description: "Går i suitcase, bliver untargetable og laver skade når Pocket kommer ud."
    },
    {
      key: "4",
      name: "Affliction",
      type: "Ultimate",
      description: "Påfører langvarig damage over time på fjender tæt på."
    }
  ],

  rem: [
    {
      key: "1",
      name: "Pillow Toss",
      type: "Knockback",
      description: "Kaster en pude, der eksploderer og knockbacker fjender."
    },
    {
      key: "2",
      name: "Tag Along",
      type: "Support",
      description: "Hopper til en ally, bliver untargetable og healer/buffer dem."
    },
    {
      key: "3",
      name: "Lil Helpers",
      type: "Utility",
      description: "Sender helpers ud til at buffe, rydde objekter eller hjælpe allies."
    },
    {
      key: "4",
      name: "Naptime",
      type: "Ultimate",
      description: "Channeler cone-zoner gennem vægge, slower fjender og får dem til at falde i søvn."
    }
  ],

  seven: [
    {
      key: "1",
      name: "Lightning Ball",
      type: "AoE",
      description: "Skyder en lightning ball frem, der skader targets i radius."
    },
    {
      key: "2",
      name: "Static Charge",
      type: "Stun",
      description: "Sætter charge på enemy hero, som efter kort tid stunner og skader i radius."
    },
    {
      key: "3",
      name: "Power Surge",
      type: "Weapon Buff",
      description: "Giver skud shock damage, der kan bounce til fjender tæt på target."
    },
    {
      key: "4",
      name: "Storm Cloud",
      type: "Ultimate",
      description: "Channeler en voksende storm omkring Seven, som skader fjender i line of sight."
    }
  ],

  shiv: [
    {
      key: "1",
      name: "Serrated Knives",
      type: "Bleed",
      description: "Kaster knive, der skader og påfører bleed. Flere hits stacker bleed."
    },
    {
      key: "2",
      name: "Slice and Dice",
      type: "Dash",
      description: "Dasher frem og skader fjender på vejen."
    },
    {
      key: "3",
      name: "Bloodletting",
      type: "Defense",
      description: "Udskyder noget incoming damage over tid og kan aktivere for at rense en del."
    },
    {
      key: "4",
      name: "Killing Blow",
      type: "Ultimate",
      description: "Springer mod en enemy hero og execute’er hvis de er under threshold."
    }
  ],

  silo: [
    {
      key: "1",
      name: "Slam Fire",
      type: "Weapon Buff",
      description: "Reloader straks og giver bonus fire rate/weapon damage på de næste skud."
    },
    {
      key: "2",
      name: "Boot Kick",
      type: "Mobility",
      description: "Dasher frem, sparker fjende og hopper tilbage, mens target markeres."
    },
    {
      key: "3",
      name: "Entangling Bola",
      type: "Control",
      description: "Kaster bola, der skader og begrænser fjendens movement options."
    },
    {
      key: "4",
      name: "Lycan Curse",
      type: "Ultimate",
      description: "Transformerer til werewolf-form med nye melee abilities og stærke buffs."
    }
  ],

  sinclair: [
    {
      key: "1",
      name: "Vexing Bolt",
      type: "Projectile",
      description: "Skyder en bolt, der gør mere skade over distance og kan omdirigeres."
    },
    {
      key: "2",
      name: "Spectral Assistant",
      type: "Summon",
      description: "Summoner en assistent, der angriber med Sinclair og kan bruges til swap."
    },
    {
      key: "3",
      name: "Rabbit Hex",
      type: "Crowd Control",
      description: "Forvandler fjender i et område til rabbits, som tager mere skade og mister actions."
    },
    {
      key: "4",
      name: "Audience Participation",
      type: "Ultimate",
      description: "Kopierer en enemy hero ultimate midlertidigt."
    }
  ],

  venator: [
    {
      key: "1",
      name: "Consecrating Grenade",
      type: "Grenade",
      description: "Kaster granat, der eksploderer og debuffer fjender med healing reduction og DoT."
    },
    {
      key: "2",
      name: "Gutshot",
      type: "Knockback",
      description: "Skyder en cone-blast, der skader og knockbacker. Wall-hit kan stun."
    },
    {
      key: "3",
      name: "Hex-Lined Snap Trap",
      type: "Trap",
      description: "Sparker en trap frem, som immobilizer og revealer fjender."
    },
    {
      key: "4",
      name: "Ira Domini",
      type: "Ultimate",
      description: "Skifter til crossbow-stakes med høj damage og execute-potentiale."
    }
  ],

  victor: [
    {
      key: "1",
      name: "Pain Battery",
      type: "Cone Damage",
      description: "Lades op af damage taken og skyder elektricitet i en cone."
    },
    {
      key: "2",
      name: "Jumpstart",
      type: "Self Buff",
      description: "Tager selv skade for at få health regen og movement speed."
    },
    {
      key: "3",
      name: "Aura of Suffering",
      type: "Toggle",
      description: "Skader Victor og fjender tæt på over tid. Skaden ramper op."
    },
    {
      key: "4",
      name: "Shocking Reanimation",
      type: "Ultimate",
      description: "Reanimerer efter lethal damage og stunner/skader fjender tæt på."
    }
  ],

  vindicta: [
    {
      key: "1",
      name: "Stake",
      type: "Tether",
      description: "Kaster en stake, der tether fjender til et område."
    },
    {
      key: "2",
      name: "Flight",
      type: "Mobility",
      description: "Springer op og flyver. Skud får bonus spirit damage mens hun flyver."
    },
    {
      key: "3",
      name: "Crow Familiar",
      type: "Bleed",
      description: "Sender crow familiar, der skader og påfører bleed baseret på target health."
    },
    {
      key: "4",
      name: "Assassinate",
      type: "Ultimate",
      description: "Bruger scoped rifle til langdistance-shot med bonus mod low-health enemies."
    }
  ],

  viscous: [
    {
      key: "1",
      name: "Splatter",
      type: "Goo AoE",
      description: "Kaster goo, der skader og efterlader slow-puddles."
    },
    {
      key: "2",
      name: "The Cube",
      type: "Save",
      description: "Indkapsler target i cube, renser debuffs, beskytter og øger regen."
    },
    {
      key: "3",
      name: "Puddle Punch",
      type: "Knockup",
      description: "Skaber en fist, der slår fjender op, skader og slower."
    },
    {
      key: "4",
      name: "Goo Ball",
      type: "Ultimate",
      description: "Bliver til en stor goo ball, der stunner og skader ved impact."
    }
  ],

  vyper: [
    {
      key: "1",
      name: "Screwjab Dagger",
      type: "Poison / Slow",
      description: "Kaster dagger, der skader og slower. Gentagne hits stacker effekten."
    },
    {
      key: "2",
      name: "Lethal Venom",
      type: "Execute Damage",
      description: "Injicerer venom, der aktiveres efter delay og gør mere skade mod low-health targets."
    },
    {
      key: "3",
      name: "Slither",
      type: "Passive",
      description: "Forbedrer slide distance og gør Vyper stærkere i movement."
    },
    {
      key: "4",
      name: "Petrifying Bola",
      type: "Ultimate",
      description: "Kaster eksplosiv bola, der skader, slower og kan petrify direct hit targets."
    }
  ],

  warden: [
    {
      key: "1",
      name: "Alchemical Flask",
      type: "Debuff",
      description: "Kaster flask, der skader, slower og reducerer weapon damage/stamina."
    },
    {
      key: "2",
      name: "Willpower",
      type: "Shield",
      description: "Giver shield og movement speed."
    },
    {
      key: "3",
      name: "Binding Word",
      type: "Root",
      description: "Curser en hero. Hvis de ikke flytter sig væk, tager de skade og immobilize."
    },
    {
      key: "4",
      name: "Last Stand",
      type: "Ultimate",
      description: "Channeler skade i stor cone og healer baseret på damage dealt."
    }
  ],

  wraith: [
    {
      key: "1",
      name: "Card Trick",
      type: "Projectile",
      description: "Bygger cards via weapon damage og kaster dem mod enemy eller crosshair-point."
    },
    {
      key: "2",
      name: "Project Mind",
      type: "Teleport",
      description: "Teleporterer til en valgt position."
    },
    {
      key: "3",
      name: "Full Auto",
      type: "Fire Rate",
      description: "Giver Wraith fire-rate bonus og giver nearby allies en mindre bonus."
    },
    {
      key: "4",
      name: "Telekinesis",
      type: "Ultimate",
      description: "Løfter en enemy hero op i luften, stunner og skader dem bagefter."
    }
  ],

  yamato: [
    {
      key: "1",
      name: "Power Slash",
      type: "Charged Slash",
      description: "Lader et sword slash op i en linje foran Yamato."
    },
    {
      key: "2",
      name: "Flying Strike",
      type: "Engage",
      description: "Grappler mod en fjende, skader og slower ved ankomst."
    },
    {
      key: "3",
      name: "Crimson Slash",
      type: "Sustain",
      description: "Slasher foran sig, skader og slower fire rate. Healer ved hero-hit."
    },
    {
      key: "4",
      name: "Shadow Transformation",
      type: "Ultimate",
      description: "Transformerer, refresher abilities og får stærke buffs som resistance og immunity."
    }
  ]
};

export function getAbilities(heroId) {
  return abilities[heroId] || [];
}
