import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ paddingTop: '60px', flexGrow: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;