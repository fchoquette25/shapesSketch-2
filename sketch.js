function setup() {
  createCanvas(180,170);
}

function draw() {
  background('lightblue')
  
  //main rectangle
  fill("#FF97CE")
  beginShape()
  vertex(50,50)
  vertex(120,50)
  vertex(120,100)
  vertex(50,100)
  vertex(50,50)
  endShape()
  
  //top handle
  beginShape()
  vertex(120,60)
  vertex(140,60)
  vertex(140,65)
  vertex(120,65)
  endShape()
  
  //side handle
  beginShape()
  vertex(140,60)
  vertex(140,90)
  vertex(135,90)
  vertex(135,60)
  vertex(140,60)
  endShape()
  
  //bottom handle
  beginShape()
  vertex(135,90)
  vertex(120,90)
  vertex(120,85)
  vertex(135,85)
  endShape()
  
  //left eye
  fill("#ffff")
  beginShape()
  vertex(64,60)
  vertex(78,60)
  vertex(78,70)
  vertex(64,70)
  vertex(64,60)
  endShape()
  
  //right eye
  beginShape()
  vertex(92,60)
  vertex(106,60)
  vertex(106,70)
  vertex(92,70)
  vertex(92,60)
  endShape()
  
  //mouth
  fill("#ff9797")
  beginShape()
  vertex(92,80)
  vertex(92,85)
  vertex(78,85)
  vertex(78,80)
  vertex(92,80)
  endShape()
  
  //left pupil
  fill("#000")
  beginShape()
  vertex(68,62)
  vertex(74,62)
  vertex(74,68)
  vertex(68,68)
  vertex(68,62)
  endShape()
  
  //right pupil
  fill("#000")
  beginShape()
  vertex(96,62)
  vertex(102,62)
  vertex(102,68)
  vertex(96,68)
  vertex(96,62)
  endShape()
  
}