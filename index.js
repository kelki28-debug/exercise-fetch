const endPoint = 'https://restcountries.eu/rest/v2/all'
const options = {
    method:'GET'}

fetch(endPoint, options)
.then((response) => response.json())
.then((result) =>{
    console.log(result);
    result.map(hasil =>{
        console.log(hasil.name)
    })
    
})
.catch(error =>{
    console.log(error)
})


