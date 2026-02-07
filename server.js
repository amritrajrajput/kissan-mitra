const express = require("express");
const app = express();
const PORT = 8000; // you can change the port

// serve static files (optional, e.g. index.html from "public")
app.use(express.static("public"));

// simple route
app.get("/", (req, res) => {
  res.send("Hello! This server is accessible from Desktop & Mobile 🎉");
});

// listen on all network interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});
