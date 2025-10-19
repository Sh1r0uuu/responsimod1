// src/controllers/shoeItemController.js
import { ShoeItemModel } from "../models/shoeItemModel.js";

export const ShoeItemController = {
  // Fungsi GET ALL yang sudah Anda buat
  async getAll(req, res) {
    try {
      const { status } = req.query;
      const items = await ShoeItemModel.getAll(status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // --- PASTIKAN FUNGSI-FUNGSI INI ADA ---

  async getById(req, res) {
    try {
      const item = await ShoeItemModel.getById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const item = await ShoeItemModel.create(req.body); // req.body
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const item = await ShoeItemModel.update(req.params.id, req.body); // req.body
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const result = await ShoeItemModel.remove(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};