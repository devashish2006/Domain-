'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone, CheckCircle, Globe, TrendingUp, Shield, Sparkles } from 'lucide-react';

export default function DomainEnquiryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:your-email@gmail.com?subject=Inquiry for indiapharmacy.in&body=Hello, I am interested in purchasing the domain indiapharmacy.in. Please provide more details.';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-green-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          style={{
            bottom: '10%',
            right: '10%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-teal-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"
          style={{
            top: mousePosition.y / 20,
            left: mousePosition.x / 20,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        {/* Header Badge */}
        <div 
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-2 rounded-full shadow-lg shadow-emerald-500/50 mb-8">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span className="text-sm font-bold text-white">Premium Domain • Limited Time Offer</span>
          </div>
        </div>

        {/* Main Card */}
        <div 
          className={`w-full max-w-5xl transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-emerald-500/20 p-8 md:p-12 border border-emerald-500/30">
            {/* Domain Name Display */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 px-8 py-4 rounded-2xl border border-emerald-500/30">
                <Globe className="w-10 h-10 text-emerald-400 animate-pulse" />
                <div className="text-left">
                  <p className="text-xs text-emerald-400 font-semibold mb-1 uppercase tracking-wider">Premium Domain</p>
                  <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 tracking-tight">
                    indiapharmacy.in
                  </h1>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
                Dominate India's <span className="text-emerald-400 font-bold">₹1.4 Trillion</span> Healthcare Market with this Premium Domain
              </p>
            </div>

            {/* Pricing Section */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl p-8 mb-10 border border-emerald-500/30 text-center">
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-3">Special Launch Offer</p>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-3xl md:text-4xl text-gray-500 line-through font-bold">$2,999</span>
                <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                  60% OFF
                </div>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">
                  $1,199
                </span>
                <span className="text-2xl text-gray-400 font-semibold">USD</span>
              </div>
              <p className="text-gray-400 text-sm">
                🎯 One-time payment • 🔒 Secure transfer • ⚡ Instant ownership
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="group bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-6 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                <TrendingUp className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white text-lg mb-2">High ROI Potential</h3>
                <p className="text-sm text-gray-400">Perfect for pharmacy, healthcare, and medical businesses in India</p>
              </div>
              
              <div className="group bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-6 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                <CheckCircle className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white text-lg mb-2">Brand Authority</h3>
                <p className="text-sm text-gray-400">Instant credibility with a memorable .in domain name</p>
              </div>
              
              <div className="group bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-6 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40">
                <Shield className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white text-lg mb-2">SEO Advantage</h3>
                <p className="text-sm text-gray-400">Keywords-rich domain for better search rankings</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleEmailClick}
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/60 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6" />
                  Claim This Domain Now
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-500/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-emerald-400 font-semibold">or reach us on</span>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-2xl font-bold shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
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
                  <p className="text-lg font-black">+91 98765 43210</p>
                </div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-emerald-500/20 flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Verified Seller</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Secure Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center max-w-2xl">
          <p className="text-emerald-400/80 text-sm font-medium">
            ⚡ Limited time offer expires soon • Don't miss this opportunity to own a premium healthcare domain
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
      `}</style>
    </div>
  );
}