var u = 0;
var uPS = 0
var uPC = 1;
var costPS1 = 100;
var costPS2 = 120;
var costPS3 = 350;
var costPS4 = 1000;
var costPS5 = 5000;
var costPS6 = 10000;
var costPS7 = 30000;
var silver = 0;
var coper = 0;
var gold = 0;
var iron = 0;
var diamond = 0;
var ruby = 0;
var tanzanite = 0;

function gainU() {
  u += uPC;
}

setInterval(function renderU() {
  document.getElementById("u").innerHTML = "Utensils: " + u;
})

setInterval(function renderUPS() {
  document.getElementById("uPS").innerHTML = "Utensils Per Second: " + uPS;
})

function gainUPS1() {
  if(u >= costPS1)
  {
    uPS += 2;
    u -= costPS1;
    costPS1 += 2;
    document.getElementById("cost1").innerHTML = "Silver <br>Cost: " + costPS1;
    silver += 1;
    document.getElementById("silver").innerHTML = "Silver: " + silver + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}

function gainUPS2() {
  if(u >= costPS2)
  {
    uPS += 5;
    u -= costPS2;
    costPS2 += 9;
    document.getElementById("cost2").innerHTML = "Coper <br>Cost: " + costPS2;
    coper += 1;
    document.getElementById("coper").innerHTML = "Coper: " + coper + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}

function gainUPS3() {
  if(u >= costPS3)
  {
    uPS += 10;
    u -= costPS3;
    costPS3 += 15;
    document.getElementById("cost3").innerHTML = "Gold <br>Cost: " + costPS3;
    gold += 1;
    document.getElementById("gold").innerHTML = "Gold: " + gold + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}

function gainUPS4() {
  if(u >= costPS4)
  {
    uPS += 30;
    u -= costPS4;
    costPS4 += 30;
    document.getElementById("cost4").innerHTML = "Iron <br>Cost: " + costPS4;
    iron += 1;
    document.getElementById("iron").innerHTML = "Iron: " + iron + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}

function gainUPS5() {
  if(u >= costPS5)
  {
    uPS += 50;
    u -= costPS5;
    costPS5 += 100;
    document.getElementById("cost5").innerHTML = "Diamond <br>Cost: " + costPS5;
    diamond += 1;
    document.getElementById("diamond").innerHTML = "Diamond: " + diamond + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}


function gainUPS6() {
  if(u >= costPS6)
  {
    uPS += 100;
    u -= costPS6;
    costPS6 += 1000;
    document.getElementById("cost6").innerHTML = "Ruby <br>Cost: " + costPS6;
    ruby += 1;
    document.getElementById("ruby").innerHTML = "Ruby: " + ruby + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}

function gainUPS7() {
  if(u >= costPS7)
  {
    uPS += 100;
    u -= costPS7;
    costPS7 += 1000;
    document.getElementById("cost7").innerHTML = "Tanzanite <br>Cost: " + costPS7;
    tanzanite += 1;
    document.getElementById("Tanzanite").innerHTML = "Tanzanite: " + Tanzanite + " ";
  }
  else
  {
    alert("You do not have enough coins!");
  }
}

setInterval(function UPS() {
  u += uPS;
}, 1000);
