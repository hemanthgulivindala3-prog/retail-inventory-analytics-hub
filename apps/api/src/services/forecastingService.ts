import { SKUItem } from '../data/seedData';

export interface InventoryKPIs {
  totalSkus: number;
  totalValuation: number;
  criticalRestockAlerts: number;
  categoryCounts: Record<string, number>;
}

export class ForecastingService {
  public static calculateKPIs(inventory: SKUItem[]): InventoryKPIs {
    const totalValuation = inventory.reduce((acc, item) => acc + (item.stockLevel * item.unitPrice), 0);
    const criticalRestockAlerts = inventory.filter(item => item.stockLevel <= item.reorderThreshold).length;
    const categoryCounts: Record<string, number> = {};

    inventory.forEach(item => {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    });

    return {
      totalSkus: inventory.length,
      totalValuation: Math.round(totalValuation * 100) / 100,
      criticalRestockAlerts,
      categoryCounts
    };
  }

  public static getDaysOfInventoryRemaining(item: SKUItem): number {
    if (item.dailyVelocity <= 0) return 999;
    return Math.round((item.stockLevel / item.dailyVelocity) * 10) / 10;
  }
}
