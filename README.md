<div align="center">
  <h1>🌾 Kissan Mitra</h1>
  <p>
    <strong>A farmer-to-buyer market linkage platform for transparent, direct agricultural trade.</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-19.1.1-61DAFB.svg" alt="React" />
    <img src="https://img.shields.io/badge/Vite-7.x-646CFF.svg" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC.svg" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Express-5.x-000000.svg" alt="Express" />
    <img src="https://img.shields.io/badge/React%20Router-7.x-CA4245.svg" alt="React Router" />
    <img src="https://img.shields.io/badge/Zustand-5.x-4B5563.svg" alt="Zustand" />
  </p>
</div>

---

## 📖 Overview

**Kissan Mitra (Kisaan Mitra)** is a web-based market linkage platform designed to **connect small-scale farmers directly with buyers**.  
It aims to reduce reliance on intermediaries, promote **fair pricing**, and simplify agricultural trade through a responsive, user-friendly interface.

---

## ✨ Key Features (Planned / In Progress)

- **Farmer ↔ Buyer Connectivity:** Direct discovery and engagement between farmers and buyers.
- **Produce Listings:** Create and browse crop/product listings for easier negotiation and sourcing.
- **Responsive UI:** Works smoothly across mobile and desktop screens.
- **Extensible Foundation:** Designed to support messaging, verification, and price insights as the platform evolves.

> If you share your `src/` structure (pages/routes), I can replace this section with **only what is currently implemented**.

---

## 🏗️ Tech Stack

The application (in the `project` branch) is built with:

### Frontend
- **React** (Vite)
- **Tailwind CSS**
- **React Router DOM**
- **Zustand** (state management)
- **Radix UI** (Dialog, Tabs, Select, Toast)
- **Lucide React** (icons)

### Backend
- **Node.js + Express** (`server.js`)

---

## 🧩 Repository Branches

- `main` — Documentation / overview
- `project` — Application source code (frontend + server)

---

## 🚀 Quickstart Guide

Follow these steps to run the application locally.

### 1) Clone the repository
```bash
git clone https://github.com/amritrajrajput/kissan-mitra.git
cd kissan-mitra
```

### 2) Switch to the application branch
```bash
git checkout project
```

### 3) Install dependencies
```bash
npm install
```

---

## ▶️ Run the App

### Frontend (Vite)
```bash
npm run dev
```

### Backend (Express)
```bash
node server.js
```

- Backend runs on port `8000` by default.
- The server listens on `0.0.0.0`, so it can be accessed from other devices on the same network.

---

## 🧪 Scripts

```bash
npm run dev      # start Vite dev server
npm run build    # build for production
npm run preview  # preview production build
npm run lint     # run ESLint
```

---

## 🗂️ Project Structure (High-level)

- `src/` — React application source code  
- `public/` — static assets  
- `server.js` — Express server  
- `vite.config.js` — Vite configuration  
- `tailwind.config.js`, `postcss.config.js` — styling configuration  

---

## 📸 Screenshots / Demo

*(Add screenshots or a short GIF here showing the main flows: listing produce, browsing, contacting, etc.)*

---

## 🛣️ Roadmap (Ideas)

- In-app messaging & negotiation
- Farmer/Buyer verification
- Location-based discovery
- Market price insights / mandi integration
- Multi-language support (Hindi + regional languages)
- Logistics / pickup support
- Payments and invoicing

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a branch: `feature/your-feature`  
3. Commit changes  
4. Open a Pull Request  

---


<p align="center">
  <i>Built by <b>Amrit Raj Rajput</b>. If you find this project useful, consider giving it a ⭐.</i>
</p>
