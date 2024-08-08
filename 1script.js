//ROCK, PAPER, SCISSORS - JAVASCRIPT (1index.html)

//FUNKTIONEN: Vergleich der Auswahl und wiedergabe des gewinnenden Elements
let vergleich = function (auswahlSpieler, auswahlRobot) {
  auswahlSpieler = auswahlSpieler;
  auswahlRobot = auswahlRobot;
  if (auswahlSpieler === auswahlRobot) {
    ergebnisRobot++;
    ergebnisSpieler++;
    return "Draw!"; //Vergleich Auswahl Spieler u. Robot gleich, dann unentschieden
  } else if (auswahlSpieler === "rock") {
    if (auswahlRobot === "scissors") {
      ergebnisSpieler++;
      return "You win!"; //Auswahl Spieler "rock" u. Robot "scissors" = Ausgabe: Spieler gewinnt + Ausgabe: Robot verliert
    } else {
      ergebnisRobot++;
      return "You lose!";
    }
  } else if (auswahlSpieler === "paper") {
    if (auswahlRobot === "rock") {
      ergebnisSpieler++;
      return "You win!"; //Auswahl Spieler "paper" u. Robot "rock" = Ausgabe: Spieler gewinnt + Ausgabe: Robot verliert
    } else {
      ergebnisRobot++;
      return "You lose!";
    }
  } else if (auswahlSpieler === "scissors") {
    if (auswahlRobot === "rock") {
      ergebnisRobot++;
      return "You lose!"; //Auswahl Spieler "scissors" u. Robot "rock" = Ausgabe: Spieler verliert + Ausgabe: Robot gewinnt
    } else {
      ergebnisSpieler++;
      return "You win!";
    }
  }
};

//BERECHNUNG: Formel für die zufällige Berechnung des Vergleichs
let erzeugeRobotAuswahl = function () {
  let zufallsZahl = Math.random(); //nimmt eine zufällige Zahl zwischen 0-1
  if (zufallsZahl < 0.34) {
    //bis zu dem Wert 0.34 ist das Zufallsergebnis: "rock"
    return "rock";
  } else if (zufallsZahl <= 0.67) {
    //bis zu dem Wert 0.67 ist das Zufallsergebnis: "papier"
    return "paper";
  } else {
    ////ab dem Wert 0.68 ist das Zufallsergebnis: "scissors"
    return "scissors";
  }
};

//ANZEIGE: Anzeige des Spielzugs
let spielen = function (spielerAuswahl) {
  let meldung;
  let ergebnis;
  let RobotAuswahl = erzeugeRobotAuswahl();

  meldung =
    "You've choosed " +
    spielerAuswahl.substr(0, 1) +
    spielerAuswahl.substr(1) +
    " and the Robot has " +
    RobotAuswahl.substr(0, 1) +
    RobotAuswahl.substr(1) +
    ".\n";
  meldung = meldung + vergleich(spielerAuswahl, RobotAuswahl);
  display(meldung);

  ergebnis = "Spieler: " + ergebnisSpieler + " / Robot: " + ergebnisRobot;
  displayErgebnis(ergebnis);
};

//ANZEIGE: Display zur Anzeige des Spielzugs in <p> "ausgabe"
let display = function (text) {
  let ausgabeParagraph = document.getElementById("ausgabe");
  ausgabeParagraph.innerHTML = text + "<br>";
  return;
};

//ANZEIGE: Display zur Anzeige des Spielzugs in <p> "ergebnis"
let displayErgebnis = function (text) {
  let ausgabeParagraph = document.getElementById("ergebnis");
  ausgabeParagraph.innerHTML = text + "<br>";
  return;
};

//ANZEIGE: Counter vom Score
ergebnisRobot = 0;
ergebnisSpieler = 0;
