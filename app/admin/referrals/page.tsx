'use client';

import { Link as LinkIcon, Users, CreditCard, Banknote, RefreshCw, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { STRAPI_URL } from '@/lib/api';

export default function AffiliateLedgerPage() {
  const [affiliates, setAffiliates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAff = async () => {
      try {
        const tokenMatch = document.cookie.match(/(^| )strapi_jwt=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : '';
        const res = await fetch(`${STRAPI_URL || 'http://localhost:1337'}/api/affiliates`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await res.json();
        if (json.data) setAffiliates(json.data);
      } catch (err) {
        console.error('Failed to fetch affiliates', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAff();
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '8px' }}>Affiliate & Referral Ledger</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Track the viral growth engine and manage commission payouts.</p>
        </div>
      </div>

      <div style={{ background: '#050a15', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        {/* Table Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr 1.5fr', gap: '20px', padding: '20px 30px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
          <div>Tracking ID</div>
          <div>Student Promoter</div>
          <div>Link Clicks</div>
          <div>Conversions</div>
          <div>Comm. Owed</div>
          <div>Status</div>
          <div>Payout Action</div>
        </div>

        {/* Ledger Rows */}
        {loading ? (
           <div style={{ padding: '60px', textAlign: 'center', color: '#00E5FF' }}><Loader2 className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} size={32} /></div>
        ) : affiliates.length === 0 ? (
           <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontWeight: 800 }}>LIVE DATABASE: 0 AFFILIATES DETECTED</div>
        ) : affiliates.map((aff) => {
          const a = aff.attributes || aff;
          return (
          <div key={aff.id} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr 1.5fr', gap: '20px', padding: '24px 30px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
            
            <div style={{ color: '#00E5FF', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LinkIcon size={14} /> {a.trackingId}
            </div>
            
            <div style={{ fontWeight: 800 }}>{a.studentName}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)' }}>{a.clicks || 0}</div>
            <div style={{ color: 'rgba(255,255,255,0.6)' }}>{a.conversions || 0}</div>
            
            <div style={{ fontWeight: 700, color: a.owed > 0 ? '#FFD700' : 'rgba(255,255,255,0.4)' }}>
              ₹{(a.owed || 0).toLocaleString()}
            </div>
            
            <div>
              <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase',
                background: a.status === 'Paid' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255, 64, 129, 0.1)',
                color: a.status === 'Paid' ? '#00E5FF' : '#FF4081'
              }}>{a.status || 'None'}</span>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {a.status !== 'Paid' && a.owed > 0 ? (
                <button style={{ flex: 1, background: '#00E5FF', color: '#000', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Banknote size={14} /> Mark Paid
                </button>
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem', fontWeight: 700 }}>Fully Settled</div>
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
