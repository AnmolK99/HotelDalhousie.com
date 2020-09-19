var val1,val2,val3,val4;
function paid(){
var1=document.getElementById("card1").value;
var2=document.getElementById("card2").value;
var3=document.getElementById("card3").value;
var4=document.getElementById("card4").value;
if(var1.length==0)
{alert("kindly enter the card number");
document.getElementById("card1").focus();
return false;}

else if(var2.length==0)
{alert("kindly enter the card holder");
document.getElementById("card2").focus();
return false;}

else if(var3.length==0)
{alert("kindly enter the CVV");
document.getElementById("card3").focus();
return false;}

else if(var4.length==0)
{alert("kindly enter the pin number");
document.getElementById("card4").focus();
return false;}
else{
alert("your form has been submited");
return true;}


}