// const ninjas = JSON.parse(`[
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 43,
//       "Nin": 15,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 6.3,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "iron-claw",
//       "lightning-body-flicker",
//       "lariat",
//       "cloak-of-lightning"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 457,
//     "Identifier": "a-fn-jounin",
//     "NinjaName": "a"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 7,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 95,
//       "Nin": 40,
//       "Buki": 20,
//       "Sta": 40,
//       "Ele": 40,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 7.5,
//       "Nin": 2.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "iron-claw",
//       "lightning-body-flicker",
//       "lariat",
//       "cloak-of-lightning"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 507,
//     "Identifier": "a-fn-kage",
//     "NinjaName": "a"
//   },
//   {
//     "Chakra": 60,
//     "Position": 3,
//     "Seal": 8,
//     "Value": 1300,
//     "Stats": {
//       "Tai": 90,
//       "Nin": 30,
//       "Buki": 30,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 2,
//       "Buki": 0.7,
//       "Sta": 2,
//       "Ele": 2.1,
//       "Gen": 2
//     },
//     "Ability": [
//       "iron-claw",
//       "lightning-body-flicker",
//       "lariat",
//       "cloak-of-lightning"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 90,
//     "Identifier": "a-kage",
//     "Combos": [
//       61
//     ],
//     "NinjaName": "a"
//   },
//   {
//     "Chakra": 8,
//     "Position": 2,
//     "Seal": 1,
//     "Value": 200,
//     "Stats": {
//       "Tai": 27,
//       "Nin": 15,
//       "Buki": 8,
//       "Sta": 29,
//       "Ele": 23,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1.2,
//       "Buki": 0.7,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "rock-clone",
//       "moving-earth-core",
//       "fist-rock",
//       "earth-servant"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "akatsuchi-jounin",
//     "FixedChakra": true,
//     "NinjaID": 294,
//     "Identifier": "akatsuchi-evolved-jounin",
//     "Combos": [
//       8
//     ],
//     "NinjaName": "akatsuchi"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": 1,
//     "Value": 180,
//     "Stats": {
//       "Tai": 27,
//       "Nin": 15,
//       "Buki": 8,
//       "Sta": 24,
//       "Ele": 18,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.2,
//       "Buki": 0.7,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 1
//     },
//     "Ability": [
//       "rock-clone",
//       "moving-earth-core",
//       "fist-rock",
//       "earth-servant"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 1,
//       "Teacher": "kokuo-young-summon"
//     },
//     "Evolve": "akatsuchi-evolved-jounin",
//     "NinjaID": 128,
//     "Identifier": "akatsuchi-jounin",
//     "Combos": [
//       8
//     ],
//     "NinjaName": "akatsuchi"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -8,
//     "Value": 50,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 15,
//       "Buki": 4,
//       "Sta": 5,
//       "Ele": 20,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 0.5,
//       "Ele": 0.5,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 170,
//     "Identifier": "amaru-genin",
//     "Combos": [
//       28
//     ],
//     "NinjaName": "amaru"
//   },
//   {
//     "Chakra": 42,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 900,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 50,
//       "Buki": 40,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.5,
//       "Buki": 3,
//       "Sta": 1.8,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "lightning-gate"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 349,
//     "Identifier": "ameyuri-edo-jounin",
//     "NinjaName": "ameyuri"
//   },
//   {
//     "Chakra": 32,
//     "Position": 3,
//     "Seal": -6,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 70,
//       "Buki": 50,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.5,
//       "Buki": 3,
//       "Sta": 1.8,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "lightning-gate"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 342,
//     "Identifier": "ameyuri-kage",
//     "NinjaName": "ameyuri"
//   },
//   {
//     "Chakra": 30,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 400,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 10,
//       "Buki": 40,
//       "Sta": 22,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 0.5,
//       "Buki": 4.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "shadow-snakes",
//       "twin-snake-sacrifice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 433,
//     "Identifier": "anko-anbu-genin",
//     "NinjaName": "anko"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 9,
//       "Nin": 2,
//       "Buki": 12,
//       "Sta": 35,
//       "Ele": 15,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 0.5,
//       "Buki": 4,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "shadow-snakes",
//       "twin-snake-sacrifice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 432,
//     "Identifier": "anko-fn-genin",
//     "NinjaName": "anko"
//   },
//   {
//     "Chakra": 16,
//     "Position": 2,
//     "Seal": 1,
//     "Value": 200,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 10,
//       "Buki": 30,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1,
//       "Buki": 3.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "shadow-snakes",
//       "twin-snake-sacrifice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 52,
//     "Identifier": "anko-jounin",
//     "Combos": [
//       40
//     ],
//     "NinjaName": "anko"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 26,
//       "Buki": 10,
//       "Sta": 17,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2.8,
//       "Buki": 1.2,
//       "Sta": 1.7,
//       "Ele": 1.3,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "Teacher": true,
//     "NinjaID": 113,
//     "Identifier": "ao-jounin",
//     "Combos": [
//       41
//     ],
//     "NinjaName": "ao"
//   },
//   {
//     "Summon": true,
//     "Chakra": 44,
//     "Position": 4,
//     "Seal": false,
//     "Value": 900,
//     "Stats": {
//       "Nin": 3,
//       "Reroll": 5,
//       "FocusRange": 10
//     },
//     "Growth": {
//       "Nin": 3,
//       "Reroll": 5,
//       "FocusRange": 2
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnEnter": 1
//             },
//             "Stats": {
//               "Gen": 50
//             },
//             "Overcharge": 0.3
//           }
//         ],
//         "ID": 529,
//         "Identifier": "ryuichis-energy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 213,
//     "Identifier": "aoda-summon",
//     "NinjaName": "aoda"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 15,
//       "Buki": 35,
//       "Sta": 19,
//       "Ele": 18,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 3,
//       "Sta": 1.9,
//       "Ele": 2,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 164,
//     "Identifier": "aoi-jounin",
//     "NinjaName": "aoi"
//   },
//   {
//     "Chakra": 50,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 500,
//     "Stats": {
//       "Tai": 55,
//       "Nin": 15,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1.5,
//       "Buki": 2.5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "dust-cloud",
//       "ash-pile-burning",
//       "flying-swallow",
//       "thousand-armed-murder"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 487,
//     "Identifier": "asuma-blade-jounin",
//     "NinjaName": "asuma"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 12,
//       "Buki": 20,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1,
//       "Buki": 2.2,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "dust-cloud",
//       "ash-pile-burning",
//       "flying-swallow",
//       "thousand-armed-murder"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 99,
//     "Identifier": "asuma-jounin",
//     "NinjaName": "asuma"
//   },
//   {
//     "Chakra": 60,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 600,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 30,
//       "Buki": 30,
//       "Sta": 40,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 2,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ancient-chakra",
//       "wind-wall",
//       "six-paths-avatar",
//       "buddhas-enlightenment"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 401,
//     "Identifier": "asura-battle-jounin",
//     "NinjaName": "asura"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 50,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 14,
//       "Buki": 15,
//       "Sta": 10,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 162,
//     "Identifier": "baiu-genin",
//     "Combos": [
//       42
//     ],
//     "NinjaName": "baiu"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 15,
//       "Buki": 30,
//       "Sta": 20,
//       "Ele": 16,
//       "Gen": 14
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 1.5,
//       "Buki": 3.3,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 22,
//     "Identifier": "baki-jounin",
//     "Combos": [
//       5
//     ],
//     "NinjaName": "baki"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 340,
//     "Stats": {
//       "Tai": 0,
//       "Ele": 15
//     },
//     "Growth": {
//       "Tai": 4,
//       "Ele": 2
//     },
//     "NinjaID": 198,
//     "Identifier": "baku-summon",
//     "NinjaName": "baku"
//   },
//   {
//     "Chakra": 96,
//     "Position": 3,
//     "Seal": -8,
//     "Value": 2100,
//     "Stats": {
//       "Tai": 105,
//       "Nin": 30,
//       "Buki": 90,
//       "Sta": 40,
//       "Ele": 30,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 1.5,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 268,
//     "Identifier": "black-zetsu-obito-kage",
//     "NinjaName": "black-zetsu"
//   },
//   {
//     "Chakra": 38,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 400,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 40,
//       "Buki": 40,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.8,
//       "Nin": 3,
//       "Buki": 2.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 180,
//     "Identifier": "blue-b-jounin",
//     "Combos": [
//       62
//     ],
//     "NinjaName": "blue-b"
//   },
//   {
//     "Chakra": 50,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 50,
//       "Buki": 95,
//       "Sta": 40,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 6,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "tailed-beast-bomb",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 467,
//     "Identifier": "blue-b-tailed-kage",
//     "NinjaName": "blue-b"
//   },
//   {
//     "Chakra": 24,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 600,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 20,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.5,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 373,
//     "Identifier": "byakuren-kage",
//     "NinjaName": "byakuren"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 160,
//     "Stats": {
//       "Tai": 11,
//       "Nin": 35,
//       "Buki": 5,
//       "Sta": 15,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 1.7,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "skilled-bodyguard",
//       "adept-medic",
//       "adept-sensor",
//       "flash-pillar"
//     ],
//     "NinjaID": 89,
//     "Identifier": "c-jounin",
//     "NinjaName": "c"
//   },
//   {
//     "Summon": true,
//     "Chakra": 32,
//     "Position": 4,
//     "Seal": false,
//     "Value": 400,
//     "Stats": {
//       "Buki": 15,
//       "BukiBoost": 10,
//       "Ele": 6
//     },
//     "Growth": {
//       "Buki": 3,
//       "BukiBoost": 0,
//       "Ele": 2
//     },
//     "NinjaID": 182,
//     "Identifier": "chimera-summon",
//     "NinjaName": "chimera"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 22,
//       "Buki": 45,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3.5,
//       "Buki": 6,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "chakra-threads",
//       "human-puppet",
//       "uematsu-ten-puppets",
//       "life-reincarnation"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 456,
//     "Identifier": "chiyo-fn-jounin",
//     "NinjaName": "chiyo"
//   },
//   {
//     "Chakra": 46,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1050,
//     "Stats": {
//       "Tai": 9,
//       "Nin": 70,
//       "Buki": 75,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3.2,
//       "Buki": 5,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-threads",
//       "human-puppet",
//       "uematsu-ten-puppets",
//       "life-reincarnation"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 108,
//     "Identifier": "chiyo-kage",
//     "NinjaName": "chiyo"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 350,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 12,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "partial-multi-size",
//       "multi-size",
//       "human-tank",
//       "butterfly-mode"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 62,
//     "Identifier": "choji-chunin-genin",
//     "Combos": [
//       47
//     ],
//     "NinjaName": "choji"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 6,
//       "Buki": 4,
//       "Sta": 27,
//       "Ele": 16,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 2.2,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "partial-multi-size",
//       "multi-size",
//       "human-tank",
//       "butterfly-mode"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "choji-genin",
//     "FixedChakra": true,
//     "NinjaID": 282,
//     "Identifier": "choji-evolved-genin",
//     "Combos": [
//       18,
//       15
//     ],
//     "NinjaName": "choji"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 4,
//       "Buki": 4,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.7,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "partial-multi-size",
//       "multi-size",
//       "human-tank",
//       "butterfly-mode"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 430,
//     "Identifier": "choji-fn-genin",
//     "NinjaName": "choji"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 50,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 6,
//       "Buki": 4,
//       "Sta": 17,
//       "Ele": 6,
//       "Gen": 8
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 1.7,
//       "Ele": 0.5,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "partial-multi-size",
//       "multi-size",
//       "human-tank",
//       "butterfly-mode"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "asuma-jounin"
//     },
//     "Evolve": "choji-evolved-genin",
//     "NinjaID": 137,
//     "Identifier": "choji-genin",
//     "Combos": [
//       18,
//       15
//     ],
//     "NinjaName": "choji"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 8,
//     "Value": 200,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 5,
//       "Buki": 18,
//       "Sta": 28,
//       "Ele": 25,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 0.5,
//       "Buki": 3.5,
//       "Sta": 2.3,
//       "Ele": 1.6,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "great-twin-blades"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "chojuro-genin",
//     "FixedChakra": true,
//     "NinjaID": 290,
//     "Identifier": "chojuro-evolved-genin",
//     "NinjaName": "chojuro"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 8,
//     "Value": 70,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 5,
//       "Buki": 18,
//       "Sta": 18,
//       "Ele": 15,
//       "Gen": 8
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 0.5,
//       "Buki": 2.5,
//       "Sta": 1.8,
//       "Ele": 1.1,
//       "Gen": 1
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "great-twin-blades"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "ao-jounin"
//     },
//     "Evolve": "chojuro-evolved-genin",
//     "NinjaID": 112,
//     "Identifier": "chojuro-genin",
//     "NinjaName": "chojuro"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "Reroll": 0,
//       "FocusBurst": 0
//     },
//     "Growth": {
//       "Reroll": 1.1,
//       "FocusBurst": 0.5
//     },
//     "FixedChakra": true,
//     "NinjaID": 497,
//     "Identifier": "chomei-fn-summon",
//     "NinjaName": "chomei"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 550,
//     "Stats": {
//       "Nin": 2,
//       "Reroll": 40,
//       "FocusBurst": 25
//     },
//     "Growth": {
//       "Nin": 2,
//       "Reroll": 1,
//       "FocusBurst": 1
//     },
//     "NinjaID": 190,
//     "Identifier": "chomei-summon",
//     "Combos": [
//       71
//     ],
//     "NinjaName": "chomei"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 170,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 6,
//       "Buki": 7,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3.7,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "partial-multi-size",
//       "multi-size",
//       "human-tank",
//       "super-multi-size"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 100,
//     "Identifier": "choza-jounin",
//     "Combos": [
//       18,
//       15
//     ],
//     "NinjaName": "choza"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 10,
//       "Buki": 25,
//       "Sta": 20,
//       "Ele": 18,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1.5,
//       "Buki": 2.5,
//       "Sta": 2,
//       "Ele": 1.8,
//       "Gen": 2.3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 116,
//     "Identifier": "chukichi-jounin",
//     "Combos": [
//       41
//     ],
//     "NinjaName": "chukichi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 20,
//     "Position": 4,
//     "Seal": false,
//     "Value": 270,
//     "Stats": {
//       "Tai": 10,
//       "CritChance": 25
//     },
//     "Growth": {
//       "Tai": 2,
//       "CritChance": 0
//     },
//     "NinjaID": 199,
//     "Identifier": "conch-king-summon",
//     "NinjaName": "conch-king"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 700,
//     "Stats": {
//       "Reroll": 3,
//       "Gen": 10,
//       "GenProc": 10
//     },
//     "Growth": {
//       "Reroll": 3,
//       "Gen": 2,
//       "GenProc": 2
//     },
//     "Genjutsu": [
//       {
//         "Power": 5,
//         "Cost": 30,
//         "Effects": [
//           {
//             "Proc": 30,
//             "Conditions": {
//               "OnAfterAttack": 1
//             },
//             "Stats": {
//               "Tai": 10
//             }
//           }
//         ],
//         "ID": 442,
//         "Identifier": "movement-copy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 196,
//     "Identifier": "crow-genjutsu-summon",
//     "NinjaName": "crow"
//   },
//   {
//     "Summon": true,
//     "Chakra": 12,
//     "Position": 4,
//     "Seal": false,
//     "Value": 160,
//     "Stats": {
//       "Gen": 20,
//       "Reroll": 15
//     },
//     "Growth": {
//       "Gen": 2,
//       "Reroll": 1
//     },
//     "Genjutsu": [
//       {
//         "Power": 5,
//         "Cost": 30,
//         "Effects": [
//           {
//             "Proc": 30,
//             "Conditions": {
//               "OnAfterAttack": 1
//             },
//             "Stats": {
//               "Tai": 10
//             }
//           }
//         ],
//         "ID": 442,
//         "Identifier": "movement-copy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 195,
//     "Identifier": "crow-summon",
//     "NinjaName": "crow"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 350,
//     "Stats": {
//       "Nin": 0,
//       "Ele": 15
//     },
//     "Growth": {
//       "Nin": 4,
//       "Ele": 2
//     },
//     "NinjaID": 222,
//     "Identifier": "crystal-dragon-summon",
//     "Combos": [
//       63
//     ],
//     "NinjaName": "crystal-dragon"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 33,
//       "Buki": 18,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.5,
//       "Buki": 2.3,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "self-cursing-seal",
//       "vacuum-blade",
//       "vacuum-sphere",
//       "izanagi"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 452,
//     "Identifier": "danzo-fn-jounin",
//     "NinjaName": "danzo"
//   },
//   {
//     "Chakra": 54,
//     "Position": 3,
//     "Seal": 7,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 65,
//       "Buki": 40,
//       "Sta": 35,
//       "Ele": 34,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4.5,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "self-cursing-seal",
//       "vacuum-blade",
//       "vacuum-sphere",
//       "izanagi"
//     ],
//     "NinjaID": 94,
//     "Identifier": "danzo-kage",
//     "NinjaName": "danzo"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 65,
//       "Buki": 85,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4,
//       "Buki": 6.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "emotion-wave",
//       "black-lightning",
//       "laser-circus",
//       "black-panther"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 509,
//     "Identifier": "darui-fn-kage",
//     "NinjaName": "darui"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 18,
//       "Buki": 22,
//       "Sta": 22,
//       "Ele": 20,
//       "Gen": 12
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 2.5,
//       "Buki": 3,
//       "Sta": 1.9,
//       "Ele": 2,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "emotion-wave",
//       "black-lightning",
//       "laser-circus",
//       "black-panther"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 33,
//     "Identifier": "darui-jounin",
//     "NinjaName": "darui"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 35,
//       "Buki": 15,
//       "Sta": 25,
//       "Ele": 35,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 6.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "explosive-clay",
//       "explosive-dolls",
//       "clay-clone",
//       "c-0"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 361,
//     "Identifier": "deidara-fn-jounin",
//     "NinjaName": "deidara"
//   },
//   {
//     "Chakra": 42,
//     "Position": 2,
//     "Seal": -7,
//     "Value": 450,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 66,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 0.7,
//       "Nin": 5.7,
//       "Buki": 1,
//       "Sta": 1.6,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "explosive-clay",
//       "explosive-dolls",
//       "clay-clone",
//       "c-0"
//     ],
//     "NinjaID": 77,
//     "Identifier": "deidara-jounin",
//     "Combos": [
//       60,
//       53
//     ],
//     "NinjaName": "deidara"
//   },
//   {
//     "Chakra": 58,
//     "Position": 3,
//     "Seal": -6,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 130,
//       "Buki": 30,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.5,
//       "Buki": 2,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "explosive-clay",
//       "explosive-dolls",
//       "clay-clone",
//       "c-0"
//     ],
//     "NinjaID": 260,
//     "Identifier": "deidara-kage",
//     "Combos": [
//       53
//     ],
//     "NinjaName": "deidara"
//   },
//   {
//     "Summon": true,
//     "Chakra": 26,
//     "Position": 4,
//     "Seal": false,
//     "Value": 480,
//     "Stats": {
//       "Buki": 10,
//       "Sta": 10,
//       "FatigueRec": 7
//     },
//     "Growth": {
//       "Buki": 3,
//       "Sta": 3,
//       "FatigueRec": 0
//     },
//     "NinjaID": 203,
//     "Identifier": "demonic-statue-summon",
//     "NinjaName": "demonic-statue"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 10,
//       "Buki": 4,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3.7,
//       "Nin": 1.2,
//       "Buki": 0.5,
//       "Sta": 1.8,
//       "Ele": 1,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "denka-genin",
//     "FixedChakra": true,
//     "NinjaID": 310,
//     "Identifier": "denka-evolved-genin",
//     "Combos": [
//       30
//     ],
//     "NinjaName": "denka"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 50,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 10,
//       "Buki": 4,
//       "Sta": 15,
//       "Ele": 5,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1.2,
//       "Buki": 0.5,
//       "Sta": 1.3,
//       "Ele": 0.5,
//       "Gen": 1.2
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "futo-jounin"
//     },
//     "Evolve": "denka-evolved-genin",
//     "NinjaID": 172,
//     "Identifier": "denka-genin",
//     "Combos": [
//       30
//     ],
//     "NinjaName": "denka"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 10,
//       "Buki": 13,
//       "Sta": 25,
//       "Ele": 24,
//       "Gen": 24
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3.2,
//       "Buki": 0.2,
//       "Sta": 2,
//       "Ele": 1.9,
//       "Gen": 2.9
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "sound-manipulation",
//       "vibrating-echo-drill"
//     ],
//     "Evolved": "dosu-genin",
//     "FixedChakra": true,
//     "NinjaID": 295,
//     "Identifier": "dosu-evolved-genin",
//     "Combos": [
//       25
//     ],
//     "NinjaName": "dosu"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 60,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 10,
//       "Buki": 13,
//       "Sta": 15,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2.5,
//       "Buki": 0.2,
//       "Sta": 1.5,
//       "Ele": 1.4,
//       "Gen": 1.4
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "sound-manipulation",
//       "vibrating-echo-drill"
//     ],
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "kabuto-jounin"
//     },
//     "Evolve": "dosu-evolved-genin",
//     "NinjaID": 125,
//     "Identifier": "dosu-genin",
//     "Combos": [
//       25
//     ],
//     "NinjaName": "dosu"
//   },
//   {
//     "Summon": true,
//     "Chakra": 20,
//     "Position": 4,
//     "Seal": false,
//     "Value": 300,
//     "Stats": {
//       "Nin": 6,
//       "FireDmg": 10
//     },
//     "Growth": {
//       "Nin": 3,
//       "FireDmg": 2
//     },
//     "NinjaID": 219,
//     "Identifier": "dragon-flamelings-summon",
//     "NinjaName": "dragon-flamelings"
//   },
//   {
//     "Chakra": 44,
//     "Position": 3,
//     "Seal": 2,
//     "Value": 850,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 35,
//       "Buki": 80,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1.5,
//       "Buki": 5.3,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "chakra-threads",
//       "human-puppet",
//       "uematsu-ten-puppets",
//       "life-reincarnation"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 109,
//     "Identifier": "ebizo-kage",
//     "NinjaName": "ebizo"
//   },
//   {
//     "Summon": true,
//     "Chakra": 20,
//     "Position": 4,
//     "Seal": false,
//     "Value": 300,
//     "Stats": {
//       "Buki": 6,
//       "BukiRec": 25
//     },
//     "Growth": {
//       "Buki": 3,
//       "BukiRec": 1
//     },
//     "NinjaID": 200,
//     "Identifier": "enma-summon",
//     "NinjaName": "enma"
//   },
//   {
//     "Summon": true,
//     "Chakra": 46,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1000,
//     "Stats": {
//       "Reroll": 15,
//       "End": 10
//     },
//     "Growth": {
//       "Reroll": 7,
//       "End": 2
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnEnter": 1
//             },
//             "Stats": {
//               "Gen": 50
//             },
//             "Overcharge": 0.3
//           }
//         ],
//         "ID": 529,
//         "Identifier": "ryuichis-energy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 356,
//     "Identifier": "experimental-snake-summon",
//     "NinjaName": "experimental-snake"
//   },
//   {
//     "Summon": true,
//     "Chakra": 28,
//     "Position": 4,
//     "Seal": false,
//     "Value": 500,
//     "Stats": {
//       "Buki": 10,
//       "BukiBoost": 1,
//       "BukiRec": 3
//     },
//     "Growth": {
//       "Buki": 4,
//       "BukiBoost": 0.5,
//       "BukiRec": 1
//     },
//     "NinjaID": 369,
//     "Identifier": "father-puppet-summon",
//     "NinjaName": "father-puppet"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 3,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 13,
//       "Buki": 7,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.7,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-puppet-switch"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 444,
//     "Identifier": "fu-fn-genin",
//     "NinjaName": "fu"
//   },
//   {
//     "Chakra": 34,
//     "Position": 2,
//     "Seal": 9,
//     "Value": 400,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 40,
//       "Buki": 25,
//       "Sta": 20,
//       "Ele": 25,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3.5,
//       "Buki": 2,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-puppet-switch"
//     ],
//     "NinjaID": 51,
//     "Identifier": "fu-jounin",
//     "NinjaName": "fu"
//   },
//   {
//     "Chakra": 44,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 900,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 15,
//       "Buki": 35,
//       "Sta": 45,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 0.5,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "shark-skin"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 351,
//     "Identifier": "fuguki-edo-jounin",
//     "NinjaName": "fuguki"
//   },
//   {
//     "Chakra": 34,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 20,
//       "Buki": 50,
//       "Sta": 45,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "shark-skin"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 344,
//     "Identifier": "fuguki-kage",
//     "NinjaName": "fuguki"
//   },
//   {
//     "Summon": true,
//     "Chakra": 50,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 12,
//       "End": 2
//     },
//     "Growth": {
//       "Tai": 6,
//       "End": 2
//     },
//     "NinjaID": 207,
//     "Identifier": "fukasaku-summon",
//     "NinjaName": "fukasaku"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 160,
//     "Stats": {
//       "Tai": 33,
//       "Nin": 10,
//       "Buki": 10,
//       "Sta": 23,
//       "Ele": 12,
//       "Gen": 12
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 2.1,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 174,
//     "Identifier": "futo-jounin",
//     "Combos": [
//       31
//     ],
//     "NinjaName": "futo"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -7,
//     "Value": 500,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 26,
//       "Buki": 10,
//       "Sta": 23,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.6,
//       "Nin": 5,
//       "Buki": 0.6,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "bug-bite",
//       "cocoon",
//       "scale-powder",
//       "shichibis-jinchuriki"
//     ],
//     "NinjaID": 481,
//     "Identifier": "fuu-jinchuriki-genin",
//     "NinjaName": "fuu"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": -7,
//     "Value": 350,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 45,
//       "Buki": 12,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "bug-bite",
//       "cocoon",
//       "scale-powder",
//       "shichibis-jinchuriki"
//     ],
//     "NinjaID": 82,
//     "Identifier": "fuu-jounin",
//     "Combos": [
//       71
//     ],
//     "NinjaName": "fuu"
//   },
//   {
//     "Chakra": 52,
//     "Position": 3,
//     "Seal": -7,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 110,
//       "Buki": 10,
//       "Sta": 40,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 6,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "bug-bite",
//       "cocoon",
//       "scale-powder",
//       "tailed-beast-bomb",
//       "shichibis-jinchuriki"
//     ],
//     "NinjaID": 473,
//     "Identifier": "fuu-tailed-kage",
//     "NinjaName": "fuu"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": -9,
//     "Value": 240,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 28,
//       "Buki": 3,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2.7,
//       "Buki": 0.3,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "NinjaID": 314,
//     "Identifier": "gaara-1t-jounin",
//     "Combos": [
//       65
//     ],
//     "NinjaName": "gaara"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 350,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 20,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1,
//       "Gen": 3
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "NinjaID": 66,
//     "Identifier": "gaara-chunin-genin",
//     "Combos": [
//       65
//     ],
//     "NinjaName": "gaara"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 28,
//       "Buki": 6,
//       "Sta": 24,
//       "Ele": 22,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.6,
//       "Nin": 4.5,
//       "Buki": 0.3,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "Evolved": "gaara-genin",
//     "FixedChakra": true,
//     "NinjaID": 283,
//     "Identifier": "gaara-evolved-genin",
//     "Combos": [
//       65,
//       4
//     ],
//     "NinjaName": "gaara"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 17,
//       "Buki": 3,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 5.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 234,
//     "Identifier": "gaara-fn-genin",
//     "NinjaName": "gaara"
//   },
//   {
//     "Chakra": 16,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 80,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 28,
//       "Buki": 6,
//       "Sta": 14,
//       "Ele": 12,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.6,
//       "Nin": 3.7,
//       "Buki": 0.3,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "Starter": {
//       "StatPoints": 12,
//       "Teacher": "yashamaru-jounin"
//     },
//     "Evolve": "gaara-evolved-genin",
//     "NinjaID": 19,
//     "Identifier": "gaara-genin",
//     "Combos": [
//       65,
//       4
//     ],
//     "NinjaName": "gaara"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 500,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 30,
//       "Buki": 5,
//       "Sta": 19,
//       "Ele": 23,
//       "Gen": 19
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 5.2,
//       "Buki": 0.5,
//       "Sta": 2.1,
//       "Ele": 2.2,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "NinjaID": 475,
//     "Identifier": "gaara-jinchuriki-genin",
//     "NinjaName": "gaara"
//   },
//   {
//     "Chakra": 26,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 500,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 75,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "third-eye",
//       "armor-of-sand",
//       "sand-coffin",
//       "shield-of-shukaku"
//     ],
//     "NinjaID": 9,
//     "Identifier": "gaara-kage",
//     "Combos": [
//       65
//     ],
//     "NinjaName": "gaara"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 600,
//     "Stats": {
//       "Tai": 8,
//       "Sta": 8,
//       "Ele": 8
//     },
//     "Growth": {
//       "Tai": 4,
//       "Sta": 2,
//       "Ele": 1
//     },
//     "NinjaID": 206,
//     "Identifier": "gamabunta-summon",
//     "NinjaName": "gamabunta"
//   },
//   {
//     "Summon": true,
//     "Chakra": 40,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Buki": 5,
//       "BukiBoost": 1,
//       "BukiRec": 0
//     },
//     "Growth": {
//       "Buki": 5,
//       "BukiBoost": 0.5,
//       "BukiRec": 2
//     },
//     "NinjaID": 204,
//     "Identifier": "gamahiro-summon",
//     "NinjaName": "gamahiro"
//   },
//   {
//     "Summon": true,
//     "Chakra": 40,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Atk": 2,
//       "Sta": 2,
//       "End": 1
//     },
//     "Growth": {
//       "Atk": 2,
//       "Sta": 2,
//       "End": 1
//     },
//     "NinjaID": 205,
//     "Identifier": "gamaken-summon",
//     "NinjaName": "gamaken"
//   },
//   {
//     "Summon": true,
//     "Chakra": 4,
//     "Position": 4,
//     "Seal": false,
//     "Value": 30,
//     "Stats": {
//       "Tai": 6
//     },
//     "Growth": {
//       "Tai": 1
//     },
//     "NinjaID": 27,
//     "Identifier": "gamakichi-summon",
//     "NinjaName": "gamakichi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 64,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1300,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 4
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 4
//     },
//     "Genjutsu": [
//       {
//         "Power": 15,
//         "Cost": 50,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "EnterOnly": 1,
//               "Turn": {
//                 "Less": "equal",
//                 "Amount": 1,
//                 "Side": 1
//               }
//             },
//             "Stats": {
//               "Reroll": 70,
//               "CritChance": 30,
//               "BukiBoost": 20
//             },
//             "Temporary": 2,
//             "Overcharge": false
//           }
//         ],
//         "ID": 217,
//         "Identifier": "sages-prophecy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 209,
//     "Identifier": "gamamaru-summon",
//     "NinjaName": "gamamaru"
//   },
//   {
//     "Summon": true,
//     "Chakra": 2,
//     "Position": 4,
//     "Seal": false,
//     "Value": 20,
//     "Stats": {
//       "Nin": 3
//     },
//     "Growth": {
//       "Nin": 1
//     },
//     "NinjaID": 166,
//     "Identifier": "gamatatsu-summon",
//     "NinjaName": "gamatatsu"
//   },
//   {
//     "Chakra": 40,
//     "Position": 2,
//     "Seal": -8,
//     "Value": 420,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 30,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 38,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 2.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "reanimated",
//       "explosive-taijutsu",
//       "exploding-palm",
//       "landmine-fist"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 321,
//     "Identifier": "gari-jounin",
//     "NinjaName": "gari"
//   },
//   {
//     "Summon": true,
//     "Chakra": 40,
//     "Position": 4,
//     "Seal": false,
//     "Value": 900,
//     "Stats": {
//       "Buki": 10,
//       "Gen": 10,
//       "GenProc": 10
//     },
//     "Growth": {
//       "Buki": 5,
//       "Gen": 3,
//       "GenProc": 2
//     },
//     "NinjaID": 371,
//     "Identifier": "gedo-mazo-dormant-summon",
//     "NinjaName": "gedo-mazo"
//   },
//   {
//     "Chakra": 72,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 103,
//       "Buki": 30,
//       "Sta": 40,
//       "Ele": 33,
//       "Gen": 47
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 6,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2.1,
//       "Gen": 4
//     },
//     "Ability": [
//       "reanimated",
//       "mirage-genjutsu",
//       "water-clone",
//       "hydrification-gengetsu"
//     ],
//     "NinjaID": 247,
//     "Identifier": "gengetsu-kage",
//     "NinjaName": "gengetsu"
//   },
//   {
//     "Summon": true,
//     "Chakra": 18,
//     "Position": 4,
//     "Seal": false,
//     "Value": 100,
//     "Stats": {
//       "Tai": 5,
//       "Sta": 10
//     },
//     "Growth": {
//       "Tai": 1,
//       "Sta": 2
//     },
//     "Teacher": true,
//     "NinjaID": 157,
//     "Identifier": "gerotora-summon",
//     "NinjaName": "gerotora"
//   },
//   {
//     "Summon": true,
//     "Chakra": 6,
//     "Position": 4,
//     "Seal": false,
//     "Value": 60,
//     "Stats": {
//       "EarthEle": 20,
//       "Reroll": 10
//     },
//     "Growth": {
//       "EarthEle": 1,
//       "Reroll": 0
//     },
//     "NinjaID": 156,
//     "Identifier": "giant-bee-summon",
//     "Combos": [
//       9
//     ],
//     "NinjaName": "giant-bee"
//   },
//   {
//     "Summon": true,
//     "Chakra": 22,
//     "Position": 4,
//     "Seal": false,
//     "Value": 450,
//     "Stats": {
//       "Buki": 10,
//       "GenMastery": 50
//     },
//     "Growth": {
//       "Buki": 4,
//       "GenMastery": 0
//     },
//     "NinjaID": 225,
//     "Identifier": "giant-centipede-summon",
//     "NinjaName": "giant-centipede"
//   },
//   {
//     "Summon": true,
//     "Chakra": 42,
//     "Position": 4,
//     "Seal": false,
//     "Value": 850,
//     "Stats": {
//       "Nin": 5,
//       "Gen": 2,
//       "GenProc": 10
//     },
//     "Growth": {
//       "Nin": 5,
//       "Gen": 2,
//       "GenProc": 2
//     },
//     "NinjaID": 231,
//     "Identifier": "giant-chameleon-summon",
//     "NinjaName": "giant-chameleon"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 400,
//     "Stats": {
//       "Atk": 10,
//       "ItemFind": 30
//     },
//     "Growth": {
//       "Atk": 1,
//       "ItemFind": 2
//     },
//     "NinjaID": 224,
//     "Identifier": "giant-crustacean-summon",
//     "NinjaName": "giant-crustacean"
//   },
//   {
//     "Summon": true,
//     "Chakra": 48,
//     "Position": 4,
//     "Seal": false,
//     "Value": 900,
//     "Stats": {
//       "Atk": 5,
//       "Tai": 2,
//       "Crit": 1
//     },
//     "Growth": {
//       "Atk": 2,
//       "Tai": 2,
//       "Crit": 1
//     },
//     "NinjaID": 230,
//     "Identifier": "giant-drill-beaked-bird-summon",
//     "NinjaName": "giant-drill-beaked-bird"
//   },
//   {
//     "Summon": true,
//     "Chakra": 10,
//     "Position": 4,
//     "Seal": false,
//     "Value": 180,
//     "Stats": {
//       "FocusBurst": 20,
//       "Reroll": 20
//     },
//     "Growth": {
//       "FocusBurst": 0,
//       "Reroll": 0
//     },
//     "NinjaID": 221,
//     "Identifier": "giant-marlin-summon",
//     "NinjaName": "giant-marlin"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 650,
//     "Stats": {
//       "Tai": 10,
//       "Sta": 1,
//       "End": 10,
//       "BukiBoost": 1
//     },
//     "Growth": {
//       "Tai": 3,
//       "Sta": 1,
//       "End": 1,
//       "BukiBoost": 1
//     },
//     "NinjaID": 229,
//     "Identifier": "giant-multi-headed-dog-summon",
//     "NinjaName": "giant-multi-headed-dog"
//   },
//   {
//     "Summon": true,
//     "Chakra": 30,
//     "Position": 4,
//     "Seal": false,
//     "Value": 600,
//     "Stats": {
//       "Tai": 20,
//       "Sta": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Sta": 1
//     },
//     "NinjaID": 227,
//     "Identifier": "giant-ox-summon",
//     "NinjaName": "giant-ox"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 450,
//     "Stats": {
//       "Buki": 10,
//       "Reroll": 10,
//       "BukiRec": 2
//     },
//     "Growth": {
//       "Buki": 4,
//       "Reroll": 3,
//       "BukiRec": 2
//     },
//     "NinjaID": 226,
//     "Identifier": "giant-panda-summon",
//     "NinjaName": "giant-panda"
//   },
//   {
//     "Summon": true,
//     "Chakra": 40,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Tai": 4,
//       "CritChance": 2,
//       "Reroll": 10
//     },
//     "Growth": {
//       "Tai": 4,
//       "CritChance": 2,
//       "Reroll": 2
//     },
//     "NinjaID": 228,
//     "Identifier": "giant-rhino-summon",
//     "NinjaName": "giant-rhino"
//   },
//   {
//     "Summon": true,
//     "Chakra": 8,
//     "Position": 4,
//     "Seal": false,
//     "Value": 150,
//     "Stats": {
//       "Tai": 6,
//       "Ele": 6
//     },
//     "Growth": {
//       "Tai": 1,
//       "Ele": 2
//     },
//     "NinjaID": 202,
//     "Identifier": "giant-snake-summon",
//     "NinjaName": "giant-snake"
//   },
//   {
//     "Summon": true,
//     "Chakra": 10,
//     "Position": 4,
//     "Seal": false,
//     "Value": 100,
//     "Stats": {
//       "Poison": 20,
//       "EarthDmg": 10
//     },
//     "Growth": {
//       "Poison": 0,
//       "EarthDmg": 1
//     },
//     "NinjaID": 194,
//     "Identifier": "giant-spider-summon",
//     "NinjaName": "giant-spider"
//   },
//   {
//     "Chakra": 54,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 550,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 30,
//       "Buki": 70,
//       "Sta": 45,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.3,
//       "Nin": 2,
//       "Buki": 5.5,
//       "Sta": 2.1,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "tools-mastery",
//       "treasured-tools"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 323,
//     "Identifier": "ginkaku-jounin",
//     "NinjaName": "ginkaku"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 6,
//       "Buki": 12,
//       "Sta": 25,
//       "Ele": 23,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 0.5,
//       "Buki": 4.2,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "water-hiding",
//       "metal-gauntlets",
//       "poison-kusari"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "gozu-genin",
//     "FixedChakra": true,
//     "NinjaID": 291,
//     "Identifier": "gozu-evolved-genin",
//     "Combos": [
//       10
//     ],
//     "NinjaName": "gozu"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 40,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 6,
//       "Buki": 12,
//       "Sta": 15,
//       "Ele": 13,
//       "Gen": 7
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 0.5,
//       "Buki": 3,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "water-hiding",
//       "metal-gauntlets",
//       "poison-kusari"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 28,
//       "Teacher": "chukichi-jounin"
//     },
//     "Evolve": "gozu-evolved-genin",
//     "NinjaID": 115,
//     "Identifier": "gozu-genin",
//     "Combos": [
//       10
//     ],
//     "NinjaName": "gozu"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 12,
//       "Buki": 6,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.3,
//       "Buki": 1.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "crystal-blade",
//       "crystal-clone",
//       "crystal-shuriken",
//       "crystal-prison"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 409,
//     "Identifier": "guren-fn-genin",
//     "NinjaName": "guren"
//   },
//   {
//     "Chakra": 34,
//     "Position": 2,
//     "Seal": -5,
//     "Value": 400,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 50,
//       "Buki": 18,
//       "Sta": 28,
//       "Ele": 32,
//       "Gen": 16
//     },
//     "Growth": {
//       "Tai": 1.2,
//       "Nin": 4.5,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 2.2,
//       "Gen": 2
//     },
//     "Ability": [
//       "crystal-blade",
//       "crystal-clone",
//       "crystal-shuriken",
//       "crystal-prison"
//     ],
//     "NinjaID": 178,
//     "Identifier": "guren-jounin",
//     "Combos": [
//       63
//     ],
//     "NinjaName": "guren"
//   },
//   {
//     "Chakra": 100,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 2000,
//     "Stats": {
//       "Tai": 160,
//       "Nin": 40,
//       "Buki": 20,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 8,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "leaf-great-whirlwind",
//       "dynamic-entry",
//       "daytime-tiger",
//       "night-guy"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 380,
//     "Identifier": "guy-8gates-kage",
//     "NinjaName": "guy"
//   },
//   {
//     "Chakra": 44,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 450,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 5,
//       "Buki": 20,
//       "Sta": 42,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 0.5,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "leaf-great-whirlwind",
//       "dynamic-entry",
//       "daytime-tiger",
//       "evening-elephant"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 419,
//     "Identifier": "guy-crimson-jounin",
//     "Combos": [
//       75
//     ],
//     "NinjaName": "guy"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 2,
//       "Buki": 2,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 5.2,
//       "Nin": 0.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "leaf-great-whirlwind",
//       "dynamic-entry",
//       "daytime-tiger",
//       "night-guy"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 450,
//     "Identifier": "guy-fn-genin",
//     "NinjaName": "guy"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 10,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 6.5,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "leaf-great-whirlwind",
//       "dynamic-entry",
//       "daytime-tiger",
//       "night-guy"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 386,
//     "Identifier": "guy-fn-jounin",
//     "NinjaName": "guy"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 4,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 120,
//       "Nin": 15,
//       "Buki": 15,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 8.5,
//       "Nin": 1,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "leaf-great-whirlwind",
//       "dynamic-entry",
//       "daytime-tiger",
//       "night-guy"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 405,
//     "Identifier": "guy-fn-kage",
//     "NinjaName": "guy"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 8,
//     "Value": 200,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 6,
//       "Buki": 6,
//       "Sta": 24,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 0.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 0.7,
//       "Gen": 1.2
//     },
//     "Ability": [
//       "leaf-great-whirlwind",
//       "dynamic-entry",
//       "daytime-tiger",
//       "evening-elephant"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 92,
//     "Identifier": "guy-jounin",
//     "Combos": [
//       75
//     ],
//     "NinjaName": "guy"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "Crit": 0,
//       "GenAbsorb": 0
//     },
//     "Growth": {
//       "Crit": 0.5,
//       "GenAbsorb": 0.3
//     },
//     "FixedChakra": true,
//     "NinjaID": 498,
//     "Identifier": "gyuki-fn-summon",
//     "NinjaName": "gyuki"
//   },
//   {
//     "Summon": true,
//     "Chakra": 36,
//     "Position": 4,
//     "Seal": false,
//     "Value": 600,
//     "Stats": {
//       "Tai": 10,
//       "Crit": 8
//     },
//     "Growth": {
//       "Tai": 4,
//       "Crit": 2
//     },
//     "NinjaID": 191,
//     "Identifier": "gyuki-summon",
//     "Combos": [
//       72
//     ],
//     "NinjaName": "gyuki"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 450,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 50,
//       "Buki": 30,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 5,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "thousand-ice-needles",
//       "ice-rock-dome",
//       "shattering-ice-spear",
//       "crystal-ice-mirrors"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 398,
//     "Identifier": "haku-chakra-jounin",
//     "NinjaName": "haku"
//   },
//   {
//     "Chakra": 36,
//     "Position": 1,
//     "Seal": -1,
//     "Value": 380,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 40,
//       "Buki": 25,
//       "Sta": 20,
//       "Ele": 35,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4.5,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "thousand-ice-needles",
//       "ice-rock-dome",
//       "shattering-ice-spear",
//       "crystal-ice-mirrors"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 67,
//     "Identifier": "haku-chunin-genin",
//     "Combos": [
//       37
//     ],
//     "NinjaName": "haku"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 14,
//       "Buki": 5,
//       "Sta": 25,
//       "Ele": 45,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "thousand-ice-needles",
//       "ice-rock-dome",
//       "shattering-ice-spear",
//       "crystal-ice-mirrors"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 28,
//     "Identifier": "haku-fn-genin",
//     "NinjaName": "haku"
//   },
//   {
//     "Chakra": 20,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 35,
//       "Buki": 15,
//       "Sta": 20,
//       "Ele": 30,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4.3,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 2.3,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "thousand-ice-needles",
//       "ice-rock-dome",
//       "shattering-ice-spear",
//       "crystal-ice-mirrors"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 72,
//     "Identifier": "haku-genin",
//     "Combos": [
//       37
//     ],
//     "NinjaName": "haku"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 500,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 10,
//       "Buki": 5,
//       "Sta": 25,
//       "Ele": 18,
//       "Gen": 19
//     },
//     "Growth": {
//       "Tai": 4.7,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.8,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "steam-furnace",
//       "boiled-chakra",
//       "steam-enhanced-strength",
//       "gobis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 479,
//     "Identifier": "han-jinchuriki-genin",
//     "NinjaName": "han"
//   },
//   {
//     "Chakra": 32,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 350,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 11,
//       "Buki": 7,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 5.3,
//       "Nin": 0.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "steam-furnace",
//       "boiled-chakra",
//       "steam-enhanced-strength",
//       "gobis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 80,
//     "Identifier": "han-jounin",
//     "Combos": [
//       69
//     ],
//     "NinjaName": "han"
//   },
//   {
//     "Chakra": 70,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 110,
//       "Nin": 50,
//       "Buki": 20,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 6.5,
//       "Nin": 1.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "steam-furnace",
//       "boiled-chakra",
//       "steam-enhanced-strength",
//       "tailed-beast-bomb",
//       "gobis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 471,
//     "Identifier": "han-tailed-kage",
//     "NinjaName": "han"
//   },
//   {
//     "Chakra": 8,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 80,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 15,
//       "Buki": 15,
//       "Sta": 11,
//       "Ele": 7,
//       "Gen": 7
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 1.3,
//       "Ele": 0.7,
//       "Gen": 1.2
//     },
//     "Ability": [
//       "four-legs-technique",
//       "human-beast-clone",
//       "fang-wolf-fang",
//       "two-headed-wolf"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 167,
//     "Identifier": "hana-jounin",
//     "Combos": [
//       20
//     ],
//     "NinjaName": "hana"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 5,
//       "Buki": 8,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "gentle-fist",
//       "body-blow",
//       "vacuum-palm",
//       "eight-trigrams"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 407,
//     "Identifier": "hanabi-fn-genin",
//     "NinjaName": "hanabi"
//   },
//   {
//     "Chakra": 2,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 20,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 5,
//       "Buki": 3,
//       "Sta": 7,
//       "Ele": 5,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 1,
//       "Buki": 0.3,
//       "Sta": 1,
//       "Ele": 0.7,
//       "Gen": 1.1
//     },
//     "Ability": [
//       "gentle-fist",
//       "body-blow",
//       "vacuum-palm",
//       "eight-trigrams"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 165,
//     "Identifier": "hanabi-genin",
//     "Combos": [
//       23,
//       14
//     ],
//     "NinjaName": "hanabi"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 10,
//       "Buki": 40,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1,
//       "Buki": 5.7,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "poisonous-breath",
//       "sickle-dance",
//       "exploding-flames",
//       "summoning-salamander"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 460,
//     "Identifier": "hanzo-fn-jounin",
//     "NinjaName": "hanzo"
//   },
//   {
//     "Chakra": 60,
//     "Position": 3,
//     "Seal": 4,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 55,
//       "Nin": 30,
//       "Buki": 80,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "poisonous-breath",
//       "sickle-dance",
//       "exploding-flames",
//       "summoning-salamander"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 106,
//     "Identifier": "hanzo-kage",
//     "NinjaName": "hanzo"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 9,
//       "Buki": 3,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3.6,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "wood-clone",
//       "wood-expulsion",
//       "deep-forest-creation",
//       "wood-dragon"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 330,
//     "Identifier": "hashirama-fn-genin",
//     "NinjaName": "hashirama"
//   },
//   {
//     "Chakra": 90,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 2000,
//     "Stats": {
//       "Tai": 80,
//       "Nin": 75,
//       "Buki": 40,
//       "Sta": 50,
//       "Ele": 45,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 5.3,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 2.6,
//       "Ele": 2.8,
//       "Gen": 3.8
//     },
//     "Ability": [
//       "wood-clone",
//       "wood-expulsion",
//       "deep-forest-creation",
//       "wood-dragon"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 264,
//     "Identifier": "hashirama-kage",
//     "NinjaName": "hashirama"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 160,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 10,
//       "Buki": 26,
//       "Sta": 17,
//       "Ele": 18,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1,
//       "Buki": 2.5,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 173,
//     "Identifier": "haya-jounin",
//     "Combos": [
//       31
//     ],
//     "NinjaName": "haya"
//   },
//   {
//     "Chakra": 36,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 350,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 17,
//       "Buki": 50,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 1.3,
//       "Buki": 4,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 179,
//     "Identifier": "heiji-jounin",
//     "NinjaName": "heiji"
//   },
//   {
//     "Chakra": 16,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 170,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 20,
//       "Buki": 22,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1.5,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 105,
//     "Identifier": "hiashi-jounin",
//     "Combos": [
//       23
//     ],
//     "NinjaName": "hiashi"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 20,
//       "Buki": 25,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "retractable-spears",
//       "immortality",
//       "triple-bladed-scythe",
//       "jashin-ritual"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 362,
//     "Identifier": "hidan-fn-jounin",
//     "NinjaName": "hidan"
//   },
//   {
//     "Chakra": 42,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 450,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 38,
//       "Buki": 40,
//       "Sta": 43,
//       "Ele": 18,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "retractable-spears",
//       "immortality",
//       "triple-bladed-scythe",
//       "jashin-ritual"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 68,
//     "Identifier": "hidan-jounin",
//     "Combos": [
//       52
//     ],
//     "NinjaName": "hidan"
//   },
//   {
//     "Chakra": 62,
//     "Position": 3,
//     "Seal": 8,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 80,
//       "Nin": 40,
//       "Buki": 60,
//       "Sta": 50,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2.2,
//       "Buki": 4,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "retractable-spears",
//       "immortality",
//       "triple-bladed-scythe",
//       "jashin-ritual"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 257,
//     "Identifier": "hidan-kage",
//     "Combos": [
//       52
//     ],
//     "NinjaName": "hidan"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 15,
//       "Buki": 4,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.2,
//       "Nin": 3.7,
//       "Buki": 0.5,
//       "Sta": 1.8,
//       "Ele": 1,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "Evolved": "hina-genin",
//     "FixedChakra": true,
//     "NinjaID": 311,
//     "Identifier": "hina-evolved-genin",
//     "Combos": [
//       30
//     ],
//     "NinjaName": "hina"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 50,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 15,
//       "Buki": 4,
//       "Sta": 15,
//       "Ele": 5,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1.2,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 1.3,
//       "Ele": 0.5,
//       "Gen": 1.2
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "haya-jounin"
//     },
//     "Evolve": "hina-evolved-genin",
//     "NinjaID": 171,
//     "Identifier": "hina-genin",
//     "Combos": [
//       30
//     ],
//     "NinjaName": "hina"
//   },
//   {
//     "Chakra": 30,
//     "Position": 1,
//     "Seal": 3,
//     "Value": 400,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 20,
//       "Buki": 5,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 399,
//     "Identifier": "hinata-chakra-genin",
//     "NinjaName": "hinata"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 8,
//     "Value": 350,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 20,
//       "Buki": 10,
//       "Sta": 23,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 2.5,
//       "Buki": 0.5,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 58,
//     "Identifier": "hinata-chunin-genin",
//     "Combos": [
//       56
//     ],
//     "NinjaName": "hinata"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 14,
//       "Buki": 3,
//       "Sta": 23,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 1.5,
//       "Buki": 0.4,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "hinata-genin",
//     "FixedChakra": true,
//     "NinjaID": 276,
//     "Identifier": "hinata-evolved-genin",
//     "Combos": [
//       23,
//       14,
//       56,
//       12
//     ],
//     "NinjaName": "hinata"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 3,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 13,
//       "Nin": 6,
//       "Buki": 2,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 406,
//     "Identifier": "hinata-fn-genin",
//     "NinjaName": "hinata"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 3,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 85,
//       "Nin": 55,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 7,
//       "Nin": 2.5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 517,
//     "Identifier": "hinata-fn-kage",
//     "NinjaName": "hinata"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 60,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 14,
//       "Buki": 3,
//       "Sta": 13,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 2.8,
//       "Nin": 1.5,
//       "Buki": 0.4,
//       "Sta": 1.3,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "gentle-fist",
//       "palm-bottom",
//       "vacuum-palm",
//       "twin-lion-fists"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "kurenai-jounin"
//     },
//     "Evolve": "hinata-evolved-genin",
//     "NinjaID": 139,
//     "Identifier": "hinata-genin",
//     "Combos": [
//       23,
//       14,
//       56,
//       12
//     ],
//     "NinjaName": "hinata"
//   },
//   {
//     "Chakra": 30,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 400,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 45,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 35,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 1.8,
//       "Ele": 2.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "slashing-bandages",
//       "impervious-armor",
//       "inhaling-maw",
//       "chimera-technique"
//     ],
//     "NinjaID": 391,
//     "Identifier": "hiruko-chakra-genin",
//     "NinjaName": "hiruko"
//   },
//   {
//     "Chakra": 50,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 110,
//       "Buki": 25,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 6,
//       "Buki": 1.5,
//       "Sta": 1.5,
//       "Ele": 2.3,
//       "Gen": 3
//     },
//     "Ability": [
//       "slashing-bandages",
//       "impervious-armor",
//       "inhaling-maw",
//       "chimera-technique"
//     ],
//     "NinjaID": 183,
//     "Identifier": "hiruko-crazy-kage",
//     "NinjaName": "hiruko"
//   },
//   {
//     "Chakra": 46,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 500,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 55,
//       "Buki": 22,
//       "Sta": 25,
//       "Ele": 35,
//       "Gen": 33
//     },
//     "Growth": {
//       "Tai": 1.3,
//       "Nin": 5,
//       "Buki": 1.5,
//       "Sta": 1.8,
//       "Ele": 2,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "slashing-bandages",
//       "impervious-armor",
//       "inhaling-maw",
//       "chimera-technique"
//     ],
//     "NinjaID": 169,
//     "Identifier": "hiruko-jounin",
//     "Combos": [
//       59
//     ],
//     "NinjaName": "hiruko"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -1,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 28,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4.7,
//       "Buki": 3,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "fire-dragon-bullet",
//       "shuriken-shadow-clone",
//       "mud-shadow-clones",
//       "summoning-shinigami"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 451,
//     "Identifier": "hiruzen-fn-jounin",
//     "NinjaName": "hiruzen"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 750,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 70,
//       "Buki": 70,
//       "Sta": 20,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 2,
//       "Buki": 2.5,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "fire-dragon-bullet",
//       "shuriken-shadow-clone",
//       "mud-shadow-clones",
//       "summoning-shinigami"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 30,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 91,
//     "Identifier": "hiruzen-kage",
//     "NinjaName": "hiruzen"
//   },
//   {
//     "Chakra": 90,
//     "Position": 3,
//     "Seal": 3,
//     "Value": 2000,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 95,
//       "Buki": 70,
//       "Sta": 42,
//       "Ele": 40,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 5.2,
//       "Buki": 3,
//       "Sta": 2.4,
//       "Ele": 2.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "fire-dragon-bullet",
//       "shuriken-shadow-clone",
//       "mud-shadow-clones",
//       "summoning-shinigami"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 262,
//     "Identifier": "hiruzen-prime-kage",
//     "NinjaName": "hiruzen"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 280,
//     "Stats": {
//       "Nin": 4,
//       "Exp": 15
//     },
//     "Growth": {
//       "Nin": 4,
//       "Exp": 0
//     },
//     "NinjaID": 197,
//     "Identifier": "ibuse-summon",
//     "NinjaName": "ibuse"
//   },
//   {
//     "Summon": true,
//     "Chakra": 12,
//     "Position": 4,
//     "Seal": false,
//     "Value": 70,
//     "Stats": {
//       "Tai": 7,
//       "WaterEle": 20
//     },
//     "Growth": {
//       "Tai": 0,
//       "WaterEle": 1
//     },
//     "NinjaID": 39,
//     "Identifier": "ice-whales-summon",
//     "NinjaName": "ice-whales"
//   },
//   {
//     "Chakra": 60,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 600,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 55,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 5.5,
//       "Buki": 1.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "ancient-chakra",
//       "great-fireball",
//       "lightning-blade",
//       "skeletal-susanoo"
//     ],
//     "NinjaID": 402,
//     "Identifier": "indra-battle-jounin",
//     "NinjaName": "indra"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 350,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 40,
//       "Buki": 6,
//       "Sta": 20,
//       "Ele": 18,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.8,
//       "Buki": 0.5,
//       "Sta": 2,
//       "Ele": 1.3,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-body-switch"
//     ],
//     "NinjaID": 61,
//     "Identifier": "ino-chunin-genin",
//     "NinjaName": "ino"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 14,
//       "Buki": 3,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-body-switch"
//     ],
//     "Evolved": "ino-genin",
//     "FixedChakra": true,
//     "NinjaID": 280,
//     "Identifier": "ino-evolved-genin",
//     "Combos": [
//       15,
//       16
//     ],
//     "NinjaName": "ino"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -3,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 13,
//       "Buki": 7,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.7,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-body-switch"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 411,
//     "Identifier": "ino-fn-genin",
//     "NinjaName": "ino"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 50,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 14,
//       "Buki": 3,
//       "Sta": 10,
//       "Ele": 10,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 1.3,
//       "Nin": 3.5,
//       "Buki": 0.5,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-body-switch"
//     ],
//     "Starter": {
//       "StatPoints": 24,
//       "Teacher": "asuma-jounin"
//     },
//     "Evolve": "ino-evolved-genin",
//     "NinjaID": 135,
//     "Identifier": "ino-genin",
//     "Combos": [
//       15,
//       16
//     ],
//     "NinjaName": "ino"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": -7,
//     "Value": 170,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 40,
//       "Buki": 7,
//       "Sta": 20,
//       "Ele": 15,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4,
//       "Buki": 0.8,
//       "Sta": 1.7,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hair-trap",
//       "mind-body-transmission",
//       "mind-disturbance",
//       "mind-body-switch"
//     ],
//     "NinjaID": 102,
//     "Identifier": "inoichi-jounin",
//     "Combos": [
//       15,
//       16
//     ],
//     "NinjaName": "inoichi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 30,
//     "Position": 4,
//     "Seal": false,
//     "Value": 400,
//     "Stats": {
//       "Exp": 8,
//       "Gold": 8
//     },
//     "Growth": {
//       "Exp": 2,
//       "Gold": 2
//     },
//     "NinjaID": 176,
//     "Identifier": "iron-maiden-summon",
//     "NinjaName": "iron-maiden"
//   },
//   {
//     "Chakra": 24,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 600,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 60,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 374,
//     "Identifier": "ishikawa-kage",
//     "NinjaName": "ishikawa"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "End": 0,
//       "CritChance": 0
//     },
//     "Growth": {
//       "End": 0.8,
//       "CritChance": 0.3
//     },
//     "FixedChakra": true,
//     "NinjaID": 493,
//     "Identifier": "isobu-fn-summon",
//     "NinjaName": "isobu"
//   },
//   {
//     "Summon": true,
//     "Chakra": 26,
//     "Position": 4,
//     "Seal": false,
//     "Value": 400,
//     "Stats": {
//       "Tai": 8,
//       "End": 8,
//       "CritChance": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "End": 2,
//       "CritChance": 0.5
//     },
//     "NinjaID": 186,
//     "Identifier": "isobu-summon",
//     "Combos": [
//       67
//     ],
//     "NinjaName": "isobu"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 15,
//       "Buki": 3,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "clone-explosion",
//       "great-fireball",
//       "summoning-crow",
//       "tsukuyomi"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 446,
//     "Identifier": "itachi-fn-genin",
//     "NinjaName": "itachi"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 13,
//       "Nin": 30,
//       "Buki": 15,
//       "Sta": 25,
//       "Ele": 40,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.5,
//       "Buki": 2.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "clone-explosion",
//       "great-fireball",
//       "summoning-crow",
//       "tsukuyomi"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 359,
//     "Identifier": "itachi-fn-jounin",
//     "NinjaName": "itachi"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 100,
//       "Buki": 50,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 60
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 7.5,
//       "Buki": 2.5,
//       "Sta": 2.5,
//       "Ele": 2.2,
//       "Gen": 4
//     },
//     "Ability": [
//       "clone-explosion",
//       "great-fireball",
//       "summoning-crow",
//       "tsukuyomi"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 404,
//     "Identifier": "itachi-fn-kage",
//     "NinjaName": "itachi"
//   },
//   {
//     "Chakra": 52,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 550,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 70,
//       "Buki": 20,
//       "Sta": 24,
//       "Ele": 25,
//       "Gen": 42
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 1.8,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 4
//     },
//     "Ability": [
//       "clone-explosion",
//       "great-fireball",
//       "summoning-crow",
//       "tsukuyomi"
//     ],
//     "NinjaID": 74,
//     "Identifier": "itachi-jounin",
//     "Combos": [
//       64,
//       51,
//       57
//     ],
//     "NinjaName": "itachi"
//   },
//   {
//     "Chakra": 80,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1600,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 110,
//       "Buki": 40,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 6,
//       "Buki": 2.5,
//       "Sta": 1.8,
//       "Ele": 2.2,
//       "Gen": 4
//     },
//     "Ability": [
//       "clone-explosion",
//       "great-fireball",
//       "summoning-crow",
//       "tsukuyomi"
//     ],
//     "NinjaID": 252,
//     "Identifier": "itachi-kage",
//     "Combos": [
//       64,
//       57
//     ],
//     "NinjaName": "itachi"
//   },
//   {
//     "Chakra": 32,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 800,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 70,
//       "Buki": 35,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.5,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "clone-explosion",
//       "great-fireball",
//       "summoning-crow",
//       "tsukuyomi"
//     ],
//     "NinjaID": 500,
//     "Identifier": "itachi-missing-kage",
//     "NinjaName": "itachi"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 30,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 19,
//       "Buki": 4,
//       "Sta": 10,
//       "Ele": 8,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 0.4,
//       "Nin": 1.2,
//       "Buki": 0.5,
//       "Sta": 1,
//       "Ele": 0.5,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 154,
//     "Identifier": "jibachi-genin",
//     "Combos": [
//       7
//     ],
//     "NinjaName": "jibachi"
//   },
//   {
//     "Chakra": 38,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 900,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 10,
//       "Buki": 35,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "helmet-splitter"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 347,
//     "Identifier": "jinin-edo-jounin",
//     "NinjaName": "jinin"
//   },
//   {
//     "Chakra": 28,
//     "Position": 3,
//     "Seal": -3,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 10,
//       "Buki": 45,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "helmet-splitter"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 338,
//     "Identifier": "jinin-kage",
//     "NinjaName": "jinin"
//   },
//   {
//     "Chakra": 40,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 900,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 25,
//       "Buki": 40,
//       "Sta": 40,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 2.3,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "blastsword"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 348,
//     "Identifier": "jinpachi-edo-jounin",
//     "NinjaName": "jinpachi"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 4,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 30,
//       "Buki": 55,
//       "Sta": 40,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 2.3,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "blastsword"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 341,
//     "Identifier": "jinpachi-kage",
//     "NinjaName": "jinpachi"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 9,
//       "Nin": 10,
//       "Buki": 3,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "flame-bullet",
//       "swamp-of-the-underworld",
//       "needle-jizo",
//       "partial-sage-mode"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 333,
//     "Identifier": "jiraiya-fn-genin",
//     "NinjaName": "jiraiya"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 65,
//       "Nin": 80,
//       "Buki": 25,
//       "Sta": 40,
//       "Ele": 35,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 5.5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "flame-bullet",
//       "swamp-of-the-underworld",
//       "needle-jizo",
//       "partial-sage-mode"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 512,
//     "Identifier": "jiraiya-fn-kage",
//     "NinjaName": "jiraiya"
//   },
//   {
//     "Chakra": 56,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 1100,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 62,
//       "Buki": 46,
//       "Sta": 40,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3.5,
//       "Buki": 2,
//       "Sta": 2.2,
//       "Ele": 2.2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "flame-bullet",
//       "swamp-of-the-underworld",
//       "needle-jizo",
//       "partial-sage-mode"
//     ],
//     "NinjaID": 149,
//     "Identifier": "jiraiya-kage",
//     "Combos": [
//       59
//     ],
//     "NinjaName": "jiraiya"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 7,
//       "Buki": 4,
//       "Sta": 28,
//       "Ele": 26,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3.8,
//       "Nin": 1.2,
//       "Buki": 0.4,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "arhat-fist",
//       "sphere-of-graves",
//       "earth-dome-prison"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "jirobo-genin",
//     "FixedChakra": true,
//     "NinjaID": 300,
//     "Identifier": "jirobo-evolved-genin",
//     "Combos": [
//       44,
//       26
//     ],
//     "NinjaName": "jirobo"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 60,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 7,
//       "Buki": 4,
//       "Sta": 18,
//       "Ele": 16,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1.2,
//       "Buki": 0.4,
//       "Sta": 1.8,
//       "Ele": 1.5,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "arhat-fist",
//       "sphere-of-graves",
//       "earth-dome-prison"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "kimimaro-jounin"
//     },
//     "Evolve": "jirobo-evolved-genin",
//     "NinjaID": 121,
//     "Identifier": "jirobo-genin",
//     "Combos": [
//       44,
//       26
//     ],
//     "NinjaName": "jirobo"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": 8,
//     "Value": 300,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 20,
//       "Buki": 10,
//       "Sta": 50,
//       "Ele": 40,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "arhat-fist",
//       "sphere-of-graves",
//       "earth-dome-prison"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 502,
//     "Identifier": "jirobo-hatred-jounin",
//     "NinjaName": "jirobo"
//   },
//   {
//     "Chakra": 12,
//     "Position": 2,
//     "Seal": 8,
//     "Value": 150,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 10,
//       "Buki": 8,
//       "Sta": 22,
//       "Ele": 18,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 3.8,
//       "Nin": 1,
//       "Buki": 0.3,
//       "Sta": 1.8,
//       "Ele": 1.8,
//       "Gen": 2
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "arhat-fist",
//       "sphere-of-graves",
//       "earth-dome-prison"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 122,
//     "Identifier": "jirobo-jounin",
//     "Combos": [
//       47,
//       44
//     ],
//     "NinjaName": "jirobo"
//   },
//   {
//     "Summon": true,
//     "Chakra": 70,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 3,
//       "End": 2
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 3,
//       "End": 2
//     },
//     "NinjaID": 519,
//     "Identifier": "jubi-summon",
//     "NinjaName": "jubi"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 38,
//       "Nin": 10,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 1.5,
//       "Buki": 2,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "jet-booster",
//       "destroying-axe-fist",
//       "piston-fist",
//       "sage-transformation"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 454,
//     "Identifier": "jugo-fn-jounin",
//     "NinjaName": "jugo"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 260,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 20,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 17,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.5,
//       "Buki": 1,
//       "Sta": 2.2,
//       "Ele": 1.2,
//       "Gen": 2.2
//     },
//     "Ability": [
//       "jet-booster",
//       "destroying-axe-fist",
//       "piston-fist",
//       "sage-transformation"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 42,
//     "Identifier": "jugo-jounin",
//     "Combos": [
//       34,
//       35
//     ],
//     "NinjaName": "jugo"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -7,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 25,
//       "Buki": 80,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 1.5,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "executioners-blade"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 340,
//     "Identifier": "juzo-kage",
//     "NinjaName": "juzo"
//   },
//   {
//     "Chakra": 56,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 550,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 50,
//       "Buki": 20,
//       "Sta": 40,
//       "Ele": 25,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.8,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-draining",
//       "augmented-dna",
//       "dragon-transformation",
//       "impure-world-reincarnation"
//     ],
//     "NinjaID": 325,
//     "Identifier": "kabuto-dna-jounin",
//     "Combos": [
//       58
//     ],
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 10,
//       "Buki": 3,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-draining",
//       "augmented-dna",
//       "dragon-transformation",
//       "impure-world-reincarnation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 448,
//     "Identifier": "kabuto-fn-genin",
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 25,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-draining",
//       "augmented-dna",
//       "dragon-transformation",
//       "impure-world-reincarnation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 463,
//     "Identifier": "kabuto-fn-jounin",
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 30,
//       "Buki": 8,
//       "Sta": 18,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.8,
//       "Nin": 3.5,
//       "Buki": 0.5,
//       "Sta": 1.8,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "chakra-scalpel",
//       "dead-soul",
//       "temple-of-nirvana",
//       "cellular-activation"
//     ],
//     "Teacher": true,
//     "NinjaID": 96,
//     "Identifier": "kabuto-jounin",
//     "Combos": [
//       58
//     ],
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 56,
//     "Position": 3,
//     "Seal": -8,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 95,
//       "Buki": 20,
//       "Sta": 40,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.3
//     },
//     "Ability": [
//       "chakra-draining",
//       "augmented-dna",
//       "dragon-transformation",
//       "impure-world-reincarnation"
//     ],
//     "NinjaID": 18,
//     "Identifier": "kabuto-kage",
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 28,
//     "Position": 3,
//     "Seal": -8,
//     "Value": 600,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 60,
//       "Buki": 20,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4.5,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-scalpel",
//       "dead-soul",
//       "temple-of-nirvana",
//       "cellular-activation"
//     ],
//     "NinjaID": 327,
//     "Identifier": "kabuto-old-blood-kage",
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 68,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 90,
//       "Nin": 50,
//       "Buki": 25,
//       "Sta": 40,
//       "Ele": 25,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 6,
//       "Nin": 2,
//       "Buki": 1.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-draining",
//       "augmented-dna",
//       "dragon-transformation",
//       "impure-world-reincarnation"
//     ],
//     "NinjaID": 244,
//     "Identifier": "kabuto-sage-kage",
//     "NinjaName": "kabuto"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 30,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 16,
//       "Buki": 5,
//       "Sta": 10,
//       "Ele": 8,
//       "Gen": 16
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1.4
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 160,
//     "Identifier": "kagari-genin",
//     "Combos": [
//       29
//     ],
//     "NinjaName": "kagari"
//   },
//   {
//     "Chakra": 140,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 2500,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 120,
//       "Buki": 50,
//       "Sta": 60,
//       "Ele": 50,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 6,
//       "Buki": 2,
//       "Sta": 3,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "ancient-chakra",
//       "rabbit-hair-needle",
//       "eighty-gods-chakra",
//       "yomotsu-hirasaka"
//     ],
//     "NinjaID": 412,
//     "Identifier": "kaguya-kage",
//     "NinjaName": "kaguya"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -7,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 16,
//       "Buki": 7,
//       "Sta": 28,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3,
//       "Buki": 0.8,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "1000-years-of-death",
//       "lightning-hound",
//       "lightning-cutter",
//       "kamui-kakashi"
//     ],
//     "Evolved": "kakashi-genin",
//     "FixedChakra": true,
//     "NinjaID": 307,
//     "Identifier": "kakashi-evolved-genin",
//     "Combos": [
//       27
//     ],
//     "NinjaName": "kakashi"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -1,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 11,
//       "Buki": 5,
//       "Sta": 25,
//       "Ele": 35,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3.5,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "1000-years-of-death",
//       "lightning-hound",
//       "lightning-cutter",
//       "kamui-kakashi"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 429,
//     "Identifier": "kakashi-fn-genin",
//     "NinjaName": "kakashi"
//   },
//   {
//     "Chakra": 16,
//     "Position": 1,
//     "Seal": -7,
//     "Value": 80,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 16,
//       "Buki": 7,
//       "Sta": 18,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 2.5,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 1.5,
//       "Gen": 1
//     },
//     "Ability": [
//       "1000-years-of-death",
//       "lightning-hound",
//       "lightning-cutter",
//       "kamui-kakashi"
//     ],
//     "Starter": {
//       "StatPoints": 16,
//       "Teacher": "yamato-jounin"
//     },
//     "Evolve": "kakashi-evolved-genin",
//     "NinjaID": 44,
//     "Identifier": "kakashi-genin",
//     "Combos": [
//       27
//     ],
//     "NinjaName": "kakashi"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 23,
//       "Buki": 10,
//       "Sta": 22,
//       "Ele": 20,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 1.4,
//       "Nin": 3.4,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "1000-years-of-death",
//       "lightning-hound",
//       "lightning-cutter",
//       "kamui-kakashi"
//     ],
//     "Teacher": true,
//     "NinjaID": 98,
//     "Identifier": "kakashi-jounin",
//     "Combos": [
//       75
//     ],
//     "NinjaName": "kakashi"
//   },
//   {
//     "Chakra": 44,
//     "Position": 2,
//     "Seal": -5,
//     "Value": 450,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 40,
//       "Buki": 15,
//       "Sta": 35,
//       "Ele": 35,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4,
//       "Buki": 1.5,
//       "Sta": 2.2,
//       "Ele": 2.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "1000-years-of-death",
//       "lightning-hound",
//       "lightning-cutter",
//       "kamui-kakashi"
//     ],
//     "NinjaID": 418,
//     "Identifier": "kakashi-sharingan-jounin",
//     "Combos": [
//       75
//     ],
//     "NinjaName": "kakashi"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 1,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 25,
//       "Buki": 10,
//       "Sta": 35,
//       "Ele": 50,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "iron-skin",
//       "detachable-limbs",
//       "elemental-masks",
//       "earth-grudge"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 363,
//     "Identifier": "kakuzu-fn-jounin",
//     "NinjaName": "kakuzu"
//   },
//   {
//     "Chakra": 52,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 550,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 48,
//       "Buki": 15,
//       "Sta": 36,
//       "Ele": 40,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 2.6,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 3,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "iron-skin",
//       "detachable-limbs",
//       "elemental-masks",
//       "earth-grudge"
//     ],
//     "NinjaID": 69,
//     "Identifier": "kakuzu-jounin",
//     "Combos": [
//       52
//     ],
//     "NinjaName": "kakuzu"
//   },
//   {
//     "Chakra": 68,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 75,
//       "Buki": 28,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 4.2,
//       "Buki": 1.8,
//       "Sta": 2.2,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "iron-skin",
//       "detachable-limbs",
//       "elemental-masks",
//       "earth-grudge"
//     ],
//     "NinjaID": 255,
//     "Identifier": "kakuzu-kage",
//     "Combos": [
//       52
//     ],
//     "NinjaName": "kakuzu"
//   },
//   {
//     "Summon": true,
//     "Chakra": 14,
//     "Position": 4,
//     "Seal": false,
//     "Value": 60,
//     "Stats": {
//       "Buki": 6,
//       "WindEle": 10
//     },
//     "Growth": {
//       "Buki": 2,
//       "WindEle": 2
//     },
//     "NinjaID": 168,
//     "Identifier": "kamatari-summon",
//     "Combos": [
//       24
//     ],
//     "NinjaName": "kamatari"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 7,
//       "Buki": 23,
//       "Sta": 26,
//       "Ele": 20,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1,
//       "Buki": 4,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "chakra-threads",
//       "black-secrets",
//       "triple-puppets",
//       "puppet-sasori"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "kankuro-genin",
//     "FixedChakra": true,
//     "NinjaID": 285,
//     "Identifier": "kankuro-evolved-genin",
//     "Combos": [
//       4
//     ],
//     "NinjaName": "kankuro"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 3,
//       "Buki": 18,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 1,
//       "Buki": 5.2,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "chakra-threads",
//       "black-secrets",
//       "triple-puppets",
//       "puppet-sasori"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 443,
//     "Identifier": "kankuro-fn-genin",
//     "NinjaName": "kankuro"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 60,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 7,
//       "Buki": 23,
//       "Sta": 16,
//       "Ele": 10,
//       "Gen": 7
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1,
//       "Buki": 3.2,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "chakra-threads",
//       "black-secrets",
//       "triple-puppets",
//       "puppet-sasori"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "baki-jounin"
//     },
//     "Evolve": "kankuro-evolved-genin",
//     "NinjaID": 20,
//     "Identifier": "kankuro-genin",
//     "Combos": [
//       4
//     ],
//     "NinjaName": "kankuro"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -7,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 12,
//       "Buki": 8,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "minds-eye",
//       "chakra-suppression",
//       "chakra-transfer",
//       "adamantine-attacking-chains"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 410,
//     "Identifier": "karin-fn-genin",
//     "NinjaName": "karin"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 260,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 40,
//       "Buki": 10,
//       "Sta": 20,
//       "Ele": 26,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.4,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "minds-eye",
//       "chakra-suppression",
//       "chakra-transfer",
//       "adamantine-attacking-chains"
//     ],
//     "NinjaID": 40,
//     "Identifier": "karin-jounin",
//     "Combos": [
//       34,
//       35
//     ],
//     "NinjaName": "karin"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -3,
//     "Value": 200,
//     "Stats": {
//       "Tai": 17,
//       "Nin": 3,
//       "Buki": 14,
//       "Sta": 27,
//       "Ele": 16,
//       "Gen": 23
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 0.5,
//       "Buki": 2.5,
//       "Sta": 1.8,
//       "Ele": 1,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "swordsmanship",
//       "thunderbolt",
//       "crescent-moon-slice",
//       "deception-slice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "karui-genin",
//     "FixedChakra": true,
//     "NinjaID": 288,
//     "Identifier": "karui-evolved-genin",
//     "Combos": [
//       6
//     ],
//     "NinjaName": "karui"
//   },
//   {
//     "Chakra": 18,
//     "Position": 1,
//     "Seal": -3,
//     "Value": 90,
//     "Stats": {
//       "Tai": 17,
//       "Nin": 3,
//       "Buki": 14,
//       "Sta": 17,
//       "Ele": 6,
//       "Gen": 13
//     },
//     "Growth": {
//       "Tai": 2.7,
//       "Nin": 0.5,
//       "Buki": 2.5,
//       "Sta": 1.8,
//       "Ele": 0.5,
//       "Gen": 1.2
//     },
//     "Ability": [
//       "swordsmanship",
//       "thunderbolt",
//       "crescent-moon-slice",
//       "deception-slice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 16,
//       "Teacher": "darui-jounin"
//     },
//     "Evolve": "karui-evolved-genin",
//     "NinjaID": 32,
//     "Identifier": "karui-genin",
//     "Combos": [
//       6
//     ],
//     "NinjaName": "karui"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 600,
//     "Stats": {
//       "Nin": 15,
//       "Sta": 12
//     },
//     "Growth": {
//       "Nin": 5,
//       "Sta": 1
//     },
//     "NinjaID": 211,
//     "Identifier": "katsuyu-summon",
//     "NinjaName": "katsuyu"
//   },
//   {
//     "Chakra": 38,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 65,
//       "Buki": 65,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 377,
//     "Identifier": "kazekage-3rd-kage",
//     "NinjaName": "kazekage-3rd"
//   },
//   {
//     "Chakra": 50,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 500,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 55,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4.5,
//       "Buki": 2.5,
//       "Sta": 2,
//       "Ele": 1.8,
//       "Gen": 3
//     },
//     "Ability": [
//       "rock-hiding",
//       "shakujo-twister",
//       "flying-swallow",
//       "earth-impermanence"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 488,
//     "Identifier": "kazuma-jounin",
//     "NinjaName": "kazuma"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": -3,
//     "Value": 350,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 20,
//       "Buki": 10,
//       "Sta": 27,
//       "Ele": 18,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4.2,
//       "Nin": 1.5,
//       "Buki": 1,
//       "Sta": 2.2,
//       "Ele": 1.3,
//       "Gen": 2
//     },
//     "Ability": [
//       "four-legs-technique",
//       "human-beast-clone",
//       "fang-wolf-fang",
//       "two-headed-wolf"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 57,
//     "Identifier": "kiba-chunin-genin",
//     "Combos": [
//       48
//     ],
//     "NinjaName": "kiba"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 5,
//       "Buki": 6,
//       "Sta": 24,
//       "Ele": 20,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 2.3
//     },
//     "Ability": [
//       "four-legs-technique",
//       "human-beast-clone",
//       "fang-wolf-fang",
//       "two-headed-wolf"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "kiba-genin",
//     "FixedChakra": true,
//     "NinjaID": 274,
//     "Identifier": "kiba-evolved-genin",
//     "Combos": [
//       20,
//       21,
//       12
//     ],
//     "NinjaName": "kiba"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 13,
//       "Nin": 6,
//       "Buki": 2,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "four-legs-technique",
//       "human-beast-clone",
//       "fang-wolf-fang",
//       "two-headed-wolf"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 434,
//     "Identifier": "kiba-fn-genin",
//     "NinjaName": "kiba"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 60,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 5,
//       "Buki": 6,
//       "Sta": 14,
//       "Ele": 10,
//       "Gen": 8
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 1.7,
//       "Ele": 1,
//       "Gen": 0.8
//     },
//     "Ability": [
//       "four-legs-technique",
//       "human-beast-clone",
//       "fang-wolf-fang",
//       "two-headed-wolf"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "kurenai-jounin"
//     },
//     "Evolve": "kiba-evolved-genin",
//     "NinjaID": 138,
//     "Identifier": "kiba-genin",
//     "Combos": [
//       20,
//       21,
//       12
//     ],
//     "NinjaName": "kiba"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 200,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 10,
//       "Buki": 17,
//       "Sta": 26,
//       "Ele": 22,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1.5,
//       "Buki": 3.7,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "spiral-spider-web",
//       "sticky-gold",
//       "spider-war-bow"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "kidomaru-genin",
//     "FixedChakra": true,
//     "NinjaID": 301,
//     "Identifier": "kidomaru-evolved-genin",
//     "Combos": [
//       43,
//       26
//     ],
//     "NinjaName": "kidomaru"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 70,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 10,
//       "Buki": 17,
//       "Sta": 16,
//       "Ele": 12,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 1.7,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "spiral-spider-web",
//       "sticky-gold",
//       "spider-war-bow"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "kimimaro-jounin"
//     },
//     "Evolve": "kidomaru-evolved-genin",
//     "NinjaID": 119,
//     "Identifier": "kidomaru-genin",
//     "Combos": [
//       43,
//       26
//     ],
//     "NinjaName": "kidomaru"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 300,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 25,
//       "Buki": 47,
//       "Sta": 45,
//       "Ele": 25,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 4.5,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "spiral-spider-web",
//       "sticky-gold",
//       "spider-war-bow"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 501,
//     "Identifier": "kidomaru-hatred-jounin",
//     "NinjaName": "kidomaru"
//   },
//   {
//     "Chakra": 12,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 150,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 25,
//       "Buki": 25,
//       "Sta": 18,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2.4,
//       "Buki": 3,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "spiral-spider-web",
//       "sticky-gold",
//       "spider-war-bow"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 120,
//     "Identifier": "kidomaru-jounin",
//     "Combos": [
//       50,
//       43
//     ],
//     "NinjaName": "kidomaru"
//   },
//   {
//     "Chakra": 8,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 12,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 18,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1.5,
//       "Buki": 3.6,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "killer-b-jounin",
//     "FixedChakra": true,
//     "NinjaID": 289,
//     "Identifier": "killer-b-evolved-jounin",
//     "Combos": [
//       61,
//       77,
//       72,
//       62
//     ],
//     "NinjaName": "killer-b"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 11,
//       "Nin": 2,
//       "Buki": 11,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 1,
//       "Buki": 4,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 236,
//     "Identifier": "killer-b-fn-genin",
//     "NinjaName": "killer-b"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 4,
//     "Value": 500,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 8,
//       "Buki": 30,
//       "Sta": 27,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.7,
//       "Nin": 0.5,
//       "Buki": 5,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 482,
//     "Identifier": "killer-b-jinchuriki-genin",
//     "NinjaName": "killer-b"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 180,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 12,
//       "Buki": 30,
//       "Sta": 25,
//       "Ele": 13,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 1,
//       "Teacher": "ponta-summon"
//     },
//     "Evolve": "killer-b-evolved-jounin",
//     "NinjaID": 35,
//     "Identifier": "killer-b-jounin",
//     "Combos": [
//       61,
//       77,
//       72,
//       62
//     ],
//     "NinjaName": "killer-b"
//   },
//   {
//     "Chakra": 42,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 450,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 15,
//       "Buki": 40,
//       "Sta": 45,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 1,
//       "Buki": 3,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 319,
//     "Identifier": "killer-b-sword-jounin",
//     "Combos": [
//       61,
//       77,
//       72,
//       62
//     ],
//     "NinjaName": "killer-b"
//   },
//   {
//     "Chakra": 78,
//     "Position": 3,
//     "Seal": 4,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 65,
//       "Nin": 25,
//       "Buki": 110,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 1.5,
//       "Buki": 5.5,
//       "Sta": 2.5,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "disturbance-taijutsu",
//       "lariat",
//       "tailed-beast-bomb",
//       "hachibis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 474,
//     "Identifier": "killer-b-tailed-kage",
//     "NinjaName": "killer-b"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 320,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 5,
//       "Buki": 44,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 2.7,
//       "Nin": 0.5,
//       "Buki": 4,
//       "Sta": 2.4,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "willow-dance",
//       "camellia-dance",
//       "larch-dance",
//       "clematis-dance",
//       "bracken-dance"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 328,
//     "Identifier": "kimimaro-cs2-jounin",
//     "NinjaName": "kimimaro"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 3,
//       "Buki": 10,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 0.8,
//       "Buki": 3,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "willow-dance",
//       "camellia-dance",
//       "larch-dance",
//       "clematis-dance",
//       "bracken-dance"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 235,
//     "Identifier": "kimimaro-fn-genin",
//     "NinjaName": "kimimaro"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 5,
//       "Buki": 30,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "willow-dance",
//       "camellia-dance",
//       "larch-dance",
//       "clematis-dance",
//       "bracken-dance"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 455,
//     "Identifier": "kimimaro-fn-jounin",
//     "NinjaName": "kimimaro"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 200,
//     "Stats": {
//       "Tai": 28,
//       "Nin": 8,
//       "Buki": 20,
//       "Sta": 25,
//       "Ele": 12,
//       "Gen": 12
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 0.8,
//       "Buki": 2.3,
//       "Sta": 2.1,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "willow-dance",
//       "camellia-dance",
//       "larch-dance",
//       "clematis-dance",
//       "bracken-dance"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Teacher": true,
//     "NinjaID": 97,
//     "Identifier": "kimimaro-jounin",
//     "NinjaName": "kimimaro"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 6,
//       "Buki": 20,
//       "Sta": 20,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 3.6,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "sound-manipulation",
//       "shadow-senbon"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "kin-genin",
//     "FixedChakra": true,
//     "NinjaID": 297,
//     "Identifier": "kin-evolved-genin",
//     "Combos": [
//       25
//     ],
//     "NinjaName": "kin"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 40,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 6,
//       "Buki": 20,
//       "Sta": 10,
//       "Ele": 5,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 2.3,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "sound-manipulation",
//       "shadow-senbon"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 26,
//       "Teacher": "kabuto-jounin"
//     },
//     "Evolve": "kin-evolved-genin",
//     "NinjaID": 126,
//     "Identifier": "kin-genin",
//     "Combos": [
//       25
//     ],
//     "NinjaName": "kin"
//   },
//   {
//     "Summon": true,
//     "Chakra": 54,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1100,
//     "Stats": {
//       "Nin": 4,
//       "Sta": 10,
//       "GenAbsorb": 10
//     },
//     "Growth": {
//       "Nin": 4,
//       "Sta": 2,
//       "GenAbsorb": 1
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnEnter": 1,
//               "Stat": {
//                 "Name": "Gen",
//                 "Less": false,
//                 "Amount": 100,
//                 "Side": 1
//               }
//             },
//             "Stats": {
//               "GenRec": 15,
//               "L5D": 15
//             },
//             "Temporary": true
//           }
//         ],
//         "ID": 243,
//         "Identifier": "kings-judgement",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 232,
//     "Identifier": "king-of-hell-summon",
//     "NinjaName": "king-of-hell"
//   },
//   {
//     "Chakra": 56,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 550,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 15,
//       "Buki": 70,
//       "Sta": 45,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1.3,
//       "Buki": 5.5,
//       "Sta": 2.4,
//       "Ele": 1.5,
//       "Gen": 2.2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "tools-mastery",
//       "treasured-tools"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 322,
//     "Identifier": "kinkaku-jounin",
//     "NinjaName": "kinkaku"
//   },
//   {
//     "Chakra": 86,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 50,
//       "Buki": 125,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 6.5,
//       "Sta": 2.5,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "tools-mastery",
//       "tailed-beast-bomb",
//       "treasured-tools"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 466,
//     "Identifier": "kinkaku-tailed-kage",
//     "NinjaName": "kinkaku"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 10,
//       "Buki": 25,
//       "Sta": 35,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 1,
//       "Buki": 3,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "immense-chakra",
//       "summoning-sharks",
//       "exploding-water-shockwave",
//       "symbiotic-fusion"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 358,
//     "Identifier": "kisame-fn-jounin",
//     "NinjaName": "kisame"
//   },
//   {
//     "Chakra": 50,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 500,
//     "Stats": {
//       "Tai": 27,
//       "Nin": 27,
//       "Buki": 27,
//       "Sta": 47,
//       "Ele": 34,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 3,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "immense-chakra",
//       "summoning-sharks",
//       "exploding-water-shockwave",
//       "symbiotic-fusion"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 75,
//     "Identifier": "kisame-jounin",
//     "Combos": [
//       39,
//       57
//     ],
//     "NinjaName": "kisame"
//   },
//   {
//     "Chakra": 70,
//     "Position": 3,
//     "Seal": 3,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 80,
//       "Nin": 30,
//       "Buki": 70,
//       "Sta": 47,
//       "Ele": 37,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 2,
//       "Buki": 3,
//       "Sta": 2.8,
//       "Ele": 2.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "immense-chakra",
//       "summoning-sharks",
//       "exploding-water-shockwave",
//       "symbiotic-fusion"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 253,
//     "Identifier": "kisame-kage",
//     "Combos": [
//       57
//     ],
//     "NinjaName": "kisame"
//   },
//   {
//     "Chakra": 36,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 25,
//       "Buki": 65,
//       "Sta": 48,
//       "Ele": 25,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 1.5,
//       "Buki": 4,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "immense-chakra",
//       "summoning-sharks",
//       "exploding-water-shockwave",
//       "symbiotic-fusion"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 346,
//     "Identifier": "kisame-swordsmen-kage",
//     "NinjaName": "kisame"
//   },
//   {
//     "Chakra": 34,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 400,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 25,
//       "Buki": 15,
//       "Sta": 33,
//       "Ele": 30,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 131,
//     "Identifier": "kitsuchi-jounin",
//     "NinjaName": "kitsuchi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 0,
//       "Nin": 0
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1
//     },
//     "FixedChakra": true,
//     "NinjaID": 495,
//     "Identifier": "kokuo-fn-summon",
//     "NinjaName": "kokuo"
//   },
//   {
//     "Summon": true,
//     "Chakra": 30,
//     "Position": 4,
//     "Seal": false,
//     "Value": 500,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 5
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3
//     },
//     "NinjaID": 188,
//     "Identifier": "kokuo-summon",
//     "Combos": [
//       69
//     ],
//     "NinjaName": "kokuo"
//   },
//   {
//     "Summon": true,
//     "Chakra": 20,
//     "Position": 4,
//     "Seal": false,
//     "Value": 100,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 5
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 2
//     },
//     "Teacher": true,
//     "NinjaID": 144,
//     "Identifier": "kokuo-young-summon",
//     "Combos": [
//       69
//     ],
//     "NinjaName": "kokuo"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 15,
//       "Buki": 20,
//       "Sta": 22,
//       "Ele": 24,
//       "Gen": 23
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 2,
//       "Buki": 3,
//       "Sta": 1.7,
//       "Ele": 1.5,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "paper-shuriken",
//       "paper-chakram",
//       "paper-clone",
//       "sacred-paper-emissary"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "konan-genin",
//     "FixedChakra": true,
//     "NinjaID": 303,
//     "Identifier": "konan-evolved-genin",
//     "Combos": [
//       11
//     ],
//     "NinjaName": "konan"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -1,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 30,
//       "Buki": 25,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4.5,
//       "Buki": 4.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "paper-shuriken",
//       "paper-chakram",
//       "paper-clone",
//       "sacred-paper-emissary"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 365,
//     "Identifier": "konan-fn-jounin",
//     "NinjaName": "konan"
//   },
//   {
//     "Chakra": 20,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 100,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 15,
//       "Buki": 20,
//       "Sta": 12,
//       "Ele": 14,
//       "Gen": 13
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 2,
//       "Buki": 2.5,
//       "Sta": 1.2,
//       "Ele": 1,
//       "Gen": 1.2
//     },
//     "Ability": [
//       "paper-shuriken",
//       "paper-chakram",
//       "paper-clone",
//       "sacred-paper-emissary"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 8,
//       "Teacher": "gerotora-summon"
//     },
//     "Evolve": "konan-evolved-genin",
//     "NinjaID": 147,
//     "Identifier": "konan-genin",
//     "Combos": [
//       11
//     ],
//     "NinjaName": "konan"
//   },
//   {
//     "Chakra": 46,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 450,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 45,
//       "Buki": 50,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3.5,
//       "Buki": 3.5,
//       "Sta": 1.8,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "paper-shuriken",
//       "paper-chakram",
//       "paper-clone",
//       "sacred-paper-emissary"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 83,
//     "Identifier": "konan-jounin",
//     "Combos": [
//       55
//     ],
//     "NinjaName": "konan"
//   },
//   {
//     "Chakra": 64,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 93,
//       "Buki": 85,
//       "Sta": 30,
//       "Ele": 18,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4,
//       "Buki": 4,
//       "Sta": 1.9,
//       "Ele": 1.3,
//       "Gen": 2.3
//     },
//     "Ability": [
//       "paper-shuriken",
//       "paper-chakram",
//       "paper-clone",
//       "sacred-paper-emissary"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 256,
//     "Identifier": "konan-kage",
//     "Combos": [
//       55
//     ],
//     "NinjaName": "konan"
//   },
//   {
//     "Chakra": 4,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 10,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 4,
//       "Buki": 3,
//       "Sta": 8,
//       "Ele": 2,
//       "Gen": 5,
//       "ItemFind": 15
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 0.8,
//       "Buki": 0.3,
//       "Sta": 1,
//       "Ele": 0.4,
//       "Gen": 1.5,
//       "ItemFind": 4
//     },
//     "Ability": [
//       "sexy-technique",
//       "cloak-of-invisibility",
//       "harem-technique",
//       "cheesecake-technique"
//     ],
//     "NinjaID": 36,
//     "Identifier": "konohamaru-genin",
//     "Combos": [
//       32,
//       19,
//       33
//     ],
//     "NinjaName": "konohamaru"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 10,
//     "Value": 40,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 10,
//       "Buki": 10,
//       "Sta": 10,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.1,
//       "Nin": 0.1,
//       "Buki": 0.1,
//       "Sta": 0.1,
//       "Ele": 0.1,
//       "Gen": 0.1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 152,
//     "Identifier": "koyuki-genin",
//     "Combos": [
//       36
//     ],
//     "NinjaName": "koyuki"
//   },
//   {
//     "Summon": true,
//     "Chakra": 50,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 4,
//       "CritChance": 1,
//       "Crit": 1
//     },
//     "Growth": {
//       "Tai": 4,
//       "CritChance": 1,
//       "Crit": 1
//     },
//     "NinjaID": 381,
//     "Identifier": "kurama-bizarro-summon",
//     "Combos": [
//       74
//     ],
//     "NinjaName": "kurama"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "Atk": 0,
//       "Sta": 0
//     },
//     "Growth": {
//       "Atk": 0.5,
//       "Sta": 0.8
//     },
//     "FixedChakra": true,
//     "NinjaID": 499,
//     "Identifier": "kurama-fn-summon",
//     "NinjaName": "kurama"
//   },
//   {
//     "Summon": true,
//     "Chakra": 44,
//     "Position": 4,
//     "Seal": false,
//     "Value": 900,
//     "Stats": {
//       "Tai": 5,
//       "CritChance": 2,
//       "Gen": 3
//     },
//     "Growth": {
//       "Tai": 5,
//       "CritChance": 2,
//       "Gen": 3
//     },
//     "NinjaID": 355,
//     "Identifier": "kurama-spawn-summon",
//     "NinjaName": "kurama"
//   },
//   {
//     "Summon": true,
//     "Chakra": 56,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1100,
//     "Stats": {
//       "Atk": 6,
//       "Sta": 6,
//       "Ele": 6
//     },
//     "Growth": {
//       "Atk": 2.3,
//       "Sta": 3,
//       "Ele": 2
//     },
//     "NinjaID": 192,
//     "Identifier": "kurama-summon",
//     "Combos": [
//       73
//     ],
//     "NinjaName": "kurama"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 16,
//       "Buki": 4,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "hair-camouflage",
//       "flower-petal-escape",
//       "evil-sealing",
//       "string-bean-binding"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 408,
//     "Identifier": "kurenai-fn-genin",
//     "NinjaName": "kurenai"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 35,
//       "Buki": 5,
//       "Sta": 17,
//       "Ele": 13,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 0.7,
//       "Nin": 4.2,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "hair-camouflage",
//       "flower-petal-escape",
//       "evil-sealing",
//       "string-bean-binding"
//     ],
//     "Teacher": true,
//     "NinjaID": 93,
//     "Identifier": "kurenai-jounin",
//     "NinjaName": "kurenai"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 25,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 8,
//       "Buki": 4,
//       "Sta": 15,
//       "Ele": 13,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 1.2,
//       "Nin": 0.4,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 155,
//     "Identifier": "kurobachi-genin",
//     "Combos": [
//       7
//     ],
//     "NinjaName": "kurobachi"
//   },
//   {
//     "Chakra": 8,
//     "Position": 2,
//     "Seal": -1,
//     "Value": 200,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 26,
//       "Buki": 12,
//       "Sta": 23,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "water-trumpet",
//       "falling-earth-spears",
//       "ash-stone-seal",
//       "quicklime-conjuring"
//     ],
//     "Evolved": "kurotsuchi-jounin",
//     "FixedChakra": true,
//     "NinjaID": 293,
//     "Identifier": "kurotsuchi-evolved-jounin",
//     "Combos": [
//       8
//     ],
//     "NinjaName": "kurotsuchi"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": -1,
//     "Value": 180,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 26,
//       "Buki": 12,
//       "Sta": 18,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "water-trumpet",
//       "falling-earth-spears",
//       "ash-stone-seal",
//       "quicklime-conjuring"
//     ],
//     "Starter": {
//       "StatPoints": 1,
//       "Teacher": "kokuo-young-summon"
//     },
//     "Evolve": "kurotsuchi-evolved-jounin",
//     "NinjaID": 129,
//     "Identifier": "kurotsuchi-jounin",
//     "Combos": [
//       8
//     ],
//     "NinjaName": "kurotsuchi"
//   },
//   {
//     "Chakra": 42,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 900,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 20,
//       "Buki": 70,
//       "Sta": 35,
//       "Ele": 15,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "piercing-needle-sword"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 350,
//     "Identifier": "kushimaru-edo-jounin",
//     "NinjaName": "kushimaru"
//   },
//   {
//     "Chakra": 32,
//     "Position": 3,
//     "Seal": 2,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 30,
//       "Buki": 95,
//       "Sta": 35,
//       "Ele": 15,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 2,
//       "Buki": 5.5,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "piercing-needle-sword"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 343,
//     "Identifier": "kushimaru-kage",
//     "NinjaName": "kushimaru"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 4,
//       "Buki": 4,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 1.5,
//       "Buki": 1.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "red-hot-temper",
//       "adamantine-sealing-chains",
//       "four-symbols-seal",
//       "kyubis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 332,
//     "Identifier": "kushina-fn-genin",
//     "NinjaName": "kushina"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 800,
//     "Stats": {
//       "Tai": 75,
//       "Nin": 30,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 1.5,
//       "Buki": 1.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "red-hot-temper",
//       "adamantine-sealing-chains",
//       "four-symbols-seal",
//       "kyubis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 421,
//     "Identifier": "kushina-habanero-kage",
//     "NinjaName": "kushina"
//   },
//   {
//     "Summon": true,
//     "Chakra": 40,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Atk": 2,
//       "Ele": 10,
//       "GenAbsorb": 10
//     },
//     "Growth": {
//       "Atk": 2,
//       "Ele": 3,
//       "GenAbsorb": 1
//     },
//     "NinjaID": 357,
//     "Identifier": "life-dragon-summon",
//     "NinjaName": "life-dragon"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 12,
//       "Buki": 4,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3,
//       "Buki": 1.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "cursed-seal-tag",
//       "uchiha-return",
//       "great-fire-annihilation",
//       "perfect-susanoo"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 329,
//     "Identifier": "madara-fn-genin",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 30,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 45,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 4.5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "cursed-seal-tag",
//       "uchiha-return",
//       "great-fire-annihilation",
//       "perfect-susanoo"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 387,
//     "Identifier": "madara-fn-jounin",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 80,
//       "Buki": 25,
//       "Sta": 40,
//       "Ele": 50,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 6,
//       "Buki": 2.5,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "cursed-seal-tag",
//       "uchiha-return",
//       "great-fire-annihilation",
//       "perfect-susanoo"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 403,
//     "Identifier": "madara-fn-kage",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 110,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 2300,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 100,
//       "Buki": 60,
//       "Sta": 45,
//       "Ele": 40,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 7,
//       "Buki": 1.8,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 4.5
//     },
//     "Ability": [
//       "light-fang",
//       "shadow-thunder-blast",
//       "limbo",
//       "divine-genesis"
//     ],
//     "NinjaID": 266,
//     "Identifier": "madara-jinchuriki-kage",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 90,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 2000,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 100,
//       "Buki": 60,
//       "Sta": 45,
//       "Ele": 40,
//       "Gen": 52
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 6,
//       "Buki": 1.6,
//       "Sta": 2.3,
//       "Ele": 2.5,
//       "Gen": 4.2
//     },
//     "Ability": [
//       "cursed-seal-tag",
//       "uchiha-return",
//       "great-fire-annihilation",
//       "perfect-susanoo"
//     ],
//     "NinjaID": 265,
//     "Identifier": "madara-kage",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 130,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 2500,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 140,
//       "Buki": 40,
//       "Sta": 50,
//       "Ele": 45,
//       "Gen": 60
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 7,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 4.7
//     },
//     "Ability": [
//       "light-fang",
//       "shadow-thunder-blast",
//       "limbo",
//       "divine-genesis"
//     ],
//     "NinjaID": 267,
//     "Identifier": "madara-rinne-sharingan-kage",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 100,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 110,
//       "Buki": 60,
//       "Sta": 45,
//       "Ele": 45,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 6,
//       "Buki": 3,
//       "Sta": 3,
//       "Ele": 2.8,
//       "Gen": 3.8
//     },
//     "Ability": [
//       "cursed-seal-tag",
//       "uchiha-return",
//       "great-fire-annihilation",
//       "perfect-susanoo"
//     ],
//     "NinjaID": 489,
//     "Identifier": "madara-susanoo-kage",
//     "NinjaName": "madara"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 300,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 30,
//       "Buki": 18,
//       "Sta": 28,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 316,
//     "Identifier": "maki-jounin",
//     "NinjaName": "maki"
//   },
//   {
//     "Summon": true,
//     "Chakra": 38,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Tai": 4,
//       "Crit": 8,
//       "GenProc": 8
//     },
//     "Growth": {
//       "Tai": 4,
//       "Crit": 1,
//       "GenProc": 1
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnEnter": 1
//             },
//             "Stats": {
//               "Gen": 50
//             },
//             "Overcharge": 0.3
//           }
//         ],
//         "ID": 529,
//         "Identifier": "ryuichis-energy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 370,
//     "Identifier": "manda-ii-summon",
//     "NinjaName": "manda"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 600,
//     "Stats": {
//       "Atk": 9,
//       "Sta": -2,
//       "Ele": -2
//     },
//     "Growth": {
//       "Atk": 3,
//       "Sta": -2,
//       "Ele": -2
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnEnter": 1
//             },
//             "Stats": {
//               "Gen": 50
//             },
//             "Overcharge": 0.3
//           }
//         ],
//         "ID": 529,
//         "Identifier": "ryuichis-energy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 212,
//     "Identifier": "manda-summon",
//     "NinjaName": "manda"
//   },
//   {
//     "Chakra": 44,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 900,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 30,
//       "Buki": 60,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "second-demon"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 352,
//     "Identifier": "mangetsu-edo-jounin",
//     "NinjaName": "mangetsu"
//   },
//   {
//     "Chakra": 34,
//     "Position": 3,
//     "Seal": 6,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 45,
//       "Buki": 85,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "second-demon"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 345,
//     "Identifier": "mangetsu-kage",
//     "NinjaName": "mangetsu"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "Reroll": 0,
//       "Ele": 0
//     },
//     "Growth": {
//       "Reroll": 0.6,
//       "Ele": 1.5
//     },
//     "FixedChakra": true,
//     "NinjaID": 492,
//     "Identifier": "matatabi-fn-summon",
//     "NinjaName": "matatabi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 24,
//     "Position": 4,
//     "Seal": false,
//     "Value": 400,
//     "Stats": {
//       "Nin": 3,
//       "Reroll": 20,
//       "Ele": 10
//     },
//     "Growth": {
//       "Nin": 3,
//       "Reroll": 1,
//       "Ele": 1
//     },
//     "NinjaID": 185,
//     "Identifier": "matatabi-summon",
//     "Combos": [
//       66
//     ],
//     "NinjaName": "matatabi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 16,
//     "Position": 4,
//     "Seal": false,
//     "Value": 300,
//     "Stats": {
//       "Gold": 15
//     },
//     "Growth": {
//       "Gold": 3
//     },
//     "NinjaID": 79,
//     "Identifier": "mechanical-bird-summon",
//     "NinjaName": "mechanical-bird"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 38,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 6.2,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "hidden-mist",
//       "water-wall",
//       "skilled-mist",
//       "melting-apparition"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 459,
//     "Identifier": "mei-fn-jounin",
//     "NinjaName": "mei"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 100,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 45,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 8.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "water-wall",
//       "skilled-mist",
//       "melting-apparition"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 508,
//     "Identifier": "mei-fn-kage",
//     "NinjaName": "mei"
//   },
//   {
//     "Chakra": 52,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 110,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 42,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.7,
//       "Buki": 1.5,
//       "Sta": 1.5,
//       "Ele": 2.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "hidden-mist",
//       "water-wall",
//       "skilled-mist",
//       "melting-apparition"
//     ],
//     "NinjaID": 110,
//     "Identifier": "mei-kage",
//     "NinjaName": "mei"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 8,
//       "Buki": 12,
//       "Sta": 25,
//       "Ele": 17,
//       "Gen": 23
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 1.5,
//       "Buki": 4.2,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "water-hiding",
//       "metal-gauntlets",
//       "poison-kusari"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "meizu-genin",
//     "FixedChakra": true,
//     "NinjaID": 292,
//     "Identifier": "meizu-evolved-genin",
//     "Combos": [
//       10
//     ],
//     "NinjaName": "meizu"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 40,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 8,
//       "Buki": 12,
//       "Sta": 15,
//       "Ele": 7,
//       "Gen": 13
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "water-hiding",
//       "metal-gauntlets",
//       "poison-kusari"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 28,
//       "Teacher": "chukichi-jounin"
//     },
//     "Evolve": "meizu-evolved-genin",
//     "NinjaID": 114,
//     "Identifier": "meizu-genin",
//     "Combos": [
//       10
//     ],
//     "NinjaName": "meizu"
//   },
//   {
//     "Chakra": 36,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 380,
//     "Stats": {
//       "Tai": 27,
//       "Nin": 22,
//       "Buki": 14,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "dark-aura",
//       "repulsion",
//       "rasen-ring",
//       "nine-masked-beasts"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 181,
//     "Identifier": "menma-chunin-genin",
//     "Combos": [
//       74
//     ],
//     "NinjaName": "menma"
//   },
//   {
//     "Chakra": 40,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 450,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 30,
//       "Buki": 20,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "dark-aura",
//       "repulsion",
//       "rasen-ring",
//       "nine-masked-beasts"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 388,
//     "Identifier": "menma-jounin",
//     "Combos": [
//       74
//     ],
//     "NinjaName": "menma"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 50,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 4,
//       "Buki": 15,
//       "Sta": 10,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1.5,
//       "Buki": 2,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 163,
//     "Identifier": "midare-genin",
//     "Combos": [
//       42
//     ],
//     "NinjaName": "midare"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 7,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 20,
//       "Buki": 115,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1,
//       "Buki": 9,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "swordsmanship",
//       "chakra-shockwave-slash",
//       "samurai-sabre",
//       "iaido"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 506,
//     "Identifier": "mifune-fn-kage",
//     "NinjaName": "mifune"
//   },
//   {
//     "Chakra": 60,
//     "Position": 3,
//     "Seal": 4,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 55,
//       "Nin": 55,
//       "Buki": 30,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 111,
//     "Identifier": "mifune-kage",
//     "NinjaName": "mifune"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 7,
//       "Buki": 9,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 3.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "contract-seal",
//       "quick-rasengan",
//       "flying-thunder-god",
//       "nine-tails-chakra-shroud"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 331,
//     "Identifier": "minato-fn-genin",
//     "NinjaName": "minato"
//   },
//   {
//     "Chakra": 90,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 2000,
//     "Stats": {
//       "Tai": 77,
//       "Nin": 77,
//       "Buki": 77,
//       "Sta": 38,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 3.5,
//       "Buki": 3.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "contract-seal",
//       "quick-rasengan",
//       "flying-thunder-god",
//       "nine-tails-chakra-shroud"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 237,
//     "Identifier": "minato-kage",
//     "Combos": [
//       38
//     ],
//     "NinjaName": "minato"
//   },
//   {
//     "Chakra": 38,
//     "Position": 3,
//     "Seal": -1,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 75,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 376,
//     "Identifier": "mizukage-3rd-kage",
//     "NinjaName": "mizukage-3rd"
//   },
//   {
//     "Chakra": 4,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 10,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 4,
//       "Buki": 2,
//       "Sta": 4,
//       "Ele": 4,
//       "Gen": 8,
//       "ItemFind": 15
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1,
//       "Buki": 0.2,
//       "Sta": 0.6,
//       "Ele": 0.6,
//       "Gen": 1.7,
//       "ItemFind": 4
//     },
//     "Ability": [
//       "sexy-technique",
//       "cloak-of-invisibility",
//       "harem-technique",
//       "cheesecake-technique"
//     ],
//     "NinjaID": 38,
//     "Identifier": "moegi-genin",
//     "Combos": [
//       32,
//       33
//     ],
//     "NinjaName": "moegi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 18,
//     "Position": 4,
//     "Seal": false,
//     "Value": 300,
//     "Stats": {
//       "Nin": 2,
//       "Sta": 14
//     },
//     "Growth": {
//       "Nin": 2,
//       "Sta": 3
//     },
//     "NinjaID": 217,
//     "Identifier": "moryo-drakling-summon",
//     "NinjaName": "moryo"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 450,
//     "Stats": {
//       "Nin": 3,
//       "Sta": 3,
//       "Gen": 3
//     },
//     "Growth": {
//       "Nin": 3,
//       "Sta": 3,
//       "Gen": 3
//     },
//     "NinjaID": 216,
//     "Identifier": "moryo-summon",
//     "NinjaName": "moryo"
//   },
//   {
//     "Summon": true,
//     "Chakra": 28,
//     "Position": 4,
//     "Seal": false,
//     "Value": 500,
//     "Stats": {
//       "Buki": 10,
//       "BukiRec": 6,
//       "GenProc": 10
//     },
//     "Growth": {
//       "Buki": 4,
//       "BukiRec": 2,
//       "GenProc": 2
//     },
//     "NinjaID": 368,
//     "Identifier": "mother-puppet-summon",
//     "NinjaName": "mother-puppet"
//   },
//   {
//     "Chakra": 72,
//     "Position": 3,
//     "Seal": -7,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 44,
//       "Nin": 88,
//       "Buki": 33,
//       "Sta": 45,
//       "Ele": 50,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 5.5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 3,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "dustless-bewildering-cover",
//       "fission-technique",
//       "lightweight-rock",
//       "detachment-of-the-primitive-world"
//     ],
//     "NinjaID": 246,
//     "Identifier": "mu-kage",
//     "NinjaName": "mu"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 30,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 13,
//       "Buki": 4,
//       "Sta": 10,
//       "Ele": 8,
//       "Gen": 16
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2.5,
//       "Buki": 1,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1.4
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 159,
//     "Identifier": "mubi-genin",
//     "Combos": [
//       29
//     ],
//     "NinjaName": "mubi"
//   },
//   {
//     "Summon": true,
//     "Chakra": 34,
//     "Position": 4,
//     "Seal": false,
//     "Value": 450,
//     "Stats": {
//       "Buki": 4,
//       "Sta": 3,
//       "Gen": 3
//     },
//     "Growth": {
//       "Buki": 4,
//       "Sta": 3,
//       "Gen": 3
//     },
//     "NinjaID": 397,
//     "Identifier": "mukade-fused-summon",
//     "NinjaName": "mukade-fused"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 30,
//       "Buki": 6,
//       "Sta": 23,
//       "Ele": 27,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.2,
//       "Buki": 0.2,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "rain-tiger",
//       "mirrored-attacker",
//       "six-paths-of-pain",
//       "samsara-of-heavenly-life"
//     ],
//     "Evolved": "nagato-genin",
//     "FixedChakra": true,
//     "NinjaID": 302,
//     "Identifier": "nagato-evolved-genin",
//     "Combos": [
//       11
//     ],
//     "NinjaName": "nagato"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 33,
//       "Buki": 25,
//       "Sta": 25,
//       "Ele": 40,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 6,
//       "Buki": 2.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "rain-tiger",
//       "mirrored-attacker",
//       "six-paths-of-pain",
//       "samsara-of-heavenly-life"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 383,
//     "Identifier": "nagato-fn-jounin",
//     "NinjaName": "nagato"
//   },
//   {
//     "Chakra": 20,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 110,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 30,
//       "Buki": 6,
//       "Sta": 13,
//       "Ele": 17,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 0.2,
//       "Sta": 1,
//       "Ele": 1.5,
//       "Gen": 1
//     },
//     "Ability": [
//       "rain-tiger",
//       "mirrored-attacker",
//       "six-paths-of-pain",
//       "samsara-of-heavenly-life"
//     ],
//     "Starter": {
//       "StatPoints": 6,
//       "Teacher": "gerotora-summon"
//     },
//     "Evolve": "nagato-evolved-genin",
//     "NinjaID": 145,
//     "Identifier": "nagato-genin",
//     "Combos": [
//       11
//     ],
//     "NinjaName": "nagato"
//   },
//   {
//     "Chakra": 66,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1250,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 135,
//       "Buki": 50,
//       "Sta": 30,
//       "Ele": 18,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 6.2,
//       "Buki": 2.5,
//       "Sta": 1.7,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "rain-tiger",
//       "mirrored-attacker",
//       "six-paths-of-pain",
//       "samsara-of-heavenly-life"
//     ],
//     "NinjaID": 150,
//     "Identifier": "nagato-kage",
//     "NinjaName": "nagato"
//   },
//   {
//     "Chakra": 28,
//     "Position": 2,
//     "Seal": 8,
//     "Value": 400,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 15,
//       "Buki": 7,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4.4,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1.8,
//       "Gen": 2
//     },
//     "Ability": [
//       "chakra-arms",
//       "beastly-regeneration",
//       "tailed-beast-shockwave",
//       "tailed-beast-ball"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 317,
//     "Identifier": "naruto-1t-jounin",
//     "Combos": [
//       2,
//       73
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -1,
//     "Value": 600,
//     "Stats": {
//       "Tai": 80,
//       "Nin": 35,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "chakra-arms",
//       "beastly-regeneration",
//       "tailed-beast-shockwave",
//       "tailed-beast-ball"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 239,
//     "Identifier": "naruto-3t-kage",
//     "Combos": [
//       73
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 42,
//     "Position": 3,
//     "Seal": 8,
//     "Value": 900,
//     "Stats": {
//       "Tai": 99,
//       "Nin": 25,
//       "Buki": 10,
//       "Sta": 45,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 6.2,
//       "Nin": 1,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "chakra-arms",
//       "beastly-regeneration",
//       "tailed-beast-shockwave",
//       "tailed-beast-ball"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 240,
//     "Identifier": "naruto-4t-kage",
//     "Combos": [
//       73
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 82,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 130,
//       "Nin": 50,
//       "Buki": 10,
//       "Sta": 60,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 7,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-arms",
//       "beastly-regeneration",
//       "tailed-beast-shockwave",
//       "tailed-beast-ball"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 241,
//     "Identifier": "naruto-6t-kage",
//     "Combos": [
//       73
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 350,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 18,
//       "Buki": 15,
//       "Sta": 33,
//       "Ele": 20,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "sexy-technique",
//       "shadow-shuriken",
//       "shadow-clone-naruto",
//       "rasengan"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 54,
//     "Identifier": "naruto-chunin-genin",
//     "Combos": [
//       3,
//       73,
//       56,
//       38
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 10,
//       "Buki": 4,
//       "Sta": 30,
//       "Ele": 18,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1.7,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "sexy-technique",
//       "shadow-shuriken",
//       "shadow-clone-naruto",
//       "rasengan"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "naruto-genin",
//     "FixedChakra": true,
//     "NinjaID": 277,
//     "Identifier": "naruto-evolved-genin",
//     "Combos": [
//       73,
//       56,
//       1
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 17,
//       "Nin": 3,
//       "Buki": 3,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "sexy-technique",
//       "shadow-shuriken",
//       "shadow-clone-naruto",
//       "rasengan"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 16,
//     "Identifier": "naruto-fn-genin",
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 15,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 6,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "chakra-arms",
//       "beastly-regeneration",
//       "tailed-beast-shockwave",
//       "tailed-beast-ball"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 414,
//     "Identifier": "naruto-fn-jounin",
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 1,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 60,
//       "Buki": 40,
//       "Sta": 40,
//       "Ele": 35,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 4,
//       "Buki": 2,
//       "Sta": 2.5,
//       "Ele": 2.3,
//       "Gen": 3
//     },
//     "Ability": [
//       "new-sexy-technique",
//       "frog-kata",
//       "rasenshuriken",
//       "six-paths-sage-mode"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 518,
//     "Identifier": "naruto-fn-kage",
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 70,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 10,
//       "Buki": 4,
//       "Sta": 20,
//       "Ele": 8,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 1.7,
//       "Buki": 0.5,
//       "Sta": 2,
//       "Ele": 0.5,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "sexy-technique",
//       "shadow-shuriken",
//       "shadow-clone-naruto",
//       "rasengan"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "kakashi-jounin"
//     },
//     "Evolve": "naruto-evolved-genin",
//     "NinjaID": 132,
//     "Identifier": "naruto-genin",
//     "Combos": [
//       73,
//       19,
//       56,
//       1
//     ],
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 500,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 15,
//       "Buki": 10,
//       "Sta": 27,
//       "Ele": 15,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 2.2,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "sexy-technique",
//       "shadow-shuriken",
//       "shadow-clone-naruto",
//       "rasengan"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 483,
//     "Identifier": "naruto-jinchuriki-genin",
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 44,
//     "Position": 2,
//     "Seal": 1,
//     "Value": 500,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 35,
//       "Buki": 20,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2.5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "sexy-technique",
//       "shadow-shuriken",
//       "shadow-clone-naruto",
//       "rasengan"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 392,
//     "Identifier": "naruto-wind-jounin",
//     "NinjaName": "naruto"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 4,
//     "Value": 350,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 20,
//       "Buki": 12,
//       "Sta": 28,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2.5,
//       "Buki": 1,
//       "Sta": 2.2,
//       "Ele": 1.8,
//       "Gen": 3
//     },
//     "Ability": [
//       "gentle-fist",
//       "body-blow",
//       "vacuum-palm",
//       "eight-trigrams"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 64,
//     "Identifier": "neji-chunin-genin",
//     "Combos": [
//       50
//     ],
//     "NinjaName": "neji"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 13,
//       "Nin": 14,
//       "Buki": 6,
//       "Sta": 28,
//       "Ele": 23,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 2.6,
//       "Nin": 2,
//       "Buki": 0.8,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "gentle-fist",
//       "body-blow",
//       "vacuum-palm",
//       "eight-trigrams"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "neji-genin",
//     "FixedChakra": true,
//     "NinjaID": 271,
//     "Identifier": "neji-evolved-genin",
//     "Combos": [
//       23,
//       14,
//       13
//     ],
//     "NinjaName": "neji"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 3,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 9,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2.5,
//       "Buki": 1.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "gentle-fist",
//       "body-blow",
//       "vacuum-palm",
//       "eight-trigrams"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 438,
//     "Identifier": "neji-fn-genin",
//     "NinjaName": "neji"
//   },
//   {
//     "Chakra": 16,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 80,
//     "Stats": {
//       "Tai": 13,
//       "Nin": 14,
//       "Buki": 6,
//       "Sta": 18,
//       "Ele": 13,
//       "Gen": 8
//     },
//     "Growth": {
//       "Tai": 2.4,
//       "Nin": 2,
//       "Buki": 0.8,
//       "Sta": 1.8,
//       "Ele": 1,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "gentle-fist",
//       "body-blow",
//       "vacuum-palm",
//       "eight-trigrams"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 16,
//       "Teacher": "guy-jounin"
//     },
//     "Evolve": "neji-evolved-genin",
//     "NinjaID": 141,
//     "Identifier": "neji-genin",
//     "Combos": [
//       23,
//       14,
//       13
//     ],
//     "NinjaName": "neji"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 32,
//       "Nin": 1,
//       "Buki": 25,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 4.8,
//       "Nin": 0.1,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 462,
//     "Identifier": "nekomata-fn-jounin",
//     "NinjaName": "nekomata"
//   },
//   {
//     "Chakra": 50,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 75,
//       "Nin": 1,
//       "Buki": 70,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 4.8,
//       "Nin": 0.1,
//       "Buki": 4,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "CritChance": 25
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 175,
//     "Identifier": "nekomata-kage",
//     "NinjaName": "nekomata"
//   },
//   {
//     "Summon": true,
//     "Chakra": 16,
//     "Position": 4,
//     "Seal": false,
//     "Value": 300,
//     "Stats": {
//       "ItemFind": 50
//     },
//     "Growth": {
//       "ItemFind": 15
//     },
//     "NinjaID": 81,
//     "Identifier": "ninja-dogs-summon",
//     "NinjaName": "ninja-dogs"
//   },
//   {
//     "Summon": true,
//     "Chakra": 14,
//     "Position": 4,
//     "Seal": false,
//     "Value": 230,
//     "Stats": {
//       "Tai": 3,
//       "Sta": 10
//     },
//     "Growth": {
//       "Tai": 3,
//       "Sta": 1
//     },
//     "NinjaID": 193,
//     "Identifier": "ninkame-summon",
//     "NinjaName": "ninkame"
//   },
//   {
//     "Chakra": 16,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 200,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 35,
//       "Buki": 14,
//       "Sta": 20,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 49,
//     "Identifier": "nono-jounin",
//     "NinjaName": "nono"
//   },
//   {
//     "Chakra": 56,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 550,
//     "Stats": {
//       "Tai": 55,
//       "Nin": 10,
//       "Buki": 40,
//       "Sta": 40,
//       "Ele": 25,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 2,
//       "Buki": 1.5,
//       "Sta": 2.1,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "tail-releasing-method",
//       "demonic-statue-chains",
//       "underground-roots",
//       "ten-tails-coffin-seal"
//     ],
//     "NinjaID": 326,
//     "Identifier": "obito-cracked-jounin",
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 14,
//       "Buki": 3,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 2.6,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2.2,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "cutting-sprigs",
//       "uchiha-return",
//       "underground-roots",
//       "kamui"
//     ],
//     "Evolved": "obito-genin",
//     "FixedChakra": true,
//     "NinjaID": 309,
//     "Identifier": "obito-evolved-genin",
//     "Combos": [
//       27
//     ],
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 8,
//       "Buki": 1,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 2.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "cutting-sprigs",
//       "uchiha-return",
//       "underground-roots",
//       "kamui"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 336,
//     "Identifier": "obito-fn-genin",
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 20,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 3.3,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "tail-releasing-method",
//       "demonic-statue-chains",
//       "god-tree-dragon",
//       "ten-tails-coffin-seal"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 464,
//     "Identifier": "obito-fn-jounin",
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 70,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 14,
//       "Buki": 3,
//       "Sta": 15,
//       "Ele": 15,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 1.3,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "cutting-sprigs",
//       "uchiha-return",
//       "underground-roots",
//       "kamui"
//     ],
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "yamato-jounin"
//     },
//     "Evolve": "obito-evolved-genin",
//     "NinjaID": 45,
//     "Identifier": "obito-genin",
//     "Combos": [
//       27
//     ],
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 110,
//     "Position": 3,
//     "Seal": -3,
//     "Value": 2300,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 80,
//       "Buki": 110,
//       "Sta": 50,
//       "Ele": 35,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 5.3,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 4
//     },
//     "Ability": [
//       "tail-releasing-method",
//       "demonic-statue-chains",
//       "six-red-yang-formation",
//       "ten-tails-coffin-seal"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 270,
//     "Identifier": "obito-jinchuriki-kage",
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 100,
//     "Position": 3,
//     "Seal": -6,
//     "Value": 2200,
//     "Stats": {
//       "Tai": 120,
//       "Nin": 40,
//       "Buki": 60,
//       "Sta": 40,
//       "Ele": 40,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 6.6,
//       "Nin": 2,
//       "Buki": 2,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "tail-releasing-method",
//       "demonic-statue-chains",
//       "god-tree-dragon",
//       "ten-tails-coffin-seal"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 269,
//     "Identifier": "obito-jinchuriki-unstable-kage",
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 82,
//     "Position": 3,
//     "Seal": -6,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 85,
//       "Nin": 70,
//       "Buki": 40,
//       "Sta": 40,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "tail-releasing-method",
//       "demonic-statue-chains",
//       "god-tree-dragon",
//       "ten-tails-coffin-seal"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 261,
//     "Identifier": "obito-mask-kage",
//     "NinjaName": "obito"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -8,
//     "Value": 200,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 12,
//       "Buki": 5,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1.8,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "Evolved": "oboro-genin",
//     "FixedChakra": true,
//     "NinjaID": 305,
//     "Identifier": "oboro-evolved-genin",
//     "Combos": [
//       29
//     ],
//     "NinjaName": "oboro"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -8,
//     "Value": 40,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 12,
//       "Buki": 5,
//       "Sta": 15,
//       "Ele": 13,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 1.3,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "Starter": {
//       "StatPoints": 30,
//       "Teacher": "aoi-jounin"
//     },
//     "Evolve": "oboro-evolved-genin",
//     "NinjaID": 158,
//     "Identifier": "oboro-genin",
//     "Combos": [
//       29
//     ],
//     "NinjaName": "oboro"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 8,
//       "Buki": 21,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 22
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1,
//       "Buki": 4.3,
//       "Sta": 2,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "swordsmanship",
//       "thunderbolt",
//       "crescent-moon-slice",
//       "deception-slice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "omoi-genin",
//     "FixedChakra": true,
//     "NinjaID": 286,
//     "Identifier": "omoi-evolved-genin",
//     "Combos": [
//       6
//     ],
//     "NinjaName": "omoi"
//   },
//   {
//     "Chakra": 18,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 90,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 8,
//       "Buki": 21,
//       "Sta": 15,
//       "Ele": 15,
//       "Gen": 12
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1,
//       "Buki": 4,
//       "Sta": 1.5,
//       "Ele": 1.3,
//       "Gen": 1
//     },
//     "Ability": [
//       "swordsmanship",
//       "thunderbolt",
//       "crescent-moon-slice",
//       "deception-slice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 14,
//       "Teacher": "darui-jounin"
//     },
//     "Evolve": "omoi-evolved-genin",
//     "NinjaID": 31,
//     "Identifier": "omoi-genin",
//     "Combos": [
//       6
//     ],
//     "NinjaName": "omoi"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 45,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 50,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 6.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "earth-golem",
//       "moving-earth-core",
//       "added-weight-rock",
//       "detachment-of-the-primitive-world"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 458,
//     "Identifier": "onoki-fn-jounin",
//     "NinjaName": "onoki"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 130,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 50,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 9,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "earth-golem",
//       "moving-earth-core",
//       "added-weight-rock",
//       "detachment-of-the-primitive-world"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 511,
//     "Identifier": "onoki-fn-kage",
//     "NinjaName": "onoki"
//   },
//   {
//     "Chakra": 62,
//     "Position": 3,
//     "Seal": -2,
//     "Value": 1300,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 115,
//       "Buki": 10,
//       "Sta": 28,
//       "Ele": 36,
//       "Gen": 24
//     },
//     "Growth": {
//       "Tai": 1.4,
//       "Nin": 6,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 2.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "earth-golem",
//       "moving-earth-core",
//       "added-weight-rock",
//       "detachment-of-the-primitive-world"
//     ],
//     "NinjaID": 130,
//     "Identifier": "onoki-kage",
//     "Combos": [
//       60
//     ],
//     "NinjaName": "onoki"
//   },
//   {
//     "Chakra": 36,
//     "Position": 1,
//     "Seal": -3,
//     "Value": 380,
//     "Stats": {
//       "Tai": 9,
//       "Nin": 45,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 0.5,
//       "Sta": 2.4,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "NinjaID": 53,
//     "Identifier": "orochimaru-chunin-genin",
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 15,
//       "Buki": 2,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.6,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 334,
//     "Identifier": "orochimaru-fn-genin",
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 40,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 6.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 382,
//     "Identifier": "orochimaru-fn-jounin",
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 110,
//       "Buki": 40,
//       "Sta": 40,
//       "Ele": 35,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 8.5,
//       "Buki": 2,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 514,
//     "Identifier": "orochimaru-fn-kage",
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 52,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1200,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 96,
//       "Buki": 30,
//       "Sta": 38,
//       "Ele": 25,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5.6,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.6
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "NinjaID": 95,
//     "Identifier": "orochimaru-kage",
//     "Combos": [
//       59,
//       40,
//       58
//     ],
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 76,
//     "Position": 3,
//     "Seal": -5,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 120,
//       "Buki": 25,
//       "Sta": 45,
//       "Ele": 25,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 6.5,
//       "Buki": 1.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 3.2
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "NinjaID": 245,
//     "Identifier": "orochimaru-snake-kage",
//     "Combos": [
//       58
//     ],
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 28,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 400,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 30,
//       "Buki": 40,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3,
//       "Buki": 3.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "snake-clone",
//       "five-elements-seal",
//       "hidden-shadow-snakes",
//       "summoning-snakes",
//       "living-corpse-reincarnation"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 505,
//     "Identifier": "orochimaru-sound-jounin",
//     "NinjaName": "orochimaru"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 600,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 60,
//       "Buki": 10,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 6,
//       "Buki": 0,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "path-vision",
//       "path-piercings",
//       "summoning-giant-beast",
//       "animal-realm"
//     ],
//     "NinjaID": 423,
//     "Identifier": "pain-animal-jounin",
//     "NinjaName": "pain-animal"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 600,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 10,
//       "Buki": 60,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1,
//       "Buki": 5.5,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "path-vision",
//       "path-piercings",
//       "arm-cannon",
//       "demon-realm"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 424,
//     "Identifier": "pain-asura-jounin",
//     "NinjaName": "pain-asura"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 27,
//       "Nin": 27,
//       "Buki": 5,
//       "Sta": 35,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "gale-palm",
//       "shinra-tensei",
//       "bansho-tenin",
//       "chibaku-tensei"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 15,
//     "Identifier": "pain-deva-fn-jounin",
//     "NinjaName": "pain-deva"
//   },
//   {
//     "Chakra": 52,
//     "Position": 2,
//     "Seal": 8,
//     "Value": 550,
//     "Stats": {
//       "Tai": 37,
//       "Nin": 37,
//       "Buki": 25,
//       "Sta": 40,
//       "Ele": 30,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "gale-palm",
//       "shinra-tensei",
//       "bansho-tenin",
//       "chibaku-tensei"
//     ],
//     "NinjaID": 84,
//     "Identifier": "pain-deva-jounin",
//     "Combos": [
//       55
//     ],
//     "NinjaName": "pain-deva"
//   },
//   {
//     "Chakra": 76,
//     "Position": 3,
//     "Seal": 6,
//     "Value": 1600,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 80,
//       "Buki": 50,
//       "Sta": 40,
//       "Ele": 35,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2.2,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "gale-palm",
//       "shinra-tensei",
//       "bansho-tenin",
//       "chibaku-tensei"
//     ],
//     "NinjaID": 249,
//     "Identifier": "pain-deva-kage",
//     "Combos": [
//       55
//     ],
//     "NinjaName": "pain-deva"
//   },
//   {
//     "Chakra": 68,
//     "Position": 3,
//     "Seal": 6,
//     "Value": 1600,
//     "Stats": {
//       "Tai": 80,
//       "Nin": 80,
//       "Buki": 25,
//       "Sta": 45,
//       "Ele": 35,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2.2,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "gale-palm",
//       "shinra-tensei",
//       "bansho-tenin",
//       "chibaku-tensei"
//     ],
//     "NinjaID": 416,
//     "Identifier": "pain-deva-seals-kage",
//     "NinjaName": "pain-deva"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 600,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 45,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 5,
//       "Buki": 0,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "path-vision",
//       "path-piercings",
//       "mind-read",
//       "human-realm"
//     ],
//     "NinjaID": 425,
//     "Identifier": "pain-human-jounin",
//     "NinjaName": "pain-human"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 600,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 35,
//       "Buki": 10,
//       "Sta": 35,
//       "Ele": 15,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 3.5,
//       "Buki": 0,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "path-vision",
//       "path-piercings",
//       "paralyzing-grip",
//       "hell-realm"
//     ],
//     "NinjaID": 428,
//     "Identifier": "pain-naraka-jounin",
//     "NinjaName": "pain-naraka"
//   },
//   {
//     "Chakra": 30,
//     "Position": 2,
//     "Seal": -3,
//     "Value": 600,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 25,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 2,
//       "Buki": 0,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "path-vision",
//       "path-piercings",
//       "physical-barrier",
//       "ghost-realm"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 427,
//     "Identifier": "pain-preta-jounin",
//     "NinjaName": "pain-preta"
//   },
//   {
//     "Summon": true,
//     "Chakra": 16,
//     "Position": 4,
//     "Seal": false,
//     "Value": 300,
//     "Stats": {
//       "Exp": 15
//     },
//     "Growth": {
//       "Exp": 2
//     },
//     "NinjaID": 85,
//     "Identifier": "pakkun-summon",
//     "NinjaName": "pakkun"
//   },
//   {
//     "Chakra": 40,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 420,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 50,
//       "Buki": 40,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2.8,
//       "Gen": 2
//     },
//     "Ability": [
//       "reanimated",
//       "scorched-chakra",
//       "mummifying-flames",
//       "super-steam-kill"
//     ],
//     "NinjaID": 320,
//     "Identifier": "pakura-jounin",
//     "NinjaName": "pakura"
//   },
//   {
//     "Summon": true,
//     "Chakra": 38,
//     "Position": 4,
//     "Seal": false,
//     "Value": 850,
//     "Stats": {
//       "Nin": 3,
//       "Reroll": 3,
//       "Sta": 3
//     },
//     "Growth": {
//       "Nin": 3,
//       "Reroll": 3,
//       "Sta": 1
//     },
//     "NinjaID": 223,
//     "Identifier": "phantom-dragon-summon",
//     "NinjaName": "phantom-dragon"
//   },
//   {
//     "Summon": true,
//     "Chakra": 16,
//     "Position": 4,
//     "Seal": false,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "BukiRec": 10
//     },
//     "Growth": {
//       "Tai": 2,
//       "BukiRec": 1
//     },
//     "Teacher": true,
//     "NinjaID": 34,
//     "Identifier": "ponta-summon",
//     "Combos": [
//       77
//     ],
//     "NinjaName": "ponta"
//   },
//   {
//     "Chakra": 28,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 55,
//       "Buki": 40,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 2.2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "hidden-mist",
//       "bloody-instincts",
//       "kenjutsu-mastery",
//       "lightning-fangs"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 339,
//     "Identifier": "raiga-kage",
//     "NinjaName": "raiga"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 6,
//     "Value": 800,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 70,
//       "Buki": 20,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 378,
//     "Identifier": "raikage-1st-kage",
//     "NinjaName": "raikage-1st"
//   },
//   {
//     "Chakra": 34,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 900,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 30,
//       "Buki": 20,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 2.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 379,
//     "Identifier": "raikage-2nd-kage",
//     "NinjaName": "raikage-2nd"
//   },
//   {
//     "Chakra": 74,
//     "Position": 3,
//     "Seal": 7,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 113,
//       "Nin": 37,
//       "Buki": 12,
//       "Sta": 50,
//       "Ele": 37,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 6.5,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 2.2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "lightning-straight",
//       "black-lightning",
//       "hell-stab",
//       "cloak-of-lightning-3rd"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 248,
//     "Identifier": "raikage-3rd-kage",
//     "NinjaName": "raikage-3rd"
//   },
//   {
//     "Chakra": 70,
//     "Position": 3,
//     "Seal": -3,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 47,
//       "Nin": 90,
//       "Buki": 22,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 5,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "third-eye",
//       "water-blade",
//       "golden-sand",
//       "gold-sand-waterfall"
//     ],
//     "NinjaID": 151,
//     "Identifier": "rasa-kage",
//     "NinjaName": "rasa"
//   },
//   {
//     "Summon": true,
//     "Chakra": 22,
//     "Position": 4,
//     "Seal": false,
//     "Value": 280,
//     "Stats": {
//       "Buki": 4,
//       "Exp": 15
//     },
//     "Growth": {
//       "Buki": 4,
//       "Exp": 0
//     },
//     "NinjaID": 201,
//     "Identifier": "rashomon-summon",
//     "NinjaName": "rashomon"
//   },
//   {
//     "Summon": true,
//     "Chakra": 16,
//     "Position": 4,
//     "Seal": false,
//     "Value": 150,
//     "Stats": {
//       "Atk": 3,
//       "Gen": 7
//     },
//     "Growth": {
//       "Atk": 1,
//       "Gen": 1
//     },
//     "NinjaID": 43,
//     "Identifier": "reibi-summon",
//     "Combos": [
//       28
//     ],
//     "NinjaName": "reibi"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -3,
//     "Value": 800,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 40,
//       "Buki": 25,
//       "Sta": 35,
//       "Ele": 25,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 1.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 372,
//     "Identifier": "reto-kage",
//     "NinjaName": "reto"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 19,
//       "Buki": 5,
//       "Sta": 21,
//       "Ele": 24,
//       "Gen": 23
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "mystical-palm",
//       "honorable-sacrifice",
//       "medical-prodigy",
//       "sanbis-jinchuriki"
//     ],
//     "Evolved": "rin-genin",
//     "FixedChakra": true,
//     "NinjaID": 308,
//     "Identifier": "rin-evolved-genin",
//     "Combos": [
//       67,
//       27
//     ],
//     "NinjaName": "rin"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 1,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 13,
//       "Buki": 4,
//       "Sta": 35,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "mystical-palm",
//       "honorable-sacrifice",
//       "medical-prodigy",
//       "sanbis-jinchuriki"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 440,
//     "Identifier": "rin-fn-genin",
//     "NinjaName": "rin"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 60,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 19,
//       "Buki": 5,
//       "Sta": 18,
//       "Ele": 8,
//       "Gen": 7
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "mystical-palm",
//       "honorable-sacrifice",
//       "medical-prodigy",
//       "sanbis-jinchuriki"
//     ],
//     "Starter": {
//       "StatPoints": 20,
//       "Teacher": "yamato-jounin"
//     },
//     "Evolve": "rin-evolved-genin",
//     "NinjaID": 46,
//     "Identifier": "rin-genin",
//     "Combos": [
//       67,
//       27
//     ],
//     "NinjaName": "rin"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 7,
//     "Value": 350,
//     "Stats": {
//       "Tai": 53,
//       "Nin": 3,
//       "Buki": 6,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 0.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "leaf-whirlwind",
//       "drunken-fist",
//       "front-lotus",
//       "reverse-lotus"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 63,
//     "Identifier": "rock-lee-chunin-genin",
//     "NinjaName": "rock-lee"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": -9,
//     "Value": 240,
//     "Stats": {
//       "Tai": 60,
//       "Nin": 5,
//       "Buki": 12,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 5.3,
//       "Nin": 0.5,
//       "Buki": 0.3,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "leaf-whirlwind",
//       "drunken-fist",
//       "front-lotus",
//       "reverse-lotus"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 315,
//     "Identifier": "rock-lee-drunk-jounin",
//     "NinjaName": "rock-lee"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 1,
//       "Buki": 7,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 4.3,
//       "Nin": 0.1,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "leaf-whirlwind",
//       "drunken-fist",
//       "front-lotus",
//       "reverse-lotus"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "rock-lee-genin",
//     "FixedChakra": true,
//     "NinjaID": 272,
//     "Identifier": "rock-lee-evolved-genin",
//     "Combos": [
//       13
//     ],
//     "NinjaName": "rock-lee"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 2,
//       "Buki": 2,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5.2,
//       "Nin": 0.5,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "leaf-whirlwind",
//       "drunken-fist",
//       "front-lotus",
//       "reverse-lotus"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 394,
//     "Identifier": "rock-lee-fn-genin",
//     "NinjaName": "rock-lee"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 41,
//       "Nin": 10,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 6.5,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "leaf-whirlwind",
//       "drunken-fist",
//       "front-lotus",
//       "reverse-lotus"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 395,
//     "Identifier": "rock-lee-fn-jounin",
//     "NinjaName": "rock-lee"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 70,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 1,
//       "Buki": 7,
//       "Sta": 20,
//       "Ele": 5,
//       "Gen": 5
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 0.1,
//       "Buki": 1,
//       "Sta": 1.8,
//       "Ele": 0.5,
//       "Gen": 0.5
//     },
//     "Ability": [
//       "leaf-whirlwind",
//       "drunken-fist",
//       "front-lotus",
//       "reverse-lotus"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 16,
//       "Teacher": "guy-jounin"
//     },
//     "Evolve": "rock-lee-evolved-genin",
//     "NinjaID": 142,
//     "Identifier": "rock-lee-genin",
//     "Combos": [
//       13
//     ],
//     "NinjaName": "rock-lee"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 500,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 20,
//       "Buki": 7,
//       "Sta": 25,
//       "Ele": 28,
//       "Gen": 19
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 3.3,
//       "Buki": 0.5,
//       "Sta": 2.4,
//       "Ele": 2.3,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "monkey-flames",
//       "scorching-rocks",
//       "lava-chakra-mode",
//       "yonbis-jinchuriki"
//     ],
//     "NinjaID": 478,
//     "Identifier": "roshi-jinchuriki-genin",
//     "NinjaName": "roshi"
//   },
//   {
//     "Chakra": 34,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 350,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 35,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2.8,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "monkey-flames",
//       "scorching-rocks",
//       "lava-chakra-mode",
//       "yonbis-jinchuriki"
//     ],
//     "NinjaID": 76,
//     "Identifier": "roshi-jounin",
//     "Combos": [
//       68
//     ],
//     "NinjaName": "roshi"
//   },
//   {
//     "Chakra": 50,
//     "Position": 3,
//     "Seal": 2,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 85,
//       "Buki": 15,
//       "Sta": 40,
//       "Ele": 40,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3.3,
//       "Nin": 4.5,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2.3,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "monkey-flames",
//       "scorching-rocks",
//       "lava-chakra-mode",
//       "tailed-beast-bomb",
//       "yonbis-jinchuriki"
//     ],
//     "NinjaID": 470,
//     "Identifier": "roshi-tailed-kage",
//     "NinjaName": "roshi"
//   },
//   {
//     "Chakra": 32,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 400,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 30,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3.5,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "demon-lantern",
//       "dragon-life-reincarnation"
//     ],
//     "NinjaID": 390,
//     "Identifier": "ryuzetsu-dragon-jounin",
//     "NinjaName": "ryuzetsu"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 350,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 30,
//       "Buki": 20,
//       "Sta": 25,
//       "Ele": 15,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 1,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "demon-lantern",
//       "dragon-life-reincarnation"
//     ],
//     "NinjaID": 389,
//     "Identifier": "ryuzetsu-jounin",
//     "NinjaName": "ryuzetsu"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 17,
//       "Buki": 11,
//       "Sta": 28,
//       "Ele": 20,
//       "Gen": 27
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2.4,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "ink-clone",
//       "ink-mist",
//       "crouched-tiger-bullet",
//       "super-beast-scroll"
//     ],
//     "Evolved": "sai-genin",
//     "FixedChakra": true,
//     "NinjaID": 312,
//     "Identifier": "sai-evolved-genin",
//     "Combos": [
//       76
//     ],
//     "NinjaName": "sai"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 10,
//       "Buki": 6,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4,
//       "Buki": 1.3,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "ink-clone",
//       "ink-mist",
//       "crouched-tiger-bullet",
//       "super-beast-scroll"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 439,
//     "Identifier": "sai-fn-genin",
//     "NinjaName": "sai"
//   },
//   {
//     "Chakra": 16,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 80,
//     "Stats": {
//       "Tai": 11,
//       "Nin": 11,
//       "Buki": 11,
//       "Sta": 18,
//       "Ele": 10,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3.5,
//       "Buki": 1,
//       "Sta": 1.9,
//       "Ele": 1.5,
//       "Gen": 1
//     },
//     "Ability": [
//       "ink-clone",
//       "ink-mist",
//       "crouched-tiger-bullet",
//       "super-beast-scroll"
//     ],
//     "Starter": {
//       "StatPoints": 16,
//       "Teacher": "shin-jounin"
//     },
//     "Evolve": "sai-evolved-genin",
//     "NinjaID": 17,
//     "Identifier": "sai-genin",
//     "Combos": [
//       76
//     ],
//     "NinjaName": "sai"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "Gen": 0,
//       "GenProc": 0
//     },
//     "Growth": {
//       "Gen": 1,
//       "GenProc": 0.8
//     },
//     "FixedChakra": true,
//     "NinjaID": 496,
//     "Identifier": "saiken-fn-summon",
//     "NinjaName": "saiken"
//   },
//   {
//     "Summon": true,
//     "Chakra": 32,
//     "Position": 4,
//     "Seal": false,
//     "Value": 500,
//     "Stats": {
//       "Gen": 15,
//       "GenProc": 20,
//       "End": 15
//     },
//     "Growth": {
//       "Gen": 3,
//       "GenProc": 3,
//       "End": 2
//     },
//     "NinjaID": 189,
//     "Identifier": "saiken-summon",
//     "Combos": [
//       70
//     ],
//     "NinjaName": "saiken"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 17,
//       "Buki": 5,
//       "Sta": 31,
//       "Ele": 17,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2.7,
//       "Nin": 2.3,
//       "Buki": 0.3,
//       "Sta": 2.6,
//       "Ele": 1.2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "black-seal",
//       "summoning-rashomon",
//       "twin-demon"
//     ],
//     "Evolved": "sakon-genin",
//     "FixedChakra": true,
//     "NinjaID": 298,
//     "Identifier": "sakon-evolved-genin",
//     "Combos": [
//       46,
//       26
//     ],
//     "NinjaName": "sakon"
//   },
//   {
//     "Chakra": 16,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 80,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 17,
//       "Buki": 5,
//       "Sta": 21,
//       "Ele": 7,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2.3,
//       "Buki": 0.3,
//       "Sta": 2.1,
//       "Ele": 0.7,
//       "Gen": 1
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "black-seal",
//       "summoning-rashomon",
//       "twin-demon"
//     ],
//     "Starter": {
//       "StatPoints": 12,
//       "Teacher": "kimimaro-jounin"
//     },
//     "Evolve": "sakon-evolved-genin",
//     "NinjaID": 123,
//     "Identifier": "sakon-genin",
//     "Combos": [
//       46,
//       26
//     ],
//     "NinjaName": "sakon"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 300,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 35,
//       "Buki": 5,
//       "Sta": 55,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "black-seal",
//       "summoning-rashomon",
//       "twin-demon"
//     ],
//     "NinjaID": 504,
//     "Identifier": "sakon-hatred-jounin",
//     "NinjaName": "sakon"
//   },
//   {
//     "Chakra": 12,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 150,
//     "Stats": {
//       "Tai": 29,
//       "Nin": 15,
//       "Buki": 10,
//       "Sta": 20,
//       "Ele": 15,
//       "Gen": 12
//     },
//     "Growth": {
//       "Tai": 2.8,
//       "Nin": 2,
//       "Buki": 0.2,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.2
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "black-seal",
//       "summoning-rashomon",
//       "twin-demon"
//     ],
//     "NinjaID": 124,
//     "Identifier": "sakon-jounin",
//     "Combos": [
//       48,
//       46
//     ],
//     "NinjaName": "sakon"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 20,
//       "Buki": 30,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2.7,
//       "Nin": 2.7,
//       "Buki": 4,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "chakra-control",
//       "survivor-of-war",
//       "bukijutsu-mastery",
//       "white-fang"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 461,
//     "Identifier": "sakumo-fn-jounin",
//     "NinjaName": "sakumo"
//   },
//   {
//     "Chakra": 58,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 55,
//       "Buki": 60,
//       "Sta": 30,
//       "Ele": 33,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 3,
//       "Buki": 3.5,
//       "Sta": 2,
//       "Ele": 1.8,
//       "Gen": 2
//     },
//     "Ability": [
//       "chakra-control",
//       "survivor-of-war",
//       "bukijutsu-mastery",
//       "white-fang"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 107,
//     "Identifier": "sakumo-kage",
//     "NinjaName": "sakumo"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 350,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 15,
//       "Buki": 6,
//       "Sta": 23,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 4.4,
//       "Nin": 1.5,
//       "Buki": 0.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "enhanced-strength",
//       "illness-extraction",
//       "cherry-blossom-impact",
//       "reserve-seal-sakura"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 56,
//     "Identifier": "sakura-chunin-genin",
//     "NinjaName": "sakura"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 7,
//     "Value": 200,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 8,
//       "Buki": 3,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "enhanced-strength",
//       "illness-extraction",
//       "cherry-blossom-impact",
//       "reserve-seal-sakura"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Evolved": "sakura-genin",
//     "FixedChakra": true,
//     "NinjaID": 279,
//     "Identifier": "sakura-evolved-genin",
//     "Combos": [
//       1
//     ],
//     "NinjaName": "sakura"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -3,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 9,
//       "Buki": 4,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.2,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "enhanced-strength",
//       "illness-extraction",
//       "cherry-blossom-impact",
//       "reserve-seal-sakura"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 442,
//     "Identifier": "sakura-fn-genin",
//     "NinjaName": "sakura"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 15,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 6,
//       "Nin": 1.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "enhanced-strength",
//       "illness-extraction",
//       "cherry-blossom-impact",
//       "reserve-seal-sakura"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 384,
//     "Identifier": "sakura-fn-jounin",
//     "NinjaName": "sakura"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 7,
//     "Value": 50,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 8,
//       "Buki": 3,
//       "Sta": 10,
//       "Ele": 10,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 2.8,
//       "Nin": 1,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "enhanced-strength",
//       "illness-extraction",
//       "cherry-blossom-impact",
//       "reserve-seal-sakura"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 24,
//       "Teacher": "kakashi-jounin"
//     },
//     "Evolve": "sakura-evolved-genin",
//     "NinjaID": 134,
//     "Identifier": "sakura-genin",
//     "Combos": [
//       1
//     ],
//     "NinjaName": "sakura"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 3,
//     "Value": 200,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 9,
//       "Buki": 18,
//       "Sta": 30,
//       "Ele": 15,
//       "Gen": 24
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1,
//       "Buki": 3,
//       "Sta": 2.5,
//       "Ele": 1,
//       "Gen": 3
//     },
//     "Ability": [
//       "swordsmanship",
//       "thunderbolt",
//       "crescent-moon-slice",
//       "deception-slice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "samui-genin",
//     "FixedChakra": true,
//     "NinjaID": 287,
//     "Identifier": "samui-evolved-genin",
//     "Combos": [
//       6
//     ],
//     "NinjaName": "samui"
//   },
//   {
//     "Chakra": 18,
//     "Position": 1,
//     "Seal": 3,
//     "Value": 90,
//     "Stats": {
//       "Tai": 12,
//       "Nin": 9,
//       "Buki": 18,
//       "Sta": 20,
//       "Ele": 5,
//       "Gen": 14
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1,
//       "Buki": 2.7,
//       "Sta": 2,
//       "Ele": 0.5,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "swordsmanship",
//       "thunderbolt",
//       "crescent-moon-slice",
//       "deception-slice"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 12,
//       "Teacher": "darui-jounin"
//     },
//     "Evolve": "samui-evolved-genin",
//     "NinjaID": 30,
//     "Identifier": "samui-genin",
//     "Combos": [
//       6
//     ],
//     "NinjaName": "samui"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 7,
//       "Buki": 16,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 5.2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "chakra-threads",
//       "puppet-hiruko",
//       "puppet-third-kazekage",
//       "one-hundred-puppets"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 396,
//     "Identifier": "sasori-fn-genin",
//     "NinjaName": "sasori"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 17,
//       "Buki": 50,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 0.8,
//       "Nin": 3,
//       "Buki": 6,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "chakra-threads",
//       "puppet-hiruko",
//       "puppet-third-kazekage",
//       "one-hundred-puppets"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 360,
//     "Identifier": "sasori-fn-jounin",
//     "NinjaName": "sasori"
//   },
//   {
//     "Chakra": 50,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 500,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 30,
//       "Buki": 65,
//       "Sta": 38,
//       "Ele": 25,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "chakra-threads",
//       "puppet-hiruko",
//       "puppet-third-kazekage",
//       "one-hundred-puppets"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 78,
//     "Identifier": "sasori-jounin",
//     "Combos": [
//       53
//     ],
//     "NinjaName": "sasori"
//   },
//   {
//     "Chakra": 68,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 60,
//       "Buki": 115,
//       "Sta": 40,
//       "Ele": 30,
//       "Gen": 28
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 2.6,
//       "Buki": 6,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.7
//     },
//     "Ability": [
//       "chakra-threads",
//       "puppet-hiruko",
//       "puppet-third-kazekage",
//       "one-hundred-puppets"
//     ],
//     "SealBonus": {
//       "Low": {
//         "BukiBoost": 10,
//         "Reroll": 35
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 254,
//     "Identifier": "sasori-kage",
//     "Combos": [
//       53
//     ],
//     "NinjaName": "sasori"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 350,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 30,
//       "Buki": 16,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3.5,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2.2,
//       "Gen": 3.2
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "NinjaID": 55,
//     "Identifier": "sasuke-chunin-genin",
//     "Combos": [
//       3,
//       40,
//       51
//     ],
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 28,
//     "Position": 2,
//     "Seal": 8,
//     "Value": 400,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 33,
//       "Buki": 15,
//       "Sta": 27,
//       "Ele": 33,
//       "Gen": 33
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3,
//       "Buki": 1.3,
//       "Sta": 2.1,
//       "Ele": 2.3,
//       "Gen": 3.3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "NinjaID": 337,
//     "Identifier": "sasuke-cs2-chidori-jounin",
//     "Combos": [
//       2
//     ],
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 300,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 20,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2.7,
//       "Buki": 1,
//       "Sta": 2.6,
//       "Ele": 2,
//       "Gen": 3.3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "NinjaID": 420,
//     "Identifier": "sasuke-cursed-genin",
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 15,
//       "Buki": 8,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 2,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "Evolved": "sasuke-genin",
//     "FixedChakra": true,
//     "NinjaID": 278,
//     "Identifier": "sasuke-evolved-genin",
//     "Combos": [
//       1
//     ],
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 10,
//       "Buki": 6,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3,
//       "Buki": 2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 14,
//     "Identifier": "sasuke-fn-genin",
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 25,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 40,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 4,
//       "Buki": 2,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 413,
//     "Identifier": "sasuke-fn-jounin",
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 70,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 15,
//       "Buki": 8,
//       "Sta": 15,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 2.4,
//       "Buki": 1,
//       "Sta": 1.2,
//       "Ele": 1.5,
//       "Gen": 1.3
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "kakashi-jounin"
//     },
//     "Evolve": "sasuke-evolved-genin",
//     "NinjaID": 133,
//     "Identifier": "sasuke-genin",
//     "Combos": [
//       1
//     ],
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 50,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 90,
//       "Buki": 35,
//       "Sta": 30,
//       "Ele": 35,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 1.7,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 2.2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "fireball",
//       "heavens-cursed-seal",
//       "lion-barrage",
//       "chidori"
//     ],
//     "NinjaID": 393,
//     "Identifier": "sasuke-ms-kage",
//     "NinjaName": "sasuke"
//   },
//   {
//     "Chakra": 82,
//     "Position": 3,
//     "Seal": 7,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 50,
//       "Nin": 95,
//       "Buki": 35,
//       "Sta": 40,
//       "Ele": 40,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 5,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3.8
//     },
//     "Ability": [
//       "sharingan-coercion",
//       "binding-snake",
//       "chidori-current",
//       "heavenly-hand"
//     ],
//     "NinjaID": 243,
//     "Identifier": "sasuke-susanoo-kage",
//     "NinjaName": "sasuke"
//   },
//   {
//     "Summon": true,
//     "Chakra": 36,
//     "Position": 4,
//     "Seal": false,
//     "Value": 500,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 3
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 2,
//       "Buki": 3
//     },
//     "NinjaID": 218,
//     "Identifier": "satori-summon",
//     "NinjaName": "satori"
//   },
//   {
//     "Chakra": 36,
//     "Position": 3,
//     "Seal": 3,
//     "Value": 900,
//     "Stats": {
//       "Tai": 65,
//       "Nin": 10,
//       "Buki": 45,
//       "Sta": 40,
//       "Ele": 20,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 1,
//       "Buki": 2,
//       "Sta": 2.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 375,
//     "Identifier": "shamon-kage",
//     "NinjaName": "shamon"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": -5,
//     "Value": 170,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 33,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.3,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "parasitic-insects",
//       "insect-tornado"
//     ],
//     "NinjaID": 104,
//     "Identifier": "shibi-jounin",
//     "Combos": [
//       22
//     ],
//     "NinjaName": "shibi"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 10,
//       "Buki": 18,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1.5,
//       "Buki": 3.7,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "shigure-genin",
//     "FixedChakra": true,
//     "NinjaID": 306,
//     "Identifier": "shigure-evolved-genin",
//     "Combos": [
//       42
//     ],
//     "NinjaName": "shigure"
//   },
//   {
//     "Chakra": 18,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 50,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 10,
//       "Buki": 18,
//       "Sta": 20,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "Starter": {
//       "StatPoints": 1,
//       "Teacher": "aoi-jounin"
//     },
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolve": "shigure-evolved-genin",
//     "NinjaID": 161,
//     "Identifier": "shigure-genin",
//     "Combos": [
//       42
//     ],
//     "NinjaName": "shigure"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 170,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 30,
//       "Buki": 15,
//       "Sta": 20,
//       "Ele": 25,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3.8,
//       "Buki": 0.3,
//       "Sta": 1.7,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "shadow-manipulation",
//       "practice-brick",
//       "shadow-sewing",
//       "shadow-imitation"
//     ],
//     "NinjaID": 101,
//     "Identifier": "shikaku-jounin",
//     "Combos": [
//       15,
//       17
//     ],
//     "NinjaName": "shikaku"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 350,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 42,
//       "Buki": 9,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 5,
//       "Buki": 0.5,
//       "Sta": 1.7,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "shadow-manipulation",
//       "practice-brick",
//       "shadow-sewing",
//       "shadow-imitation"
//     ],
//     "NinjaID": 60,
//     "Identifier": "shikamaru-chunin-genin",
//     "Combos": [
//       49
//     ],
//     "NinjaName": "shikamaru"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 20,
//       "Buki": 5,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 2.2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "shadow-manipulation",
//       "practice-brick",
//       "shadow-sewing",
//       "shadow-imitation"
//     ],
//     "Evolved": "shikamaru-genin",
//     "FixedChakra": true,
//     "NinjaID": 281,
//     "Identifier": "shikamaru-evolved-genin",
//     "Combos": [
//       15,
//       17
//     ],
//     "NinjaName": "shikamaru"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 15,
//       "Buki": 5,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 5,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "shadow-manipulation",
//       "practice-brick",
//       "shadow-sewing",
//       "shadow-imitation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 436,
//     "Identifier": "shikamaru-fn-genin",
//     "NinjaName": "shikamaru"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 70,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 20,
//       "Buki": 5,
//       "Sta": 14,
//       "Ele": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3.2,
//       "Buki": 0.5,
//       "Sta": 1.7,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "shadow-manipulation",
//       "practice-brick",
//       "shadow-sewing",
//       "shadow-imitation"
//     ],
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "asuma-jounin"
//     },
//     "Evolve": "shikamaru-evolved-genin",
//     "NinjaID": 136,
//     "Identifier": "shikamaru-genin",
//     "Combos": [
//       15,
//       17
//     ],
//     "NinjaName": "shikamaru"
//   },
//   {
//     "Summon": true,
//     "Chakra": 50,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1000,
//     "Stats": {
//       "Nin": 12,
//       "End": 2
//     },
//     "Growth": {
//       "Nin": 6,
//       "End": 2
//     },
//     "NinjaID": 208,
//     "Identifier": "shima-summon",
//     "NinjaName": "shima"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 7,
//     "Value": 200,
//     "Stats": {
//       "Tai": 24,
//       "Nin": 20,
//       "Buki": 10,
//       "Sta": 20,
//       "Ele": 10,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "Teacher": true,
//     "NinjaID": 48,
//     "Identifier": "shin-jounin",
//     "Combos": [
//       76
//     ],
//     "NinjaName": "shin"
//   },
//   {
//     "Summon": true,
//     "Chakra": 60,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1200,
//     "Stats": {
//       "Buki": 6,
//       "BukiBoost": 1,
//       "L5D": 1
//     },
//     "Growth": {
//       "Buki": 6,
//       "BukiBoost": 1,
//       "L5D": 1
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnNewTurn": 1,
//               "TaiCore": 1
//             },
//             "Morph": [
//               {
//                 "Max": 100,
//                 "From": "Buki",
//                 "To": "Tai",
//                 "Rate": 1
//               }
//             ],
//             "Overcharge": 0.3
//           },
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnNewTurn": 1,
//               "NinCore": 1
//             },
//             "Morph": [
//               {
//                 "Max": 100,
//                 "From": "Buki",
//                 "To": "Nin",
//                 "Rate": 1
//               }
//             ],
//             "Overcharge": 0.3
//           }
//         ],
//         "ID": 627,
//         "Identifier": "shinigamis-seal",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 215,
//     "Identifier": "shinigami-summon",
//     "NinjaName": "shinigami"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 350,
//     "Stats": {
//       "Tai": 18,
//       "Nin": 35,
//       "Buki": 7,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "parasitic-insects",
//       "insect-tornado"
//     ],
//     "NinjaID": 59,
//     "Identifier": "shino-chunin-genin",
//     "NinjaName": "shino"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 200,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 19,
//       "Buki": 3,
//       "Sta": 23,
//       "Ele": 23,
//       "Gen": 23
//     },
//     "Growth": {
//       "Tai": 1.2,
//       "Nin": 3.8,
//       "Buki": 0.3,
//       "Sta": 2.3,
//       "Ele": 1.8,
//       "Gen": 2.8
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "parasitic-insects",
//       "insect-tornado"
//     ],
//     "Evolved": "shino-genin",
//     "FixedChakra": true,
//     "NinjaID": 275,
//     "Identifier": "shino-evolved-genin",
//     "Combos": [
//       22,
//       12
//     ],
//     "NinjaName": "shino"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 13,
//       "Buki": 1,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "parasitic-insects",
//       "insect-tornado"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 435,
//     "Identifier": "shino-fn-genin",
//     "NinjaName": "shino"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 70,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 19,
//       "Buki": 3,
//       "Sta": 13,
//       "Ele": 13,
//       "Gen": 13
//     },
//     "Growth": {
//       "Tai": 1.2,
//       "Nin": 3,
//       "Buki": 0.3,
//       "Sta": 1.8,
//       "Ele": 1.3,
//       "Gen": 1.3
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "parasitic-insects",
//       "insect-tornado"
//     ],
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "kurenai-jounin"
//     },
//     "Evolve": "shino-evolved-genin",
//     "NinjaID": 140,
//     "Identifier": "shino-genin",
//     "Combos": [
//       22,
//       12
//     ],
//     "NinjaName": "shino"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 4,
//       "Nin": 10,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 3,
//       "Buki": 4,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "swordsmanship",
//       "great-fireball",
//       "body-flicker",
//       "kotoamatsukami"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 447,
//     "Identifier": "shisui-fn-genin",
//     "NinjaName": "shisui"
//   },
//   {
//     "Chakra": 56,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 550,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 50,
//       "Buki": 35,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 4.3,
//       "Buki": 2.8,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3.7
//     },
//     "Ability": [
//       "swordsmanship",
//       "great-fireball",
//       "body-flicker",
//       "kotoamatsukami"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "GenProc": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 324,
//     "Identifier": "shisui-jounin",
//     "Combos": [
//       64
//     ],
//     "NinjaName": "shisui"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "BukiBoost": 0,
//       "Sta": 0
//     },
//     "Growth": {
//       "BukiBoost": 0.5,
//       "Sta": 0.5
//     },
//     "FixedChakra": true,
//     "NinjaID": 491,
//     "Identifier": "shukaku-fn-summon",
//     "NinjaName": "shukaku"
//   },
//   {
//     "Summon": true,
//     "Chakra": 22,
//     "Position": 4,
//     "Seal": false,
//     "Value": 350,
//     "Stats": {
//       "Buki": 10,
//       "Sta": 15,
//       "BukiBoost": 5
//     },
//     "Growth": {
//       "Buki": 3,
//       "Sta": 1,
//       "BukiBoost": 0.5
//     },
//     "NinjaID": 184,
//     "Identifier": "shukaku-summon",
//     "Combos": [
//       65
//     ],
//     "NinjaName": "shukaku"
//   },
//   {
//     "Summon": true,
//     "Chakra": 0,
//     "Position": 4,
//     "Seal": false,
//     "Value": 0,
//     "Forbidden": true,
//     "Stats": {
//       "CritChance": 0,
//       "GenProc": 0
//     },
//     "Growth": {
//       "CritChance": 0.5,
//       "GenProc": 0.4
//     },
//     "FixedChakra": true,
//     "NinjaID": 494,
//     "Identifier": "son-goku-fn-summon",
//     "NinjaName": "son-goku"
//   },
//   {
//     "Summon": true,
//     "Chakra": 28,
//     "Position": 4,
//     "Seal": false,
//     "Value": 450,
//     "Stats": {
//       "Tai": 3,
//       "CritChance": 2,
//       "GenProc": 2
//     },
//     "Growth": {
//       "Tai": 3,
//       "CritChance": 2,
//       "GenProc": 2
//     },
//     "NinjaID": 187,
//     "Identifier": "son-goku-summon",
//     "Combos": [
//       68
//     ],
//     "NinjaName": "son-goku"
//   },
//   {
//     "Chakra": 46,
//     "Position": 3,
//     "Seal": 5,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 45,
//       "Buki": 80,
//       "Sta": 40,
//       "Ele": 30,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2.4,
//       "Nin": 2.4,
//       "Buki": 4.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "triple-bladed-claw",
//       "flying-swallow",
//       "tailed-beast-bomb",
//       "beast-tearing-palm"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 465,
//     "Identifier": "sora-tailed-kage",
//     "NinjaName": "sora"
//   },
//   {
//     "Summon": true,
//     "Chakra": 30,
//     "Position": 4,
//     "Seal": false,
//     "Value": 600,
//     "Stats": {
//       "Nin": 3,
//       "Reroll": 2,
//       "GenProc": 2
//     },
//     "Growth": {
//       "Nin": 3,
//       "Reroll": 2,
//       "GenProc": 2
//     },
//     "NinjaID": 367,
//     "Identifier": "soul-fiend-summon",
//     "NinjaName": "soul-fiend"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 22,
//       "Buki": 35,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3,
//       "Buki": 5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "water-blob",
//       "tate-eboshi",
//       "water-pistol",
//       "hydrification"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 453,
//     "Identifier": "suigetsu-fn-jounin",
//     "NinjaName": "suigetsu"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": 3,
//     "Value": 260,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 20,
//       "Buki": 30,
//       "Sta": 25,
//       "Ele": 30,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 2,
//       "Buki": 3.5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "water-blob",
//       "tate-eboshi",
//       "water-pistol",
//       "hydrification"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 41,
//     "Identifier": "suigetsu-jounin",
//     "Combos": [
//       34,
//       35
//     ],
//     "NinjaName": "suigetsu"
//   },
//   {
//     "Summon": true,
//     "Chakra": 50,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1000,
//     "Stats": {
//       "Nin": 4,
//       "Reroll": 10,
//       "Gen": 10
//     },
//     "Growth": {
//       "Nin": 4,
//       "Reroll": 2,
//       "Gen": 3
//     },
//     "NinjaID": 417,
//     "Identifier": "susanoo-spirit-summon",
//     "NinjaName": "susanoo-spirit"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 35,
//     "Stats": {
//       "Tai": 14,
//       "Nin": 14,
//       "Buki": 8,
//       "Sta": 10,
//       "Ele": 15,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.7,
//       "Nin": 0.7,
//       "Buki": 0.5,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 153,
//     "Identifier": "suzumebachi-genin",
//     "Combos": [
//       7,
//       9
//     ],
//     "NinjaName": "suzumebachi"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 20,
//       "Buki": 6,
//       "Sta": 22,
//       "Ele": 20,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3.8,
//       "Buki": 0.6,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "trio-requiem",
//       "chains-of-phantasia",
//       "summoning-doki"
//     ],
//     "Evolved": "tayuya-genin",
//     "FixedChakra": true,
//     "NinjaID": 299,
//     "Identifier": "tayuya-evolved-genin",
//     "Combos": [
//       45,
//       26
//     ],
//     "NinjaName": "tayuya"
//   },
//   {
//     "Chakra": 14,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 70,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 20,
//       "Buki": 6,
//       "Sta": 12,
//       "Ele": 10,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3,
//       "Buki": 0.6,
//       "Sta": 1,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "trio-requiem",
//       "chains-of-phantasia",
//       "summoning-doki"
//     ],
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "kimimaro-jounin"
//     },
//     "Evolve": "tayuya-evolved-genin",
//     "NinjaID": 117,
//     "Identifier": "tayuya-genin",
//     "Combos": [
//       45,
//       26
//     ],
//     "NinjaName": "tayuya"
//   },
//   {
//     "Chakra": 22,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 300,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 50,
//       "Buki": 15,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 50
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "trio-requiem",
//       "chains-of-phantasia",
//       "summoning-doki"
//     ],
//     "NinjaID": 503,
//     "Identifier": "tayuya-hatred-jounin",
//     "NinjaName": "tayuya"
//   },
//   {
//     "Chakra": 12,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 150,
//     "Stats": {
//       "Tai": 9,
//       "Nin": 35,
//       "Buki": 9,
//       "Sta": 15,
//       "Ele": 10,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3.6,
//       "Buki": 0.8,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 3
//     },
//     "Ability": [
//       "sounds-cursed-seal",
//       "trio-requiem",
//       "chains-of-phantasia",
//       "summoning-doki"
//     ],
//     "NinjaID": 118,
//     "Identifier": "tayuya-jounin",
//     "Combos": [
//       49,
//       45
//     ],
//     "NinjaName": "tayuya"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 12,
//       "Buki": 16,
//       "Sta": 25,
//       "Ele": 23,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 3.5,
//       "Sta": 2,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "dust-wind",
//       "wind-cutter",
//       "sickle-weasel",
//       "casting-net"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "temari-genin",
//     "FixedChakra": true,
//     "NinjaID": 284,
//     "Identifier": "temari-evolved-genin",
//     "Combos": [
//       4,
//       24
//     ],
//     "NinjaName": "temari"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -1,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 8,
//       "Buki": 14,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2.5,
//       "Buki": 4.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "dust-wind",
//       "wind-cutter",
//       "sickle-weasel",
//       "casting-net"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 441,
//     "Identifier": "temari-fn-genin",
//     "NinjaName": "temari"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 60,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 15,
//       "Buki": 12,
//       "Sta": 15,
//       "Ele": 13,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 2.5,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "dust-wind",
//       "wind-cutter",
//       "sickle-weasel",
//       "casting-net"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Starter": {
//       "StatPoints": 18,
//       "Teacher": "baki-jounin"
//     },
//     "Evolve": "temari-evolved-genin",
//     "NinjaID": 21,
//     "Identifier": "temari-genin",
//     "Combos": [
//       4,
//       24
//     ],
//     "NinjaName": "temari"
//   },
//   {
//     "Summon": true,
//     "Chakra": 44,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "BukiBoost": 1,
//       "GenProc": 3,
//       "End": 2
//     },
//     "Growth": {
//       "BukiBoost": 1,
//       "GenProc": 3,
//       "End": 2
//     },
//     "Genjutsu": [
//       {
//         "Power": 7,
//         "Cost": 10,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnAfterAttack": 1,
//               "Count": {
//                 "Name": "FatiguedDmg",
//                 "Less": true,
//                 "Amount": "Opponent",
//                 "Side": 1
//               }
//             },
//             "Stats": {
//               "Atk": 30
//             },
//             "Temporary": true
//           }
//         ],
//         "MaxUsage": 1,
//         "ID": 508,
//         "Identifier": "temples-salvation",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 484,
//     "Identifier": "temple-guardian-summon",
//     "NinjaName": "temple-guardian"
//   },
//   {
//     "Summon": true,
//     "Chakra": 44,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Crit": 2,
//       "GenProc": 3,
//       "End": 2
//     },
//     "Growth": {
//       "Crit": 2,
//       "GenProc": 3,
//       "End": 2
//     },
//     "Genjutsu": [
//       {
//         "Power": 7,
//         "Cost": 10,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnAfterAttack": 1,
//               "Count": {
//                 "Name": "FatiguedDmg",
//                 "Less": true,
//                 "Amount": "Opponent",
//                 "Side": 1
//               }
//             },
//             "Stats": {
//               "Atk": 30
//             },
//             "Temporary": true
//           }
//         ],
//         "MaxUsage": 1,
//         "ID": 508,
//         "Identifier": "temples-salvation",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 485,
//     "Identifier": "temple-ogre-summon",
//     "NinjaName": "temple-ogre"
//   },
//   {
//     "Summon": true,
//     "Chakra": 44,
//     "Position": 4,
//     "Seal": false,
//     "Value": 800,
//     "Stats": {
//       "Reroll": 4,
//       "GenProc": 3,
//       "End": 2
//     },
//     "Growth": {
//       "Reroll": 4,
//       "GenProc": 3,
//       "End": 2
//     },
//     "Genjutsu": [
//       {
//         "Power": 7,
//         "Cost": 10,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnAfterAttack": 1,
//               "Count": {
//                 "Name": "FatiguedDmg",
//                 "Less": true,
//                 "Amount": "Opponent",
//                 "Side": 1
//               }
//             },
//             "Stats": {
//               "Atk": 30
//             },
//             "Temporary": true
//           }
//         ],
//         "MaxUsage": 1,
//         "ID": 508,
//         "Identifier": "temples-salvation",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 486,
//     "Identifier": "temple-spirit-summon",
//     "NinjaName": "temple-spirit"
//   },
//   {
//     "Chakra": 34,
//     "Position": 1,
//     "Seal": -6,
//     "Value": 350,
//     "Stats": {
//       "Tai": 15,
//       "Nin": 20,
//       "Buki": 45,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 5,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "enclosing-technique",
//       "bukijutsu-expert",
//       "unsealing-technique",
//       "twin-rising-dragons"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 65,
//     "Identifier": "tenten-chunin-genin",
//     "NinjaName": "tenten"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 6,
//       "Buki": 23,
//       "Sta": 22,
//       "Ele": 24,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 1,
//       "Buki": 4.8,
//       "Sta": 1.7,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "enclosing-technique",
//       "bukijutsu-expert",
//       "unsealing-technique",
//       "twin-rising-dragons"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolved": "tenten-genin",
//     "FixedChakra": true,
//     "NinjaID": 273,
//     "Identifier": "tenten-evolved-genin",
//     "Combos": [
//       13
//     ],
//     "NinjaName": "tenten"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 3,
//       "Nin": 6,
//       "Buki": 16,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 1.5,
//       "Buki": 5.2,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "enclosing-technique",
//       "bukijutsu-expert",
//       "unsealing-technique",
//       "twin-rising-dragons"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 437,
//     "Identifier": "tenten-fn-genin",
//     "NinjaName": "tenten"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 50,
//     "Stats": {
//       "Tai": 6,
//       "Nin": 6,
//       "Buki": 23,
//       "Sta": 12,
//       "Ele": 14,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 1,
//       "Buki": 3.8,
//       "Sta": 1.2,
//       "Ele": 1,
//       "Gen": 1
//     },
//     "Ability": [
//       "enclosing-technique",
//       "bukijutsu-expert",
//       "unsealing-technique",
//       "twin-rising-dragons"
//     ],
//     "Starter": {
//       "StatPoints": 24,
//       "Teacher": "guy-jounin"
//     },
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "Evolve": "tenten-evolved-genin",
//     "NinjaID": 143,
//     "Identifier": "tenten-genin",
//     "Combos": [
//       13
//     ],
//     "NinjaName": "tenten"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": -6,
//     "Value": 350,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 35,
//       "Buki": 55,
//       "Sta": 30,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2,
//       "Buki": 5.5,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "enclosing-technique",
//       "bukijutsu-expert",
//       "unsealing-technique",
//       "twin-rising-dragons"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 415,
//     "Identifier": "tenten-scroll-jounin",
//     "NinjaName": "tenten"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 4,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 25,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 3.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "fleeing-expert",
//       "intangibility",
//       "hiding-like-a-mole",
//       "teleportation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 364,
//     "Identifier": "tobi-fn-jounin",
//     "NinjaName": "tobi"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 4,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 70,
//       "Nin": 70,
//       "Buki": 15,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 5,
//       "Nin": 5,
//       "Buki": 1.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "fleeing-expert",
//       "intangibility",
//       "hiding-like-a-mole",
//       "teleportation"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 510,
//     "Identifier": "tobi-fn-kage",
//     "NinjaName": "tobi"
//   },
//   {
//     "Chakra": 38,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 450,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 35,
//       "Buki": 13,
//       "Sta": 34,
//       "Ele": 20,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 2.2,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1,
//       "Gen": 3.7
//     },
//     "Ability": [
//       "fleeing-expert",
//       "intangibility",
//       "hiding-like-a-mole",
//       "teleportation"
//     ],
//     "NinjaID": 86,
//     "Identifier": "tobi-jounin",
//     "Combos": [
//       54
//     ],
//     "NinjaName": "tobi"
//   },
//   {
//     "Chakra": 60,
//     "Position": 3,
//     "Seal": 6,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 55,
//       "Nin": 90,
//       "Buki": 20,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 4,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 1.2,
//       "Gen": 3.5
//     },
//     "Ability": [
//       "fleeing-expert",
//       "intangibility",
//       "hiding-like-a-mole",
//       "teleportation"
//     ],
//     "NinjaID": 258,
//     "Identifier": "tobi-kage",
//     "Combos": [
//       54
//     ],
//     "NinjaName": "tobi"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 8,
//       "Buki": 10,
//       "Sta": 30,
//       "Ele": 30,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 3,
//       "Buki": 3.3,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "heavenly-weeping",
//       "severing-wave",
//       "flying-thunder-god-tobirama",
//       "edo-tensei"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 449,
//     "Identifier": "tobirama-fn-genin",
//     "NinjaName": "tobirama"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 50,
//       "Buki": 100,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4,
//       "Buki": 7,
//       "Sta": 2.5,
//       "Ele": 2.2,
//       "Gen": 3
//     },
//     "Ability": [
//       "heavenly-weeping",
//       "severing-wave",
//       "flying-thunder-god-tobirama",
//       "edo-tensei"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 490,
//     "Identifier": "tobirama-fn-kage",
//     "NinjaName": "tobirama"
//   },
//   {
//     "Chakra": 90,
//     "Position": 3,
//     "Seal": -7,
//     "Value": 2000,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 70,
//       "Buki": 105,
//       "Sta": 45,
//       "Ele": 45,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3.5,
//       "Buki": 6,
//       "Sta": 2.1,
//       "Ele": 3,
//       "Gen": 3
//     },
//     "Ability": [
//       "heavenly-weeping",
//       "severing-wave",
//       "flying-thunder-god-tobirama",
//       "edo-tensei"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 263,
//     "Identifier": "tobirama-kage",
//     "NinjaName": "tobirama"
//   },
//   {
//     "Chakra": 60,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 600,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 45,
//       "Buki": 10,
//       "Sta": 35,
//       "Ele": 40,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "ancient-chakra",
//       "projection-technique",
//       "puppet-cursing-sphere",
//       "puppet-reincarnation"
//     ],
//     "NinjaID": 515,
//     "Identifier": "toneri-eyes-jounin",
//     "NinjaName": "toneri"
//   },
//   {
//     "Chakra": 50,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 500,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 45,
//       "Buki": 10,
//       "Sta": 35,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2.1,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "ancient-chakra",
//       "projection-technique",
//       "puppet-cursing-sphere",
//       "puppet-reincarnation"
//     ],
//     "NinjaID": 516,
//     "Identifier": "toneri-jounin",
//     "NinjaName": "toneri"
//   },
//   {
//     "Summon": true,
//     "Chakra": 46,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1000,
//     "Stats": {
//       "Buki": 10,
//       "BukiRec": 2,
//       "Sta": 5,
//       "End": 2
//     },
//     "Growth": {
//       "Buki": 4,
//       "BukiRec": 2,
//       "Sta": 2,
//       "End": 2
//     },
//     "NinjaID": 354,
//     "Identifier": "top-transformed-buddha-summon",
//     "NinjaName": "top-transformed-buddha"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 13,
//       "Buki": 1,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 4,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "phosphorus-insects",
//       "jar-of-poison"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 445,
//     "Identifier": "torune-fn-genin",
//     "NinjaName": "torune"
//   },
//   {
//     "Chakra": 34,
//     "Position": 2,
//     "Seal": -8,
//     "Value": 400,
//     "Stats": {
//       "Tai": 20,
//       "Nin": 40,
//       "Buki": 25,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 4,
//       "Buki": 1,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "spindle-formation",
//       "insect-clone",
//       "phosphorus-insects",
//       "jar-of-poison"
//     ],
//     "NinjaID": 50,
//     "Identifier": "torune-jounin",
//     "NinjaName": "torune"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 6,
//     "Value": 170,
//     "Stats": {
//       "Tai": 25,
//       "Nin": 16,
//       "Buki": 14,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 1.7,
//       "Buki": 0.6,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "four-legs-technique",
//       "human-beast-clone",
//       "fang-wolf-fang",
//       "two-headed-wolf"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 103,
//     "Identifier": "tsume-jounin",
//     "Combos": [
//       20,
//       21
//     ],
//     "NinjaName": "tsume"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": -2,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 3,
//       "Buki": 2,
//       "Sta": 35,
//       "Ele": 15,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1.8,
//       "Buki": 0.5,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "enhanced-strength",
//       "summoning-slugs",
//       "legendary-heel-drop",
//       "reserve-seal"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 335,
//     "Identifier": "tsunade-fn-genin",
//     "NinjaName": "tsunade"
//   },
//   {
//     "Chakra": 30,
//     "Position": 3,
//     "Seal": 2,
//     "Value": 1200,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 105,
//       "Nin": 35,
//       "Buki": 15,
//       "Sta": 30,
//       "Ele": 25,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 8,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 2.5,
//       "Ele": 1.5,
//       "Gen": 3
//     },
//     "Ability": [
//       "enhanced-strength",
//       "summoning-slugs",
//       "legendary-heel-drop",
//       "reserve-seal"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 513,
//     "Identifier": "tsunade-fn-kage",
//     "NinjaName": "tsunade"
//   },
//   {
//     "Chakra": 48,
//     "Position": 3,
//     "Seal": 2,
//     "Value": 1000,
//     "Stats": {
//       "Tai": 90,
//       "Nin": 40,
//       "Buki": 15,
//       "Sta": 35,
//       "Ele": 20,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 1.5,
//       "Buki": 1,
//       "Sta": 2.2,
//       "Ele": 1,
//       "Gen": 3
//     },
//     "Ability": [
//       "enhanced-strength",
//       "summoning-slugs",
//       "legendary-heel-drop",
//       "reserve-seal"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 148,
//     "Identifier": "tsunade-kage",
//     "Combos": [
//       59
//     ],
//     "NinjaName": "tsunade"
//   },
//   {
//     "Chakra": 4,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 10,
//     "Stats": {
//       "Tai": 2,
//       "Nin": 6,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 10,
//       "ItemFind": 15
//     },
//     "Growth": {
//       "Tai": 0.4,
//       "Nin": 1.2,
//       "Buki": 0.6,
//       "Sta": 0.4,
//       "Ele": 0.4,
//       "Gen": 2,
//       "ItemFind": 4
//     },
//     "Ability": [
//       "sexy-technique",
//       "cloak-of-invisibility",
//       "harem-technique",
//       "cheesecake-technique"
//     ],
//     "NinjaID": 37,
//     "Identifier": "udon-genin",
//     "Combos": [
//       32,
//       33
//     ],
//     "NinjaName": "udon"
//   },
//   {
//     "Summon": true,
//     "Chakra": 20,
//     "Position": 4,
//     "Seal": false,
//     "Value": 200,
//     "Stats": {
//       "WaterDmg": 10,
//       "ItemFind": 50
//     },
//     "Growth": {
//       "WaterDmg": 4,
//       "ItemFind": 0
//     },
//     "NinjaID": 220,
//     "Identifier": "umibozu-summon",
//     "NinjaName": "umibozu"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 6,
//     "Value": 500,
//     "Stats": {
//       "Tai": 7,
//       "Nin": 28,
//       "Buki": 10,
//       "Sta": 25,
//       "Ele": 18,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4.6,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 1.8,
//       "Gen": 3.2
//     },
//     "Ability": [
//       "soap-bubbles",
//       "bubble-clone",
//       "exploding-bubbles",
//       "rokubis-jinchuriki"
//     ],
//     "NinjaID": 480,
//     "Identifier": "utakata-jinchuriki-genin",
//     "NinjaName": "utakata"
//   },
//   {
//     "Chakra": 32,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 350,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 60,
//       "Buki": 25,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 4.7,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "soap-bubbles",
//       "bubble-clone",
//       "exploding-bubbles",
//       "rokubis-jinchuriki"
//     ],
//     "NinjaID": 70,
//     "Identifier": "utakata-jounin",
//     "Combos": [
//       70
//     ],
//     "NinjaName": "utakata"
//   },
//   {
//     "Chakra": 74,
//     "Position": 3,
//     "Seal": 6,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 40,
//       "Nin": 118,
//       "Buki": 25,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 6.5,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "soap-bubbles",
//       "bubble-clone",
//       "exploding-bubbles",
//       "tailed-beast-bomb",
//       "rokubis-jinchuriki"
//     ],
//     "NinjaID": 472,
//     "Identifier": "utakata-tailed-kage",
//     "NinjaName": "utakata"
//   },
//   {
//     "Summon": true,
//     "Chakra": 64,
//     "Position": 4,
//     "Seal": false,
//     "Value": 1300,
//     "Stats": {
//       "Tai": 5,
//       "GenProc": 2,
//       "GenMastery": 1
//     },
//     "Growth": {
//       "Tai": 5,
//       "GenProc": 2,
//       "GenMastery": 1
//     },
//     "Genjutsu": [
//       {
//         "Power": 10,
//         "Cost": 0,
//         "Effects": [
//           {
//             "Proc": 100,
//             "Conditions": {
//               "OnEnter": 1
//             },
//             "Stats": {
//               "Gen": 50
//             },
//             "Overcharge": 0.3
//           }
//         ],
//         "ID": 529,
//         "Identifier": "ryuichis-energy",
//         "Color": "genjutsu"
//       }
//     ],
//     "NinjaID": 214,
//     "Identifier": "white-snake-sage-summon",
//     "NinjaName": "white-snake-sage"
//   },
//   {
//     "Summon": true,
//     "Chakra": 6,
//     "Position": 4,
//     "Seal": false,
//     "Value": 5,
//     "Stats": {
//       "Atk": 1
//     },
//     "Growth": {
//       "Atk": 0
//     },
//     "NinjaID": 233,
//     "Identifier": "wolf-summon",
//     "Combos": [
//       36
//     ],
//     "NinjaName": "wolf"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -4,
//     "Value": 500,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 14,
//       "Buki": 25,
//       "Sta": 21,
//       "Ele": 23,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 0.5,
//       "Nin": 2.2,
//       "Buki": 4.5,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "coral-palm",
//       "supreme-typhoon",
//       "water-mirror",
//       "sanbis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 477,
//     "Identifier": "yagura-jinchuriki-genin",
//     "NinjaName": "yagura"
//   },
//   {
//     "Chakra": 38,
//     "Position": 2,
//     "Seal": -4,
//     "Value": 380,
//     "Stats": {
//       "Tai": 10,
//       "Nin": 35,
//       "Buki": 55,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 18
//     },
//     "Growth": {
//       "Tai": 1,
//       "Nin": 2.5,
//       "Buki": 4.5,
//       "Sta": 1.7,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "coral-palm",
//       "supreme-typhoon",
//       "water-mirror",
//       "sanbis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 71,
//     "Identifier": "yagura-jounin",
//     "Combos": [
//       67
//     ],
//     "NinjaName": "yagura"
//   },
//   {
//     "Chakra": 70,
//     "Position": 3,
//     "Seal": -4,
//     "Value": 1800,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 65,
//       "Buki": 100,
//       "Sta": 45,
//       "Ele": 30,
//       "Gen": 40
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 3,
//       "Buki": 5,
//       "Sta": 2.5,
//       "Ele": 1.8,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "coral-palm",
//       "supreme-typhoon",
//       "water-mirror",
//       "tailed-beast-bomb",
//       "sanbis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 469,
//     "Identifier": "yagura-tailed-kage",
//     "NinjaName": "yagura"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 16,
//       "Buki": 9,
//       "Sta": 25,
//       "Ele": 25,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2.8,
//       "Nin": 2,
//       "Buki": 0.7,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "wild-water-wave",
//       "water-pillar-encirclement"
//     ],
//     "Evolved": "yahiko-genin",
//     "FixedChakra": true,
//     "NinjaID": 304,
//     "Identifier": "yahiko-evolved-genin",
//     "Combos": [
//       11
//     ],
//     "NinjaName": "yahiko"
//   },
//   {
//     "Chakra": 20,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 100,
//     "Stats": {
//       "Tai": 16,
//       "Nin": 16,
//       "Buki": 9,
//       "Sta": 15,
//       "Ele": 15,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 2,
//       "Buki": 0.7,
//       "Sta": 1.5,
//       "Ele": 1.5,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "wild-water-wave",
//       "water-pillar-encirclement"
//     ],
//     "Starter": {
//       "StatPoints": 8,
//       "Teacher": "gerotora-summon"
//     },
//     "Evolve": "yahiko-evolved-genin",
//     "NinjaID": 146,
//     "Identifier": "yahiko-genin",
//     "Combos": [
//       11
//     ],
//     "NinjaName": "yahiko"
//   },
//   {
//     "Chakra": 10,
//     "Position": 1,
//     "Seal": 5,
//     "Value": 400,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 9,
//       "Nin": 9,
//       "Buki": 4,
//       "Sta": 35,
//       "Ele": 30,
//       "Gen": 30
//     },
//     "Growth": {
//       "Tai": 2.5,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 2.3,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "wood-clone",
//       "tearing-torrent",
//       "tree-bind",
//       "sea-of-trees"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 431,
//     "Identifier": "yamato-fn-genin",
//     "NinjaName": "yamato"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 2,
//     "Value": 200,
//     "Stats": {
//       "Tai": 13,
//       "Nin": 22,
//       "Buki": 10,
//       "Sta": 23,
//       "Ele": 20,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3.3,
//       "Buki": 1,
//       "Sta": 2.2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "wood-clone",
//       "tearing-torrent",
//       "tree-bind",
//       "sea-of-trees"
//     ],
//     "Teacher": true,
//     "NinjaID": 47,
//     "Identifier": "yamato-jounin",
//     "NinjaName": "yamato"
//   },
//   {
//     "Chakra": 14,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 200,
//     "Stats": {
//       "Tai": 5,
//       "Nin": 30,
//       "Buki": 10,
//       "Sta": 15,
//       "Ele": 15,
//       "Gen": 15
//     },
//     "Growth": {
//       "Tai": 0.8,
//       "Nin": 4.5,
//       "Buki": 1,
//       "Sta": 1.6,
//       "Ele": 1.5,
//       "Gen": 2
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "Teacher": true,
//     "NinjaID": 23,
//     "Identifier": "yashamaru-jounin",
//     "Combos": [
//       5
//     ],
//     "NinjaName": "yashamaru"
//   },
//   {
//     "Chakra": 30,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 280,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 22,
//       "Buki": 22,
//       "Sta": 22,
//       "Ele": 22,
//       "Gen": 22
//     },
//     "Growth": {
//       "Tai": 2.2,
//       "Nin": 2.2,
//       "Buki": 2.2,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "south-paw",
//       "cat-fur",
//       "cat-claw",
//       "neko-nightmare"
//     ],
//     "NinjaID": 177,
//     "Identifier": "yoppa-genin",
//     "NinjaName": "yoppa"
//   },
//   {
//     "Chakra": 26,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 240,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 22,
//       "Buki": 35,
//       "Sta": 20,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 2,
//       "Nin": 1.5,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 313,
//     "Identifier": "yugao-jounin",
//     "NinjaName": "yugao"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": 0,
//     "Value": 500,
//     "Stats": {
//       "Tai": 24,
//       "Nin": 6,
//       "Buki": 15,
//       "Sta": 23,
//       "Ele": 18,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3.8,
//       "Nin": 0.5,
//       "Buki": 2.2,
//       "Sta": 2.2,
//       "Ele": 1.8,
//       "Gen": 3
//     },
//     "Ability": [
//       "mouse-hairball",
//       "cat-roaring-flame",
//       "claw-creation",
//       "matatabis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 476,
//     "Identifier": "yugito-jinchuriki-genin",
//     "NinjaName": "yugito"
//   },
//   {
//     "Chakra": 36,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 350,
//     "Stats": {
//       "Tai": 55,
//       "Nin": 12,
//       "Buki": 25,
//       "Sta": 25,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 1,
//       "Buki": 2,
//       "Sta": 1.7,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "mouse-hairball",
//       "cat-roaring-flame",
//       "claw-creation",
//       "matatabis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 88,
//     "Identifier": "yugito-jounin",
//     "Combos": [
//       66
//     ],
//     "NinjaName": "yugito"
//   },
//   {
//     "Chakra": 56,
//     "Position": 3,
//     "Seal": 0,
//     "Value": 1500,
//     "Stats": {
//       "Tai": 95,
//       "Nin": 20,
//       "Buki": 60,
//       "Sta": 40,
//       "Ele": 20,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 5.4,
//       "Nin": 1,
//       "Buki": 3,
//       "Sta": 2.3,
//       "Ele": 1.5,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "mouse-hairball",
//       "cat-roaring-flame",
//       "claw-creation",
//       "tailed-beast-bomb",
//       "matatabis-jinchuriki"
//     ],
//     "SealBonus": {
//       "Low": {
//         "CritChance": 25,
//         "BukiBoost": 10
//       },
//       "High": {
//         "BukiRec": 15,
//         "End": 30
//       }
//     },
//     "NinjaID": 468,
//     "Identifier": "yugito-tailed-kage",
//     "NinjaName": "yugito"
//   },
//   {
//     "Chakra": 10,
//     "Position": 2,
//     "Seal": 5,
//     "Value": 100,
//     "Stats": {
//       "Tai": 22,
//       "Nin": 22,
//       "Buki": 12,
//       "Sta": 14,
//       "Ele": 8,
//       "Gen": 8
//     },
//     "Growth": {
//       "Tai": 2.3,
//       "Nin": 2.3,
//       "Buki": 0.6,
//       "Sta": 1.2,
//       "Ele": 1,
//       "Gen": 1.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "summoning",
//       "will-of-shinobi"
//     ],
//     "NinjaID": 29,
//     "Identifier": "yura-jounin",
//     "Combos": [
//       5
//     ],
//     "NinjaName": "yura"
//   },
//   {
//     "Chakra": 46,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 900,
//     "Stats": {
//       "Tai": 33,
//       "Nin": 33,
//       "Buki": 33,
//       "Sta": 35,
//       "Ele": 35,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 3,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "flying-revolving-sword",
//       "water-prison",
//       "water-bullet",
//       "giant-waterfall"
//     ],
//     "NinjaID": 353,
//     "Identifier": "zabuza-edo-jounin",
//     "NinjaName": "zabuza"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 21,
//       "Nin": 21,
//       "Buki": 21,
//       "Sta": 35,
//       "Ele": 45,
//       "Gen": 25
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 3,
//       "Buki": 3,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "flying-revolving-sword",
//       "water-prison",
//       "water-bullet",
//       "giant-waterfall"
//     ],
//     "FixedChakra": true,
//     "NinjaID": 385,
//     "Identifier": "zabuza-fn-jounin",
//     "NinjaName": "zabuza"
//   },
//   {
//     "Chakra": 32,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 400,
//     "Stats": {
//       "Tai": 27,
//       "Nin": 27,
//       "Buki": 27,
//       "Sta": 26,
//       "Ele": 23,
//       "Gen": 17
//     },
//     "Growth": {
//       "Tai": 3,
//       "Nin": 2,
//       "Buki": 2,
//       "Sta": 2,
//       "Ele": 2,
//       "Gen": 2
//     },
//     "Ability": [
//       "flying-revolving-sword",
//       "water-prison",
//       "water-bullet",
//       "giant-waterfall"
//     ],
//     "NinjaID": 73,
//     "Identifier": "zabuza-jounin",
//     "Combos": [
//       37,
//       39
//     ],
//     "NinjaName": "zabuza"
//   },
//   {
//     "Chakra": 5,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 200,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 13,
//       "Buki": 4,
//       "Sta": 22,
//       "Ele": 27,
//       "Gen": 20
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 3,
//       "Buki": 1,
//       "Sta": 1.9,
//       "Ele": 2,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "sound-manipulation",
//       "decapitating-airwaves"
//     ],
//     "Evolved": "zaku-genin",
//     "FixedChakra": true,
//     "NinjaID": 296,
//     "Identifier": "zaku-evolved-genin",
//     "Combos": [
//       25
//     ],
//     "NinjaName": "zaku"
//   },
//   {
//     "Chakra": 12,
//     "Position": 1,
//     "Seal": -5,
//     "Value": 50,
//     "Stats": {
//       "Tai": 8,
//       "Nin": 13,
//       "Buki": 4,
//       "Sta": 12,
//       "Ele": 17,
//       "Gen": 10
//     },
//     "Growth": {
//       "Tai": 1.5,
//       "Nin": 2.3,
//       "Buki": 1,
//       "Sta": 1.4,
//       "Ele": 1.5,
//       "Gen": 1
//     },
//     "Ability": [
//       "body-replacement",
//       "shadow-clone",
//       "sound-manipulation",
//       "decapitating-airwaves"
//     ],
//     "Starter": {
//       "StatPoints": 24,
//       "Teacher": "kabuto-jounin"
//     },
//     "Evolve": "zaku-evolved-genin",
//     "NinjaID": 127,
//     "Identifier": "zaku-genin",
//     "Combos": [
//       25
//     ],
//     "NinjaName": "zaku"
//   },
//   {
//     "Chakra": 20,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 800,
//     "Forbidden": true,
//     "Stats": {
//       "Tai": 30,
//       "Nin": 20,
//       "Buki": 8,
//       "Sta": 35,
//       "Ele": 35,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 5.5,
//       "Nin": 2.5,
//       "Buki": 0.5,
//       "Sta": 2.5,
//       "Ele": 2,
//       "Gen": 3
//     },
//     "Ability": [
//       "infiltration-expert",
//       "zetsu-regeneration",
//       "parasite-clone",
//       "mayfly"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "FixedChakra": true,
//     "NinjaID": 366,
//     "Identifier": "zetsu-fn-jounin",
//     "NinjaName": "zetsu"
//   },
//   {
//     "Chakra": 40,
//     "Position": 2,
//     "Seal": -2,
//     "Value": 450,
//     "Stats": {
//       "Tai": 35,
//       "Nin": 40,
//       "Buki": 30,
//       "Sta": 45,
//       "Ele": 35,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 3.5,
//       "Nin": 2.5,
//       "Buki": 1,
//       "Sta": 1.7,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "infiltration-expert",
//       "zetsu-regeneration",
//       "parasite-clone",
//       "mayfly"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 87,
//     "Identifier": "zetsu-jounin",
//     "Combos": [
//       54
//     ],
//     "NinjaName": "zetsu"
//   },
//   {
//     "Chakra": 60,
//     "Position": 3,
//     "Seal": -3,
//     "Value": 1400,
//     "Stats": {
//       "Tai": 110,
//       "Nin": 60,
//       "Buki": 20,
//       "Sta": 40,
//       "Ele": 35,
//       "Gen": 35
//     },
//     "Growth": {
//       "Tai": 5.2,
//       "Nin": 2,
//       "Buki": 1,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 2
//     },
//     "Ability": [
//       "infiltration-expert",
//       "zetsu-regeneration",
//       "parasite-clone",
//       "mayfly"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 259,
//     "Identifier": "zetsu-kage",
//     "Combos": [
//       54
//     ],
//     "NinjaName": "zetsu"
//   },
//   {
//     "Chakra": 28,
//     "Position": 2,
//     "Seal": 0,
//     "Value": 400,
//     "Stats": {
//       "Tai": 45,
//       "Nin": 35,
//       "Buki": 5,
//       "Sta": 45,
//       "Ele": 45,
//       "Gen": 45
//     },
//     "Growth": {
//       "Tai": 4.5,
//       "Nin": 2,
//       "Buki": 0.5,
//       "Sta": 1.5,
//       "Ele": 1,
//       "Gen": 2.5
//     },
//     "Ability": [
//       "infiltration-expert",
//       "zetsu-regeneration",
//       "parasite-clone",
//       "mayfly"
//     ],
//     "SealBonus": {
//       "Low": {
//         "Reroll": 35,
//         "CritChance": 25
//       },
//       "High": {
//         "Crit": 10,
//         "End": 30
//       }
//     },
//     "NinjaID": 422,
//     "Identifier": "zetsu-plant-jounin",
//     "NinjaName": "zetsu"
//   }
// ]`);
// ninjas.map((ninja) => {
// //   console.log('ninja data for ', ninja.Identifier);
// //   console.log('has chakra ',ninja.Chakra)
// //   console.log('has seal ', ninja.Seal);
// //   console.log('ninja data for',ninja.Growth )
// //   console.log('ninja data for',ninja.Stats )
// //   console.log('ninja data for',ninja.Ability )
// //   console.log('ninja data for ',ninja.NinjaName)
// //   console.log ('ninja has',ninja.SealBonus)
// //   console.log('ninja has id',ninja.NinjaID)
// //   console.log('ninja has fixed chakra',ninja.FixedChakra)
// // }); 
// // const summons = ninjas.filter((ninja) => ninja.Summon === true);
// // const narutos = ninjas.filter((ninja) => {
// //   console.log('similar to above but with a return!');
// //   return ninja.Identifier.startsWith('naruto');
// // });
// const sortedByChakra = ninjas.sort((a,b) => a.Chakra - b.Chakra);