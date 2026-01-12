import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-5xl font-bold text-white-text relative inline-block">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent rounded-full"></span>
    </h2>
  </div>
);

export default SectionTitle;
