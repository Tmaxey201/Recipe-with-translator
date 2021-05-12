//RESTART WITH NEW API

//variables for cuisine buttons on recipe.html
var frenchRecipeBtn = $('#french-recipe');
var mexicanRecipeBtn = $('#mexican-recipe');
var italianRecipeBtn = $('#italian-recipe');
var japaneseRecipeBtn = $('#japanese-recipe');
var malaysianRecipeBtn = $('#malaysian-recipe');
var greekRecipeBtn = $('#greek-recipe')

//functions to display all recipe details

//RATATOUILLE RECIPE - FRANCE
function ratatouilleRecipe() {
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list li').remove();
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`)
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`);
	$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`);
	})
}

//CHICKEN ENCHILADA CASSEROLE - MEXICO
function enchiladaRecipe(){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list li').remove();
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
	})
}

//LASAGNE RECIPE - ITALY
function lasagnaRecipe(){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52844',
	    method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`)
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure12} ${data.meals[0].strIngredient12}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure13} ${data.meals[0].strIngredient13}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure14} ${data.meals[0].strIngredient14}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure15} ${data.meals[0].strIngredient15}`);
	})
}

//YAKI UDON RECIPE - JAPAN
function yakiUdonRecipe (){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52871',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`)
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`);
	})
}

//MEE GORENG MAMAK - MALAYSIA
function meeGorengRecipe (){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53048',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`)
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure12} ${data.meals[0].strIngredient12}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure13} ${data.meals[0].strIngredient13}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure14} ${data.meals[0].strIngredient14}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure15} ${data.meals[0].strIngredient15}`);
	})
}
//LAMB TZATZIKI BURGERS - GREECE
function lambRecipe (){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53010',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`)
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure6} ${data.meals[0].strIngredient6}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure7} ${data.meals[0].strIngredient7}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure8} ${data.meals[0].strIngredient8}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure9} ${data.meals[0].strIngredient9}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure10} ${data.meals[0].strIngredient10}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure11} ${data.meals[0].strIngredient11}`);
	})
}
//when user clicks 'more details' on index.html, fetch recipe.html and load that recipe's details
	$('#mainFrenchRecipe').on('click', fetch('recipe.html').then(ratatouilleRecipe));

//==================================================================
//when user clicks on icon button on recipe.html change the recipe display to ratatouille recipe
	frenchRecipeBtn.on('click', ratatouilleRecipe);
	mexicanRecipeBtn.on('click', enchiladaRecipe);
	italianRecipeBtn.on('click', lasagnaRecipe);
	japaneseRecipeBtn.on('click', yakiUdonRecipe);
	malaysianRecipeBtn.on('click', meeGorengRecipe);
	greekRecipeBtn.on('click', lambRecipe);

//======================================================
//changes recipe card content on main page, displays only the image and title, with a link to more recipe details
$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908',
	method: 'GET'
}) .then(function(data){
	$('#title1').text(data.meals[0].strMeal);
	$('#card-img-1').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765',
	method: 'GET'
}).then(function(data){
	$('#title2').text(data.meals[0].strMeal);
	$('#card-img-2').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52844',
	method: 'GET'
}).then(function(data){
	$('#title3').text(data.meals[0].strMeal);
	$('#card-img-3').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52871',
	method: 'GET'
}).then(function(data){
	$('#title4').text(data.meals[0].strMeal);
	$('#card-img-4').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53048',
	method: 'GET'
}).then(function(data){
	$('#title5').text(data.meals[0].strMeal);
	$('#card-img-5').attr('src', `${data.meals[0].strMealThumb}`);
})
//=======================================================



$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53010',
	method: 'GET'
}).then(function(data){
	$('#title6').text(data.meals[0].strMeal);
	$('#card-img-6').attr('src', `${data.meals[0].strMealThumb}`);
})
