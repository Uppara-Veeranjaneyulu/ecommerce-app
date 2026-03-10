# 🌲 UXE_STORE - Premium Gear Collection

A high-performance, industrial-grade Ecommerce platform featuring a **"Dark Forest"** aesthetic. Designed for high-volume catalogs and premium user experiences.

[![Live Demo](https://img.shields.io/badge/Live-Demo-10b981?style=for-the-badge)](https://ecommerce-app-a3ne.vercel.app/)

---

## ✨ Primary Features

### 📦 Massive Catalog
* **100+ Premium Items**: Curated collections across 13 luxury categories including Electronics, Furniture, Watches, and specialized Gear.
* **Smart Categorization**: Strategically sorted collections (Shoes spotlight, Watches center) for optimal navigation.
* **Intelligent Visuals**: Robust image fallback system and corrected high-definition assets for Every product.

### 🎨 Elite UX/UI
* **"Dark Forest" Aesthetic**: A cohesive, high-contrast design system optimized for modern display tech.
* **Dynamic Sidebar**: A sticky, scrollable sidebar for collections, ensuring instant access to the entire inventory on desktop and mobile.
* **Smooth Animation**: Powered by **Framer Motion** for seamless page transitions and interaction feedback.
* **Safety First**: Animated delete confirmation modals to prevent accidental cart removals.

### 🛠️ Technical Prowess
* **Authentication**: Fully integrated with **Clerk** for secure user sessions and order history.
* **SPA Stability**: Customized Vercel configuration for flawless Single Page Application routing (no 404s on reload).
* **Responsive Core**: Built with **Tailwind CSS 4** for lightning-fast, mobile-first performance.
* **Order Reporting**: Real-time PDF generation for branded invoices using **jsPDF**, available instantly after checkout and in history.
* **Toast Feedback**: Instant visual confirmation via **React Hot Toast** for Every user action.

---

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Auth**: [Clerk](https://clerk.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Reports**: [jsPDF](https://github.com/parallax/jsPDF) + [jsPDF-AutoTable](https://github.com/simonbengtsson/jspdf-autotable)
- **Routing**: [React Router](https://reactrouter.com/)

---

## ⚡ Getting Started

### 1. Installation
```bash
git clone https://github.com/Uppara-Veeranjaneyulu/ecommerce-app.git
cd ecommerce-app
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory and add your integration keys:
```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Stripe Payments
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# EmailJS Service
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 3. Development
```bash
npm run dev
```

---

## 🌍 Deployment
The project is optimized for **Vercel** deployment with dedicated SPA routing support in `vercel.json`.

**Live Website:** [https://ecommerce-app-a3ne.vercel.app/](https://ecommerce-app-a3ne.vercel.app/)

---

*Designed and Engineered for Industrial-Grade Performance.*
