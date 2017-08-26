var express = require("express");
var app = express();

app.use(express.static(__dirname+ "/assets"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Port running on: ${PORT}`);
});