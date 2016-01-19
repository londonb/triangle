var triangleTest = function(sidea, sideb, sidec) {
  if ((sidea + sideb > sidec) || (sidea +sidec > sideb) || (sideb + sidec > sidea)) {
  return true;
    if (sidea === sideb === sidec){
      return ("equilateral")
    }

  } else {
  return false;
  }
};

/*
(function(exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }
  };
})(this);
*/
