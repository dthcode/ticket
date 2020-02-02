// Set today date
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#departDate").value = today;
document.querySelector("#returnDate").value = today;

// Make link from data that enter in the form
function MakeLink(){
  var dateFrom, dateTo, begin, language, origin, destination, date, origin1, destination1, date1, currency, url;
  dateFrom = document.getElementById("departDate").value;
  dateTo = document.getElementById("returnDate").value;
  begin = "https://fly.vietnamairlines.com/dx/VNDX/#/matrix?journeyType=round-trip"
  language = "&locale="+document.getElementById("language").value;
  origin = "&origin="+document.getElementById("flyFrom").value;
  destination = "&destination="+document.getElementById("flyTo").value;
  date = "&ADT=1&CHD=0&INF=0&date="+dateFrom.substr(5, 2) + "-" + dateFrom.substr(8, 2); +"-" + dateFrom.substr(0, 4);
  origin1 = destination;
  destination1 = origin;
  date1 = "&date1="+dateTo.substr(5, 2) + "-" + dateTo.substr(8, 2) + "-" + dateTo.substr(0, 4);
  currency = "&promoCode=&class=Economy&pointOfSale="+document.getElementById("currency").value;
  url = begin + language + origin1 + destination1 + date1 + origin2 + destination2 + date2 + currency;
  return url;
}

// On click send data from form via link
function Search() {
  window.open(MakeLink(), '_blank');
  return false;
}