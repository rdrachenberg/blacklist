// requrie dependancies 
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const fs = require("fs");
// dependancies installed 

// set up express on PORT 3008
const app = express();
const PORT = process.env.PORT || 3008;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// call modules
apiRoutes(app);
htmlRoutes(app);

// set up listener and start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
