function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    takePic()
}
function draw(){
image(video,0,0,300,300);
}
function takePic(){
save("Now you are a clown")
}