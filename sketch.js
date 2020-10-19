///////////////////////////////////////////////////////////////
//         _________  ____  ______   _________________       //
//        / __/ _ \ \/ /  |/  / _ | / __/_  __/ __/ _ \      //
//       _\ \/ ___/\  / /|_/ / __ |_\ \  / / / _// , _/      //
//      /___/_/    /_/_/  /_/_/ |_/___/ /_/ /___/_/|_|       //
//                                                           //
///////////////////////////////////////////////////////////////


// VARS

// DATABASE

// WORDLISTS AND ASSIGNMENT OF SHUFFLED ARRAY
var wordsEng = ["africa", "agent", "air", "alien", "amazon", "angel", "antarctica", "apple", "arm", "back", "band", "bank", "bark", "beach", "belt", "berlin", "berry", "board", "bond", "boom", "bow", "box", "bug", "canada", "capital", "cell", "center", "china", "chocolate", "circle", "club", "compound", "copper", "crash", "cricket", "cross", "death", "dice", "dinosaur", "doctor", "dog", "dress", "dwarf", "eagle", "egypt", "engine", "england", "europe", "eye", "fair", "fall", "fan", "field", "file", "film", "fish", "flute", "fly", "forest", "fork", "france", "gas", "ghost", "giant", "glass", "glove", "gold", "grass", "greece", "green", "ham", "head", "himalaya", "hole", "hood", "hook", "human", "horseshoe", "hospital", "hotel", "ice", "ice cream", "india", "iron", "ivory", "jam", "jet", "jupiter", "kangaroo", "ketchup", "kid", "king", "kiwi", "knife", "knight", "lab", "lap", "laser", "lawyer", "lead", "lemon", "limousine", "log", "mammoth", "maple", "march", "mass", "mercury", "millionaire", "model", "mole", "moscow", "mouth", "mug", "needle", "net", "new york", "night", "note", "novel", "nurse", "nut", "oil", "olive", "olympus", "opera", "orange", "paper", "park", "part", "paste", "phoenix", "piano", "telescope", "teacher", "switch", "swing", "sub", "stick", "staff", "stadium", "sprint", "spike", "snowman", "slip", "shot", "shadow", "server", "ruler", "row", "rose", "root", "rome", "rock", "robot", "robin", "revolution", "rat", "racket", "queen", "press", "port", "pilot", "time", "tooth", "tower", "truck", "triangle", "trip", "turkey", "undertaker", "unicorn", "vacuum", "van", "wake", "wall", "war", "washer", "washington", "water", "wave", "well", "whale", "whip", "worm", "yard"];
var wordsNed = ["defenestratie", "tondeuse", "bladgoud", "kurk", "preparee", "teleurstelling", "ambtenaar", "frietchinees", "fotoshoot", "kruidvat", "teddybeer", "tankstation", "zebra", "post", "roulette", "draak", "oorlog", "honing", "bom", "casino", "wolkenkrabber", "Saturnus", "astronaut", "zweep", "Antarctica", "sneeuwpop", "concert", "chocolade", "vliegtuig", "miljonair", "dinosaurus", "kameleon", "trompet", "pinguïn", "spin", "raket", "ambassade", "pistool", "ziekte", "spion", "prinses", "genie", "dief", "opera", "ridder", "stadion", "limousine", "spook", "bus", "lolly", "laser", "dood", "ziekenhuis", "ambulance", "inktvis", "helikopter", "kangoeroe", "microscoop", "pretpark", "superheld", "telescoop", "parachute", "vampier", "rotonde", "satelliet", "engel", "robot", "eenhoorn", "heks", "kolonist", "duiker", "gif", "brug", "vuur", "cobra", "walvis", "maan", "vis", "dokter", "kerk", "pleister", "zuster", "wind", "leeuw", "oog", "lucht", "konijn", "bank", "gras", "jurk", "dwerg", "bos", "auto", "handschoen", "appel", "olie", "kok", "beer", "poes", "leven", "geluk", "reus", "spiegel", "strand", "hotel", "water", "papier", "worm", "advocaat", "wetenschapper", "dans", "wortel", "ketchup", "nacht", "katoen", "voet", "muis", "mes", "theater", "agent", "schip", "piloot", "duim", "leraar", "fles", "dag", "koning", "glas", "kabel", "tand", "hond", "paard", "schoen", "stoel", "kroon", "ijs", "goud", "vork", "tijd", "fluit", "vlam", "sneeuw", "ivoor", "soldaat", "piramide", "kubus", "ster", "ring", "hoorn", "hart", "blok", "buis", "naald", "lijn", "krijt", "bord", "box", "scherm", "stuk", "spot", "knop", "mond", "etiket", "hand", "bed", "muur", "toren", "kaart", "bad", "diamant", "kruis", "net", "punt", "noot", "plaat", "hol", "wijzer", "kracht", "sleutel", "machine", "overgang", "stroom", "hoofd", "paal", "centrum", "ongeluk", "schat", "slot", "code", "cirkel", "link", "pijp", "Amsterdam", "Nederland", "Limburg", "Brussel", "Egypte", "Londen", "carnaval", "Rotterdam", "België", "hunebed", "Hollywood", "Griekenland", "Rome", "Ardennen", "ninja", "pool", "shoarma", "Duitsland", "provincie", "Amerika", "Atlantis", "Engeland", "loempia", "Afrika", "tablet", "Frankrijk", "klomp", "polder", "euro", "voetbal", "Zeeland", "Berlijn", "pizza", "dolfijn", "Hawaï", "motor", "laars", "caravan", "friet", "Alpen", "seizoen", "kamer", "blik", "vorst", "ijzer", "zegel", "licht", "mars", "groen", "jam", "Europa", "leiding", "wissel", "aarde", "straal", "deksel", "citroen", "roos", "tafel", "staart", "meter", "dijk", "batterij", "arena", "beeld", "kostuum", "slang", "spoor", "garen", "aandeel", "vet", "blond", "slip", "gemeente", "slag", "proef", "club", "schaduw", "bende", "strip", "tweeling", "band", "chip", "tocht", "duikboot", "mijn", "vink", "vlieg", "koud", "knikker", "spel", "haak", "knuppel", "ketting", "scheiding", "stapel", "bar", "bubbel", "pond", "rond", "veld", "hemel", "bok", "veer", "zink", "fiets", "schrift", "mat", "slee", "patroon", "grond", "rug", "stam", "munt", "graad", "kegel", "uitzending", "eikel", "mol", "geslacht", "tempel", "pompoen", "ijsbeer", "smokkelaar", "ham", "vlucht", "kruik", "val", "spreuk", "boek", "raad", "bal", "pil", "elf", "bureau", "arm", "schaal", "flits", "cel", "vulkaan", "contract", "chinees", "baan", "dierenarts", "haven", "golf", "nicht", "steek", "masker", "riet", "geluid", "prijs", "schroef", "havik", "pers", "formule", "as", "kuip", "viool", "regel", "dicht", "massa", "web", "zak", "palm", "kraan", "pasta", "taart", "gerecht", "spijker", "model", "weegschaal", "revolutie", "Parijs", "gas", "single", "piano", "bestand", "bron", "podium", "aanval", "asiel", "netwerk", "wedstrijd", "film", "schijf", "amazone", "ruimte", "beurs", "staf", "shuttle", "piraat", "kop", "stem", "gat", "kussen", "kamp", "ton", "spa", "pad", "figuur", "gezicht", "doos", "nagel", "pinda", "monster", "was", "recept", "toets", "tap", "school", "trommel", "kever", "kater", "tank", "koper", "schot", "hagel", "riem", "pupil", "oranje"]
var shuffledWords;
var shuffledColors;

