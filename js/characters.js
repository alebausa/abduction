const character1 = {
  sprite: new Image(),
  width: 64,
  x: 156
};
character1.sprite.src = "./img/people.png";

const character2 = {
  sprite: new Image(),
  width: 64,
  x: 405
};
character2.sprite.src = "./img/people.png";

const character3 = {
  sprite: new Image(),
  width: 64,
  x: 529
};
character3.sprite.src = "./img/people.png";

const character4 = {
  sprite: new Image(),
  width: 64,
  x: 657
};
character4.sprite.src = "./img/people.png";

const character5 = {
  sprite: new Image(),
  width: 64,
  x: 1031
};
character5.sprite.src = "./img/people.png";

var characters = [character1, character2, character3, character4, character5];
var randomCharacter = Math.floor(Math.random() * characters.length);
