function myBMI (a,b){
    var BMI = b / (a*a) ;
    console.log(BMI);
    return BMI;
}
var myResult = myBMI(1.62,49);
console.log("your BMI equals:" +Math.round(myResult));

var myArray= new Array ();
myArray[5]="what what";
console.log(myArray);

// function
flowers = {

    growth: "2mm per day",
    color: "green",
    Water: function (litres,day) {

        console.log(litres / day);
    }
};
flowers.Water(2,3);

//constructor function

var Tv = function (brand, name){

        this.brand = brand;
        this.name = name;
        this.fullPrice = function (price, tax){
            console.log((price*tax) + price);
        };
        this.logName = function(){
            console.log("The name of the tv is " + this.brand + " " + this.name);
        };
    }
var tvPrice = new Tv ("Sony", "x3");
var tvPrice1 = new Tv ("Samsung", "whatwhat");
var tvPrice2 = new Tv ("LG", "nope");
var tvPrice3 = new Tv ("Sony", "blah");

tvPrice.fullPrice(100000, 0.23);
tvPrice.logName();

tvPrice1.fullPrice(987.99, 0.08);
tvPrice1.logName();

