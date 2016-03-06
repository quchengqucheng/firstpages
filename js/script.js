function addLoadEvent(func) {
	var oldonLoad = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else {
		window.onload = function() {
			oldonLoad();
			func();
		}
	}
}
function piconclick(i) {
	var introduction = document.getElementById("introduction"+(i+1));
	var count=0;
		if(introduction.style.display == "none") {
			introduction.style.display = "block";
			for(var j=0;j<4;j++)
			{
				if(j!=i&&document.getElementById("introduction"+(j+1)).style.display=="block")
				document.getElementById("introduction"+(j+1)).style.display="none";
			}
		} else {
			for(var j=0;j<4;j++)
			{
				if(j!=i&&document.getElementById("introduction"+(j+1)).style.display=="none") count++;
				document.getElementById("introduction"+(j+1)).style.display="none";
			}
			if(count == 3) introduction.style.display = "block";
			else introduction.style.display = "none";
		}
}
function prepareShowpic() {
	var piclist = document.getElementById("showpic");
	var pics = piclist.getElementsByTagName("a");
	pics[0].onclick = function() {
		piconclick(0);
	}
	pics[1].onclick = function() {
		piconclick(1);
	}
	pics[2].onclick = function() {
		piconclick(2);
	}
	pics[3].onclick = function() {
		piconclick(3);
	}
		
}
function bottomonclick(i) {
	var bottom = document.getElementById("newtext"+(i+1));
	var count=0;
		if(bottom.style.display == "none") {
			bottom.style.display = "block";
		} else {
			bottom.style.display = "none";
		}
}
function preparebottoms() {
	var bottomlist = document.getElementById("show");
	var bottoms = bottomlist.getElementsByTagName("botton");
	bottoms[0].onclick = function() {
		bottomonclick(0);
	}
	bottoms[1].onclick = function() {
		bottomonclick(1);
	}
	bottoms[2].onclick = function() {
		bottomonclick(2);
	}
	bottoms[3].onclick = function() {
		bottomonclick(3);
	}
		
}
addLoadEvent(preparebottoms)
addLoadEvent(prepareShowpic);