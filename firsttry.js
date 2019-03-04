const app = new PIXI.Application(800, 600, { transparent: true });
document.getElementById('display').appendChild(app.view);

const background = PIXI.Sprite.fromImage('pictures/background.png');
const movingGuy = PIXI.Sprite.fromImage('pictures/guy.png');
movingGuy.x = 80;
movingGuy.y = 70;

window.reverse = true;
window.currentIndex = 0;
window.movingGuyInterval = null;

app.stage.addChild(background);
app.stage.addChild(movingGuy);

let waypoints = [
  [80, 70],
  [680, 70],
  [680, 440],
  [125, 440],
  [125, 110],
  [640, 110],
  [640, 400],
  [165, 400],
  [165, 150],
  [600, 150],
  [600, 360],
  [205, 360],
  [205, 190],
  [560, 320],
  [245, 320],
  [245, 230],
  [520, 230],
  [520, 280],
  [520, 280]
];

function setup() {



  moveGuy()
  // app.ticker.add(delta => moveGuy(delta, waypoints, movingGuy));
}

function moveGuy() {

  window.reverse = !window.reverse;
  let count = waypoints.length;
  clearInterval(window.movingGuyInterval);
  movingGuyLogic();
  window.movingGuyInterval = setInterval(movingGuyLogic, 500);
}
function movingGuyLogic() {
  // requestAnimationFrame(movingGuyLogic);
  // movingGuy.x += 5;
  movingGuy.x = waypoints[window.currentIndex][0];
  movingGuy.y = waypoints[window.currentIndex][1];
  // window.currentIndex++;
  if (window.reverse && window.currentIndex != 0) {
    window.currentIndex = window.currentIndex - 1;
  } else if (window.currentIndex == (waypoints.length - 1)) {
    return
  } else if (!window.reverse) {
    window.currentIndex = window.currentIndex + 1;
  }
}