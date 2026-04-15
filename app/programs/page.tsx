import { BookOpen, Search } from 'lucide-react';

export default function ProgramsDirectory() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', fontWeight: 600 }}>Course Directory</h1>
        
        <div style={{ position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={18} />
          <input 
            type="text" 
            placeholder="Search programs..." 
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '10px 16px 10px 40px',
              borderRadius: '30px',
              color: '#fff',
              outline: 'none',
              fontFamily: 'var(--font-montserrat)',
              fontSize: '0.8rem',
              width: '250px'
            }}
          />
        </div>
      </div>

      {/* Program Library Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
        
        {/* DLT Card */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ height: '180px', background: 'var(--navy)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <BookOpen size={48} style={{ color: 'var(--gold)', opacity: 0.5 }} />
           </div>
           
           <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-montserrat)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Advanced Certification
           </div>
           
           <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Decode Life Transformation</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '24px', flex: 1 }}>
             The 12-week comprehensive journey into Vedic healing, Antahkarana mastery, and clinical hypnotherapy. Become a certified healer.
           </p>
           
           <button style={{
             background: 'linear-gradient(90deg, var(--gold), var(--teal))', 
             border: 'none', width: '100%',
             padding: '12px', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-montserrat)',
             fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer'
           }}>View Curriculum</button>
        </div>

      </div>
    </div>
  );
}
