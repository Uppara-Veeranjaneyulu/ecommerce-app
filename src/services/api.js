import emailjs from '@emailjs/browser';

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
    },
    {
        id: 7,
        name: "Titanium EDC Pen",
        price: 65.00,
        description: "Precision machined titanium pen with deep-carry clip.",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800",
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
        id: 9,
        name: "Nordic Wool Throw",
        price: 155.00,
        description: "Hand-woven merino wool blanket for cozy nights.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
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
        id: 11,
        name: "Driftwood Candle",
        price: 32.00,
        description: "Scented soy candle with notes of sea salt and pine.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1602871780529-65008f7f2b1c?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 12,
        name: "Alpine Trekking Poles",
        price: 140.00,
        description: "Lightweight carbon fiber poles with cork grips.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1551632432-c73581c61971?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 13,
        name: "Shadow Leather Journal",
        price: 55.00,
        description: "Premium top-grain leather cover with heavy cream paper.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 14,
        name: "Onyx Mechanical Keyboard",
        price: 249.00,
        description: "75% layout with hot-swappable tactile switches.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
    },
    {
        id: 15,
        name: "Graphite Sun Glasses",
        price: 185.00,
        description: "Polarized lenses with lightweight acetate frames.",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767350-a1590fdb2ca8?auto=format&fit=crop&q=80&w=800",
        rating: 4.6
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
        id: 17,
        name: "Zenith Table Lamp",
        price: 210.00,
        description: "Sculptural brass lamp with soft mood lighting.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 18,
        name: "Aurora Smart Bulb",
        price: 35.00,
        description: "RGB lighting with app control and voice integration.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
        rating: 4.5
    },
    {
        id: 19,
        name: "Lunar Desk Organizer",
        price: 120.00,
        description: "Concrete and walnut wood modular storage.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
        rating: 4.8
    },
    {
        id: 20,
        name: "Terra Trail Shoes",
        price: 165.00,
        description: "All-terrain running shoes with superior grip.",
        category: "Gear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        rating: 4.7
    },
    {
        id: 21,
        name: "Onyx Coffee Grinder",
        price: 195.00,
        description: "Precision burr grinder for the perfect espresso.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800",
        rating: 4.9
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
