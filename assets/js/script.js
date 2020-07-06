

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
  //  document.getElementById("cebu_total").innerHTML = myObj.cebu_total;
  //  document.getElementById("cebu_deaths").innerHTML = myObj.cebu_deaths;
    document.getElementById("nationwide").innerHTML = myObj.nationwide;
  //  document.getElementById("cebu_city").innerHTML = myObj.cebu_city;
  //  document.getElementById("mandaue").innerHTML = myObj.mandaue;
  //  document.getElementById("lapulapu").innerHTML = myObj.lapulapu;
  //  document.getElementById("time_updated").innerHTML = myObj.time_updated;

  }
};



xmlhttp.open("GET", "https://cebu.now.sh/data/covid.json", true);
xmlhttp.send();