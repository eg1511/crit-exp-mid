var climateObject = {
    "Desertic/Dry": {
      "Outdoor": ["Shohaku/Conifer"]

    },
    "Mediterranean": {
      "Outdoor": ["Shohaku/Conifer", "Zouki/Seasonal Tree", "Hanamono/Flower", "Mimono/Fruits"],
      "Indoor": ["Shohaku/Conifer", "Zouki/Seasonal Tree", "Hanamono/Flower", "Mimono/Fruits"]
    },
    "Temperate": {
      "Outdoor": ["Shohaku/Conifer", "Zouki/Seasonal Tree", "Hanamono/Flower", "Mimono/Fruits"],
      "Indoor": ["Shohaku/Conifer", "Zouki/Seasonal Tree", "Hanamono/Flower", "Mimono/Fruits"]
      },
    "Tropical": {
        "Outdoor": ["Shohaku/Conifer"],
      },
  }
  window.onload = function() {
    var climateSel = document.getElementById("climate");
    var placementSel = document.getElementById("placement");
    var treeSel = document.getElementById("tree");
    for (var x in climateObject) {
        climateSel.options[climateSel.options.length] = new Option(x, x);
    }
    climateSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      treeSel.length = 1;
      placementSel.length = 1;
      //display correct values
      for (var y in climateObject[this.value]) {
        placementSel.options[placementSel.options.length] = new Option(y, y);
      }
    }
    placementSel.onchange = function() {
      //empty Chapters dropdown
      treeSel.length = 1;
      //display correct values
      var z = climateObject[climateSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        treeSel.options[treeSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }

  function results(){
    console.log("Button was clicked!")
    let contentToShow = document.getElementById(show);
    contentToShow.style.display = "block";
  }
