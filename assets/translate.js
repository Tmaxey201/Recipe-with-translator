$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($(".textField").text());
	url += "&q=" + escape($(".textlang").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$(".textField").text(data.data.translations[0].translatedText);
		$(".textlang").text(data.data.translations[1].translatedText);
	});       
});


