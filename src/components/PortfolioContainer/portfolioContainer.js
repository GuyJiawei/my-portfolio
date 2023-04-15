import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact"
import "../PortfolioContainer/PortfolioContainer.css";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className='portfolio-container'>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div style={{ height: "80vh" }}>
          {renderPage()}
        </div>
        <Footer />
      </div>
    );
  }