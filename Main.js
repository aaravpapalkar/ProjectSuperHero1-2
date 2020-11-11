var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_subject = "";
block_image_width = 30;
block_image_height = 30;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    });
}


function newImage(get_image) {
    fabric.Image.fromURL(get_image, function (img) {
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        

        canvas.add(block_image_object);

        
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == '70') {
        newImage("ironman_face.png");
        console.log("f");
    }

    if (keyPressed == '66') {
        newImage("spiderman_body.png");
        console.log("b");
    }

    if (keyPressed == '66') {
        newImage("spiderman_body.png");
        console.log("b");
    }

    if (keyPressed == '82') {
        newImage("thor_right_hand.png");
        console.log("r");
    }

    if (keyPressed == '76') {
        newImage("captain_america_left_hand.png");
        console.log("l");
    }

    if (keyPressed == '72') {
        newImage("ironman_legs.png");
        console.log("h");
    }
}
