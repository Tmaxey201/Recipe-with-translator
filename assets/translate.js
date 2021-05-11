//translation for index.html
$("#dropdown1").click(function () {
	console.log('this works');
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#textField").text());
	url += "&q=" + escape($("#title").text());
	//Target language
	url += "&translate=" + $("#dropdown1 option:selected").val();
	console.log( $("#dropdown1 option:selected"), 'this works');
	console.log( $("#dropdown1 option:selected").val(), 'selcted value');
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		console.log('api being called');
		//Results are returned in an array following the order they were passed. 
		$("#textField").text(data.data.translations[0].translatedText);
		$("#title").text(data.data.translations[1].translatedText);
	});       
});

// translation for recepie.js 
$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#textField").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#textField").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});
