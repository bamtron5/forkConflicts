class Point {
  constructor(
    x,
    y
  ) {
    this.x = x;
    this.y = y;
  }
}
let m = new Map();

m.set('Hello', 'World');
console.log(m.get('Hello'));

m.set(JSON.stringify(new Point(1,2)), {name: 'Thor', dexterity: 11})
console.log(m.get(JSON.stringify(new Point(1,2))));

console.log(m);
