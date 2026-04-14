//ar a=10;
//var a=20;
//console.log(a);
//let c=32;
//c=64;
//console.log(c);

//const b=54;
//console.log(b);

let userdata=[10,"PasupathiNadh",true,5.16,null];
for(let index =0;index<userdata.length;index++)
{
  console.log( userdata[index]);
}
//console.log(userdata);

userdata.push(11);
userdata.pop();

userdata.shift();
 userdata.unshift("JavaScript");
console.log(userdata);