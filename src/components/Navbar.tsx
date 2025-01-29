import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Logo />
            <span className="text-xl font-bold">AutomateWork</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}