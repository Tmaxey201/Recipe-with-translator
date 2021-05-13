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
	}).then(function (data) {
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
		return;
	})
}

//CHICKEN ENCHILADA CASSEROLE - MEXICO
function enchiladaRecipe() {
	
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765',
		method: 'GET'
	}).then(function (data) {
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list li').remove();
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
		return;
	})
}

//LASAGNE RECIPE - ITALY
function lasagnaRecipe() {
	
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52844',
		method: 'GET'
	}).then(function (data) {
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
		return;
	})
}

//YAKI UDON RECIPE - JAPAN
function yakiUdonRecipe() {
	
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52871',
		method: 'GET'
	}).then(function (data) {
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
		return;
	})
}

//MEE GORENG MAMAK - MALAYSIA
function meeGorengRecipe() {
	
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53048',
		method: 'GET'
	}).then(function (data) {
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
		return;
	})
}
//LAMB TZATZIKI BURGERS - GREECE
function lambRecipe() {
	
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53010',
		method: 'GET'
	}).then(function (data) {
		
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
		return;
	})
}

//==================================================================
//when user clicks on icon button on recipe.html change the recipe display to ratatouille recipe
frenchRecipeBtn.on('click', ratatouilleRecipe);
mexicanRecipeBtn.on('click', enchiladaRecipe);
italianRecipeBtn.on('click', lasagnaRecipe);
japaneseRecipeBtn.on('click', yakiUdonRecipe);
malaysianRecipeBtn.on('click', meeGorengRecipe);
greekRecipeBtn.on('click', lambRecipe);

//when user clicks 'more details' on index.html, fetch recipe.html and load that recipe's details
$('#moreRatDetails').on('click', fetch('recipe.html'));
$('#moreEnchDetails').on('click', );
$('#moreLasDetails').on('click', );
$('#moreYakiDetails').on('click', );
$('#moreMeeDetails').on('click', );
$('#moreLambDetails').on('click', );
//======================================================
//changes recipe card content on main page, displays only the image and title, with a link to more recipe details
$.ajax({
	//ratatouille
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908',
	method: 'GET'
}).then(function (data) {
	$('#title1').text(data.meals[0].strMeal);
	$('#card-img-1').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	//enchilada
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765',
	method: 'GET'
}).then(function (data) {
	$('#title2').text(data.meals[0].strMeal);
	$('#card-img-2').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	//lasagna
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52844',
	method: 'GET'
}).then(function (data) {
	$('#title3').text(data.meals[0].strMeal);
	$('#card-img-3').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	//yaki udon
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52871',
	method: 'GET'
}).then(function (data) {
	$('#title4').text(data.meals[0].strMeal);
	$('#card-img-4').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	//mee goreng
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53048',
	method: 'GET'
}).then(function (data) {
	$('#title5').text(data.meals[0].strMeal);
	$('#card-img-5').attr('src', `${data.meals[0].strMealThumb}`);
})

$.ajax({
	//lamb
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53010',
	method: 'GET'
}).then(function (data) {
	$('#title6').text(data.meals[0].strMeal);
	$('#card-img-6').attr('src', `${data.meals[0].strMealThumb}`);
})
//===================
//favorite button 
var faveOneBtn = $('#fave-one');
var faveTwoBtn = $('#fave-two');
var faveThreeBtn = $('#fave-three');
var faveFourBtn = $('#fave-four');
var faveFiveBtn = $('#fave-five');
var faveSixBtn = $('#fave-six');

faveOneBtn.on('click', function(){
	console.log('fave 1 clicked')
})

faveTwoBtn.on('click', function(){
	console.log('fave 2 clicked')
})

faveThreeBtn.on('click', function(){
	console.log('fave 3 clicked')
})

faveFourBtn.on('click', function(){
	console.log('fave 4 clicked')
})

faveFiveBtn.on('click', function(){
	console.log('fave 5 clicked')
})

faveSixBtn.on('click', function(){
	console.log('fave 6 clicked')
})
