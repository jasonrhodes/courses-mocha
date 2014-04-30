var expect = require("chai").expect;
var hex2rgb = require("../hex2rgb");

describe("hex to rgb conversion", function () {

  it("should fail on less than 3 characters", function (done) {

    hex2rgb("ff", function (err) {
      
      expect(err).to.exist;
      done();

    });
  
  });

  it("should fail on more than 6 characters", function (done) {

    hex2rgb("ffaaffaa", function (err) {
      
      expect(err).to.exist;
      done();

    });
  
  });

  it("should convert 6-character hex to rgb correctly", function (done) {

    hex2rgb("ffffff", function (err, rgb) {
      
      expect(err).to.not.exist;
      expect(rgb).to.deep.equal([255,255,255]);
      done();

    });
  
  });

  it("should convert 3-character hex to rgb correctly", function (done) {

    hex2rgb("fff", function (err, rgb) {
      
      expect(err).to.not.exist;
      expect(rgb).to.deep.equal([255,255,255]);
      done();

    });
  
  });

});