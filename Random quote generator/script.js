// Define an array of quotes
var quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    }
  ];
  
  // Get a random quote from the array
  function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Display a random quote
  function displayQuote() {
    var quote = getRandomQuote();
    document.querySelector("#quote p").textContent = quote.text;
    document.querySelector("#author").textContent = "- " + quote.author;
  }
  
  // Event listener for the "New Quote" button
  document.querySelector("#new-quote").addEventListener("click", function() {
    displayQuote();
  });
  
  // Initial quote display on page load
  displayQuote();
  
