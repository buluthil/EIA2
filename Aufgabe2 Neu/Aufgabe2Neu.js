var UnoGame;
(function (UnoGame) {
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let deck = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" },
        { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" },
        { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    console.log(deck);
    let cards = [];
    function input() {
        let numcards = prompt("How many cards do you want?");
        let n = parseInt(numcards);
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            cards.push(deck[r]);
            deck.splice(r, 1);
        }
        for (let a = 0; a < cards.length; a++) {
            let div = document.createElement("div");
            document.getElementById("Unocards").appendChild(div);
            div.innerHTML = cards[a].value;
            div.classList.add("Unocards");
            div.classList.add(cards[a].color);
        }
    }
    document.addEventListener("DOMContentLoaded", input);
})(UnoGame || (UnoGame = {}));
//# sourceMappingURL=Aufgabe2Neu.js.map