var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event) {
    console.log(event);


var Content=event.results[0][0].transcript;

document.getElementById('textbox').innerHTML=Content;
speak();
}
camera =document.getElementById("camera");
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").innerHTML;
    var utter_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);

}

