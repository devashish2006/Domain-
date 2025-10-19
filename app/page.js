'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, CheckCircle, Globe, TrendingUp, Shield, Sparkles } from 'lucide-react';

export default function DomainEnquiryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [fireworks, setFireworks] = useState([]);
  const [diyas, setDiyas] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Generate random diyas
    const generateDiyas = () => {
      const newDiyas = [];
      for (let i = 0; i < 8; i++) {
        newDiyas.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 2
        });
      }
      setDiyas(newDiyas);
    };

    // Generate fireworks periodically
    const createFirework = () => {
      const newFirework = {
        id: Date.now() + Math.random(),
        left: 20 + Math.random() * 60,
        top: 10 + Math.random() * 40,
        color: ['#fbbf24', '#f59e0b', '#ef4444', '#ec4899', '#a855f7', '#10b981'][Math.floor(Math.random() * 6)]
      };
      
      setFireworks(prev => [...prev, newFirework]);
      
      setTimeout(() => {
        setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
      }, 2000);
    };

    generateDiyas();
    
    const fireworkInterval = setInterval(createFirework, 1500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(fireworkInterval);
    };
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:your-shriyansh.mishra@zohomail.in?subject=Inquiry for indiapharmacy.in&body=Hello, I am interested in purchasing the domain indiapharmacy.in. Please provide more details.';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7828047646', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-red-900 to-amber-950 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-amber-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          style={{
            bottom: '10%',
            right: '10%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-red-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"
          style={{
            top: mousePosition.y / 20,
            left: mousePosition.x / 20,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Fireworks */}
      {fireworks.map(fw => (
        <div
          key={fw.id}
          className="absolute pointer-events-none"
          style={{
            left: `${fw.left}%`,
            top: `${fw.top}%`,
          }}
        >
          <div className="relative">
            {/* Center burst */}
            <div 
              className="absolute w-4 h-4 rounded-full animate-ping"
              style={{ 
                backgroundColor: fw.color,
                animationDuration: '1s'
              }}
            />
            {/* Sparks radiating outward */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: fw.color,
                  animation: `sparkle 1.5s ease-out forwards`,
                  transform: `rotate(${i * 30}deg) translateY(0)`,
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Floating Diyas */}
      {diyas.map(diya => (
        <div
          key={diya.id}
          className="absolute pointer-events-none"
          style={{
            left: `${diya.left}%`,
            bottom: '-50px',
            animation: `floatUp ${diya.duration}s ease-in infinite`,
            animationDelay: `${diya.delay}s`
          }}
        >
          <div className="relative">
            {/* Diya flame */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-3 h-5 bg-gradient-to-t from-yellow-500 via-orange-400 to-red-500 rounded-full animate-pulse" 
                   style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-yellow-300 rounded-full blur-sm animate-pulse" />
            </div>
            {/* Diya bowl */}
            <div className="w-8 h-4 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full border-2 border-yellow-600" />
            <div className="w-6 h-2 bg-amber-900 rounded-full mx-auto mt-1" />
          </div>
        </div>
      ))}

      {/* Sparkles/Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        {/* Header Badge */}
        <div 
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2 rounded-full shadow-lg shadow-orange-500/50 mb-8">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span className="text-sm font-bold text-white">🪔 Diwali Special Offer • Limited Time 🪔</span>
          </div>
        </div>

        {/* Main Card */}
        <div 
          className={`w-full max-w-5xl transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-orange-500/30 p-8 md:p-12 border-2 border-amber-500/40">
            {/* Domain Name Display */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-8 py-4 rounded-2xl border-2 border-orange-500/40">
                <Globe className="w-10 h-10 text-orange-400 animate-pulse" />
                <div className="text-left">
                  <p className="text-xs text-orange-400 font-semibold mb-1 uppercase tracking-wider">Premium Domain</p>
                  <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 tracking-tight">
                    indiapharmacy.in
                  </h1>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
                Dominate India's <span className="text-amber-400 font-bold">₹1.4 Trillion</span> Healthcare Market with this Premium Domain
              </p>
            </div>

            {/* Pricing Section */}
            <div className="bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-2xl p-8 mb-10 border-2 border-orange-500/40 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-red-600 to-orange-600 text-white px-6 py-2 transform rotate-12 translate-x-4 -translate-y-2 shadow-lg">
                <span className="text-xs font-bold">🎆 DIWALI DHAMAKA 🎆</span>
              </div>
              <p className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
                <span>🪔</span> Special Diwali Offer <span>🪔</span>
              </p>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-3xl md:text-4xl text-gray-500 line-through font-bold">₹ 12,999</span>
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse shadow-lg">
                  62% OFF
                </div>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300">
                  ₹ 4,999
                </span>
              </div>
              <p className="text-gray-300 text-sm font-semibold mb-2">
                🎇 Light up your business this Diwali! 🎇
              </p>
              <p className="text-gray-400 text-sm">
                🎯 One-time payment • 🔒 Secure transfer • ⚡ Instant ownership
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="group bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-6 rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 border-2 border-orange-500/30 hover:border-orange-500/60">
                <TrendingUp className="w-12 h-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white text-lg mb-2">High ROI Potential</h3>
                <p className="text-sm text-gray-400">Perfect for pharmacy, healthcare, and medical businesses in India</p>
              </div>
              
              <div className="group bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-6 rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 border-2 border-orange-500/30 hover:border-orange-500/60">
                <CheckCircle className="w-12 h-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white text-lg mb-2">Brand Authority</h3>
                <p className="text-sm text-gray-400">Instant credibility with a memorable .in domain name</p>
              </div>
              
              <div className="group bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-6 rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 border-2 border-orange-500/30 hover:border-orange-500/60">
                <Shield className="w-12 h-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white text-lg mb-2">SEO Advantage</h3>
                <p className="text-sm text-gray-400">Keywords-rich domain for better search rankings</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleEmailClick}
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/70 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6" />
                  🪔 Claim This Domain Now 🪔
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-orange-500/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-orange-400 font-semibold">or reach us on</span>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-2xl font-bold shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <svg 
                  className="w-7 h-7 group-hover:rotate-12 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-90">Chat on WhatsApp</p>
                  <p className="text-lg font-black">+91 7828047646</p>
                </div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-orange-500/30 flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2 text-orange-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Verified Seller</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Secure Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center max-w-2xl">
          <p className="text-amber-400/90 text-sm font-medium">
            ✨ Diwali offer expires soon • Celebrate success with a premium healthcare domain ✨
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }
        
        @keyframes sparkle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}