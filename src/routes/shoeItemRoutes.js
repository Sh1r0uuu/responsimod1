// src/routes/shoeItemRoutes.js
import express from "express";
import { ShoeItemController } from "../controllers/shoeItemController.js"; // [cite: 608]

const router = express.Router(); // [cite: 609]

router.post("/", ShoeItemController.create);
router.get("/", ShoeItemController.getAll); // Ini akan menangani /items dan /items?status=...
router.get("/:id", ShoeItemController.getById);
router.put("/:id", ShoeItemController.update);
router.delete("/:id", ShoeItemController.remove);

export default router; // [cite: 612]