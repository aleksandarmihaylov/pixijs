const app = new PIXI.Application(800, 600, { transparent: true });
document.getElementById("display").appendChild(app.view);
const background = PIXI.Sprite.fromImage("images/background.png");
const movingGuy = PIXI.Sprite.fromImage("images/guy.png");
movingGuy.x = 660;
movingGuy.y = 70;
window.reverse = false;
window.currentIndex = 0;
window.movingGuyInterval = null;
app.stage.addChild(background);
app.stage.addChild(movingGuy);
let waypoints = [
  [680, 70, true, 'x'],
  [680, 440, true, 'y'],
  [125, 440, false, 'x'],
  [125, 110, false, 'y'],
  [640, 110, true, 'x'],
  [640, 400, true, 'y'],
  [165, 400, false, 'x'],
  [165, 150, false, 'y'],
  [600, 150, true, 'x'],
  [600, 360, true, 'y'],
  [205, 360, false, 'x'],
  [205, 190, false, 'y'],
  [560, 190, true, 'x'],
  [560, 330, true, 'y'],
  [240, 330, false, 'x'],
  [240, 220, false, 'y'],
  [530, 220, true, 'x'],
  [530, 300, true, 'y'],
  [295, 300, false, 'x'],
];

function reverseArray() {
  window.reverse = !window.reverse;
  waypoints.map(waypoint => {
    waypoint[2] = !waypoint[2];
  })
  if (window.reverse) {
    count = count - 1;
    console.log(count);
  }
  else if (!window.reverse) {
    count = count + 1;
    console.log(count);
  }
  // waypoints.reverse();
}

function setup() {
  app.ticker.add(delta => gameLoop(delta));
}

//GET INDEX
var count = 0;
// state = true;
// pos = "x";
function gameLoop(delta) {
  console.log(count)
  // console.log(movingGuy.x);
  // console.log(movingGuy.y);
  if (waypoints[count][2]) {
    movingGuy[waypoints[count][3]] = movingGuy[waypoints[count][3]] + 5;
    if (
      movingGuy.x == waypoints[count][0] &&
      movingGuy.y == waypoints[count][1]
    ) {
      if (window.reverse) {
        count = count - 1;
      }
      else if (!window.reverse) {
        count = count + 1;
      }
      // count = count + 1;
      // state = !state;
    }
  } else if (!waypoints[count][2]) {
    movingGuy[waypoints[count][3]] = movingGuy[waypoints[count][3]] - 5;
    if (
      movingGuy.x == waypoints[count][0] &&
      movingGuy.y == waypoints[count][1]
    ) {
      if (window.reverse) {
        count = count - 1;
      }
      else if (!window.reverse) {
        count = count + 1;
      }
      // count = count + 1;
      // state = !state;
    }
  }
  // if (state) {
  //   pos = "x";
  // } else if (!state) {
  //   pos = "y";
  // }
}
