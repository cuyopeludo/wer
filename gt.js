

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

poseNet=ml5.poseNet(video, hy)
 poseNet.on("pose", fv)
}





function hy(){

console.log("poseNet")

}

function fv(qwe){
if (qwe.length>0) {
    console.log(qwe);
    noseX=qwe[0].pose.nose.x;
    noseY=qwe[0].pose.nose.y;
    rightWristX=qwe[0].pose.rightWrist.x;
    leftWristX=qwe[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX)
    console.log("se actualizo");


}




}





function draw() {
  background('#969A97');
  
  fill("#F90093");
  stroke("#F90093");
  square(noseX, noseY, difference);
  }






