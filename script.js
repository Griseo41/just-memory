/* ==========================================================================
   ARSIP KENANGAN HU TAO - SCRIPT UTAMA
   Interaktivitas, Animasi Suasana, Audio Web, & Scrapbook Polaroid
   ========================================================================== */

// ===== 1. PENGATURAN & DATA =====
var PASSWORD = "wangsheng"; // Kata sandi rahasia

var INTRO_TEXT = 
  "Selamat datang di sudut kecil penuh kenangan.\n\n" +
  "Setiap senyuman, tawa, dan detik yang pernah kita lalui bersama adalah harta yang tak ternilai.\n" +
  "Untuk membuka lembaran memori ini, masukkan kata sandi rahasia yang telah disiapkan.\n\n" +
  "Semoga setiap potret di dalamnya mampu menghadirkan kembali kehangatan itu...";

// Foto dari folder assets (14 foto kenangan)
var CUSTOM_PHOTOS = [
  { src: "assets/image1.jpg", t: "Kenangan Pertama", d: "Potret #01" },
  { src: "assets/image2.jpg", t: "Senyum Manis", d: "Potret #02" },
  { src: "assets/image3.jpg", t: "Hari yang Cerah", d: "Potret #03" },
  { src: "assets/image4.jpg", t: "Tawa Bersama", d: "Potret #04" },
  { src: "assets/image5.jpg", t: "Momen Spesial", d: "Potret #05" },
  { src: "assets/image6.jpg", t: "Saat Berharga", d: "Potret #06" },
  { src: "assets/image7.jpg", t: "Langkah Kecil", d: "Potret #07" },
  { src: "assets/image8.jpg", t: "Detik Bahagia", d: "Potret #08" },
  { src: "assets/image9.jpg", t: "Cerita Senja", d: "Potret #09" },
  { src: "assets/image10.jpg", t: "Kisah Hangat", d: "Potret #10" },
  { src: "assets/image11.jpg", t: "Tatapan Teduh", d: "Potret #11" },
  { src: "assets/image12.jpg", t: "Jejak Waktu", d: "Potret #12" },
  { src: "assets/image13.jpg", t: "Di Bawah Bintang", d: "Potret #13" },
  { src: "assets/image14.jpg", t: "Selamanya di Hati", d: "Potret #14" }
];

