const { produce } = require("immer");
const fruits = ["orange", "apple", "lemon", "banaan"];
const newFruits = produce(fruits, (draft) => {
  draft.splice(1, 2, "strawberry");
});
console.log(fruits);
console.log(newFruits);
const baseState = [
  { todo: "Learn ES6+", done: true },
  { todo: "Try immer", done: false },
];
const newState = [
  ...baseState.map((value) =>
    value.todo === 1 ? { ...value, done: true } : value
  ),
  { todo: "Tweet about it" },
];

const newState2 = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ todo: "Tweet about it" });
});
console.log(baseState);
console.log(newState);
console.log(newState2);
