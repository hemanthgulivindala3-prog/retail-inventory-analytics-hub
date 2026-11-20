export interface SKUItem {
  sku: string;
  name: string;
  category: 'Automotive' | 'Hardware' | 'Sports' | 'Seasonal';
  storeId: string;
  storeName: string;
  stockLevel: number;
  reorderThreshold: number;
  unitPrice: number;
  dailyVelocity: number;
}

export const SEED_INVENTORY: SKUItem[] = [
  { sku: 'AUTO-101', name: 'MotoMaster Synthetic 5W-30 Oil (5L)', category: 'Automotive', storeId: 'STR-01', storeName: 'Toronto Flagship', stockLevel: 142, reorderThreshold: 40, unitPrice: 42.99, dailyVelocity: 14 },
  { sku: 'AUTO-102', name: 'Certified 12V Car Battery Booster', category: 'Automotive', storeId: 'STR-01', storeName: 'Toronto Flagship', stockLevel: 18, reorderThreshold: 25, unitPrice: 119.99, dailyVelocity: 4 },
  { sku: 'HDW-201', name: 'Maximum 100-Pc Socket & Tool Set', category: 'Hardware', storeId: 'STR-02', storeName: 'Calgary Central', stockLevel: 65, reorderThreshold: 30, unitPrice: 189.99, dailyVelocity: 6 },
  { sku: 'HDW-202', name: 'DeWalt 20V Cordless Drill Kit', category: 'Hardware', storeId: 'STR-02', storeName: 'Calgary Central', stockLevel: 8, reorderThreshold: 20, unitPrice: 199.99, dailyVelocity: 5 },
  { sku: 'SPT-301', name: 'CCM Tacks Hockey Skates - Senior', category: 'Sports', storeId: 'STR-03', storeName: 'Vancouver West', stockLevel: 32, reorderThreshold: 15, unitPrice: 249.99, dailyVelocity: 3 },
  { sku: 'SEA-401', name: 'Yardworks 24-in Two-Stage Snowblower', category: 'Seasonal', storeId: 'STR-01', storeName: 'Toronto Flagship', stockLevel: 5, reorderThreshold: 12, unitPrice: 899.99, dailyVelocity: 2 }
];
