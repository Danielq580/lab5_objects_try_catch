import React, { useState } from "react";
import Card from "../components/Card";
import ModalWindow from "../components/ModalWindow";

function Page1() {
  const [modalData, setModalData] = useState(null);

  // Array of six cards with images, titles, and descriptions
  const cards = [
    { title: "Star", image: "/images/star.jpg", description: "Stars are massive, glowing balls of gas that release energy through nuclear fusion, lighting up the night sky with their brilliance." },
    { title: "Star", image: "/images/star1.jpg", description: "In many cultures, stars represent hope, guidance, and destiny, often used for navigation and symbolizing fame and success." },
    { title: "Star", image: "/images/star2.jpg", description: "Stars are the eternal observers of the universe, their twinkling light evoking a sense of wonder and mystery as they silently watch over the world below." },
    { title: "Tree", image: "/images/tree.jpg", description: "A tree is a living organism that provides oxygen and shelter." },
    { title: "Tree", image: "/images/tree1.jpg", description: "Trees grow tall, with roots deeply anchored in the ground." },
    { title: "Tree", image: "/images/tree2.jpg", description: "Trees symbolize strength, resilience, and the passage of time." }
  ];

  // Open modal with card data
  const openModal = (data) => setModalData(data);

  // Close modal
  const closeModal = () => setModalData(null);

  return (
    <div className="page-container">
      <div className="intro-text">
        <h1>Stars and Trees</h1>
        <p>Stars and trees are two amazing natural components, each with their own distinct and impressive presence. Stars, dispersed throughout the great expanse of the night sky, have fascinated humanity for generations, representing mystery, direction, and amazement. They illuminate the skies, each glowing with its own distinct vitality, and some even create spectacular constellations that narrate ancient stories. Trees, on the other hand, serve as quiet protectors of the Earth. Their towering trunks and lush branches reach for the sky, providing shelter, oxygen, and beauty to everyone around them. Trees, like stars, play an important part in the balance of life by supplying nutrition to innumerable species and representing the passage of time via their growth rings. </p>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} onOpen={() => openModal(card)} />
        ))}
      </div>

      {modalData && <ModalWindow {...modalData} onClose={closeModal} />}
    </div>
  );
}

export default Page1;
