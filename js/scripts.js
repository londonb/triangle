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
/*
if (sidea === sideb === sidec){
  return true;
}
*/
/*
(((1 + 1) > 6) || ((1 + 6) > 1) || ((1 + 6) > 1)) {
*/
