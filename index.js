const quoteTxt = document.querySelector('.quoteSection__content')
const quoteAuthor = document.querySelector('.quoteSection__author')
const btn = document.querySelector('.nextquote')
const sound = document.querySelector(".sound")
const copy = document.querySelector(".copy")
const twitter = document.querySelector(".twitter")
const alert = document.querySelector(".alert")
const textCopied = document.querySelector(".removeAlert")

const firstQuote = () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteTxt.innerText = data.content;
            quoteAuthor.innerText = "-" + data.author;
        })
}


firstQuote()
const getQuote = () => {
    btn.innerHTML = "Loading..."
    btn.classList.add("loading");
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteTxt.innerHTML = data.content;
            quoteAuthor.innerHTML = data.author;
            btn.innerHTML = "New Quote";
            btn.classList.remove("loading");
        })
}

btn.addEventListener("click", getQuote)

sound.addEventListener("click", () => {

    let textToSpeech = new SpeechSynthesisUtterance(`${quoteTxt.innerHTML} by ${quoteAuthor.innerHTML}`);
    speechSynthesis.speak(textToSpeech);
})
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteTxt.innerText);
    alert.style.display = "flex";
    alert.style.transition = "300ms ease";
})

textCopied.addEventListener("click", () => {
    alert.style.display = "none";
    alert.style.transition = "300ms ease";
})

twitter.addEventListener("click", () => {
    const url = `https://www.twitter.com/intent/tweet?url=${quoteTxt.innerText}`;
    window.open(url, "_blank")
})