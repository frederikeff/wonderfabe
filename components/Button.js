'use client';

import React from 'react';

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '', 
  isExternal = false 
}) => {
  const baseStyles = "font-semibold rounded-full transition-colors";
  
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-white text-green-600 hover:bg-green-50",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-50"
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-3",
    large: "px-10 py-4 text-lg"
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        className={styles}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
};

export default Button;