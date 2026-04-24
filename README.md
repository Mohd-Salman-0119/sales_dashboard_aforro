# 📈 Aforro Sales Dashboard

> A pixel-faithful replica of the "Aforro" Sales Dashboard design, built with modern web technologies focusing on responsive design, interactive charts, and seamless user experience.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Design Decisions](#-design-decisions)
- [License](#-license)

## 🎯 Project Overview
The Aforro Sales Dashboard is a comprehensive, responsive web application designed to visualize sales data, track customer insights, and monitor revenue streams. It features two primary pages: a rich interactive dashboard and a robust customer management interface integrated with external REST APIs.

## ✨ Features

### 📊 Dashboard Page (`/`)
A comprehensive view of key business metrics and visualizations.
- **Dynamic Sidebar & Header:** Collapsible sidebar with active navigation states, user profile, notification bell, and an "Aforro Pro" upgrade card.
- **Today's Sales KPIs:** 4 key performance indicator cards with pastel backgrounds and trend percentages.
- **Visitor Insights:** Smooth multi-line area chart tracking Loyal, New, and Unique customers over time.
- **Total Revenue Analysis:** Grouped bar chart comparing Online vs. Offline revenue on a weekly basis.
- **Customer Satisfaction:** Dual area chart comparing current and previous month satisfaction metrics.
- **Target vs Reality:** Grouped bar chart with summary statistics.
- **Top Products:** Color-coded table with progress bars displaying top performing products.
- **Sales Mapping:** Custom SVG-based world map highlighting global sales distribution.
- **Volume vs Service Level:** Stacked/Grouped bar chart for detailed service analysis.

### 👥 Customers Page (`/customers`)
A real-time data table fetching mock user data.
- **Live Data Fetching:** Integrates with `https://jsonplaceholder.typicode.com/users`.
- **Advanced Data Table:** Columns include Name (with custom generated avatar initials), Email, Company Name, and City.
- **Real-time Search:** Instant filtering across Name and Email fields.
- **Smart Sorting:** Multi-state sorting (Default → A to Z → Z to A) by name.
- **Dynamic Filtering:** City dropdown filter populated dynamically from the API response.
- **Robust State Management:** Handles Loading, Error (with retry mechanism), and Empty states gracefully.
- **Pagination/Count:** Displays "Showing X of Y users" live count based on current filters.

## 🛠 Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (utility-first approach for pixel-perfect design)
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Charts:** Recharts (for responsive and animated SVG charts)
- **Code Quality:** ESLint

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
```bash
git clone <repository-url>
cd sales_dashboard_aforro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📂 Project Structure

```text
sales_dashboard_aforro/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local SVGs
│   ├── components/         # Reusable React components
│   │   ├── customers/      # Customer page specific components
│   │   ├── dashboard/      # Dashboard charts and widgets
│   │   └── layout/         # Shared layout components (Sidebar, Header)
│   ├── data/               # Mock data for dashboard charts
│   ├── hooks/              # Custom React hooks (useUsers)
│   ├── pages/              # Route components (Dashboard, Customers, NotFound)
│   ├── App.jsx             # Root component and Routing configuration
│   ├── index.css           # Global Tailwind styles
│   └── main.jsx            # React entry point
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🔌 API Integration

The application utilizes a custom hook `useUsers` to manage external API interactions.
- **Endpoint:** `GET https://jsonplaceholder.typicode.com/users`
- **Features:** 
  - Native `fetch` API implementation
  - Error handling with custom error messages
  - Loading state management
  - Retry functionality for failed requests

## 💡 Design Decisions & Assumptions

- **Mock Data for Dashboard:** Since a real sales backend is not available, the dashboard charts and metrics are powered by structured mock data residing in `src/data/mockData.js`.
- **Custom Map Component:** To minimize external dependencies and maintain styling control, the world map is implemented as a custom simplified SVG rather than using heavy libraries like Leaflet or react-simple-maps.
- **Dynamic Filter Generation:** The City filter options on the Customers page are extracted and deduplicated automatically from the fetched API data.
- **Deterministic Avatars:** User avatars are generated dynamically. The background color is consistently derived from the character codes of the user's name.
- **Icon Consistency:** `lucide-react` is used throughout the application to ensure visual consistency and match the provided UI design.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
