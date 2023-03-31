var points = [[12, 2], [5, 5], [2, 5],[-3,7],[-1,4,5],[-6,4],[-11,-1],[-7,-5],[-1,-7],[3,-8],[5,-11],[4,-7],[6,-5],[3,-6],[2,-6],[-1,-5]]; //list資料\
var frameSize = [200]; // 定義外框大小


function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}
function draw() {
  background(255);
  translate(width / 2, height / 2);

  // 繪製五個不同的外框
  for (var k = 1; k <= 5; k++) {
    // 將整個畫面放大1.5倍
    scale(1.2);

    for (var i = 0; i < points.length - 1; i++) {
      var c1 = color("#ef233c"); // 隨便找的
      var c2 = color("#f4978e"); // 粉色(?)
      var c3 = color("#ffe5ec"); // 粉色(?)
      var c4 = color("#f72585"); // 已經不知道在找啥了
      gradientLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], c1, c2, c3, c4);
    }
    var c1 = color(255, 0, 0);
    var c2 = color(0, 0, 255);
    gradientLine(points[points.length - 1][0], points[points.length - 1][1], points[0][0], points[0][1], c1, c2);
  }
}


function gradientLine(x1, y1, x2, y2, c1, c2) {
  let steps = dist(x1, y1, x2, y2);
  for (var i = 0; i <= steps; i++) {
    var inter = i/steps;
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    point(lerp(x1, x2, inter), lerp(y1, y2, inter));
   
    textSize(30);
    fill(0, 102, 153);
    text("淡江大學教育科技系",-80,0);

         }
}

      









