// the relevant HTML part that displays greeting (by ID)
const greetingElement = document.getElementById("greeting");
// get the current time (hour)
const currentHour = new Date().getHours();

let greetUserMessage = "";
if (currentHour < 12) {
    greetUserMessage = "Good morning!";
} else if (currentHour < 17) {
    greetUserMessage = "Good afternoon!";
} else if (currentHour < 21) {
    greetUserMessage = "Good evening!";
} else {
    greetUserMessage = "Sweet dreams.";
}

// get greetUserMessage shown in the html page
greetingElement.textContent = greetUserMessage;