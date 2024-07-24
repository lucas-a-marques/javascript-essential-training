/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push("pencil", 5);
backpackContents.unshift("pencil", 5);
backpackContents.shift();
backpackContents.pop();

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

console.log(backpackContents);
console.log(backpackContents.join(" | "));
console.log(backpackContents.join(" | "));



// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
