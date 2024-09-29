import React from 'react';

const CampaignsLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="bg-blue-50 min-h-screen"> {/* Set your desired background color here */}
      {children}
    </div>
  );
}

export default CampaignsLayout;
