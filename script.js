const text = document.getElementById('text');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const twitterURL = document.getElementById('tweet-quote');

const getData = () => {
    let quoteObj = {};
    fetch('https://api.quotable.io/random')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            quoteObj = data;
            displayQuote(quoteObj);
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
        });
};

const displayQuote = (quoteObj) => {
    text.innerText = quoteObj.content;
    author.innerText = `by ${quoteObj.author}`;
    twitterURL.href = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(quoteObj.content)}`;
};

getData();

newQuote.addEventListener('click', () => {
    getData();
});
