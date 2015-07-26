WElcome to Logics
------------------

<!DOCTYPE html><html lang = "en-US"><head>

//duplicate find and count logic
var str = "kzzakssdedkkzzazzzakzzakzkkzzzkzzazakzkakzzzkzzaz";
var fnd = "kzza",k=0;
for(var i=0;i<str.length;i++){
	if(str.substr(i,fnd.length)==fnd){
		k++;
	}
}

console.log(k);
//---------------------------------------------
var str = "kzzakss;dedkkzzazzz;akzzakzk;kzzzkzzazakzkakzzz;kzzaz";
var s = str.split(";")[2];
//------------------------------------------------
var firstName = 'siva',secondName='sankar';
var Name = secondName.charAt(0).toUpperCase()+secondName.substr(1,secondName.length);
tot = firstName+Name

//'sivaSankar';

//----------------------------------------------------------
var fullName = 'guntupallisivasankar';var t;
function restOf(str){

t=str.substr(0,7);
t +="...";
	console.log(t);
 return t;
}
 restOf(fullName)

///-------------------------------------------------------------
var fullName = 'guntupalliSivasankar';
function Demo(str){
	for(vari=0;i<str.length;i++){
		str[]
	}
	//if(str.charCodeAt()>97){str.toLowerCase()}

}

///-----------------------------------------------------------

var fullName = 'manusankar_siva';
var u = fullName.search("_");
var s = fullName.charAt(u+1).toUpperCase();
var h = fullName.substr(u+2,fullName.length);
var tot = fullName.substr(0,u)
tot+s+h
//manusankarSiva
//------------------------------------------------------------------
/*
* creating Namespace logic..
*/
var arr = ["a","b","c"],obj ={},tmp=obj;
//obj.a.b.c ={} 
arr.forEach(function(val){
	 tmp[val] = {};
	 tmp = tmp[val];

});
//---
var arr=[32,22],min=arr[0];
for(var i=0;i<arr.length;i++){
	for(var j=0;j<arr.length;j++){
		if(arr[i]<arr[j]){			
			if(min>arr[i]){
				min=arr[i];
			}
		}else{
			if(min>arr[j]){
				min=arr[j];
			}
		}
	}
}
//-----------------------
function factorial(number) {
var product = 1;
for (var i = number; i >= 1; --i) {
product *= i;
}
return product;
}
print(factorial(4));
//////////or///////
var tot=0;
function fact(val){
if(val == 1){return 1;}
tot = val*fact(val-1);
 return (tot);
}
fact(3)
//------------------------------
function Demo(str,fn){
	this.operations = [];
};
Demo.prototype.excute = function(){
	this.operations.forEach(function(i,index){
		for(var key in i){
			i[key]();
		}
	});
	return this;

}
Demo.prototype.add = function(obj){
	if(obj.constructor ==Object){
		this.operations.push(obj);		
	}
	return this;
}

var myDemo = new Demo;
myDemo.add({add:function(){console.log('add');}})
.add({multi:function(){console.log('multi');}})
.add({div:function(){console.log('div');}})
.add({sub:function(){console.log('sub');}})
.excute();
//----------------------------------------
var arr = [{name:"manasa"},{name:"siva"},{name:"manasa"},];
arr.forEach(function(i,index){
console.log(index+" "+i.name);

})
//-----------------------------
//img chng...
<img src="" title='manasa' alt="Manasa" id="img1">
<script type="text/javascript">
var img1 = document.getElementById('img1');
var imgArr = ["./kalyani.jpg","./manasa.jpg","./kalyani.jpg"];
var i = 0;
function loadImg(){
	if(imgArr.length ==i) return;
	this.src=imgArr[i];  
	console.log(i);
	i++;
}

loadImg.apply(img1);
img1.addEventListener('click',loadImg)
</script>
//------------------------------------------------------
<!DOCTYPE html><html lang = "en-US"><head>

