const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API running" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
