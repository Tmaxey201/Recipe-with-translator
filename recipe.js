//RESTART WITH NEW API
//variables for API url call
var mealAPI = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
var frenchID = '52908';
var mexicanID = '52765';
var italianID = '52844';
var japaneseID = '52871';
var malaysianID = '53048';
var greekID = '53010';

//variables for cuisine buttons on recipe.html
var frenchRecipeBtn = $('#french-recipe');
var mexicanRecipeBtn = $('#mexican-recipe');
var italianRecipeBtn = $('#italian-recipe');
var japaneseRecipeBtn = $('#japanese-recipe');
var malaysianRecipeBtn = $('#malaysian-recipe');
var greekRecipeBtn = $('#greek-recipe');

//favorite button 
var faveOneBtn = $('#fave-one');
var faveTwoBtn = $('#fave-two');
var faveThreeBtn = $('#fave-three');
var faveFourBtn = $('#fave-four');
var faveFiveBtn = $('#fave-five');
var faveSixBtn = $('#fave-six');

var faveRecipesArray = [];
getFaveRecipes();
//functions to display all recipe details
//RATATOUILLE RECIPE - FRANCE
function ratatouilleRecipe() {
	$.ajax({
		url: mealAPI + frenchID,
		method: 'GET'
	}).then(function (data) {
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list li').remove();
		for (let index = 1; index <= 15; index++) {
			var x = 'strMeasure' + index
			var y = 'strIngredient' + index
			if (data.meals[0][x] !== null) {
				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
			}
		}
		return;
	})
}

//CHICKEN ENCHILADA CASSEROLE - MEXICO
function enchiladaRecipe() {
	$.ajax({
		url: mealAPI + mexicanID,
		method: 'GET'
	}).then(function (data) {
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list li').remove();
		for (let index = 1; index <= 15; index++) {
			var x = 'strMeasure' + index
			var y = 'strIngredient' + index
			if (data.meals[0][x] !== null) {
				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
			}
		}
		return;
	})
}

//LASAGNE RECIPE - ITALY
function lasagnaRecipe() {
	$.ajax({
		url: mealAPI + italianID,
		method: 'GET'
	}).then(function (data) {
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		for (let index = 1; index <= 15; index++) {
			var x = 'strMeasure' + index
			var y = 'strIngredient' + index
			if (data.meals[0][x] !== null) {
				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
			}
		}
		return;
	})
}

//YAKI UDON RECIPE - JAPAN
function yakiUdonRecipe() {
	$.ajax({
		url: mealAPI + japaneseID,
		method: 'GET'
	}).then(function (data) {
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		for (let index = 1; index <= 15; index++) {
			var x = 'strMeasure' + index
			var y = 'strIngredient' + index
			if (data.meals[0][x] !== null) {
				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
			}
		}
		return;
	})
}

