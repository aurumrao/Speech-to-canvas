x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening, please say what shape you want to draw";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "You have requested the system to draw a " + content;
        if(content == "Circle"){
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "System has begun to draw circle. Click button again to draw another shape.";
            draw_circle = "set";
        }
        if(content == "rectangle"){
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "System has begun to draw rectangle. Click button again to draw another shape.";
            draw_rect = "set";
        }
        else{
            document.getElementById("status").innerHTML = "System does not know how to draw this object. Click button again to try a different object.";
        }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. Click button again to draw another shape, or reload to clear canvas";
        draw_circle = "";
    }
    
    if(draw_rect == "set"){
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn. Click button again to draw another shape, or reload to clear canvas";
        draw_rect = "";
    }
}