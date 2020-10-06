///////////////////////////// SEKECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

///////////////////////////// GAME VARS AND CONSTS
let frames = 0;


////////////////////////////// LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "./img/sprite.png";


////////////////////////////// BACKGROUND
const bg = {
    sX: 0,
    sY: 0,
    w: 275,
    h: 226,
    x: 0,
    y: cvs.height - 226,

    draw : function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w , this.y, this.w, this.h);
    }
}

////////////////////////////// FOREROUND
const fg = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: cvs.height - 112,

    draw : function() {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w , this.y, this.w, this.h);
    }
}

////////////////////////////// BIRD
const bird = {
    animation = [
        {sX: 276,sY: 112},
        {sX: 276,sY: 139},
        {sX: 276,sY: 164},
        {sX: 276,sY: 139}
    ]
}

////////////////////////////// DRAW
function draw() {
    ctx.fillStyle = "#94d2ff"
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.height)

    bg.draw();
    fg.draw();

}


///////////////////////////// UPDATE
function update() {

}


///////////////////////////// LOOP
function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}

loop();