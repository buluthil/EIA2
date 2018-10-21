var Aufgabe2;
(function (Aufgabe2) {
    function uno() {
        let k0 = {
            name: "0",
            red: 3,
            blue: 1,
            green: 1,
            yellow: 1
        };
        let k1 = {
            name: "1",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k2 = {
            name: "2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k3 = {
            name: "3",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k4 = {
            name: "4",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k5 = {
            name: "5",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k6 = {
            name: "6",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k7 = {
            name: "7",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k8 = {
            name: "8",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k9 = {
            name: "9",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k10 = {
            name: "Reverse",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k11 = {
            name: "Aussetzten",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let k12 = {
            name: "+2",
            red: 2,
            blue: 2,
            green: 2,
            yellow: 2
        };
        let AlleKarten = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12];
        let s1 = 4;
        let s2 = 4;
        let c = "";
        function random1(x) {
            return Math.floor(Math.random() * Math.floor(x));
        }
        function placeDiv(_color, _v, _y) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _y);
            document.getElementById("a" + _y).innerHTML += _v;
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = (_y + 0.2) * 110 + "px";
            s.bottom = 40 + "px";
            if (_color == "#000000") {
                s.color = "white";
            }
            if (_color == "#0000ff") {
                s.color = "white";
            }
        }
        let z;
        let input = prompt("Wie viele Karten wollen Sie? ");
        z = Number(input);
        for (let d = 0; d < z; d++) {
            let l = random1(15);
            if (l == 13 && s1 > 0) {
                c = "#000000";
                s1--;
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && s1 <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && s2 > 0) {
                    c = "#000000";
                    s2--;
                    placeDiv(c, "Farbauswahl", d);
                    continue;
                }
                else if (l == 14 && s2 <= 0) {
                    d--;
                    continue;
                }
                else {
                    let b = random1(4);
                    switch (b) {
                        case 0:
                            c = "red";
                            if (AlleKarten[l].red > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].red--;
                                continue;
                            }
                        case 1:
                            c = "green";
                            if (AlleKarten[l].green > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].green--;
                                continue;
                            }
                        case 2:
                            c = "blue";
                            if (AlleKarten[l].blue > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].blue--;
                                continue;
                            }
                        case 3:
                            c = "yellow";
                            if (AlleKarten[l].yellow > 0) {
                                placeDiv(c, AlleKarten[l].name, d);
                                AlleKarten[l].yellow--;
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Stapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenstapel");
            document.getElementById("Kartenstapel").innerHTML += "Kartenstapel";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = " #white";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
        }
        function AblageStapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#white";
            s.width = 100 + "px";
            s.height = 200 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }
        AblageStapel();
        Stapel();
    }
    document.addEventListener("DOMContentLoaded", (uno));
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map