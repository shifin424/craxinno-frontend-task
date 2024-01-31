import React from 'react';
console.log("rached to button component")
const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type="Submit"
    >
      {text}
    </button>
  );
};

export default Button;