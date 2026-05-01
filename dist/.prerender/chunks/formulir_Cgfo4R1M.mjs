import { c as createComponent } from './astro-component_7ETOIUHv.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate } from './prerender_CQg9tqRL.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C1y3sP9t.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useCallback, useRef } from 'react';

const JENJANG_META = {
  pg: { label: "PG", nama: "Play Group", usia: "2–3 tahun", faIcon: "fa-seedling", color: "#f8bb54", accent: "#e6a82e", light: "#fef9e7" },
  tk: { label: "TK", nama: "Taman Kanak-kanak", usia: "4–6 tahun", faIcon: "fa-leaf", color: "#f59e0b", accent: "#d97706", light: "#fef3c7" },
  sd: { label: "SD", nama: "Sekolah Dasar Islam", usia: "6–12 tahun", faIcon: "fa-book-open", color: "#10b981", accent: "#059669", light: "#d1fae5" },
  smp: { label: "SMP", nama: "SMP Islam", usia: "12–15 tahun", faIcon: "fa-flask", color: "#3b82f6", accent: "#2563eb", light: "#dbeafe" },
  sma: { label: "SMA", nama: "SMA Islam", usia: "15–18 tahun", faIcon: "fa-graduation-cap", color: "#8b5cf6", accent: "#7c3aed", light: "#ede9fe" }
};
const JENJANG_VALID = ["pg", "tk", "sd", "smp", "sma"];
const INITIAL_FORM = {
  nama_lengkap: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  asal_sekolah: "",
  nama_ayah: "",
  nama_ibu: "",
  no_hp: "",
  email: "",
  alamat: ""
};
const STEPS = [
  { no: 1, label: "Data Siswa", fa: "fa-user" },
  { no: 2, label: "Orang Tua", fa: "fa-users" },
  { no: 3, label: "Dokumen", fa: "fa-paperclip" },
  { no: 4, label: "Konfirmasi", fa: "fa-check-circle" }
];
if (typeof document !== "undefined" && !document.getElementById("fa-cdn")) {
  const _l = document.createElement("link");
  _l.id = "fa-cdn";
  _l.rel = "stylesheet";
  _l.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
  document.head.appendChild(_l);
}
const styles = {
  backLink: {
    display: "block",
    color: "#888",
    fontSize: "0.85rem",
    textDecoration: "none",
    marginTop: 4
  }
};
function FormPPDB() {
  const [jenjang, setJenjang] = useState("sd");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const j = params.get("jenjang");
    if (JENJANG_VALID.includes(j)) {
      setJenjang(j);
    }
  }, []);
  const meta = JENJANG_META[jenjang];
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [pesanServer, setPesan] = useState("");
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState({ kk: null, akta: null, foto: null });
  const [previews, setPreviews] = useState({ kk: null, akta: null, foto: null });
  const [previewModal, setModal] = useState(null);
  const [dragOver, setDragOver] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };
  const processFile = useCallback((name, file) => {
    if (!file) return;
    setFiles((p) => ({ ...p, [name]: file }));
    setErrors((p) => ({ ...p, [name]: "" }));
    const reader = new FileReader();
    reader.onload = (e) => setPreviews((p) => ({ ...p, [name]: { url: e.target.result, type: file.type, name: file.name, size: file.size } }));
    reader.readAsDataURL(file);
  }, []);
  const handleFile = (e) => processFile(e.target.name, e.target.files[0]);
  const handleDrop = (name, e) => {
    e.preventDefault();
    setDragOver(null);
    processFile(name, e.dataTransfer.files[0]);
  };
  const removeFile = (name) => {
    setFiles((p) => ({ ...p, [name]: null }));
    setPreviews((p) => ({ ...p, [name]: null }));
  };
  const validateStep1 = () => {
    const err = {};
    if (!form.nama_lengkap.trim()) err.nama_lengkap = "Nama lengkap wajib diisi";
    if (!form.tanggal_lahir) err.tanggal_lahir = "Tanggal lahir wajib diisi";
    if (!form.jenis_kelamin) err.jenis_kelamin = "Pilih jenis kelamin";
    return err;
  };
  const validateStep2 = () => {
    const err = {};
    if (!form.no_hp.trim()) err.no_hp = "Nomor HP wajib diisi";
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.no_hp)) err.no_hp = "Format nomor HP tidak valid";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Format email tidak valid";
    return err;
  };
  const validateStep3 = () => {
    const err = {};
    if (!files.kk) err.kk = "Kartu Keluarga wajib diunggah";
    if (!files.akta) err.akta = "Akta Kelahiran wajib diunggah";
    return err;
  };
  const goNext = (validate, nextStep) => {
    const err = validate();
    if (Object.keys(err).length) return setErrors(err);
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = (to) => {
    setStep(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/ppdb", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, jenjang }) });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setPesan(data.message || "Pendaftaran berhasil.");
      } else {
        setStatus("error");
        setPesan(data.error || "Terjadi kesalahan.");
      }
    } catch {
      setStatus("error");
      setPesan("Gagal terhubung ke server.");
    }
  };
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { style: S.successPage, children: [
      mounted && /* @__PURE__ */ jsx("style", { children: GLOBAL_CSS(meta) }),
      /* @__PURE__ */ jsxs("div", { style: S.successCard, children: [
        /* @__PURE__ */ jsx("div", { style: { ...S.successIconWrap, background: meta.color }, children: /* @__PURE__ */ jsx("i", { className: "fas fa-check", style: { color: "#fff", fontSize: 36 } }) }),
        /* @__PURE__ */ jsx("h2", { style: S.successTitle, children: "Pendaftaran Berhasil!" }),
        /* @__PURE__ */ jsx("p", { style: S.successSub, children: pesanServer }),
        /* @__PURE__ */ jsxs("div", { style: S.successInfo, children: [
          /* @__PURE__ */ jsxs("div", { style: S.successRow, children: [
            /* @__PURE__ */ jsx("span", { children: "Nama" }),
            /* @__PURE__ */ jsx("strong", { children: form.nama_lengkap })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: S.successRow, children: [
            /* @__PURE__ */ jsx("span", { children: "Jenjang" }),
            /* @__PURE__ */ jsx("strong", { children: meta.nama })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: S.successRow, children: [
            /* @__PURE__ */ jsx("span", { children: "Kontak" }),
            /* @__PURE__ */ jsx("strong", { children: form.no_hp })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `https://wa.me/6283815404175?text=Assalamualaikum%2C%20saya%20sudah%20mendaftar%20atas%20nama%20${encodeURIComponent(form.nama_lengkap)}%20untuk%20jenjang%20${encodeURIComponent(meta.nama)}`,
            target: "_blank",
            rel: "noreferrer",
            style: { ...S.btnPrimary, background: "#25d366", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 24 },
            children: [
              /* @__PURE__ */ jsx("i", { className: "fab fa-whatsapp", style: { fontSize: 18 } }),
              " Konfirmasi via WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "/ppdb/ppdb-daftar", style: styles.backLink, children: "← Kembali ke Halaman PPDB" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { style: S.page, children: [
    mounted && /* @__PURE__ */ jsx("style", { children: GLOBAL_CSS(meta) }),
    previewModal && /* @__PURE__ */ jsx("div", { style: S.modalOverlay, onClick: () => setModal(null), children: /* @__PURE__ */ jsxs("div", { style: S.modalBox, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { style: S.modalHeader, children: [
        /* @__PURE__ */ jsx("span", { style: S.modalTitle, children: previewModal.name }),
        /* @__PURE__ */ jsx("button", { style: S.modalClose, onClick: () => setModal(null), children: /* @__PURE__ */ jsx("i", { className: "fas fa-times" }) })
      ] }),
      previewModal.type?.startsWith("image/") ? /* @__PURE__ */ jsx("img", { src: previewModal.url, alt: "preview", style: S.modalImg }) : previewModal.type === "application/pdf" ? /* @__PURE__ */ jsx("iframe", { src: previewModal.url, style: S.modalFrame, title: "PDF Preview" }) : /* @__PURE__ */ jsxs("div", { style: S.modalNoPreview, children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-file", style: { fontSize: 40, display: "block", marginBottom: 12 } }),
        "Preview tidak tersedia"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { style: { ...S.hero, background: meta.color }, children: [
      /* @__PURE__ */ jsx("div", { style: S.heroInner, children: /* @__PURE__ */ jsxs("div", { style: S.heroBody, children: [
        /* @__PURE__ */ jsx("div", { style: { ...S.heroIconCircle }, children: /* @__PURE__ */ jsx("i", { className: `fas ${meta.faIcon}`, style: { fontSize: 36, color: meta.color } }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: S.heroBadge, children: "PPDB 2026" }),
          /* @__PURE__ */ jsx("h1", { style: S.heroTitle, children: "Formulir Pendaftaran" }),
          /* @__PURE__ */ jsxs("p", { style: S.heroSub, children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-tag", style: { marginRight: 5 } }),
            meta.nama,
            /* @__PURE__ */ jsx("span", { style: S.heroDivider }),
            /* @__PURE__ */ jsx("i", { className: "fas fa-child", style: { marginRight: 5 } }),
            "Usia ",
            meta.usia
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { style: { lineHeight: 0 }, children: /* @__PURE__ */ jsx(
        "svg",
        {
          viewBox: "0 0 1440 56",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "none",
          style: { width: "100%", height: 56, display: "block" },
          children: /* @__PURE__ */ jsx("path", { d: "M0,28 C480,70 960,0 1440,28 L1440,56 L0,56 Z", fill: "#f5f6fa" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { style: S.stepBar, children: STEPS.map((s, i) => /* @__PURE__ */ jsxs("div", { style: S.stepItem, children: [
      /* @__PURE__ */ jsx("div", { style: {
        ...S.stepDot,
        background: step >= s.no ? meta.color : "#e2e8f0",
        color: step >= s.no ? "#fff" : "#94a3b8",
        boxShadow: step === s.no ? `0 0 0 5px ${meta.color}33` : "none"
      }, children: step > s.no ? /* @__PURE__ */ jsx("i", { className: "fas fa-check", style: { fontSize: 13 } }) : /* @__PURE__ */ jsx("i", { className: `fas ${s.fa}`, style: { fontSize: 13 } }) }),
      /* @__PURE__ */ jsx("span", { style: { ...S.stepLabel, color: step >= s.no ? meta.accent : "#94a3b8", fontWeight: step === s.no ? 700 : 500 }, children: s.label }),
      i < STEPS.length - 1 && /* @__PURE__ */ jsx("div", { style: { ...S.stepLine, background: step > s.no ? meta.color : "#e2e8f0" } })
    ] }, s.no)) }),
    /* @__PURE__ */ jsxs("div", { style: S.container, children: [
      /* @__PURE__ */ jsxs("div", { style: S.card, children: [
        step === 1 && /* @__PURE__ */ jsxs("div", { className: "fade-in", children: [
          /* @__PURE__ */ jsx(SectionTitle, { fa: "fa-user-circle", title: "Data Diri Siswa", desc: "Isi informasi lengkap calon siswa", accent: meta.accent }),
          /* @__PURE__ */ jsx(Field, { label: "Nama Lengkap", error: errors.nama_lengkap, required: true, children: /* @__PURE__ */ jsx(
            FaInput,
            {
              name: "nama_lengkap",
              value: form.nama_lengkap,
              onChange: handleChange,
              placeholder: "Contoh: Muhammad Rizki Al-Farisi",
              accent: meta.accent,
              error: errors.nama_lengkap,
              fa: "fa-id-card"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { style: S.grid2, children: [
            /* @__PURE__ */ jsx(Field, { label: "Tempat Lahir", children: /* @__PURE__ */ jsx(
              FaInput,
              {
                name: "tempat_lahir",
                value: form.tempat_lahir,
                onChange: handleChange,
                placeholder: "Jakarta",
                accent: meta.accent,
                fa: "fa-map-marker-alt"
              }
            ) }),
            /* @__PURE__ */ jsx(Field, { label: "Tanggal Lahir", error: errors.tanggal_lahir, required: true, children: /* @__PURE__ */ jsx(
              FaInput,
              {
                type: "date",
                name: "tanggal_lahir",
                value: form.tanggal_lahir,
                onChange: handleChange,
                accent: meta.accent,
                error: errors.tanggal_lahir,
                fa: "fa-calendar-alt"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Field, { label: "Jenis Kelamin", error: errors.jenis_kelamin, required: true, children: [
            /* @__PURE__ */ jsx("div", { style: S.radioGroup, children: [{ v: "L", l: "Laki-laki", fa: "fa-mars" }, { v: "P", l: "Perempuan", fa: "fa-venus" }].map(({ v, l, fa }) => /* @__PURE__ */ jsxs("label", { style: { ...S.radioCard, borderColor: form.jenis_kelamin === v ? meta.color : "#e2e8f0", background: form.jenis_kelamin === v ? meta.light : "#fff" }, children: [
              /* @__PURE__ */ jsx("input", { type: "radio", name: "jenis_kelamin", value: v, checked: form.jenis_kelamin === v, onChange: handleChange, style: { display: "none" } }),
              /* @__PURE__ */ jsx("i", { className: `fas ${fa}`, style: { color: form.jenis_kelamin === v ? meta.accent : "#94a3b8", fontSize: 20, marginBottom: 4 } }),
              /* @__PURE__ */ jsx("span", { style: { color: form.jenis_kelamin === v ? meta.accent : "#64748b", fontWeight: 700, fontSize: 13 }, children: l })
            ] }, v)) }),
            errors.jenis_kelamin && /* @__PURE__ */ jsx(ErrMsg, { msg: errors.jenis_kelamin })
          ] }),
          /* @__PURE__ */ jsx(Field, { label: "Asal Sekolah / TK Sebelumnya", children: /* @__PURE__ */ jsx(
            FaInput,
            {
              name: "asal_sekolah",
              value: form.asal_sekolah,
              onChange: handleChange,
              placeholder: "(Opsional)",
              accent: meta.accent,
              fa: "fa-school"
            }
          ) }),
          /* @__PURE__ */ jsxs("button", { className: "btn-primary", style: { ...S.btnPrimary, background: meta.color, marginTop: 8 }, onClick: () => goNext(validateStep1, 2), children: [
            "Lanjut ke Data Orang Tua ",
            /* @__PURE__ */ jsx("i", { className: "fas fa-arrow-right", style: { marginLeft: 8 } })
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxs("div", { className: "fade-in", children: [
          /* @__PURE__ */ jsx(SectionTitle, { fa: "fa-users", title: "Data Orang Tua & Kontak", desc: "Informasi wali yang dapat dihubungi", accent: meta.accent }),
          /* @__PURE__ */ jsxs("div", { style: S.grid2, children: [
            /* @__PURE__ */ jsx(Field, { label: "Nama Ayah", children: /* @__PURE__ */ jsx(FaInput, { name: "nama_ayah", value: form.nama_ayah, onChange: handleChange, placeholder: "Nama lengkap ayah", accent: meta.accent, fa: "fa-male" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Nama Ibu", children: /* @__PURE__ */ jsx(FaInput, { name: "nama_ibu", value: form.nama_ibu, onChange: handleChange, placeholder: "Nama lengkap ibu", accent: meta.accent, fa: "fa-female" }) })
          ] }),
          /* @__PURE__ */ jsx(Field, { label: "Nomor HP / WhatsApp", error: errors.no_hp, required: true, children: /* @__PURE__ */ jsx(FaInput, { name: "no_hp", value: form.no_hp, onChange: handleChange, placeholder: "08xx-xxxx-xxxx", accent: meta.accent, error: errors.no_hp, fa: "fa-phone" }) }),
          /* @__PURE__ */ jsx(Field, { label: "Alamat Email", error: errors.email, children: /* @__PURE__ */ jsx(FaInput, { name: "email", value: form.email, onChange: handleChange, placeholder: "email@contoh.com (opsional)", accent: meta.accent, error: errors.email, fa: "fa-envelope" }) }),
          /* @__PURE__ */ jsx(Field, { label: "Alamat Lengkap", children: /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-map-marked-alt", style: { position: "absolute", left: 14, top: 14, color: "#94a3b8", fontSize: 14 } }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "alamat",
                value: form.alamat,
                onChange: handleChange,
                rows: 3,
                placeholder: "Jalan, RT/RW, Kelurahan, Kecamatan, Kota",
                style: { ...S.inputBase, resize: "vertical", paddingLeft: 42 }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { style: S.btnRow, children: [
            /* @__PURE__ */ jsx(BtnBack, { onClick: () => back(1) }),
            /* @__PURE__ */ jsxs("button", { className: "btn-primary", style: { ...S.btnPrimary, background: meta.color }, onClick: () => goNext(validateStep2, 3), children: [
              "Lanjut ke Dokumen ",
              /* @__PURE__ */ jsx("i", { className: "fas fa-arrow-right", style: { marginLeft: 8 } })
            ] })
          ] })
        ] }),
        step === 3 && /* @__PURE__ */ jsxs("div", { className: "fade-in", children: [
          /* @__PURE__ */ jsx(SectionTitle, { fa: "fa-folder-open", title: "Upload Dokumen", desc: "Format: JPG, PNG, PDF · Maks. 5MB per file", accent: meta.accent }),
          [
            { name: "kk", label: "Kartu Keluarga (KK)", required: true },
            { name: "akta", label: "Akta Kelahiran", required: true },
            { name: "foto", label: "Pas Foto", required: false }
          ].map((d) => /* @__PURE__ */ jsx(
            DropZone,
            {
              label: d.label,
              name: d.name,
              required: d.required,
              file: files[d.name],
              preview: previews[d.name],
              error: errors[d.name],
              onFile: processFile,
              onDrop: handleDrop,
              onRemove: removeFile,
              onPreview: setModal,
              dragOver,
              setDragOver,
              accent: meta.accent,
              color: meta.color,
              light: meta.light,
              onChange: handleFile
            },
            d.name
          )),
          /* @__PURE__ */ jsxs("div", { style: S.btnRow, children: [
            /* @__PURE__ */ jsx(BtnBack, { onClick: () => back(2) }),
            /* @__PURE__ */ jsxs("button", { className: "btn-primary", style: { ...S.btnPrimary, background: meta.color }, onClick: () => goNext(validateStep3, 4), children: [
              "Lanjut ke Konfirmasi ",
              /* @__PURE__ */ jsx("i", { className: "fas fa-arrow-right", style: { marginLeft: 8 } })
            ] })
          ] })
        ] }),
        step === 4 && /* @__PURE__ */ jsxs("div", { className: "fade-in", children: [
          /* @__PURE__ */ jsx(SectionTitle, { fa: "fa-clipboard-check", title: "Konfirmasi Pendaftaran", desc: "Periksa kembali data sebelum mengirim", accent: meta.accent }),
          /* @__PURE__ */ jsxs("div", { style: S.summaryCard, children: [
            /* @__PURE__ */ jsx(SummaryGroup, { title: "Data Siswa", fa: "fa-user", accent: meta.accent, color: meta.color, light: meta.light, items: [
              { label: "Nama Lengkap", val: form.nama_lengkap },
              { label: "Jenis Kelamin", val: form.jenis_kelamin === "L" ? "Laki-laki" : form.jenis_kelamin === "P" ? "Perempuan" : "-" },
              { label: "Tanggal Lahir", val: form.tanggal_lahir ? new Date(form.tanggal_lahir).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "-" },
              { label: "Tempat Lahir", val: form.tempat_lahir }
            ] }),
            /* @__PURE__ */ jsx(SummaryGroup, { title: "Data Orang Tua", fa: "fa-users", accent: meta.accent, color: meta.color, light: meta.light, items: [
              { label: "Nama Ayah", val: form.nama_ayah },
              { label: "Nama Ibu", val: form.nama_ibu },
              { label: "No HP", val: form.no_hp },
              { label: "Email", val: form.email }
            ] }),
            /* @__PURE__ */ jsx(SummaryGroup, { title: "Dokumen", fa: "fa-paperclip", accent: meta.accent, color: meta.color, light: meta.light, items: [
              { label: "KK", val: files.kk ? files.kk.name : null, ok: !!files.kk },
              { label: "Akta", val: files.akta ? files.akta.name : null, ok: !!files.akta },
              { label: "Pas Foto", val: files.foto ? files.foto.name : "Tidak diunggah", ok: !!files.foto, optional: true }
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { ...S.jenjangBadge, background: meta.light, borderColor: meta.color, color: meta.accent }, children: [
            /* @__PURE__ */ jsx("i", { className: `fas ${meta.faIcon}`, style: { marginRight: 8 } }),
            "Mendaftar untuk jenjang ",
            /* @__PURE__ */ jsx("strong", { style: { marginLeft: 4 }, children: meta.nama })
          ] }),
          status === "error" && /* @__PURE__ */ jsxs("div", { style: S.errorBox, children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-exclamation-triangle", style: { marginRight: 8 } }),
            pesanServer
          ] }),
          /* @__PURE__ */ jsxs("div", { style: S.btnRow, children: [
            /* @__PURE__ */ jsx(BtnBack, { onClick: () => back(3) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn-primary",
                style: { ...S.btnPrimary, background: meta.color, opacity: status === "loading" ? 0.75 : 1 },
                onClick: handleSubmit,
                disabled: status === "loading",
                children: status === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-spinner fa-spin", style: { marginRight: 8 } }),
                  "Mengirim..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-paper-plane", style: { marginRight: 8 } }),
                  "Kirim Pendaftaran"
                ] })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: S.footer, children: "© 2026 PPDB Sekolah Islam Terpadu · Pertanyaan? Hubungi kami" })
    ] })
  ] });
}
function DropZone({ label, name, required, file, preview, error, onFile, onDrop, onRemove, onPreview, dragOver, setDragOver, accent, color, light, onChange }) {
  const inputRef = useRef();
  const isDragging = dragOver === name;
  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 20 }, children: [
    /* @__PURE__ */ jsxs("div", { style: S.fieldLabel, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { style: { color: "#ef4444", marginLeft: 3 }, children: "*" })
    ] }),
    !file ? /* @__PURE__ */ jsxs(
      "div",
      {
        style: { ...S.dropZone, borderColor: isDragging ? color : error ? "#ef4444" : "#e2e8f0", background: isDragging ? light : "#fafafa" },
        onDragOver: (e) => {
          e.preventDefault();
          setDragOver(name);
        },
        onDragLeave: () => setDragOver(null),
        onDrop: (e) => onDrop(name, e),
        onClick: () => inputRef.current?.click(),
        children: [
          /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", name, accept: "image/*,application/pdf", onChange, style: { display: "none" } }),
          /* @__PURE__ */ jsx(
            "i",
            {
              className: `fas ${isDragging ? "fa-folder-open" : "fa-cloud-upload-alt"}`,
              style: { fontSize: 34, color: isDragging ? color : "#94a3b8", marginBottom: 10 }
            }
          ),
          /* @__PURE__ */ jsx("div", { style: S.dropText, children: isDragging ? "Lepaskan file di sini" : "Klik atau seret file ke sini" }),
          /* @__PURE__ */ jsx("div", { style: S.dropHint, children: "JPG, PNG, atau PDF · Maks. 5MB" })
        ]
      }
    ) : /* @__PURE__ */ jsxs("div", { style: { ...S.fileCard, borderColor: color, background: light }, children: [
      preview?.type?.startsWith("image/") && /* @__PURE__ */ jsx("img", { src: preview.url, alt: "", style: S.fileThumb, onClick: () => onPreview(preview) }),
      preview?.type === "application/pdf" && /* @__PURE__ */ jsx("div", { style: { ...S.fileThumb, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: 10, cursor: "pointer" }, onClick: () => onPreview(preview), children: /* @__PURE__ */ jsx("i", { className: "fas fa-file-pdf", style: { fontSize: 30, color: "#ef4444" } }) }),
      !preview?.type?.startsWith("image/") && preview?.type !== "application/pdf" && /* @__PURE__ */ jsx("div", { style: { ...S.fileThumb, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: 10 }, children: /* @__PURE__ */ jsx("i", { className: "fas fa-file", style: { fontSize: 28, color: accent } }) }),
      /* @__PURE__ */ jsxs("div", { style: S.fileInfo, children: [
        /* @__PURE__ */ jsxs("div", { style: { ...S.fileName, color: accent }, children: [
          /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle", style: { marginRight: 6 } }),
          file.name
        ] }),
        /* @__PURE__ */ jsxs("div", { style: S.fileSize, children: [
          (file.size / 1024).toFixed(1),
          " KB"
        ] }),
        /* @__PURE__ */ jsxs("div", { style: S.fileActions, children: [
          /* @__PURE__ */ jsxs("button", { style: { ...S.fileBtn, color: accent, borderColor: accent }, onClick: () => onPreview(preview), children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-eye", style: { marginRight: 4 } }),
            "Preview"
          ] }),
          /* @__PURE__ */ jsxs("button", { style: { ...S.fileBtn, color: "#ef4444", borderColor: "#ef4444" }, onClick: () => onRemove(name), children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-trash-alt", style: { marginRight: 4 } }),
            "Hapus"
          ] })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx(ErrMsg, { msg: error })
  ] });
}
function SectionTitle({ fa, title, desc, accent }) {
  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 28 }, children: [
    /* @__PURE__ */ jsxs("h3", { style: { margin: "0 0 4px", fontSize: 18, fontWeight: 800, color: "#1e293b", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ jsx("i", { className: `fas ${fa}`, style: { color: accent, fontSize: 18 } }),
      title
    ] }),
    /* @__PURE__ */ jsx("p", { style: { margin: 0, fontSize: 13, color: "#94a3b8" }, children: desc })
  ] });
}
function Field({ label, children, error, required }) {
  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 18 }, children: [
    /* @__PURE__ */ jsxs("div", { style: S.fieldLabel, children: [
      label,
      required && /* @__PURE__ */ jsx("span", { style: { color: "#ef4444", marginLeft: 3 }, children: "*" })
    ] }),
    children,
    error && /* @__PURE__ */ jsx(ErrMsg, { msg: error })
  ] });
}
function ErrMsg({ msg }) {
  return /* @__PURE__ */ jsxs("div", { style: S.errMsg, children: [
    /* @__PURE__ */ jsx("i", { className: "fas fa-exclamation-circle", style: { marginRight: 4 } }),
    msg
  ] });
}
function FaInput({ name, value, onChange, placeholder, type = "text", accent, error, fa }) {
  const [focused, setFocused] = useState(false);
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ jsx("i", { className: `fas ${fa}`, style: { position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: focused ? accent : "#94a3b8", fontSize: 14, pointerEvents: "none", transition: "color 0.2s" } }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        name,
        value,
        onChange,
        placeholder,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        style: { ...S.inputBase, paddingLeft: 42, ...focused ? { borderColor: accent, boxShadow: `0 0 0 3px ${accent}22` } : {}, ...error ? { borderColor: "#ef4444" } : {} }
      }
    )
  ] });
}
function SummaryGroup({ title, fa, items, accent, color, light }) {
  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 16 }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8, padding: "7px 12px", background: light, borderRadius: 10 }, children: [
      /* @__PURE__ */ jsx("i", { className: `fas ${fa}`, style: { color: accent, fontSize: 12 } }),
      /* @__PURE__ */ jsx("span", { style: { fontWeight: 800, fontSize: 11, color: accent, letterSpacing: 0.5, textTransform: "uppercase" }, children: title })
    ] }),
    items.map(({ label, val, ok, optional }) => /* @__PURE__ */ jsxs("div", { style: S.summaryRow, children: [
      /* @__PURE__ */ jsx("span", { style: S.summaryLabel, children: label }),
      /* @__PURE__ */ jsxs("span", { style: { ...S.summaryVal, color: ok === false && !optional ? "#ef4444" : ok === false && optional ? "#94a3b8" : "#1e293b" }, children: [
        ok === true && /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle", style: { color, marginRight: 5 } }),
        ok === false && !optional && /* @__PURE__ */ jsx("i", { className: "fas fa-times-circle", style: { color: "#ef4444", marginRight: 5 } }),
        val || "—"
      ] })
    ] }, label))
  ] });
}
function BtnBack({ onClick }) {
  return /* @__PURE__ */ jsxs("button", { style: S.btnBack, onClick, children: [
    /* @__PURE__ */ jsx("i", { className: "fas fa-arrow-left", style: { marginRight: 8 } }),
    "Kembali"
  ] });
}
const S = {
  page: { background: "#f5f6fa", minHeight: "100vh", fontFamily: "'Nunito','Segoe UI',sans-serif" },
  /* Hero */
  hero: { position: "relative", overflow: "hidden" },
  heroInner: { padding: "100px 40px 0", maxWidth: 900, margin: "0 auto" },
  // heroBrandRow: { display: "flex", alignItems: "center", gap: 10, padding: "18px 0 10px", color: "rgba(255,255,255,0.92)" },
  // heroBrandLogo:{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" },
  // heroBrandName:{ fontWeight: 800, fontSize: 14 },
  heroBody: { display: "flex", alignItems: "flex-start", gap: 24, paddingTop: 20, paddingBottom: 36 },
  heroIconCircle: { width: 80, height: 80, borderRadius: 22, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 24px rgba(0,0,0,.14)" },
  heroBadge: { display: "inline-block", background: "rgba(255,255,255,0.28)", backdropFilter: "blur(6px)", borderRadius: 20, padding: "3px 14px", fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase", color: "#fff" },
  heroTitle: { margin: "0 0 8px", fontSize: "clamp(22px,4vw,30px)", fontWeight: 900, color: "#fff", letterSpacing: -0.5 },
  heroSub: { margin: 0, fontSize: 14, color: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4 },
  heroDivider: { display: "inline-block", width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.6)", margin: "0 6px" },
  /* Steps */
  stepBar: { display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 16px 8px", background: "#f5f6fa", overflowX: "auto", flexWrap: "nowrap", gap: 0 },
  stepItem: { display: "flex", alignItems: "center" },
  stepDot: { width: 38, height: 38, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", flexShrink: 0 },
  stepLabel: { fontSize: 12, whiteSpace: "nowrap", margin: "0 8px", transition: "color 0.3s" },
  stepLine: { width: 28, height: 2, transition: "background 0.3s", flexShrink: 0 },
  container: { maxWidth: 680, margin: "0 auto", padding: "20px 16px 48px" },
  card: { background: "#fff", borderRadius: 24, padding: "clamp(20px,5vw,36px)", boxShadow: "0 20px 60px rgba(0,0,0,.07),0 4px 16px rgba(0,0,0,.04)" },
  fieldLabel: { display: "block", marginBottom: 8, fontWeight: 700, fontSize: 13, color: "#374151" },
  inputBase: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    boxSizing: "border-box",
    fontSize: 14,
    color: "#1e293b",
    transition: "all 0.2s",
    outline: "none",
    fontFamily: "inherit",
    background: "#fff"
  },
  errMsg: { color: "#ef4444", fontSize: 12, marginTop: 5, display: "flex", alignItems: "center" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 },
  radioGroup: { display: "flex", gap: 12 },
  radioCard: {
    flex: 1,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    borderRadius: 14,
    padding: "14px 16px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.2s",
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4
  },
  dropZone: { borderWidth: "2.5px", borderStyle: "dashed", borderColor: "#e2e8f0", borderRadius: 16, padding: "32px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.2s" },
  dropText: { fontWeight: 700, color: "#374151", fontSize: 14, marginBottom: 4 },
  dropHint: { fontSize: 12, color: "#94a3b8" },
  fileCard: {
    display: "flex",
    gap: 14,
    padding: 14,
    borderRadius: 16,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    alignItems: "center"
  },
  fileThumb: { width: 60, height: 60, borderRadius: 10, objectFit: "cover", flexShrink: 0 },
  fileInfo: { flex: 1, minWidth: 0 },
  fileName: { fontWeight: 700, fontSize: 13, marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  fileSize: { fontSize: 12, color: "#94a3b8", marginBottom: 8 },
  fileActions: { display: "flex", gap: 8 },
  fileBtn: {
    background: "transparent",
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    borderRadius: 8,
    padding: "4px 10px",
    fontSize: 12,
    cursor: "pointer",
    fontWeight: 700,
    fontFamily: "inherit"
  },
  summaryCard: { background: "#f8fafc", borderRadius: 16, padding: "16px 18px", marginBottom: 20 },
  summaryRow: { display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #e2e8f0", gap: 12 },
  summaryLabel: { fontSize: 13, color: "#64748b", flexShrink: 0 },
  summaryVal: { fontSize: 13, fontWeight: 700, textAlign: "right", display: "flex", alignItems: "center", justifyContent: "flex-end" },
  jenjangBadge: {
    display: "flex",
    alignItems: "center",
    padding: "11px 18px",
    borderRadius: 12,
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    fontSize: 14,
    marginBottom: 20
  },
  errorBox: {
    background: "#fef2f2",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#fecaca",
    borderRadius: 12,
    padding: "12px 16px",
    color: "#dc2626",
    fontSize: 14,
    marginBottom: 16,
    display: "flex",
    alignItems: "center"
  },
  btnRow: { display: "flex", gap: 12, marginTop: 24 },
  btnPrimary: { flex: 1, border: "none", color: "#fff", padding: "15px 24px", borderRadius: 14, fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "transform 0.15s,box-shadow 0.15s", display: "flex", alignItems: "center", justifyContent: "center" },
  btnBack: { padding: "15px 18px", borderRadius: 14, borderWidth: "2px", borderStyle: "solid", borderColor: "#e2e8f0", background: "#fff", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, color: "#64748b", fontSize: 14, whiteSpace: "nowrap", display: "flex", alignItems: "center" },
  successPage: { minHeight: "100vh", display: "grid", placeItems: "center", background: "#f5f6fa", padding: 24, fontFamily: "'Nunito','Segoe UI',sans-serif" },
  successCard: { background: "#fff", borderRadius: 24, padding: "40px 36px", maxWidth: 440, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,.08)" },
  successIconWrap: { width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" },
  successTitle: { margin: "0 0 8px", fontSize: 26, fontWeight: 900, color: "#1e293b" },
  successSub: { margin: "0 0 24px", color: "#64748b", lineHeight: 1.6 },
  successInfo: { background: "#f8fafc", borderRadius: 16, padding: "16px 20px", textAlign: "left", marginBottom: 8 },
  successRow: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e2e8f0", fontSize: 14, gap: 12 },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, backdropFilter: "blur(4px)" },
  modalBox: { background: "#fff", borderRadius: 20, overflow: "hidden", maxWidth: 600, width: "100%", maxHeight: "90vh", display: "flex", flexDirection: "column" },
  modalHeader: { padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e2e8f0" },
  modalTitle: { fontWeight: 700, fontSize: 14, color: "#1e293b", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 },
  modalClose: { background: "#f1f5f9", border: "none", borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 13, flexShrink: 0 },
  modalImg: { width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain" },
  modalFrame: { width: "100%", height: "75vh", border: "none" },
  modalNoPreview: { padding: 48, textAlign: "center", color: "#94a3b8", fontSize: 15 },
  footer: { textAlign: "center", marginTop: 32, fontSize: 12, color: "#94a3b8" }
};
const GLOBAL_CSS = (meta) => `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  .fade-in { animation: fadeSlide 0.35s cubic-bezier(.4,0,.2,1) both; }
  @keyframes fadeSlide { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }

  .btn-primary:hover  { transform:translateY(-2px); box-shadow:0 8px 24px ${meta.accent}55 !important; }
  .btn-primary:active { transform:translateY(0) !important; }

  textarea { font-family:'Nunito','Segoe UI',sans-serif !important; }
  input[type='date'] { color-scheme:light; }

  ::-webkit-scrollbar { width:6px; height:6px; }
  ::-webkit-scrollbar-track { background:#f1f5f9; border-radius:99px; }
  ::-webkit-scrollbar-thumb { background:#cbd5e1; border-radius:99px; }
`;

const $$Formulir = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Formulir;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Formulir PPDB – NIIS" }, { "default": ($$result2) => renderTemplate` <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">  ${renderComponent($$result2, "FormPPDB", FormPPDB, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/laragon/www/sisit-niis/src/components/forms/FormPPDB.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/laragon/www/sisit-niis/src/pages/ppdb/formulir.astro", void 0);

const $$file = "C:/laragon/www/sisit-niis/src/pages/ppdb/formulir.astro";
const $$url = "/ppdb/formulir";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Formulir,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
