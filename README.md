# **VNN247 – News, Weather & Lottery Aggregator**

📰 **VNN247** is a modern **React-based web application** that aggregates daily information from **real and trusted data sources**, including **categorized news via RSS feeds**, **weather forecasts**, and **Vietnam Southern lottery results**. The application delivers a smooth and engaging user experience enhanced with **Framer Motion animations**.

## 💡 What This Project Does

VNN247 brings essential daily content into a single platform by aggregating **live RSS feeds from reputable Vietnamese news outlets** such as **Thanh Niên, Tuổi Trẻ, Dân Trí, and VnExpress**. Alongside real-time weather forecasts via the OpenWeather API and up-to-date Southern Vietnam lottery results, the app demonstrates how to combine multiple real-world data sources with modern UI animations in a React application.

## ✨ Features

- 🗞️ Read real news from trusted Vietnamese newspapers

  - Thanh Niên, Tuổi Trẻ, Dân Trí, VnExpress

- 🗂️ News organized by categories
- 🔄 Dynamic RSS fetching and parsing
- 🌤️ Weather forecast using OpenWeather API
- 🎟️ Vietnam Southern lottery results from reliable sources
- 🎬 Smooth UI animations and transitions using **Framer Motion**
- 📱 Fully responsive UI
- 🚀 Fast navigation with React Router

## 🛠️ Tech Stack

- **Frontend:** React
- **Build Tool:** Vite
- **State Management:** Context API
- **Routing:** React Router
- **Animations:** Framer Motion
- **External Data Sources:**

  - RSS feeds from major Vietnamese news outlets
  - OpenWeather API
  - Public lottery result sources

## 📦 Installation

```sh
git clone https://github.com/dangpvo/VNN247-React.git
cd VNN247-React
npm install
npm run dev
```

## 📂 Project Structure (Simplified)

```txt
src/
 ├── components/        # Reusable UI components
 ├── context/           # Global state management
 ├── pages/             # Category-based views
 ├── services/          # RSS, weather & lottery data services
 ├── hooks/             # Custom hooks (e.g. mobile navigation)
 ├── data/              # Centralized RSS source mapping (rssMap)
 └── App.jsx
```

## ⚠️ Project Scope & Notes

- Frontend-only application
- Uses **live RSS data**; content belongs to the original publishers
- No authentication or backend services
- External APIs may be affected by CORS or rate limits
- Data is displayed for informational and demo purposes only
