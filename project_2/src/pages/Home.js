import React from "react";

function Home() {
  return (
    <div className="page-container">
      <div className="intro-text">
        <h1>Welcome to the Nature Gallery</h1>
        <p>Explore the beauty of nature through stunning images of stars, trees, mountains, and more.</p>
      </div>
      <img className="home-image" src="/images/nature.jpg" alt="Nature Image" />
    </div>
  );
}

export default Home;
