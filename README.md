# Aforro — Sales Dashboard

A pixel-faithful replica of the "Aforro" Sales Dashboard Figma design, 
built with React 18 + Vite + Tailwind CSS.

## 🚀 Quick Start

```bash
cd sales_dashboard_aforro
npm install
npm run dev
```

Open → http://localhost:5173

## ✅ Features

### Dashboard Page (/)
- Sidebar with active nav state and Aforro Pro upgrade card
- Header with search, language picker, notification bell, user info
- Today's Sales: 4 KPI sub-cards with pastel icon backgrounds and trend %
- Visitor Insights: 3-line smooth chart (Loyal / New / Unique customers)
- Total Revenue: Grouped bar chart (Online vs Offline) — weekly data
- Customer Satisfaction: Dual area chart (Last Month vs This Month)
- Target vs Reality: Grouped bar chart + summary stats below
- Top Products: table with color-coded progress bars + percentage badges
- Sales Mapping: SVG world map with colored continents
- Volume vs Service Level: Grouped bar chart + summary stats

### Customers Page (/customers)
- Live data from https://jsonplaceholder.typicode.com/users
- Columns: Name (with avatar initials) | Email | Company Name | City
- Real-time search across name + email
- Sort by name: Default → A→Z → Z→A → Default
- Filter by city (dynamic dropdown from API data)
- Loading spinner, error state with retry, empty state with clear
- "Showing X of Y users" live count

## 🔧 Decisions & Assumptions
- Dashboard uses hardcoded mock data (no real sales API exists)
- World map is a custom simplified SVG (no external map dependency)
- City filter options are derived dynamically from API response
- Avatar colors are deterministically generated from name using char codes
- All icons are from lucide-react for visual consistency with the design
