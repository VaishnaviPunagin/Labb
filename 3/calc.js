var i=document.getElementById("ans");

function clr(){
    i.value='';
}

function del(){
    var temp=i.value;
    i.value=temp.substring(0,temp.length-1);
}

function disp(v){
    i.value+=v;
}

function solve()
{
    i.value=eval(i.value);
}
