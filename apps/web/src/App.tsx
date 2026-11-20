import React, { useState } from 'react';

const mockItems = [
  { sku: 'AUTO-101', name: 'MotoMaster Synthetic 5W-30 Oil', category: 'Automotive', stock: 142, threshold: 40, status: 'NORMAL' },
  { sku: 'AUTO-102', name: 'Certified 12V Car Battery Booster', category: 'Automotive', stock: 18, threshold: 25, status: 'CRITICAL' },
  { sku: 'HDW-201', name: 'Maximum 100-Pc Socket & Tool Set', category: 'Hardware', stock: 65, threshold: 30, status: 'NORMAL' },
  { sku: 'HDW-202', name: 'DeWalt 20V Cordless Drill Kit', category: 'Hardware', stock: 8, threshold: 20, status: 'CRITICAL' },
  { sku: 'SEA-401', name: 'Yardworks 24-in Snowblower', category: 'Seasonal', stock: 5, threshold: 12, status: 'CRITICAL' }
];

export default function App() {
  const [filter, setFilter] = useState('ALL');

  const filtered = filter === 'ALL' ? mockItems : mockItems.filter(i => i.category === filter);

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 960, margin: '40px auto', padding: '0 20px', color: '#0f172a' }}>
      <header style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 16, marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>🛒 Retail Inventory & Demand Analytics Hub</h1>
        <p style={{ color: '#64748b', fontSize: 14, margin: '4px 0 0' }}>Multi-store retail supply chain tracking & automated replenishment engine.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
        <div style={{ background: '#f8fafc', padding: 18, borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Active SKUs</span>
          <h2 style={{ fontSize: 28, margin: '6px 0 0' }}>1,248</h2>
        </div>
        <div style={{ background: '#f8fafc', padding: 18, borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Total Valuation</span>
          <h2 style={{ fontSize: 28, margin: '6px 0 0', color: '#10b981' }}>$3.42M</h2>
        </div>
        <div style={{ background: '#fef2f2', padding: 18, borderRadius: 8, border: '1px solid #fee2e2' }}>
          <span style={{ fontSize: 12, color: '#ef4444', textTransform: 'uppercase', fontWeight: 600 }}>Restock Alerts</span>
          <h2 style={{ fontSize: 28, margin: '6px 0 0', color: '#ef4444' }}>3 Items</h2>
        </div>
        <div style={{ background: '#f8fafc', padding: 18, borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Stores Connected</span>
          <h2 style={{ fontSize: 28, margin: '6px 0 0' }}>42 Locs</h2>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>SKU Replenishment Status</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            {['ALL', 'Automotive', 'Hardware', 'Seasonal'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: '6px 12px',
                borderRadius: 4,
                border: '1px solid #cbd5e1',
                background: filter === cat ? '#0f172a' : '#fff',
                color: filter === cat ? '#fff' : '#0f172a',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer'
              }}>{cat}</button>
            ))}
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 14 }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>
              <th style={{ padding: '12px 20px' }}>SKU</th>
              <th style={{ padding: '12px 20px' }}>Product Name</th>
              <th style={{ padding: '12px 20px' }}>Category</th>
              <th style={{ padding: '12px 20px' }}>On Hand</th>
              <th style={{ padding: '12px 20px' }}>Threshold</th>
              <th style={{ padding: '12px 20px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(i => (
              <tr key={i.sku} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px 20px', fontFamily: 'monospace', fontWeight: 600 }}>{i.sku}</td>
                <td style={{ padding: '14px 20px' }}>{i.name}</td>
                <td style={{ padding: '14px 20px' }}>{i.category}</td>
                <td style={{ padding: '14px 20px', fontWeight: 700 }}>{i.stock}</td>
                <td style={{ padding: '14px 20px', color: '#64748b' }}>{i.threshold}</td>
                <td style={{ padding: '14px 20px' }}>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    background: i.status === 'CRITICAL' ? '#fee2e2' : '#dcfce7',
                    color: i.status === 'CRITICAL' ? '#b91c1c' : '#15803d'
                  }}>{i.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
