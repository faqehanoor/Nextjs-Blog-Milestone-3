import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white m-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Pakistan&apos;s Eat. All rights reserved.</p>
        <nav className="mt-4">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors duration-200 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white transition-colors duration-200 mx-2"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-200 mx-2"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
}
