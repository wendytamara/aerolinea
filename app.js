// declarar un array que representara los asientos de nuestro avion //con false indicando que estos estan vacios, ocupado = true

var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

// contador que nos ayudara a rastrear el numero de asientos //ocupados

var busySeats = 0;

  var paintSeats = function(array){
    var containerSeats = document.getElementById("seats");

    for (var i = 0; i < array.length; i++) {
      var seat = document.createElement("div");
      seat.className = "seats"

      //del 1er elemento al 4to va a hacer de 1era clase, del 0 al 3
          if (i < 4) {
            seat.style.background = "purple";
            } else {
              seat.style.background = "yellow";
            }
            containerSeats.appendChild(seat);
        }
};
var reserve = function(){
  var btn = document.getElementById("btn");
  btn.addEventListener("click", chooseZone);
};

var chooseZone = function(){
  var choice = prompt("En que zona prefieres reservar \n \n 1. Primera Clase \n 2. Clase Economica \n \n  por favor ingresa el numero de tu preferencia");

  var checkFirstClassZone  =  function(){
    var zone = "Primera Clase"
    for (var i = 0; i < 4; i++) {
        if (airlineSeats[i]== false) {
          airlineSeats[i] = true;
            reserveSeat(i);
            paintTiket(i, zone);
          break;
        } else if (i == 3 && airlineSeats[i] == true) {
          reasignEconomicZone(zone);
        }
        }
      };

      var checkEconomicZone = function(){
        var zone = "Economica";
        for (var i = 4; i < 10; i++) {
          if (airlineSeats[i]== false) {
            airlineSeats[i] = true;
            reserveSeat(i);
            paintTiket(i, zone);
            break;
          } else if (i == 9 && airlineSeats[i] == true) {
             reasignFirstClassZone(zone);
          }
        }
      }

var reserveSeat = function(indexToPaint){
  var seat = document.getElementsByClassName("seats");
  seat[indexToPaint].textContent = "ocupado";
};


var reasignEconomicZone = function(zone) {
   var reasing = confirm("ya no quedan mas aientos disponibles en " + zone + "  \n   quiere reservar en Zona Economica?");
   if (reasing == true) {
     checkEconomicZone();
   } else {
     nextFlight();
   }
};

var nextFlight = function(){
  alert("nuestro proximo vuelo sale en 3 horas")
};

var reasignFirstClassZone = function(zone){
  var reasing = confirm("ya no quedan mas aientos disponibles en " + zone + "  \n   quiere reservar en Primera  Clase?");
  if (reasing == true) {
    checkFirstClassZone();
  }else {
    nextFlight();
  }
}

if (choice ==1) {
  checkFirstClassZone();
} else if (choice ==2){
  checkEconomicZone();
} else {
  alert("por favor ingrese un campo valido")
}
};
  var paintTiket = function(i, zone){
    var containerTickets = document.getElementById("tickets");
    var ticket = document.createElement("div");
    ticket.className = "seats";
    var title = document.createElement("p");
    var reserveSeating = document.createElement("p");
    var zoneClass = document.createElement("p");
    title.textContent = "PASE DE ABORDAR";
    reserveSeating.textContent = "N° de asiento:  " + (i + 1);
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reserveSeating);
    ticket.appendChild(zoneClass);
    containerTickets.appendChild(ticket);
  }

paintSeats(airlineSeats);
reserve();