// ARRAY OF COLORS TO BE USED
var colors0 = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "3"]
var colors1 = ["0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "3"]
var colors;

// GAME SEED
var seed = prompt('Please enter a number between 0 and 10.000 \n All players must enter the same number.');

// ARRAY OF CARDS ON THE BOARD
var cards = document.getElementsByClassName('card');

// SPYMASTER BOOLEAN
var spy = false;

// KEEP SCORE FOR TEAMS
var scoreRed;
var scoreBlue;

// DARKMODE BOOLEAN
var darkMode = true;

// KEEP LANGUAGE
var language = "eng";

// IS NEXT CARD MALE BOOLEAN
var male = false;

// KEEP TRACK OF WHICH TEAM'S TURN IT IS
var team;

// IS THE HOW TO PLAY SHOWING?
var showingExplanation = false;


// GAMELOGIC

// FUNCTION TOGGLE DARKMODE
function toggleDarkmode() {
    if (darkMode == true) {
        document.body.style.backgroundColor = '#202225';
        document.getElementById('winner').classList.remove('winner')
        document.getElementById('winner').classList.add('darkWinner')
        document.getElementById('dash').classList.remove('dash')
        document.getElementById('dash').classList.add('darkDash')
        document.getElementById('explanation').classList.remove('explanation')
        document.getElementById('explanation').classList.add('explanationDark')
        for (i = 0; i < cards.length; i++) {
            cards[i].classList.add('dark');
        }
    } else if (darkMode == false) {
        document.body.style.backgroundColor = '#ffffff';
        document.getElementById('winner').classList.remove('darkWinner')
        document.getElementById('winner').classList.add('winner')
        document.getElementById('dash').classList.remove('darkDash')
        document.getElementById('dash').classList.add('dash')
        document.getElementById('explanation').classList.remove('explanationDark')
        document.getElementById('explanation').classList.add('explanation')
        for (i = 0; i < cards.length; i++) {
            cards[i].classList.remove('dark');
        }
    }
}

// DECIDE WHICH TEAM BEGINS
if (seed % 2 == 0) {
    colors = colors0;
    scoreRed = 9;
    scoreBlue = 8;
    team = "red";
    document.getElementById('team').style.backgroundColor = "#c73535"
    document.getElementById('team').style.border = "#c73535"
} else if (seed % 2 != 0) {
    colors = colors1;
    scoreRed = 8;
    scoreBlue = 9;
    team = "blue"
    document.getElementById('team').style.backgroundColor = "#3f77da"
    document.getElementById('team').style.border = "#3f77da"

}

// SHUFFLE THE WORDSLISTS AND SHOW ROOM ID
shuffledWordsEng = shuffle(wordsEng, seed);
shuffledWordsNed = shuffle(wordsNed, seed);
shuffledColors = shuffle(colors, seed);
document.getElementById('winner').innerHTML = "spymaster room: " + seed;

// IF USER HAS INPUT A SEED, START THE GAME
if (seed != null) {
    render();
}

// FUNCTION SHUFFLE
function shuffle(array, seed) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    seed = seed || 1;
    var random = function () {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    while (0 !== currentIndex) {

        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// FUNCTION RENDERING THE GAME
function render() {
    if (language == "eng") {
        for (i = 0; i < cards.length; i++) {
            cards[i].innerHTML = shuffledWordsEng[i];
            if (shuffledColors[i] == 0) {
                cards[i].classList.add('red');
            } else if (shuffledColors[i] == 1) {
                cards[i].classList.add('blue');
            } else if (shuffledColors[i] == 2) {
                cards[i].classList.add('white');
            } else if (shuffledColors[i] == 3) {
                cards[i].classList.add('black');
            }
        }
    } else if (language == "ned") {
        for (i = 0; i < cards.length; i++) {
            cards[i].innerHTML = shuffledWordsNed[i];
            if (shuffledColors[i] == 0) {
                cards[i].classList.add('red');
            } else if (shuffledColors[i] == 1) {
                cards[i].classList.add('blue');
            } else if (shuffledColors[i] == 2) {
                cards[i].classList.add('white');
            } else if (shuffledColors[i] == 3) {
                cards[i].classList.add('black');
            }
        }
    }
    document.getElementById('scoreRed').innerHTML = scoreRed;
    document.getElementById('scoreBlue').innerHTML = scoreBlue;
    document.getElementById('team').innerHTML = "End " + team + "'s turn"
    if (scoreBlue == 0) {
        document.getElementById('winner').innerHTML = "blue wins!"
    } else if (scoreRed == 0) {
        document.getElementById('winner').innerHTML = "red wins!"
    }
    if (team == "blue") {
        document.getElementById('team').style.backgroundColor = "#3f77da"
    } else if (team == "red") {
        document.getElementById('team').style.backgroundColor = "#c73535"
    }
    male = !male;
}

// FUNCTION TO SHOW ALL CARDS' COLOR
function showCardsColor() {
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('card') && cards[i].classList.contains('red')) {
            cards[i].classList.add('redVisible');
        } else if (cards[i].classList.contains('card') && cards[i].classList.contains('blue')) {
            cards[i].classList.add('blueVisible');
        } else if (cards[i].classList.contains('card') && cards[i].classList.contains('white')) {
            cards[i].classList.add('whiteVisible');
        } else if (cards[i].classList.contains('card') && cards[i].classList.contains('black')) {
            cards[i].classList.add('blackVisible');
        }
    }
}

// FUNCTION TO HIDE ALL CARDS' COLOR
function hideCardsColor() {
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove('redVisible');
        cards[i].classList.remove('blueVisible');
        cards[i].classList.remove('whiteVisible');
        cards[i].classList.remove('blackVisible');
    }
}

