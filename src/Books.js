import React, { useState, useEffect } from 'react';
import './Books.css';

const Books = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Generáljunk 20 üres kártyát
    const newCards = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      title: `Book ${index + 1}`,
      copy: `Description for Book ${index + 1}`,
    }));

    setCards(newCards);
  }, []); // A dependency array üres, tehát ez csak egyszer fut le, amikor a komponens mount-olódik

  return (
    <div>
      <main className="page-content">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="content">
              <h2 className="title">{card.title}</h2>
              <p className="copy">{card.copy}</p>
              <button className="btn">Book Info</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Books;
