var myCommits = [
  'ae2039f',
  'b29309i',
  '2093j2f',
  'NEXT THING',
  '3093kdl',
  'fandango',
  'pause'
];
var myList = document.getElementById("myList");

var jupiter = document.getElementById("jupiter");
jupiter.className += 'warn';

myCommits.forEach((v) => {
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
data.map((game) => Object.assign(schema, game));
data.forEach((game, i) => {
  Object.keys(schema).forEach((key) => {
    var elem = document.getElementById('games');
    data[i][key] ? elem.innerHTML += '<p>' + key + ': ' + data[i][key] + '</p>' : () => null;
  });
});

var cool = document.getElementById("cool");
cool.className += "warn";
