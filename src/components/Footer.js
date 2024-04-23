import React from 'react';

import "./Footer.css";

export default function Footer() {
 
    var currentYear = new Date().getFullYear();
   
  return (
    <footer className="footer">
    {/* <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div> */}
    <p>{currentYear} || Made with <span className='love'>&#10084;</span> by lunatic.exe </p>
  </footer>
  )
  
}


