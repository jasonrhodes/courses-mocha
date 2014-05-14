var getPalette = require("../lib/getPalette");
var assert = require("assert");

describe("getPalette", function () {

  it("should throw an error if the result is not an array", function () {

    function fetch() {
      return "not array";
    }

    assert.throws(function () {
      getPalette(fetch);
    }, /is not an array/);

  });

  it("should return an array with 3 items by default", function () {

    var palette = getPalette();
    assert(Array.isArray(palette), "did not return an array");
    assert.equal(palette.length, 3, "did not return 3 items");

  })

});
