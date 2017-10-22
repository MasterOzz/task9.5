var buttonAlertclass = document.getElementsByClassName('button');
console.log(buttonAlertclass);


function displayButtonText (element) {
        alert(element.innerHTML);
}
	for (var i = 0; i < buttonAlertclass.length; i++) {
   		displayButtonText(buttonAlertclass[i]);
}