import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <span className="footer-title text-lg font-bold">PrintAllure</span>
          <p className="text-sm opacity-80 leading-relaxed">
            Empowering student-led innovation with high-quality custom printing solutions for all your academic and creative needs.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <span className="footer-title text-lg font-bold">Navigation</span>
          <nav className="grid gap-2">
            <Link to="/home" className="link link-hover transition-colors duration-200 hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="link link-hover transition-colors duration-200 hover:text-primary">
              Products
            </Link>
            <Link to="/about" className="link link-hover transition-colors duration-200 hover:text-primary">
              About Us
            </Link>
            <Link to="/contact" className="link link-hover transition-colors duration-200 hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>

        {/* Account Links */}
        <div className="space-y-4">
          <span className="footer-title text-lg font-bold">Account</span>
          <nav className="grid gap-2">
            <Link to="/login" className="link link-hover transition-colors duration-200 hover:text-primary">
              Login
            </Link>
            <Link to="/signup" className="link link-hover transition-colors duration-200 hover:text-primary">
              Signup
            </Link>
            <Link to="/account" className="link link-hover transition-colors duration-200 hover:text-primary">
              My Account
            </Link>
            <Link to="/orders" className="link link-hover transition-colors duration-200 hover:text-primary">
              Order History
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <span className="footer-title text-lg font-bold">Contact</span>
          <address className="not-italic space-y-2">
            <p className="opacity-80">123 University Ave</p>
            <p className="opacity-80">Campus Town, CT 12345</p>
            <a href="mailto:support@printallure.com" className="link link-hover block transition-colors duration-200 hover:text-primary">
              support@printallure.com
            </a>
            <a href="tel:+919876543210" className="link link-hover block transition-colors duration-200 hover:text-primary">
              +91 98765 43210
            </a>
          </address>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-xl hover:text-primary transition-colors duration-200" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl hover:text-primary transition-colors duration-200" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl hover:text-primary transition-colors duration-200" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full max-w-6xl mx-auto pt-8 mt-8 border-t border-base-300 text-sm text-center opacity-70">
        <p>© {new Date().getFullYear()} PrintAllure. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;