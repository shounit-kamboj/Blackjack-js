let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let first_card = 0;
let second_card = 0;
let new_card = 0;
let won_game = false;
let blackjack = false;
let lost = false;
let sum = 0;

let starting_hand = first_card + second_card;

let msg = '';
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("card");
const startBtn = document.querySelector(".Start");

startBtn.addEventListener("click", start_game);

function start_game() {
    startBtn.style.display = "none";

    let randomIndex1 = Math.floor(Math.random() * cards.length);
    first_card = cards[randomIndex1];

    let randomIndex2 = Math.floor(Math.random() * cards.length);
    second_card = cards[randomIndex2];

    sum = first_card + second_card;
    cardsEl = "Cards in hand: " + first_card + " " + second_card;
    card.textContent = cardsEl
    sum = first_card + second_card;
    if (starting_hand === 21) {
        msg = "blackjack!";
        //payout 
        startBtn.style.display = "";
    }
    else if (starting_hand < 21) {
        msg = "hit or stand?";
    }
    else {
        msg = "dealer wins";

    }
    messageEl.textContent = msg;
}

function hit() {
    let randomIndexNew = Math.floor(Math.random() * cards.length);
    let new_card = cards[randomIndexNew];
    cardsEl = cardsEl + " " + new_card;
    card.textContent = cardsEl
    sum = sum + new_card;

    if (sum > 21) {
        msg = "Bust! Dealer wins";
        messageEl.textContent = msg;
        lost = true;

    }
    else if (sum === 21) {
        msg = "21! dealers turn now"
        messageEl.textContent = msg;
        stand();

    }
}

function stand() {
    dealers_turn();

}

function dealers_turn() {
    let dealers_values = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let randomIndexDealer = Math.floor(Math.random() * dealers_values.length);
    let dealer_card = dealers_values[randomIndexDealer];

    if (dealer_card > 21) {
        msg = "Dealer busted with  " + dealer_card + "! you win";
        messageEl.textContent = msg;

    }
    else if (dealer_card > sum) {
        msg = "dealer wins with " + dealer_card + ", better luck next time";
        messageEl.textContent = msg;
    }
    else if (dealer_card == sum) {
        msg = "Push!";
        messageEl.textContent = msg;

    }
    else {
        msg = "You win! Dealer had " + dealer_card;
        messageEl.textContent = msg;

    }

}