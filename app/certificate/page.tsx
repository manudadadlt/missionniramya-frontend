'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Download, Award, ChevronLeft } from 'lucide-react';

export default function CertificatePage() {
  const router = useRouter();
  const [studentName, setStudentName] = useState('Valued Student');
  const [dateCompleted, setDateCompleted] = useState('');

  useEffect(() => {
    // Check local storage for the student's name from login
    const session = localStorage.getItem('hm_student');
    if (session) {
      try {
        const data = JSON.parse(session);
        if (data.username) setStudentName(data.username);
      } catch (e) {}
    }
    
    // Set today's date formatted nicely
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setDateCompleted(today.toLocaleDateString(undefined, options));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--deep)', padding: '40px 20px', fontFamily: 'var(--font-montserrat)' }}>
      {/* Non-printable Control Bar */}
      <div className="no-print" style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          onClick={() => router.back()}
          style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'var(--font-montserrat)' }}
        >
          <ChevronLeft size={20} /> Back to Dashboard
        </button>
        <button 
          onClick={handlePrint}
          style={{ background: 'var(--gold)', color: 'var(--deep)', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}
        >
          <Download size={18} /> Save as PDF
        </button>
      </div>

      {/* The Printable Certificate Container */}
      <div 
        id="certificate-container"
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '12px',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          color: '#1a1a1a',
        }}
      >
        {/* Certificate Border Details */}
        <div style={{ position: 'absolute', top: 10, left: 10, right: 10, bottom: 10, border: '4px solid var(--gold)', borderRadius: '8px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 20, left: 20, right: 20, bottom: 20, border: '1px solid rgba(201,168,76, 0.4)', borderRadius: '4px', pointerEvents: 'none' }} />
        
        {/* Decorative Ornaments */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(45,139,117,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ textAlign: 'center', padding: '40px', position: 'relative', zIndex: 10 }}>
          
          <div style={{ marginBottom: '30px' }}>
            <Award size={64} style={{ color: 'var(--gold)', marginBottom: '16px' }} />
            <h2 style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--navy)', fontSize: '1.5rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0' }}>HealersMeet presents the</h2>
            <h1 style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--gold)', fontSize: '4rem', fontWeight: 700, margin: '10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.05)' }}>Certificate of Completion</h1>
            <p style={{ fontSize: '1.1rem', color: '#666', letterSpacing: '1px' }}>for the successful completion of the</p>
          </div>

          <div style={{ padding: '20px', margin: '40px 0', borderTop: '2px solid rgba(201,168,76, 0.3)', borderBottom: '2px solid rgba(201,168,76, 0.3)' }}>
            <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3.5rem', color: 'var(--navy)', fontWeight: 600, margin: '10px 0' }}>{studentName}</h1>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
              Has demonstrated exceptional dedication and formally completed the <b>Mission Niramya: Diploma in Life Transformation (DLT)</b> program. They have been trained in Advanced Energy Management, 5-WHY Prompts, and Deep Theta Meditations.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', marginTop: '60px' }}>
            <div style={{ textAlign: 'center', width: '250px' }}>
              <div style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.2rem', color: '#333', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}>{dateCompleted}</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Date of Issuance</p>
            </div>

            <div style={{ textAlign: 'center', width: '250px' }}>
              <div style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.5rem', color: '#333', fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>Manu Dada</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Head Practitioner, HealersMeet</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* We need CSS to fix background printing issues and hide UI buttons when saving to PDF */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
            background: #fff !important;
          }
          #certificate-container, #certificate-container * {
            visibility: visible;
          }
          #certificate-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 20px !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
