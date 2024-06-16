//sum of numbers

let a=2
let b=8
let sum=a+b
console.log("program1 answer.="+sum);

//area of rectangle 

let length = 10
let bredth = 40
let area = length * bredth
console.log("area=" +area);

//eligible for vote

let age 
age = window.prompt("enter the age")
if (age >=  18)
    {
        console.log("eligible for vote");
    }
else 
{
    console.log("not eligible for vote");
}


//user's grade

let grade = 80
if(grade>=60)
    {
        console.log("Passed the exam");
    }
else
    {
        console.log("failed the exam");
    }


//chekcs if entered number is positive,negative, or zero

let number = 24
if(number>0)
    {
        console.log("the number is positive")
    }
else if(number<0)
    {
        console.log("the number is negative")
    }
else    
    {
        console.log("the number is zero")
    }


//child, teenager, adult, senior

let n = 20;
switch (true){
    case n<13:
        console.log("user is a child");
        break;
    case n<20:
        console.log("user is a teenager");
        break;
    case n<60:
        console.log("user is an adult");
        break;
    default:
        console.log("user is a senior");
}

// square of each number in an array 

arr=[1,3,9,12,15,18,21];
let len=arr.length;
let i=0;
for(i=0;i<=len;i++){
    console.log(arr[i]*arr[i]);
}


//sum of odd numbers for a given limit

limit = 10;
let j=0;
sum = 0;
for(j=0;j<=limit;j++){
    if(j%2!=0){
        
        sum = sum+j;
        
    }
}
console.log("sum is : "+sum);
