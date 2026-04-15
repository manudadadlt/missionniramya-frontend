'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, MoreHorizontal, Loader2 } from 'lucide-react';
import { STRAPI_URL } from '@/lib/api';

export default function LeadsCRMPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const tokenMatch = document.cookie.match(/(^| )strapi_jwt=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : '';
        const res = await fetch(`${STRAPI_URL || 'http://localhost:1337'}/api/leads`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await res.json();
        if (json.data) setLeads(json.data);
      } catch (err) {
        console.error('Failed to fetch leads', err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '8px' }}>Lead Management (CRM)</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Track, message, and convert your incoming prospects.</p>
        </div>
        <button style={{ background: '#00E5FF', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>
          + Add Lead Manually
        </button>
      </div>

      <div style={{ background: '#050a15', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        
        {/* Table Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', gap: '20px', padding: '20px 30px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
          <div>Prospect Name</div>
          <div>Status</div>
          <div>Source</div>
          <div>Date</div>
          <div>Quick Action</div>
        </div>

        {/* Table Rows */}
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: '#00E5FF' }}><Loader2 className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} size={32} /></div>
        ) : leads.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontWeight: 800 }}>LIVE DATABASE CONNECTED: 0 LEADS DETECTED</div>
        ) : (
          leads.map((lead) => {
            const l = lead.attributes || lead; // fallback
            return (
              <div key={lead.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', gap: '20px', padding: '24px 30px', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center', transition: 'background 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{l.name}</div>
                
                <div>
                  <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase',
                    background: l.status === 'New' ? 'rgba(0, 229, 255, 0.1)' : l.status === 'In Discussion' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 64, 129, 0.1)',
                    color: l.status === 'New' ? '#00E5FF' : l.status === 'In Discussion' ? '#FFD700' : '#FF4081'
                  }}>{l.status || 'New'}</span>
                </div>
                
                <div style={{ color: 'rgba(255,255,255,0.6)' }}>{l.source || 'Direct'}</div>
                
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{new Date(l.createdAt).toLocaleDateString() || 'Today'}</div>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                   <button style={{ background: '#25D366', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} title="Send WhatsApp">
                     <MessageCircle size={18} />
                   </button>
                   <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                     <Phone size={18} />
                   </button>
                   <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                     <Mail size={18} />
                   </button>
                </div>
                
              </div>
            );
          })
        )}
        
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />

    </div>
  );
}
