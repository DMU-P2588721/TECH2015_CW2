function showPokemon(){
	var starter = document.getElementById("starter-img");
	var eevee = document.getElementById("eevee-img");
	var fossil = document.getElementById("fossil-img");
	var ubeast = document.getElementById("ubeast-img");
	var plegend = document.getElementById("plegend-img");
	var legend = document.getElementById("legend-img");
	
	
	starter.src = "Images/Starter/blaziken.png";
	eevee.src = "Images/Eeveelution/jolteon.png";
	fossil.src = "Images/Fossil/kabutops.png";
	ubeast.src = "Images/Ubeast/guzzlord.png";
	plegend.src = "Images/Plegend/dragonite.png";
	legend.src = "Images/Legend/zacian.png";
	
	document.getElementById("show-pokemon").style.display = "none";
}

