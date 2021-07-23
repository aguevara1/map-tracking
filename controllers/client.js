


   let clientId = 0;
//post 
exports.create=function create (request, response){
    clientId++;
   

response.send(clientId.toString());
}

