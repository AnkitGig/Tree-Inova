"use client"

import { useState } from "react"
import "./App.css"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <div className="logo" onClick={() => handlePageChange("home")}>
            <img src="/images/treeinova-logo.png" alt="TreeInova Logo" className="logo-image" />
            <span className="logo-text">TreeInova</span>
          </div>
        </div>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="#home" className={currentPage === "home" ? "active" : ""} onClick={() => handlePageChange("home")}>
            Home
          </a>
          <a
            href="#about"
            className={currentPage === "about" ? "active" : ""}
            onClick={() => handlePageChange("about")}
          >
            About
          </a>
          <a
            href="#services"
            className={currentPage === "services" ? "active" : ""}
            onClick={() => handlePageChange("services")}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={currentPage === "portfolio" ? "active" : ""}
            onClick={() => handlePageChange("portfolio")}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => handlePageChange("contact")}
          >
            Contact
          </a>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
    </header>
  )

  function renderCurrentPage() {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicesPage />
      case "portfolio":
        return <PortfolioPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="App">
      <Header />
      {renderCurrentPage()}
      <Footer />
    </div>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/images/treeinova-logo.png" alt="TreeInova Logo" className="logo-image" />
              <span className="logo-text">TreeInova</span>
            </div>
            <p>
              Innovating at the roots - Building the future of web development with cutting-edge technology and
              innovative solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                💼
              </a>
              <a href="#" className="social-link">
                📷
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Services</h4>
              <a href="#web-dev">Web Development</a>
              <a href="#mobile-dev">Mobile Development</a>
              <a href="#ecommerce">E-commerce</a>
              <a href="#cms">CMS Development</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#team">Our Team</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <a href="#contact">Contact Us</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DevStudio. All rights reserved. | Crafted with ❤️ by DevStudio Team</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicesPage />
      case "portfolio":
        return <PortfolioPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
    </div>
  )
}

export default App
