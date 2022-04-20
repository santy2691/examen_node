require("dotenv").config();
const port = process.env.SERVER_PORT || 6000;
const mongouser = process.env.MONGO_ROOT_USER || "devroot";
const mongopass = process.env.MONGO_ROOT_PASSWORD || "devroot";
const mongodb = process.env.MONGO_DB || "chat";
const mongoose = require('mongoose');

var express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  path = require("path"),
  bodyParser = require('body-parser');
  //io = require('socket.io')(server);

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
server.listen(port, (err, res) => {
  if (err) console.log(`ERROR: Connecting APP ${err}`);
  else console.log(`Server is running on port ${port}`);
});

mongoose.connect(
  `mongodb://devroot:devroot@mongo:27017/chat?authSource=admin`,
  {  useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERROR: connecting to Database.  ${err}`);
    else console.log(`Database Online: ${process.env.MONGO_DB}`);
  }
);

// Import routes of our app

var routes = require("./routes/app");
var handlerError = require("./routes/handler");

// view engine setup and other configurations
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Define routes using URL path

app.use("/", routes);
app.use(handlerError);

/*Socket functions */

module.exports = app;
