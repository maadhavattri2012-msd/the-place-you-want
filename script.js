// ============================================================
// THE PLACE YOU WANT
// 1000+ CAR DATABASE
// ============================================================
// Prices are illustrative estimates.
// Verify prices before publishing as official/current prices.
// ============================================================


// ------------------------------------------------------------
// REAL CAR MODELS
// ------------------------------------------------------------

const carModels = [

    // =========================
    // TATA
    // =========================

    ["Tata", "Nano", "hatchback", 250000],
    ["Tata", "Tiago", "hatchback", 500000],
    ["Tata", "Tigor", "sedan", 600000],
    ["Tata", "Altroz", "hatchback", 650000],
    ["Tata", "Punch", "suv", 620000],
    ["Tata", "Nexon", "suv", 800000],
    ["Tata", "Nexon EV", "suv", 1500000],
    ["Tata", "Harrier", "suv", 1500000],
    ["Tata", "Safari", "suv", 1600000],
    ["Tata", "Curvv", "suv", 1000000],
    ["Tata", "Curvv EV", "suv", 1800000],

    // =========================
    // MARUTI SUZUKI
    // =========================

    ["Maruti Suzuki", "Alto K10", "hatchback", 420000],
    ["Maruti Suzuki", "S-Presso", "hatchback", 430000],
    ["Maruti Suzuki", "Celerio", "hatchback", 530000],
    ["Maruti Suzuki", "Wagon R", "hatchback", 550000],
    ["Maruti Suzuki", "Swift", "hatchback", 600000],
    ["Maruti Suzuki", "Dzire", "sedan", 650000],
    ["Maruti Suzuki", "Baleno", "hatchback", 650000],
    ["Maruti Suzuki", "Fronx", "suv", 750000],
    ["Maruti Suzuki", "Ignis", "hatchback", 580000],
    ["Maruti Suzuki", "Ciaz", "sedan", 900000],
    ["Maruti Suzuki", "Brezza", "suv", 850000],
    ["Maruti Suzuki", "Ertiga", "suv", 900000],
    ["Maruti Suzuki", "XL6", "suv", 1200000],
    ["Maruti Suzuki", "Grand Vitara", "suv", 1100000],
    ["Maruti Suzuki", "Jimny", "suv", 1250000],
    ["Maruti Suzuki", "Invicto", "luxury", 2500000],

    // =========================
    // HYUNDAI
    // =========================

    ["Hyundai", "Grand i10 Nios", "hatchback", 580000],
    ["Hyundai", "i20", "hatchback", 720000],
    ["Hyundai", "Aura", "sedan", 650000],
    ["Hyundai", "Exter", "suv", 620000],
    ["Hyundai", "Venue", "suv", 800000],
    ["Hyundai", "Verna", "sedan", 1100000],
    ["Hyundai", "Creta", "suv", 1100000],
    ["Hyundai", "Alcazar", "suv", 1700000],
    ["Hyundai", "Tucson", "suv", 2900000],
    ["Hyundai", "Ioniq 5", "suv", 4600000],
    ["Hyundai", "Ioniq 6", "sedan", 5500000],
    ["Hyundai", "Kona Electric", "suv", 2400000],

    // =========================
    // KIA
    // =========================

    ["Kia", "Sonet", "suv", 800000],
    ["Kia", "Seltos", "suv", 1100000],
    ["Kia", "Carens", "suv", 1100000],
    ["Kia", "Carnival", "luxury", 6300000],
    ["Kia", "EV6", "sports", 6500000],
    ["Kia", "EV9", "luxury", 12000000],

    // =========================
    // MAHINDRA
    // =========================

    ["Mahindra", "Bolero", "suv", 1000000],
    ["Mahindra", "Bolero Neo", "suv", 1000000],
    ["Mahindra", "Scorpio", "suv", 1300000],
    ["Mahindra", "Scorpio N", "suv", 1400000],
    ["Mahindra", "Thar", "suv", 1100000],
    ["Mahindra", "Thar Roxx", "suv", 1300000],
    ["Mahindra", "XUV 3XO", "suv", 800000],
    ["Mahindra", "XUV700", "suv", 1400000],
    ["Mahindra", "Marazzo", "suv", 1400000],
    ["Mahindra", "BE 6", "suv", 1900000],
    ["Mahindra", "XEV 9e", "suv", 2100000],

    // =========================
    // TOYOTA
    // =========================

    ["Toyota", "Glanza", "hatchback", 700000],
    ["Toyota", "Urban Cruiser Hyryder", "suv", 1100000],
    ["Toyota", "Rumion", "suv", 1100000],
    ["Toyota", "Innova HyCross", "suv", 1900000],
    ["Toyota", "Fortuner", "suv", 3500000],
    ["Toyota", "Camry", "sedan", 4800000],
    ["Toyota", "Land Cruiser 300", "luxury", 23000000],
    ["Toyota", "Vellfire", "luxury", 12000000],
    ["Toyota", "Hilux", "suv", 3000000],

    // =========================
    // HONDA
    // =========================

    ["Honda", "Amaze", "sedan", 800000],
    ["Honda", "City", "sedan", 1200000],
    ["Honda", "Elevate", "suv", 1200000],
    ["Honda", "Civic", "sedan", 2200000],
    ["Honda", "Accord", "sedan", 5000000],
    ["Honda", "CR-V", "suv", 4500000],

    // =========================
    // VOLKSWAGEN
    // =========================

    ["Volkswagen", "Polo", "hatchback", 700000],
    ["Volkswagen", "Virtus", "sedan", 1100000],
    ["Volkswagen", "Taigun", "suv", 1200000],
    ["Volkswagen", "Tiguan", "suv", 3500000],
    ["Volkswagen", "Golf", "hatchback", 3000000],
    ["Volkswagen", "Passat", "sedan", 4500000],
    ["Volkswagen", "Arteon", "sedan", 6500000],
    ["Volkswagen", "ID.4", "suv", 5500000],
    ["Volkswagen", "ID.7", "sedan", 7000000],
    ["Volkswagen", "Touareg", "luxury", 10000000],

    // =========================
    // SKODA
    // =========================

    ["Skoda", "Kylaq", "suv", 800000],
    ["Skoda", "Kushaq", "suv", 1100000],
    ["Skoda", "Slavia", "sedan", 1100000],
    ["Skoda", "Kodiaq", "suv", 4000000],
    ["Skoda", "Superb", "sedan", 5500000],
    ["Skoda", "Octavia", "sedan", 4000000],
    ["Skoda", "Enyaq", "suv", 6500000],

    // =========================
    // MG
    // =========================

    ["MG", "Comet EV", "hatchback", 700000],
    ["MG", "Astor", "suv", 1000000],
    ["MG", "Hector", "suv", 1500000],
    ["MG", "Hector Plus", "suv", 1700000],
    ["MG", "Gloster", "suv", 3800000],
    ["MG", "ZS EV", "suv", 1800000],
    ["MG", "Windsor EV", "suv", 1400000],
    ["MG", "Cyberster", "sports", 7000000],

    // =========================
    // JEEP
    // =========================

    ["Jeep", "Compass", "suv", 2000000],
    ["Jeep", "Meridian", "suv", 3000000],
    ["Jeep", "Wrangler", "suv", 7000000],
    ["Jeep", "Grand Cherokee", "luxury", 8000000],
    ["Jeep", "Gladiator", "suv", 6000000],

    // =========================
    // BMW
    // =========================

    ["BMW", "2 Series", "sedan", 4500000],
    ["BMW", "3 Series", "sedan", 6000000],
    ["BMW", "4 Series", "sports", 7000000],
    ["BMW", "5 Series", "sedan", 8000000],
    ["BMW", "7 Series", "luxury", 18000000],
    ["BMW", "8 Series", "luxury", 15000000],
    ["BMW", "X1", "suv", 5000000],
    ["BMW", "X3", "suv", 7000000],
    ["BMW", "X5", "luxury", 10000000],
    ["BMW", "X6", "luxury", 12000000],
    ["BMW", "X7", "luxury", 14000000],
    ["BMW", "XM", "supercar", 25000000],
    ["BMW", "i4", "sedan", 7500000],
    ["BMW", "i5", "sedan", 10000000],
    ["BMW", "i7", "luxury", 20000000],
    ["BMW", "iX", "suv", 13000000],
    ["BMW", "Z4", "sports", 9000000],
    ["BMW", "M2", "sports", 10000000],
    ["BMW", "M3", "sports", 12000000],
    ["BMW", "M4", "sports", 13000000],
    ["BMW", "M5", "sports", 15000000],

    // =========================
    // MERCEDES-BENZ
    // =========================

    ["Mercedes-Benz", "A-Class", "hatchback", 4500000],
    ["Mercedes-Benz", "C-Class", "sedan", 6000000],
    ["Mercedes-Benz", "E-Class", "sedan", 8000000],
    ["Mercedes-Benz", "S-Class", "luxury", 18000000],
    ["Mercedes-Benz", "CLA", "sedan", 5000000],
    ["Mercedes-Benz", "CLE", "sports", 10000000],
    ["Mercedes-Benz", "GLA", "suv", 5500000],
    ["Mercedes-Benz", "GLB", "suv", 6500000],
    ["Mercedes-Benz", "GLC", "suv", 7500000],
    ["Mercedes-Benz", "GLE", "luxury", 11000000],
    ["Mercedes-Benz", "GLS", "luxury", 13000000],
    ["Mercedes-Benz", "G-Class", "luxury", 25000000],
    ["Mercedes-Benz", "AMG GT", "sports", 25000000],
    ["Mercedes-Benz", "SL", "sports", 25000000],
    ["Mercedes-Benz", "Maybach S-Class", "luxury", 30000000],
    ["Mercedes-Benz", "Maybach GLS", "luxury", 35000000],

    // =========================
    // AUDI
    // =========================

    ["Audi", "A3", "sedan", 4500000],
    ["Audi", "A4", "sedan", 5500000],
    ["Audi", "A5", "sports", 6500000],
    ["Audi", "A6", "sedan", 7500000],
    ["Audi", "A7", "luxury", 10000000],
    ["Audi", "A8", "luxury", 15000000],
    ["Audi", "Q3", "suv", 5000000],
    ["Audi", "Q5", "suv", 7000000],
    ["Audi", "Q7", "luxury", 9000000],
    ["Audi", "Q8", "luxury", 11000000],
    ["Audi", "RS3", "sports", 7500000],
    ["Audi", "RS5", "sports", 11000000],
    ["Audi", "RS6", "sports", 18000000],
    ["Audi", "RS7", "sports", 19000000],
    ["Audi", "RS Q8", "sports", 20000000],
    ["Audi", "R8", "supercar", 25000000],

    // =========================
    // PORSCHE
    // =========================

    ["Porsche", "718 Cayman", "sports", 15000000],
    ["Porsche", "718 Boxster", "sports", 15000000],
    ["Porsche", "911 Carrera", "sports", 20000000],
    ["Porsche", "911 Carrera S", "sports", 25000000],
    ["Porsche", "911 Turbo S", "sports", 35000000],
    ["Porsche", "911 GT3", "sports", 30000000],
    ["Porsche", "911 GT3 RS", "sports", 35000000],
    ["Porsche", "Taycan", "sports", 20000000],
    ["Porsche", "Taycan Turbo", "sports", 30000000],
    ["Porsche", "Macan", "suv", 9000000],
    ["Porsche", "Macan Electric", "suv", 12000000],
    ["Porsche", "Cayenne", "luxury", 15000000],
    ["Porsche", "Panamera", "luxury", 20000000],

    // =========================
    // FERRARI
    // =========================

    ["Ferrari", "Roma", "supercar", 40000000],
    ["Ferrari", "Roma Spider", "supercar", 45000000],
    ["Ferrari", "296 GTB", "supercar", 55000000],
    ["Ferrari", "296 GTS", "supercar", 60000000],
    ["Ferrari", "SF90 Stradale", "supercar", 75000000],
    ["Ferrari", "SF90 Spider", "supercar", 80000000],
    ["Ferrari", "812 Superfast", "supercar", 65000000],
    ["Ferrari", "812 GTS", "supercar", 70000000],
    ["Ferrari", "Purosangue", "supercar", 70000000],
    ["Ferrari", "12Cilindri", "supercar", 65000000],
    ["Ferrari", "Daytona SP3", "supercar", 250000000],
    ["Ferrari", "LaFerrari", "supercar", 300000000],
    ["Ferrari", "LaFerrari Aperta", "supercar", 400000000],

    // =========================
    // LAMBORGHINI
    // =========================

    ["Lamborghini", "Huracan", "supercar", 40000000],
    ["Lamborghini", "Huracan STO", "supercar", 50000000],
    ["Lamborghini", "Urus", "supercar", 45000000],
    ["Lamborghini", "Urus S", "supercar", 50000000],
    ["Lamborghini", "Urus Performante", "supercar", 55000000],
    ["Lamborghini", "Revuelto", "supercar", 60000000],
    ["Lamborghini", "Aventador", "supercar", 50000000],
    ["Lamborghini", "Aventador SVJ", "supercar", 70000000],
    ["Lamborghini", "Countach LPI 800-4", "supercar", 300000000],
    ["Lamborghini", "Sian FKP 37", "supercar", 300000000],

    // =========================
    // MCLAREN
    // =========================

    ["McLaren", "570S", "supercar", 30000000],
    ["McLaren", "600LT", "supercar", 35000000],
    ["McLaren", "720S", "supercar", 45000000],
    ["McLaren", "750S", "supercar", 50000000],
    ["McLaren", "765LT", "supercar", 55000000],
    ["McLaren", "Artura", "supercar", 40000000],
    ["McLaren", "Senna", "hypercar", 150000000],
    ["McLaren", "Speedtail", "hypercar", 200000000],
    ["McLaren", "Elva", "hypercar", 180000000],
    ["McLaren", "P1", "hypercar", 250000000],

    // =========================
    // BUGATTI
    // =========================

    ["Bugatti", "Veyron", "hypercar", 300000000],
    ["Bugatti", "Veyron Super Sport", "hypercar", 350000000],
    ["Bugatti", "Chiron", "hypercar", 250000000],
    ["Bugatti", "Chiron Sport", "hypercar", 300000000],
    ["Bugatti", "Chiron Super Sport", "hypercar", 350000000],
    ["Bugatti", "Divo", "hypercar", 450000000],
    ["Bugatti", "Centodieci", "hypercar", 600000000],
    ["Bugatti", "La Voiture Noire", "hypercar", 1760000000],
    ["Bugatti", "Bolide", "hypercar", 440000000],
    ["Bugatti", "Mistral", "hypercar", 500000000],
    ["Bugatti", "Tourbillon", "hypercar", 400000000],

    // =========================
    // PAGANI
    // =========================

    ["Pagani", "Zonda", "hypercar", 500000000],
    ["Pagani", "Zonda F", "hypercar", 600000000],
    ["Pagani", "Zonda Cinque", "hypercar", 700000000],
    ["Pagani", "Zonda HP Barchetta", "hypercar", 1600000000],
    ["Pagani", "Huayra", "hypercar", 500000000],
    ["Pagani", "Huayra BC", "hypercar", 700000000],
    ["Pagani", "Huayra Roadster", "hypercar", 800000000],
    ["Pagani", "Huayra R", "hypercar", 900000000],
    ["Pagani", "Huayra Codalunga", "hypercar", 650000000],
    ["Pagani", "Utopia", "hypercar", 500000000],

    // =========================
    // KOENIGSEGG
    // =========================

    ["Koenigsegg", "CCX", "hypercar", 300000000],
    ["Koenigsegg", "Agera", "hypercar", 400000000],
    ["Koenigsegg", "Agera R", "hypercar", 450000000],
    ["Koenigsegg", "Agera RS", "hypercar", 500000000],
    ["Koenigsegg", "Jesko", "hypercar", 500000000],
    ["Koenigsegg", "Jesko Absolut", "hypercar", 550000000],
    ["Koenigsegg", "Regera", "hypercar", 450000000],
    ["Koenigsegg", "Gemera", "hypercar", 350000000],
    ["Koenigsegg", "One:1", "hypercar", 500000000],
    ["Koenigsegg", "CC850", "hypercar", 400000000],

    // =========================
    // ROLLS-ROYCE
    // =========================

    ["Rolls-Royce", "Ghost", "luxury", 70000000],
    ["Rolls-Royce", "Ghost Extended", "luxury", 80000000],
    ["Rolls-Royce", "Phantom", "luxury", 90000000],
    ["Rolls-Royce", "Phantom Extended", "luxury", 100000000],
    ["Rolls-Royce", "Cullinan", "luxury", 70000000],
    ["Rolls-Royce", "Cullinan Black Badge", "luxury", 100000000],
    ["Rolls-Royce", "Spectre", "luxury", 80000000],
    ["Rolls-Royce", "Wraith", "luxury", 65000000],
    ["Rolls-Royce", "Dawn", "luxury", 70000000],
    ["Rolls-Royce", "Sweptail", "luxury", 1230000000],
    ["Rolls-Royce", "Boat Tail", "luxury", 2640000000],
    ["Rolls-Royce", "Droptail", "luxury", 2500000000],
    ["Rolls-Royce", "La Rose Noire Droptail", "luxury", 2830000000]

];


