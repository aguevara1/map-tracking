
let express = require("express");
const router=express.Router();
const {create} = require("../controllers/client");

// tasks
router.post('/clients', create);  

/*
router.post('/clients', (request, response)=>{
    clientId++;
    console.log(clientId);

response.send(clientId.toString());


})   */
   


module.exports=router;