// HANDLE CLICKS FROM THE USER
document.addEventListener('click', function (click) {
    // TOGGLE SPYMASTER VIEW
    document.getElementById('winner').innerHTML = "spymaster";
    if (click.target.classList.contains('button') && click.target.classList.contains('spy') && spy === false) {
        spy = !spy;
        if (spy == true) {
            click.target.innerHTML = "Player View";
        } else {
            click.target.innerHTML = "Spymaster View";
        }
        showCardsColor();
    } else if (click.target.classList.contains('button') && click.target.classList.contains('spy') && spy === true) {
        spy = !spy;
        if (spy == true) {
            click.target.innerHTML = "Player View";
        } else {
            click.target.innerHTML = "Spymaster View";
        }
        hideCardsColor();
    }

    // TOGGLE LANGUAGE
    // SET LANGUAGE TO ENGLISH
    if (click.target.classList.contains('button') && click.target.classList.contains('eng')) {
        language = "eng";
    }
    // SET LANGUAGE TO DUTCH
    if (click.target.classList.contains('button') && click.target.classList.contains('ned')) {
        language = "ned";
    }

    // TOGGLE DARKMODE
    if (click.target.classList.contains('button') && click.target.classList.contains('darkmode')) {
        darkMode = !darkMode;
        if (darkMode == true) {
            click.target.innerHTML = "Light Mode";
        } else {
            click.target.innerHTML = "Dark Mode";
        }
        toggleDarkmode();
    }

    // TOGGLE HOW TO PLAY
    if (click.target.classList.contains('howToPlay') && showingExplanation == false) {
        document.getElementById('explanation').innerHTML = "Start a video call with the other players where one person shares their screen showing the board. That person will also click on the cards so the others can see the game. The spymasters also open this website and turn on Spymaster View and hide their board from the others. \n Official rules: <a href='https://czechgames.com/files/rules/codenames-rules-en.pdf'>https://czechgames.com/files/rules/codenames-rules-en.pdf </a>"
        showingExplanation = true
    } else if (click.target.classList.contains('howToPlay') && showingExplanation == true) {
        document.getElementById('explanation').innerHTML = ""
        showingExplanation = false
    }

    // TOGGLE TEAMS
    if (click.target.classList.contains('team') && team == "red") {
        team = "blue";
        click.target.innerHTML = "End " + team + "'s turn"
    } else if (click.target.classList.contains('team') && team == "blue") {
        team = "red";
        click.target.innerHTML = "End " + team + "'s turn"
    }

    // SHOW HOW TO PLAY


    // HANDLE CARD CLICKING FOR PLAYERS

    // SHOW CLICKED CARD'S COLOR

    // RED
    if (click.target.classList.contains('card') && click.target.classList.contains('red')) {
        document.getElementById('winner').innerHTML = "spymaster"
        if (scoreRed > 0 && !click.target.classList.contains('redVisible')) {
            if (team == "blue") {
                team = "red";
            }
            if (!click.target.classList.contains('hasGender')) {
                if (male == true) {
                    click.target.classList.add('redVisiblePlayer0');
                } else if (male == false) {
                    click.target.classList.add('redVisiblePlayer1');
                }
            }
        }
        if (!click.target.classList.contains('redVisiblePlayer0')
            || !click.target.classList.contains('redVisiblePlayer1')) {
            if (!click.target.classList.contains('isClicked')) {
                scoreRed -= 1;
            }
        }
        click.target.classList.add('hasGender');
        click.target.classList.add('isClicked');
    }

    // BLUE
    if (click.target.classList.contains('card') && click.target.classList.contains('blue')) {
        if (scoreBlue > 0 && !click.target.classList.contains('blueVisible')) {
            if (team == "red") {
                team = "blue";
            }
            if (!click.target.classList.contains('hasGender')) {
                if (male == true) {
                    click.target.classList.add('blueVisiblePlayer0');
                } else if (male == false) {
                    click.target.classList.add('blueVisiblePlayer1');
                }
            }
        }
        if (!click.target.classList.contains('blueVisiblePlayer0')
            || !click.target.classList.contains('blueVisiblePlayer1')) {
            if (!click.target.classList.contains('isClicked')) {
                scoreBlue -= 1;
            }
        }
        click.target.classList.add('hasGender');
        click.target.classList.add('isClicked');
    }

    // WHITE
    if (click.target.classList.contains('card') && click.target.classList.contains('white')) {
        if (team == "blue") {
            team = "red";
        } else if (team == "red") {
            team = "blue";
        }
        if (!click.target.classList.contains('hasGender')) {
            if (male == true) {
                click.target.classList.add('whiteVisiblePlayer0');
            } else if (male == false) {
                click.target.classList.add('whiteVisiblePlayer1');
            }
        }
        click.target.classList.add('hasGender');
    }

    // BLACK
    if (click.target.classList.contains('card') && click.target.classList.contains('black')) {
        click.target.classList.add('blackVisiblePlayer1');
        if (team == "red") {
            document.getElementById('winner').innerHTML = "blue wins!"
        } else if (team == "blue") {
            document.getElementById('winner').innerHTML = "red wins!"
        }
    }


    // HANDLE CARD CLICKING FOR SPYMASTERS

    // SHOW CLICKED CARD'S COLOR

    // RED
    if (click.target.classList.contains('redVisible') && spy == true) {
        if (male == true) {
            click.target.classList.add('redVisiblePlayer0');
        } else if (male == false) {
            click.target.classList.add('redVisiblePlayer1');
        }
    }

    // BLUE
    if (click.target.classList.contains('blueVisible') && spy == true) {
        if (male == true) {
            click.target.classList.add('blueVisiblePlayer0');
        } else if (male == false) {
            click.target.classList.add('blueVisiblePlayer1');
        }
    }

    // WHITE
    if (click.target.classList.contains('whiteVisible') && spy == true) {
        if (!click.target.classList.contains('hasGender')) {
            if (male == true) {
                click.target.classList.add('whiteVisiblePlayer0');
            } else if (male == false) {
                click.target.classList.add('whiteVisiblePlayer1');
            }
        }
    }

    // BLACK
    if (click.target.classList.contains('blackVisible') && spy == true) {
        if (male == true) {
            click.target.classList.add('blackVisiblePlayer0');
        } else if (male == false) {
            click.target.classList.add('blackVisiblePlayer1');
        }
    }

    // RENDER THE GAME AFTER THE USER CLICKED ON A CARD OR BUTTON
    render();
});