// Koleksi 8 Ilustrasi Postcard SVG Estetik Bertema Kenangan & Hu Tao
function createAestheticPostcard(idx) {
  var postcards = [
    // 1. Senja di Bawah Ranting (Plum Blossom & Moon)
    {
      caption: "Senja di Bawah Ranting",
      date: "Musim Gugur • 18:30",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a2e3b"/><stop offset="60%" stop-color="#965268"/><stop offset="100%" stop-color="#f5c2a5"/></linearGradient></defs><rect width="320" height="400" fill="url(#g1)"/><circle cx="230" cy="120" r="50" fill="#fff6ee" opacity="0.95" filter="drop-shadow(0 0 25px rgba(255,240,230,0.8))"/><circle cx="215" cy="115" r="48" fill="url(#g1)"/><path d="M-20 60 Q80 120 180 80 T340 140" stroke="#361b24" stroke-width="6" fill="none"/><path d="M90 95 Q130 160 160 180" stroke="#361b24" stroke-width="3" fill="none"/><circle cx="100" cy="98" r="8" fill="#f8a5b8"/><circle cx="150" cy="80" r="10" fill="#f8a5b8"/><circle cx="180" cy="85" r="7" fill="#ffd4dc"/><circle cx="140" cy="155" r="9" fill="#f8a5b8"/><circle cx="160" cy="180" r="7" fill="#ffd4dc"/><g fill="#ffd4dc" opacity="0.8"><circle cx="70" cy="220" r="3"/><circle cx="120" cy="280" r="4"/><circle cx="240" cy="260" r="3"/><circle cx="190" cy="330" r="3.5"/></g><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#ffffff" opacity="0.9" letter-spacing="3">胡桃の追憶</text></svg>'
    },
    // 2. Lentera Malam Harapan
    {
      caption: "Lentera Harapan",
      date: "Malam Festival Liyue",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1f182c"/><stop offset="50%" stop-color="#462c4b"/><stop offset="100%" stop-color="#b66367"/></linearGradient></defs><rect width="320" height="400" fill="url(#g2)"/><g fill="#fff" opacity="0.6"><circle cx="40" cy="50" r="1.5"/><circle cx="120" cy="30" r="1"/><circle cx="280" cy="70" r="1.5"/><circle cx="200" cy="90" r="1"/><circle cx="90" cy="120" r="1.5"/></g><g transform="translate(130, 140)"><rect x="0" y="0" width="46" height="60" rx="6" fill="#fec47a" filter="drop-shadow(0 0 20px #ff9e42)"/><rect x="6" y="6" width="34" height="48" rx="4" fill="#fff2b3"/><line x1="23" y1="0" x2="23" y2="60" stroke="#d4672e" stroke-width="1.5"/><line x1="23" y1="60" x2="23" y2="76" stroke="#d4672e" stroke-width="1.5"/><circle cx="23" cy="80" r="3" fill="#d4672e"/></g><g transform="translate(60, 210) scale(0.65)"><rect x="0" y="0" width="46" height="60" rx="6" fill="#fec47a" opacity="0.9" filter="drop-shadow(0 0 15px #ff9e42)"/><rect x="6" y="6" width="34" height="48" rx="4" fill="#fff2b3"/></g><g transform="translate(230, 180) scale(0.75)"><rect x="0" y="0" width="46" height="60" rx="6" fill="#fec47a" opacity="0.9" filter="drop-shadow(0 0 15px #ff9e42)"/><rect x="6" y="6" width="34" height="48" rx="4" fill="#fff2b3"/></g><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#ffe9c7" opacity="0.9" letter-spacing="3">明霄升海平</text></svg>'
    },
    // 3. Boo Tao & Kupu-Kupu Roh
    {
      caption: "Sahabat Roh (Boo Tao)",
      date: "Siang Cerah di Bukit Wuwang",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fcd7d3"/><stop offset="50%" stop-color="#f6a7b8"/><stop offset="100%" stop-color="#aa8ec5"/></linearGradient></defs><rect width="320" height="400" fill="url(#g3)"/><g transform="translate(160, 180)"><path d="M-40 -10 C-40 -50 40 -50 40 -10 C40 30 25 50 15 65 C5 55 0 65 -15 60 C-25 50 -40 30 -40 -10 Z" fill="#ffffff" opacity="0.92" filter="drop-shadow(0 10px 20px rgba(170,142,197,0.4))"/><circle cx="-14" cy="-12" r="5" fill="#3f2731"/><circle cx="14" cy="-12" r="5" fill="#3f2731"/><ellipse cx="0" cy="5" rx="4" ry="6" fill="#e26274"/><ellipse cx="-24" cy="-3" rx="5" ry="3" fill="#fbaab4"/><ellipse cx="24" cy="-3" rx="5" ry="3" fill="#fbaab4"/><ellipse cx="-44" cy="5" rx="8" ry="5" fill="#fff" transform="rotate(-20)"/><ellipse cx="44" cy="5" rx="8" ry="5" fill="#fff" transform="rotate(20)"/></g><g transform="translate(220, 100) scale(0.9)"><path d="M0 0 C-12 -20 -30 -10 -15 10 C-30 25 -10 30 0 5 C10 30 30 25 15 10 C30 -10 12 -20 0 0 Z" fill="#ffd4dc" opacity="0.85" filter="drop-shadow(0 0 8px #ff7b95)"/></g><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#52323e" opacity="0.85" letter-spacing="3">幽幽同行</text></svg>'
    },
    // 4. Secangkir Teh Sore
    {
      caption: "Secangkir Teh Sore",
      date: "Paviliun Liuli • 16:00",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff0e6"/><stop offset="60%" stop-color="#ffd5c2"/><stop offset="100%" stop-color="#d68c92"/></linearGradient></defs><rect width="320" height="400" fill="url(#g4)"/><circle cx="160" cy="200" r="110" fill="#ffffff" opacity="0.4"/><g transform="translate(160, 220)"><ellipse cx="0" cy="30" rx="80" ry="22" fill="#caa49a" opacity="0.5"/><path d="M-50 0 C-50 40 50 40 50 0 Z" fill="#fffdfa" stroke="#cca59e" stroke-width="2"/><ellipse cx="0" cy="0" rx="50" ry="14" fill="#b96d43"/><ellipse cx="0" cy="0" rx="42" ry="10" fill="#8f4625"/><path d="M-15 -18 Q-5 -45 -18 -65" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/><path d="M10 -18 Q20 -45 5 -65" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/></g><g transform="translate(80, 110) rotate(-25)"><path d="M0 0 C15 -10 30 -5 35 15 C20 25 5 15 0 0 Z" fill="#c7493a" opacity="0.85"/></g><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#693b32" opacity="0.9" letter-spacing="3">偷得半日闲</text></svg>'
    },
    // 5. Pegunungan Kabut Pagi
    {
      caption: "Kabut Puncak Liyue",
      date: "Puncak Jueyun Karst",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde8ea"/><stop offset="45%" stop-color="#f8bfcf"/><stop offset="100%" stop-color="#6e5077"/></linearGradient></defs><rect width="320" height="400" fill="url(#g5)"/><circle cx="160" cy="150" r="65" fill="#fffdf5" opacity="0.85"/><path d="M-40 280 L60 170 L160 280 Z" fill="#b7829d" opacity="0.85"/><path d="M90 280 L200 140 L310 280 Z" fill="#7a557b" opacity="0.9"/><path d="M-20 400 L120 220 L260 400 Z" fill="#4b3053"/><path d="M140 400 L250 240 L360 400 Z" fill="#361f3d"/><path d="M0 260 Q160 230 320 260 L320 290 Q160 270 0 290 Z" fill="#fde8ea" opacity="0.45"/><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#ffffff" opacity="0.9" letter-spacing="3">云深不知处</text></svg>'
    },
    // 6. Bintang Jatuh & Harapan
    {
      caption: "Bintang Jatuh Malam Itu",
      date: "Tebing Wangshu Inn",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1b1d36"/><stop offset="60%" stop-color="#412f54"/><stop offset="100%" stop-color="#8c5874"/></linearGradient></defs><rect width="320" height="400" fill="url(#g6)"/><line x1="80" y1="40" x2="260" y2="150" stroke="#ffd9e2" stroke-width="2.5" stroke-linecap="round" opacity="0.9" filter="drop-shadow(0 0 8px #fff)"/><g fill="#fff" opacity="0.85"><circle cx="70" cy="130" r="2"/><circle cx="140" cy="80" r="1.5"/><circle cx="210" cy="60" r="2"/><circle cx="280" cy="110" r="1.5"/><circle cx="110" cy="200" r="2"/><circle cx="240" cy="220" r="2.5"/></g><path d="M0 400 Q160 330 320 370 L320 400 Z" fill="#141424"/><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#ffd9e2" opacity="0.9" letter-spacing="3">愿星光常伴</text></svg>'
    },
    // 7. Bunga Higanbana di Batas Senja
    {
      caption: "Bunga di Tepi Senja",
      date: "Gerbang Keabadian",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3d1d2b"/><stop offset="55%" stop-color="#b83b52"/><stop offset="100%" stop-color="#f8a488"/></linearGradient></defs><rect width="320" height="400" fill="url(#g7)"/><circle cx="160" cy="220" r="85" fill="#fff7ec" opacity="0.9"/><g stroke="#260b16" stroke-width="2.5" fill="none"><path d="M160 400 Q155 310 160 250"/><path d="M160 250 Q120 200 80 230"/><path d="M160 250 Q200 200 240 230"/><path d="M160 250 Q130 170 100 170"/><path d="M160 250 Q190 170 220 170"/><path d="M160 250 Q160 150 160 140"/></g><g fill="#da2c43"><circle cx="80" cy="230" r="6"/><circle cx="240" cy="230" r="6"/><circle cx="100" cy="170" r="6"/><circle cx="220" cy="170" r="6"/><circle cx="160" cy="140" r="7"/></g><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#ffffff" opacity="0.95" letter-spacing="3">彼岸花开</text></svg>'
    },
    // 8. Selalu Tersimpan di Hati
    {
      caption: "Selalu di Dalam Hati",
      date: "Hari Ini & Selamanya",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="g8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffece6"/><stop offset="50%" stop-color="#ffd2dc"/><stop offset="100%" stop-color="#cbb5e2"/></linearGradient></defs><rect width="320" height="400" fill="url(#g8)"/><g transform="translate(160, 190) scale(1.1)"><path d="M0 35 C-60 0 -70 -50 -30 -60 C-5 -65 0 -40 0 -35 C0 -40 5 -65 30 -60 C70 -50 60 0 0 35 Z" fill="#eb6b7d" opacity="0.85" filter="drop-shadow(0 10px 25px rgba(235,107,125,0.45))"/></g><text x="160" y="375" text-anchor="middle" font-family="serif" font-size="18" fill="#4d3240" opacity="0.9" letter-spacing="3">永存此心</text></svg>'
    }
  ];

  var item = postcards[idx % postcards.length];
  var dataUri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(item.svg);
  return { src: dataUri, t: item.caption, d: item.date };
}