//MEE GORENG MAMAK - MALAYSIA
function meeGorengRecipe() {
	$.ajax({
		url: mealAPI + malaysianID,
		method: 'GET'
	}).then(function (data) {
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		for (let index = 1; index <= 15; index++) {
			var x = 'strMeasure' + index
			var y = 'strIngredient' + index
			if (data.meals[0][x] !== null) {
				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
			}
		}
		return;
	})
}
//LAMB TZATZIKI BURGERS - GREECE
function lambRecipe() {

	$.ajax({
		url: mealAPI + greekID,
		method: 'GET'
	}).then(function (data) {

		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#ingredients-list li').remove();
		$('#instructions').text(data.meals[0].strInstructions);
		for (let index = 1; index <= 15; index++) {
			var x = 'strMeasure' + index
			var y = 'strIngredient' + index
			if (data.meals[0][x] !== null) {
				$('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
			}
		}
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
$('#moreRatDetails').on('click', function () {
	localStorage.setItem('recipe', mealAPI + frenchID);
})
$('#moreEnchDetails').on('click', function () {
	localStorage.setItem('recipe', mealAPI + mexicanID);
});
$('#moreLasDetails').on('click', function () {
	localStorage.setItem('recipe', mealAPI + italianID)
});

$('#moreYakiDetails').on('click', function () {
	localStorage.setItem('recipe', mealAPI + japaneseID)
});

$('#moreMeeDetails').on('click', function () {
	localStorage.setItem('recipe', mealAPI + malaysianID)
});

$('#moreLambDetails').on('click', function () {
	localStorage.setItem('recipe', mealAPI + greekID)
});
//======================================================
//changes recipe card content on main page, displays only the image and title, with a link to more recipe details
$.ajax({
	//ratatouille
	url: mealAPI + frenchID,
	method: 'GET'
}).then(function (data) {
	var title1 = data.meals[0].strMeal;
	$('#title1').text(title1);
	$('#card-img-1').attr('src', `${data.meals[0].strMealThumb}`);
	faveOneBtn.on('click', function () {
		faveRecipesArray.push(title1);
		localStorage.setItem('fave recipe', JSON.stringify(faveRecipesArray));
	})
})

$.ajax({
	//enchilada
	url: mealAPI + mexicanID,
	method: 'GET'
}).then(function (data) {
	var title2 = data.meals[0].strMeal;
	$('#title2').text(title2);
	$('#card-img-2').attr('src', `${data.meals[0].strMealThumb}`);
	faveTwoBtn.on('click', function () {
		faveRecipesArray.push(title2);
		localStorage.setItem('fave recipe', JSON.stringify(faveRecipesArray));
	})
})

$.ajax({
	//lasagna
	url: mealAPI + italianID,
	method: 'GET'
}).then(function (data) {
	var title3 = data.meals[0].strMeal;
	$('#title3').text(title3);
	$('#card-img-3').attr('src', `${data.meals[0].strMealThumb}`);
	faveThreeBtn.on('click', function () {
		faveRecipesArray.push(title3);
		localStorage.setItem('fave recipe', JSON.stringify(faveRecipesArray));
	})
})

$.ajax({
	//yaki udon
	url: mealAPI + japaneseID,
	method: 'GET'
}).then(function (data) {
	var title4 = data.meals[0].strMeal;
	$('#title4').text(title4);
	$('#card-img-4').attr('src', `${data.meals[0].strMealThumb}`);
	faveFourBtn.on('click', function () {
		faveRecipesArray.push(title4);
		localStorage.setItem('fave recipe', JSON.stringify(faveRecipesArray));
	})
})

$.ajax({
	//mee goreng
	url: mealAPI + malaysianID,
	method: 'GET'
}).then(function (data) {
	var title5 = data.meals[0].strMeal
	$('#title5').text(title5);
	$('#card-img-5').attr('src', `${data.meals[0].strMealThumb}`);
	faveFiveBtn.on('click', function () {
		faveRecipesArray.push(title5);
		localStorage.setItem('fave recipe', JSON.stringify(faveRecipesArray));
	})
})

$.ajax({
	//lamb
	url: mealAPI + greekID,
	method: 'GET'
}).then(function (data) {
	var title6 = data.meals[0].strMeal
	$('#title6').text(title6);
	$('#card-img-6').attr('src', `${data.meals[0].strMealThumb}`);
	faveSixBtn.on('click', function () {
		faveRecipesArray.push(title6);
		localStorage.setItem('fave recipe', JSON.stringify(faveRecipesArray));
	})
})
//===================
function getFaveRecipes() {
	var faveRecipes = JSON.parse(localStorage.getItem('fave recipe'))
	if (faveRecipes === null) {
		return
	} else {
		faveRecipes = faveRecipesArray;
		var faveRecipeList = $('#fave-list1');
		for (i = 0; i < faveRecipesArray.length; i++) {
			var faveRecipeLink = $('<li>');
			faveRecipeLink.text(faveRecipesArray[i]).addClass('red-text bold2');
			faveRecipes.append(faveRecipeLink);
		}
	}
}