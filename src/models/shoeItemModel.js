// src/models/shoeItemModel.js
import { supabase } from "../config/supabaseClient.js";

export const ShoeItemModel = {
  async getAll(status) {
    let query = supabase.from("shoe_items").select("*");

    // Jika ada query parameter 'status', tambahkan filter .eq()
    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("shoe_items")
      .select("*")
      .eq("id", id) // [cite: 361]
      .single(); // [cite: 362]
    if (error) throw error;
    return data;
  },

  async create(item) {
    const { data, error } = await supabase
      .from("shoe_items")
      .insert([item]) // [cite: 452]
      .select()
      .single(); // [cite: 454]
    if (error) throw error;
    return data;
  },

  async update(id, item) {
    const { data, error } = await supabase
      .from("shoe_items")
      .update(item) // [cite: 461]
      .eq("id", id) // [cite: 462]
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase
      .from("shoe_items")
      .delete() // [cite: 471]
      .eq("id", id); // [cite: 471]
    if (error) throw error;
    return { message: "Item deleted successfully" };
  },
};