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
if(Content=="take my selfie"){
    speak();
    console.log("take my selfie");
}

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
    speak_data="taking your selfie in 5 seconds";
    var utter_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    },5000);

}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captureimage' src='"+data_uri+"'</img>";
    });

}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("captureimage").src ;
    link.href=image;
    link.click();
}