// ============================================================
// AUTOMATICALLY CREATE 1000+ DATABASE ENTRIES
// ============================================================

const cars = [];

const trims = [
    ["Base", 1.00],
    ["Comfort", 1.08],
    ["Premium", 1.16],
    ["Sport", 1.28],
    ["Performance", 1.42]
];

carModels.forEach((car, index) => {

    const brand = car[0];
    const model = car[1];
    const category = car[2];
    const basePrice = car[3];

    trims.forEach((trim, trimIndex) => {

        let price = Math.round(basePrice * trim[1]);

        // Keep special cars at their intended reference price
        if (
            model === "La Rose Noire Droptail" &&
            trim[0] === "Base"
        ) {
            price = 2830000000;
        }

        if (
            model === "Boat Tail" &&
            trim[0] === "Base"
        ) {
            price = 2640000000;
        }

        if (
            model === "Sweptail" &&
            trim[0] === "Base"
        ) {
            price = 1230000000;
        }

        cars.push({

            id: cars.length + 1,

            name: `${model} ${trim[0]}`,

            model: model,

            brand: brand,

            category: category,

            price: price,

            year: 2026,

            trim: trim[0],

            engine: "See manufacturer specifications",

            power: "Varies by variant",

            priceStatus:
                "Illustrative estimate — verify current price"

        });

    });

});


