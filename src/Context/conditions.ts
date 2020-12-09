import { conditionInterface } from "../interface";

export const conditions: conditionInterface[] = [
  {
    type: "cost",
    condition: "the cost of cards in your deck must not exceed",
    variety: true,
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  {
    type: "cost",
    condition: "the cost of cards in your deck must at least be",
    variety: true,
    options: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    type: "cost",
    condition: "all cards in your deck must cost",
    variety: true,
    options: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    type: "type",
    condition: "all minions must be of type",
    variety: true,
    options: [
      "beast",
      "mech",
      "dragon",
      "elemntal",
      "demon",
      "murlock",
      "pirate",
    ],
  },
  {
    type: "type",
    condition: "minions must have",
    variety: true,
    options: ["rush", "taunt"],
  },
  {
    type: "effect",
    condition: "all of your minions must have",
    variety: true,
    options: ["deathrattle", "battlecry"],
  },
  {
    type: "effect",
    condition: "only minions with effects are allowed",
    variety: false,
  },
  {
    type: "deck",
    condition: "random deck",
    variety: false,
  },
  {
    type: "deck",
    condition: "spells only",
    variety: false,
  },
  {
    type: "deck",
    condition: "minions only",
    variety: false,
  },
  {
    type: "deck",
    condition: "half a deck",
    variety: false,
  },
  {
    type: "crazy",
    condition:
      "sudden death: hero abilities are banned. only cards with cost 5 or more can be used. the player who takes direct health damage first loses",
    variety: false,
  },
  {
    type: "crazy",
    condition:
      "Fitsfight: minions and spells can't target the enemy hero. the only way to attack is using hero weapon or hero skill",
    variety: false,
  },
  {
    type: "crazy",
    condition:
      "Girls Only: your hero must be a female, and all minions in your deck must be females as well",
    variety: false,
  },
];