// Inisialisasi daftar item foto
var SAMPLE_ITEMS = [];
for (var i = 0; i < 8; i++) {
  SAMPLE_ITEMS.push(createAestheticPostcard(i));
}

var memoryItems = CUSTOM_PHOTOS.length ? CUSTOM_PHOTOS.slice() : SAMPLE_ITEMS.slice();

// ===== 2. KONEKSI ELEMEN DOM =====
function $(id) {
  return document.getElementById(id);
}

// ===== 3. SUASANA AUDIO: WEB AUDIO API (NO EXTERNAL FILES REQUIRED!) =====
var audioCtx = null;
var isMusicPlaying = false;
var musicInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// Melodi Kotak Musik Nostalgia (Pentatonic Lullaby Melody)
var melodyNotes = [
  523.25, 659.25, 783.99, 659.25, 880.00, 783.99, 659.25, 523.25,
  587.33, 659.25, 587.33, 440.00, 523.25, 659.25, 440.00, 392.00,
  523.25, 659.25, 783.99, 880.00, 1046.50, 880.00, 783.99, 659.25,
  659.25, 587.33, 523.25, 440.00, 523.25, 587.33, 523.25, 392.00
];
var melodyStep = 0;

function playMusicBoxNote(freq, duration) {
  var ctx = getAudioContext();
  if (!ctx) return;

  var osc = ctx.createOscillator();
  var gain = ctx.createGain();

  // Campuran gelombang lembut khas kotak musik (sine + sedikit sparkle)
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, ctx.currentTime);

  // Amplop suara lonceng / kotak musik berdawai
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (duration || 1.8));

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + (duration || 1.8));
}

