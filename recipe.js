//RESTART WITH NEW API

//RATATOUILLE RECIPE
$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908',//ingredients and recipe details by id
	method: 'GET'
}).then(function(data){
	console.log('DATA!!!!!!!!', data);
	console.log('TITLE: ', data.meals[0].strMeal);
	console.log('INGREDIENTS')

	console.log(data.meals[0].strMeasure1);
	console.log(data.meals[0].strIngredient1);

	console.log(data.meals[0].strMeasure2);
	console.log(data.meals[0].strIngredient2);

	console.log(data.meals[0].strMeasure3);
	console.log(data.meals[0].strIngredient3);

	console.log(data.meals[0].strMeasure4);
	console.log(data.meals[0].strIngredient4);

	console.log(data.meals[0].strMeasure5);
	console.log(data.meals[0].strIngredient5);

	console.log(data.meals[0].strMeasure6);
	console.log(data.meals[0].strIngredient6);

	console.log(data.meals[0].strMeasure7);
	console.log(data.meals[0].strIngredient7);

	console.log(data.meals[0].strMeasure8);
	console.log(data.meals[0].strIngredient8);

	console.log(data.meals[0].strMeasure9);
	console.log(data.meals[0].strIngredient9);

	console.log(data.meals[0].strMeasure10);
	console.log(data.meals[0].strIngredient10);

	console.log('RECIPE INSTRUCTIONS!!!!!');
	console.log(data.meals[0].strInstructions)
})

//CHICKEN ENCHILADA CASSEROLE
$.ajax({
	url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52908',//ingredients and recipe details by id
	method: 'GET'
}).then(function(data){
	console.log('DATA!!!!!!!!', data);
	console.log('TITLE: ', data.meals[0].strMeal);
	console.log('INGREDIENTS')

	console.log(data.meals[0].strMeasure1);
	console.log(data.meals[0].strIngredient1);

	console.log(data.meals[0].strMeasure2);
	console.log(data.meals[0].strIngredient2);

	console.log(data.meals[0].strMeasure3);
	console.log(data.meals[0].strIngredient3);

	console.log(data.meals[0].strMeasure4);
	console.log(data.meals[0].strIngredient4);


	console.log('RECIPE INSTRUCTIONS!!!!!');
	console.log(data.meals[0].strInstructions)
})