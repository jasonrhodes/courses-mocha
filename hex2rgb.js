module.exports = function (hex, callback) {
	
  if (hex.length !== 3 && hex.length !== 6) {
    callback(new Error("Invalid hexadecimal string"));
    return;
  }

  var nums = hex.split("");

  if (nums.length === 3) {
    nums = [nums[0], nums[0], nums[1], nums[1], nums[2], nums[2]];
  }

  var r = parseInt([nums[0], nums[1]].join(""), 16);
  var g = parseInt([nums[4], nums[5]].join(""), 16);
  var b = parseInt([nums[2], nums[3]].join(""), 16);

  // retur
  return callback(null, [r, g, b]);

};