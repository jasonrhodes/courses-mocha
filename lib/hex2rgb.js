module.exports = {

  convert: function (hex, callback) {

    setTimeout(function () {

      if (/^#/.test(hex)) {
        hex = hex.slice(1);
      }

      var invalid = this.isInvalid(hex);
      if (invalid) return callback(new Error(invalid.reason));

      var values = this.arrayify(hex);
      callback(null, this.parse(values));

    }.bind(this), 50);

  },

  arrayify: function (hex) {

    var values = hex.split("");

    if (values.length === 3) {
      values = [values[0], values[0], values[1], values[1], values[2], values[2]];
    }

    return values;

  },

  isInvalid: function (hex) {

    if (hex.length !== 3 && hex.length !== 6) {
      return { reason: "Invalid hexadecimal string" };
    }

  },

  parse: function (values) {

    var r = parseInt([values[0], values[1]].join(""), 16);
    var g = parseInt([values[4], values[5]].join(""), 16);
    var b = parseInt([values[2], values[3]].join(""), 16);

    return [r, g, b];

  }

};

