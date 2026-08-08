//print num
for(let i=1;i<=5;i++){
    console.log("deekshitha")
}

//sum
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i
}
console.log(sum)

//while loop
let i =1;
while(i<=10){
    console.log(i)
    i++;
}

//do while
let i=1;
do{
    console.log("hey")
    i++
}while(i<=5);

//for-of loop
let str="Deekshitha";;
for(let i of str){
    console.log(i)
}

//for in loop
let student={
    name:"dee",
    age:20,
    rool_no:2
};
for(let key in student){
    console.log(key,student[key])
}

//check and print even or odd
let n=7;
for(i=1;i<=n;i++){
    if(i%2===0){
        console.log(i,"Even")
    }
    else{
        console.log(i,"Odd")
    }
}

let n=10;
for(let i=1;i<=n;i++){
    if (i%3===0 && i%5===0){
        console.log("ThreeFive")}
    if(i%3==0){
        console.log("Three")
    }
    else if(i%5===0){
        console.log("Five")
    }
    else if(i%3==0){
        console.log("Three")
    }
    else{
        console.log(i)
    }
}

//sum of even numbers
let n=30;
let sum=0
for(let i=1;i<=n;i++){
    if(i%2===0){
        sum=sum+i;
    }
}
console.log(sum)