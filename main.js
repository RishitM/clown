let inconsolata;
var noseX=0
var noseY=0
var hatY=0
var oldX=0
function preload(){
    clown=loadImage("https://i.postimg.cc/Pf6w3Rk9/nosewithglass-removebg-preview.png");
    hat=loadImage("https://i.postimg.cc/zDdxC72X/clownhat-removebg-preview.png");
    inconsolata = loadFont('Inconsolata/static/Inconsolata_SemiCondensed-Medium.ttf');
}
function setup(){
    canvas=createCanvas(300,300,WEBGL)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    console.log("version of ml5= ", ml5.version);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}
function draw(){
image(video,0,0,300,300);
image(clown,noseX,noseY,95,95);
image(hat,oldX,hatY,150,100);
fill(245,0,0);
textSize(20);
text('Hi!i am a clown!', 100,300);
let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('p5.js', 0, 0);

}
function takePic(){
save("Now you are a clown");
};
function modelLoaded(){
    console.log("Posenet Configured!!!!!");
};
function gotPoses(results){
    if (results.length>0){
console.log(results);}
noseX=results[0].pose.nose.x;
noseX=noseX-50;
oldX=noseX-20
noseY=results[0].pose.nose.y;
noseY=noseY-70
hatY=noseY-130
console.log(noseX," is the x of the nose and, ",noseY,"is the y of the nose")
}