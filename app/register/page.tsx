'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import { STRAPI_URL } from '@/lib/api';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    alert("System check: Registration button clicked!");

    if (!name || !email || !password) {
      setErrorStatus("Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
      setErrorStatus("Your password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setErrorStatus(null);

    try {
      const response = await fetch(`${STRAPI_URL || 'http://localhost:1337'}/api/auth/local/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.jwt) {
        // SUCCESS: Strapi registered the user AND logged them in.
        document.cookie = `strapi_jwt=${data.jwt}; path=/; max-age=604800; samesite=strict`; 
        
        localStorage.setItem('hm_student', JSON.stringify({
            username: data.user.username,
            email: data.user.email
        }));

        // Send them directly to the course dashboard
        router.push('/dashboard');
      } else {
        // FAILURE: Email taken or password too weak
        setErrorStatus(data.error?.message || "Registration failed. This email may already be in use.");
      }
    } catch (err) {
      setErrorStatus("Network error occurred. Ensure your Strapi server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--deep)' }}>
      {/* Decorative Orbs */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', top: '-10%', right: '-10%', borderRadius: '50%', filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(45,139,117,0.08) 0%, transparent 60%)', bottom: '-5%', left: '-10%', borderRadius: '50%', filter: 'blur(60px)' }} />

      <div style={{ width: '100%', maxWidth: '420px', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--gold)', fontSize: '2.4rem', fontWeight: 600, marginBottom: '8px' }}>Create Account</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-montserrat)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Join Mission Niramya</p>
        </div>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'rgba(7, 14, 39, 0.6)', backdropFilter: 'blur(20px)' }}>
          
          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-montserrat)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={18} />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px 14px 48px', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'var(--font-montserrat)', fontSize: '0.9rem', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-montserrat)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px 14px 48px', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'var(--font-montserrat)', fontSize: '0.9rem', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-montserrat)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Secure Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px 14px 48px', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'var(--font-montserrat)', fontSize: '0.9rem', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--teal)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginTop: '8px', fontFamily: 'var(--font-montserrat)' }}>Must be at least 6 characters.</p>
          </div>

          {errorStatus && (
            <div style={{ padding: '12px', background: 'rgba(212, 85, 107, 0.1)', border: '1px solid var(--rose)', borderRadius: '6px', color: 'var(--rose)', fontSize: '0.8rem', fontFamily: 'var(--font-montserrat)', textAlign: 'center' }}>
                {errorStatus}
            </div>
          )}

          <button 
            type="button" 
            onClick={handleRegister}
            disabled={isLoading}
            style={{ width: '100%', background: 'var(--teal)', color: '#fff', border: 'none', padding: '16px', borderRadius: '8px', fontFamily: 'var(--font-montserrat)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1, transition: 'all 0.2s', marginTop: '10px' }}
           >
            {isLoading ? "Registering..." : "Complete Registration"} <ArrowRight size={18} />
          </button>

          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <Link href="/login" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'var(--font-montserrat)', textDecoration: 'underline' }}>
               Already have an account? Log in here.
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
}
