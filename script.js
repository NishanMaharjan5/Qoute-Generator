const scienceQuotes = [
    "Science is the key to our future, and if you don't believe in science, then you're holding everybody back.\n – Bill Nye",
    "Somewhere, something incredible is waiting to be known.\n – Carl Sagan",
    "The important thing is not to stop questioning.\n – Albert Einstein"
];

const historyQuotes = [
    "Those who do not remember the past are condemned to repeat it.\n – George Santayana",
    "History will be kind to me for I intend to write it.\n – Winston Churchill",
    "The more you know about the past, the better prepared you are for the future.\n – Theodore Roosevelt"
];

let currentIndex = -1;
let history = [];

function getSelectedCategory() {
    const category = document.getElementById("category").value;
    return category === "science" ? scienceQuotes : historyQuotes;
}


function nextQuote() {
    const quotes = getSelectedCategory();
    currentIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[currentIndex];
    history.push(currentIndex);  
}


function prevQuote() {
    const quotes = getSelectedCategory();
    if (history.length > 1) {
        history.pop();  
        currentIndex = history[history.length - 1];
        document.getElementById("quote").innerText = quotes[currentIndex];
    }
}


function randomQuote() {
    const quotes = getSelectedCategory();
    currentIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[currentIndex];
}