// ============================================================
// ADD MODEL-YEAR ENTRIES
// ============================================================

const importantModels = [
    ["Tata", "Nano", "hatchback", 250000],
    ["Maruti Suzuki", "Alto K10", "hatchback", 420000],
    ["Maruti Suzuki", "Swift", "hatchback", 600000],
    ["Maruti Suzuki", "Baleno", "hatchback", 650000],
    ["Tata", "Nexon", "suv", 800000],
    ["Hyundai", "Creta", "suv", 1100000],
    ["Kia", "Seltos", "suv", 1100000],
    ["Mahindra", "XUV700", "suv", 1400000],
    ["Toyota", "Fortuner", "suv", 3500000],
    ["BMW", "3 Series", "sedan", 6000000],
    ["Mercedes-Benz", "E-Class", "sedan", 8000000],
    ["Audi", "Q5", "suv", 7000000],
    ["Porsche", "911 Carrera", "sports", 20000000],
    ["Ferrari", "296 GTB", "supercar", 55000000],
    ["Lamborghini", "Revuelto", "supercar", 60000000],
    ["Bugatti", "Chiron", "hypercar", 250000000],
    ["Rolls-Royce", "Phantom", "luxury", 90000000]
];

importantModels.forEach(car => {

    const brand = car[0];
    const model = car[1];
    const category = car[2];
    const basePrice = car[3];

    [2022, 2023, 2024, 2025, 2026].forEach(year => {

        const multiplier = {
            2022: 0.82,
            2023: 0.88,
            2024: 0.94,
            2025: 0.98,
            2026: 1.00
        }[year];

        cars.push({

            id: cars.length + 1,

            name: `${model} (${year})`,

            model: model,

            brand: brand,

            category: category,

            price: Math.round(basePrice * multiplier),

            year: year,

            trim: "Model Year",

            engine: "See manufacturer specifications",

            power: "Varies by model year",

            priceStatus:
                "Illustrative estimate — verify current price"

        });

    });

});


