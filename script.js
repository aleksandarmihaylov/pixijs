const app = new PIXI.Application(800, 600, { transparent: true });
document.getElementById("display").appendChild(app.view);
const background = PIXI.Sprite.fromImage("pictures/background.png");
const movingGuy = PIXI.Sprite.fromImage("pictures/guy.png");
app.stage.addChild(background);
background.anchor.set(0.5);
background.x = app.screen.width / 2;
background.y = app.screen.height / 2;
app.stage.addChild(movingGuy);

let moveingBackwards = false; // If the guy is moiving backwards
let count = 1; // points of the maze or index of the waypoints array
let pos = "x"; // this is the position that the guy is moving x / y
let state = true; // this boolian changes position from x / y when the guy moves through one point
let waypoints = [
  [80, 100, true], // start
  [680, 100, true], // first point
  [680, 470, true],
  [125, 470, false],
  [125, 140, false],
  [640, 140, true],
  [640, 430, true],
  [165, 430, false],
  [165, 180, false],
  [600, 180, true],
  [600, 390, true],
  [200, 390, false],
  [200, 210, false],
  [565, 210, true],
  [565, 360, true],
  [240, 360, false],
  [240, 250, false],
  [530, 250, true],
  [530, 320, true],
  [295, 320, false], // last point
  [295, 320, false] // finish
];

// guy starting positions
movingGuy.x = waypoints[count - 1][0];
movingGuy.y = waypoints[count - 1][1];

function setup() {
  app.ticker.add(delta => gameLoop(delta));
}

// reversing the moving position of the guy
function reverseArray() {
  moveingBackwards = !moveingBackwards;
  // changing the third element of the array which is responsible for the movement direction
  waypoints.map(waypoint => {
    waypoint[2] = !waypoint[2];
  });
}
function gameLoop(delta) {
  // background.rotation += 0.01;
  // if the direction value [third argument] of the array is true the guy needs to go to the right on the x axis or down on the y axis
  if (waypoints[count][2] && count != 0 && count != (waypoints.length - 1)) {
    movingGuy.anchor.x = 0;
    movingGuy.scale.x = 1;    /* flip guy horizontaly */
    movingGuy[pos] = movingGuy[pos] + 5; // moving the guy to the right or down by 5 pixels
    if (moveingBackwards) {
      if (
        movingGuy.x == waypoints[count - 1][0] &&
        movingGuy.y == waypoints[count - 1][1]
      ) {
        //substracting from the waypoint index
        count = count - 1;
        //change the state which determines if the guy is moving on the x or y axis
        state = !state;
      }
    }
    else if (!moveingBackwards) {
      if (
        movingGuy.x == waypoints[count][0] &&
        movingGuy.y == waypoints[count][1]
      ) {
        //adding to the waypoint index
        count = count + 1;
        state = !state;
      }
    }

  }
  // if the direction value [third argument] of the array is false the guy needs to go to the left on the x axis or up on the y axis
  else if (!waypoints[count][2] && count != 0 && count != (waypoints.length - 1)) {
    movingGuy.anchor.x = 1;
    movingGuy.scale.x = -1;
    movingGuy[pos] = movingGuy[pos] - 5;
    if (moveingBackwards) {
      if (
        movingGuy.x == waypoints[count - 1][0] &&
        movingGuy.y == waypoints[count - 1][1]
      ) {
        count = count - 1;
        state = !state;
      }
    }
    else if (!moveingBackwards) {
      if (
        movingGuy.x == waypoints[count][0] &&
        movingGuy.y == waypoints[count][1]
      ) {
        count = count + 1;
        state = !state;
      }
    }
  }
  //change axis on which the guy is moving
  if (state) {
    pos = "x";
  } else if (!state) {
    pos = "y";
  }
  // stoping animation when guy hits start or goal
  if (count == 0 || count == (waypoints.length - 1)) {
    app.ticker.stop();
  }
}