'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, UserPlus, CreditCard, Settings, LogOut, BookOpen, Share2 } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'OS Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'CRM & Leads', path: '/admin/leads', icon: <UserPlus size={20} /> },
    { name: 'Batch Management', path: '/admin/batches', icon: <Users size={20} /> },
    { name: 'Courses & Media', path: '/admin/courses', icon: <BookOpen size={20} /> },
    { name: 'Fee Collection', path: '/admin/finances', icon: <CreditCard size={20} /> },
    { name: 'Viral Ledger', path: '/admin/referrals', icon: <Share2 size={20} /> },
    { name: 'OS Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a1020', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      
      {/* SIDEBAR NAVIGATION */}
      <aside style={{ width: '280px', background: '#050a15', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ padding: '30px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFD700', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Mission Niramya
          </div>
          <div style={{ fontSize: '0.7rem', color: '#00E5FF', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
            Operating System v1.0
          </div>
        </div>

        <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} style={{
                display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 20px', borderRadius: '12px',
                textDecoration: 'none', color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                background: isActive ? 'linear-gradient(90deg, rgba(0,229,255,0.15) 0%, transparent 100%)' : 'transparent',
                borderLeft: isActive ? '4px solid #00E5FF' : '4px solid transparent',
                fontWeight: isActive ? 800 : 600, transition: 'all 0.2s'
              }}>
                <span style={{ color: isActive ? '#00E5FF' : 'inherit' }}>{item.icon}</span>
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'transparent', border: 'none', color: '#FF4081', cursor: 'pointer', fontWeight: 800, fontSize: '1rem' }}>
            <LogOut size={20} /> Exit Admin OS
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>

    </div>
  );
}
