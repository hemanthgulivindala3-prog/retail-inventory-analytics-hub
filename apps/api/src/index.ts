import express from 'express';
import cors from 'cors';
import { SEED_INVENTORY } from './data/seedData';
import { ForecastingService } from './services/forecastingService';

const app = express();
app.use(cors());
app.use(express.json());

let inventory = [...SEED_INVENTORY];

app.get('/api/inventory', (req, res) => {
  const { category, storeId } = req.query;
  let filtered = inventory;
  if (category) filtered = filtered.filter(i => i.category === category);
  if (storeId) filtered = filtered.filter(i => i.storeId === storeId);
  res.json(filtered);
});

app.get('/api/inventory/kpis', (_req, res) => {
  res.json(ForecastingService.calculateKPIs(inventory));
});

app.get('/api/inventory/alerts', (_req, res) => {
  const alerts = inventory
    .filter(i => i.stockLevel <= i.reorderThreshold)
    .map(i => ({
      ...i,
      daysRemaining: ForecastingService.getDaysOfInventoryRemaining(i)
    }));
  res.json(alerts);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🛒 Retail Analytics API running on port ${PORT}`));
