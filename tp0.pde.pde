PImage triciclo;
void setup(){
  size(800,400);
background(255,255,255);
triciclo=loadImage("triciclo.jpg");

}
  void draw(){
 
image(triciclo, 0,0,400,400);

    noFill();
    stroke(0);
    ellipse(700,250,50,50);
    fill(203,2,2);
    noStroke();
    quad(700,250,705,255,775,275,770,270);
   fill(#959595);
   quad(745,265,750,265,750,220,745,220);
   quad(715,254,720,255,720,220,715,220);
   quad(670,275,675,275,710,224,705,224);
   fill(#E3E1CE);
   noStroke();
   ellipse(740,214,35,35);
  quad(740,195,740,230,700,224,700,220);
     noFill();
     stroke(0);
   ellipse(770,270,50,50);
    noStroke();
    fill(203,2,2);
    quad(730,258,738,264,670,278,675,270);
 quad(670,278,675,270,628,200,620,200);
quad(620,200,628,200,628,250,620,250);
quad(605,250,640,250,640,255,605,255);
quad(605,250,610,250,595,300,590,300);
fill(0);
quad(545,290,565,290,565,280,545,280);
noStroke();
fill(#5D5C56);
quad(590,305,580,305,580,300,590,300);
quad(580,300,585,300,565,290,560,290);
noFill();
stroke(0);
ellipse(605,300,80,80);

noStroke();
fill(203,2,2);
quad(635,250,640,250,625,300,620,300);
fill(#959595);
quad(590,300,625,300,625,305,590,305);

rect(622,175,7,25);
rect(610,170,35,7); 
quad( 610,177,617,177,595,150,587,150);
quad(587,150,593,150,580,160,573,160);
quad(645,170,645,177,670,150,663,150);
quad(670,150,663,150,684,158,694,155);
fill(603,2,2);
quad(573,160,582,160,570,170,560,170);
quad(684,158,694,155,718,165,710,167);
noStroke();
fill(#5D5C56);


quad(625,305,635,305,635,300,625,300);
quad(635,300,650,320,645,320,635,305);
fill(0);
quad(645,320,670,320,670,330,645,330);



  }
