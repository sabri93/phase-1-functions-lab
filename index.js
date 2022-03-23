// Code your solution in this file!

let start = x;
let destination = y;

function distanceFromHqInBlocks(y){
    if (y>42){
        return y-42
    }
   else {return 42 - y}
}

function distanceFromHqInFeet(y){
   if (y>42){
       return (y-42)*264
   }
   else {
       return(42-y)*264
   }

}

   function distanceTravelledInFeet(x,y){
    if (y>x){
        return (y-x)*264
    } else{
        return (x-y)*264
    }
}
 
 
function calculatesFarePrice(x,y){
   
     let distance1 = (y-x)*264;
    let distance2 = (x-y)*264;
    let price;
  
   if (distance1||distance2 <=400){
       return price = 0;

}  else if(400< distance1 || distance2 <2000){
       return price = (distance1 ||distance2-400) * 0.02;  

}   else if ( 2000< distance1 || distance2 <2500){
     return price = 25 
   
}   else if(distance1 || distance2 >2500){
    return 'cannot travel that far'
}
 

}