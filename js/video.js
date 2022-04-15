var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	var video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down this video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up this video");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("i want to skip!");
	if (video.currentTime < (video.duration - 15)){
		console.log("original time" + video.currentTime);
		video.currentTime += 15;
		console.log("new time " + video.currentTime);
	}
	else{
		video.currentTime = 0;
		video.play();
		console.log("new time" + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute my Video");
	video.muted = !video.muted;
	if (video.muted){
		document.getElementById("mute").textContent = "Unmute";
	}
	else{
		document.getElementById("mute").textContent = "Mute";
	}
});



document.querySelector("#slider").addEventListener("change", function(){
	console.log("Change volume");
	video.volume= document.getElementById("slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
});




document.querySelector('#vintage').addEventListener('click', function(){
	console.log('apply filter');
	video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener("click", function(){
	console.log("remove filter");
	video.classList.remove("oldSchool");
});