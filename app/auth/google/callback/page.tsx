'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { STRAPI_URL } from '@/lib/api';

function CallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('Verifying Google Security Token...');

  useEffect(() => {
    const authenticate = async () => {
      // 1. Get the query string exactly as Google/Strapi formatted it
      const qs = searchParams.toString();
      if (!qs) {
        setStatus('No authentication ticket found.');
        setTimeout(() => router.push('/login'), 2000);
        return;
      }

      try {
        // 2. Exchange ticket with Strapi for JWT
        const response = await fetch(`${STRAPI_URL || 'http://localhost:1337'}/api/auth/google/callback?${qs}`);
        const data = await response.json();

        if (data.jwt) {
          setStatus('Authentication successful! Unlocking portal...');
          
          // Securely set Next.js auth cookie
          document.cookie = `strapi_jwt=${data.jwt}; path=/; max-age=604800; samesite=strict`; 
          
          // Save identity for UI
          localStorage.setItem('hm_student', JSON.stringify({
              username: data.user.username,
              email: data.user.email
          }));

          // Send to dashboard
          setTimeout(() => {
            router.push('/dashboard');
          }, 1000);
        } else {
          setStatus('Authentication failed. Please verify your Strapi Provider settings.');
          setTimeout(() => router.push('/login'), 3000);
        }
      } catch (err) {
        setStatus('Failed to connect to the backend server. Is Strapi running?');
        setTimeout(() => router.push('/login'), 3000);
      }
    };

    authenticate();
  }, [searchParams, router]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--deep)' }}>
       {/* Decorative Blur Orbs */}
       <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)', top: '-10%', left: '-10%', borderRadius: '50%', filter: 'blur(60px)' }} />
       <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(45,139,117,0.1) 0%, transparent 60%)', bottom: '-5%', right: '-10%', borderRadius: '50%', filter: 'blur(60px)' }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(201,168,76,0.3)', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px auto' }} />
        <h2 style={{ color: 'var(--gold)', fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', marginBottom: '8px' }}>Google Authentication</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-montserrat)', fontSize: '0.9rem' }}>{status}</p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}

export default function GoogleAuthCallback() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ color: 'var(--gold)' }}>Loading portal...</p></div>}>
      <CallbackInner />
    </Suspense>
  );
}
