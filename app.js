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

paintSeats(airlineSeats);
