import React from 'react';

interface WindowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Window({ children, className = '' }: WindowProps) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}