// Sound Effect: Chime Lembut Saat Klik / Like
function soundChime() {
  var ctx = getAudioContext();
  if (!ctx) return;
  playMusicBoxNote(880, 0.8);
  setTimeout(function() { playMusicBoxNote(1046.50, 1.2); }, 90);
}

// Sound Effect: Sentuhan Tactile Saat Geser Foto
function soundTap() {
  var ctx = getAudioContext();
  if (!ctx) return;
  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(220, ctx.currentTime);
  gain.gain.setValueAtTime(0.04, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.08);
}

function startMusicLoop() {
  if (musicInterval) clearInterval(musicInterval);
  isMusicPlaying = true;
  $("music-btn").classList.add("playing");
  $("music-btn").querySelector(".music-text").textContent = "Musik: Nyala";

  musicInterval = setInterval(function() {
    if (!isMusicPlaying) return;
    var freq = melodyNotes[melodyStep % melodyNotes.length];
    playMusicBoxNote(freq, 2.2);
    // Harmoni halus sesekali
    if (melodyStep % 4 === 0) {
      setTimeout(function() {
        playMusicBoxNote(freq * 0.5, 2.5);
      }, 50);
    }
    melodyStep++;
  }, 480);
}

function stopMusicLoop() {
  if (musicInterval) clearInterval(musicInterval);
  isMusicPlaying = false;
  $("music-btn").classList.remove("playing");
  $("music-btn").querySelector(".music-text").textContent = "Musik: Mati";
}

$("music-btn").onclick = function() {
  if (isMusicPlaying) {
    stopMusicLoop();
  } else {
    getAudioContext();
    startMusicLoop();
  }
};

// ===== 4. LATAR BELAKANG: CANVAS KELOPAK BUNGA & SPARKLE =====
var canvas = $("bg-canvas");
var ctxCanvas = canvas.getContext("2d");
var particles = [];
var canvasW, canvasH;

function resizeCanvas() {
  canvasW = canvas.width = window.innerWidth;
  canvasH = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function Petal() {
  this.reset();
}
Petal.prototype.reset = function() {
  this.x = Math.random() * canvasW;
  this.y = -20 - Math.random() * 50;
  this.size = 8 + Math.random() * 10;
  this.speedY = 0.8 + Math.random() * 1.5;
  this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
  this.rotation = Math.random() * 360;
  this.rotSpeed = (Math.random() - 0.5) * 1.5;
  this.opacity = 0.4 + Math.random() * 0.45;
  // Warna pastel: sakura pink, peach, atau lavender
  var colors = ["#f8b4c2", "#fad2e1", "#ffd8c4", "#d9cdf0"];
  this.color = colors[Math.floor(Math.random() * colors.length)];
};
Petal.prototype.update = function() {
  this.y += this.speedY;
  this.x += Math.sin(this.y * 0.015) * 1.2 + this.speedX;
  this.rotation += this.rotSpeed;
  if (this.y > canvasH + 30) this.reset();
};
Petal.prototype.draw = function(c) {
  c.save();
  c.translate(this.x, this.y);
  c.rotate((this.rotation * Math.PI) / 180);
  c.fillStyle = this.color;
  c.globalAlpha = this.opacity;
  c.beginPath();
  // Bentuk kelopak bunga organik
  c.moveTo(0, -this.size);
  c.bezierCurveTo(this.size * 0.8, -this.size * 0.5, this.size * 0.8, this.size * 0.5, 0, this.size);
  c.bezierCurveTo(-this.size * 0.8, this.size * 0.5, -this.size * 0.8, -this.size * 0.5, 0, -this.size);
  c.fill();
  c.restore();
};

for (var p = 0; p < 28; p++) {
  var pet = new Petal();
  pet.y = Math.random() * canvasH; // Sebar awal
  particles.push(pet);
}

// Sparkle interaktif di kursor mouse
var sparkles = [];
function addSparkle(x, y) {
  if (sparkles.length > 35) return;
  sparkles.push({
    x: x,
    y: y,
    size: 2 + Math.random() * 3,
    color: Math.random() > 0.5 ? "#ffd2dc" : "#fff",
    life: 1,
    decay: 0.03 + Math.random() * 0.03,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5 - 0.5
  });
}

window.addEventListener("pointermove", function(e) {
  if (Math.random() > 0.6) {
    addSparkle(e.clientX, e.clientY);
  }
});

function loopCanvas() {
  ctxCanvas.clearRect(0, 0, canvasW, canvasH);
  
  // Render kelopak
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw(ctxCanvas);
  }

  // Render sparkles kursor
  for (var s = sparkles.length - 1; s >= 0; s--) {
    var sp = sparkles[s];
    sp.x += sp.vx;
    sp.y += sp.vy;
    sp.life -= sp.decay;
    if (sp.life <= 0) {
      sparkles.splice(s, 1);
      continue;
    }
    ctxCanvas.save();
    ctxCanvas.fillStyle = sp.color;
    ctxCanvas.globalAlpha = sp.life;
    ctxCanvas.beginPath();
    ctxCanvas.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
    ctxCanvas.fill();
    ctxCanvas.restore();
  }

  requestAnimationFrame(loopCanvas);
}
requestAnimationFrame(loopCanvas);

