let currentCard = 1;
const totalCards = 3;

function nextCard() {
 currentCard++;
 if (currentCard > totalCards) {
    currentCard = 1;
 }
 showCard(currentCard);
}

function previousCard() {
 currentCard--;
 if (currentCard < 1) {
    currentCard = totalCards;
 }
 showCard(currentCard);
}

function showCard(n) {
 const cards = document.getElementsByClassName('card');
 for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none';
 }
 cards[n - 1].style.display = 'block';
}

// Display the first card initially
showCard(1);