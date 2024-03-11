import React from 'react';

const MarqueeHeader = ({ text }) => {
  return (
    <div className="marquee-header">
      <marquee>{text}</marquee>
    </div>
  );
};

export default MarqueeHeader;
