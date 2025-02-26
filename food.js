var lis = document.getElementsByClassName("images");
var anNiu = document.getElementsByClassName("anNius");
var index = 0;
var time = null;

function dong(){
	chuShiZhi();
	zhengChang();
	anNiu[index].style.backgroundColor = "grey";
	
	if(index == 0){
		indexDengYu0();
	}else if(index == lis.length-1){
		indexDengYuChangDu();
	}else{
		elseShi();
	}
	index++;
	if(index == lis.length){
		index = 0;
	}
}

time = setInterval("dong()",2000);

function rig(){
	chuShiZhi();
	zhengChang();
	anNiu[index].style.backgroundColor = "grey";
	if(index == 0){
		indexDengYu0();
	}else if(index == lis.length-1){
		indexDengYuChangDu();
	}else{
		elseShi();
	}
}

function dianJi(num){
	clearInterval(time);
	if(num == 0){
		console.log(index)
		dong();
	}else{
		index--;
		console.log(index)
		if(index == -1 || index == -2){
			index = lis.length-1;
		}
		rig();
	}
	time = setInterval("dong()",2000);
}

function anNius(num){
	clearInterval(time);
	console.log(num)
	index = num;
	dong();
	time = setInterval("dong()",2000)
}


$(function (){
	$("li").hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time);
		time = setInterval("dong()",2000);
	})
	$("p").hover(function (){
		clearInterval(time);
	},function (){
		clearInterval(time)
		time = setInterval("dong()",2000);
	})
})

//index等于0时调用此方法
function indexDengYu0(){
	lis[lis.length-1].style.left = "-800px";
	lis[lis.length-1].style.opacity = 1;
	lis[lis.length-1].style.transform = "scale(0.4)";
	lis[lis.length-1].style.filter = "blur(15px)";
	lis[lis.length-1].style.top = "-100px";
	lis[index+1].style.opacity = 1;
	lis[index+1].style.right = "-800px";
	lis[index+1].style.transform = "scale(0.4)";
	lis[index+1].style.filter = "blur(15px)";
	lis[index+1].style.top = "-100px";
	
}

//index等于数组长度时调用此方法
function indexDengYuChangDu(){
	lis[0].style.opacity = 1;
	lis[0].style.right = "-800px";
	lis[0].style.transform = "scale(0.4)";
	lis[0].style.filter = "blur(15px)";
	lis[0].style.top = "-100px";
	lis[index-1].style.left = "-800px";
	lis[index-1].style.opacity = 1;
	lis[index-1].style.transform = "scale(0.4)";
	lis[index-1].style.filter = "blur(15px)";
	lis[index-1].style.top = "-100px";
}

//index不等于0跟长度时调用的方法
function elseShi(){
	lis[index-1].style.left = "-800px";
	lis[index-1].style.opacity = 1;
	lis[index-1].style.transform = "scale(0.4)";
	lis[index-1].style.filter = "blur(15px)";
	lis[index-1].style.top = "-100px";
	lis[index+1].style.opacity = 1;
	lis[index+1].style.right = "-800px";
	lis[index+1].style.transform = "scale(0.4)";
	lis[index+1].style.filter = "blur(15px)";
	lis[index+1].style.top = "-100px";
}
//每运行一次不显示的都恢复默认值
function chuShiZhi(){
	for(let i = 0; i < lis.length; i++){
		lis[i].style.opacity = 0;
		lis[i].style.left = "0px";
		lis[i].style.right = "0px";
		lis[i].style.transform = "scale(1)";
		lis[i].style.zIndex = 0;
		lis[i].style.boxShadow = "";
		lis[i].style.top = "0px";
		anNiu[i].style.backgroundColor = "white";
	}
	
}
//正常在中间显示的图片
function zhengChang(){
	lis[index].style.opacity = 1;
	lis[index].style.zIndex = 3;
	lis[index].style.left = "0px";
	lis[index].style.boxShadow = "0px 0px 20px black";
	lis[index].style.filter = "blur(0)";
	lis[index].style.transform = "scale(1.2)";
	lis[index].style.top = "100px";
}

