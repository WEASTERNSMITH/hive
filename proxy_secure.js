const Proxy = require("coin-hive-stratum");
const domain = "yourdomain.com"
const proxy = new Proxy({
  host: "power2b.na.mine.zpool.ca",
  port: 6242,
  key: require("fs").readFileSync("/etc/letsencrypt/live/" + domain + "/privkey.pem"),
  cert: require("fs").readFileSync("/etc/letsencrypt/live/" + domain + "/fullchain.pem"),
});

proxy.listen(443);
