const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("User management server running.");
});

const users = [
	{ id: 1, name: "rakeeb hasan", email: "rakeebhasan@gmail.com" },
	{ id: 2, name: "abul karim", email: "abulkarim@gmail.com" },
	{ id: 3, name: "khairul basar", email: "khairulbasar@gmail.com" },
];

app.get("/users", (req, res) => {
	res.send(users);
});

app.post("/users", (req, res) => {
	const newUser = req.body;
	newUser.id = users.length + 1;
	users.push(newUser);
	res.send(newUser);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
