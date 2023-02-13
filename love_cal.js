function love(){
  var x= document.getElementById("n1").value;
  console.log(x);
   var y= document.getElementById("n2").value;
   if(x.length===0 || y.length ===0)
   {
    alert("Enter the names in both field !!")
    return;
   }
var love_sq=Math.random()*100;
love_sq=Math.floor(love_sq)+1;
console.log(love_sq);
alert("Your love score is "+ love_sq +"%");
document.getElementById("n1").value="";
document.getElementById("n2").value="";
if(love_sq>=60)
{
    alert("Your love score is "+ love_sq + "  May you both be together forever!!");
}
else{
    alert("Your love score is "+ love_sq +"%" + " Better Luck next Time!");
}
}