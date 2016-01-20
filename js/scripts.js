var triangleTest = function(sidea, sideb, sidec) {
  if (((sidea + sideb) > sidec) && ((sidea + sidec) > sideb) && ((sideb + sidec) > sidea)) {
  return true;
  } else {
  return false;
  }
};

var equilateralTest = function(sidea, sideb, sidec) {
  if ((((sidea === sideb) && (sidea === sidec) && (sideb === sidec)) && ((sidea + sideb) > sidec) && ((sidea + sidec) > sideb) && ((sideb + sidec) > sidea))) {
    return true;
  } else {
    return false;
  }
};

var isoscelesTest = function(sidea, sideb, sidec) {
  if ((((sidea === sideb) || (sidea === sidec) || (sideb === sidec)) && ((sidea + sideb) > sidec) && ((sidea + sidec) > sideb) && ((sideb + sidec) > sidea))) {
    return true;
  } else {
    return false;
  }
};

var scaleneTest = function(sidea, sideb, sidec) {
  if ((((sidea !== sideb) && (sidea !== sidec) && (sideb !== sidec)) && ((sidea + sideb) > sidec) && ((sidea + sidec) > sideb) && ((sideb + sidec) > sidea))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {

  $("form#triangle-quiz").submit(function(event) {
    var sidea = $("input#sidea").val();
    var sideb = parseInt($("input#sideb").val());
    var sidec = parseInt($("input#sidec").val());
    var equilateral = equilateralTest(sidea, sideb, sidec);
  console.log(equilateralTest);
    if (equilateral = true) {
      $("#equilateral").text("an equilateral ");
    } else {
      alert("Arrgh");
    }

    $(".results").show();

    event.preventDefault();
  });
});
/*
if (sidea === sideb === sidec){
  return true;
}
*/
/*
(((1 + 1) > 6) || ((1 + 6) > 1) || ((1 + 6) > 1)) {
*/
