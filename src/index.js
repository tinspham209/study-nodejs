const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const port = 8000;

const route = require("./routes");
const db = require("./config/db");

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
	"hbs",
	handlebars({
		extname: ".hbs",
	})
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
