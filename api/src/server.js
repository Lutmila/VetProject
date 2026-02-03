const express = require("express");

const app = express();

// Permite que el servidor lea JSON en el body (para POST/PUT)
app.use(express.json());

// Ruta de prueba
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "API running" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
