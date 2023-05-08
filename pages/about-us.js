import * as React from "react";
import MainLayout from '../components/layout/layout';

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="container">
        <h1>About Us</h1>
        <p>If you have any questions or comments, please don&apos;t hesitate to contact us:</p>
        <ul>
          <li>Name: Devin Anderson</li>
          <li>Organization: Harvard University</li>
          <li>Email: nostro37@gmail.com</li>
          <li>Phone: 203-715-4454</li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default AboutUs;