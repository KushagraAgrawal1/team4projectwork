import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectShowcase from './components/ProjectShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="flex min-h-screen bg-blue-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="sticky top-0 z-10 bg-blue-50 text-4xl font-bold text-center mb-6 py-4">
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
