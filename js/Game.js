class Game {
  constructor() {
    this.resetButton = createButton("Reset");
    this.rockButton = createButton("Rock");
    this.paperButton = createButton("Paper");
    this.scissorButton = createButton("Scissor");

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    // item = new Item();

    papers = createGroup()
    rocks = createGroup()
    scissors = createGroup()
    papers2 = createGroup()
    rocks2 = createGroup()
    scissors2 = createGroup()

    form = new Form();
    form.show();

    p1 = createSprite(50, height / 2, 50, 50);
    p1.shapeColor = "red";

    p2 = createSprite(width - 50, height / 2, 50, 50);
    p2.shapeColor = "yellow"

    players = [p1, p2];
  }

  handleElements() {

    this.resetButton.class("resetButton");
    this.resetButton.position(50, 80);


    this.rockButton.size(80, 40);
    this.rockButton.class("customButton2");
    this.rockButton.position(width / 2 + 90, height - 50);
    this.paperButton.position(width / 2, height - 50);
    this.paperButton.class("customButton2");
    this.scissorButton.position(width / 2 - 90, height - 50);
    this.scissorButton.size(80, 40);
    this.scissorButton.class("customButton2");


  }


  play() {
    this.handleElements();
    this.handleShoot()

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) {
          //console.log(index);
          //stroke(10);
          //fill("red");
          //ellipse(x, y, 60, 60);

          // Changing camera position in y direction
          //camera.position.x = cars[index - 1].position.x;
          //camera.position.y = cars[index - 1].position.y;
        }
      }

      this.handlePlayerControls();
      this.handleResetButton()

      drawSprites();
    }
  }

  handlePlayerControls() {
    // handling keyboard events
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      player.positionY += 10;
      player.update();
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      player.positionY -= 10;
      player.update();
    }
  }
  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
      });
      window.location.reload();
    });
  }
  handleShoot() {
    this.paperButton.mouseReleased(() => {
      console.log("paper Pressed")
      //itemNo += 1
      /*//paper = createSprite()
      //paper.addImage("paperImg")
      //paper.x = this.positionX
      //paper.y = this.positionY
      item = new Item
      if(player.index = 1){
        item.positionX = player.positionX
        item.positionY = player.positionY
      }
      item.addItem()*/

      paper = new Item()
      paper.type = "paper"
      if (player.index === 1) {
        paperShot = createSprite(p1.x, p1.y)
        paperShot.addImage("paper", paperImg)
        papers.add(paperShot)
        paperShot.scale = 0.4
        paperShot.x += 1
        paper.positionX = paperShot.x
        paper.positionY = paperShot.y
        paper.side = 1
        paper.addItem()
      } else {
        paperShot2 = createSprite(p2.x, p2.y)
        papers2.add(paperShot2)
        paperShot2.addImage("paper2", paperImg)
        paperShot2.scale = 0.4
        paperShot2.x -= 1
        paper.positionX = paperShot2.x
        paper.positionY = paperShot2.y
        paper.side = 2
        paper.addItem()
      }






    })
    this.rockButton.mouseReleased(() => {
      console.log("rock Pressed")
      //itemNo += 1
      /*//rock = createSprite()
      //rock.addImage("rockImg")
      //rock.x = this.positionX
      //rock.y = this.positionY
      item = new Item
      if(player.index = 1){
        item.positionX = player.positionX
        item.positionY = player.positionY
      }
      item.addItem()
*/

      rock = new Item()
      rock.type = "rock"
      if (player.index === 1) {
        rockShot = createSprite(p1.x, p1.y)
        rocks.add(rockShot)
        rockShot.addImage("rock", rockImg)
        rockShot.scale = 0.5
        rockShot.x += 1
        rock.side = 1
        rock.addItem()
      } else {
        rockShot2 = createSprite(p2.x, p2.y)
        rocks2.add(rockShot2)
        rockShot2.addImage("rock2", rockImg)
        rockShot2.scale = 0.5
        rockShot2.x -= 1
        rock.side = 2
        rock.addItem()
      }






    })
    this.scissorButton.mouseReleased(() => {
      console.log("scissors Pressed")
      //itemNo += 1
      /*//scissor = createSprite()
      //scissor.addImage("scissorImg")
      //scissor.x = this.positionX
      //scissor.y = this.positionY
      item = new Item
      if(player.index = 1){
        item.positionX = player.positionX
        item.positionY = player.positionY
      }
      item.addItem()*/

      scissor = new Item()
      scissor.type = "scissor"
      if (player.index === 1) {
        scissorShot = createSprite(p1.x, p1.y)
        scissorShot.addImage("scissor", scissorImg)
        scissors.add(scissorShot)
        scissorShot.scale = 0.4
        scissorShot.x += 1
        scissor.side = 1
        scissor.addItem()

      } else {
        scissorShot2 = createSprite(p2.x, p2.y)
        scissorShot2.addImage("scissor2", scissor2Img)
        scissors2.add(scissorShot2)
        scissorShot2.scale = 0.4
        scissorShot2.x -= 1
        scissor.side = 2
        scissor.addItem()

      }
      





    })


  }
}