// ===== 5. TRANSISI ANTAR STAGE (HALUS TANPA KAKU) =====
function showStage(stageId) {
  document.querySelectorAll(".stage").forEach(function(s) {
    s.classList.remove("on");
  });
  if (stageId && $(stageId)) {
    $(stageId).classList.add("on");
  }
}

// ===== 6. ALUR TAHAP LOADING SCREEN =====
var loadCount = 0;
var loadStatusEl = $("load-status");
var loadBarEl = $("load-bar");
var pctEl = $("pct");

var loadInterval = setInterval(function() {
  loadCount += Math.ceil(Math.random() * 7) + 2;
  
  if (loadCount >= 35 && loadCount < 70) {
    loadStatusEl.textContent = "Mengumpulkan potret masa lalu...";
  } else if (loadCount >= 70 && loadCount < 95) {
    loadStatusEl.textContent = "Membuka arsip penuh kenangan...";
  }

  if (loadCount >= 100) {
    loadCount = 100;
    clearInterval(loadInterval);
    loadStatusEl.textContent = "Kotak kenangan siap dibuka.";
    setTimeout(function() {
      showStage("enter");
    }, 400);
  }

  pctEl.textContent = loadCount;
  loadBarEl.style.width = loadCount + "%";
}, 50);

// ===== 7. ALUR TAHAP ENTER -> INTRO =====
var typeTimer = null;

$("start").onclick = function() {
  soundChime();
  getAudioContext();
  if (!isMusicPlaying) startMusicLoop(); // Nyalakan musik otomatis saat masuk jika diinginkan
  
  showStage("intro");
  
  // Efek Mesin Tik Halus
  var typedEl = $("typed");
  typedEl.textContent = "";
  var idx = 0;
  if (typeTimer) clearInterval(typeTimer);

  typeTimer = setInterval(function() {
    typedEl.textContent = INTRO_TEXT.slice(0, ++idx);
    if (idx >= INTRO_TEXT.length) {
      clearInterval(typeTimer);
    }
  }, 30);
};

$("skip-intro").onclick = function() {
  if (typeTimer) clearInterval(typeTimer);
  $("typed").textContent = INTRO_TEXT;
  showStage("login");
  $("pw").focus();
};

$("next1").onclick = function() {
  soundChime();
  if (typeTimer) clearInterval(typeTimer);
  showStage("login");
  setTimeout(function() {
    $("pw").focus();
  }, 200);
};

// ===== 8. ALUR TAHAP LOGIN / BUKA KUNCI =====
// Toggle Lihat Password
$("toggle-pw").onclick = function() {
  var pwInput = $("pw");
  var eyeOpen = this.querySelector(".eye-open");
  var eyeClosed = this.querySelector(".eye-closed");
  if (pwInput.type === "password") {
    pwInput.type = "text";
    if (eyeOpen) eyeOpen.classList.add("hidden");
    if (eyeClosed) eyeClosed.classList.remove("hidden");
  } else {
    pwInput.type = "password";
    if (eyeOpen) eyeOpen.classList.remove("hidden");
    if (eyeClosed) eyeClosed.classList.add("hidden");
  }
};

