var apiKey = '9026ee9d63e841e98119c51b35cff2ec';

//search by cuisine
fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=mexican&apiKey=${apiKey}`)
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log('data: ', data);
})



//FRENCH CUISINE TITLE AND INSTRUCTIONS
$.ajax({
    url: `https://api.spoonacular.com/recipes/633754/information?apiKey=${apiKey}`,
    method: 'GET'
}) .then(function(response){
    console.log(response);
    console.log(response.title);
    console.log(response.instructions);
})

//FRENCH CUISINE INGREDIENTS LIST
$.ajax({
    url: `https://api.spoonacular.com/recipes/633754/ingredientWidget.json?apiKey=${apiKey}`,
    method: 'GET'
}) .then(function(response){
    console.log(response);
    for(i=0; i<response.ingredients.length; i++){
        console.log(response.ingredients[i].amount.us.value);
        console.log(response.ingredients[i].amount.us.unit);
        console.log(response.ingredients[i].name);
    }

})

//MEXICAN CUISINE TITLE AND INSTRUCTIONS
$.ajax({
    url: `https://api.spoonacular.com/recipes/640117/information?apiKey=${apiKey}`,
    method: 'GET'
}).then(function(response){
    console.log(response);
    console.log(response.title);
    console.log(response.instructions);
})

//MEXICAN CUISINE INGREDIENTS LIST
$.ajax({
    url: `https://api.spoonacular.com/recipes/640117/ingredientWidget.json?apiKey=${apiKey}`,
    method: 'GET'
}) .then(function(response){
    console.log(response);
    for(i=0; i<response.ingredients.length; i++){
        console.log(response.ingredients[i].amount.us.value);
        console.log(response.ingredients[i].amount.us.unit);
        console.log(response.ingredients[i].name);
    }
})

