# Retail Inventory & Demand Analytics Hub 🛒📊

[![CI Pipeline](https://github.com/hemanthgulivindala3-prog/retail-inventory-analytics-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/hemanthgulivindala3-prog/retail-inventory-analytics-hub)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An enterprise multi-store retail supply chain tracking and inventory replenishment system modeled after large Canadian retail operations.

---

## 🏬 Core Capabilities
- **Multi-Store Catalog Architecture**: SKU-level tracking across Automotive, Hardware, Sports, and Seasonal departments.
- **Stock Depletion Forecasting**: Days-of-Inventory (DOI) remaining calculations based on rolling daily run-rate velocity.
- **Critical Restock Threshold Triggers**: Automated alerts when shelf stock hits safety thresholds.
- **Executive Operations Dashboard**: Clean KPI widgets tracking active valuation, category breakdown, and reorder triggers.

```mermaid
flowchart LR
    POS[Point-of-Sale Event] --> Ingest[Inventory Ingest Service]
    Ingest --> DB[(Store Catalog Store)]
    DB --> Forecast[Demand Velocity Engine]
    Forecast --> Alert{Stock <= Safety Threshold?}
    Alert -->|Yes| Restock[Critical Replenishment Trigger]
    Alert -->|No| Normal[Normal Run-rate]
    Forecast --> UI[Executive Analytics Dashboard]
```

---

## 🚀 Quick Start
```bash
cd apps/api
npm install
npm run dev
```

## 📄 License
MIT © [Hemanth Gulivindula](https://github.com/hemanthgulivindala3-prog)
