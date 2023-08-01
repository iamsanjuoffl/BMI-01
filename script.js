function out(){
    var a=parseInt(document.getElementById("height").value);
    var b=parseInt(document.getElementById("weight").value);
    var c=(b/(a*a)*10000).toFixed(2);
    alert(c);
}
function clr(){
    document.getElementById("height").value="";
    document.getElementById("weight").value="";

}