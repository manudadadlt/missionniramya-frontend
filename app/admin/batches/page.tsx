'use client';

import { Users, GraduationCap, MapPin } from 'lucide-react';

export default function BatchesPage() {
  return (
    <div style={{ padding: '40px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '8px' }}>Batch Management</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Create study groups and assign them to your trainers.</p>
        </div>
        <button style={{ background: '#FFD700', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>
          + Create New Batch
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        
        {/* Batch Card 1 */}
        <div style={{ background: '#050a15', borderRadius: '24px', padding: '30px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #FFD700, #00E5FF)' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
               <div style={{ color: '#FFD700', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Active Cohort</div>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 900 }}>DLT Genesis - Batch A</h2>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800 }}>45 Students</div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '40px', background: '#00E5FF', borderRadius: '50%', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>MD</div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Assigned Trainer</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>Manu Dada</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, background: 'rgba(0,229,255,0.1)', border: '1px solid #00E5FF', color: '#00E5FF', padding: '12px', borderRadius: '12px', fontWeight: 800 }}>Manage Students</button>
            <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '12px', fontWeight: 800 }}>Schedule Live Class</button>
          </div>
        </div>

      </div>

    </div>
  );
}
