const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
const username = window.prompt("What's Your Name?", "Jane");
greeting.innerHTML = "Welcome to my Website, " + username;
