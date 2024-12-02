import React from "react";

const Page1 = () => (
  <div>
    <h1>Page 1: Amazing Facts</h1>
    <img src={require('../src/images/flam.jpg')} alt="Page 1" className="flam"/>
    <p>Did you know? A group of flamingos is called a "flamboyance"!</p>
  </div>
);

export default Page1;
