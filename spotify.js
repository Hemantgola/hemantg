function scrchangeKHW(){
    document.getElementById("audio_player").src = "Kaun+Hain+Voh+-+Full+Video+_+Baahubali+-+The++Beginning+_+Kailash+K+_+Prabhas+_+MM+Kreem+,+Manoj+M.mp3";
}
function scrchangeP(){
    document.getElementById("audio_player").src = "Pasoori Shae Gill 320 Kbps.mp3";
}
function playsound(){
    document.getElementById("audio_player").play();
}
function pausesound(){
    document.getElementById("audio_player").pause();
}
function stopsound(){
    document.getElementById("audio_player").pause();
    document.getElementById("audio_player").currentTime = 0;
}