 const Account =require("../../models/Account");
 
 
 const createAcounts=(req, res) => {
    console.log(req, body);
    const newAccount = {
      id: accounts[accounts.length - 1].id + 1,
      username: req.body.name,
      funds: 0,
    };
    accounts.push(newAccount);
    return res.json(newAccount);
  }

  
  const deletAccountsById=(req, res) => {
    const id =req.params.id;
  accounts =accounts.filter((account)=>{
    return account.id !=id;
  })
  return res.status(200).json(accounts);

};

const getAllacounts= (req, res) => {
    return res.status(200).json(accounts);
  }

 const updateAccountById = (req, res) => {
    const id = req.params.id;
    const { username, funds } = req.body;
    const account = accounts.find((account) => {
      return account.id == id;
    });
    if (!account) return res.status(404).json({ massage: "not found" });
    account.username = username ? username : account.username;
    account.funds = funds ? funds : account.funds;
    return res.status(200).json(account)}



  module.exports={
    createAcounts,
    deletAccountsById,
    getAllacounts,
    updateAccountById 
  }