// Bocoran Jawaban Password
$("reveal-hint").onclick = function() {
  var ans = $("hint-answer");
  ans.classList.toggle("hidden");
  if (!ans.classList.contains("hidden")) {
    $("pw").value = "wangsheng";
    $("pw").focus();
  }
};

$("clr").onclick = function() {
  $("pw").value = "";
  $("err").textContent = "";
  $("pw").focus();
};

function tryLogin() {
  var val = $("pw").value.trim().toLowerCase();
  if (val === PASSWORD) {
    soundChime();
    showStage(null); // Tutup semua stage dialog
    $("gallery").classList.add("on");
    renderGallery(true);
  } else {
    // Animasi Guncang (Feedback Salah)
    var winLogin = document.querySelector(".win-login");
    winLogin.classList.remove("shake");
    void winLogin.offsetWidth; // Trigger reflow
    winLogin.classList.add("shake");
    
    $("err").textContent = "Kata sandi belum tepat. Coba periksa petunjuk di bawah.";
    $("pw").focus();
  }
}

$("ok").onclick = tryLogin;
$("pw").addEventListener("keydown", function(e) {
  if (e.key === "Enter") tryLogin();
});

// ===== 9. GALERI POLAROID (SCRAPBOOK & GRID ALBUM) =====
var currentCards = [];
var zIndexTop = 200;
var isAlbumMode = false;
var washiTapes = ["tape-rose", "tape-peach", "tape-lavender", "tape-mint", "tape-gold"];

function renderGallery(withFlyInAnimation) {
  var grid = $("grid");
  grid.innerHTML = "";
  currentCards = [];
  var decodes = [];

  memoryItems.forEach(function(item, idx) {
    var card = document.createElement("div");
    card.className = "card " + washiTapes[idx % washiTapes.length];
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Buka foto: " + (item.t || "Kenangan"));

    // Random tape rotation
    var tapeRot = ((Math.random() * 8) - 4).toFixed(1) + "deg";
    card.style.setProperty("--tape-rot", tapeRot);

    // Frame Gambar
    var imgWrap = document.createElement("div");
    imgWrap.className = "card-img-wrap";
    
    var img = document.createElement("img");
    img.src = item.src;
    img.alt = item.t || "Kenangan";
    img.loading = "lazy";
    img.draggable = false;
    img.onerror = function() {
      if (this.src.indexOf("assets/") !== -1) {
        this.src = this.src.replace("assets/", "assest/");
      }
    };
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);

    // Footer Tulisan Tangan & Tanggal
    var footer = document.createElement("div");
    footer.className = "card-footer";

    var caption = document.createElement("b");
    caption.textContent = item.t || "Kenangan Indah";
    footer.appendChild(caption);

    var dateTag = document.createElement("span");
    dateTag.className = "card-date";
    dateTag.textContent = item.d || ("Foto #" + (idx + 1));
    footer.appendChild(dateTag);

    card.appendChild(footer);

    // Tombol Like Hati di Kartu
    var heartBtn = document.createElement("button");
    heartBtn.className = "card-heart-btn";
    heartBtn.title = "Sukai foto ini";
    heartBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    heartBtn.onclick = function(e) {
      e.stopPropagation();
      heartBtn.classList.toggle("liked");
      spawnFloatingHeart(e.clientX, e.clientY);
      soundChime();
    };
    card.appendChild(heartBtn);

    // Buka Lightbox jika tidak sedang digeser
    card.onclick = function() {
      if (card._isMoved) {
        card._isMoved = false;
        return;
      }
      openLightbox(idx);
    };

    grid.appendChild(card);
    setupCardDrag(card);
    currentCards.push(card);

    if (img.decode) {
      decodes.push(img.decode().catch(function() {}));
    }
  });

  Promise.all(decodes).then(function() {
    if (isAlbumMode) {
      applyAlbumLayout();
    } else {
      applyScatterLayout(currentCards);
      applyFloatMotion(currentCards, withFlyInAnimation);
    }
  });
}

