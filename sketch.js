var splashScreen
var playbutton
var gameState="wait"

function preload(){
splashScreen=loadImage("assets/splash.gif")
}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton = createImg("assets/play_button.png");
    playbutton.position(650, 300);
    playbutton.size(350, 350);
    playbutton.hide();

   aboutbutton = createImg("assets/about_button.png");
   aboutbutton.position(450, 300);
   aboutbutton.size(350, 350);
   aboutbutton.hide();
}

function draw(){
    if (gameState=="wait"){
        background(splashScreen);
        playbutton.show();
        aboutbutton.show();

        aboutbutton.mousePressed(() => {
            playbutton.hide();
            aboutbutton.hide();
            gameState = "about";
    
        })

        if (gameState == "about") {
            aboutgame();
        }
    }

drawSprites();
}

function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Play an archery game.Click spacebar to release the arrow",
        textAlign: "center",
        imageUrl: "assets/archery_board.png",
        imageSize: "200x200",
        confirmButtonText: "Lets Play",
        confirmButtonColor: "brown",
    },
        function () {
            gameState = "wait"
        }

    )


}