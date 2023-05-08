import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} TrailWeather - Built with Next.js</p>
    </footer>
  );
};

export default Footer;