// ============================================================
// PRICE FORMATTER
// ============================================================

function formatPrice(price) {

    if (price >= 10000000) {

        return "₹" +
            (price / 10000000)
                .toFixed(2)
                .replace(/\.00$/, "") +
            " Crore";

    }

    if (price >= 100000) {

        return "₹" +
            (price / 100000)
                .toFixed(2)
                .replace(/\.00$/, "") +
            " Lakh";

    }

    return "₹" + price.toLocaleString("en-IN");

}


// ============================================================
// PAGE ELEMENTS
// ============================================================

const budgetInput =
    document.getElementById("budget");

const searchInput =
    document.getElementById("search");
    
const findCarButton =
    document.getElementById("findCar");

const categorySelect =
    document.getElementById("category");

const brandSelect =
    document.getElementById("brand");

const sortSelect =
    document.getElementById("sort");

const carGrid =
    document.getElementById("carGrid");

const carCount =
    document.getElementById("carCount");

const featuredCars =
    document.getElementById("featuredCars");

const startButton =
    document.getElementById("startButton");


// ============================================================
// BRAND FILTER
// ============================================================

function createBrandOptions() {

    brandSelect.innerHTML = `
        <option value="all">All Brands</option>
    `;

    const brands = [
        "Audi",
        "BMW",
        "Bugatti",
        "Ferrari",
        "Ford",
        "Honda",
        "Hyundai",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Mahindra",
        "Maruti Suzuki",
        "McLaren",
        "Mercedes-Benz",
        "MG",
        "Nissan",
        "Porsche",
        "Rolls-Royce",
        "Skoda",
        "Tata",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
    ];

    brands.forEach(function (brand) {

        const option = document.createElement("option");

        option.value = brand;
        option.textContent = brand;

        brandSelect.appendChild(option);

    });
}
// ===================================================
// CAR IMAGE SYSTEM
// ===================================================

