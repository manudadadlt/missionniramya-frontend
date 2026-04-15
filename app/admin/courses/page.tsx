'use client';

import { Book, Video, UploadCloud, Edit3, Trash2, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { STRAPI_URL } from '@/lib/api';

export default function CoursesAdminPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const tokenMatch = document.cookie.match(/(^| )strapi_jwt=([^;]+)/);
        const token = tokenMatch ? tokenMatch[2] : '';
        const res = await fetch(`${STRAPI_URL || 'http://localhost:1337'}/api/courses`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await res.json();
        if (json.data) setCourses(json.data);
      } catch (err) {
        console.error('Failed to fetch courses', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '8px' }}>Course Architecture & Media</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>Upload videos, PDFs, Meditations, and design your curriculum.</p>
        </div>
        <button style={{ background: '#00E5FF', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Book size={18} /> Create New Course
        </button>
      </div>

      {/* QUICK UPLOAD WIDGETS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
        
        <div style={{ background: 'linear-gradient(135deg, rgba(7,14,39,0.8), rgba(5,10,21,1))', padding: '30px', borderRadius: '24px', border: '2px dashed rgba(255,64,129,0.4)', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF4081' } onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,64,129,0.4)' }>
           <div style={{ background: 'rgba(255,64,129,0.1)', padding: '16px', borderRadius: '50%', marginBottom: '16px', display: 'inline-block' }}>
             <Video size={36} color="#FF4081" />
           </div>
           <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Add YouTube Link</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>Paste unlisted YouTube URLs to save bandwidth and load instantly in the LMS.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(7,14,39,0.8), rgba(5,10,21,1))', padding: '30px', borderRadius: '24px', border: '2px dashed rgba(0,229,255,0.4)', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00E5FF' } onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)' }>
           <div style={{ background: 'rgba(0,229,255,0.1)', padding: '16px', borderRadius: '50%', marginBottom: '16px', display: 'inline-block' }}>
             <FileText size={36} color="#00E5FF" />
           </div>
           <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Upload PDF Script</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>Upload Therapy Scripts, Worksheets, or Clinical PDF Documents.</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(7,14,39,0.8), rgba(5,10,21,1))', padding: '30px', borderRadius: '24px', border: '2px dashed rgba(255,215,0,0.4)', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FFD700' } onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)' }>
           <div style={{ background: 'rgba(255,215,0,0.1)', padding: '16px', borderRadius: '50%', marginBottom: '16px', display: 'inline-block' }}>
             <UploadCloud size={36} color="#FFD700" />
           </div>
           <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Upload HTML Page</h3>
           <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>Upload interactable HTML content or SCORM-like zip files for students.</p>
        </div>

      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px' }}>Your Curriculums</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '30px' }}>
        
        {loading ? (
             <div style={{ width: '100%', gridColumn: '1 / -1', padding: '60px', textAlign: 'center', color: '#00E5FF' }}>
               <Loader2 className="animate-spin" style={{ animation: 'spin 1s linear infinite', margin: '0 auto' }} size={40} />
             </div>
        ) : courses.length === 0 ? (
             <div style={{ width: '100%', gridColumn: '1 / -1', padding: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontWeight: 800 }}>LIVE DATABASE: 0 COURSES DETECTED</div>
        ) : courses.map(course => {
          const c = course.attributes || course;
          return (
          <div key={course.id} style={{ background: '#050a15', borderRadius: '24px', padding: '30px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
            
            <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '8px' }}>
              <button style={{ border: 'none', background: 'rgba(255,255,255,0.05)', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Edit3 size={16} /></button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              {c.status === 'Published' ? <CheckCircle size={18} color="#00E5FF" /> : <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFD700', marginLeft: '4px' }} />}
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: c.status === 'Published' ? '#00E5FF' : '#FFD700' }}>{c.status || 'Drafting'}</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>{c.title}</h3>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                <FileText size={18} color="#FFD700" /> {c.modules || 0} Modules
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                <Video size={18} color="#FF4081" /> {c.studentsCount || 0} Assets
              </div>
            </div>

            <button style={{ width: '100%', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', padding: '14px', borderRadius: '12px', fontWeight: 800, transition: 'all 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              Open Curriculum Builder
            </button>
            
          </div>
        )})}

      </div>
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      \`}} />

    </div>
  );
}
