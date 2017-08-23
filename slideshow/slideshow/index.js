var oRightBtn = document.getElementById('carousel_rightBtn');
var oLeftBtn = document.getElementById('carousel_leftBtn');		
var oImagesList = document.getElementById('imagesList').getElementsByTagName('li');
var oCirclesList = document.getElementById('circles').getElementsByTagName('li');
var index = 0;
    oRightBtn.onclick = function(){
      index++;
      if (index >= oImagesList.length) {
        index = 0;
      }
      	move();
    }
  	oLeftBtn.onclick = function(){
      	index--;
	    if (index < 0) {
	    	index = oImagesList.length-1;
		}
		move();
	}
for (var i = 0; i < oCirclesList.length; i++) {
    (function(i){
        oCirclesList[i].onmouseover = function() {
        	index = i;
        	move();
        }
    })(i);
}
function move() {
	for (var i = 0; i < oImagesList.length; i++) {
		oImagesList[i].className = '';
	}
	oImagesList[index].className = 'current';
	
	for (var i = 0; i < oCirclesList.length; i++) {
		oCirclesList[i].className = '';
	}
	oCirclesList[index].className = 'current';	      
}