'use client';

import { Users, IndianRupee, TrendingUp, Activity, Bell } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div style={{ padding: '40px' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '8px' }}>Executive Dashboard</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Welcome back, Founder. Here is your platform overview.</p>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}>
            <Bell size={20} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,215,0,0.1)', padding: '8px 24px 8px 8px', borderRadius: '40px', border: '1px solid rgba(255,215,0,0.2)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FFD700', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>MD</div>
            <span style={{ fontWeight: 800, color: '#FFD700' }}>Super Admin</span>
          </div>
        </div>
      </header>

      {/* 🚀 METRICS ROW */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '50px' }}>
        
        <div style={{ background: '#050a15', padding: '30px', borderRadius: '20px', borderTop: '4px solid #00E5FF', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Total Active Students</div>
            <div style={{ background: 'rgba(0,229,255,0.1)', padding: '10px', borderRadius: '10px' }}><Users size={24} color="#00E5FF" /></div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>142</div>
          <div style={{ color: '#00E5FF', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><TrendingUp size={16} /> +12% this month</div>
        </div>

        <div style={{ background: '#050a15', padding: '30px', borderRadius: '20px', borderTop: '4px solid #FFD700', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Pending Fees</div>
            <div style={{ background: 'rgba(255,215,0,0.1)', padding: '10px', borderRadius: '10px' }}><IndianRupee size={24} color="#FFD700" /></div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>₹45,000</div>
          <div style={{ color: '#FFD700', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>12 Students Overdue</div>
        </div>

        <div style={{ background: '#050a15', padding: '30px', borderRadius: '20px', borderTop: '4px solid #FF4081', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>New CRM Leads</div>
            <div style={{ background: 'rgba(255,64,129,0.1)', padding: '10px', borderRadius: '10px' }}><Activity size={24} color="#FF4081" /></div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>28</div>
          <div style={{ color: '#FF4081', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>Awaiting Follow-up</div>
        </div>

      </div>

      {/* ⚠️ SYSTEM ALERTS */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>System Activity</h2>
      
      <div style={{ background: '#050a15', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00E5FF' }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>New Student Registration</h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '4px' }}>Rahul S. enrolled in "Decode Life Transformation".</p>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>2 mins ago</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF4081' }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>WordPress Lead Captured</h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '4px' }}>Priya K. submitted an inquiry. Automated WhatsApp sent successfully.</p>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>1 hour ago</div>
        </div>
      </div>

    </div>
  );
}
