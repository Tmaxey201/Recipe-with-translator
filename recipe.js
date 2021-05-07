var apiKey = '9026ee9d63e841e98119c51b35cff2ec';

//search by cuisine
fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=french&apiKey=${apiKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log('data: ', data);
})



//recipe information for details by id
$.ajax({
    url: `https://api.spoonacular.com/recipes/633754/information?apiKey=${apiKey}`,
    method: 'GET'
}) .then(function(response){
    console.log(response);
    console.log(response.title);
    console.log(response.instructions);
})

$.ajax({
    url: `https://api.spoonacular.com/recipes/633754/ingredientWidget.json?apiKey=${apiKey}`,
    method: 'GET'
}) .then(function(response){
    console.log(response);
    for(i=0; i<response.ingredients.length; i++){
        console.log(response.ingredients[i].name);
    }

})
