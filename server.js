const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if(username === "admin" && password === "1234"){
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Wrong login" });
  }
});

// servers
app.get("/api/servers", (req, res) => {
  res.json([
    { name: "Minecraft Server", status: "Running" },
    { name: "CSGO Server", status: "Stopped" }
  ]);
});

app.listen(3000, () => {
  console.log("Running...");
});
