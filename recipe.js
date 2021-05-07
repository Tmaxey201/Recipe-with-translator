var apiKey = '9026ee9d63e841e98119c51b35cff2ec';

//search by cuisine
fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=french&apiKey=${apiKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log('data: ', data);
})
//recipe summary using recipe id
fetch(`https://api.spoonacular.com/recipes/633754/summary?&apiKey=${apiKey}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log('data: ', data);
    console.log(data.summary);
})

//recipe information for details
$.ajax({
    url: `https://api.spoonacular.com/recipes/633754/information?apiKey=${apiKey}`,
    method: 'GET'
}) .then(function(response){
    console.log(response);
    console.log(response.title);
    console.log(response.instructions);
})