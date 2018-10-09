
        
    function main(): void {
        var i: string = prompt("Gib deinen Namen ein");
        var node: HTMLElement = document.getElementById("content");
        node.innerHTML += "Gruezi";
        node.innerHTML += i;
        node.innerHTML += ",  Liebe Grueße von Hilal!";
        console.log("Gruezi", i , " willkommen bei EIA2!");
        }
    
    document.addEventListener("DOMContentLoaded", main);