// Tata Letak Meja Hambur (Organik & Estetik)
function applyScatterLayout(cards) {
  var winW = window.innerWidth;
  var winH = window.innerHeight;
  var headerEl = document.querySelector(".gallery-header");
  var isMobile = winW < 600;
  var topPadding = headerEl ? (headerEl.offsetHeight + 10) : (isMobile ? 130 : 110);
  var count = cards.length;
  var availableH = winH - topPadding - (isMobile ? 50 : 40);

  // Ukuran kartu responsif
  var minW = isMobile ? 100 : 140;
  var maxW = isMobile ? 140 : 220;
  var cardW = Math.max(minW, Math.min(maxW, Math.sqrt((winW * availableH * 1.3) / count / 1.3)));
  var cols = Math.max(1, Math.round(Math.sqrt((count * winW) / availableH)));
  var cellW = winW / cols;
  var cellH = availableH / Math.ceil(count / cols);

  var order = cards.map(function(_, i) { return i; }).sort(function() { return Math.random() - 0.5; });

  cards.forEach(function(card, idx) {
    card.style.width = cardW + "px";
    
    var ord = order[idx];
    var col = ord % cols;
    var row = Math.floor(ord / cols);
    var cardH = card.offsetHeight || (cardW * 1.35);

    var posX = (col + 0.5) * cellW + (Math.random() - 0.5) * cellW * 0.65;
    var posY = topPadding + (row + 0.5) * cellH + (Math.random() - 0.5) * cellH * 0.65;

    // Pastikan berada di dalam batas layar
    var leftClamped = Math.max(10, Math.min(winW - cardW - 10, posX - cardW / 2));
    var topClamped = Math.max(topPadding, Math.min(winH - cardH - 15, posY - cardH / 2));

    card.style.left = leftClamped + "px";
    card.style.top = topClamped + "px";
    card.style.zIndex = 10 + Math.floor(Math.random() * count);
  });
}

// Drag & Drop Tactile Physics
function setupCardDrag(card) {
  var isDragging = false;
  var startX, startY, origX, origY;

  card.addEventListener("pointerdown", function(e) {
    if (isAlbumMode) return; // Nonaktifkan drag di mode album
    if (e.target.closest(".card-heart-btn")) return;

    isDragging = true;
    card._isMoved = false;
    startX = e.clientX;
    startY = e.clientY;
    origX = card.offsetLeft;
    origY = card.offsetTop;

    card.style.zIndex = ++zIndexTop;
    card.classList.add("dragging");
    card.setPointerCapture(e.pointerId);
    soundTap();
  });

  card.addEventListener("pointermove", function(e) {
    if (!isDragging) return;
    var deltaX = e.clientX - startX;
    var deltaY = e.clientY - startY;

    if (Math.abs(deltaX) + Math.abs(deltaY) > 9) {
      card._isMoved = true;
    }

    if (card._isMoved) {
      card.style.left = (origX + deltaX) + "px";
      card.style.top = (origY + deltaY) + "px";
      // Efek miring halus mengikuti arah geser
      var dragTilt = Math.max(-12, Math.min(12, deltaX * 0.1));
      card.style.transform = "rotate(" + dragTilt + "deg) scale(1.08)";
    }
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove("dragging");
    card.style.transform = "rotate(" + (card.style.getPropertyValue("--tilt") || "0deg") + ")";
  }

  card.addEventListener("pointerup", endDrag);
  card.addEventListener("pointercancel", endDrag);
}

// Animasi Melayang Lembut (Float Bob)
function applyFloatMotion(cards, isFlyIn) {
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;

  cards.forEach(function(card, i) {
    var rnd = Math.random;
    var tiltDeg = (rnd() * 8 - 4).toFixed(1) + "deg";
    card.style.setProperty("--tilt", tiltDeg);

    var enableBob = function() {
      card.style.setProperty("--d", (5 + rnd() * 4).toFixed(1) + "s");
      card.style.setProperty("--l", (rnd() * 2).toFixed(1) + "s");
      card.style.setProperty("--r", (0.8 + rnd() * 1.5).toFixed(1) + "deg");
      card.style.setProperty("--dy", -(6 + rnd() * 8).toFixed(1) + "px");
      card.style.setProperty("--dx", (rnd() * 10 - 5).toFixed(1) + "px");
      card.classList.add("float");
    };

    if (!isFlyIn) {
      card.style.opacity = "1";
      card.style.transform = "rotate(" + tiltDeg + ")";
      enableBob();
      return;
    }

    // Animasi Terhambur Elegan dari Tengah
    var rect = card.getBoundingClientRect();
    var delay = i * 80;

    card.style.transition = "none";
    card.style.transform = 
      "translate(" + (centerX - rect.left - rect.width / 2) + "px," + 
      (centerY - rect.top - rect.height / 2) + "px) scale(0.2) rotate(" + ((rnd() * 50) - 25) + "deg)";
    card.style.opacity = "0";

    void card.offsetWidth;

    card.style.transition = 
      "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) " + delay + "ms, " +
      "opacity 0.6s ease " + delay + "ms";
    card.style.transform = "rotate(" + tiltDeg + ")";
    card.style.opacity = "1";

    setTimeout(enableBob, delay + 900);
  });
}

// ===== 10. TOGGLE TAMPILAN: MEJA (SCATTER) VS ALBUM (GRID) =====
function applyAlbumLayout() {
  $("gallery").classList.add("album-mode");
  currentCards.forEach(function(card) {
    card.classList.remove("float");
    card.style.left = "";
    card.style.top = "";
    card.style.width = "";
  });
}

function applyScatterMode() {
  $("gallery").classList.remove("album-mode");
  applyScatterLayout(currentCards);
  applyFloatMotion(currentCards, false);
}

$("view-scatter").onclick = function() {
  if (!isAlbumMode) return;
  isAlbumMode = false;
  $("view-scatter").classList.add("active");
  $("view-grid").classList.remove("active");
  applyScatterMode();
  soundChime();
};

$("view-grid").onclick = function() {
  if (isAlbumMode) return;
  isAlbumMode = true;
  $("view-grid").classList.add("active");
  $("view-scatter").classList.remove("active");
  applyAlbumLayout();
  soundChime();
};

// Tombol Acak Meja (Shuffle)
$("shuffle").onclick = function() {
  soundChime();
  if (isAlbumMode) {
    isAlbumMode = false;
    $("view-scatter").classList.add("active");
    $("view-grid").classList.remove("active");
    $("gallery").classList.remove("album-mode");
  }
  applyScatterLayout(currentCards);
  applyFloatMotion(currentCards, true);
};

// Resize Window Handlers
var resizeTimeout;
window.addEventListener("resize", function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    if (!isAlbumMode && currentCards.length) {
      applyScatterLayout(currentCards);
    }
  }, 200);
});

