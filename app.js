/* ==========================================================================
   MT DZULQORNAIN - INTERACTIVE ENGINE (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initTranslation();
    initCurriculumExplorer();
    initConciergeCalendar();
    initEndowmentVault();
    initApplicationForm();
    initPortalDashboard();
    initGallery();
});

/* ==========================================
   HEADER SCROLL EFFECTS
   ========================================== */
function initHeader() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================
   MOBILE NAVIGATION MENU
   ========================================== */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileOverlay = document.getElementById('mobile-nav-overlay');
    const mobileLinks = mobileOverlay.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        
        // Animating hamburger bars
        const bars = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileOverlay.classList.remove('active');
            const bars = hamburger.querySelectorAll('span');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
}

/* ==========================================
   BILINGUAL TRANSLATION SYSTEM
   ========================================== */
let currentLanguage = 'ID'; // Default Language: Indonesian

const translations = {
    'ID': {
        // Nav & Header
        'nav-logo': 'MT DZULQORNAIN',
        'nav-sub': 'Center for Quranic Literacy',
        'link-home': 'Home',
        'link-philosophy': 'Filosofi',
        'link-verses': 'Cahaya Wahyu',
        'link-curriculum': 'Kurikulum',
        'link-concierge': 'VIP Concierge',
        'link-endowment': 'Endowment',
        'btn-register-now': 'Daftar Sekarang',
        
        // Hero
        'hero-title-html': 'Jangan Menunggu Waktu Luang <br><span>Untuk Mempelajari Al-Qur\'an</span>',
        'hero-tagline-txt': '"Namun luangkanlah waktu untuk mempelajarinya agar mendapatkan kebahagiaan dunia dan di akhirat"',
        'btn-hero-cta1': 'Private VIP Consultation',
        'btn-hero-cta2': 'Explore 1-Year Curriculum',
        
        // Philosophy
        'phil-subtitle': 'Filosofi & Archetype',
        'phil-title': 'The Eternal Legacy of Dzulqarnain',
        'phil-desc': 'Memadukan keagungan wahyu klasik dengan kecanggihan sains modern untuk membangun peradaban tangguh.',
        'phil-c1-title': 'Al-Walad Ash-Shalih (The Virtuous Offspring)',
        'phil-c1-desc': 'Menempa generasi berkarakter noble character, yang ketulusan munajat dan continuous prayers-nya menjadi lentera spiritual abadi melintasi zaman.',
        'phil-c2-title': 'Al-‘Ilm An-Nafi’ (Impactful Knowledge)',
        'phil-c2-desc': 'Mentransformasikan integrasi wahyu dan modern science menjadi sustainable insights yang terus mencerahkan akal budi manusia.',
        'phil-c3-title': 'Ash-Shadaqah Al-Jariyah (Perpetual Legacy)',
        'phil-c3-desc': 'Membangun institusi, tata kelola, dan sustainable infrastructure yang maslahat serta everlasting impact-nya terus menopang peradaban lintas generasi.',
        
        // Quranic Verses Section (Cahaya Wahyu)
        'verses-subtitle': 'Cahaya & Peringatan Al-Qur\'an',
        'verses-title': 'Cahaya Wahyu Menuntun Kehidupan',
        'verses-desc': 'Renungkan ayat-ayat suci Al-Qur\'an dan Sunnah Nabi yang menerangi hati dan memberi peringatan agar hidup tidak sia-sia.',
        'v-bliss-hdr': 'Kemuliaan & Keberuntungan Belajar',
        'v-bliss-1': '"Sesungguhnya orang-orang yang selalu membaca Kitab Allah (Al-Qur\'an), melaksanakan salat, dan menginfakkan sebagian rezeki yang Kami anugerahkan dengan diam-diam dan terang-terangan, mereka itu mengharapkan perdagangan yang tidak akan rugi."',
        'v-bliss-2': '"Sebaik-baik kalian adalah orang yang mempelajari Al-Qur\'an dan mengajarkannya kepada orang lain."',
        'v-warn-hdr': 'Peringatan & Kerugian Berpaling',
        'v-warn-1': '"Dan barangsiapa berpaling dari peringatan-Ku (Al-Qur\'an), maka sesungguhnya baginya penghidupan yang sempit, dan Kami akan mengumpulkannya pada hari kiamat dalam keadaan buta."',
        'v-warn-2': '"Dan Rasul (Muhammad) berkata, \'Ya Tuhanku, sesungguhnya kaumku telah menjadikan Al-Qur\'an ini diabaikan (ditinggalkan).\'"',
        'v-warn-3': '"Sesungguhnya Allah mengangkat beberapa kaum dengan Kitab ini (Al-Qur\'an) dan menghinakan kaum yang lain dengannya (karena meninggalkannya)."',

        // Founder
        'link-founder': 'Pendiri',
        'founder-subtitle': 'Selayang Pandang Pendiri',
        'f-bio-t1-title': 'Pendidikan Pondok Pesantren (2000-2006)',
        'f-bio-t1-desc': 'Alumni Pondok Pesantren Sunanul Huda Sukabumi (MTs hingga MA). Mendalami berbagai disiplin keilmuan Islam klasik (Fan Ilmu) meliputi Ilmu Tajwid, Tahsin, Fiqih, Tauhid, Tafsir, Nahwu, Shorof, dan tata bahasa Arab.',
        'f-bio-t2-title': 'Studi Akademis Hukum & Ekonomi Syariah (2006-2010)',
        'f-bio-t2-desc': 'Menempuh pendidikan tinggi di UIN Syarif Hidayatullah Jakarta, Fakultas Syariah dan Hukum, Jurusan Ekonomi Syariah (Konsentrasi Perbankan Syariah) sebagai salah satu mahasiswa penerima Beasiswa Program DIPA Kementerian Agama RI.',
        'f-bio-t3-title': 'Karier Profesional Perbankan Syariah (12 Tahun)',
        'f-bio-t3-desc': 'Berpengalaman profesional sebagai Syariah Banker di Bank Syariah Indonesia (ex Legacy Bank Syariah Mandiri), mengemban berbagai peran dan posisi strategis baik di Kantor Cabang maupun Kantor Pusat untuk berjuang mengimplementasikan serta mengembangkan ekosistem Ekonomi Syariah di Indonesia dan kancah global.',
        'f-bio-t4-title': 'Fokus & Pengabdian Dakwah Saat Ini',
        'f-bio-t4-desc': 'Kini mencurahkan dedikasi penuh dalam dakwah keagamaan, pendidikan, dan aksi sosial bagi generasi muda serta masyarakat luas dengan mendirikan Majlis Ta\'lim Dzulqornain. Berikhtiar mewujudkan amal jariyah yang pahalanya mengalir abadi bagi segenap pejuang kejayaan Islam di akhir zaman.',
        'f-closing-quote': '"Pendidikan Al-Qur\'an dan literasi syariah bukanlah sekadar opsi di waktu luang, melainkan poros utama kehidupan untuk meraih keselamatan duniawi dan ukhrawi. Mari meluangkan waktu terbaik kita untuk bersandar pada wahyu, demi melahirkan generasi Robbani yang tangguh, berakal mulia, dan berakhlak mulia."',
        
        // Curriculum Explorer
        'link-gallery': 'Galeri',
        'gallery-subtitle': 'Dokumentasi Nyata',
        'gallery-title': 'Galeri Kegiatan Majlis Ta\'lim',
        'gallery-desc': 'Bukti nyata harian dari aktivitas Halaqah, Talaqqi bersanad, Kajian Akbar, dan bimbingan Privat Keluarga.',
        'filter-all': 'Semua',
        'filter-talaqqi': 'Halaqah & Talaqqi',
        'filter-private': 'Kunjungan Privat',
        'filter-majlis': 'Dokumentasi Majlis',
        'btn-load-more': 'Lihat Foto Lainnya',
        'curr-subtitle': 'Program Studi',
        'curr-title': '4-Pillar Interactive Curriculum Vault',
        'curr-desc': 'Navigasikan kurikulum 1 tahun terintegrasi kami yang dirancang khusus untuk eksekutif, profesional, dan pemuda visioner.',
        'p1-name': 'Precision Recitation',
        'p2-name': 'Historical Contextualization',
        'p3-name': 'Kajian Study Fiqih Ibadah',
        'p4-name': 'Kajian Study Tauhid',
        'detail-right-syllabus': 'Silabus Kajian Utama',
        
        // Roadmap
        'road-subtitle': 'Term Akademik',
        'road-title': 'Peta Jalan Akademik 1 Tahun',
        'road-desc': 'Ikhtisar target progresif terukur dari semester awal hingga kelulusan resmi sidang Capstone Project.',
        't1-duration': 'Bulan 1–3',
        't1-title': 'Foundational Fluency & Worldview',
        't1-d1': 'Makhraj & Sifat Huruf',
        't1-d2': 'Otentisitas & Kodifikasi Wahyu',
        't1-d3': 'Tafsir QS Al-Fatihah & Ayat Kursi',
        't1-out': 'Membaca presisi tanpa terbata-bata & presentasi ilmiah mushaf.',
        
        't2-duration': 'Bulan 4–6',
        't2-title': 'Historical Context & Critical Thinking',
        't2-d1': 'Waqaf-Ibtida\' Sintaksis',
        't2-d2': 'Asbabul Nuzul & Makki-Madani',
        't2-d3': 'Tafsir Analitik Ayat Kauniyah',
        't2-out': 'Mampu membedah konteks historis ayat ke problematika era modern.',
        
        't3-duration': 'Bulan 7–9',
        't3-title': 'Practical Jurisprudence & Worship Fiqh',
        't3-d1': 'Fiqih Thoharoh (Hukum Bersuci & Pembersihan Najis)',
        't3-d2': 'Fiqih Sholat (Rukun, Syarat Sah, & Praktik Sholat)',
        't3-d3': 'Fiqih Ibadah Amaliah Lainnya (Puasa & Zakat)',
        't3-out': 'Keabsahan & ketepatan ibadah harian berstandar madzhab mutabar.',
        
        't4-duration': 'Bulan 10–12',
        't4-title': 'Islamic Creed & Studies of Tawhid',
        't4-d1': 'Sifat Wajib bagi Allah (Pilar Ketuhanan)',
        't4-d2': 'Sifat Mustahil & Sifat Jaiz bagi Allah',
        't4-d3': 'Capstone: Pengokohan Tauhid & Ma\'rifatullah',
        't4-out': 'Kelulusan & Syahadah: Pemahaman akidah bersih & pertahanan keimanan.',
        'road-target-label': 'LUARAN TERUKUR',
        
        // VIP Concierge
        'mem-subtitle': 'Eksklusivitas Layanan',
        'mem-title': 'Membership Tracks & VIP Concierge',
        'mem-desc': 'Nikmati pembelajaran personal kelas dunia dengan standardisasi tinggi untuk kenyamanan dan privasi Anda.',
        't1-sub': 'Murid datang ke Majlis Ta\'lim beberapa kali sepekan.',
        't1-f1': 'Pembelajaran Terstruktur 4 Pilar',
        't1-f2': 'Akses Portal Santri Secure',
        't1-f3': 'Kelas Pembahasan Interaktif Mingguan',
        't1-f4': 'E-Certificate Resmi Keikutsertaan',
        
        't2-sub': 'Guru datang ke rumah, jadwal fleksibel, 1 jam efektif.',
        't2-f1': 'Pendampingan 1-on-1 bersama Asatidz',
        't2-f2': 'Penjadwalan Waktu yang Fleksibel',
        't2-f3': 'Bimbingan Terfokus Hasil Maksimal',
        't2-f4': 'Akses VIP Portal & Talaqqi Personal',
        't2-f5': 'Prioritas Ujian Sanad & Kelulusan',
        
        't3-sub': 'Guru datang ke rumah, jadwal disesuaikan, 1 jam efektif.',
        't3-f1': 'Program Talaqqi Kustom Seluruh Keluarga',
        't3-f2': 'Kunjungan Asatidz / Private Sesi Online',
        't3-f3': 'Pembinaan Karakter Keluarga Islami',
        't3-f4': 'Fleksibilitas Waktu & Enkripsi Portal',
        
        'btn-join-tier': 'Pilih Paket',
        'btn-book-concierge': 'Pesan Privat',
        'concierge-badge': 'VIP Concierge Engine',
        'concierge-form-title': 'Pemesanan Asatidz Privat ke Rumah',
        'lbl-tier': 'PILIH TIER MEMBERSHIP',
        'lbl-name': 'NAMA LENGKAP',
        'lbl-notes': 'KEBUTUHAN KHUSUS / WAKTU',
        'btn-book-now': 'Pesan Jadwal Via WhatsApp',
        'lbl-select-date': 'PILIH TANGGAL KUNJUNGAN',
        'concierge-disclaimer': '*Setiap pemesanan akan dienkripsi end-to-end dan dikonfirmasi langsung oleh personal concierge.',
        
        // Endowment
        'endow-subtitle': 'Keberlanjutan Peradaban',
        'endow-title': 'Dzulqornain Endowment Vault',
        'endow-desc': 'Saluran kedermawanan premium untuk membiayai beasiswa santri berprestasi, sarana prasarana, serta operasional dakwah.',
        'vault-tag': 'Dzulqornain Waqf Fund',
        'vault-title-txt': 'Membangun Menara Ilmu Abadi',
        'vault-desc-txt': 'Kontribusi kedermawanan dan infaq Anda dialokasikan langsung untuk mendukung proses belajar mengajar, operasional pengajar, serta keberlangsungan dakwah Islam secara mandiri.',
        'bank-title': 'Salurkan Infaq/shodaqoh terbaik anda ke :',
        'btn-copy': 'Salin Nomor Rekening',
        
        // Registration Form
        'form-subtitle': 'Pendaftaran Calon Santri',
        'form-title': 'Multi-Tier Dynamic Application Form',
        'form-desc': 'Isi aplikasi Anda secara terstruktur. Algoritma penilaian kami akan memetakan penempatan program yang paling sesuai untuk Anda.',
        'reg-hdr-title': 'Gerbang Pendidikan Pemimpin Intelektual',
        'reg-hdr-sub': 'Evaluasi profil mandiri untuk penentuan kelas & tier',
        'step1-lbl': 'BIODATA',
        'step2-lbl': 'PROFILING',
        'step3-lbl': 'PENEMPATAN',
        'lbl-full-name': 'NAMA LENGKAP',
        'lbl-email-addr': 'ALAMAT EMAIL',
        'lbl-phone-num': 'NOMOR WHATSAPP',
        'lbl-age-group': 'KELOMPOK USIA',
        'prof-q': 'PILIH PERNYATAAN YANG PALING SESUAI DENGAN KONDISI BACAAN ANDA:',
        'prof-opt1-title': 'Belum Lancar / Masih Terbata-bata',
        'prof-opt1-desc': 'Memerlukan pemantapan makhraj huruf dasar dan ketukan tajwid agar teratur.',
        'prof-opt2-title': 'Sudah Lancar, Ingin Memperbaiki Tajwid & Irama',
        'prof-opt2-desc': 'Memahami dasar-dasar tajwid tetapi memerlukan bimbingan teknik waqaf-ibtida\' bersanad.',
        'prof-opt3-title': 'Lancar & Tertarik pada Studi Tafsir Serta Kepemimpinan',
        'prof-opt3-desc': 'Ingin mendalami hermeneutika sejarah, analisis balaghah, dan penerapan etis ke ranah profesional.',
        'res-badge': 'REKOMENDASI PENEMPATAN PROGRAM',
        'res-guarantee': 'Pendaftaran Anda Telah Terverifikasi Aman',
        'btn-back': 'KEMBALI',
        'btn-continue': 'LANJUTKAN',
        
        // Student Portal
        'port-subtitle': 'Ekosistem Akademik',
        'port-title': 'High-Security Student Portal Ecosystem',
        'port-desc': 'Sekilas tampilan portal interaktif santri MT Dzulqornain untuk memantau talaqqi, tugas capstone, dan rekaman materi flipped learning.',
        'portal-secure-badge': 'PORTAL AKTIF SECURE',
        'user-id': 'Santri ID: #MTD-2026-9812',
        'port-m1': 'Ringkasan',
        'port-m2': 'Jadwal Talaqqi',
        'port-m3': 'Flipped Materials',
        'port-m4': 'Sidang Capstone',
        'port-welcome-hdr': 'Ahlan wa Sahlan, Akhi Ahmad!',
        'port-welcome-sub': 'Mulai sesi talaqqi makhraj bersanad Anda pekan ini. Persentase penyelesaian modul Anda sangat baik.',
        'port-w1-title': 'Progress Kelancaran Tartil',
        'port-w1-lbl': 'Kelayakan Sanad',
        'port-w1-desc': 'Sifat huruf \'Hams\' dan \'Rikhwah\' Anda telah dikonfirmasi stabil oleh Asatidz.',
        'port-w2-title': 'Sesi Talaqqi Terdekat',
        'port-w2-datetime': 'Kamis, 20 Agustus 2026',
        'port-w2-time': 'Jam: 20:00 WIB (Midnight Executive Session)'
    },
    'EN': {
        // Nav & Header
        'nav-logo': 'MT DZULQORNAIN',
        'nav-sub': 'Center for Quranic Literacy',
        'link-home': 'Home',
        'link-philosophy': 'Philosophy',
        'link-verses': 'Revelation Light',
        'link-curriculum': 'Curriculum',
        'link-concierge': 'VIP Concierge',
        'link-endowment': 'Endowment',
        'btn-register-now': 'Register Now',
        
        // Hero
        'hero-title-html': 'Do Not Wait for Free Time <br><span>To Study the Qur\'an</span>',
        'hero-tagline-txt': '"But rather make time to study it so that you may obtain happiness in this world and the hereafter"',
        'btn-hero-cta1': 'Private VIP Consultation',
        'btn-hero-cta2': 'Explore 1-Year Curriculum',
        
        // Philosophy
        'phil-subtitle': 'Philosophy & Archetype',
        'phil-title': 'The Eternal Legacy of Dzulqarnain',
        'phil-desc': 'Synthesizing the majesty of classical revelation with future science to build resilient leadership.',
        'phil-c1-title': 'Al-Walad Ash-Shalih (The Virtuous Offspring)',
        'phil-c1-desc': 'Forging generations with noble character, whose sincere devotion and continuous prayers serve as eternal spiritual beacons across eras.',
        'phil-c2-title': 'Al-‘Ilm An-Nafi’ (Impactful Knowledge)',
        'phil-c2-desc': 'Transforming the integration of revelation and modern science into sustainable insights that continuously enlighten human intellect.',
        'phil-c3-title': 'Ash-Shadaqah Al-Jariyah (Perpetual Legacy)',
        'phil-c3-desc': 'Building institutions, governance systems, and sustainable infrastructure whose welfare benefits and everlasting impact support generations.',
        
        // Quranic Verses Section (Cahaya Wahyu)
        'verses-subtitle': 'Qur\'anic Light & Warnings',
        'verses-title': 'The Light of Revelation Guiding Life',
        'verses-desc': 'Ponder upon the sacred verses of the Qur\'an and Prophet\'s Sunnah that illuminate the heart and warn us not to waste our earthly life.',
        'v-bliss-hdr': 'Glory & Prosperity of Learning',
        'v-bliss-1': '"Indeed, those who recite the Book of Allah, establish prayer, and spend out of what We have provided them, secretly and publicly, can expect a transaction that will never perish."',
        'v-bliss-2': '"The best of you is he who learns the Qur\'an and teaches it to others."',
        'v-warn-hdr': 'Warning & Defeat of Turning Away',
        'v-warn-1': '"And whoever turns away from My remembrance (the Qur\'an) - indeed, he will have a narrow life, and We will gather him on the Day of Resurrection blind."',
        'v-warn-2': '"And the Messenger (Muhammad) has said, \'O my Lord, indeed my people have taken this Qur\'an as something discarded.\'"',
        'v-warn-3': '"Indeed, Allah elevates nations with this Book (the Qur\'an) and debases others with it (by neglecting it)."',

        // Founder
        'link-founder': 'Founder',
        'founder-subtitle': 'Founder\'s Biography',
        'f-bio-t1-title': 'Traditional Islamic Boarding Education (2000-2006)',
        'f-bio-t1-desc': 'Alumnus of Sunanul Huda Islamic Boarding School Sukabumi (MTs to MA levels). Extensively studied classical Islamic fields (Fan Ilmu) including Tajweed, Tahsin, Fiqh, Tawhid, Tafsir, Nahwu, Shorof, and Arabic grammar.',
        'f-bio-t2-title': 'Academic Studies in Sharia Law & Economics (2006-2010)',
        'f-bio-t2-desc': 'Acquired higher education at UIN Syarif Hidayatullah Jakarta, Faculty of Sharia and Law, majoring in Islamic Economics (Islamic Banking concentration) as a DIPA scholarship recipient from the Ministry of Religious Affairs RI.',
        'f-bio-t3-title': 'Professional Sharia Banking Career (12 Years)',
        'f-bio-t3-desc': 'Spent 12 years as a professional Sharia Banker at Bank Syariah Indonesia (ex Legacy Bank Syariah Mandiri), holding multiple roles at branches and headquarters to practice, defend, and advance the Sharia Economic ecosystem in Indonesia and globally.',
        'f-bio-t4-title': 'Current Focus & Dedicated Propagation',
        'f-bio-t4-desc': 'Currently dedicating full focus to religious propagation, education, and social contributions for the youth and general public by establishing Majlis Ta\'lim Dzulqornain. Aspires to build a perpetual charitable legacy (Amal Jariyah) for all supporting Islam in the end times.',
        'f-closing-quote': '"Quranic education and sharia literacy are not mere options for leisure, but the main axis of life to secure worldly and otherworldly salvation. Let us dedicate our prime time to align with revelation, fostering a generation that is resilient, intellectually sharp, and noble in character."',
        
        // Curriculum Explorer
        'link-gallery': 'Gallery',
        'gallery-subtitle': 'Real Documentation',
        'gallery-title': 'Majlis Ta\'lim Activity Gallery',
        'gallery-desc': 'True daily evidence of Halaqah, certified Talaqqi, mass lectures, and private Family mentorship.',
        'filter-all': 'All',
        'filter-talaqqi': 'Halaqah & Talaqqi',
        'filter-private': 'Private Visits',
        'filter-majlis': 'Majlis Records',
        'btn-load-more': 'Load More Photos',
        'curr-subtitle': 'Programs of Study',
        'curr-title': '4-Pillar Interactive Curriculum Vault',
        'curr-desc': 'Navigate our integrated 1-year academic roadmap designed specifically for executives, professionals, and visionary youth.',
        'p1-name': 'Precision Recitation',
        'p2-name': 'Historical Contextualization',
        'p3-name': 'Fiqh of Worship',
        'p4-name': 'Study of Tawhid',
        'detail-right-syllabus': 'Core Study Syllabus',
        
        // Roadmap
        'road-subtitle': 'Academic Terms',
        'road-title': '1-Year Academic Roadmap',
        'road-desc': 'Overview of progressive measurable targets from foundational term to the final Capstone Project defense.',
        't1-duration': 'Month 1–3',
        't1-title': 'Foundational Fluency & Worldview',
        't1-d1': 'Articulation (Makhraj) & Phonetics',
        't1-d2': 'Authenticity & Codification of Revelation',
        't1-d3': 'Tafsir of QS Al-Fatihah & Ayat Al-Kursi',
        't1-out': 'Precise reading without hesitation & academic defense of mushaf authenticity.',
        
        't2-duration': 'Month 4–6',
        't2-title': 'Historical Context & Critical Thinking',
        't2-d1': 'Syntactic Waqf-Ibtida\' (Punctuation)',
        't2-d2': 'Asbabul Nuzul & Makki-Madani Maps',
        't2-d3': 'Analytical Tafsir of Scientific Verses',
        't2-out': 'Deconstruct historical contexts of verses to answer modern ethical dilemmas.',
        
        't3-duration': 'Month 7–9',
        't3-title': 'Practical Jurisprudence & Worship Fiqh',
        't3-d1': 'Fiqh of Purification (Thaharah & Cleansing Rules)',
        't3-d2': 'Fiqh of Prayer (Pillars, Pre-requisites & Practice)',
        't3-d3': 'Fiqh of Other Core Deeds (Fasting & Alms/Zakat)',
        't3-out': 'Validity and precision of daily worship rituals matching established Fiqh schools.',
        
        't4-duration': 'Month 10–12',
        't4-title': 'Islamic Creed & Studies of Tawhid',
        't4-d1': 'Necessary Attributes of Allah (20 Sifat Wajib)',
        't4-d2': 'Impossible & Permissible Attributes of Allah',
        't4-d3': 'Capstone: Strengthening Creed & Knowing Allah (Ma\'rifatullah)',
        't4-out': 'Graduation & Certification: Sound aqidah framework defense before the board.',
        'road-target-label': 'MEASURABLE OUTCOME',
        
        // VIP Concierge
        'mem-subtitle': 'Exclusive Offerings',
        'mem-title': 'Membership Tracks & VIP Concierge',
        'mem-desc': 'Indulge in world-class personalized education matching the highest standards of privacy and comfort.',
        't1-sub': 'Students attend the Majlis Ta\'lim several times a week.',
        't1-f1': 'Structured 4-Pillar Learning',
        't1-f2': 'Secure Student Portal Access',
        't1-f3': 'Weekly Interactive Review Session',
        't1-f4': 'Official Certificate of Participation',
        
        't2-sub': 'Teacher visits residence, flexible schedule, 1 hour effective learning.',
        't2-f1': '1-on-1 Mentorship with Scholar',
        't2-f2': 'Flexible Rescheduling Rights',
        't2-f3': 'Focused Study for Best Results',
        't2-f4': 'VIP Portal & Personal Session Recordings',
        't2-f5': 'Priority Sanad Examination & Graduation',
        
        't3-sub': 'Teacher visits residence, tailored schedule, 1 hour effective learning.',
        't3-f1': 'Custom Talaqqi Program for Family Members',
        't3-f2': 'Home Scholar Visits / Private Online Sessions',
        't3-f3': 'Integrated Islamic Family Character Development',
        't3-f4': 'Flexible Time Options & Encrypted Family Portal',
        
        'btn-join-tier': 'Select Track',
        'btn-book-concierge': 'Book Concierge',
        'concierge-badge': 'VIP Concierge Engine',
        'concierge-form-title': 'Book Dedicated Scholars to Residence',
        'lbl-tier': 'SELECT MEMBERSHIP TIER',
        'lbl-name': 'FULL NAME',
        'lbl-notes': 'SPECIAL PREFERENCES / TIME',
        'btn-book-now': 'Book Schedule via WhatsApp',
        'lbl-select-date': 'SELECT VISIT DATE',
        'concierge-disclaimer': '*Every booking request is end-to-end encrypted and confirmed by your personal concierge.',
        
        // Endowment
        'endow-subtitle': 'Civilization Sustainability',
        'endow-title': 'Dzulqornain Endowment Vault',
        'endow-desc': 'Premium philanthropy pipeline sponsoring student scholarships, facility maintenance, and teaching operations.',
        'vault-tag': 'Dzulqornain Waqf Fund',
        'vault-title-txt': 'Erecting the Eternal Tower of Knowledge',
        'vault-desc-txt': 'Your generous contributions and infaq are directly allocated to support teaching, instructors\' operations, and the independence of Islamic learning.',
        'bank-title': 'Send your best Infaq/shodaqoh to:',
        'btn-copy': 'Copy Account Number',
        
        // Registration Form
        'form-subtitle': 'Student Recruitment',
        'form-title': 'Multi-Tier Dynamic Application Form',
        'form-desc': 'Submit your structured application. Our profiling system will automatically align you with the ideal academic track.',
        'reg-hdr-title': 'Intelektual Leadership Portal',
        'reg-hdr-sub': 'Self-profiling assessment for tier and program allocation',
        'step1-lbl': 'BIODATA',
        'step2-lbl': 'PROFILING',
        'step3-lbl': 'PLACEMENT',
        'lbl-full-name': 'FULL NAME',
        'lbl-email-addr': 'EMAIL ADDRESS',
        'lbl-phone-num': 'WHATSAPP NUMBER',
        'lbl-age-group': 'AGE CATEGORY',
        'prof-q': 'CHOOSE THE STATEMENT THAT BEST DESCRIBES YOUR CURRENT RECITATION STATE:',
        'prof-opt1-title': 'Not Fluent / Hesitant Reader',
        'prof-opt1-desc': 'Requires foundation level training on letters, phonetics, and rhythmic rules.',
        'prof-opt2-title': 'Fluent, Seeking Articulation & Cadence Fine-Tuning',
        'prof-opt2-desc': 'Familiar with basic tajwid but requires training on proper punctuation and sanad standard reading.',
        'prof-opt3-title': 'Fluent Reader, Seeking Tafsir & Strategic Leadership Study',
        'prof-opt3-desc': 'Interested in historical context deconstruction, balaghah (rhetoric), and ethical applications in professional governance.',
        'res-badge': 'RECOMMENDED PROGRAM PLACEMENT',
        'res-guarantee': 'Your Application Securely Verified',
        'btn-back': 'BACK',
        'btn-continue': 'CONTINUE',
        
        // Student Portal
        'port-subtitle': 'Academic Ecosystem',
        'port-title': 'High-Security Student Portal Ecosystem',
        'port-desc': 'An inside look at our student portal. Track your private sessions, access flipped learning libraries, and submit papers.',
        'portal-secure-badge': 'SECURE PORTAL ONLINE',
        'user-id': 'Student ID: #MTD-2026-9812',
        'port-m1': 'Summary',
        'port-m2': 'Talaqqi Schedule',
        'port-m3': 'Flipped Materials',
        'port-m4': 'Capstone Defense',
        'port-welcome-hdr': 'Ahlan wa Sahlan, Brother Ahmad!',
        'port-welcome-sub': 'Begin your certified talaqqi session this week. Your module completion index is outstanding.',
        'port-w1-title': 'Tartil Articulation Progress',
        'port-w1-lbl': 'Sanad Match Index',
        'port-w1-desc': 'Phonetic traits \'Hams\' and \'Rikhwah\' confirmed stable by your mentor.',
        'port-w2-title': 'Next Scheduled Session',
        'port-w2-datetime': 'Thursday, August 20, 2026',
        'port-w2-time': 'Time: 20:00 WIB (Midnight Executive Session)'
    }
};

