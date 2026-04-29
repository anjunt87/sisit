import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request }) => {
  const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY
  );

  try {
    const body = await request.json();

    if (!body.nama_lengkap || !body.no_hp) {
      return new Response(
        JSON.stringify({ error: "Nama dan No HP wajib diisi" }),
        { status: 400 }
      );
    }

    const data = {
      jenjang: body.jenjang,
      nama_lengkap: body.nama_lengkap,
      tempat_lahir: body.tempat_lahir,
      tanggal_lahir: body.tanggal_lahir,
      jenis_kelamin: body.jenis_kelamin,
      nama_ayah: body.nama_ayah,
      nama_ibu: body.nama_ibu,
      no_hp: body.no_hp,
      email: body.email,
      alamat: body.alamat,
      asal_sekolah: body.asal_sekolah,
    };

    const { error } = await supabase
      .from("pendaftar")
      .insert([data]);

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Pendaftaran berhasil"
      }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
};