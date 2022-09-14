import React from "react";

const Button = ({ action, label }) => {
  return (
    <button className="btn btn-primary" onClick={action}>
      {label}
    </button>
  );
};

export default Button;