function initTranslation() {
    const langBtn = document.getElementById('lang-toggle-btn');
    
    langBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ID' ? 'EN' : 'ID';
        langBtn.textContent = currentLanguage === 'ID' ? 'EN' : 'ID';
        applyTranslations();
    });
}

function applyTranslations() {
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    const dictionary = translations[currentLanguage];
    
    elementsToTranslate.forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (dictionary[key]) {
            if (key === 'hero-title-html') {
                elem.innerHTML = dictionary[key];
            } else {
                elem.textContent = dictionary[key];
            }
        }
    });

    // Re-trigger dynamic elements if active
    updateCurriculumPillarContent();
    updateRegistrationPlacementMessage();
}

/* ==========================================
   4-PILLAR CURRICULUM EXPLORER (F-01)
   ========================================== */
const curriculumData = {
    '1': {
        ID: {
            tag: 'Tahsin & Tajweed Standard Sanad',
            title: 'Precision Recitation',
            desc: 'Standarisasi tartil & waqaf-ibtida\' bersanad mulia. Mengembangkan kelancaran membaca mandiri dengan visualisasi makhraj digital modern.',
            target: 'Target: Kelancaran membaca rasm Utsmani secara mandiri.',
            syllabus: [
                { id: '1', title: 'Makhraj & Sifat Huruf', p: 'Melatih letak keluarnya huruf hijaiyah dan sifat fonetiknya secara presisi.' },
                { id: '2', title: 'Tajwid & Waqaf-Ibtida\'', p: 'Hukum bacaan, teknik jeda (waqaf), dan memulai kembali bacaan (ibtida\') yang benar.' },
                { id: '3', title: 'Visualisasi Audio Spektrum', p: 'Analisis frekuensi audio makhraj santri untuk validasi kelancaran digital.' }
            ]
        },
        EN: {
            tag: 'Standard Sanad Tahsin & Tajweed',
            title: 'Precision Recitation',
            desc: 'Standardized reading styles and pause-restart techniques under prestigious Sanad chains. Develop independent reading with digital phonetic visualization.',
            target: 'Target: Independent fluency in standard Rasm Uthmani Mushaf.',
            syllabus: [
                { id: '1', title: 'Articulation & Phonetics', p: 'Training on precise origin of arabic letters and their physical sonic properties.' },
                { id: '2', title: 'Tajweed Rules & Waqf-Ibtida\'', p: 'Practical rules, breathing techniques, and proper pausing during recitation.' },
                { id: '3', title: 'Digital Audio Spectrum Analysis', p: 'Visual feedback tools to help students inspect and correct letter traits.' }
            ]
        }
    },
    '2': {
        ID: {
            tag: 'Asbabul Nuzul & Makki-Madani Maps',
            title: 'Historical Contextualization',
            desc: 'Rekonstruksi sosio-historis turunnya ayat. Melakukan penelusuran orisinalitas wahyu serta dialektika peradaban klasik & modern.',
            target: 'Target: Analisis komparatif kaidah historis versus universalitas ayat.',
            syllabus: [
                { id: '1', title: 'Pemetaan Makkiyah & Madaniyah', p: 'Memahami evolusi dakwah di fase Mekkah dan perancangan hukum di Madinah.' },
                { id: '2', title: 'Dialektika Peradaban Klasik', p: 'Reaksi teks wahyu terhadap polemik kekaisaran Romawi, Persia, dan suku Arab.' },
                { id: '3', title: 'Kontekstualisasi Sejarah', p: 'Menerapkan esensi asbabul nuzul ke problematika hukum dan sosial kontemporer.' }
            ]
        },
        EN: {
            tag: 'Historical Occasions & Spatial Maps',
            title: 'Historical Contextualization',
            desc: 'Socio-historical reconstruction of Quranic revelation. Explore textual dialectics against ancient civilizations and classical hermeneutics.',
            target: 'Target: Comparative analysis of specific historical events versus universal application.',
            syllabus: [
                { id: '1', title: 'Meccan & Medinan Mapping', p: 'Understanding the shift from doctrinal foundations to state and legislative planning.' },
                { id: '2', title: 'Ancient Geopolitics & Dialogue', p: 'Analyzing how revelation addressed Persian, Roman, and Abrahamic communities.' },
                { id: '3', title: 'Applied Historical Context', p: 'Bridging historical legal contexts to modern socio-cultural and administrative dynamics.' }
            ]
        }
    },
    '3': {
        ID: {
            tag: 'Standardisasi Hukum Amaliah Islam',
            title: 'Kajian Study Fiqih Ibadah',
            desc: 'Mendalami aturan syariat Islam yang mengatur hubungan vertikal hamba dengan Sang Pencipta secara benar, sah, dan sesuai dengan madzhab fiqih yang mutabar.',
            target: 'Target: Pemahaman komprehensif mengenai keabsahan ibadah harian.',
            syllabus: [
                { id: '1', title: 'Fiqih Thoharoh ( Bersuci )', p: 'Tata cara wudhu, tayamum, mandi wajib, serta pembersihan berbagai jenis najis secara syar\'i.' },
                { id: '2', title: 'Fiqih Sholat', p: 'Rukun, syarat sah, pembatal sholat, khusyuk dalam ibadah, serta sholat sunnah dan jama\'ah.' },
                { id: '3', title: 'Fiqih ibadah lainnya', p: 'Panduan praktis puasa, zakat fitrah & maal, manasik haji, serta pengantar muamalah dasar.' }
            ]
        },
        EN: {
            tag: 'Standardization of Practical Islamic Law',
            title: 'Study of Fiqh of Worship',
            desc: 'Diving into the laws of Islamic jurisprudence governing the vertical connection between the servant and the Creator, ensuring validity according to established schools of thought.',
            target: 'Target: Comprehensive understanding of the validity of daily worship rituals.',
            syllabus: [
                { id: '1', title: 'Fiqh of Purification (Thaharah)', p: 'Islamic rules on ablution, dry ablution (tayammum), ritual bathing, and clearing physical impurities.' },
                { id: '2', title: 'Fiqh of Prayer (Salah)', p: 'Core pillars, prerequisites, nullifiers, mindfulness (khusyu\'), congregational, and voluntary prayers.' },
                { id: '3', title: 'Fiqh of Other Worship Elements', p: 'Practical guidelines on fasting, charity (zakat), pilgrimage (hajj), and basic transactional ethics.' }
            ]
        }
    },
    '4': {
        ID: {
            tag: 'Pilar Akidah & Kemurnian Tauhid',
            title: 'Kajian Study Tauhid',
            desc: 'Mempelajari pondasi keimanan Islam (akidah) untuk mengenal Allah secara mendalam, menjauhi syirik, dan menanamkan tauhid uluhiyah, rububiyah, serta asma wa shifat.',
            target: 'Target: Kemurnian akidah dan pengenalan ma\'rifatullah yang kokoh.',
            syllabus: [
                { id: '1', title: 'Sifat-sifat Wajib bagi Alloh', p: '20 Sifat wajib yang mutlak dimiliki oleh Allah sebagai Pencipta alam semesta (seperti Wujud, Qidam, Baqa).' },
                { id: '2', title: 'Sifat-sifat Mustahil bagi Alloh', p: 'Sifat-sifat yang mustahil ada pada keagungan Allah (seperti Fana, \'Adam, Huduts) yang mensucikan-Nya dari kekurangan.' },
                { id: '3', title: 'Sifat-sifat Jaiz bagi Alloh', p: 'Kewenangan mutlak Allah untuk menciptakan atau tidak menciptakan segala sesuatu sesuai kehendak bebas-Nya.' }
            ]
        },
        EN: {
            tag: 'Pillar of Islamic Creed & Pure Monotheism',
            title: 'Study of Tawhid (Islamic Creed)',
            desc: 'Studying the foundations of Islamic faith to know Allah deeply, protect against association of partners (shirk), and cement absolute monotheism in daily life.',
            target: 'Target: Purity of creed and solid cognitive recognition of Allah (Ma\'rifatullah).',
            syllabus: [
                { id: '1', title: 'Necessary Attributes of Allah', p: 'The essential attributes that must belong to Allah as Creator, such as Existence, Pre-eternity, and Permanence.' },
                { id: '2', title: 'Impossible Attributes of Allah', p: 'Attributes that are logically impossible for Allah (such as mortality, non-existence), elevating Him above all flaws.' },
                { id: '3', title: 'Permissible Attributes of Allah', p: 'Allah\'s absolute sovereign freedom to create, sustain, or leave any possibility according to His free will.' }
            ]
        }
    }
};