const carImages = {
   "Tata Nano": "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Nano%20.jpg",
"Tata Tiago": "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Tiago.jpg",
"Tata Curvv EV":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Curvv%20EV.jpg",

"Tata Nexon EV":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20Tata%20Nexon%20EV%20%28India%29%20front%20view.png",

    "Tata Harrier":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Buzzard%20Sport%20Genf%202019%201Y7A5793.jpg",

"Tata Altroz":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Altroz%20front%2020230617.jpg",

"Tata Punch":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Tata%20Punch%20Creative%20%28India%29%20front%20view%2001.png",

"Tata Tigor":
    "https://commons.wikimedia.org/wiki/Special:FilePath/TATA%20Tigor%20at%20Shillong%20Peak%20View%20%28cropped%29.jpg",
    
    "Tata Nexon":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Tata%20Nexon%20XZA%2B%20front%20view.jpg",
"Tata Safari": "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Safari.jpg",
"Tata Curvv": "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Curvv.jpg",
"Maruti Suzuki Alto K10": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20K10.jpg",
"Maruti Suzuki S-Presso": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20S-Presso.jpg",
"Maruti Suzuki Celerio": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Celerio.jpg",
"Maruti Suzuki Wagon R": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Wagon%20R.jpg",
"Maruti Suzuki Swift": "https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki%20Swift.jpg",
"Maruti Suzuki Dzire":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki%20Dzire%202024%20ZXI%2B.jpg",
"Maruti Suzuki Baleno":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Maruti%20Suzuki%20Baleno%20Alpha%20%28India%29%20front%20view.jpg",
"Maruti Suzuki Fronx": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Fronx.jpg",
"Maruti Suzuki Ignis": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Ignis.jpg",

"Maruti Suzuki Ciaz":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Maruti%20Suzuki%20Ciaz%20Alpha%20Smart%20Hybrid.jpg",
"Maruti Suzuki Brezza": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Brezza.jpg",
"Maruti Suzuki Ertiga":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Ertiga%283%29.jpg",
"Maruti Suzuki XL6": "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20XL6%20(front).jpg",
"Maruti Suzuki Grand Vitara": "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Maruti%20Suzuki%20Grand%20Vitara%20Alpha%20Smart%20Hybrid%20(India)%20front%20view.png",
"Maruti Suzuki Jimny": "https://commons.wikimedia.org/wiki/Special:FilePath/Suzuki%20Jimny.jpg",
"Maruti Suzuki Invicto":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Maruti%20Suzuki%20Invicto%20Hybrid%20Alpha%2B%207-Seater.png",
"Hyundai Venue": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Venue.jpg",
"Hyundai Verna": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Verna.jpg",
"Hyundai Creta": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta.jpg",
"Hyundai Grand i10 Nios":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Hyundai%20Grand%20i10%20Nios%201.0AT%20Standard%20red%20front%20view%20in%20Brunei.jpg",

"Hyundai i20":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Hyundai%20i20.jpg",

"Hyundai Aura":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20Hyundai%20Aura%20Front.png",

"Hyundai Alcazar":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Hyundai%20Alcazar%201.5%20Prestige%20%28India%29%20front%20view.png",

"Hyundai Exter":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Hyundai%20Exter.jpg",
"Hyundai Tucson": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Tucson.jpg",
"Hyundai Ioniq 5": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Ioniq%205.jpg",
"Hyundai Ioniq 6": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Ioniq%206%20%282023%29%20%2853332122607%29.jpg",

"Hyundai Kona Electric": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Kona%20Electric%20%282024%29%20%2854523744795%29.jpg",
"Kia Seltos": "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Seltos.jpg",
"Kia Carnival": "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Carnival.jpg",
"Kia EV6": "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20EV6.jpg",
"Kia EV9": "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Kia%20EV9.jpg",
"Kia Sonet": "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Sonet%2002.jpg",
"Kia Carens": "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Carens%202024%20Model%203.jpg",
"Mahindra Bolero":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Bolero%20Gen%203.jpg",

    "Mahindra Bolero Neo":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Bolero%20Gen%203.jpg",

"Mahindra Scorpio": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Scorpio.JPG",
"Mahindra Thar": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar.jpg",
"Mahindra Thar Roxx": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar%20ROXX%20on%20rocks.jpg",

"Mahindra BE 6": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20BE6%20pic%201%20%28cropped%29.jpg",

"Mahindra XEV 9e": "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Vehicle%20Expo%202025%20%28Bangalore%20International%20Exhibition%20Centre%29%20101.jpg",

"Mahindra Scorpio N": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Mahindra%20Scorpio%20Z8L%20front.jpg",

"Mahindra XUV 3XO": "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20XUV%203XO.jpg",

"Mahindra Marazzo":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Marazzo%20MPV%20SEP%2018%20%281%29.jpg",
"Mahindra XUV700": "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Mahindra%20XUV700%202.2%20AX7%20%28India%29%20front%20view.png",
"Toyota Glanza": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Glanza.jpg",
"Toyota Urban Cruiser Hyryder": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Urban%20Cruiser%20Hyryder.jpg",

"Toyota Camry": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Camry.jpg",
"Toyota Innova HyCross":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Zenix%202.0%20V%202023%20%287%29.jpg",

    "Toyota Rumion":
    "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Right%20Front%20Three%20Quarter%20image%20of%20the%20Toyota%20Rumion.jpg",

"Toyota Fortuner": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Fortuner%20India.jpg",

"Toyota Land Cruiser 300": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Land%20Cruiser%20300.jpg",
"Toyota Vellfire": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Vellfire.jpg",
"Toyota Hilux": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Hilux.jpg",
"Honda Amaze":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Amaze%20%28front%29.png",

"Honda City":
    "https://commons.wikimedia.org/wiki/Special:FilePath/HondaCity.JPG",

"Honda Civic":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20civic.jpg",

"Honda Accord":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda-Accord.jpg",

"Honda CR-V":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20CR-V.jpg",
    "Honda Elevate":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Honda%20Elevate%20VX%20%28India%29%20front%20view.jpg",
"Volkswagen Polo": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Polo.jpg",
"Volkswagen Virtus":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Volkswagen%20Virtus%201.5%20GT%20%28India%29%20front%20view%2001.png",
"Volkswagen ID.4":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20ID.4.png",

"Volkswagen ID.7":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20ID.7%20124319842.jpg",

    "Volkswagen Taigun":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Volkswagen%20Taigun%201.5%20TSI%20GT%20%28India%29%20front%20view%2001.png",
"Volkswagen Tiguan": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Tiguan.jpg",
"Volkswagen Golf": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Golf.jpg",
"Volkswagen Passat": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Passat.jpg",
"Volkswagen Arteon": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Arteon.jpg",
"Volkswagen Touareg": "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Touareg.jpg",
"Skoda Kushaq": "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Kushaq.jpg",
"Skoda Slavia":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20%C5%A0koda%20Slavia%201.5%20TSI%20Style%20%28India%29%20front%20view.png",
"Skoda Kylaq":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Skoda%20Kylaq.png",

"Skoda Kodiaq":
    "https://commons.wikimedia.org/wiki/Special:FilePath/%C5%A0KODA%20Kodiaq.jpg",
"Skoda Superb": "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Superb.jpg",
"Skoda Octavia": "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Octavia.jpg",
"Skoda Enyaq": "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Enyaq.jpg",
"MG Comet EV": "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20Comet%20EV.jpg",
"MG Gloster":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20MG%20Gloster%202.0%20Savvy%20%28India%29%20front%20view.png",

"MG Astor":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20MG%20Astor%20Sharp%20220%20Turbo%20%28India%29%20front%20view.png",

"MG Hector":
    "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20Hector%20Diesel%20%28India%29%20front%20view.png",

"MG Hector Plus":
    "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20Hector%20Plus%20%28India%29%20front%20view%20%282%29.png",
"MG ZS EV": "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20ZS%20EV.jpg",
"MG Windsor EV": "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20Windsor%20EV.jpg",
"MG Cyberster": "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20Cyberster.jpg",
"Jeep Meridian":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep%20Commander.jpg",
"Jeep Compass":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep%20Compass.jpg",

"Jeep Wrangler":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep%20Wrangler.JPG",

"Jeep Grand Cherokee":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep%20Grand%20Cherokee.jpg",

"Jeep Gladiator":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep%20Gladiator.jpg",
"BMW 2 Series": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%202%20Series.jpg",
"BMW 3 Series": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%203%20Series.jpg",
"BMW 4 Series": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%204%20Series.jpg",
"BMW 5 Series": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%205%20Series.jpg",
"BMW 7 Series": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%207%20Series.jpg",
"BMW 8 Series": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%208%20Series.jpg",
"BMW X1":
    "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X1%20%282022-present%29.jpg",
"BMW i5":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20BMW%20i5.jpg",

"BMW iX":
    "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20iX%20IMG%202261.jpg",

"BMW X3":
    "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X3%202.jpg",
"BMW X5": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X5.jpg",
"BMW X6": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X6.jpg",
"BMW X7": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20X7.jpg",
"BMW XM": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20XM.jpg",
"BMW i4": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i4.jpg",
"BMW i7": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20i7.jpg",
"BMW Z4": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20Z4.jpg",
"BMW M2": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M2.jpg",
"BMW M3": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3.jpg",
"BMW M4": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M4.jpg",
"BMW M5": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5.jpg",
"Mercedes-Benz A-Class": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20A-Class.jpg",

"Mercedes-Benz E-Class": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20E-Class.jpg",
"Mercedes-Benz Maybach S-Class":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Maybach%20S-Class.jpg",
    "Mercedes-Benz CLA":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20CLA%20250%20Coup%C3%A9%20%28C118%2C%202026%29%20%2855253184790%29.jpg",
"Mercedes-Benz GLC": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20GLC.jpg",
"Mercedes-Benz GLS":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes%E2%80%91Benz%20GLS.jpg",
"Mercedes-Benz G-Class": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20G-Class.jpg",
"Mercedes-Benz AMG GT": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG%20GT.jpg",
"Mercedes-Benz SL": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20SL.jpg",
"Mercedes-Benz C-Class":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Mercedes-Benz%20C-Class%20-%2001.jpg",
"Mercedes-Benz CLE":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20CLE%20300%20Coup%C3%A9%20%28C236%2C%202025%29%20%2855012870355%29.jpg",
"Mercedes-Benz GLA":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20GLA%20180%20AMG%20Line%20%28H%20247%2C%20Facelift%29%20%E2%80%93%20f%2005072025.jpg",
"Mercedes-Benz GLB":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20GLB%20%28X247%29%20%2848816725736%29.jpg",
"Mercedes-Benz GLE":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20GLE%20%28W167%29.jpg",
"Mercedes-Benz S-Class": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20S-Class.jpg",
"Mercedes-Benz Maybach GLS": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes%20Maybach%20GLS.jpg",
"Audi A3": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20A3.jpg",
"Audi A4": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20A4.jpg",
"Audi A5": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20A5.jpg",
"Audi A6": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20A6.jpg",
"Audi A7": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20A7.jpg",
"Audi A8":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20A8.JPG",
"Audi Q3": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20Q3.jpg",
"Audi Q5": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20Q5.jpg",
"Audi Q7": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20Q7.jpg",
"Audi Q8": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20Q8.jpg",
"Audi RS3": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20RS3.jpg",
"Audi RS5": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20RS5.jpg",
"Audi RS6": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20RS6.jpg",
"Audi RS7": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20RS7.jpg",
"Audi RS Q8": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20RS%20Q8%20%282019%29%20%2853322911293%29.jpg",
"Audi R8": "https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20R8.jpg",
"Porsche 718 Cayman": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20718%20Cayman.jpg",

"Porsche 911 Carrera": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20911%20Carrera.jpg",
"Porsche 911 Carrera S": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20911%20Carrera%20S.jpg",
"Porsche 911 Turbo S": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20911%20Turbo%20S.jpg",
"Porsche 911 GT3": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20911%20GT3.jpg",
"Porsche 911 GT3 RS": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20911%20GT3%20RS.jpg",
"Porsche Taycan": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Taycan.jpg",
"Porsche Taycan Turbo": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Taycan%20Turbo.jpg",
"Porsche Macan": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Macan.jpg",
"Porsche 718 Boxster": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20718%20Boxster%202025051501.jpg",

"Porsche Macan Electric": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Macan%20Electric%20XAB%20Jet%20Black%20Metallic%2001.jpg",
"Porsche Cayenne": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche-Cayenne.jpg",
"Porsche Panamera": "https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Panamera.jpg",
"Ferrari Roma Spider": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20Roma%20Spider.jpg",
"Ferrari 296 GTB": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20296%20GTB.jpg",
"Ferrari 296 GTS": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20296%20GTS.jpg",
"Ferrari SF90 Spider": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20SF90%20Spider.jpg",
"Ferrari 812 Superfast": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20812%20Superfast.jpg",
"Ferrari 812 GTS": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20812%20GTS.jpg",
"Ferrari Roma":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20Roma.jpg",

"Ferrari SF90 Stradale":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2019%20Ferrari%20SF90%20Stradale.jpg",

"Ferrari Purosangue":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20Purosangue.jpg",
"Ferrari 12Cilindri": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%2012Cilindri.jpg",
"Ferrari Daytona SP3": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20Daytona%20SP3.jpg",
"Ferrari LaFerrari": "https://commons.wikimedia.org/wiki/Special:FilePath/LaFerrari.jpg",
"Ferrari LaFerrari Aperta": "https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20LaFerrari%20Aperta.jpg",
"Lamborghini Huracan": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Huracan.jpg",
"Lamborghini Huracan STO": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Huracan%20STO.jpg",
"Lamborghini Urus": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Urus.jpg",
"Lamborghini Urus S": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Urus%20S.jpg",
"Lamborghini Urus Performante": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Urus%20Performante.jpg",
"Lamborghini Revuelto": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Revuelto.jpg",
"Lamborghini Aventador": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Aventador.jpg",
"Lamborghini Aventador SVJ": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Aventador%20SVJ.jpg",
"Lamborghini Countach LPI 800-4": "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Countach%20LPI%20800-4.jpg",

"Lamborghini Sian FKP 37": "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Lamborghini%20Sian%20FKP%2037.jpg",
"McLaren 570S":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20570S.jpg",

"McLaren 720S":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20720s.jpg",

"McLaren 750S":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20750S.jpg",

"McLaren 765LT":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20765LT.jpg",

"McLaren Artura":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20Artura.jpg",

"McLaren Senna":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20Senna%201.jpg",

"McLaren Speedtail":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20Speedtail.jpg",

"McLaren Elva":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20Elva.jpg",

"McLaren P1":
    "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20P1.jpg",
"McLaren 600LT": "https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20600LT.jpg",
"Bugatti Veyron": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Veyron.jpg",
"Bugatti Veyron Super Sport": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Veyron%20Super%20Sport.jpg",
"Bugatti Chiron": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Chiron.jpg",
"Bugatti Chiron Sport": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Chiron%20Sport.jpg",
"Bugatti Chiron Super Sport": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Chiron%20Super%20Sport.jpg",
"Bugatti Divo": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Divo.jpg",
"Bugatti Centodieci": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Centodieci.jpg",
"Bugatti La Voiture Noire": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20La%20Voiture%20Noire.jpg",
"Bugatti Bolide": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Bolide.jpg",
"Bugatti Mistral": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Mistral.jpg",
"Bugatti Tourbillon": "https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Tourbillon.jpg",
"Pagani Zonda": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Zonda.jpg",
"Pagani Zonda F": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Zonda%20F.jpg",
"Pagani Zonda Cinque": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Zonda%20Cinque.jpg","Pagani Huayra": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Huayra.jpg",
"Pagani Huayra BC": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Huayra%20BC.jpg",
"Pagani Huayra Roadster": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Huayra%20Roadster.jpg",
"Pagani Zonda HP Barchetta":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Zonda%20HP%20Barchetta.jpg",

"Pagani Huayra R":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Huayra%20R.jpg",

"Pagani Huayra Codalunga":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Pagani%20Huayra%20Codalunga.jpg",

"Pagani Utopia": "https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Utopia.jpg",
"Koenigsegg CCX": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20CCX.jpg",
"Koenigsegg Agera": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Agera.jpg",
"Koenigsegg Agera R": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Agera%20R.jpg",
"Koenigsegg Agera RS": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Agera%20RS.JPG",
"Koenigsegg Jesko": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Jesko.jpg",
"Koenigsegg Jesko Absolut": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Jesko%20Absolute.jpg",
"Koenigsegg Regera": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Regera.jpg",
"Koenigsegg Gemera": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Gemera.jpg",
"Koenigsegg One:1": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20One1.jpg",
"Koenigsegg CC850": "https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20CC850.jpg",
"Rolls-Royce Ghost":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Ghost%20-%2001.jpg",
"Rolls-Royce Ghost Extended":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Ghost%20Extended%20II%20Tempest%20Grey%20%281%29.jpg",
"Rolls-Royce Phantom": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Phantom.jpg",
"Rolls-Royce Phantom Extended":
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023-04%20BMW%20Welt%20RR-Phantom-Extended.jpg",
"Rolls-Royce Cullinan": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Cullinan.jpg",
"Rolls-Royce Cullinan Black Badge": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Cullinan%20Black%20Badge.jpg",
"Rolls-Royce Spectre": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Spectre.jpg",
"Rolls-Royce Wraith": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Wraith.jpg",
"Rolls-Royce Dawn": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Dawn.jpg",
"Rolls-Royce Sweptail":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Sweptail%20front.jpg",
"Rolls-Royce Boat Tail": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Boat%20Tail%20rear.png",
"Rolls-Royce Droptail": "https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce%20Droptail.jpg",
"Rolls-Royce La Rose Noire Droptail": "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Rose%20Noire%20Droptail.jpg",


};


