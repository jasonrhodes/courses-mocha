var fs = require("fs");

fs.readFile(process.cwd() + "/times.txt", function (err, buffer) {

  var lines = buffer.toString().split("\n").slice(0,-1);
  var m = 0;
  var s = 0;

  lines.forEach(function (line) {

    var time = line.split("|").pop().split(":");
    m += Number(time[0]);
    s += Number(time[1]);

    console.log(time);

  });

  console.log(m, s);

  var minutes = m + Math.floor(s / 60);
  var seconds = s % 60;

  var average = (((m * 60) + s) / lines.length);
  average = Math.floor(average / 60) + ":" + average % 60;

  console.log("Total course time: %s:%s", minutes, seconds);
  console.log("Average length: %s", average);

});
