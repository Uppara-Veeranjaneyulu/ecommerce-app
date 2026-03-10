export const PRODUCTS = [
    {
        id: 1,
        name: "Obsidian Slate Watch",
        price: 299.99,
        description: "Premium dark aesthetic with precision engineering.",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
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
        id: 3,
        name: "Emerald Sound Pro",
        price: 199.00,
        description: "Crystal clear audio with deep forest green accents.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
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
        id: 5,
        name: "Carbon Steel Wallet",
        price: 89.00,
        description: "Ultra-slim RFID blocking wallet for daily carry.",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
    },
    {
        id: 6,
        name: "Verdant Keycap Set",
        price: 75.00,
        description: "Double-shot PBT keycaps with custom green legends.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1595225405013-989787b92314?auto=format&fit=crop&q=80&w=800",
        rating: 4.4
    }
];

export const fetchProducts = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return PRODUCTS;
};

export const createOrder = async (orderData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Order Created:", orderData);
    return { success: true, orderId: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase() };
};
