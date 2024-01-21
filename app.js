const express = require("express");
let accounts = require("./accounts");
const app = express();

app.use(express.json());
const accountRouter= require("./api/accounts/routes");
app.use("/api/accounts",accountRouter);






const PORT = 8002;
app.listen(PORT, () => {
  console.log(`im runing on port ${PORT}`);
});
