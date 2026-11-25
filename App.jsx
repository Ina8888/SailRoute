import React from 'react';

export default function Home() {

//scrolling function to a given section when clicking the button
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //data about the 6 buttons and their assigned sections
  const features = [
    { label: 'Web App', targetId: 'connected-tools' },
    { label: 'Personal Fleet', targetId: 'setup' },
    { label: '2D Map', targetId: 'map' },
    { label: 'Real-time Tracking', targetId: 'tracking' },
    { label: 'Crew Profile', targetId: 'crew' },
    { label: 'Shortest Route', targetId: 'routing' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-slate-900 text-white overflow-hidden px-4">
        {/* Декоративна вълна (опростена с Tailwind) */}
        <div className="absolute bottom-0 w-full h-16 bg-white rounded-t-[100%]"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-4">SAILROUTE</h1>
        <p className="text-lg md:text-xl text-center max-w-md mb-8 italic text-slate-300">
          For an easier sailing with a trustful crew
        </p>
        
        <div className="flex gap-4 z-10">
          <button className="px-8 py-2 rounded-full border border-white hover:bg-white hover:text-slate-900 transition-colors duration-300">
            Login
          </button>
          <button className="px-8 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300">
            Sign up
          </button>
        </div>
      </section>

      {/* 2. Anchor / About Section */}
      <section className="py-20 px-8 flex flex-col md:flex-row items-center justify-center gap-12 bg-white">
        <div className="text-9xl text-slate-900">⚓</div>
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">For an easier sailing with a trustful crew</h2>
          <p className="text-slate-500">
            Plan your journeys, manage your vessels, and ensure safety with crew-aware routing.
          </p>
        </div>
      </section>

      {/* 3. Features Menu (What does it do?) */}
      <section className="py-16 px-4 bg-slate-50 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-slate-400 tracking-widest mb-2">SAILROUTE</h2>
        <p className="text-xl mb-8">What does it do?</p>
        
        {/* 6-те бутона със скролинг */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl w-full">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(feature.targetId)}
              className="py-3 px-6 rounded-full border-2 border-slate-200 bg-white shadow-sm hover:border-red-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 font-medium text-slate-700"
            >
              {feature.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- Секциите, към които сочат бутоните --- */}

      {/* Connected Tools */}
      <section id="connected-tools" className="py-24 px-8 bg-sky-100 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h3 className="text-2xl font-bold mb-6 text-sky-900">• Connected tools to help a sailor</h3>
          <p className="mb-12 text-sky-800">
            Our system integrates external APIs like MarineBase and OpenMeteo to provide you with the most accurate data for your vessel and weather conditions.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
              <div className="text-4xl mb-4 text-sky-500">🌍</div>
              <h4 className="font-bold mb-2">Weather & Routing</h4>
              <p className="text-sm text-slate-500">Real-time GRIB data and isochrone calculations.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
              <div className="text-4xl mb-4 text-sky-500">⚓</div>
              <h4 className="font-bold mb-2">Anchor Alarm</h4>
              <p className="text-sm text-slate-500">Handoff to external safe anchoring modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crew Profile */}
      <section id="crew" className="py-24 px-8 bg-sky-200 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-4 text-sky-900">• Crew profile</h3>
        <p className="max-w-2xl text-sky-800">
          Create specific profiles for your sailing trips. Adjust parameters for wind limits, wave heights, and crew experience to ensure the algorithm calculates the safest possible route.
        </p>
      </section>

      {/* Personalization Setup */}
      <section id="setup" className="py-24 px-8 bg-white flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-8">• Personalization setup</h3>
        <div className="flex flex-col gap-6 max-w-lg w-full">
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-full shadow-sm border border-slate-100">
            <span className="text-4xl font-light text-slate-300">1</span>
            <span className="font-medium text-lg">Pick your vessel</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-full shadow-sm border border-slate-100 ml-8">
            <span className="text-4xl font-light text-slate-300">2</span>
            <span className="font-medium text-lg">Select crew profile</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-full shadow-sm border border-slate-100 ml-16">
            <span className="text-4xl font-light text-slate-300">3</span>
            <span className="font-medium text-lg">Set destination</span>
          </div>
        </div>
      </section>

      {/* 2D Map Visualization */}
      <section id="map" className="py-24 px-8 bg-slate-50 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-8">• 2D Map visualization</h3>
        <div className="w-full max-w-4xl h-96 bg-slate-300 rounded-3xl overflow-hidden relative shadow-inner flex items-center justify-center">
          {/* Placeholder for MapLibre */}
          <span className="text-slate-500 font-medium">MapLibre GL JS Container</span>
          <div className="absolute bg-slate-800 text-white px-8 py-6 rounded-2xl shadow-xl">
            Navigation plan rendering
          </div>
        </div>
      </section>

      {/* Real-time Tracking & Shortest Route */}
      <section id="tracking" className="py-24 px-8 bg-white text-center">
        <h3 className="text-2xl font-bold mb-4 text-slate-800">• Real-time vessel tracking</h3>
        <p className="max-w-2xl mx-auto mb-16 text-slate-600">
          Monitor your position, Speed Over Ground (SOG), and Course Over Ground (COG) live directly from your NMEA instruments.
        </p>

        <div id="routing" className="pt-12 border-t border-slate-100">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">• Shortest route calculation</h3>
          <p className="max-w-2xl mx-auto text-slate-600">
            Our Python-based routing engine utilizes an isochrone algorithm adjusted for your vessel's polar data and crew limitations to find the optimal path.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-8">
        <p>© 2026 SailRoute. TUES Diploma Thesis.</p>
      </footer>
    </div>
  );
}