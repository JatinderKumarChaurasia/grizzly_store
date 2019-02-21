var id = document.getElementById('click1');
id.addEventListener('click',changecolor,false);

function changecolor(){
    var id = document.getElementById('click1');
    id.style.backgroundColor="black";
}

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
name.addEventListener(listener);
btn1.style.backgroundColor="gray";
btn2.style.backgroundColor="gray";
function btn1listener(){
    btn1.style.backgroundColor="blue";
    btn2.style.backgroundColor="gray";
}
function btn2listener(){
    btn1.style.backgroundColor="gray";
    btn2.style.backgroundColor="blue";
}