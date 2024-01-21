const express = require("express");
const { deletAccountsById, getAllacounts, createAcounts, updateAccountById } = require("./controllers");
const router = express.router;

router.get("/",getAllacounts );
router.post("/", createAcounts);
router.delete("/", deletAccountsById);
router.put("/",updateAccountById );
  
 

moudel.exports = route;
