const app = new PIXI.Application(800, 600, { transparent: true });
document.getElementById("display").appendChild(app.view);
const background = PIXI.Sprite.fromImage("images/background.png");
const movingGuy = PIXI.Sprite.fromImage("images/guy.png");
movingGuy.x = 660;
movingGuy.y = 70;
window.reverse = true;
window.currentIndex = 0;
window.movingGuyInterval = null;
app.stage.addChild(background);
app.stage.addChild(movingGuy);
let waypoints = [
  [680, 70, true],
  [680, 440, true],
  [125, 440, false],
  [125, 110, false],
  [640, 110, true],
  [640, 400, true],
  [165, 400, false],
  [165, 150, false],
  [600, 150, true],
  [600, 360, true],
  [205, 360, false],
  [205, 190, false],
  [560, 190, true],
  [560, 330, true],
  [240, 330, false],
  [240, 220, false],
  [530, 220, true],
  [530, 300, true],
  [295, 300, false]
];

// function reverseArray() {
//   console.log('whyyyyyy')
//   waypoints.map(waypoint => {
//     waypoint[2] = !waypoint[2];
//   })
//   waypoints.reverse();
//   console.log(waypoints);
// }

function setup() {
  app.ticker.add(delta => gameLoop(delta));
}

var count = 0;
state = true;
pos = "x";
function gameLoop(delta) {
  if (waypoints[count][2]) {
    movingGuy[pos] = movingGuy[pos] + 5;
    if (
      movingGuy.x == waypoints[count][0] &&
      movingGuy.y == waypoints[count][1]
    ) {
      count = count + 1;
      state = !state;
    }
  } else if (!waypoints[count][2]) {
    movingGuy[pos] = movingGuy[pos] - 5;
    if (
      movingGuy.x == waypoints[count][0] &&
      movingGuy.y == waypoints[count][1]
    ) {
      count = count + 1;
      state = !state;
    }
  }
  if (state) {
    pos = "x";
  } else if (!state) {
    pos = "y";
  }
}