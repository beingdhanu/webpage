
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Dhanu Gurung</h3>
            <p className="text-portfolio-light">BIT Final-Year Student | Aspiring Data Analyst</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-portfolio-light">
              &copy; {currentYear} Dhanu Gurung. All rights reserved.
            </p>
            <a 
              href="https://dhanugurung99.com.np/" 
              className="text-sm text-portfolio-accent hover:underline"
            >
              dhanugurung99.com.np
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
