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
        <div className="flex-1 p-6 ">
          <h1 className="sticky top-0 z-10 bg-slate-50 text-4xl font-bold text-center mb-8 py-6 tracking -wide text-gray-900 shadow-md border-b-3 ">
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
