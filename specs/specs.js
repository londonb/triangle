
describe('triangleTest', function() {
  it("is a triangle, if a+b>=c & a+c<=b & b+c<=a", function() {
    expect(triangleTest(2,2,2)).to.equal(true);
  });
  it("is false is not a triangle, if a+b>=c & a+c<=b & b+c<=a", function() {
    expect(triangleTest(1,1,6)).to.equal(false);
  });
});

describe('equilateralTest', function() {
  it ("is true if a=b=c", function() {
    expect(equilateralTest(1,1,1)).to.equal(true);
  });
});

describe('isoscelesTest', function() {
  it("is an isosceles if a=b || b=c || a=c", function() {
    expect(isoscelesTest(4,4,5)).to.equal(true);
  });
});

describe('scaleneTest', function() {
  it("is an scalene if a !=b !=c", function() {
    expect(scaleneTest(4,7,5)).to.equal(true);
  });
});

/*  it("is equilateral if a=b=c", function() {
    expect(triangleTest(1,1,1)).to.equal(true);
  });
  it("is an isosceles if a=b || b=c || a=c", function(){
    expect(triangleTest(3,3,5)).to.equal(true);
  });
  it("is scalene if a !=b !=c", function() {
    expect(triangleTest(4,7,5)).to.equal(true);
  });*/
