let c=0;
const myFun = () =>{
  //console.log("Pasupathi Nadh");
  let display=document.getElementById("display");
 // display.innerHTML=display.innerHTML=="Hey"?"Hello":"Hey"
 if(c%2==0)
 {
     display.innerHTML="Hii";
    display.style.color="Blue"
 }
 else
 {
    display.innerHTML="Hello"
    display.style.color="Red"
 }
 c++;
  
};