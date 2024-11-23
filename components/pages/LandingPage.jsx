import React from 'react';

const LandingPage = () => {
    const LinkPages = [
        { label: "Search Players Worldwide", value: "Search Players" },
        { label: "Join the Perfact Clan", value: "Explore Clans" },
        { label: "Gold Pass Infoemation", value: "Gold Pass Season" },
        { label: "Search Best Capitals", value: "Clan Capital" }
      ]
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('/images/landingBg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/90 to-black/95 backdrop-blur-sm" />
      </div>

      {/* Hero Section - Full Screen */}
      <main className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="text-zinc-100">Master</span> 
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text">Your Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
              Track stats, analyze battles, and perfect your strategy with the ultimate Clash of Clans companion
            </p>
            

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              {LinkPages.map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 flex flex-col justify-between">
                  <div className="text-2xl font-bold text-purple-500">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;