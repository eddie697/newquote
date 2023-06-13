//array of  Quotes
const quotes = [
    "The greatest glory in living lies not in never fallling, but in rising everytime we fall. - Nelson Mandella",
    "The way to get started is to quit talkng and begin doing. - Walt Disney",
    "Your time is limited, dont waste it living someone else's life. - Eleanir Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Either write something worth reading or do something worth writing. -Benjamin Franklin",
    "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that. -Stephen King",
    "One day I will find the right words, and they will be simple. -Jack Kerouac, The Dharma Bums",
    "Read a thousand books, and your words will flow like a river. -Lisa See",
    "To live is the rarest thing in the world. Most people exist, that is all. -Oscar Wilde",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -Ralph Waldo Emerson",
    "Self-awareness and self-love matter. Who we are is how we lead. -Brene Brown",
    "We are all broken, that's how the light gets in. -Ernest Hemingway"
];

//Function to generate a random quote
const generate = document.querySelector('.genQ');
generate.addEventListener("click", ()=>{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerHTML= quotes[randomIndex]
}) 
