const express = require("express");
const accounts = require("./accounts");
const app = express();
app.use(express.json());

app.get("/api/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

app.post("/api/accounts", (req, res) => {
  console.log(req, body);
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.name,
    funds: 0,
  };
  accounts.push(newAccount);
  return res.json(newAccount);
});

app.delete("/api/accounts/:id", (req, res) => {
    const id =req.params.id;
  const account = accounts.find((accounts) => {
    return accounts.id == id;
  });

  if (!accounts) {
    return res.status(404).json({ message: "not found" });
  }

  return res.status(200).json(
    accounts.filter((accounts) => {
      return accounts.id !== id;
    })
  );
});

app.put("/api/accounts/:id"),
  (req, res) => {
    const id = req.params.id;
    const accounts = accounts.find((accounts) => {
      return accounts.id == id;
    });
    if (!accounts) return res.status(404).json({ massage: "not found" });

return res.status(200).json(accounts);

  };

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`im runing on port ${PORT}`);
});
