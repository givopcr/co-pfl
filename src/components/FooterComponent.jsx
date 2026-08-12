import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-[#374151] text-gray-300 py-8 text-center text-sm font-medium">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Politeknik Caltex Riau. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
