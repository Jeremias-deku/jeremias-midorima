// Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-800 text-orange-500 text-center">
      <p>&copy; {new Date().getFullYear()} My webpages. All rights reserved.</p>
    </footer>
  );
}
