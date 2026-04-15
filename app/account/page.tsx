import { User, Settings, LogOut, Shield } from 'lucide-react';

export default function AccountSettings() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      
      <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.5rem', fontWeight: 600, marginBottom: '40px', textAlign: 'center' }}>Student Profile</h1>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Profile Card Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold), var(--indigo))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={32} color="#fff" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '4px' }}>Demo Student</h2>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-montserrat)', fontSize: '0.8rem' }}>student@healersmeet.com</div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <span style={{ padding: '4px 10px', background: 'rgba(45,139,117,0.1)', color: 'var(--teal)', borderRadius: '20px', fontSize: '0.65rem', fontFamily: 'var(--font-montserrat)', textTransform: 'uppercase', letterSpacing: '1px' }}>Active Member</span>
            </div>
          </div>
        </div>

        {/* Settings Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          <button className="hover-border-gold" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.02)', padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
            <Settings size={20} style={{ color: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: '0.85rem' }}>Edit Profile Information</span>
          </button>

          <button className="hover-border-gold" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.02)', padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
            <Shield size={20} style={{ color: 'var(--gold)' }} />
            <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: '0.85rem' }}>Change Password</span>
          </button>

          <button style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'transparent', padding: '16px 20px', borderRadius: '8px', border: '1px solid rgba(212, 85, 107, 0.2)', color: 'var(--rose)', cursor: 'pointer', textAlign: 'left', marginTop: '20px' }}>
            <LogOut size={20} />
            <span style={{ fontFamily: 'var(--font-montserrat)', fontSize: '0.85rem' }}>Sign Out</span>
          </button>

        </div>

      </div>

    </div>
  );
}
