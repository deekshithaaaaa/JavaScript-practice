let mode="dark";
let color;
if(mode==="dark"){
    color="white";
}
else{
    color="black";
}
console.log(color)

let age=18;
if(age>=18){
    console.log("Eligible for voting")
}
else{
    console.log("not eligible for voting")
}

let num=3;
if(num%2===0){
    console.log("Even num")
}
else{
    console.log("Odd num")
}

let age=56;
if(age<18){
    console.log("child")
}
else if(age>60){
    console.log("old")
}
else{
    console.log("middle")
}

let num=prompt("Enter a number:")
if(num%5===0){
    console.log("Multiple of five")
}
else{
    console.log("Not a multiple")
}

let marks=prompt("Enter marks:")
if(marks>100){
    console.log("Enter marks in range of 0-100")
}
else if(marks>=80 && marks<=100 ){
    console.log("A grade")
}
else if(marks>=70 && marks<=79){
    console.log("B grade")
}
else if(marks>=60 && marks<=69){
    console.log("C grade")
}
else if(marks>=50 && marks<=59){
    console.log("D grade")
}
else{
 console.log("F grade")
}
