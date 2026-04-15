'use client';

import { DollarSign, Send, IndianRupee, PieChart, Download, FileText, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { STRAPI_URL } from '@/lib/api';

export default function FinancesPage() {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinances = async () => {
      try {
        const tokenMatch = document.cookie.match(/(^| )strapi_jwt=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : '';
        const res = await fetch(`${STRAPI_URL || 'http://localhost:1337'}/api/invoices`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await res.json();
        if (json.data) setInvoices(json.data);
      } catch (err) {
        console.error('Failed to fetch invoices', err);
      } finally {
        setLoading(false);
      }
    };
    fetchFinances();
  }, []);

  const totalCollected = invoices.reduce((sum, inv) => sum + (inv.attributes?.amountPaid || 0), 0);
  const totalOutstanding = invoices.reduce((sum, inv) => sum + ((inv.attributes?.totalFee || 0) - (inv.attributes?.amountPaid || 0)), 0);

  return (
    <div style={{ padding: '40px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '8px' }}>Financial Ledger</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Collect tuitions, manage installments, and track revenue health.</p>
        </div>
        <button style={{ background: 'transparent', border: '2px solid #FFD700', color: '#FFD700', padding: '14px 28px', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Download size={18} /> Export Tax Report
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <div style={{ background: 'rgba(255,215,0,0.1)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,215,0,0.2)' }}>
          <div style={{ color: '#FFD700', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '16px' }}>Monthly Revenue collected</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center' }}><IndianRupee size={40} />{totalCollected.toLocaleString()}</div>
        </div>

        <div style={{ background: 'rgba(212,85,107,0.1)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(212,85,107,0.3)' }}>
          <div style={{ color: '#FF4081', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '16px' }}>Outstanding Tuitions</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center' }}><IndianRupee size={40} />{totalOutstanding.toLocaleString()}</div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>Tuition Invoices</h2>
      
      <div style={{ background: '#050a15', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        {/* Table Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr 1fr 1.5fr', gap: '20px', padding: '20px 30px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
          <div>Invoice</div>
          <div>Student Name</div>
          <div>Enrolled Course</div>
          <div>Total Fee</div>
          <div>Paid</div>
          <div>Status</div>
          <div>Fee Reminder Actions</div>
        </div>

        {/* Rows */}
        {loading ? (
           <div style={{ padding: '60px', textAlign: 'center', color: '#00E5FF' }}><Loader2 className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} size={32} /></div>
        ) : invoices.length === 0 ? (
           <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontWeight: 800 }}>LIVE DATABASE: 0 INVOICES FOUND</div>
        ) : invoices.map((inv) => {
          const v = inv.attributes || inv;
          return (
          <div key={inv.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr 1fr 1fr 1fr 1.5fr', gap: '20px', padding: '24px 30px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center' }}>
            <div style={{ color: '#00E5FF', fontWeight: 800, fontSize: '0.9rem' }}>{v.invoiceId || `INV-${inv.id}`}</div>
            <div style={{ fontWeight: 800 }}>{v.studentName}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)' }}>{v.courseName}</div>
            <div style={{ fontWeight: 700 }}>₹{(v.totalFee || 0).toLocaleString()}</div>
            <div style={{ fontWeight: 700, color: v.amountPaid === v.totalFee ? '#00E5FF' : '#FFD700' }}>₹{(v.amountPaid || 0).toLocaleString()}</div>
            <div>
              <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase',
                background: v.status === 'Clear' ? 'rgba(0, 229, 255, 0.1)' : v.status === 'Pending' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 64, 129, 0.1)',
                color: v.status === 'Clear' ? '#00E5FF' : v.status === 'Pending' ? '#FFD700' : '#FF4081'
              }}>{v.status || 'Pending'}</span>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {v.status !== 'Clear' ? (
                <>
                  <button style={{ flex: 1, background: '#FF4081', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Send size={14} /> Send Alert
                  </button>
                  <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={16} />
                  </button>
                </>
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem', fontWeight: 700 }}>No Action Needed</div>
              )}
            </div>
          </div>
        )})}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />

    </div>
  );
}
