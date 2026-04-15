'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlayCircle, ArrowRight, X, Users, Award, Star, CheckCircle, ChevronRight, Zap, Target, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState<'company' | 'philosophy' | 'methodology'>('company');

  // Activate Announcement Popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#050a15', color: '#ffffff', fontFamily: 'Arial, sans-serif', overflowX: 'hidden' }}>
      
      {/* 🔮 THE ANNOUNCEMENT POPUP MODAL */}
      {showPopup && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(10px)' }}>
          <div style={{ background: '#0a1020', border: '2px solid #FFD700', borderRadius: '16px', maxWidth: '500px', width: '100%', position: 'relative', overflow: 'hidden', boxShadow: '0 0 50px rgba(255, 215, 0, 0.4)' }}>
            
            <button onClick={() => setShowPopup(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '8px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}>
              <X size={20} />
            </button>
            
            <div style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)', padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.2rem', color: '#fff', margin: 0, fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>NEXT BATCH OPEN!</h3>
            </div>
            
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '30px', lineHeight: 1.6 }}>
                The <b>Decode Life Transformation</b> masterclass is opening. Seats are strictly limited.
              </p>
              <Link href="/register" onClick={() => setShowPopup(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00E5FF', color: '#000', padding: '16px 36px', borderRadius: '40px', textDecoration: 'none', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)' }}>
                Secure Your Spot <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 🚀 NAV MENU - HIGH VISIBILITY */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(5, 10, 21, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 215, 0, 0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #FFD700, #FF8C00)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={24} color="#000" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFD700', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Mission Niramya
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/login" style={{ color: '#00E5FF', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Login</Link>
          <Link href="/register" style={{ background: '#FFD700', color: '#000', textDecoration: 'none', padding: '12px 30px', borderRadius: '30px', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' }}>Enroll Now</Link>
        </div>
      </nav>

      {/* ✨ GRAPHIX CSS HERO BANNER (NO EXTERNAL IMAGES FILED) */}
      <header style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5%', overflow: 'hidden', background: '#050a15' }}>
        
        {/* Abstract Background Graphix (Instead of a broken image) */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.8 }}>
           {/* Graphix 1: Giant Glowing Orb */}
           <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 60%)', borderRadius: '50%', filter: 'blur(40px)' }} />
           {/* Graphix 2: Gold Corner Glow */}
           <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)' }} />
           {/* Graphix 3: Abstract Grid Lines */}
           <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '60px' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid #FFD700', borderRadius: '40px', color: '#FFD700', fontSize: '1rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px', boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)' }}>
             <Zap size={18} /> A Global Healing Initiative
          </div>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '30px', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
            MASTER THE <br/>
            <span style={{ color: '#00E5FF', textShadow: '0 0 30px rgba(0, 229, 255, 0.4)' }}>ARCHITECTURE</span>
            <br/>OF YOUR MIND
          </h1>
          
          <p style={{ fontSize: '1.4rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '50px', maxWidth: '800px', fontWeight: 400 }}>
            Join the most brilliant clinical hypnotherapy and Vedic healing program. Transform your internal blueprint and rewire your reality today.
          </p>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/register" style={{ background: '#FFD700', color: '#000', textDecoration: 'none', padding: '20px 50px', borderRadius: '40px', fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 0 40px rgba(255, 215, 0, 0.5)', transition: 'all 0.2s' }}>
              Start Journey <ArrowRight size={22} />
            </Link>
            
            <button style={{ background: 'rgba(0, 229, 255, 0.1)', border: '2px solid #00E5FF', color: '#00E5FF', padding: '20px 40px', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>
               Watch Trailer <PlayCircle size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* 🏆 BRIGHT ACHIEVEMENTS SECTION */}
      <section style={{ padding: '80px 5%', background: '#0a1020', borderTop: '2px solid rgba(0, 229, 255, 0.2)', borderBottom: '2px solid rgba(0, 229, 255, 0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', textAlign: 'center' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Users size={50} style={{ color: '#00E5FF', margin: '0 auto 20px auto' }} />
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>15,000+</div>
              <div style={{ color: '#00E5FF', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', fontWeight: 700 }}>Lives Transformed</div>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Award size={50} style={{ color: '#FFD700', margin: '0 auto 20px auto' }} />
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>12 Years</div>
              <div style={{ color: '#FFD700', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', fontWeight: 700 }}>Clinical Experience</div>
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Star size={50} style={{ color: '#FF4081', margin: '0 auto 20px auto' }} />
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>99%</div>
              <div style={{ color: '#FF4081', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', fontWeight: 700 }}>Success Rate</div>
            </div>

          </div>
        </div>
      </section>

      {/* 🗂️ ULTRA-BRIGHT INTERACTIVE TABS */}
      <section style={{ padding: '120px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3.5rem', color: '#fff', fontWeight: 900, marginBottom: '20px' }}>The <span style={{ color: '#FFD700' }}>HealersMeet</span> Ecosystem</h2>
          <p style={{ color: '#a0aec0', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8, fontSize: '1.2rem' }}>Bringing clinical psychology together with ancient Vedic wisdom.</p>
        </div>

        {/* BRIGHT TAB BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('company')} 
            style={{ padding: '20px 40px', background: activeTab === 'company' ? '#FFD700' : 'rgba(255,255,255,0.05)', border: 'none', color: activeTab === 'company' ? '#000' : '#fff', borderRadius: '40px', cursor: 'pointer', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem', boxShadow: activeTab === 'company' ? '0 0 30px rgba(255, 215, 0, 0.4)' : 'none', transition: 'all 0.3s' }}>
            Company Profile
          </button>
          
          <button 
            onClick={() => setActiveTab('philosophy')} 
            style={{ padding: '20px 40px', background: activeTab === 'philosophy' ? '#00E5FF' : 'rgba(255,255,255,0.05)', border: 'none', color: activeTab === 'philosophy' ? '#000' : '#fff', borderRadius: '40px', cursor: 'pointer', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem', boxShadow: activeTab === 'philosophy' ? '0 0 30px rgba(0, 229, 255, 0.4)' : 'none', transition: 'all 0.3s' }}>
            Our Philosophy
          </button>
          
          <button 
            onClick={() => setActiveTab('methodology')} 
            style={{ padding: '20px 40px', background: activeTab === 'methodology' ? '#FF4081' : 'rgba(255,255,255,0.05)', border: 'none', color: activeTab === 'methodology' ? '#fff' : '#fff', borderRadius: '40px', cursor: 'pointer', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem', boxShadow: activeTab === 'methodology' ? '0 0 30px rgba(255, 64, 129, 0.5)' : 'none', transition: 'all 0.3s' }}>
            Methodology
          </button>
        </div>

        {/* TAB CONTENT BOX */}
        <div style={{ background: '#0a1020', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '30px', padding: '60px', minHeight: '400px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          
          {activeTab === 'company' && (
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                 <h3 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '30px', color: '#FFD700' }}>Rooted in Excellence.</h3>
                 <p style={{ color: '#e2e8f0', lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '30px' }}>HealersMeet was founded with a singular vision: to democratize elite-level psychological healing. By fusing diagnostic tools of modern clinical hypnotherapy with the deep spiritual grounding of Vedic traditions, we have created an institute unlike any other.</p>
                 <ul style={{ listStyle: 'none', padding: 0 }}>
                   <li style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px', color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}><CheckCircle size={28} color="#00E5FF" /> ISO 9001:2015 Certified</li >
                   <li style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px', color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}><CheckCircle size={28} color="#00E5FF" /> Global Network of Masters</li>
                 </ul>
              </div>
              {/* CSS Graphix representing Company (instead of a photo) */}
              <div style={{ flex: 1, minWidth: '300px', height: '400px', background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', borderRadius: '20px', border: '4px solid #00E5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'conic-gradient(from 0deg, transparent, #00E5FF, transparent 30%)', animation: 'spin 4s linear infinite', opacity: 0.3 }} />
                 <Target size={120} color="#FFD700" style={{ zIndex: 10 }} />
                 <style dangerouslySetInnerHTML={{__html: `@keyframes spin { 100% { transform: rotate(360deg); } }`}} />
              </div>
            </div>
          )}

          {activeTab === 'philosophy' && (
             <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '40px 0' }}>
               <h3 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#00E5FF', marginBottom: '30px' }}>"The Blueprint Before The Building"</h3>
               <p style={{ color: '#fff', lineHeight: 2, fontSize: '1.4rem' }}>Before you can heal the mind, you must understand its architecture. Our core philosophy is that all trauma originates as an emotional imprint within the deep subconscious. We believe in surgical, precise identification of the root cause and structural re-wiring via Deep Theta states.</p>
             </div>
          )}

          {activeTab === 'methodology' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              <div style={{ padding: '40px', background: '#050a15', borderRadius: '20px', borderTop: '6px solid #FF4081', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <h4 style={{ color: '#FF4081', fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px' }}>Phase 1</h4>
                <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>The Critical Faculty</div>
                <p style={{ color: '#a0aec0', fontSize: '1.1rem', lineHeight: 1.6 }}>Bypassing the conscious mind's firewall to access the deeply programmed autonomic nervous system.</p>
              </div>
              
              <div style={{ padding: '40px', background: '#050a15', borderRadius: '20px', borderTop: '6px solid #FFD700', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <h4 style={{ color: '#FFD700', fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px' }}>Phase 2</h4>
                <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>The 5-WHY Diagnostic</div>
                <p style={{ color: '#a0aec0', fontSize: '1.1rem', lineHeight: 1.6 }}>Interactive, algorithmic questioning process to find the emotional root event causing present-day symptoms.</p>
              </div>

              <div style={{ padding: '40px', background: '#050a15', borderRadius: '20px', borderTop: '6px solid #00E5FF', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <h4 style={{ color: '#00E5FF', fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px' }}>Phase 3</h4>
                <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Theta Implantation</div>
                <p style={{ color: '#a0aec0', fontSize: '1.1rem', lineHeight: 1.6 }}>Calibrated script auto-suggestions in a 4Hz brainwave state to rewrite the trauma blueprint.</p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 👨🏫 TRAINER GRAPHIX SECTION (Replaced photo placeholder with CSS Graphic) */}
      <section style={{ padding: '120px 5%', background: '#030612', borderTop: '1px solid rgba(255,215,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          
          <div style={{ flex: 1, minWidth: '350px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: '#FFD700', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
               <div style={{ width: '40px', height: '3px', background: '#FFD700' }} /> Head Practitioner
            </div>
            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1, color: '#fff' }}>Manu Dada</h2>
            <p style={{ color: '#e2e8f0', fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '40px' }}>
              With over a decade of clinical experience and deeply rooted knowledge in Vedic philosophy, Manu Dada has dedicated his life to understanding the architecture of the human mind. Having personally facilitated over 15,000 healing transformations.
            </p>
            <Link href="/programs" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: '#00E5FF', textDecoration: 'none', borderBottom: '2px solid #00E5FF', paddingBottom: '8px', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Explore Curriculum <ChevronRight size={20} />
            </Link>
          </div>

          <div style={{ flex: 1, minWidth: '350px', display: 'flex', justifyContent: 'center' }}>
            {/* Massive Abstract Graphic for Trainer */}
            <div style={{ position: 'relative', width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <div style={{ position: 'absolute', inset: 0, border: '8px solid #FFD700', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 8s linear infinite' }} />
               <div style={{ position: 'absolute', inset: '20px', border: '4px solid #00E5FF', borderRadius: '50%', borderBottomColor: 'transparent', animation: 'spin 4s linear infinite reverse' }} />
               <div style={{ position: 'absolute', inset: '40px', background: 'radial-gradient(circle, #FFD700 0%, transparent 60%)', opacity: 0.2 }} />
               <div style={{ fontSize: '8rem', fontWeight: 900, color: '#FFD700', filter: 'drop-shadow(0 0 20px #FFD700)' }}>MD</div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 5%', textAlign: 'center', background: '#000', borderTop: '2px solid rgba(255,255,255,0.1)' }}>
         <div style={{ fontSize: '2rem', fontWeight: 900, color: '#00E5FF', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Mission Niramya</div>
         <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 700 }}>&copy; {new Date().getFullYear()} HealersMeet LMS. Built for Scale.</p>
      </footer>

    </div>
  );
}
