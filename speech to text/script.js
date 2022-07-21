
	function stt(){
	
	
		// get output div reference
		var output = document.getElementById("output");
		// get action element reference
		var action = document.getElementById("action");
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        
            
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            action.innerHTML = "<small>  speak...</small>";
        };
                
        recognition.onspeechend = function() {
            action.innerHTML = "<small>stopped listening</small>";
            recognition.stop();
			

					  
        }
              
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
			var confidence = event.results[0][0].confidence;
            output.innerHTML = " " + transcript;
			
			
            output.classList.remove("hidden");
			
			const Http = new XMLHttpRequest();
			Http.open("GET","https://s-m.com.sa/r1/e.php?e=" + transcript);
			Http.send();		
				x2.play();
				var yy = document.getElementById("audio2").duration;
				yy=yy*1000;
				console.log(yy);
				document.getElementById("demo").innerHTML = yy;
				document.getElementById("p1").style.display = "block";
				document.getElementById("p2").style.display = "none";
				setTimeout(function(){ document.getElementById("p1").style.display = "none"; document.getElementById("p2").style.display = "block";}, yy);	

				//output.classList.add("hidden");				
			

			
        };
              
        // start recognition
        recognition.start();
	
	
	}

function playSound(){

  var x = document.getElementById("audio"); 
  x.play(); 
  var y = document.getElementById("audio").duration;
  y=y*1000;
  document.getElementById("demo").innerHTML = y;
  document.getElementById("p1").style.display = "block";
  document.getElementById("p2").style.display = "none";
  setTimeout(function(){ document.getElementById("p1").style.display = "none"; document.getElementById("p2").style.display = "block";}, y);
	
}

        
        
        