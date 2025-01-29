import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-lighter py-4 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-center space-x-6 text-sm text-gray-400">
        <Link to="/imprint" className="hover:text-primary-light transition-colors">
          Imprint
        </Link>
        <Link to="/privacy" className="hover:text-primary-light transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}