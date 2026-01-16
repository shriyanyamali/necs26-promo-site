"use client";

import { useState } from "react";

export default function EsportsPromo() {
  const [selectedGame, setSelectedGame] = useState("valorant");

  const teams = {
    valorant: [
      { name: "Cloud9", logo: "C9", members: ["TenZ", "Zellsis", "johnqt", "Sacy", "moose"], seed: 1 },
      { name: "Sentinels", logo: "SEN", members: ["Zekken", "johnqt", "Sacy", "TenZ", "Marved"], seed: 2 },
      { name: "NRG Esports", logo: "NRG", members: ["s0m", "FNS", "crashies", "Victor", "ardiis"], seed: 3 },
      { name: "100 Thieves", logo: "100T", members: ["Asuna", "bang", "Derrek", "stellar", "Will"], seed: 4 },
    ],
    rocketleague: [
      { name: "G2 Esports", logo: "G2", members: ["Jknaps", "Chicago", "Atomic"], seed: 1 },
      { name: "Spacestation", logo: "SSG", members: ["Daniel", "Arsenal", "retals"], seed: 2 },
      { name: "FaZe Clan", logo: "FaZe", members: ["Firstkiller", "Sypical", "Ayyjayy"], seed: 3 },
      { name: "NRG", logo: "NRG", members: ["jstn", "GarrettG", "SquishyMuffinz"], seed: 4 },
    ],
    smash: [
      { name: "Team Liquid", logo: "TL", members: ["Riddles", "Dabuz", "Cosmos"], seed: 1 },
      { name: "TSM", logo: "TSM", members: ["Tweek", "Void", "Leffen"], seed: 2 },
      { name: "Moist Esports", logo: "ME", members: ["Light", "Kola", "Aaron"], seed: 3 },
      { name: "Luminosity", logo: "LG", members: ["Marss", "Goblin", "Elegant"], seed: 4 },
    ],
  };

  const schedule = [
    { day: "Day 1", date: "May 6", time: "10:00 AM", game: "Valorant", match: "Opening Ceremony + Group Stage", stage: "Main Stage" },
    { day: "Day 1", date: "May 6", time: "2:00 PM", game: "Rocket League", match: "Group Stage Begins", stage: "Arena B" },
    { day: "Day 2", date: "May 7", time: "11:00 AM", game: "Super Smash Bros", match: "Round of 32", stage: "Arena C" },
    { day: "Day 2", date: "May 7", time: "3:00 PM", game: "Valorant", match: "Playoffs Begin", stage: "Main Stage" },
    { day: "Day 3", date: "May 8", time: "12:00 PM", game: "Rocket League", match: "Semifinals", stage: "Main Stage" },
    { day: "Day 3", date: "May 8", time: "6:00 PM", game: "Super Smash Bros", match: "Top 8", stage: "Main Stage" },
    { day: "Day 4", date: "May 9", time: "1:00 PM", game: "Valorant", match: "Grand Finals", stage: "Main Stage" },
    { day: "Day 5", date: "May 10", time: "2:00 PM", game: "All Games", match: "Championship Finals", stage: "Main Stage" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
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
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            <path id="thread1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#threadFade1)" strokeWidth="1.2" fill="none" opacity="0.9" />
            <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="3.5s" repeatCount="indefinite"><mpath href="#thread1" /></animateMotion>
            </circle>
            <path id="thread2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#threadFade2)" strokeWidth="1.8" fill="none" opacity="0.8" />
            <circle r="3.5" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#thread2" /></animateMotion>
            </circle>
            <path id="thread3" d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330" stroke="url(#threadFade3)" strokeWidth="1.5" fill="none" opacity="0.85" />
            <circle r="3.2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
              <animateMotion dur="3.8s" repeatCount="indefinite"><mpath href="#thread3" /></animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-16 text-center pt-20 pb-32">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-3 shadow-lg shadow-pink-500/20">
            <span className="text-pink-400 text-sm font-bold tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>May 6-10, 2026 • Nashville, TN</span>
          </div>
        </div>

        <h1 className="text-white font-black tracking-tighter mb-6 animate-slide-up" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 leading-none">
            NATIONAL
          </div>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-none">
            ESPORTS
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-gray-400 leading-none">
            CHAMPIONSHIP
          </div>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl font-light tracking-wide animate-fade-in-delay" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          Watch the world's best teams compete in
          <span className="text-pink-400 font-semibold"> Valorant</span>,
          <span className="text-purple-400 font-semibold"> Rocket League</span>, and
          <span className="text-blue-400 font-semibold"> Super Smash Bros</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-center animate-fade-in-delay-2">
          <div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              50+
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Teams</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              $500K
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Prize Pool</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              5 Days
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Of Action</div>
          </div>
        </div>
      </section>

      {/* Team Rosters Section */}
      <section className="relative z-10 px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 text-center tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            TEAM ROSTERS
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Meet the competing teams
          </p>

          {/* Game Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedGame("valorant")}
              className={`px-8 py-3 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                selectedGame === "valorant"
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-xl shadow-pink-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              VALORANT
            </button>
            <button
              onClick={() => setSelectedGame("rocketleague")}
              className={`px-8 py-3 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                selectedGame === "rocketleague"
                  ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-xl shadow-purple-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              ROCKET LEAGUE
            </button>
            <button
              onClick={() => setSelectedGame("smash")}
              className={`px-8 py-3 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                selectedGame === "smash"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-xl shadow-blue-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              SUPER SMASH BROS
            </button>
          </div>

          {/* Teams Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams[selectedGame].map((team, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {team.logo}
                  </div>
                  <div className="text-pink-400 font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    SEED #{team.seed}
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {team.name}
                </h3>
                <div className="space-y-2">
                  {team.members.map((member, i) => (
                    <div
                      key={i}
                      className="text-gray-400 text-sm py-2 px-3 bg-white/5 rounded-lg"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Schedule Section */}
      <section className="relative z-10 px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 text-center tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            LIVE SCHEDULE
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            All times shown in Central Time (CT)
          </p>

          <div className="space-y-4">
            {schedule.map((event, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-pink-400 font-bold text-sm mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {event.day}
                      </div>
                      <div className="text-white font-black text-2xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {event.date}
                      </div>
                    </div>
                    <div className="h-12 w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"></div>
                    <div>
                      <div className="text-purple-400 font-bold text-lg mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {event.time}
                      </div>
                      <div className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {event.stage}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 md:text-right">
                    <div className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-lg border border-pink-500/30 mb-2">
                      <span className="text-pink-400 font-bold text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {event.game}
                      </span>
                    </div>
                    <div className="text-white font-semibold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {event.match}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Tickets Section */}
      <section className="relative z-10 px-6 lg:px-16 py-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 text-center tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            EVENT TICKETS
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Secure your spot at the championship
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* General Admission */}
            <div className="bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="text-blue-400 font-bold text-sm mb-2 tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                General Admission
              </div>
              <div className="text-white font-black text-5xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                $49
              </div>
              <ul className="space-y-3 mb-8 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Access to all public viewing areas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Event merchandise discount
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  Digital event program
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                BUY NOW
              </button>
            </div>

            {/* VIP Pass */}
            <div className="bg-gradient-to-b from-purple-500/10 to-white/0 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform scale-105">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                MOST POPULAR
              </div>
              <div className="text-purple-400 font-bold text-sm mb-2 tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                VIP Pass
              </div>
              <div className="text-white font-black text-5xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                $149
              </div>
              <ul className="space-y-3 mb-8 text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Premium reserved seating
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Meet & greet with players
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Exclusive VIP lounge access
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Limited edition merchandise
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                BUY NOW
              </button>
            </div>

            {/* All-Access */}
            <div className="bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-pink-400 font-bold text-sm mb-2 tracking-wider uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                All-Access
              </div>
              <div className="text-white font-black text-5xl mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                $299
              </div>
              <ul className="space-y-3 mb-8 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Front row seating
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Backstage tour access
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Private player signing session
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Premium swag bag
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Catered meals included
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>

            {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center font-black text-white text-xl shadow-lg">
                  NE
                </div>
                <div>
                  <div className="text-white font-black text-xl tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>NECS</div>
                  <div className="text-pink-400 text-xs font-semibold tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>2026</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                The premier esports championship bringing together the best teams in competitive gaming.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>About Event</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Team Registration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Prize Pool</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Rules & Regulations</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li>Nashville, Tennessee</li>
                <li>info@necs2026.com</li>
                <li>(615) 555-GAME</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              © 2026 National Esports Championship Series. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

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

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}