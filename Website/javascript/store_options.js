//This page of javacript stores the values of the user selections, each page has it's own function

function storeStarter(value){
	//The function has the "value" from the button pressed (the user's selection)
	var amount = value;
	//The value changes the text for the html elements in the "getElementById()". The .innerHTML overwrites the existing text
	document.getElementById("starter-chosen").innerHTML = value;
	document.getElementById("starter-chosen1").innerHTML = value;
	
	//A variable created to change the value to lowercase
	var choice = value.toLowerCase();
	//The lowercase value is added to the source of the image, allowing the image to be changed depending on the value
	document.getElementById("starter-img").src = "Images/Starter/" + value + ".png";
}

function storeEevee(value){
	var amount = value;
	document.getElementById("eevee-chosen").innerHTML = value;
	document.getElementById("eevee-chosen1").innerHTML = value;
	
	var choice = value.toLowerCase();
	document.getElementById("eevee-img").src = "Images/Eeveelution/" + value + ".png";
}

function storeFossil(value){
	var amount = value;
	document.getElementById("fossil-chosen").innerHTML = value;
	document.getElementById("fossil-chosen1").innerHTML = value;
	
	var choice = value.toLowerCase();
	document.getElementById("fossil-img").src = "Images/Fossil/" + value + ".png";
}

function storeUBeast(value){
	var amount = value;
	document.getElementById("ubeast-chosen").innerHTML = value;
	document.getElementById("ubeast-chosen1").innerHTML = value;
	
	var choice = value.toLowerCase();
	document.getElementById("ubeast-img").src = "Images/UBeast/" + value + ".png";
}

function storePLegend(value){
	var amount = value;
	document.getElementById("plegend-chosen").innerHTML = value;
	document.getElementById("plegend-chosen1").innerHTML = value;
	
	var choice = value.toLowerCase();
	document.getElementById("plegend-img").src = "Images/PLegend/" + value + ".png";
}

function storeLegend(value){
	var amount = value;
	document.getElementById("legend-chosen").innerHTML = value;
	document.getElementById("legend-chosen1").innerHTML = value;
	
	var choice = value.toLowerCase();
	document.getElementById("legend-img").src = "Images/Legend/" + value + ".png";
}