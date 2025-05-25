// greet users based on local time
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



// handles dynamic calendar
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const previousBtnElement = document.getElementById('previousBtn');
const nextBtnElement = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();

    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';
    for (let i = firstDayIndex; i > 0; i--) {
        const previousDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${previousDate.getDate()}</div>`
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    for (let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`
    }

    datesElement.innerHTML = datesHTML;
}

previousBtnElement.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
})

nextBtnElement.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
})

updateCalendar();


// dynamic list
// select elements
var addButton = document.getElementById('add-item-button');
var itemInput = document.getElementById('addIdea');
var dynamicList = document.getElementById('dynamic-list');

// add new item to the list
function addNewListItem() {
    // get value from input field
    var newItemIdea = itemInput.value.trim();

    // check if input is not empty
    if (newItemIdea) {
        // create a new list item element
        var listItem = document.createElement('li');
        listItem.textContent = newItemIdea;

        // append new list item to dynamic list
        dynamicList.appendChild(listItem);

        // clear input field for next item
        itemInput.value = '';
    } else {
        alert('Please enter your dinner idea.');
    }
}

// add an event listener to the '+' button
addButton.addEventListener('click', addNewListItem);
// add an evet listener for the Enter key in input field
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNewListItem();
    }
});



