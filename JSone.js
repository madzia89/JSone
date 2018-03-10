function myBMI (a,b){
    var BMI = b / (a*a) ;
    console.log(BMI);
    return BMI;
}
var myResult = myBMI(1.62,49);
console.log("your BMI equals:" + myResult);