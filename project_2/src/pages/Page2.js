import React, { useState } from "react";
import Card from "../components/Card";
import ModalWindow from "../components/ModalWindow";

function Page1() {
  const [modalData, setModalData] = useState(null);

  const cards = [
    { title: "River", image: "/images/river.jpg", description: "Rivers carve through the land, creating valleys and nourishing ecosystems." },
    { title: "River", image: "/images/river1.jpg", description: "They flow from mountains to seas, carrying water and nutrients." },
    { title: "River", image: "/images/river2.jpg", description: "Rivers are vital sources of life, providing fresh water for plants, animals, and humans." },
    { title: "Mountain", image: "/images/mountain.jpg", description: "Mountains rise high above the land, their peaks often covered in snow." },
    { title: "Mountain", image: "/images/mountain1.jpg", description: "They are home to diverse wildlife and are challenging for climbers to conquer." },
    { title: "Mountain", image: "/images/mountain2.jpg", description: "Mountains play a crucial role in shaping weather patterns and ecosystems." }
  ];

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <div className="page-container">
      <div className="intro-text">
        <h1>River and Mountain</h1>
        <p>Rivers and mountains are powerful forces of nature, shaping the landscape around them. Rivers carve through the earth, flowing with energy and life, while mountains stand as timeless giants, towering above the land. Together, they create a dynamic balance in nature, with rivers feeding valleys and mountains offering shelter to diverse ecosystems.</p>
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
