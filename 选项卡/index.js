var oSpans = document.getElementById('tab_hd').getElementsByTagName('span');
var oDivs = document.getElementById('tab_bd').getElementsByTagName('div');
for (var i = 0; i < oSpans.length; i++) {
	(function(i){
		oSpans[i].onmouseover = function (){
			for (var j = 0; j < oDivs.length; j++) {
				oDivs[j].className = '';
			}
			oDivs[i].className = 'current';
			for (j = 0; j < oSpans.length; j++) {
				oSpans[j].className = '';
			}
			oSpans[oSpans.length -1].className = 'last';
			this.className += ' current';
		}
	})(i)
}