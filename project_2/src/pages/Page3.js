import React, { useState } from "react";
import Card from "../components/Card";
import ModalWindow from "../components/ModalWindow";

function Page1() {
  const [modalData, setModalData] = useState(null);

  const cards = [
    { title: "Volcano", image: "/images/volcano.jpg", description: "Volcanoes are powerful natural forces that erupt molten rock and ash." },
    { title: "Volcano", image: "/images/volcano1.jpg", description: "They create new landforms and can dramatically change the surrounding environment." },
    { title: "Volcano", image: "/images/volcano2.jpg", description: "Volcanoes are often found at tectonic plate boundaries, where the earth's crust is active." },
    { title: "Desert", image: "/images/desert.jpg", description: "Deserts are dry, barren landscapes with extreme temperatures and little rainfall." },
    { title: "Desert", image: "/images/desert1.jpg", description: "Despite the harsh conditions, deserts are home to unique plant and animal species." },
    { title: "Desert", image: "/images/desert2.jpg", description: "Sand dunes and rocky plateaus dominate the desert terrain, creating a striking landscape." }
  ];

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <div className="page-container">
      <div className="intro-text">
        <h1>Volcano and Desert</h1>
        <p>Volcanoes and deserts are striking features of the natural world, each with their own rugged beauty. Volcanoes, with their fiery eruptions, shape the land, creating new terrain while sometimes leaving behind a trail of destruction. In contrast, deserts are vast, arid expanses where life must adapt to extreme heat and limited water. Together, they represent the raw, unforgiving power of nature, yet also hold unique ecosystems that thrive in these harsh environments.</p>
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
