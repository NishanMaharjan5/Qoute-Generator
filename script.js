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
    const combinedQuotes = scienceQuotes.concat(historyQuotes);
    const randomIndex = Math.floor(Math.random() * combinedQuotes.length);
    document.getElementById("quote").innerText = combinedQuotes[randomIndex];

}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".quote-container").classList.toggle("dark-mode");
    document.querySelectorAll("button").forEach(button => button.classList.toggle("dark-mode"));

    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.innerText = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}

function increaseFontSize() {
    let quoteElement = document.getElementById("quote");
    let currentFontSize = parseFloat(window.getComputedStyle(quoteElement).fontSize);
    quoteElement.style.fontSize = (currentFontSize + 2) + "px";
}

function decreaseFontSize() {
    let quoteElement = document.getElementById("quote");
    let currentFontSize = parseFloat(window.getComputedStyle(quoteElement).fontSize);
    quoteElement.style.fontSize = (currentFontSize - 2) + "px";
}
