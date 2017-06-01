var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(pythagoreanTheorem) {
  // this function is going to do x squared plus y squared and then finding the squre root
  return Math.sqrt((pythagoreanTheorem.x * pythagoreanTheorem.x) + pythagoreanTheorem.y * (pythagoreanTheorem.y));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);