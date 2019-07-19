const windows = [
  //red building
  new Window(135, 345, 20, 20, "black"),
  new Window(195, 345, 20, 20, "black"),
  new Window(135, 390, 20, 20, "black"),
  new Window(195, 390, 20, 20, "black"),
  new Window(135, 435, 20, 20, "black"),
  new Window(195, 435, 20, 20, "black"),
  new Window(135, 480, 20, 20, "black"),
  new Window(195, 480, 20, 20, "black"),
  //yellow building
  new Window(275, 375, 20, 20, "black"),
  new Window(315, 375, 20, 20, "black"),
  new Window(355, 375, 20, 20, "black"),
  new Window(275, 420, 20, 20, "black"),
  new Window(315, 420, 20, 20, "black"),
  new Window(355, 420, 20, 20, "black"),
  new Window(275, 465, 20, 20, "black"),
  new Window(315, 465, 20, 20, "black"),
  new Window(355, 465, 20, 20, "black"),
  new Window(275, 510, 20, 20, "black"),
  new Window(315, 510, 20, 20, "black"),
  new Window(355, 510, 20, 20, "black"),
  //twin tower 1
  new Window(560, 210, 20, 20, "black"),
  new Window(520, 250, 20, 20, "black"),
  new Window(560, 250, 20, 20, "black"),
  new Window(520, 210, 20, 20, "black"),
  new Window(520, 290, 20, 20, "black"),
  new Window(560, 290, 20, 20, "black"),
  new Window(520, 330, 20, 20, "black"),
  new Window(560, 330, 20, 20, "black"),
  new Window(520, 370, 20, 20, "black"),
  new Window(560, 370, 20, 20, "black"),
  new Window(520, 410, 20, 20, "black"),
  new Window(560, 410, 20, 20, "black"),
  new Window(520, 450, 20, 20, "black"),
  new Window(560, 450, 20, 20, "black"),
  new Window(520, 490, 20, 20, "black"),
  new Window(560, 490, 20, 20, "black"),
  //twin tower 2
  new Window(640, 210, 20, 20, "black"),
  new Window(680, 210, 20, 20, "black"),
  new Window(640, 250, 20, 20, "black"),
  new Window(680, 250, 20, 20, "black"),
  new Window(640, 290, 20, 20, "black"),
  new Window(680, 290, 20, 20, "black"),
  new Window(640, 330, 20, 20, "black"),
  new Window(680, 330, 20, 20, "black"),
  new Window(640, 370, 20, 20, "black"),
  new Window(680, 370, 20, 20, "black"),
  new Window(640, 410, 20, 20, "black"),
  new Window(680, 410, 20, 20, "black"),
  new Window(640, 450, 20, 20, "black"),
  new Window(680, 450, 20, 20, "black"),
  new Window(640, 490, 20, 20, "black"),
  new Window(680, 490, 20, 20, "black")
];

const buildings = [
  new Building(100, 325, 150, 225, "brown"),
  new Building(255, 350, 145, 200, "gold"),
  new Building(500, 190, 100, 360, "blue"),
  new Building(620, 190, 100, 360, "blue")
];

// const enemiesRight = [];
// var x = 950;
// for (let i = 0; i < 300; i++) {
//   x += 500;
//   i = new Enemie(x, 530, 20, 20, "brown");
//   enemiesRight.push(i);
// }

// const enemiesRight = [
//   new Enemie(950, 520, 25, 50, "brown"),
//   new Enemie(900, 520, 25, 50, "brown"),
//   new Enemie(980, 520, 25, 50, "brown"),
//   new Enemie(3300, 520, 25, 50, "brown"),
//   new Enemie(4600, 520, 25, 50, "brown"),
//   new Enemie(6000, 520, 25, 50, "brown"),
//   new Enemie(1200, 520, 25, 50, "brown"),
//   new Enemie(9100, 520, 25, 50, "brown"),
//   new Enemie(10100, 520, 25, 50, "brown"),
//   new Enemie(9100, 520, 25, 50, "brown"),
//   new Enemie(11100, 520, 25, 50, "brown"),
//   new Enemie(13100, 520, 25, 50, "brown"),
//   new Enemie(17100, 520, 25, 50, "brown")
// ];

// const enemiesLeft = [
//   new Enemie(-20, 540, 10, 10, "brown"),
//   new Enemie(-50, 540, 10, 10, "brown")
// ];

const myUfo = {
  sprite: new Image(),
  width: 56,
  x: 2.5,
  actualStep: 1,
  totalSteps: 6
};
myUfo.sprite.src = "./img/ufo-sprite.png";

const myFloor = {
  sprite: new Image(),
  width: 384,
  x: 15
};
myFloor.sprite.src = "./img/floor.png";

const wallOne = {
  sprite: new Image(),
  width: 695,
  x: 0
};
wallOne.sprite.src = "./img/greywall.jpg";

const windowOff = {
  sprite: new Image(),
  width: 649,
  x: 71
};
windowOff.sprite.src = "./img/windowframe_empty.png";

const windowOn = {
  sprite: new Image(),
  width: 649,
  x: 71
};
windowOn.sprite.src = "./img/windowframe_on.png";

const policeCar = {
  sprite: new Image(),
  width: 145,
  x: 5,
  y: 164,
  actualStep: 1,
  totalSteps: 4
};
policeCar.sprite.src = "./img/policecar.png";

const ghostRight = {
  sprite: new Image(),
  width: 33,
  height: 57,
  x: 3,
  y: 28,
  actualStep: 1,
  totalSteps: 9
};
ghostRight.sprite.src = "./img/ghosts-transp.png";

const ghostLeft = {
  sprite: new Image(),
  width: 32,
  height: 57,
  x: 94,
  y: 236,
  actualStep: 1,
  totalSteps: 9
};
ghostLeft.sprite.src = "./img/ghosts-transp.png";

const character = {
  sprite: new Image(),
  width: 64,
  x: 905,
  y: 194
};
character.sprite.src = "./img/people.png";
