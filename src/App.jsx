import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectShowcase from './components/ProjectShowcase';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="flex min-h-screen  bg-slate-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
  <div className="flex-1 p-6">
  <h1 className="sticky top-0 z-10 bg-slate-50 text-5xl font-extrabold text-center mb-10 py-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md border-b-4 border-purple-400">
      Project ShowCase
  </h1>
  <ProjectShowcase />
</div>




      </div>
      <Footer />
    </>
  );
}

export default App;