let activePillar = '1';

function initCurriculumExplorer() {
    const tabsContainer = document.getElementById('pillar-tabs-container');
    if (!tabsContainer) return;
    const tabs = tabsContainer.querySelectorAll('.pillar-tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activePillar = tab.getAttribute('data-pillar');
            updateCurriculumPillarContent();
        });
    });
}

function updateCurriculumPillarContent() {
    const data = curriculumData[activePillar][currentLanguage];
    const tagEl = document.getElementById('curr-tag');
    if (!tagEl) return;
    
    tagEl.textContent = data.tag;
    document.getElementById('curr-title').textContent = data.title;
    document.getElementById('curr-desc').textContent = data.desc;
    document.getElementById('curr-target-text').textContent = data.target;

    const syllabusList = document.getElementById('curr-syllabus-list');
    syllabusList.innerHTML = ''; // Clear

    data.syllabus.forEach(item => {
        const li = document.createElement('li');
        li.className = 'syllabus-item';
        li.innerHTML = `
            <div class="syllabus-bullet">${item.id}</div>
            <div class="syllabus-item-content">
                <h5>${item.title}</h5>
                <p>${item.p}</p>
            </div>
        `;
        syllabusList.appendChild(li);
    });
}

/* ==========================================
   VIP CONCIERGE CALENDAR ENGINE (F-02)
   ========================================== */
