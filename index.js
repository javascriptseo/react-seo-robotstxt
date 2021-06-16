const fs = require("fs");
const policies = require("../../robots-txt.config");

exports.generateRobotText = function () {
  var allow = policies.policy.allow;
  var disAllow = policies.policy.disallow;

  var robotstxt = fs.createWriteStream("robots.txt", {
    flags: "a", // 'a' means appending (old data will be preserved)
  });

  robotstxt.write("User-agent:" + policies.policy.userAgent + "\n");

  disAllow.forEach((item, index) => {
    robotstxt.write("Disallow:" + item + "\n");
  });

  allow.forEach((item, index) => {
    robotstxt.write("Allow:" + item + "\n");
  });

  robotstxt.end();
};
