"use client";

import { useState } from "react";

export default function EsportsPromo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background - Flowing Energy Threads */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Neon Pulse Gradients */}
            <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(236,72,153,1)" />
              <stop offset="30%" stopColor="rgba(219,39,119,1)" />
              <stop offset="70%" stopColor="rgba(190,24,93,0.8)" />
              <stop offset="100%" stopColor="rgba(190,24,93,0)" />
            </radialGradient>
            <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(139,92,246,1)" />
              <stop offset="25%" stopColor="rgba(124,58,237,0.9)" />
              <stop offset="60%" stopColor="rgba(109,40,217,0.7)" />
              <stop offset="100%" stopColor="rgba(109,40,217,0)" />
            </radialGradient>
            <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59,130,246,1)" />
              <stop offset="35%" stopColor="rgba(37,99,235,1)" />
              <stop offset="75%" stopColor="rgba(29,78,216,0.6)" />
              <stop offset="100%" stopColor="rgba(29,78,216,0)" />
            </radialGradient>
            
            {/* Thread Fades */}
            <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="15%" stopColor="rgba(236,72,153,0.8)" />
              <stop offset="85%" stopColor="rgba(236,72,153,0.8)" />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="12%" stopColor="rgba(139,92,246,0.7)" />
              <stop offset="88%" stopColor="rgba(139,92,246,0.7)" />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="18%" stopColor="rgba(59,130,246,0.8)" />
              <stop offset="82%" stopColor="rgba(59,130,246,0.8)" />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            {/* Energy Thread 1 */}
            <path
              id="thread1"
              d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340"
              stroke="url(#threadFade1)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.9"
            />
            <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="3.5s" repeatCount="indefinite">
                <mpath href="#thread1" />
              </animateMotion>
            </circle>

            {/* Energy Thread 2 */}
            <path
              id="thread2"
              d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370"
              stroke="url(#threadFade2)"
              strokeWidth="1.8"
              fill="none"
              opacity="0.8"
            />
            <circle r="3.5" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="4.2s" repeatCount="indefinite">
                <mpath href="#thread2" />
              </animateMotion>
            </circle>

            {/* Energy Thread 3 */}
            <path
              id="thread3"
              d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330"
              stroke="url(#threadFade3)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.85"
            />
            <circle r="3.2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="3.8s" repeatCount="indefinite">
                <mpath href="#thread3" />
              </animateMotion>
            </circle>

            {/* Additional threads for depth */}
            <path
              id="thread4"
              d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390"
              stroke="url(#threadFade1)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#thread4" />
              </animateMotion>
            </circle>

            <path
              id="thread5"
              d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350"
              stroke="url(#threadFade2)"
              strokeWidth="1.3"
              fill="none"
              opacity="0.7"
            />
            <circle r="2.8" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="4.5s" repeatCount="indefinite">
                <mpath href="#thread5" />
              </animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center font-black text-white text-xl shadow-lg shadow-pink-500/30">
            NE
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-black text-xl tracking-tight">NECS</div>
            <div className="text-pink-400 text-xs font-semibold tracking-wider">2026</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
            About
          </a>
          <a href="#games" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
            Games
          </a>
          <a href="#schedule" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
            Schedule
          </a>
          <a href="#tickets" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
            Tickets
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105">
          Register Team
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-pink-500/20 z-20 shadow-2xl">
          <nav className="flex flex-col space-y-1 px-6 py-6">
            <a href="#about" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all">
              About
            </a>
            <a href="#games" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all">
              Games
            </a>
            <a href="#schedule" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all">
              Schedule
            </a>
            <a href="#tickets" className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all">
              Tickets
            </a>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mt-4 shadow-lg">
              Register Team
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 lg:px-16 text-center">
        {/* Event Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-3 shadow-lg shadow-pink-500/20">
            <span className="text-pink-400 text-sm font-bold tracking-wider">MAY 6-10, 2026 • NASHVILLE, TN</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-white font-black tracking-tighter mb-6 animate-slide-up">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4">
            NATIONAL
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            ESPORTS
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic font-light text-gray-400">
            Championship
          </div>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl font-light tracking-wide animate-fade-in-delay">
          Watch the world's best teams compete in
          <span className="text-pink-400 font-semibold"> Valorant</span>,
          <span className="text-purple-400 font-semibold"> Rocket League</span>, and
          <span className="text-blue-400 font-semibold"> Super Smash Bros</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
          <button className="group relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-bold tracking-wide flex items-center justify-center gap-3 shadow-2xl shadow-pink-500/40 hover:shadow-pink-500/60 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Get Tickets</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>

          <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold tracking-wide flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
            Watch Trailer
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-center animate-fade-in-delay-3">
          <div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">Teams</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text mb-2">
              $500K
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">Prize Pool</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text mb-2">
              5 Days
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase">Of Action</div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.9s forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}