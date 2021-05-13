var url = localStorage.getItem('recipe')
console.log(url);

$.ajax({
    url: url,
    method: 'GET'
}).then(function (data) {
    $('#recipe-img').attr('src', `${data.meals[0].strMealThumb}`);
    $('#recipe-title').text(data.meals[0].strMeal);
    $('#instructions').text(data.meals[0].strInstructions);
    $('#ingredients-list li').remove();
 
    for (let index = 1; index <= 15; index++) {
        var x='strMeasure' + index
        var y='strIngredient' + index
        if (data.meals[0][x] !== null) {
            $('#ingredients-list ul').append(`<li>${data.meals[0][x]} ${data.meals[0][y]}`)
        }
        
    }
    return;
})