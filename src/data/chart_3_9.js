export default {
  version: "3.9",
  nodes: [
    {
      id: "start",
      title: "What sort of build are you looking for?",
      subtitle: "Choose your path",
      paths: [
        {
          id: "Bows",
          title: "I wan to try some bow skills"
        },
        {
          id: "Minions",
          title: "I want to play minions now that they have cooled off a bit"
        },
        {
          id: "Melee",
          title: "I still believe in melee"
        },
        {
          id: "Spells",
          title: "I wanna cast a spell!"
        }
      ]
    },
    {
      id: "Bows",
      title: "What kind?",
      paths: [
        {
          id: "PoisonScourgeArrowPathfinder",
          title: "I didn't get to play cold stacking SA before the nerfs"
        },
        {
          id: "ClassicBows",
          title: "A tried and true bow build"
        },
        {
          id: "ModernBows",
          title: "I want to try the new stuff"
        }
      ]
    },
    {
      id: "PoisonScourgeArrowPathfinder",
      title: "Poison Scourge Arrow Pathfinder",
    },
    {
      id: "ClassicBows",
      title: "Medium or long range?",
      paths: [
        {
          id: "ToxicRainTrickster",
          title: "Medium"
        },
        {
          id: "IceShotDeadeye",
          title: "Long"
        }
      ]
    },
    {
      id: "ToxicRainTrickster",
      title: "Toxic Rain Trickster",
    },
    {
      id: "IceShotDeadeye",
      title: "Ice Shot Deadeye",
    },
    {
      id: "ModernBows",
      title: "Single target or AoE clear?",
      paths: [
        {
          id: "ExplosiveArrowRaider",
          title: "Single target"
        },
        {
          id: "GalvanicArrowDeadeye",
          title: "AoE"
        }
      ]
    },
    {
      id: "ExplosiveArrowRaider",
      title: "Explosive Arrow Raider"
    },
    {
      id: "GalvanicArrowDeadeye",
      title: "Galvanic Arrow Deadeye"
    },
    {
      id: "Minions",
      title: "Just straight minions or do you want to fight alongside them?",
      paths: [
        {
          id: "FrontlineSummoner",
          title: "I want to be on the front lines"
        },
        {
          id: "ClassicSummoner",
          title: "just minions please"
        }
      ]
    },
    {
      id: "FrontlineSummoner",
      title: "Up close assault or verbal assault?",
      paths: [
        {
          id: "GolemBuffStackingElementalist",
          title: "Spells"
        },
        {
          id: "DominatingBlowGuardian",
          title: "Melee"
        }
      ]
    },
    {
      id: "GolemBuffStackingElementalist",
      title: "Golem Buff Stacking Elementalist",
      subtitle: "You can use this with most elemental spells or even attacks"
    },
    {
      id: "DominatingBlowGuardian",
      title: "Dominating Blow Guardian"
    },
    {
      id: "ClassicSummoner",
      title: "Do you like constantly summoning or just sitting back and letting the minions do their thing?",
      paths: [
        {
          id: "SummonSkeletonNecromancer",
          title: "Summoning"
        },
        {
          id: "GenericNecromancer",
          title: "sips tea in background"
        }
      ]
    },
    {
      id: "SummonSkeletonNecromancer",
      title: "Summon Skeleton Necromancer"
    },
    {
      id: "GenericNecromancer",
      title: "Generic Necromancer",
      subtitle: "4+ spectres, 10+ zombies, 1+ golems, 10+ wraiths, 14+ animated weapons, pick 2 of those"
    },
    {
      id: "Melee",
      title: "Me too bro! But what glorious aspect of melee brought you here today?",
      paths: [
        {
          id: "TectonicSlamJuggernaut",
          title: "Being a totally unstoppable badass"
        },
        {
          id: "UpcloseAndPersonal",
          title: "Getting up close and personal"
        },
        {
          id: "AnimeZippingShit",
          title: "Zipping around doing anime shit"
        }
      ]
    },
    {
      id: "TectonicSlamJuggernaut",
      title: "Tectonic Slam Juggernaut",
      subtitle: "Nuff said"
    },
    {
      id: "UpcloseAndPersonal",
      title: "Do you want to be in the thick of battle, or squaring off against a single, tough opponent?",
      paths: [
        {
          id: "CycloneSlayer",
          title: "Killing hordes"
        },
        {
          id: "DoubleStrikeBerserker",
          title: "Single kombat"
        }
      ]
    },
    {
      id: "CycloneSlayer",
      title: "Cyclone Slayer"
    },
    {
      id: "DoubleStrikeBerserker",
      title: "Double Strike Berserker"
    },
    {
      id: "AnimeZippingShit",
      title: "Wind sword or teleportation?",
      paths: [
        {
          id: "LacerateGladiator",
          title: "HASAGI"
        },
        {
          id: "FlickerStrikeRaider",
          title: "pssh, nothing personal kid"
        },
      ]
    },
    {
      id: "LacerateGladiator",
      title: "Lacerate Gladiator",
      subtitle: "ARA ARA ARA ARA ARA ARA ARA ARA ARA!!!"
    },
    {
      id: "FlickerStrikeRaider",
      title: "Flicker Strike Raider",
      subtitle: "You're already dead."
    },
    {
      id: "Spells",
      title: "What kind of caster are you?",
      paths: [
        {
          id: "MagicMissile",
          title: "I wanna cast Magic Missile!"
        },
        {
          id: "MassMurderCaster",
          title: "I don't care, as long as it kills things"
        },
        {
          id: "Demolitionist",
          title: "Let's blow some shit up"
        },
      ]
    },
    {
      id: "MagicMissile",
      title: "Umm... will ice missles work? and is it ok if you don't technically shoot them?",
      paths: [
        {
          id: "IceSpearMinesSaboteur",
          title: "Sure"
        },
      ]
    },
    {
      id: "IceSpearMinesSaboteur",
      title: "Ice Spear Mines Saboteur"
    },
    {
      id: "MassMurderCaster",
      title: "Do you have to cast it yourself?",
      paths: [
        {
          id: "PsychopathMassMurderCaster",
          title: "Yes"
        },
        {
          id: "CrazyMassMurderCaster",
          title: "Again, doesn't matter as long as it kills things"
        },
      ]
    },
    {
      id: "CrazyMassMurderCaster",
      title: "Giant fuck-off laser or a bunch of shards of ice?",
      paths: [
        {
          id: "DivineIreTotemHierophant",
          title: "Lazer, duh"
        },
        {
          id: "GlacialCascadeMineSaboteur",
          title: "Ice sounds cool"
        },
      ]
    },
    {
      id: "DivineIreTotemHierophant",
      title: "Divine Ire Totem Hierophant"
    },
    {
      id: "GlacialCascadeMineSaboteur",
      title: "Glacial Cascade Mine Saboteur"
    },
    {
      id: "PsychopathMassMurderCaster",
      title: "Does it sound cool to kill things with lightning o dark energy?",
      paths: [
        {
          id: "ArcElementalist",
          title: "Lightning"
        },
        {
          id: "EssenceDrainCotagionTrickster",
          title: "Dark energy"
        },
      ]
    },
    {
      id: "ArcElementalist",
      title: "Arc Elementalist"
    },
    {
      id: "EssenceDrainCotagionTrickster",
      title: "Essence Drain Cotagion Trickster"
    },
    {
      id: "Demolitionist",
      title: "What kind of explosions?",
      paths: [
        {
          id: "IceNovaFrostboltInquisitor",
          title: "Icy"
        },
        {
          id: "PyroclasmMinesSaboteur",
          title: "Explosive explosions"
        },
        {
          id: "FireballIgniteTrickster",
          title: "Let it burn!!"
        },
      ]
    },
    {
      id: "IceNovaFrostboltInquisitor",
      title: "Ice Nova Frostbolt Inquisitor"
    },
    {
      id: "PyroclasmMinesSaboteur",
      title: "Pyroclasm Mines Saboteur"
    },
    {
      id: "FireballIgniteTrickster",
      title: "Fireball Ignite Trickster"
    },
  ]
};