</head>
<body>
<form>
<input type = "text" id = "t1">
<input type = "button" id = "b1" value = "get"></form>
<div id = "d1"></div>
<script type="text/javascript">
var myhttp = new XMLHttpRequest(),b1 =gEi("b1"),t1 = gEi("t1"),d1 = gEi('d1');
function gEi(str){
	return document.getElementById(str);
}
b1.addEventListener("click",function(){
	
	var urls = "http://www.w3schools.com/ajax/getcustomer.asp?q=",t1val = t1.value;
	myhttp.onreadystatechange = function(){
	if(myhttp.status==200&&myhttp.readyState==4){
		d1.innerHTML = myhttp.responseText;
	}
	}
	myhttp.open("Get",urls+t1val,true);
	myhttp.send(null);
})
</script>
</body></html>
//---------------
<html><head>
<style type="text/css">
.current{ background:rgb(222, 221, 213);}
.emp{}
span{border: 1px black dotted;cursor:pointer;}
</style>
</head><body>
<div id = "d1">
<span id ="s1">siva</span>
<span id ="s2">manu</span>
<span id ="s3">milky</span>
</div>
<div id = "div_img" class="fade">

</div>
<script type="text/javascript">
var div_img =getEBI("div_img"),img,mySpan = [];
img = new Image();
div_img.appendChild(img),curr=null,prev=null;
function getEBI(str){
	return document.getElementById(str);
}
function createSpan(){
	var d1 = getEBI("d1");
	for(var i=0;i<d1.children.length;i++){
		mySpan.push(d1.children[i]);
	
}
}
createSpan();

mySpan.forEach(function(val){
	val.addEventListener("click",function(evt){
		img.src = this.id+"_image.jpg";
		this.className = "current";
		if(!curr){
			curr = this;			
		}else{
			prev = curr ;
			curr = this;
		}
		if(prev){
			// console.log(prev)
			prev.className="emp"
		};
	})
})


</script>

</body></html>
//---------------------------------------
html><head></head><body onload ="t1focus()" >
<input type = "text" id = "t1">
<input type = "button" id = "b1" value = "save" onClick = "clicks()">
<script type="text/javascript">
var t1 = document.getElementById("t1");
var arr = [];
function clicks(){
	if(chkduplicats(t1.value)){
		arr.push(t1.value);
		t1.value=null;
	}
console.log(arr);
}
function chkduplicats(str){
	var flg,i=1;
	arr.forEach(function(val){
		if(val ==str){
			i++;
		}
	})
	return i<2?true:false;
}
</script>
</body></html>
//-------------------------------------------
<html><head>
<script type="text/javascript" src = "promise-4.0.0.js"></script>
<style type="text/css">
.sign-in-spinner {
                display:none;
                text-align: left;
                margin-top: -6.25em;
                width: 4.5em;
                height: 4.5em;
                margin-left: 2.75em;
                background: url(data:image/gif;base64,R0lGODlhSABIAMQfAHVHr5h1w2k2qOrj88Sw3Lul2I1nvePa77Wc1Mq44P38/oFXttLD5aCAyEQGk/Dr9vXx+fv5/FMZm6mNzd7T7NrN6fj2+18qoq+U0aaIy0wQl1khntbI56yQz9DA5P///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxQTBGNjkxNDY1MjA2ODExODIyQUJFRDQ0MUJCMTlENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QkNDNDJCN0NFQUExMUUzQjlERTlFN0ZCQzQ5NEFGMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QkNDNDJCNkNFQUExMUUzQjlERTlFN0ZCQzQ5NEFGMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUEwRjY5MTQ2NTIwNjgxMTgyMkFCRUQ0NDFCQjE5RDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUEwRjY5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) no-repeat;
                background-position: center;
                background-size: 66%;
                background-color: #fff;
                border-radius: 6px;
                border: solid 1px #edecf0;
                opacity: .94
            }
 #report{       background-color: #fff;
                border-radius: 6px;
                border: solid 1px #edecf0;
                opacity: .94;
                padding: 10px 15px;
                width: 186px;
                display: block;

 }
</style>
</head><body>

