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
<h1 className="sticky top-0 z-30 bg-slate-50 text-5xl font-extrabold text-center py-8 tracking-wider shadow-md border-b-4 border-purple-400">
  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
    Project ShowCase
  </span>
</h1>





  <ProjectShowcase />
</div>




      </div>
      <Footer />
    </>
  );
}

export default App;
