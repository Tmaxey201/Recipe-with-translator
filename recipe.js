//RESTART WITH NEW API
//variables for cuisine buttons
var frenchRecipeBtn = $('#french-recipe');
var mexicanRecipeBtn = $('#mexican-recipe');
var italianRecipeBtn = $('#italian-recipe');
var japaneseRecipeBtn = $('#japanese-recipe');

//RATATOUILLE RECIPE - FRANCE
frenchRecipeBtn.on('click', function(){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
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
})

//CHICKEN ENCHILADA CASSEROLE - MEXICO
mexicanRecipeBtn.on('click', function(){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
		$('#instructions').text(data.meals[0].strInstructions);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}`)
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}`);
		$('#ingredients-list ul').append(`<li>${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}`);
	})
})

// // //LASAGNE RECIPE - ITALY
italianRecipeBtn.on('click', function(){
	
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52844',
	    method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
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
})

// // //YAKI UDON RECIPE - JAPAN
japaneseRecipeBtn.on('click', function(){
	$.ajax({
		url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52871',
		method: 'GET'
	}).then(function(data){
		$('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
		$('#recipe-title').text(data.meals[0].strMeal);
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
})
