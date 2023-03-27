video ="";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    Image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modeLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.vloume(0);
}