//1. Create a function fetchData that returns a Promise.  
//Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.
//The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds.

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve("Data fetched successfully")
        },2000)
    })
}
fetchData().then ((result)=>{ console.log(result);})

//2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data".
//Modify your test to handle this rejection using .catch(). 

function fetchData2(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{reject("failed to fetch data")},2000)})
    }
fetchData2().catch((result)=>{console.log(result);})

//3. Convert the fetchData function from Question  1 to use async and await instead of .then(). 
//Ensure to handle errors using try and catch

async function abc(){
    const result = await fetchData()
    console.log(result);
}
abc()

//4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". 
//Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. 
//Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

function getCountryData(){
    fetch('https://restcountries.com/v3.1/all').then((result)=>{
        return result.json()
    })
    .then((result)=>{console.log({result});
    for (let i=0; i<result.length;i++){
            const imageContainer=document.createElement('div')
            const heading=document.createElement('h2')
            heading.innerText=result[i].name.common
            heading.className='population'
            imageContainer.appendChild(heading)
            const image = document.createElement('img')
            image.src=result[i].flags.png
            image.className='flags'
            imageContainer.appendChild(image)
            const population=document.createElement('h2')
            population.innerText=result[i].population
            population.className='population'
            imageContainer.appendChild(population)
    document.getElementById('container').appendChild(imageContainer)
            }
        })
    }