// ============================================================
// CREATE CAR CARD
// ============================================================

function createCarCard(car) {

    const card = document.createElement("div");

    card.className = "car-card";

    const imageKey = `${car.brand} ${car.model}`;

    const imageUrl =
        carImages[imageKey] ||
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80";

    card.innerHTML = `
        <div class="car-image">
            <img
                src="${imageUrl}"
                alt="${car.brand} ${car.model}"
                loading="lazy"
            >
        </div>

        <div class="car-info">

            <p class="car-category">
                ${car.category}
            </p>

            <h3>
                ${car.brand} ${car.model}
            </h3>

            <div class="car-price">
                ${formatPrice(car.price)}
            </div>

            <button class="view-car">
                VIEW DETAILS
            </button>

        </div>
    `;

    card.addEventListener("click", function () {
        showCarDetails(car);
    });

    return card;
}


// ============================================================
// DISPLAY CARS
// ============================================================

function displayCars(list) {

    carGrid.innerHTML = "";

    carCount.textContent = `${list.length} cars`;

    list.forEach(function (car) {

        const card = createCarCard(car);

        carGrid.appendChild(card);

    });
}


// ============================================================
// FILTER + SORT
// ============================================================

function updateCars() {

    let filteredCars =
        [...cars];

    const category =
        categorySelect.value;

    const brand =
        brandSelect.value;

    const sort =
        sortSelect.value;

        const search =
    searchInput.value
        .trim()
        .toLowerCase();

    if (category !== "all") {

        filteredCars =
            filteredCars.filter(
                car =>
                    car.category === category
            );

    }


    if (brand !== "all") {

        filteredCars =
            filteredCars.filter(
                car =>
                    car.brand === brand
            );

    }

    if (search !== "") {

    filteredCars =
        filteredCars.filter(car =>

            car.name
                .toLowerCase()
                .includes(search)

            ||

            car.model
                .toLowerCase()
                .includes(search)

            ||

            car.brand
                .toLowerCase()
                .includes(search)

        );

}

    if (sort === "expensive") {

        filteredCars.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "cheap") {

        filteredCars.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "name") {

        filteredCars.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    displayCars(filteredCars);

}


// ===================================================
// MOST EXPENSIVE CAR THE USER CAN AFFORD
// ===================================================

findCarButton.addEventListener("click", function () {

    const budget = Number(budgetInput.value);
    const search = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const brand = brandSelect.value;

    if (!budget || budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    let affordableCars = [...cars];

    if (search !== "") {
        affordableCars = affordableCars.filter(car =>
            car.name.toLowerCase().includes(search) ||
            car.model.toLowerCase().includes(search) ||
            car.brand.toLowerCase().includes(search)
        );
    }

    if (category !== "all") {
        affordableCars = affordableCars.filter(
            car => car.category === category
        );
    }

    if (brand !== "all") {
        affordableCars = affordableCars.filter(
            car => car.brand === brand
        );
    }

    affordableCars = affordableCars.filter(
        car => car.price <= budget
    );

    affordableCars.sort(
        (a, b) => b.price - a.price
    );

    if (affordableCars.length === 0) {

        carGrid.innerHTML = `
            <div class="empty-result">
                <h3>No matching car found</h3>
                <p>Try increasing your budget or changing your filters.</p>
            </div>
        `;

        carCount.textContent = "0 cars";
        return;
    }

    // MOST EXPENSIVE CAR THE USER CAN AFFORD
    const bestCar = affordableCars[0];

    displayCars([bestCar]);

    document
        .getElementById("cars")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ===================================================
// FILTER EVENTS
// ===================================================

categorySelect.addEventListener(
    "change",
    updateCars
);

brandSelect.addEventListener(
    "change",
    updateCars
);

sortSelect.addEventListener(
    "change",
    updateCars
);

searchInput.addEventListener(
    "input",
    updateCars
);

// ============================================================
// FILTER EVENTS
// ============================================================

categorySelect.addEventListener(
    "change",
    updateCars
);

brandSelect.addEventListener(
    "change",
    updateCars
);

sortSelect.addEventListener(
    "change",
    updateCars
);

searchInput.addEventListener(
    "input",
    updateCars
);

// ============================================================
// FIND FEATURED CARS
// ============================================================

function findCar(
    brand,
    model
) {

    return cars.find(
        car =>
            car.brand === brand &&
            car.model === model
    );

}


// ============================================================
// FEATURED CARS
// ============================================================

function displayFeaturedCars() {

    const featured = [

        findCar(
            "Tata",
            "Nano"
        ),

        findCar(
            "Lamborghini",
            "Revuelto"
        ),

        findCar(
            "Rolls-Royce",
            "La Rose Noire Droptail"
        )

    ].filter(Boolean);


    featuredCars.innerHTML = "";


    featured.forEach(
        (car, index) => {

            featuredCars.insertAdjacentHTML(

                "beforeend",

                `

                <article class="featured-card">

                    <div class="rank">

                        0${index + 1}
                        / FEATURED

                    </div>

                    <h3>

                        ${car.model}

                    </h3>

                    <div class="featured-brand">

                        ${car.brand}

                    </div>

                    <div class="featured-price">

                        ${formatPrice(car.price)}

                    </div>

                </article>

                `

            );

        }
    );

}


// ============================================================
// CAR DETAILS
// ============================================================

function showCarDetails(car) {

    document.getElementById("modalName").textContent =
        car.name;

    document.getElementById("modalBrand").textContent =
        car.brand;

    document.getElementById("modalPrice").textContent =
        formatPrice(car.price);

    document.getElementById("modalCategory").textContent =
        car.category.toUpperCase();

    document.getElementById("modalCategory2").textContent =
        car.category.toUpperCase();

    document.getElementById("modalYear").textContent =
        car.year;

    document.getElementById("modalTrim").textContent =
        car.trim;

    document.getElementById("modalStatus").textContent =
        car.priceStatus;

    document.getElementById("carModal").classList.add("active");
}
// CLOSE POPUP

document
    .getElementById("closeModal")
    .addEventListener("click", function () {

        document
            .getElementById("carModal")
            .classList.remove("active");

    });


// CLOSE WHEN CLICKING OUTSIDE

document
    .getElementById("carModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            this.classList.remove("active");

        }

    });


// CLOSE WITH ESCAPE KEY

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            document
                .getElementById("carModal")
                .classList.remove("active");

        }

    }
);



// ============================================================
// HERO BUTTON
// ============================================================

startButton.addEventListener(
    "click",
    function () {

        document
            .getElementById("cars")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// ============================================================
// START
// ============================================================

createBrandOptions();

displayFeaturedCars();

updateCars();


console.log(
    "THE PLACE YOU WANT loaded with " +
    cars.length +
    " database entries."
);