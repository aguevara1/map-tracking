let express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("./public"));

let clientRoutes=require("./routes/client.js");


app.use(clientRoutes);



let port = process.env.PORT || 8080;
 /*if (port == null || port == "") {
  port = 3000;
}  */
app.listen(port);