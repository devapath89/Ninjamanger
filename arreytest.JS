let arrayOfObjects = [
    {
      "Chakra": 20,
      "Position": 2,
      "Seal": -2,
      "Value": 800,
      "Forbidden": true,
      "Stats": {
        "Tai": 30,
        "Nin": 20,
        "Buki": 8,
        "Sta": 35,
        "Ele": 35,
        "Gen": 35
      },
      "Growth": {
        "Tai": 5.5,
        "Nin": 2.5,
        "Buki": 0.5,
        "Sta": 2.5,
        "Ele": 2,
        "Gen": 3
      },
      "Ability": [
        "infiltration-expert",
        "zetsu-regeneration",
        "parasite-clone",
        "mayfly"
      ],
      "SealBonus": {
        "Low": {
          "Reroll": 35,
          "CritChance": 25
        },
        "High": {
          "Crit": 10,
          "End": 30
        }
      },
      "FixedChakra": true,
      "NinjaID": 366,
      "Identifier": "zetsu-fn-jounin",
      "NinjaName": "zetsu"
    },
    {
      "Chakra": 40,
      "Position": 2,
      "Seal": -2,
      "Value": 450,
      "Stats": {
        "Tai": 35,
        "Nin": 40,
        "Buki": 30,
        "Sta": 45,
        "Ele": 35,
        "Gen": 35
      },
      "Growth": {
        "Tai": 3.5,
        "Nin": 2.5,
        "Buki": 1,
        "Sta": 1.7,
        "Ele": 1,
        "Gen": 2
      },
      "Ability": [
        "infiltration-expert",
        "zetsu-regeneration",
        "parasite-clone",
        "mayfly"
      ],
      "SealBonus": {
        "Low": {
          "Reroll": 35,
          "CritChance": 25
        },
        "High": {
          "Crit": 10,
          "End": 30
        }
      },
      "NinjaID": 87,
      "Identifier": "zetsu-jounin",
      "Combos": [
        54
      ],
      "NinjaName": "zetsu"
    },
    {
      "Chakra": 60,
      "Position": 3,
      "Seal": -3,
      "Value": 1400,
      "Stats": {
        "Tai": 110,
        "Nin": 60,
        "Buki": 20,
        "Sta": 40,
        "Ele": 35,
        "Gen": 35
      },
      "Growth": {
        "Tai": 5.2,
        "Nin": 2,
        "Buki": 1,
        "Sta": 1.5,
        "Ele": 1,
        "Gen": 2
      },
      "Ability": [
        "infiltration-expert",
        "zetsu-regeneration",
        "parasite-clone",
        "mayfly"
      ],
      "SealBonus": {
        "Low": {
          "Reroll": 35,
          "CritChance": 25
        },
        "High": {
          "Crit": 10,
          "End": 30
        }
      },
      "NinjaID": 259,
      "Identifier": "zetsu-kage",
      "Combos": [
        54
      ],
      "NinjaName": "zetsu"
    },
    {
      "Chakra": 28,
      "Position": 2,
      "Seal": 0,
      "Value": 400,
      "Stats": {
        "Tai": 45,
        "Nin": 35,
        "Buki": 5,
        "Sta": 45,
        "Ele": 45,
        "Gen": 45
      },
      "Growth": {
        "Tai": 4.5,
        "Nin": 2,
        "Buki": 0.5,
        "Sta": 1.5,
        "Ele": 1,
        "Gen": 2.5
      },
      "Ability": [
        "infiltration-expert",
        "zetsu-regeneration",
        "parasite-clone",
        "mayfly"
      ],
      "SealBonus": {
        "Low": {
          "Reroll": 35,
          "CritChance": 25
        },
        "High": {
          "Crit": 10,
          "End": 30
        }
      },
      "NinjaID": 422,
      "Identifier": "zetsu-plant-jounin",
      "NinjaName": "zetsu"
    }
  ]
    
  
  
  let  oldEnoughForCar = arrayOfObjects.filter(Ninja => Ninja.NinjaName== "zetsu");
  
  console.log(oldEnoughForCar)
  