// translation for recepie.js 
$(".translateButton").click(function () {
    
    var url = "https://translation.googleapis.com/language/translate/v2";
    //Strings requiring translation
    url += "?q=" + escape($("#header1").text());
    url += "&q=" + escape($(".translationtext").text());
    //Target language
    url += "&target=" + $(this).val();
    //Replace with your API key
    url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
    $.get(url, function (data, status) {
        //Results are returned in an array following the order they were passed. 
        $("#header1").text(data.data.translations[0].translatedText);
        $(".translationtext").text(data.data.translations[1].translatedText);
    });       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#span1").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#span1").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#click1").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#click1").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#click2").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#click2").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#click3").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#click3").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#paragraph1").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#paragraph1").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#header5").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#header5").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

$("#translateButton").click(function () {
    
	var url = "https://translation.googleapis.com/language/translate/v2";
	//Strings requiring translation
	url += "?q=" + escape($("#header").text());
	url += "&q=" + escape($(".translationtext").text());
	//Target language
	url += "&target=" + $("#targetLanguage").val();
	//Replace with your API key
	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
	$.get(url, function (data, status) {
		//Results are returned in an array following the order they were passed. 
		$("#header").text(data.data.translations[0].translatedText);
		$(".translationtext").text(data.data.translations[1].translatedText);
	});       
});

















// $("#translateButton").click(function () {
    
// 	var url = "https://translation.googleapis.com/language/translate/v2";
// 	//Strings requiring translation
// 	url += "?q=" + escape($("#span1").text());
// 	url += "&q=" + escape($(".translationtext").text());
// 	//Target language
// 	url += "&target=" + $("#targetLanguage").val();
// 	//Replace with your API key
// 	url += "&key=AIzaSyDRxT8PDxPBZlHDS6jq6pebU_Jqz5reBQ8";
// 	$.get(url, function (data, status) {
// 		//Results are returned in an array following the order they were passed. 
// 		$("#span1").text(data.data.translations[0].translatedText);
// 		$(".translationtext").text(data.data.translations[1].translatedText);
// 	});       
// });





// <!-- THIS IS THE FRAMEWORK HTML FOR CHANGING LANGUAGES > WILL CHANGE TO FIT THEME -->



// <!-- 
//    <p id="textField">You can translate the content of this page by selecting a language in the select box.</p>
   
//    <form>
//        <select id="targetLanguage">
//            <option value="ZH">Chinese (Mandarin)</option>
//            <option value="CS">Czech</option>
//            <option value="DA">Danish</option>
//            <option value="NL">Dutch</option>
//            <option value="EN">English</option>
//            <option value="ET">Estonian</option>
//            <option value="FR" selected = "selected">French</option>
//        </select>
   
//        <input type="button" id="translateButton" value="Translate" />
//    </form>
   
   
   
   
//    <script src="https://code.jquery.com/jquery-3.5.0.min.js"
//    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
//    <script src="recipe.js"></script>
//    <script src="./assets/translate.js"></script>
//    </body> -->