let selectedDayElement = null;

function initConciergeCalendar() {
    const calendarGrid = document.getElementById('calendar-grid-days');
    if (!calendarGrid) return;
    const submitBtn = document.getElementById('btn-submit-concierge');

    // Generating dates for August 2026
    for(let i=1; i<=5; i++) {
        const offsetCell = document.createElement('span');
        offsetCell.className = 'calendar-day disabled';
        calendarGrid.appendChild(offsetCell);
    }

    for (let day = 1; day <= 31; day++) {
        const dayCell = document.createElement('span');
        dayCell.className = 'calendar-day';
        dayCell.textContent = day;

        if (day < 16) {
            dayCell.classList.add('disabled');
        }

        dayCell.addEventListener('click', () => {
            if (selectedDayElement) {
                selectedDayElement.classList.remove('active');
            }
            dayCell.classList.add('active');
            selectedDayElement = dayCell;
        });

        calendarGrid.appendChild(dayCell);
    }

    // Submit handler
    submitBtn.addEventListener('click', () => {
        const tier = document.getElementById('concierge-tier').value;
        const name = document.getElementById('concierge-name').value;
        const notes = document.getElementById('concierge-notes').value;

        if (!name) {
            alert(currentLanguage === 'ID' ? 'Silakan masukkan nama lengkap Anda.' : 'Please enter your full name.');
            return;
        }

        if (!selectedDayElement) {
            alert(currentLanguage === 'ID' ? 'Silakan pilih tanggal kunjungan pada kalender.' : 'Please select a visit date on the calendar.');
            return;
        }

        const chosenDay = selectedDayElement.textContent;
        
        // Mocking WhatsApp Gateway payload
        const msg = currentLanguage === 'ID' 
            ? `Assalamu'alaikum Concierge MT Dzulqornain,\n\nSaya ingin berkonsultasi privat/memesan Asatidz ke rumah.\nDetail Pemesanan:\n- Nama: ${name}\n- Paket: ${tier}\n- Tanggal Kunjungan: ${chosenDay} Agustus 2026\n- Catatan: ${notes || '-'}\n\nMohon dikonfirmasi jadwalnya. Terima kasih.`
            : `Assalamu'alaikum MT Dzulqornain Concierge,\n\nI would like to book a private home scholar visit.\nDetails:\n- Name: ${name}\n- Tier: ${tier}\n- Preferred Date: August ${chosenDay}, 2026\n- Notes: ${notes || '-'}\n\nPlease confirm availability. Thank you.`;

        const waUrl = `https://wa.me/6282299278870?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
    });
}

/* ==========================================
   DZULQORNAIN ENDOWMENT VAULT (PHILANTHROPY)
   ========================================== */
function initEndowmentVault() {
    const copyBtn = document.getElementById('btn-copy-rekening');
    if (!copyBtn) return;
    
    copyBtn.addEventListener('click', () => {
        const accountNumber = copyBtn.getAttribute('data-account');
        navigator.clipboard.writeText(accountNumber).then(() => {
            const copyTextSpan = copyBtn.querySelector('[data-key="btn-copy"]');
            const originalText = copyTextSpan ? copyTextSpan.textContent : 'Salin Nomor Rekening';
            
            // Set success UI state
            if (copyTextSpan) copyTextSpan.textContent = currentLanguage === 'ID' ? 'Tersalin!' : 'Copied!';
            copyBtn.style.backgroundColor = '#10B981'; // Emerald Green
            copyBtn.style.borderColor = '#10B981';
            
            setTimeout(() => {
                if (copyTextSpan) copyTextSpan.textContent = originalText;
                copyBtn.style.backgroundColor = '';
                copyBtn.style.borderColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy account number: ', err);
        });
    });
}

/* ==========================================
   MULTI-TIER DYNAMIC REGISTRATION FORM (F-04)
   ========================================== */
let formCurrentStep = 1;

function initApplicationForm() {
    const nextBtn = document.getElementById('btn-form-next');
    if (!nextBtn) return;
    const prevBtn = document.getElementById('btn-form-prev');
    const stepPanes = document.querySelectorAll('.form-step-pane');
    const stepIndicators = document.querySelectorAll('.form-steps-indicator .indicator-step');

    function setStep(step) {
        formCurrentStep = step;
        
        // Show active pane
        stepPanes.forEach((pane, idx) => {
            if (idx + 1 === formCurrentStep) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });

        // Set indicator highlight
        stepIndicators.forEach((ind, idx) => {
            const stepNum = idx + 1;
            ind.classList.remove('active', 'completed');
            
            if (stepNum === formCurrentStep) {
                ind.classList.add('active');
            } else if (stepNum < formCurrentStep) {
                ind.classList.add('completed');
            }
        });

        // Show/hide buttons
        if (formCurrentStep === 1) {
            prevBtn.style.visibility = 'hidden';
            nextBtn.textContent = currentLanguage === 'ID' ? 'LANJUTKAN' : 'CONTINUE';
        } else if (formCurrentStep === 2) {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = currentLanguage === 'ID' ? 'LANJUTKAN' : 'CONTINUE';
        } else if (formCurrentStep === 3) {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = currentLanguage === 'ID' ? 'KIRIM PENDAFTARAN' : 'SUBMIT APPLICATION';
            calculatePlacementResult();
        }
    }

    nextBtn.addEventListener('click', () => {
        if (formCurrentStep === 1) {
            // Validation step 1
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const phone = document.getElementById('reg-phone').value;
            
            if (!name || !email || !phone) {
                alert(currentLanguage === 'ID' ? 'Silakan lengkapi semua biodata Anda.' : 'Please fill in all personal details.');
                return;
            }
            setStep(2);
        } else if (formCurrentStep === 2) {
            setStep(3);
        } else if (formCurrentStep === 3) {
            // Submit form
            const name = document.getElementById('reg-name').value;
            const recVal = document.querySelector('input[name="profiling-recitation"]:checked').value;
            const finalPillar = getRecommendedPillar(recVal);

            const msg = currentLanguage === 'ID'
                ? `Assalamu'alaikum Admin MT Dzulqornain,\n\nSaya telah melengkapi pendaftaran online.\nData Pendaftar:\n- Nama: ${name}\n- Rekomendasi Kelas: ${finalPillar}\n\nMohon petunjuk pendaftaran lanjutan.`
                : `Assalamu'alaikum Admin MT Dzulqornain,\n\nI have completed the online application profiling.\nDetails:\n- Name: ${name}\n- Rec. Placement: ${finalPillar}\n\nPlease guide me to the next registration step.`;
            
            const waUrl = `https://wa.me/6282299278870?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
            alert(currentLanguage === 'ID' ? 'Terima kasih, pendaftaran Anda terkirim secara aman.' : 'Thank you, your registration has been securely transmitted.');
            
            // Reset form
            document.getElementById('dynamic-application-form').reset();
            setStep(1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (formCurrentStep > 1) {
            setStep(formCurrentStep - 1);
        }
    });
}

function getRecommendedPillar(recitationValue) {
    if (recitationValue === 'beginner') {
        return 'Pillar 1: Precision Recitation (Tahsin)';
    } else if (recitationValue === 'intermediate') {
        return 'Pillar 2: Historical Contextualization (Asbabul Nuzul)';
    } else {
        return 'Pillar 3 & 4: Cognitive Tafsir & Leadership Ethics (Tadabbur)';
    }
}

function calculatePlacementResult() {
    const ageSelect = document.getElementById('reg-age');
    const recitationVal = document.querySelector('input[name="profiling-recitation"]:checked').value;
    
    updateRegistrationPlacementMessage(recitationVal, ageSelect.value);
}

function updateRegistrationPlacementMessage(recitationVal = 'beginner', ageVal = '25') {
    const titleEl = document.getElementById('result-track-title');
    const descEl = document.getElementById('result-track-desc');
    if (!titleEl || !descEl) return;

    let recTitle = '';
    let recDesc = '';

    if (recitationVal === 'beginner') {
        recTitle = currentLanguage === 'ID' ? 'Precision Recitation (Pilar 01)' : 'Precision Recitation (Pillar 01)';
        recDesc = currentLanguage === 'ID' 
            ? 'Berdasarkan hasil asesmen, bacaan Anda membutuhkan standardisasi makhraj dasar. Kami merekomendasikan kelas Tahsin Tartil bersanad untuk kelancaran yang presisi.'
            : 'Based on your assessment, your recitation requires basic articulation standardization. We recommend the certified Tahsin Tartil class for precise fluency.';
    } else if (recitationVal === 'intermediate') {
        recTitle = currentLanguage === 'ID' ? 'Historical Contextualization (Pilar 02)' : 'Historical Contextualization (Pillar 02)';
        recDesc = currentLanguage === 'ID'
            ? 'Anda sudah membaca secara lancar. Penempatan yang direkomendasikan adalah kelas eksplorasi asbabul nuzul dan korelasi historis teks wahyu.'
            : 'You recite fluently. The recommended placement is the historical exploration class, diving into revelation backgrounds and spatial maps.';
    } else {
        recTitle = currentLanguage === 'ID' ? 'Cognitive Tafsir & Leadership Ethics (Pilar 03 & 04)' : 'Cognitive Tafsir & Leadership Ethics (Pillar 03 & 04)';
        recDesc = currentLanguage === 'ID'
            ? 'Dengan bekal bacaan Anda yang sangat baik, Anda langsung diarahkan ke kelas analisis morfologi linguistik Arab dan bedah kepemimpinan global Raja Dzulqornain.'
            : 'With your excellent recitation background, you are directly placed into our Arabic linguistic morphology and King Dzulqornain global leadership classes.';
    }

    // Append age tier recommendation details
    if (ageVal === '15') {
        recDesc += currentLanguage === 'ID' 
            ? ' Format pengajaran disesuaikan dengan platform digital dinamis bagi kalangan Youth (Youth Executive Pod).'
            : ' Learning format is tailored for our dynamic digital platform optimized for Youth (Youth Executive Pod).';
    } else {
        recDesc += currentLanguage === 'ID' 
            ? ' Sesi kelas Anda akan berbaur dengan praktisi industri dan diselenggarakan pada malam hari (Professional Midnight Session).'
            : ' Your sessions will blend with industry practitioners and occur in evenings (Professional Midnight Session).';
    }

    titleEl.textContent = recTitle;
    descEl.textContent = recDesc;
}

/* ==========================================
   HIGH-SECURITY STUDENT PORTAL MOCK (F-05)
   ========================================== */
const portalTabsData = {
    'tab-dashboard': {
        ID: {
            title: 'Ahlan wa Sahlan, Akhi Ahmad!',
            body: `
                <div class="portal-welcome-banner">
                    <h4>Ahlan wa Sahlan, Akhi Ahmad!</h4>
                    <p style="font-size: 0.85rem;">Mulai sesi talaqqi makhraj bersanad Anda pekan ini. Persentase penyelesaian modul Anda sangat baik.</p>
                </div>
                <div class="portal-grid-modules">
                    <div class="portal-widget laser-glow">
                        <h5 class="widget-title">Progress Kelancaran Tartil</h5>
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem; font-weight:600;">
                            <span>Kelayakan Sanad</span>
                            <span>84%</span>
                        </div>
                        <div style="height:8px; background:var(--obsidian-deep); border-radius:4px; overflow:hidden; margin-bottom: 12px; border: 1px solid rgba(212,175,55,0.2);">
                            <div style="width: 84%; height:100%; background:var(--gold-champagne); border-radius:4px;"></div>
                        </div>
                        <p style="font-size: 0.75rem;">Sifat huruf 'Hams' dan 'Rikhwah' Anda telah dikonfirmasi stabil oleh Asatidz.</p>
                    </div>
                    <div class="portal-widget laser-glow">
                        <h5 class="widget-title">Sesi Talaqqi Terdekat</h5>
                        <div style="display: flex; gap: 12px; align-items: center;">
                            <i class="fa-solid fa-calendar-days" style="font-size: 1.5rem; color: var(--gold-champagne);"></i>
                            <div>
                                <h6 style="font-size: 0.85rem; font-weight: 700; color: var(--white);">Kamis, 20 Agustus 2026</h6>
                                <p style="font-size: 0.75rem;">Jam: 20:00 WIB (Midnight Executive Session)</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        EN: {
            title: 'Ahlan wa Sahlan, Brother Ahmad!',
            body: `
                <div class="portal-welcome-banner">
                    <h4>Ahlan wa Sahlan, Brother Ahmad!</h4>
                    <p style="font-size: 0.85rem;">Begin your certified talaqqi session this week. Your module completion index is outstanding.</p>
                </div>
                <div class="portal-grid-modules">
                    <div class="portal-widget laser-glow">
                        <h5 class="widget-title">Tartil Articulation Progress</h5>
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem; font-weight:600;">
                            <span>Sanad Match Index</span>
                            <span>84%</span>
                        </div>
                        <div style="height:8px; background:var(--obsidian-deep); border-radius:4px; overflow:hidden; margin-bottom: 12px; border: 1px solid rgba(212,175,55,0.2);">
                            <div style="width: 84%; height:100%; background:var(--gold-champagne); border-radius:4px;"></div>
                        </div>
                        <p style="font-size: 0.75rem;">Phonetic traits 'Hams' and 'Rikhwah' confirmed stable by your mentor.</p>
                    </div>
                    <div class="portal-widget laser-glow">
                        <h5 class="widget-title">Next Scheduled Session</h5>
                        <div style="display: flex; gap: 12px; align-items: center;">
                            <i class="fa-solid fa-calendar-days" style="font-size: 1.5rem; color: var(--gold-champagne);"></i>
                            <div>
                                <h6 style="font-size: 0.85rem; font-weight: 700; color: var(--text-dark);">Thursday, August 20, 2026</h6>
                                <p style="font-size: 0.75rem;">Time: 20:00 WIB (Midnight Executive Session)</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    },
    'tab-talaqqi': {
        ID: {
            title: 'Jadwal Setoran & Talaqqi',
            body: `
                <div class="portal-widget laser-glow">
                    <h5 class="widget-title">Riwayat & Pemesanan Sesi Halaqah</h5>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E8E5DF; padding-bottom: 8px;">
                            <span style="font-size: 0.85rem; font-weight: 600;">Sesi 08: Surah Al-Kahf 1-10</span>
                            <span style="font-size: 0.8rem; color: #22C55E; font-weight: 700;">SELESAI (Mumtaz)</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E8E5DF; padding-bottom: 8px;">
                            <span style="font-size: 0.85rem; font-weight: 600;">Sesi 09: Tajwid & Waqaf Ibtida</span>
                            <span style="font-size: 0.8rem; color: #22C55E; font-weight: 700;">SELESAI (Jayyid)</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding-bottom: 8px;">
                            <span style="font-size: 0.85rem; font-weight: 600;">Sesi 10: Ujian Otentisitas Manuskrip</span>
                            <span style="font-size: 0.8rem; color: var(--gold-metallic); font-weight: 700;">TERJADWAL (20 Agst)</span>
                        </div>
                    </div>
                </div>
            `
        },
        EN: {
            title: 'Halaqah & Talaqqi Tracker',
            body: `
                <div class="portal-widget laser-glow">
                    <h5 class="widget-title">Session Log & Upcoming Bookings</h5>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E8E5DF; padding-bottom: 8px;">
                            <span style="font-size: 0.85rem; font-weight: 600;">Session 08: Surah Al-Kahf 1-10</span>
                            <span style="font-size: 0.8rem; color: #22C55E; font-weight: 700;">COMPLETED (Excellent)</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #E8E5DF; padding-bottom: 8px;">
                            <span style="font-size: 0.85rem; font-weight: 600;">Session 09: Waqf Ibtida Syntactics</span>
                            <span style="font-size: 0.8rem; color: #22C55E; font-weight: 700;">COMPLETED (Pass)</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding-bottom: 8px;">
                            <span style="font-size: 0.85rem; font-weight: 600;">Session 10: Manuscript Authenticity Exam</span>
                            <span style="font-size: 0.8rem; color: var(--gold-metallic); font-weight: 700;">SCHEDULED (Aug 20)</span>
                        </div>
                    </div>
                </div>
            `
        }
    },
    'tab-materials': {
        ID: {
            title: 'Materi Belajar Flipped Learning',
            body: `
                <div class="portal-widget laser-glow" style="grid-column: 1 / -1;">
                    <h5 class="widget-title">Video Ringkasan & Bahan Telaah Pekan Ini</h5>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: var(--obsidian-dark); border: 1px solid rgba(212,175,55,0.2); padding: 16px; border-radius: var(--border-radius-sm);">
                            <h6 style="font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">[Video] Ulumul Qur'an: Kodifikasi Mushaf</h6>
                            <p style="font-size: 0.75rem; color: var(--text-muted);">Durasi: 12 menit - Wajib disimak sebelum Halaqah.</p>
                            <a href="#" style="font-size: 0.8rem; color: var(--gold-champagne); font-weight: 700; display: inline-block; margin-top: 10px;"><i class="fa-solid fa-circle-play"></i> Putar Materi</a>
                        </div>
                        <div style="background-color: var(--obsidian-dark); border: 1px solid rgba(212,175,55,0.2); padding: 16px; border-radius: var(--border-radius-sm);">
                            <h6 style="font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">[PDF] Modul Sejarah Sosio-Historis Arab</h6>
                            <p style="font-size: 0.75rem; color: var(--text-muted);">Format: E-Book - Kerangka geopolitik pra-Islam.</p>
                            <a href="#" style="font-size: 0.8rem; color: var(--gold-champagne); font-weight: 700; display: inline-block; margin-top: 10px;"><i class="fa-solid fa-file-pdf"></i> Unduh Modul</a>
                        </div>
                    </div>
                </div>
            `
        },
        EN: {
            title: 'Flipped Learning Materials',
            body: `
                <div class="portal-widget laser-glow" style="grid-column: 1 / -1;">
                    <h5 class="widget-title">Video Summaries & Study Material For This Week</h5>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: var(--obsidian-dark); border: 1px solid rgba(212,175,55,0.2); padding: 16px; border-radius: var(--border-radius-sm);">
                            <h6 style="font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">[Video] Ulumul Quran: Codification History</h6>
                            <p style="font-size: 0.75rem; color: var(--text-muted);">Duration: 12 minutes - Required view before class.</p>
                            <a href="#" style="font-size: 0.8rem; color: var(--gold-champagne); font-weight: 700; display: inline-block; margin-top: 10px;"><i class="fa-solid fa-circle-play"></i> Play Video</a>
                        </div>
                        <div style="background-color: var(--obsidian-dark); border: 1px solid rgba(212,175,55,0.2); padding: 16px; border-radius: var(--border-radius-sm);">
                            <h6 style="font-weight: 700; font-size: 0.85rem; margin-bottom: 6px;">[PDF] Arab Socio-Historical Geopolitics</h6>
                            <p style="font-size: 0.75rem; color: var(--text-muted);">Format: E-Book - Pre-Islamic cultural framework.</p>
                            <a href="#" style="font-size: 0.8rem; color: var(--gold-champagne); font-weight: 700; display: inline-block; margin-top: 10px;"><i class="fa-solid fa-file-pdf"></i> Download PDF</a>
                        </div>
                    </div>
                </div>
            `
        }
    },
    'tab-capstone': {
        ID: {
            title: 'Sidang Capstone Project',
            body: `
                <div class="portal-widget laser-glow">
                    <h5 class="widget-title">Status Solusi Kepemimpinan Etis</h5>
                    <div style="text-align: center; padding: 10px 0;">
                        <i class="fa-solid fa-scroll" style="font-size: 2.5rem; color: var(--gold-champagne); margin-bottom: 12px;"></i>
                        <h6 style="font-weight: 700; font-size: 0.95rem;">Manifesto: Integrasi Sistem Data Logistik & Waqaf Mandiri</h6>
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 15px;">Dosen Pembimbing: Prof. Dr. Irfan Hakim</p>
                        <span style="display: inline-block; padding: 6px 12px; background: rgba(212,175,55,0.1); border: 1px solid var(--gold-champagne); color: var(--gold-champagne); border-radius: 4px; font-weight: 700; font-size: 0.75rem;">REVIEW PROPOSAL (Draft Disubmit)</span>
                    </div>
                </div>
            `
        },
        EN: {
            title: 'Capstone Project Defense',
            body: `
                <div class="portal-widget laser-glow">
                    <h5 class="widget-title">Ethical Leadership Paper Status</h5>
                    <div style="text-align: center; padding: 10px 0;">
                        <i class="fa-solid fa-scroll" style="font-size: 2.5rem; color: var(--gold-champagne); margin-bottom: 12px;"></i>
                        <h6 style="font-weight: 700; font-size: 0.95rem;">Manifesto: Integrating Data Logistics and Sovereign Waqf</h6>
                        <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 15px;">Primary Advisor: Prof. Dr. Irfan Hakim</p>
                        <span style="display: inline-block; padding: 6px 12px; background: rgba(212,175,55,0.1); border: 1px solid var(--gold-champagne); color: var(--gold-champagne); border-radius: 4px; font-weight: 700; font-size: 0.75rem;">UNDER REVIEW (Draft Submitted)</span>
                    </div>
                </div>
            `
        }
    }
};

function initPortalDashboard() {
    const portalMenuItems = document.querySelectorAll('.portal-menu-item');
    if (portalMenuItems.length === 0) return;
    const contentPane = document.getElementById('portal-content-pane');

    portalMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            portalMenuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');
            
            const tabKey = item.getAttribute('data-tab');
            const data = portalTabsData[tabKey][currentLanguage];
            contentPane.innerHTML = data.body;
        });
    });
}

/* ==========================================
   GALERI KEGIATAN & LIGHTBOX (F-06)
   ========================================== */
const extraPhotos = [
    { src: 'IMG-20211020-WA0007.jpg', cat: 'majlis', title: 'Dokumentasi Kajian Rutin Akhir Tahun' },
    { src: 'IMG-20220318-WA0047.jpg', cat: 'talaqqi', title: 'Halaqah Qur\'an Intensif Menjelang Ramadhan' },
    { src: 'IMG-20221023-WA0010.jpg', cat: 'majlis', title: 'Kegiatan Belajar Santri Majlis' },
    { src: 'IMG-20221023-WA0013.jpg', cat: 'majlis', title: 'Pertemuan Antar Wali Santri' },
    { src: 'IMG-20221204-WA0012.jpg', cat: 'talaqqi', title: 'Sesi Evaluasi Tajwid Semester Ganjil' },
    { src: 'IMG-20240106-WA0012.jpg', cat: 'majlis', title: 'Kajian Rutin Awal Tahun Baru' },
    { src: 'IMG-20240113-WA0007.jpg', cat: 'talaqqi', title: 'Talaqqi Ziyadah Hafalan Baru' },
    { src: 'IMG-20240224-WA0031.jpg', cat: 'private', title: 'Private Talaqqi untuk Eksekutif' },
    { src: 'IMG-20240617-WA0010.jpg', cat: 'majlis', title: 'Dokumentasi Majlis Hari Raya Idul Adha' },
    { src: 'IMG-20241207-WA0010.jpg', cat: 'majlis', title: 'Kajian Bulanan Tematik Fiqh' },
    { src: 'IMG-20241208-WA0001.jpg', cat: 'talaqqi', title: 'Halaqah Sore Santri Cilik Majlis' },
    { src: 'IMG-20250127-WA0028.jpg', cat: 'private', title: 'Sesi Pembelajaran Home Schooling Quran' },
    { src: 'IMG-20250128-WA0027.jpg', cat: 'private', title: 'Sesi Privat Rutin Santri Dewasa' },
    { src: 'IMG-20250128-WA0054.jpg', cat: 'private', title: 'Kunjungan Ustadz untuk Fiqih Thaharah' },
    { src: 'IMG-20250128-WA0096.jpg', cat: 'private', title: 'Keluarga Besar Belajar Bersama di Rumah' },
    { src: 'IMG-20250215-WA0003.jpg', cat: 'majlis', title: 'Kajian Kitab Bulanan di Majlis' },
    { src: 'P_20210526_161802.jpg', cat: 'majlis', title: 'Dokumentasi Kegiatan Halaqah Sore' },
    { src: 'P_20210526_165004.jpg', cat: 'talaqqi', title: 'Belajar Tajwid Berkelompok' },
    { src: 'P_20210526_191839.jpg', cat: 'majlis', title: 'Sesi Kajian Ba\'da Maghrib' },
    { src: 'P_20210526_200929.jpg', cat: 'majlis', title: 'Kajian Rutin Bersama Jamaah' },
    { src: 'P_20210605_012257.jpg', cat: 'talaqqi', title: 'Halaqah Qur\'an Malam' },
    { src: 'P_20210605_094245.jpg', cat: 'talaqqi', title: 'Talaqqi Santri Pagi Hari' },
    { src: 'P_20210605_110218.jpg', cat: 'talaqqi', title: 'Halaqah Akhir Pekan Majlis' },
    { src: 'P_20210620_204336.jpg', cat: 'majlis', title: 'Kajian Kitab Fiqih Ibadah' },
    { src: 'P_20210831_205910.jpg', cat: 'majlis', title: 'Kajian Malam Mingguan' },
    { src: 'P_20220102_215611_vHDR_Auto.jpg', cat: 'talaqqi', title: 'Setoran Hafalan Santri Akhir Pekan' },
    { src: 'P_20220303_214423_vHDR_Auto.jpg', cat: 'talaqqi', title: 'Halaqah Qur\'an Intensif Malam' },
    { src: 'P_20220303_214949_vHDR_Auto_HP.jpg', cat: 'talaqqi', title: 'Halaqah Qur\'an Santri Dewasa' },
    { src: 'P_20220312_142801_vHDR_Auto_HP.jpg', cat: 'private', title: 'Private Talaqqi Quran untuk Lansia' },
    { src: 'P_20220318_212238_1_vHDR_Auto.jpg', cat: 'talaqqi', title: 'Ujian Bulanan Kelancaran Membaca' },
    { src: 'P_20220326_215230_vHDR_Auto_HP.jpg', cat: 'private', title: 'Bimbingan Private Fiqih untuk Keluarga' },
    { src: 'P_20220326_215507_vHDR_Auto.jpg', cat: 'talaqqi', title: 'Talaqqi Quran Khusus Mahasiswa' },
    { src: 'P_20220503_110504_vHDR_Auto.jpg', cat: 'majlis', title: 'Kajian Tematik Hari Raya' },
    { src: 'P_20220529_134431_vHDR_Auto.jpg', cat: 'majlis', title: 'Kajian Akhir Bulan Jamaah' },
    { src: 'P_20220723_065029.jpg', cat: 'majlis', title: 'Dokumentasi Majlis Subuh Berjamaah' },
    { src: 'P_20220807_210453_vHDR_On_HP.jpg', cat: 'private', title: 'Privat Talaqqi Anak-Anak di Rumah' },
    { src: 'P_20221001_224557_vHDR_Auto.jpg', cat: 'majlis', title: 'Kajian Kitab Akhlak' },
    { src: 'P_20221001_235413_vHDR_Auto.jpg', cat: 'majlis', title: 'Majlis Mudzakarah Malam' },
    { src: 'P_20221106_195121_vHDR_Auto.jpg', cat: 'majlis', title: 'Kajian Bulanan Bersama Ustadz' },
    { src: 'P_20221106_202016.jpg', cat: 'majlis', title: 'Dokumentasi Silaturahim Wali Santri' },
    { src: 'P_20230101_001154.jpg', cat: 'majlis', title: 'Majlis Shalawat & Dzikir Awal Tahun' },
    { src: 'P_20230805_234734.jpg', cat: 'majlis', title: 'Dokumentasi Tabligh Akbar' },
    { src: 'IMG-20250128-WA0068.jpg', cat: 'private', title: 'Sesi Belajar Keluarga di Rumah' },
    { src: 'P_20230205_192519.jpg', cat: 'majlis', title: 'Kajian Rutin Bersama Ustadz' },
    { src: 'P_20230219_185617.jpg', cat: 'majlis', title: 'Kajian Kitab Tafsir Jalalain' },
    { src: 'Screenshot_20210624-084807_1.jpg', cat: 'talaqqi', title: 'Materi Tajwid dan Makhorijul Huruf Online' },
    { src: 'Screenshot_20210624-085516_1.jpg', cat: 'talaqqi', title: 'Dokumentasi Evaluasi Tilawah Online' },
    { src: 'Screenshot_20210624-085626_1.jpg', cat: 'talaqqi', title: 'Bimbingan Makhraj Santri Online' },
    { src: 'Screenshot_20210624-085805_1.jpg', cat: 'talaqqi', title: 'Pertemuan Kelas Flipped Learning Online' },
    { src: 'Screenshot_20210717-194717_1.jpg', cat: 'talaqqi', title: 'Standardisasi Tajwid via Google Meet' },
    { src: 'Screenshot_20210720-165727.jpg', cat: 'talaqqi', title: 'Kajian Interaktif via Online Conferencing' },
    { src: 'Screenshot_20230405-164842154.jpg', cat: 'talaqqi', title: 'Tangkapan Layar Modul Portal Santri' }
];

let loadedPhotosCount = 0;
const photosPerLoad = 6;
let currentGalleryItems = [];

function initGallery() {
    const gridContainer = document.getElementById('gallery-grid-container');
    if (!gridContainer) return;
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('btn-load-more-gallery');
    
    // Lightbox elements
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption-text');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    
    let currentImgIndex = 0;
    
    // Set up initial items array
    function updateGalleryItemsList() {
        currentGalleryItems = Array.from(gridContainer.querySelectorAll('.gallery-item')).filter(item => {
            return item.style.display !== 'none';
        });
    }

    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterVal = btn.getAttribute('data-filter');
            const allItems = gridContainer.querySelectorAll('.gallery-item');
            
            allItems.forEach(item => {
                const itemCat = item.getAttribute('data-category');
                if (filterVal === 'all' || itemCat === filterVal) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            updateGalleryItemsList();
        });
    });

    // Load More functionality
    loadMoreBtn.addEventListener('click', () => {
        const nextPhotos = extraPhotos.slice(loadedPhotosCount, loadedPhotosCount + photosPerLoad);
        nextPhotos.forEach(photo => {
            const item = document.createElement('div');
            item.className = 'gallery-item laser-glow';
            item.setAttribute('data-category', photo.cat);
            
            let categoryLabel = '';
            if (photo.cat === 'talaqqi') categoryLabel = 'Halaqah & Talaqqi';
            else if (photo.cat === 'private') categoryLabel = 'Kunjungan Privat';
            else if (photo.cat === 'majlis') categoryLabel = 'Dokumentasi Majlis';
            
            item.innerHTML = `
                <div class="gallery-img-wrapper">
                    <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                    <div class="gallery-item-overlay">
                        <span class="gallery-item-category">${categoryLabel}</span>
                        <h5 class="gallery-item-title">${photo.title}</h5>
                    </div>
                </div>
            `;
            
            // Check if active filter hides this
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            if (activeFilter !== 'all' && photo.cat !== activeFilter) {
                item.style.display = 'none';
            }
            
            gridContainer.appendChild(item);
            
            // Add click listener for lightbox
            item.addEventListener('click', () => {
                openLightbox(item);
            });
        });
        
        loadedPhotosCount += nextPhotos.length;
        if (loadedPhotosCount >= extraPhotos.length) {
            loadMoreBtn.style.display = 'none';
        }
        
        updateGalleryItemsList();
    });

    // Lightbox actions
    function openLightbox(item) {
        updateGalleryItemsList();
        currentImgIndex = currentGalleryItems.indexOf(item);
        
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-item-title').textContent;
        
        lightboxImg.src = img.src;
        lightboxCaption.textContent = title;
        
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop page scroll
    }

    // Attach click to default grid items
    const defaultItems = gridContainer.querySelectorAll('.gallery-item');
    defaultItems.forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item);
        });
    });

    function closeLightbox() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }

    closeBtn.addEventListener('click', closeLightbox);
    
    // Lightbox background click close
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Prev/Next handlers
    function navigateLightbox(direction) {
        if (currentGalleryItems.length <= 1) return;
        
        currentImgIndex = (currentImgIndex + direction + currentGalleryItems.length) % currentGalleryItems.length;
        const nextItem = currentGalleryItems[currentImgIndex];
        
        const img = nextItem.querySelector('img');
        const title = nextItem.querySelector('.gallery-item-title').textContent;
        
        lightboxImg.src = img.src;
        lightboxCaption.textContent = title;
    }

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    updateGalleryItemsList();
}
