'use client';

import { Share2, Copy, Users, IndianRupee, Trophy, Gift } from 'lucide-react';
import { useState } from 'react';

export default function AffiliateDashboard() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://healersmeet.com/enroll?ref=STU_9942A";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ background: 'linear-gradient(135deg, rgba(7,14,39,0.9) 0%, rgba(5,10,21,1) 100%)', borderRadius: '30px', padding: '50px', border: '1px solid rgba(0, 229, 255, 0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(30px)' }} />

        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-block', background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700', padding: '8px 16px', borderRadius: '20px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '20px' }}>
            Mission Niramya Affiliate
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>
            Share the Architecture <br /> <span style={{ color: '#00E5FF' }}>Change a Life.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '600px', marginBottom: '40px' }}>
            Invite friends to join the Decode Life Transformation program. When they enroll using your unique link, you earn a <strong style={{ color: '#FFD700' }}>₹2,000 commission</strong> direct to your bank account.
          </p>

          {/* Link Generator Box */}
          <div style={{ background: '#050a15', border: '1px solid rgba(255,255,255,0.1)', padding: '8px', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '600px' }}>
             <div style={{ padding: '0 20px', color: '#00E5FF', fontWeight: 700, fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
               {referralLink}
             </div>
             <button onClick={handleCopy} style={{ background: copied ? '#FFD700' : '#00E5FF', color: '#000', border: 'none', padding: '16px 32px', borderRadius: '30px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '1px' }}>
               {copied ? <><CheckCircleIcon /> Copied!</> : <><Copy size={18} /> Copy Link</>}
             </button>
          </div>
        </div>
      </div>

      {/* Tracking Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '50px' }}>
        
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
           <Users size={32} color="#00E5FF" style={{ margin: '0 auto 16px auto' }} />
           <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>14</div>
           <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Total Link Clicks</div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,215,0,0.2)', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
           <Trophy size={32} color="#FFD700" style={{ margin: '0 auto 16px auto' }} />
           <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>2</div>
           <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Successful Enrollments</div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(45,211,102,0.3)', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
           <IndianRupee size={32} color="#2dd366" style={{ margin: '0 auto 16px auto' }} />
           <div style={{ fontSize: '3rem', fontWeight: 900, color: '#2dd366', marginBottom: '8px' }}>4,000</div>
           <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Commission Earned</div>
        </div>

      </div>

    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
