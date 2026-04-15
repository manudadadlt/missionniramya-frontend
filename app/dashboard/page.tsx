import Link from 'next/link';
import { BookOpen, PlayCircle, Award, Volume2 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. HERO - DAILY WISDOM (Template) */}
      <section style={{
        background: 'linear-gradient(160deg, var(--navy) 0%, transparent 100%)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '40px',
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          fontFamily: 'var(--font-montserrat)', fontSize: '0.65rem',
          letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '16px'
        }}>
          Daily Wisdom · दैनिक ज्ञान
        </div>
        
        <h1 style={{
          fontFamily: 'var(--font-cormorant)', fontSize: '2rem',
          fontWeight: 500, color: '#fff', fontStyle: 'italic',
          maxWidth: '800px', lineHeight: 1.5, marginBottom: '20px'
        }}>
          "इससे पहले कि आप किसी अन्य व्यक्ति के मन को ठीक कर सकें, आपको समझना होगा कि मन कैसे बना है। आज आपने ब्लूप्रिंट देखा। कल, आप उसमें प्रवेश करना सीखेंगे।"
        </h1>
        
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '24px' }}>
          — ManuDada 🙏
        </div>

        <button style={{
          background: 'rgba(201, 168, 76, 0.1)',
          border: '1px solid var(--gold)',
          color: 'var(--gold)',
          padding: '10px 24px',
          borderRadius: '30px',
          fontFamily: 'var(--font-montserrat)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}>
          <Volume2 size={16} /> Listen to Audio
        </button>
      </section>

      {/* 2. CONTINUE LEARNING CTA */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
        Jump Back In
      </h2>

      <Link href="/lesson/1" style={{ textDecoration: 'none', display: 'block' }}>
        <div className="card" style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ width: '200px', height: '120px', background: 'var(--indigo)', borderRadius: '8px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,0,0,0.5) 0%, transparent 100%)'}} />
              <PlayCircle style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', opacity: 0.8 }} size={40} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-montserrat)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
              DLT Week 1 · Day 2
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>Hypnotherapy Foundation</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Understand the conscious vs subconscious mind and open the gateway to Chitta.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', flex: 1, borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '45%', background: 'linear-gradient(90deg, var(--gold), var(--teal))' }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-montserrat)' }}>45% Complete</span>
            </div>
          </div>
        </div>
      </Link>

      {/* 3. ENROLLED PROGRAMS GRID */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
        Your Programs
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Course Card 1 */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ color: 'var(--teal)', marginBottom: '12px' }}><BookOpen size={24} /></div>
           <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Decode Life Transformation</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '20px', flex: 1 }}>
             The 12-week comprehensive journey into Vedic healing and clinical hypnotherapy.
           </p>
           <button style={{
             background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', width: '100%',
             padding: '10px', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-montserrat)',
             fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer'
           }}>View Modules</button>
        </div>

        {/* Course Card 2 */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ color: 'var(--gold)', marginBottom: '12px' }}><Award size={24} /></div>
           <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>30-Day Emotional Healing</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '20px', flex: 1 }}>
             Daily audio nudges and workbook prompts to re-wire your inner child.
           </p>
           <button style={{
             background: 'rgba(201, 168, 76, 0.1)', border: '1px solid var(--gold)', width: '100%',
             padding: '10px', borderRadius: '6px', color: 'var(--gold)', fontFamily: 'var(--font-montserrat)',
             fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer'
           }}>Continue Day 14</button>
        </div>

      </div>

    </div>
  );
}
