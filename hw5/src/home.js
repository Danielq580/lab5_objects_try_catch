import React from "react";

const Home = () => (
  <div>
    <h1>Welcome to the Home Page of Daniel!</h1>
    <img src={require('../src/images/facts.jpg')} alt="Home" className="facts"/>
    <p>This is the home page where we share the purpose of the website.</p>
  </div>
);

export default Home;