// ===== 12. LIGHTBOX / PRATINJAU FULLSCREEN =====
var currentPhotoIdx = 0;

function openLightbox(idx) {
  currentPhotoIdx = idx;
  var item = memoryItems[idx];
  
  $("lbimg").src = item.src;
  $("lbimg").onerror = function() {
    if (this.src.indexOf("assets/") !== -1) {
      this.src = this.src.replace("assets/", "assest/");
    }
  };
  $("lbimg").alt = item.t || "Kenangan";
  $("lbcap").textContent = item.t || "Kenangan Abadi";
  $("lbcount").textContent = (item.d ? item.d + " • " : "") + (idx + 1) + " dari " + memoryItems.length;
  
  // Set tautan unduh
  $("lb-download").href = item.src;
  $("lb-download").download = (item.t || "kenangan") + ".jpg";

  $("lb").classList.add("on");
  soundChime();
}

function closeLightbox() {
  $("lb").classList.remove("on");
}

function stepLightbox(dir) {
  currentPhotoIdx = (currentPhotoIdx + dir + memoryItems.length) % memoryItems.length;
  openLightbox(currentPhotoIdx);
}

$("prev").onclick = function(e) {
  e.stopPropagation();
  stepLightbox(-1);
};

$("next").onclick = function(e) {
  e.stopPropagation();
  stepLightbox(1);
};

$("close").onclick = closeLightbox;
$("lb-backdrop").onclick = closeLightbox;

// Tombol Suka di Lightbox
$("lb-heart").onclick = function(e) {
  spawnFloatingHeart(e.clientX, e.clientY);
  soundChime();
  this.style.color = "#d45b70";
};

// Navigasi Keyboard
document.addEventListener("keydown", function(e) {
  if (!$("lb").classList.contains("on")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

// Gesture Geser Layar Sentuh (Touch Swipe) di HP untuk Lightbox
var touchStartX = 0;
var touchStartY = 0;
$("lb").addEventListener("touchstart", function(e) {
  if (!e.changedTouches || !e.changedTouches.length) return;
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

$("lb").addEventListener("touchend", function(e) {
  if (!e.changedTouches || !e.changedTouches.length) return;
  var diffX = e.changedTouches[0].clientX - touchStartX;
  var diffY = e.changedTouches[0].clientY - touchStartY;
  // Geser horizontal minimal 45px dan lebih dominan dibanding vertikal
  if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      stepLightbox(1); // Swipe ke kiri: foto berikutnya
    } else {
      stepLightbox(-1); // Swipe ke kanan: foto sebelumnya
    }
  }
}, { passive: true });

// Buka kunci AudioContext saat sentuhan pertama di HP
function unlockMobileAudio() {
  getAudioContext();
  window.removeEventListener("touchstart", unlockMobileAudio);
  window.removeEventListener("click", unlockMobileAudio);
}
window.addEventListener("touchstart", unlockMobileAudio, { passive: true, once: true });
window.addEventListener("click", unlockMobileAudio, { passive: true, once: true });

// ===== 13. EFEK PARTIKEL HATI MENGAMBANG (FLOATING HEARTS) =====
function spawnFloatingHeart(x, y) {
  var heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#e86177" stroke="#e86177" stroke-width="1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  heart.style.left = (x - 11) + "px";
  heart.style.top = (y - 11) + "px";
  document.body.appendChild(heart);
  setTimeout(function() {
    heart.remove();
  }, 1200);
}
