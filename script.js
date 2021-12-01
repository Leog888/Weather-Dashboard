// Variables for selecting html elements 
var searchList = docuemnt.getElementById("searchList");
var tempText = document.createElement("li")
var humidText = document.createElement("li")
var tempText = document.createElement("li")
var tempText = document.createElement("li")

// Search from history
function history(location){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=7a35162ff8a1ab9814d70cac9d534864"
    console.log("histoy: "+ url);

    Display(url)
}
// Seach Input 
function searchInput (){
    
}

// Create function to display on dashboard 

// Main data to get and display 

