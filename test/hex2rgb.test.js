var hex2rgb = require("../lib/hex2rgb");
var expect = require("chai").expect;

describe("hex2rgb", function () {

  it("should return an error if the value is not a hex code", function (done) {

    hex2rgb("blue", function (error, result) {
      expect(error).to.exist;
      done();
    });

  });

  it("should return a correctly converted rgb value", function (done) {

    hex2rgb("#fff", function (error, result) {

      expect(error).to.not.exist;
      expect(result).to.deep.equal([255, 255, 255]);

      done();
    });

  });

});
