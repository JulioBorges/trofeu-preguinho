/*
Incluir no head do index.html da pasta public após o build:

<script src="preguinho.js"></script>

*/

if ((document.getElementById) &&
window.addEventListener || window.attachEvent){

(function(){

var showerCol = new Array('#000000','#ff0000','#000000','#00ff00','#ff00ff','#ffffff','#ffa500','#000000','#fff000');
var launchCol = new Array('#ffa500','#00ff00','#ffaaff','#fff000','#ffffff');
var launchColour = "#00ff00";
var rs = 30;
var y = 100;
var x = 100;
var h;
var w;
var xs = 90;
var t = null;
var ss = 1;
var e = 360/14;
var f = new Array();
var c1 = -1;
var c2 = 5;
var r;

var pix = "px";

var strictmod = ((document.compatMode) &&
document.compatMode.indexOf("CSS") != -1);

var o;
var domWw = (typeof window.innerWidth == "number");
var domSy = (typeof window.pageYOffset == "number");
var n = 14;
var idx = 1;


for (i = 0; i < n; i++){
if ( document.getElementById(idx+i) ){
idx = (idx+=(n));
}
}


for (i = 0; i < n; i++){
document.write('<div id='+(idx+i)+' style="position:absolute;top:0px;left:0px;'
+'height:5px;width:5px;font-size:5px;background-color:'+launchColour+'"><\/div>');
}


if (domWw) r = window;
else{
if (document.documentElement &&
typeof document.documentElement.clientWidth == "number" &&
document.documentElement.clientWidth != 0)
r = document.documentElement;
else{
if (document.body &&
typeof document.body.clientWidth == "number")
r = document.body;
}
}


function scrl(yx){
var y,x;
if (domSy){
y = r.pageYOffset;
x = r.pageXOffset;
}
else{
y = r.scrollTop;
x = r.scrollLeft;
}
return (yx == 0)?y:x;
}


function wndwsz(){
if (domWw){
h = r.innerHeight;
w = r.innerWidth;
}
else{
h = r.clientHeight;
w = r.clientWidth;
}
o = (w >= h)?h:w;
}


function rst(){
c1 = 0;
launchColour = launchCol[Math.floor(Math.random() * launchCol.length)];
xs = Math.round(100+Math.random() * (o/4));
y = xs + Math.round(Math.random() * (h-(xs*2.2))) + scrl(0);
x = xs + Math.round(Math.random() * (w-(xs*2.2))) + scrl(1);
ss = 1;
for (i=0; i < n; i++){
f[i].backgroundColor = launchColour;
f[i].width = ss + pix;
f[i].height = ss + pix;
f[i].fontSize = ss + pix;
}
dsply();
}


function dsply(){
c1 += c2;
t = setTimeout(dsply,rs);
for (i =0; i < n; i++){
f[i].top = y + xs * Math.sin(i*e*Math.PI/180) * Math.sin(c1/100) + pix;
f[i].left= x + xs * Math.cos(i*e*Math.PI/180) * Math.sin(c1/100) + pix;
if (c1 > 100){
ss = (xs < 50)?1:Math.round(1+Math.random()*2);
f[i].backgroundColor = showerCol[Math.floor(Math.random()*showerCol.length)];
f[i].width = ss + pix;
f[i].height = ss + pix;
f[i].fontSize = ss + pix;
}
}
if (c1 > 160){
clearTimeout(t);
rst();
}
}


function init(){
wndwsz();
for (i = 0; i < n; i++){
f[i] = document.getElementById(idx+i).style;
}
var strt = Math.floor(500+Math.random()*1000);
setTimeout(dsply,strt);
}


if (window.addEventListener){
window.addEventListener("resize",wndwsz,false);
window.addEventListener("load",init,false);
}
else if (window.attachEvent){
window.attachEvent("onresize",wndwsz);
window.attachEvent("onload",init);
}

})();
}//End.