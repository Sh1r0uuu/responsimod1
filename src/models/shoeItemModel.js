import { supabase } from "../config/supabaseClient.js";

export const ShoeItemModel = {
  // READ: Mendapatkan semua item, dengan filter status opsional
  async getAll(status) {
    let query = supabase.from("shoe_items").select("*");

    // Jika ada query parameter 'status', tambahkan filter .eq()
    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query.order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // READ: Mendapatkan satu item berdasarkan ID
  async getById(id) {
    const { data, error } = await supabase
      .from("shoe_items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  // CREATE: Membuat item baru
  async create(item) {
    const { data, error } = await supabase
      .from("shoe_items")
      .insert([item])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // UPDATE: Memperbarui item berdasarkan ID
  async update(id, item) {
    
    // LOGIKA TAMBAHAN: Jika status diubah menjadi "Selesai", 
    // tambahkan tanggal hari ini ke 'completed_at'
    if (item.status === 'Selesai') {
      item.completed_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from("shoe_items")
      .update(item)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // DELETE: Menghapus item berdasarkan ID
  async remove(id) {
    const { error } = await supabase
      .from("shoe_items")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return { message: "Item deleted successfully" };
  },
};