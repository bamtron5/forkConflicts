'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function Point(x, y) {
  _classCallCheck(this, Point);

  this.x = x;
  this.y = y;
};

var m = new Map();

m.set('Hello', 'World');
console.log(m.get('Hello'));

m.set(JSON.stringify(new Point(1, 2)), { name: 'Thor', dexterity: 11 });
console.log(m.get(JSON.stringify(new Point(1, 2))));

console.log(m);
'use strict';

var myCommits = ['ae2039f', 'b29309i', '2093j2f', 'NEXT THING', '3093kdl', 'fandango', 'pause'];
var myList = document.getElementById("myList");

var jupiter = document.getElementById("jupiter");
jupiter.className += 'warn';

myCommits.forEach(function (v) {
  myList.innerHTML += '<li>' + v + '</li>';
});
var yourId = document.getElementById("yourId");
yourId.className += "green";
var myId = document.getElementById("myId");
myId.className += "warn";

var yourId = document.getElementById("yourId");
yourId.className += "action";

var data = [];

// HOMEWORK ... create a new games
// Avoid conflicts by pulling from the source and creating PRs
data.push({
  name: 'Metroid Revenge of the Sith',
  release: 1986,
  platform: 'nes',
  bit: 8
});

data.push({
  name: 'Metroid Hunters',
  release: 2005,
  platform: 'DS',
  bit: 16
});

data.push({
  name: 'Halo Combat Evolved',
  release: 2001,
  platform: 'xbox',
  gig: 4

});

var schema = {};
data.map(function (game) {
  return Object.assign(schema, game);
});
data.forEach(function (game, i) {
  Object.keys(schema).forEach(function (key) {
    var elem = document.getElementById('games');
    data[i][key] ? elem.innerHTML += '<p>' + key + ': ' + data[i][key] + '</p>' : function () {
      return null;
    };
  });
});

var cool = document.getElementById("cool");
cool.className += "warn";
'use strict';

var btn = document.getElementById("button").addEventListener('click', soundAlert);
function soundAlert() {
  alert('Hello world');
};
