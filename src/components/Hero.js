import React from "react";

const Hero = ({ title, children }) => (
  <div>
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);

export default Hero;
