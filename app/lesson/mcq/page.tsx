'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Flag, Flame, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function MCQArena() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showMotivation, setShowMotivation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const testQuestions = [
    {
      question: "In Vedic psychology, which 'Kosha' relates directly to the intellectual and discriminative mind?",
      options: ["Annamaya Kosha", "Manomaya Kosha", "Vijnanamaya Kosha", "Anandamaya Kosha"],
      correct: 2,
      explanation: "Vijnanamaya Kosha is the wisdom sheath. The Manomaya Kosha handles raw emotions and sensory input, whereas the Vijnanamaya Kosha handles intellectual processing and deeper intelligence."
    },
    {
      question: "According to Clinical Hypnotherapy, what is the primary function of the 'Critical Faculty'?",
      options: ["To store long-term childhood memories", "To act as a firewall between the conscious and subconscious mind", "To generate Delta brainwaves", "To manage the autonomic nervous system"],
      correct: 1,
      explanation: "The Critical Faculty acts as a literal firewall. It filters out suggestions that do not match the existing belief system stored in the subconscious mind. Hypnotherapy temporarily bypasses this."
    },
    {
      question: "What is the core objective of the '5-WHY' Diagnostic technique?",
      options: ["To discover the initial sensitizing emotional root event", "To induce a deep trance", "To test a patient's patience", "To determine their astrological chart"],
      correct: 0,
      explanation: "By asking 'Why' repeatedly to descending emotional layers, we peel back the cognitive logical defenses to find the original emotional trauma (the Initial Sensitizing Event)."
    }
  ];

  const handleSelect = (index: number) => {
    if (hasAnswered) return; // Prevent changing answer after submission
    setSelectedAnswer(index);
  };

  const handleLockAnswer = () => {
    if (selectedAnswer === null) return;
    setHasAnswered(true);
    
    if (selectedAnswer === testQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    // Motivation Injection Check
    if (currentQuestion === 0 && !showMotivation) {
      setShowMotivation(true);
      return;
    }
    
    setShowMotivation(false);

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050a15', padding: '20px' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,215,0,0.3)', padding: '60px', borderRadius: '30px', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
          <Flame size={60} color="#FFD700" style={{ margin: '0 auto 20px auto' }} />
          <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#FFD700', marginBottom: '20px' }}>Assessment Complete</h1>
          <div style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px' }}>
            You scored <span style={{ fontWeight: 900, color: '#00E5FF', fontSize: '2rem' }}>{score}</span> out of {testQuestions.length}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '40px' }}>
            {score === testQuestions.length ? "Excellent architecture of mind! You truly understand the deep layers of the subconscious." : "Great effort. Review the missed modules and rebuild your internal map."}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/dashboard" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', padding: '16px 36px', borderRadius: '30px', fontWeight: 800 }}>Return to Dashboard</Link>
            <button onClick={() => window.location.reload()} style={{ background: '#00E5FF', color: '#000', border: 'none', padding: '16px 36px', borderRadius: '30px', fontWeight: 800, cursor: 'pointer' }}>Retake Assessment</button>
          </div>
        </div>
      </div>
    );
  }

  if (showMotivation) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050a15', padding: '20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Sparkles size={50} color="#00E5FF" style={{ margin: '0 auto 30px auto' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', lineHeight: 1.4, marginBottom: '40px' }}>
            "The mind is not a vessel to be filled, but a fire to be kindled."
          </h2>
          <p style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '50px' }}>
            Focus target active. You are doing fantastic.
          </p>
          <button onClick={handleNext} style={{ background: '#00E5FF', color: '#000', border: 'none', padding: '16px 50px', borderRadius: '40px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 0 30px rgba(0,229,255,0.3)' }}>
            Continue Exam
          </button>
        </div>
      </div>
    );
  }

  const q = testQuestions[currentQuestion];
  const isCorrect = selectedAnswer === q.correct;

  return (
    <div style={{ minHeight: '100vh', background: '#050a15', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Top HUD */}
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
        <Link href="/dashboard" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 700 }}>Exit Trial</Link>
        <div style={{ display: 'flex', gap: '8px' }}>
          {testQuestions.map((_, i) => (
            <div key={i} style={{ width: '40px', height: '6px', borderRadius: '3px', background: i < currentQuestion ? '#00E5FF' : i === currentQuestion ? '#FFD700' : 'rgba(255,255,255,0.1)' }} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFD700', fontWeight: 800 }}>
          <Flag size={18} /> Question {currentQuestion + 1} of {testQuestions.length}
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', lineHeight: 1.4, marginBottom: '40px' }}>
          {q.question}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {q.options.map((option, index) => {
            
            // Dynamic Styling Logic Based on Answer State
            let bg = 'rgba(255,255,255,0.03)';
            let border = '2px solid rgba(255,255,255,0.1)';
            let textColor = '#fff';

            if (hasAnswered) {
              if (index === q.correct) {
                bg = 'rgba(0, 229, 255, 0.1)';
                border = '2px solid #00E5FF';
                textColor = '#00E5FF';
              } else if (index === selectedAnswer && index !== q.correct) {
                bg = 'rgba(255, 64, 129, 0.1)';
                border = '2px solid #FF4081';
                textColor = '#FF4081';
              } else {
                bg = 'rgba(255,255,255,0.01)';
                border = '2px solid rgba(255,255,255,0.05)';
                textColor = 'rgba(255,255,255,0.3)';
              }
            } else if (selectedAnswer === index) {
              bg = 'rgba(255, 215, 0, 0.1)';
              border = '2px solid #FFD700';
              textColor = '#FFD700';
            }

            return (
              <button 
                key={index} 
                onClick={() => handleSelect(index)}
                style={{ background: bg, border: border, padding: '24px 30px', borderRadius: '16px', textAlign: 'left', cursor: hasAnswered ? 'default' : 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: textColor }}>{option}</span>
                </div>

                {hasAnswered && index === q.correct && <CheckCircle2 size={24} color="#00E5FF" />}
                {hasAnswered && index === selectedAnswer && index !== q.correct && <XCircle size={24} color="#FF4081" />}
              </button>
            );
          })}
        </div>
        
        {/* ACTION / FEEDBACK AREA */}
        {!hasAnswered ? (
          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={handleLockAnswer} 
              disabled={selectedAnswer === null}
              style={{ background: selectedAnswer === null ? 'rgba(255,255,255,0.1)' : '#FFD700', color: selectedAnswer === null ? 'rgba(255,255,255,0.4)' : '#000', border: 'none', padding: '16px 40px', borderRadius: '30px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', cursor: selectedAnswer === null ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
            >
              Lock Final Answer
            </button>
          </div>
        ) : (
          <div style={{ background: isCorrect ? 'rgba(0, 229, 255, 0.05)' : 'rgba(255, 64, 129, 0.05)', border: `1px solid ${isCorrect ? 'rgba(0, 229, 255, 0.2)' : 'rgba(255, 64, 129, 0.2)'}`, padding: '30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', animation: 'fadeIn 0.5s ease-out' }}>
             <div style={{ maxWidth: '600px' }}>
               <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px', color: isCorrect ? '#00E5FF' : '#FF4081' }}>
                 {isCorrect ? 'Brilliant Deduction! 🎯' : 'Incorrect Shift. Let\'s review. 🤔'}
               </h3>
               <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '1.1rem' }}>
                 {q.explanation}
               </p>
             </div>
             <button onClick={handleNext} style={{ background: '#fff', color: '#000', border: 'none', padding: '14px 28px', borderRadius: '30px', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textTransform: 'uppercase' }}>
               Next Target <ArrowRight size={18} />
             </button>
          </div>
        )}
        
      </div>
    </div>
  );
}
