import React, { useState } from "react";
import Header from "../Header/Header";
import About from "../Pages/About";
import ProjectsList from "../Pages/ProjectsList";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact"

import "../PortfolioContainer/portfolioContainer.css"

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <ProjectsList />;
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
        <div>
          {renderPage()}
        </div>
      </div>
    );
  }