let img;
let fr = 7;
let t = 10;
let col = color(255, 255, 255, t);


function preload() {
  img = loadImage('./media/Bonsai.jpg');
}
  
function setup() {
  createCanvas(img.width, img.height);
  frameRate(fr)
  image(img, 0, 0, img.width, img.height);
  
}


// a = img.width*0.2123 b=img.width*0.7926 c=img.height*0.8733 d=img.width*0.9841

function draw() {
  
let a = img.width*0.2123;
let b = img.height*0.8733; 
let c = img.width*0.7926; 
let d = img.height*0.9841;
let e = img.height*0.7920;
let f = img.width*0.3770; 
let g = img.width*0.6049; 
let h = img.height*0.7179;
let i = img.width*0.5465;
let j = img.width*0.6502;
let k = img.height*0.6295;
let l = img.width*0.6090; 
let m = img.height*0.4622;
let n = img.width*0.9580;
let o = img.height*0.4860;
let p = img.width*0.028;
let q = img.width*0.5045;
let r = img.height*0.0653;



//  background(220);
if ((mouseX > a) && (mouseX < c) &&
    (mouseY > b) && (mouseY < d)) {
  
      let origins = createA('origins.html', 'Origins');
  fill(color (255,255,255, 10));
  noStroke();
  rect (a, b, abs(a-c), abs(b-d));
  origins.position(abs(a+c)/2-40, abs(b+d)/2);
  // text('Origins', abs(a+c)/2, abs(b+d)/2);
  
  } else if    
    ((mouseX > a) && (mouseX < c) &&
    (mouseY > e) && (mouseY < b)) {
  
      let basics = createA('basics.html', 'Basics');
    fill(color (255,255,255, 10));
    noStroke();
   rect(a, e, abs((a-c)), abs(b-e))
    textSize(32);  
    textAlign(CENTER);
    fill (color (0,0,0));
    basics.position(abs(a+c)/2-40, abs(e+b)/2);
    // text('Basics', abs(a+c)/2, abs(e+b)/2);  
  
    } else if    
    ((mouseX > f) && (mouseX < g) &&
    (mouseY > h) && (mouseY < e)) {
    
    let types = createA('types.html', 'Types');
    fill(color (255,255,255, 10));
    noStroke();
    rect(f, h, abs(f-g), abs((e-h)))
    textSize(32);  
    textAlign(CENTER);
    fill (color (0,0,0));
    types.position(abs((f+g))/2-25, abs((e+h))/2);
    // text('Types', abs((f+g))/2, abs((e+h))/2);      
    
    } else if 
     ((mouseX > i) && (mouseX < n) &&
    (mouseY > k) && (mouseY < h)) {
    
    let interior = createA('indoor.html', 'Indoor');
    fill(color (255,255,255, 10));
    noStroke();
    rect(i, k, abs(i-l), abs(k-h))
    rect(l, m, abs(l-n), abs(m-h))
    textSize(32);  
    textAlign(CENTER);
    fill (color (0,0,0));
    interior.position(abs(i+n)/2-30, abs((o+h))/2);
    // text('Interior', abs(i+n)/2, abs((o+h))/2);      
    
  } else if 
     ((mouseX > p) && (mouseX < g) &&
    (mouseY > m) && (mouseY < h)) {
  
    let exterior = createA('outdoor.html', 'Outdoor');
    fill(color (255,255,255, 10));
    noStroke();
    rect(p, m, abs(p-q), abs(m-h))
    textAlign(CENTER);
    fill (color (0,0,0));
    exterior.position(abs(p+q)/2-80, abs(m+h)/2);
    // text('Exterior', abs(p+q)/2, abs(m+h)/2);      
    
    }
    else if 
     ((mouseX > p) && (mouseX < n) &&
    (mouseY > r) && (mouseY < m)) {
    
    let oldest = createA('oldest.html', 'Oldest Bonsai');
    fill(color (255,255,255, 10));
    noStroke();
    rect(p, r, abs(p-n), abs(r-m))
    textSize(32);  
    textAlign(CENTER);
    fill (color (0,0,0));
    oldest.position(abs(p+n)/2-90, abs(r+m)/2);
    // text('Oldest Bonsais', abs(p+n)/2, abs(r+m)/2);      
    }
    else 
    
    

    {
    image(img, 0, 0, img.width, img.height); 
  }
  
}
  