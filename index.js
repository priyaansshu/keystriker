    var twitterscorecount;
    var start; var temp;
    var highscore = document.getElementById("highscore");
    var lastscore = document.getElementById("lastscore");
    function keystriker(run, count, sec)
    { 
        const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        function getRandomNumber() {
            var randomnumber = Math.floor(Math.random()*26);
            console.log(randomnumber);
            return randomnumber;
        }

        function getRandomKey() {
            return keys.charAt(getRandomNumber());
        }

        function targetRandomKey() {
            document.body.classList.add("hidescore");
            if(run===0)
            {
                start = Date.now(); console.log("start: " + start);
                run=1;
            }
            var timepass = (Date.now()-start)/1000; console.log("timepass: " + timepass);
            var key = document.getElementById(getRandomKey());        
            key.classList.add("selected");
        }

        document.addEventListener("keyup", event => {      
        var keyPressed = String.fromCharCode(event.keyCode);
        var keyElement = document.getElementById(keyPressed);     
        var highlightedKey = document.querySelector(".selected"); 
        keyElement.classList.add("hit");  
        keyElement.addEventListener('animationend', () => {  
            keyElement.classList.remove("hit");
        })

        if (keyPressed === highlightedKey.innerHTML) {  
            highlightedKey.classList.remove("selected");
            console.log((Date.now()-start)/1000)
            var f;
            if((Date.now()-start)/1000 < 30)
            {
                targetRandomKey(); 
            }
            else{
                twitterscorecount = count;
                document.body.classList.add("completed");
                if(temp > count)
                {
                    highscore.innerHTML="High Score " + temp;
                    f=0;
                }
                else{
                    temp = count;
                    highscore.innerHTML="High Score: " + count;
                    f=1;
                }
                console.log("temp: " + temp);
                if(f==1){
                    if(count==0)        // If highscore has been beaten but score is 0
                    {
                        lastscore.innerHTML = "Last Score: " + count;    
                    }
                    else
                    {
                        lastscore.innerHTML = "Last Score: " + count + " 🎉";
                    }
                }
                else
                    lastscore.innerHTML = "Last Score: " + count;
                count=-1;
                document.body.classList.remove("hidescore");
            }
            count++;
            var score = document.getElementById("score");
            score.innerText=count;  
        } 
        })
        targetRandomKey();
    }
    function timerfunction()
    {
        var game = document.body;
        game.classList.add("gameon");
        var sec = 29;
        var timer = setInterval(function(){
            document.getElementById("timer").innerHTML=sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                game.classList.remove("gameon");
                document.getElementById("timer").innerHTML="30";
            }
        }, 1000);
        var count=0; var run=0; 
        keystriker(run, count, sec);
    }   
   
    function openmenu() {
        document.body.classList.add("menuopen");
    }
    function closemenu() {
        document.body.classList.remove("menuopen");
        document.bdy.classList.add("menuclose");
    }

    function red(){
        document.body.classList.add("redtheme");
        document.body.classList.remove("menuopen");
        document.bdy.classList.add("menuclose");
    }
    function black(){
        document.body.classList.remove("redtheme");
        document.body.classList.remove("menuopen");
        document.bdy.classList.add("menuclose"); 
    }

    function openindex(){
        window.open("index.html", "_self");
    }

    document.getElementsByTagName("li").addEventListener("keydown", function(e) {
    if(document.getElementById("audio").paused)
        document.getElementById("audio").play();
    else
        document.getElementById("audio").pause;
    });

    function easylink(){
        window.open("easy.html", "_self");
    }
    function mediumlink(){
        window.open("medium.html", "_self");
    }
    function hardlink(){
        window.open("hard.html", "_self");
    }

    function opengmail(){
        window.open("mailto:priyanshumodi.1909@gmail.com");
    }
    function openlinkedin(){
        window.open("https://www.linkedin.com/in/priyanshu-modi-5675941b5/");
    }

     function twitterfunction(){
        if(twitterscorecount < 2)
            window.open("https://twitter.com/intent/tweet?hashtags=KeyStriker&text=" + "I struck "+ twitterscorecount + " key in under 30 seconds in KeyStriker 🚀 Play and see if you can do it too! https://priyaansshu.github.io/keystriker");
        else
            window.open("https://twitter.com/intent/tweet?hashtags=KeyStriker&text=" + "I struck "+ twitterscorecount + " keys in under 30 seconds in KeyStriker 🚀 Play and see if you can do it too! https://priyaansshu.github.io/keystriker");
    }
