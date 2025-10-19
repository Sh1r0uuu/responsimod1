// src/index.js
import express from "express";
import dotenv from "dotenv";
import shoeItemRoutes from "./routes/shoeItemRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/items", shoeItemRoutes);

// --- PASTIKAN ANDA PUNYA BAGIAN INI ---
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // [cite: 643-644]
});
// ------------------------------------