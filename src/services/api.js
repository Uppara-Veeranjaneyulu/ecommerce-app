import emailjs from '@emailjs/browser';

export const PRODUCTS = [
    // --- WATCHES (Accessories / Horology) --- 15 Items
    {
        id: 1,
        name: "Obsidian Slate Watch",
        price: 299.99,
        description: "Premium dark aesthetic with precision engineering.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 22,
        name: "Midnight Chronograph",
        price: 450.00,
        description: "Sophisticated multi-dial watch with sapphire glass.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 23,
        name: "Neural Smartwatch",
        price: 380.00,
        description: "Next-gen biometrics in a sleek titanium frame.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 24,
        name: "Deep Sea Diver",
        price: 520.00,
        description: "Rugged waterproof watch for extreme deep-sea expeditions.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 45,
        name: "Solaris Eclipse",
        price: 310.00,
        description: "Solar-powered luxury timepiece with a minimalist dial.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 46,
        name: "Aero Pilot Gold",
        price: 680.00,
        description: "Classic aviation design with 18k gold accents.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1544117518-e79632101bb9?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 47,
        name: "Onyx Minimalist",
        price: 150.00,
        description: "Thin profile matte black watch for daily elegance.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 48,
        name: "Titanium Tech-Watch",
        price: 420.00,
        description: "Modular smartwatch with interchangeable mechanical dials.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1507702553912-a15641e527c8?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 49,
        name: "Copper Heritage",
        price: 275.00,
        description: "Brushed copper case with a distressed leather strap.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 50,
        name: "Zenith Skeleton",
        price: 890.00,
        description: "Exquisite automatic movement visible through transparent glass.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 51,
        name: "Emerald Horizon",
        price: 340.00,
        description: "Deep green sunburst dial with a stainless steel link bracelet.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 52,
        name: "Carbon Racer",
        price: 495.00,
        description: "Lightweight carbon fiber construction for performance driving.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1548036696-91627f722ec1?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 53,
        name: "Lunar Phase",
        price: 550.00,
        description: "Accurate moon phase tracking with a starry night background.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595dd?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 54,
        name: "Vintage Bronze",
        price: 230.00,
        description: "Bronze case that develops a unique patina over time.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
        rating: 4.4
    },
    {
        id: 55,
        name: "Diamond Stealth",
        price: 1200.00,
        description: "Black diamonds set in a sandblasted titanium casing.",
        category: "Watches",
        image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800",
        rating: 5.0
    },

    // --- SHOES (Footwear) --- 15 Items
    {
        id: 20,
        name: "Terra Trail Shoes",
        price: 165.00,
        description: "All-terrain running shoes with superior grip.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 25,
        name: "Urban Stealth Sneakers",
        price: 185.00,
        description: "Lightweight, breathable, and designed for the city explorer.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 26,
        name: "Apex Mountain Boots",
        price: 240.00,
        description: "Heavy-duty boots for the most challenging terrain.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 27,
        name: "Noir Classic Loafers",
        price: 210.00,
        description: "Premium leather loafers for a sharp, minimalist look.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 56,
        name: "Flux Running Trainers",
        price: 135.00,
        description: "Responsive foam cushioning for explosive speed.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 57,
        name: "Carbon Plate Runners",
        price: 250.00,
        description: "Integrated carbon plate for maximum energy return.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 58,
        name: "Desert Trek Boots",
        price: 195.00,
        description: "Heat-reflective ventilation for extreme desert conditions.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 59,
        name: "Monolith Hi-Tops",
        price: 220.00,
        description: "Structural design with reinforced ankle support.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 60,
        name: "Vero Leather Boots",
        price: 380.00,
        description: "Hand-stitched Italian leather for timeless style.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 61,
        name: "Phantom Gym Shoes",
        price: 110.00,
        description: "Low-profile design for stable lifting and training.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 62,
        name: "Lunar Space Walkers",
        price: 275.00,
        description: "Futuristic silhouette with reflective holographic panels.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 63,
        name: "Breeze Mesh Loafers",
        price: 95.00,
        description: "Ultra-thin mesh for ultimate summer breathability.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
        rating: 4.3
    },
    {
        id: 64,
        name: "Glacier Ice Boots",
        price: 320.00,
        description: "Extreme insulation for sub-zero mountain environments.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 65,
        name: "Velvet Evening Oxford",
        price: 450.00,
        description: "Deep emerald velvet with silk silk laces.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800",
        rating: 5.0
    },
    {
        id: 66,
        name: "Cloud Sandal",
        price: 75.00,
        description: "Memory foam footbed for a walking-on-air feel.",
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },

    // --- ELECTRONICS & GADGETS --- 15 Items
    {
        id: 3,
        name: "Emerald Sound Pro",
        price: 199.00,
        description: "Crystal clear audio with deep forest green accents.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 28,
        name: "Lumina Smart Ring",
        price: 299.00,
        description: "Discrete health tracking and NFC payments on your finger.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 29,
        name: "Pulse Portable Projector",
        price: 499.00,
        description: "Cinema-quality visuals in the palm of your hand.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 30,
        name: "Titan Blade Laptop",
        price: 1899.00,
        description: "Ultra-thin powerful workstation for modern creators.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 31,
        name: "Horizon VR Headset",
        price: 599.00,
        description: "Immersive virtual reality with zero-latency tracking.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1592477342415-eb89d813735e?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 8,
        name: "Aether Wireless Mouse",
        price: 119.00,
        description: "Ergonomic gaming mouse with aurora-inspired lighting.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 32,
        name: "Solar Pod Powerbank",
        price: 85.00,
        description: "High-capacity solar charging for off-grid adventures.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1625805545934-2e90e722601c?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 67,
        name: "Sonic Earbuds X",
        price: 155.00,
        description: "Active noise cancellation with 40-hour battery life.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 68,
        name: "Vantage Drone 4K",
        price: 849.00,
        description: "Pro-grade aerial photography with AI object tracking.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1473960103265-9931586c6052?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 69,
        name: "Echo Smart Hub",
        price: 129.00,
        description: "Central command for all your connected devices.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 70,
        name: "Nebula Mechanical Keys",
        price: 210.00,
        description: "RGB mechanical keyboard with custom linear switches.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 71,
        name: "Apeiron Tablet Pro",
        price: 1099.00,
        description: "STunning OLED display for digital artists and professionals.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 72,
        name: "Quantum Soundbar",
        price: 350.00,
        description: "Immersive 3D audio experience for your home theater.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 73,
        name: "Spectra LED Strip",
        price: 45.00,
        description: "Programmable bias lighting for the ultimate setup.",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
        rating: 4.4
    },
    {
        id: 74,
        name: "Core External SSD",
        price: 180.00,
        description: "RUGged 4TB storage with lightning-fast transfer speeds.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },

    // --- SPECTACLES (Eyewear) --- 10 Items
    {
        id: 15,
        name: "Graphite Sun Glasses",
        price: 185.00,
        description: "Polarized lenses with lightweight acetate frames.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1511499767350-a1590fdb2ca8?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 33,
        name: "Amber Blue-Light Blockers",
        price: 120.00,
        description: "Engineered to protect your eyes during long focus sessions.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 34,
        name: "Crimson Vision Protectors",
        price: 210.00,
        description: "Advanced UV protection with a bold, futuristic red tint.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1509100104035-9e427e85a52b?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 35,
        name: "Minimalist Clear Frames",
        price: 155.00,
        description: "Sleek, transparent frames that complement any style.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 75,
        name: "Obsidian Aviators",
        price: 225.00,
        description: "Matte black titanium frames with dark-tinted glass.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1511499767350-a1590fdb2ca8?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 76,
        name: "Jade Cat-Eye Frames",
        price: 140.00,
        description: "Hand-polished green acetate for a touch of vintage flair.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1473496169004-9efc862145e1?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 77,
        name: "Stealth Sport Shields",
        price: 195.00,
        description: "Wraparound protection for cycling and high-velocity sports.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 78,
        name: "Chrome Rectangulars",
        price: 130.00,
        description: "Minimalist chrome-finished metal frames.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800",
        rating: 4.4
    },
    {
        id: 79,
        name: "Azure Tinted Glasses",
        price: 175.00,
        description: "Cool blue gradient lenses for relaxed beach vibes.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1509100104035-9e427e85a52b?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 80,
        name: "Smart Glass Prototype",
        price: 899.00,
        description: "Heads-up display integrated into a classic silhouette.",
        category: "Spectacles",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },

    // --- FURNITURE & DECOR --- 15 Items
    {
        id: 17,
        name: "Zenith Table Lamp",
        price: 210.00,
        description: "Sculptural brass lamp with soft mood lighting.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 81,
        name: "Eames-Style Lounge",
        price: 1250.00,
        description: "A mid-century modern icon in premium top-grain leather.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 82,
        name: "Obsidian Side Table",
        price: 340.00,
        description: "Sleek black marble surface with hidden storage.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 83,
        name: "Minimalist Oak Desk",
        price: 750.00,
        description: "Solid oak construction with built-in cable management.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 84,
        name: "Velvet Emerald Sofa",
        price: 2100.00,
        description: "Luxurious 3-seater sofa with gold-plated legs.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
        rating: 5.0
    },
    {
        id: 85,
        name: "Geometric Rug",
        price: 420.00,
        description: "Hand-tufted wool rug with bold monochromatic patterns.",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 86,
        name: "Nordic Pendant Light",
        price: 185.00,
        description: "Matte black aluminum shade for industrial elegance.",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 87,
        name: "Floating Wall Shelf",
        price: 95.00,
        description: "Invisible mounting for a seamless display of your collectibles.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1594420612952-3a339ebe0a3e?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 88,
        name: "Ergo-Lift Standing Desk",
        price: 1100.00,
        description: "Motorized height adjustment with 4 memory presets.",
        category: "Home Office",
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 89,
        name: "Task Master Chair",
        price: 850.00,
        description: "High-back mesh chair with adjustable lumbar support.",
        category: "Home Office",
        image: "https://images.unsplash.com/photo-1505797149-43b00fe27471?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 90,
        name: "Acoustic Wall Panels",
        price: 150.00,
        description: "Geometric felt panels to reduce echo and look great.",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800",
        rating: 4.4
    },
    {
        id: 91,
        name: "Leather Blotter Matt",
        price: 65.00,
        description: "Full-grain leather surface for a premium desk feel.",
        category: "Home Office",
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 92,
        name: "Ceramic Planter Set",
        price: 55.00,
        description: "Three minimalist pots for your indoor greenery.",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 93,
        name: "Abstract Bronze Sculpture",
        price: 310.00,
        description: "A unique centerpiece for your modern living room.",
        category: "Decor",
        image: "https://images.unsplash.com/photo-1544416155-12df9643f363?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 94,
        name: "Walnut Monitor Stand",
        price: 110.00,
        description: "Elevates your screen to eye level with a warm wood finish.",
        category: "Home Office",
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },

    // --- GEAR & LIFESTYLE (Remaining Items to fill ~120 total) ---
    {
        id: 2,
        name: "Forest Peak Backpack",
        price: 129.50,
        description: "Durable, waterproof, and designed for the modern explorer.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 16,
        name: "Summit Shell Jacket",
        price: 399.00,
        description: "Gore-Tex protection for extreme mountain conditions.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1508103774486-7cd4399d2ee1?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 10,
        name: "Stealth Water Bottle",
        price: 49.00,
        description: "Vacuum insulated flask with matte black finish.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1602143399032-601440056553?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 4,
        name: "Midnight Desk Mat",
        price: 45.00,
        description: "Minimalist felt surface for maximum productivity.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 95,
        name: "Aether Travel Kit",
        price: 65.00,
        description: "Waterproof dopp kit for your premium grooming essentials.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 96,
        name: "Lunar Duffel Bag",
        price: 185.00,
        description: "Sleek carry-on with dedicated tech compartment.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 97,
        name: "Obsidian Field Notes",
        price: 15.00,
        description: "Pocket-sized notebook with durable black covers.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 98,
        name: "Copper Flask 8oz",
        price: 42.00,
        description: "Traditional design with a modern copper finish.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 99,
        name: "Titanium Key Carabiner",
        price: 35.00,
        description: "Integrated bottle opener and rapid clip mechanism.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1602143399032-601440056553?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 100,
        name: "Verdant Yoga Mat",
        price: 95.00,
        description: "Natural rubber with extra grip for deep focus.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 101,
        name: "Deep Forest Umbrella",
        price: 55.00,
        description: "Windproof structure with a rich emerald green canopy.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1531303435785-3853ba035cda?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 102,
        name: "Graphite Gym Duffel",
        price: 120.00,
        description: "Odor-resistant fabric with separate shoe tunnel.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 103,
        name: "Minimalist Toothbrush",
        price: 18.00,
        description: "Recycled aluminum handle with biodegradable bristles.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
        rating: 4.4
    },
    {
        id: 104,
        name: "Shadow Card Holder",
        price: 45.00,
        description: "Ultra-slim front-pocket wallet in black saffiano.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 105,
        name: "Zenith Gravity Monitor",
        price: 899.00,
        description: "Zero-latency audio monitoring for professional studios.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800",
        rating: 5.0
    }
];

export const fetchProducts = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return PRODUCTS;
};


