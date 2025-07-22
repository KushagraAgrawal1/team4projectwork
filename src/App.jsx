import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProjectShowcase from './components/ProjectShowcase';
import Footer from './components/Footer';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Toggle Sidebar if needed

  return (
    <>
      <div className="flex min-h-screen bg-slate-50">
        {/* Sidebar */}
        <Sidebar isSidebarVisible={isSidebarVisible} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <header className="sticky top-0 z-30 bg-slate-50 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center py-6 sm:py-8 tracking-wide shadow-md border-b-4 border-purple-400">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Project ShowCase
            </span>
          </header>

          <ProjectShowcase />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
