document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}

function play_aud(){
	//Starts Player
 	player.play();
} 

function pause_aud(){
	//Pauses Player
	player.pause();
}

function stop_aud(){
	//Pauses Player
 	player.pause();
	//Sets music position to the start
 	player.currentTime = 0;
}

function change_vol(){
	//Sets the volume to the value of the slider
 	player.volume=document.getElementById("change_vol").value;
}