export const createOrder = async (orderData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newOrder = {
        ...orderData,
        id: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        date: new Date().toISOString(),
        status: 'Processing'
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.unshift(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Real Email Sending via EmailJS
    if (orderData.userEmail) {
        try {
            const templateParams = {
                to_email: orderData.userEmail,
                order_id: newOrder.id,
                total_amount: orderData.amount.toFixed(2),
                item_count: orderData.items.length,
                order_items: orderData.items.map(i => `${i.quantity}x ${i.name}`).join(', ')
            };

            // Only attempt if keys are provided
            if (import.meta.env.VITE_EMAILJS_SERVICE_ID !== 'your_service_id') {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
                console.log("Real email sent successfully via EmailJS");
            }
        } catch (emailError) {
            console.error("Failed to send real email:", emailError);
        }

        // Keep session log for immediate feedback
        console.log(`
        -----------------------------------------
        Order Confirmation Log: ${orderData.userEmail}
        -----------------------------------------
        Hello! 
        
        Thank you for your order ${newOrder.id}.
        Total: $${orderData.amount.toFixed(2)}
        Items: ${orderData.items.length}
        Status: Order is being prepped for shipment.
        
        Best regards,
        UXE_STORE Team
        -----------------------------------------
        `);
    }

    return { success: true, orderId: newOrder.id, sentTo: orderData.userEmail };
};

export const fetchOrders = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return JSON.parse(localStorage.getItem('orders') || '[]');
};
