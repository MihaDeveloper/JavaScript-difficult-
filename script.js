'use strict';
 let arr= ['123423','45545','7899','2201','362','21','41228'];

const value = function(){
   for (let i=0; i<7; i++){
      if (arr[i].startsWith('2') || arr[i].startsWith('4')){
        console.log( arr[i]);
      }
 
    
   }
 
};
value();

 const simpleValue = function(){

for (let i = 2; i <= 100; i++) {
    let check = 1;
    if ( i % 2 != 0)
    {
        for (let j = 3; j*j <= i ; j+=2)
        {
            if (i%j==0)
            {
                check=0;
                break;
            }
        }
    }
    else if (i != 2) {check = 0;}
    if (check==1) {console.log(i);}
}
 };
simpleValue();