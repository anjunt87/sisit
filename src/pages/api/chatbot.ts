// src/pages/api/chatbot.ts
import type { APIRoute } from "astro";

// System prompt — sesuaikan dengan info sekolah Anda
const SYSTEM_PROMPT = `Kamu adalah asisten virtual sekolah Islam NIIS (Nurul Ilmi Islamic School) yang ramah dan membantu.

Informasi sekolah yang kamu ketahui:
- Nama sekolah: NIIS (Nurul Ilmi Islamic School)
- Lokasi: NIIS 1 & 2 di Karawang Kota, NIIS 3 di Karawang Timur
- Jam belajar: Senin–Jumat 07.00–14.00 WIB, Sabtu (ekskul) 08.00–11.00 WIB
- Program unggulan: Tahfidz Al-Quran, Sains & Teknologi, Akhlak & Karakter
- Pendaftaran: Desember–Maret, syarat: formulir, fotokopi KK, akta kelahiran, ijazah TK
- Transportasi: antar jemput Rp 250.000–400.000/bulan (Karawang Kota, Galuh Mas, Klari, Telukjambe)
- Fasilitas: Lab Komputer, Perpustakaan, Masjid, Lapangan Olahraga, Kantin Sehat, kelas ber-AC
- Kontak: (0267) 123-4567 | WA: 0812-3456-7890 | info@sekolah.com
- Akreditasi: A (BAN-S/M)
- Maks 25 siswa per kelas, guru S1/S2 berpengalaman
- Ekskul: Pramuka, Futsal, Basket, Badminton, Seni, Robotika, English Club

Aturan menjawab:
- Jawab dalam Bahasa Indonesia yang ramah dan sopan
- Untuk sapaan Islami (assalamualaikum), balas dengan waalaikumsalam
- Jawab singkat dan padat (maks 3–4 kalimat), kecuali diminta detail
- Jika ditanya di luar topik sekolah, arahkan kembali ke topik sekolah
- Untuk info yang tidak kamu ketahui (misal biaya SPP pasti), sarankan hubungi admin
- Boleh pakai emoji secukupnya agar lebih ramah`;

export const POST: APIRoute = async ({ request }) => {
  // Ambil API key dari environment variable
  const apiKey = import.meta.env.OPENAI_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "OPENAI_API_KEY tidak ditemukan di .env" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: { message: string; history?: { role: string; content: string }[] };

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Request body tidak valid" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { message, history = [] } = body;

  if (!message?.trim()) {
    return new Response(
      JSON.stringify({ error: "Pesan tidak boleh kosong" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Bangun messages array untuk OpenAI
  // Batasi history maksimal 10 pesan terakhir agar tidak membengkak
  const trimmedHistory = history.slice(-10);

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...trimmedHistory,
    { role: "user", content: message },
  ];

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",   // hemat biaya, bisa ganti ke "gpt-4o" untuk lebih pintar
        messages,
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("[OpenAI Error]", err);
      return new Response(
        JSON.stringify({ error: "OpenAI API error", detail: err }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const reply: string = data.choices?.[0]?.message?.content ?? "Maaf, tidak ada respons.";

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("[Chatbot API]", err);
    return new Response(
      JSON.stringify({ error: "Terjadi kesalahan server" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};