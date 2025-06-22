import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-0">
      <div className="flex justify-center gap-6 mb-3 text-xl">
        <a
          href="https://github.com/shailesh1945"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/shailesh-khandate/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/sk_shailesh94"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Shailesh94_SK"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} S K. All rights reserved.
      </p>
    </footer>
  );
}