<form>
<input type ="text" id = "t1">
<input type = "button" id = "b1" value = "get">
<div id="report">

	<p id = "p1">city</p>
	<p id = "p2">temperature</p>
	<p id = "p3">sunny</p>
</div>
</form>
<span class="sign-in-spinner "></span>
<script type="text/javascript">

var t1 = document.getElementById("t1"),
b1 = document.getElementById("b1"),
p1 = document.getElementById("p1"),
p2 = document.getElementById("p2"),
p3 = document.getElementById("p3"),
img = document.getElementsByClassName('sign-in-spinner')[0];

t1.onkeypress = function(evt){
	evt.preventDefault();
	if(evt.keyCode==13){
		var e = new Event("click");
		b1.dispatchEvent(e);
	};
}
b1.addEventListener("click",function(){
	if(!navigator.onLine){alert("no internet");return;}
	img.style.display="block";

	getPromise(t1.value).then(function(data){
		//console.log(data);
		renderUI(data);

	},function(failure){
		console.log(failure);

	});
});
var a;
function renderUI(obj){
	var data = (obj);
	a  = eval(data);
p1.innerHTML = a.city.name;
p2.innerHTML = a.list[0].temp.day;
p3.innerHTML = a.list[0].weather[0].main;
}

function JSON_CALLBACK(str){return str}
function getPromise(val){
	var mypromise = new Promise(function(resolve,reject){
	var myhttp = new XMLHttpRequest(),
	url3 = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+val+'&mode=json&units=metric&cnt=4&callback=JSON_CALLBACK';

	myhttp.onload = function(){
		if(myhttp.status==200){
			resolve(myhttp.response);
		}
	img.style.display="none";

	}
	myhttp.onerror = function(){
		reject(myhttp.status);
		img.style.display="none";
		alert("please try again..");
	}
	myhttp.open("Get",url3,true);
	myhttp.send(null);
	})
return mypromise;
}
</script>
//--------------------------------------------
//random no nd its duplicates...
var arr=[],flg = true,rndNo,max=5;
	while(flg){
		 if(arr.length>max){flg = false;}
		 rndNo = Math.round(Math.random()*max);		
		 if(!checkDuplicates(rndNo)){arr.push(rndNo)}
	}
 function checkDuplicates(a){
 	var flg= false;
 	arr.forEach(function(val){
 		if(val==a){
 			flg = true
 		}
 	});
 	return flg;
 } 
 console.log(arr);
</body></html>
//-------------------------------------
apply ex...
function Demo(){
	console.log(this.name);
}
var obj = {name:"siva"};
Demo.apply(obj);
//---------------------------------------
<script type="text/javascript">
function f1(){}
f1.prototype.click = function(){
	return "mouseEvt";
}
f1.prototype.dblclick = function(){
	return "mouseEvtdblclick";
}
f1.prototype.addEvt = function(str,fn){
	var data = this[str]();
	fn(data);
}
var myf1 = new f1();
myf1.addEvt("dblclick",function(evt){
	console.log(evt);
})
</script>
//------------------------------
<script type="text/javascript">
function outer(a){
	var c=a;
	function inner(b){
			c += b;
		console.log(c);
		return inner;
	}
	return inner;
}
outer(2)(4)(3);
//------------------------------------
//Deligation
<!DOCTYPE html>
<html><head>
</head>
<script type="text/javascript">
function Demo(){};
Demo.prototype.setName = function(val){this.val = val;};
Demo.prototype.getName = function(){return this.val;};


function advanced(obj){this.obj = obj;}
advanced.prototype.makeName = function(val){this.obj.setName(val);};
advanced.prototype.getObject = function(){return this.obj;};
advanced.prototype.fetchName = function(){return this.obj.getName();};
advanced.prototype.addFunctions = function(key,fn){
	this.obj[key] = fn;
}
var myadvanced = new advanced(new Demo);
myadvanced.addFunctions("manasa",function(){
	console.log(this.obj.getName());
})
</script>
</body></html>

</script>