let n = 100
while (n<=200){
  if (n % 4 === 0 && n % 3 === 0){
    console.log ("LoopyLighthouse")
  }else if (n % 4 == 0){
    console.log ("Lighthouse")
  } else if (n % 3 === 0){
    console.log ("Loopy")
  } else{
    console.log(n)
  }
  
  n++;
}