namespace UnoGame {
    interface Card {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let deck: Card[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, 
    { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, 
    { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, 
    { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];

    for (let i: number = 0; i < colors.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {
                let card: Card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    console.log(deck);

    let cards: Card[] = [];

    function input(): void {
        let numcards: string = prompt("How many cards do you want?");
        let n: number = parseInt(numcards);

        for (let anz: number = n; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            cards.push(deck[r]);
            deck.splice(r, 1);
        }

        for (let a: number = 0; a < cards.length; a++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Unocards").appendChild(div);
            div.innerHTML = cards[a].value;
            div.classList.add("Unocards");
            div.classList.add(cards[a].color);
        }
        
    }
    document.addEventListener("DOMContentLoaded", input);
}