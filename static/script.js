function updateClock() {

    let now = new Date();

    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();

    let nepal = document.getElementById("nepal");

    if(nepal){

        nepal.innerHTML =
        new Date().toLocaleTimeString(
            'en-US',
            {timeZone:'Asia/Kathmandu'}
        );

        document.getElementById("london").innerHTML =
        new Date().toLocaleTimeString(
            'en-US',
            {timeZone:'Europe/London'}
        );

        document.getElementById("newyork").innerHTML =
        new Date().toLocaleTimeString(
            'en-US',
            {timeZone:'America/New_York'}
        );

        document.getElementById("madrid").innerHTML =
        new Date().toLocaleTimeString(
            'en-US',
            {timeZone:'Europe/Madrid'}
        );
    }
}

setInterval(updateClock,1000);
updateClock();

function saveNote(){

    let note =
    document.getElementById("noteArea").value;

    localStorage.setItem(
        "stratos_note",
        note
    );

    alert("Note Saved!");
}

window.onload = function(){

    let saved =
    localStorage.getItem(
        "stratos_note"
    );

    if(saved &&
       document.getElementById("noteArea")){

        document.getElementById(
            "noteArea"
        ).value = saved;
    }
}

function calculate(operator){

    let a =
    parseFloat(
        document.getElementById("num1").value
    );

    let b =
    parseFloat(
        document.getElementById("num2").value
    );

    let result;

    if(operator==="+") result=a+b;
    if(operator==="-" ) result=a-b;
    if(operator==="*" ) result=a*b;
    if(operator==="/") result=a/b;

    document.getElementById(
        "result"
    ).innerHTML =
    "Result: " + result;
}

function toggleTheme(){

    document.body.classList.toggle(
        "light-mode"
    );
}

function searchSite(){

    let query =
    document.getElementById(
        "searchBox"
    ).value.toLowerCase();

    const sites = {

        "chatgpt":"https://chatgpt.com",
        "grok":"https://grok.com",
        "gemini":"https://gemini.google.com",
        "claude":"https://claude.ai",
        "spotify":"https://open.spotify.com",
        "youtube":"https://youtube.com",
        "facebook":"https://facebook.com",
        "instagram":"https://instagram.com",
        "sofascore":"https://sofascore.com",
        "football":"https://www.livesports077.com/"
    };

    if(sites[query]){

        window.open(
            sites[query],
            "_blank"
        );
    }
    else{

        alert(
        "Website not found."
        );
    }
}