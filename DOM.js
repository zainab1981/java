// calculate factorial

function factorial(n){
    if(n<0)
    {
        console.log("It is a negative number");
    }
    else if(n==0)
    {
        console.log("It is a zero");
    }
    else
    {
        let fact=1;
            for(let i=1;i<=n;i++){
                fact=fact*i;
            }
            console.log(fact);
    }
}
factorial(5)


// prime number

function Prime(num)
{
    if(num>=1)
        {   
            if(i==1){
                console.log("It is a Prime and composite number");
            }
            if(i==2){
                console.log("It is a Prime  number");
            }
            for(i=2;i<num;i++)
                {
                    if(num%i==0)
                    {
                        return false 
                    }
                    else{
                        return true 
                    }
                }
        }
    else{
        console.log("It is not a Positive integer");
    }    
}

let i
console.log(Prime(11));


// sum of even numbers

function sumEvenNumbers(start, end){
            for(let i=sum;i<=end;i++)
            {
                if(i%2==0)
                {
                    sum=sum+i
                }  
            }
            console.log(sum);
}
let sum=0
sumEvenNumbers(2, 4)


//remove items from a dropdown list

function removeitem(){
    const selectcolor=document.getElementById('colorSelect')
    const selectedIndex=selectcolor.selectedIndex

    if(selectedIndex!==-1){
        selectcolor.remove(selectedIndex)
    }
}

//change the  color given text in p tag  

function changeTextColor() {
    const selectElement = document.getElementById('colorSelect2');
    const color = selectElement.value;
    const sampleText = document.getElementById('sampleText');
    sampleText.style.color = color;
}