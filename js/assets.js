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

const floor = new Building(0, 550, 900, 100, "grey");

const myUfo = new Image();
myUfo.src = "./img/ufo-sprite.png";
