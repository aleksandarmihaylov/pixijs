const app = new PIXI.Application(800, 550, { transparent: true });
document.getElementById('display').appendChild(app.view);

// c = new Charm(PIXI);

const background = PIXI.Sprite.fromImage('images/background.png');
const movingGuy = PIXI.Sprite.fromImage('images/guy.png');
var collision = undefined;
var startX = 735;
var moveY = 500;
// let waypoints = [
//   [80, 70],
//   [680, 70],           //First x/y point
//   [680, 440],         //Next x/y point
//   [125, 440],        //Next x/y point
//   [125, 110],         //Next x/y point
//   [640, 110],
//   [640, 400],
//   [165, 400],
//   [165, 150],
//   [600, 150],
//   [600, 360],
//   [205, 360],
//   [205, 190],
//   [560, 320],
//   [245, 320],
//   [245, 230],
//   [520, 230],
//   [520, 280],
//   [520, 280],            //Last x/y point
// ];

// background.anchor.set(1);

// background.x = app.screen.width;
// background.y = app.screen.height;
// start x = 85 y =70 end of first line x 680 y 70 end is 680 440 125 440
movingGuy.x = 80;
movingGuy.y = 70;


app.stage.addChild(background);
app.stage.addChild(movingGuy);

// c.walkPath(
//   movingGuy,       //The sprite
//   waypoints,       //The array of waypoints
//   300,             //Total duration, in frames
//   "smoothstep",    //Easing type
//   true,            //Should the path loop?
//   true,            //Should the path reverse?
//   1000             //Delay in milliseconds between segments
// );




// in order to rotate GROUP the sprites
// app.ticker.add(function () {
//   // rotating the image
//   background.rotation += 0.01;
// });


function contain(sprite, container) {
  console.log('yes');
  //Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  //Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  //Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  //Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
    console.log(startX);
    // startX -= 40;
    console.log(startX);
  }
  //Return the `collision` value
  return collision;

}


function moveGuy() {
  requestAnimationFrame(moveGuy);
  if (collision === undefined) {
    movingGuy.x += 5;
  }
  if (collision === 'right') {
    movingGuy.y += 5;
  }
  if (collision === 'bottom') {
    movingGuy.x -= 5;
  }
  if (collision === 'left') {
    movingGuy.y -= 5;
  }
  if (collision === "top") {
    movingGuy.x += 5;
  }

  // if (movingGuy.y === 70 && movingGuy.x < 685) {
  //   movingGuy.x += 5;
  //   // console.log(movingGuy.x);
  //   // console.log(movingGuy.y);
  // }
  // if (movingGuy.x === 685 && movingGuy.y < 444) {
  //   movingGuy.y += 5;
  // }
  // if (movingGuy.y === 445 && movingGuy.x > 130) {
  //   movingGuy.anchor.x = 1;
  //   movingGuy.scale.x = -1;
  //   movingGuy.x -= 2;

  // }
  // if (movingGuy.x === 130 && movingGuy.y < 110) {
  //   movingGuy.scale.x = 0;
  //   movingGuy.y += 2;
  // }
  console.log(movingGuy.x);
  if (movingGuy.x === startX) {
    startX -= 40;
  }

  contain(movingGuy, { x: 80, y: 70, width: startX, height: moveY });
}

moveGuy();
