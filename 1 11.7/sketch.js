var mySound1; 
var mySound2; 
var mySound3;
var mySound4; 
var mySound5;  

var x = 100
var y = 120
var xRate = 8
var yRate = 4
//var img ;
var d1,d2,d3,d4,d5


function preload(){

mySound1= loadSound("assets/cello.mp3");
mySound2 = loadSound("assets/Romantic Guitar.mp3");
mySound3= loadSound("assets/sad_violun.mp3");
mySound4 = loadSound("assets/Drum4.mp3");
mySound5= loadSound("assets/piano.mp3");


}


function setup(){

createCanvas(600,600);



}

function draw() {

background(mouseX,mouseY,0);

//mySound.play();
fill(mouseX,80,mouseX);

//texture(img);

ellipse(50,100,100, 100);


ellipse(160,100,100, 100);


ellipse(270,100,100, 100);

ellipse(380,100,100, 100);

ellipse(500,100,100, 100);

textSize(50);
fill(mouseY,0,mouseX)
text("Instrument Picker 3000", 30,300);



//line(x,y,mouseX, mouseY);
if (mouseIsPressed)
	{

d1=dist(mouseX, mouseY, 50, 100);
d2=dist(mouseX, mouseY, 160, 100);
d3=dist(mouseX, mouseY, 270, 100);
d4=dist(mouseX, mouseY, 380, 100);
d5=dist(mouseX, mouseY, 500, 100);

if(d1<100){

	mySound1.play();
	mySound2.stop();
	mySound3.stop();
	mySound4.stop();
	mySound5.stop();
	
}else if(d2<100){
mySound2.play();
	mySound1.stop();
	
	mySound3.stop();
	mySound4.stop();
	mySound5.stop();
	
	
}else if(d3<100){
mySound3.play();
	mySound1.stop();
	
	mySound2.stop();
	mySound4.stop();
	mySound5.stop();
	
}else if(d4<100){
mySound4.play();
	mySound1.stop();
	
	mySound3.stop();
	mySound2.stop();
	mySound5.stop();
	
}else if(d5<100){
mySound5.play();
	mySound1.stop();
	
	mySound3.stop();
	mySound4.stop();
	mySound2.stop();
	
}else if(d1>100 && d2>100 && d3>100 && d4>100 && d5>100){

mySound1.stop();
	mySound2.stop();
	mySound3.stop();
	mySound4.stop();
	mySound5.stop();
		
}
}

// x += xRate;
// y += yRate;

// if( x > width  || x < 40){
	// xRate *= -1;
// mySound.play();


// }
// if(y > height  || y < 40){
	// yRate *= -1;
// mySound1.play();

// }
}



function mousePressed() {

	  

	}




	