'use client';
import { useState, useRef } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Download, Mic, Square, CheckCircle, FileText, LayoutTemplate, Volume2, HelpCircle, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';

export default function LessonClientView({ lesson, videoSource, fallbackVideoSrc }: any) {
  // Tab State for right panel
  const [activeTab, setActiveTab] = useState<'slides' | 'resources' | 'quiz'>('slides');
  const [quizPassed, setQuizPassed] = useState(false);

  // Audio Recorder State
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // 1. YouTube Detection Logic
  // Matches youtu.be/ID or youtube.com/watch?v=ID
  const getOutputVideoUrl = (source: string) => {
    if (!source) return null;
    const ytMatch = source.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0`;
    }
    return source; // Standard HTML5 Video
  };

  const finalVideoUrl = getOutputVideoUrl(videoSource || fallbackVideoSrc);
  const isYouTube = finalVideoUrl?.includes('youtube.com/embed');

  // 2. Audio Recorder Logic
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        stream.getTracks().forEach(t => t.stop()); // kill mic
      };

      recorder.start();
      setIsRecording(true);
    } catch(err) {
      alert("Microphone access denied. Please allow mic permissions in your browser.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div style={{ height: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header Controls */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(7, 14, 39, 0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'var(--font-montserrat)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <ArrowLeft size={16} /> Back
          </Link>
          <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', color: 'var(--gold)', margin: 0 }}>
            {lesson.title_en}
          </h1>
        </div>
      </div>

      {/* Split Screen Container */}
      <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
        
        {/* LEFT COMPONENT: Video Player */}
        <div style={{ flex: '1 1 55%', minWidth: '350px', background: '#040816', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px', borderRight: '1px solid rgba(255,255,255,0.05)', overflowY: 'auto' }}>
            
            <div style={{ width: '100%', maxWidth: '950px', aspectRatio: '16/9', background: '#000', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                {isYouTube ? (
                   <iframe src={finalVideoUrl!} style={{ width: '100%', height: '100%', border: 'none' }} allowFullScreen />
                ) : finalVideoUrl ? (
                   <video src={finalVideoUrl} controls style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                   <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}>
                      No Video Available
                   </div>
                )}
            </div>

            <div style={{ width: '100%', maxWidth: '950px', marginTop: '30px', textAlign: 'left', marginBottom: '80px' }}>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', marginBottom: '8px' }}>{lesson.title_en}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Live Class Recording loaded {isYouTube ? "via secure YouTube proxy" : "directly from Strapi database"}.
                </p>

                {/* ADVANCED FEATURE: Voice Audio Recorder */}
                <div style={{ marginTop: '40px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Volume2 size={20} color="var(--gold)" /> Meditation Script Recorder</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '20px' }}>
                    Open the practice script in the Resources tab. Press record and read the script aloud in your own voice to create powerful auto-suggestions.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {!isRecording ? (
                      <button onClick={startRecording} style={{ background: 'var(--rose)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.8rem' }}>
                        <Mic size={16} /> Start Recording
                      </button>
                    ) : (
                      <button onClick={stopRecording} style={{ background: 'transparent', color: 'var(--rose)', border: '1px solid var(--rose)', padding: '10px 20px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.8rem', animation: 'pulse 2s infinite' }}>
                        <Square size={16} /> Stop Recording
                      </button>
                    )}

                    {audioURL && (
                       <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '8px 16px', borderRadius: '30px' }}>
                         <audio src={audioURL} controls style={{ height: '30px' }} />
                         <a href={audioURL} download="My_Meditation_Recording.webm" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-montserrat)' }}>Download</a>
                       </div>
                    )}
                  </div>
                </div>

            </div>
        </div>

        {/* RIGHT COMPONENT: Immutable Tabs (approx 45% width) */}
        <div style={{ flex: '1 1 45%', minWidth: '350px', background: 'var(--deep)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            
            {/* Header Tabs */}
            <div style={{ display: 'flex', background: 'rgba(7,14,39,0.9)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <button 
                  onClick={() => setActiveTab('slides')}
                  style={{ flex: 1, padding: '16px', background: activeTab === 'slides' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', color: activeTab === 'slides' ? 'var(--gold)' : 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-montserrat)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <LayoutTemplate size={16} /> Interactive Deck
                </button>
                <button 
                  onClick={() => setActiveTab('resources')}
                  style={{ flex: 1, padding: '16px', background: activeTab === 'resources' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', color: activeTab === 'resources' ? 'var(--gold)' : 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-montserrat)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <FileText size={16} /> Documents
                </button>
                <button 
                  onClick={() => setActiveTab('quiz')}
                  style={{ flex: 1, padding: '16px', background: activeTab === 'quiz' ? 'rgba(255,255,255,0.05)' : 'transparent', border: 'none', color: activeTab === 'quiz' ? 'var(--teal)' : 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-montserrat)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <HelpCircle size={16} /> Knowledge Check
                </button>
            </div>

            {/* TAB PANELS */}
            <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
                
                {/* 1. SLIDES TAB */}
                <div style={{ display: activeTab === 'slides' ? 'block' : 'none', height: '100%' }}>
                  <iframe 
                      src="/demo/InnerZen_DLT_W1_TheoryDeck_SatSun_v1.html"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      title="Theory Deck Presentation"
                      sandbox="allow-scripts allow-same-origin"
                  />
                </div>

                {/* 2. RESOURCES TAB */}
                <div style={{ display: activeTab === 'resources' ? 'block' : 'none', padding: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', marginBottom: '8px' }}>Curriculum Materials</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '30px' }}>Download your weekly course books, workbooks, and word scripts.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ background: 'rgba(45,139,117,0.1)', padding: '10px', borderRadius: '8px', color: 'var(--teal)' }}><BookOpen size={24} /></div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 600 }}>DLT Course Workbook</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-montserrat)' }}>HTML Book (Interactive Web Format)</div>
                        </div>
                      </div>
                      <a href="/WORKBOOK/InnerZen_DLT_W1_StudentWorkbook_v1 (1).html" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontFamily: 'var(--font-montserrat)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={14} /> DOWNLOAD / PRINT
                      </a>
                    </div>
                    
                    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ background: 'rgba(201,168,76,0.1)', padding: '10px', borderRadius: '8px', color: 'var(--gold)' }}><FileText size={24} /></div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 600 }}>Week 1 Workbook Prompts</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-montserrat)' }}>Microsoft Word DOCX (Edited Layout)</div>
                        </div>
                      </div>
                      <a href="#" download style={{ background: 'transparent', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontFamily: 'var(--font-montserrat)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={14} /> DOWNLOAD
                      </a>
                    </div>

                    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ background: 'rgba(74,46,122,0.2)', padding: '10px', borderRadius: '8px', color: '#fff' }}><Mic size={24} /></div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 600 }}>Deep Theta Script</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-montserrat)' }}>Read this aloud to yourself via Recorder</div>
                        </div>
                      </div>
                      <a href="#" download style={{ background: 'transparent', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.75rem', fontFamily: 'var(--font-montserrat)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={14} /> DOWNLOAD
                      </a>
                    </div>

                  </div>
                </div>

                {/* 3. QUIZ TAB */}
                <div style={{ display: activeTab === 'quiz' ? 'block' : 'none', padding: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', marginBottom: '8px' }}>Week 1 Assessment</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '30px' }}>Test your knowledge on the fundamental principles discussed in the video.</p>
                  
                  <div className="card" style={{ marginBottom: '24px' }}>
                    <div style={{ marginBottom: '16px', fontSize: '1.1rem' }}>1. What does the Critical Faculty do?</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', textAlign: 'left', cursor: 'pointer' }}>It generates creative visualization.</button>
                      <button style={{ padding: '12px 16px', background: 'rgba(45,139,117,0.1)', border: '1px solid var(--teal)', color: '#fff', borderRadius: '4px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>It blocks suggestions from the conscious to subconscious. <CheckCircle size={16} color="var(--teal)"/></button>
                      <button style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', textAlign: 'left', cursor: 'pointer' }}>It controls the autonomic nervous system.</button>
                    </div>
                  </div>

                  <div className="card" style={{ marginBottom: '24px' }}>
                    <div style={{ marginBottom: '16px', fontSize: '1.1rem' }}>2. Which brainwave state is considered the "Gateway"?</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', textAlign: 'left', cursor: 'pointer' }}>Beta</button>
                      <button style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', textAlign: 'left', cursor: 'pointer' }}>Alpha / Theta</button>
                      <button style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', textAlign: 'left', cursor: 'pointer' }}>Delta</button>
                    </div>
                  </div>

                  {!quizPassed ? (
                    <button onClick={() => setQuizPassed(true)} style={{ background: 'var(--gold)', color: 'var(--deep)', border: 'none', width: '100%', padding: '12px', borderRadius: '30px', fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: '0.2s', boxShadow: '0 4px 15px rgba(201,168,76,0.3)' }}>Submit Assessment</button>
                  ) : (
                    <div style={{ padding: '20px', background: 'rgba(45,139,117,0.1)', border: '1px solid var(--teal)', borderRadius: '12px', textAlign: 'center' }}>
                      <CheckCircle size={32} color="var(--teal)" style={{ marginBottom: '12px' }} />
                      <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px', fontFamily: 'var(--font-cormorant)' }}>Assessment Passed!</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '16px' }}>Congratulations on completing this module.</p>
                      
                      <Link href="/certificate" style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none', fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        <Award size={18} /> Claim Certificate
                      </Link>
                    </div>
                  )}
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}
