(function () {
        const sellDefaults = [
            {
                id: 'buy-1',
                name: 'BabyElle Aero Cabin Stroller',
                category: 'Stroller',
                stock: 1,
                price: 1850000,
                badge: 'Terlaris',
                desc: 'Stroller lipat ringkas cabin-size, kanopi UPF 50+, suspensi empuk 4 roda.',
                bg: 'from-peach-100 to-amber-50',
                svg: `<svg class="w-20 h-20 text-peach-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="22" cy="50" r="5"/><circle cx="46" cy="50" r="5"/><path d="M10 16h6l7 24h23l5-16H21"/><path d="M34 24V12a12 12 0 0 1 12 12"/></svg>`
            },
            {
                id: 'buy-2',
                name: 'Joie Versatrax Reversible Stroller',
                category: 'Stroller',
                stock: 1,
                price: 3450000,
                badge: 'Premium',
                desc: 'Kursi hadap ibu & depan, posisi rebah penuh untuk newborn hingga 22 kg.',
                bg: 'from-stone-200 to-stone-100',
                svg: `<svg class="w-20 h-20 text-stone-700" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="50" r="5"/><circle cx="46" cy="50" r="5"/><path d="M8 14h7l7 26h24l6-18H20"/><path d="M32 22c0-7 6-11 13-11v11"/></svg>`
            },
            {
                id: 'buy-3',
                name: 'Nuna Pipa Next ISOFIX Carseat',
                category: 'Carseat',
                stock: 1,
                price: 2950000,
                badge: 'Standar ECE R129',
                desc: 'Perlindungan benturan samping (SIP), busa memory foam lembut & instalasi ISOFIX.',
                bg: 'from-sage-100 to-emerald-50',
                svg: `<svg class="w-20 h-20 text-sage-700" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 14c0-3 3-5 6-5h6c4 0 7 3 7 7l3 18h10c3 0 5 2 5 5v5H16c-3 0-5-2-5-5V24c0-5 3-10 7-10z"/><path d="M24 24v12M32 24v12M20 30h16"/><path d="M14 48h38"/></svg>`
            },
            {
                id: 'buy-4',
                name: 'Chicco Fit4 4-in-1 Convertible Carseat',
                category: 'Carseat',
                stock: 1,
                price: 3650000,
                badge: '0–10 Tahun',
                desc: 'Tumbuh bersama si kecil dari bayi baru lahir (rear-facing) hingga booster seat.',
                bg: 'from-sky-100 to-blue-50',
                svg: `<svg class="w-20 h-20 text-sky-700" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12h12c4 0 7 3 7 7l2 17h9c3 0 5 2 5 5v4H15c-2 0-4-2-4-4V22c0-6 4-10 9-10z"/><circle cx="28" cy="28" r="4"/><path d="M14 49h36"/></svg>`
            },
            {
                id: 'buy-5',
                name: 'Nuna Leaf Grow Babyswing',
                category: 'Babyswing',
                stock: 1,
                price: 2750000,
                badge: 'Tanpa Listrik',
                desc: 'Ayunan lembut alami dengan satu dorongan, kain katun organik bersertifikat Oeko-Tex.',
                bg: 'from-amber-100 to-orange-50',
                svg: `<svg class="w-20 h-20 text-amber-700" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="32" cy="26" rx="18" ry="11" transform="rotate(-12 32 26)"/><path d="M32 37v13"/><path d="M18 50h28"/></svg>`
            },
            {
                id: 'buy-6',
                name: 'Cocolatte Snuggli Electric Babyswing',
                category: 'Babyswing',
                stock: 1,
                price: 1490000,
                badge: '5 Kecepatan + Musik',
                desc: 'Dilengkapi remote control, timer otomatis, melodi pengantar tidur, dan kelambu nyamuk.',
                bg: 'from-rose-100 to-peach-50',
                svg: `<svg class="w-20 h-20 text-rose-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 52L24 14h16l10 38"/><path d="M20 34c4 6 20 6 24 0"/><path d="M27 14v8M37 14v8"/></svg>`
            },
            {
                id: 'buy-7',
                name: 'Ergobaby Omni Breeze Baby Carrier',
                category: 'Gendongan',
                stock: 1,
                price: 2150000,
                badge: 'M-Shape Ergonomis',
                desc: 'Gendongan SoftFlex Mesh super adem, mendukung 4 posisi gendong sejak newborn.',
                bg: 'from-teal-100 to-sage-50',
                svg: `<svg class="w-20 h-20 text-teal-700" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12l6 10h12l6-10"/><path d="M18 22h28l-3 22H21L18 22z"/><path d="M16 44h32v6H16z"/><circle cx="32" cy="17" r="4"/></svg>`
            },
            {
                id: 'buy-8',
                name: 'Dialogue Hipseat Carrier Series',
                category: 'Gendongan',
                stock: 1,
                price: 485000,
                badge: 'Hemat & Nyaman',
                desc: 'Dudukan hipseat anti-selip menjaga postur tulang pinggul bayi dan punggung orang tua.',
                bg: 'from-indigo-100 to-purple-50',
                svg: `<svg class="w-20 h-20 text-indigo-700" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 14v10h20V14"/><rect x="18" y="24" width="28" height="16" rx="4"/><path d="M14 40h36v8H14z"/></svg>`
            }
        ];

        // Kategori Sewa (HANYA 2 jenis: Stroller & Carseat)
        const rentDefaults = [
            {
                id: 'rent-1',
                name: 'Bugaboo Butterfly Cabin Stroller',
                category: 'Stroller',
                stock: 1,
                rates: { '1w': 160000, '2w': 290000, '3w': 410000, '1m': 500000 },
                spec: 'Ringan 7.3 kg • Cabin size • Cocok traveling',
                icon: '🛒'
            },
            {
                id: 'rent-2',
                name: 'Stokke YOYO2 6+ Stroller',
                category: 'Stroller',
                stock: 1,
                rates: { '1w': 185000, '2w': 340000, '3w': 475000, '1m': 580000 },
                spec: 'Lipat satu tangan • Suspensi Hytrel elastomer',
                icon: '🛒'
            },
            {
                id: 'rent-3',
                name: 'Joie i-Spin 360 ISOFIX Carseat',
                category: 'Carseat',
                stock: 1,
                rates: { '1w': 150000, '2w': 275000, '3w': 390000, '1m': 480000 },
                spec: 'Putar 360° • Newborn s/d 19 kg • ISOFIX',
                icon: '💺'
            },
            {
                id: 'rent-4',
                name: 'Maxi-Cosi CabrioFix Infant Carseat',
                category: 'Carseat',
                stock: 1,
                rates: { '1w': 120000, '2w': 220000, '3w': 310000, '1m': 380000 },
                spec: '0–13 kg • Ringan mudah dipindah ke stroller',
                icon: '💺'
            }
        ];
    const keys = {
        sell: 'BloomyLabel_products_sell',
        rent: 'BloomyLabel_products_rent'
    };

    function clone(items) {
        return JSON.parse(JSON.stringify(items));
    }

    function load(type) {
        const key = keys[type];
        if (!key) throw new Error(`Unknown product catalog: ${type}`);

        const stored = localStorage.getItem(key);
        if (stored === null) {
            const initial = clone(type === 'sell' ? sellDefaults : rentDefaults);
            localStorage.setItem(key, JSON.stringify(initial));
            return initial;
        }

        const products = JSON.parse(stored);
        if (!Array.isArray(products)) {
            throw new Error(`Stored product catalog "${type}" is not a list.`);
        }
        return products;
    }

    function save(type, products) {
        const key = keys[type];
        if (!key) throw new Error(`Unknown product catalog: ${type}`);
        if (!Array.isArray(products)) throw new TypeError('Products must be an array.');
        localStorage.setItem(key, JSON.stringify(products));
    }

    function escapeHtml(value) {
        return String(value ?? '').replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        })[char]);
    }

    window.BloomyCatalog = { load, save, keys, escapeHtml };
})();
