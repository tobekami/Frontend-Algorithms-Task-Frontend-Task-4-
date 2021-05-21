// convertFahrToCelsius Algorithm

function convertFahrToCelsius(Fahr){
    if (isNaN(Fahr)==true){
        if (Array.isArray(Fahr)==true){
            console.log(JSON.stringify(Fahr) +" is not a valid number but an array.");
            return Fahr;
            }else if (typeof(Fahr)=="object"){
            console.log(JSON.stringify(Fahr) +" is not a valid number but an object.");
            return Fahr;}
        else{console.log(JSON.stringify(Fahr) +" is an invalid paramter." );
            return Fahr;
        }
     }
     else {
    var celsius;
    celsius = parseFloat((Fahr - 32) * 5/9).toFixed(4);
    console.log(celsius); 
    return celsius;
    }
}
convertFahrToCelsius(18)
convertFahrToCelsius("18")
convertFahrToCelsius([1,2,3])
convertFahrToCelsius({temp: 0})

// checkYuGiOh Algorithm

function checkYuGiOh(num){
    var num;
     if (isNaN(num)==true){
        if (Array.isArray(num)==true){
            console.log("invalid parameter: " + JSON.stringify(num));
            return num;
         } else if (typeof(num)=="object"){
            console.log("invalid paramter: " + JSON.stringify(num));
            return num;
         } else {
            console.log("invalid paramter: " + JSON.stringify(num));
            return num;
         }
     }
     else {
         var ans;
         ans = create(num);
         function create(n){
            var n;
            var arr = [];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                } else  if (i%5==0){
                   arr.push("oh");
                } else  if (i%3==0){
                   arr.push("gi");
                } else  if (i%2==0){
                   arr.push("yu");
                } 
                else{
                   arr.push(i);
                }
              console.log(arr);
            }
            return arr;
           }
           return ans;
     }}
     checkYuGiOh(10) ;
     checkYuGiOh("5");
     checkYuGiOh("fizzbuzz is meh");