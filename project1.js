let isShow=true
const myFun = () =>{
  let imgadd=document.getElementById("imgaddress")
  if(isShow)
  {
    imgadd.src="https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80"
    isShow=!isShow
  }
  else  {
    imgadd.src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    isShow=!isShow
  }
}