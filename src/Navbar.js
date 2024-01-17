import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // A komponens mount-olása után keresd meg a listaelemet
    const psychologyTheoriesList = document.getElementById('psychology_theories_list');

    // Most már biztosíthatod, hogy az elem rendelkezésre áll
    if (psychologyTheoriesList) {
      // Itt végezheted el az esetleges további beállításokat vagy műveleteket
    }
  }, []); // Az üres függőséglista azt jelzi, hogy az useEffect csak a mount-olás után fussa le

  const handleSearch = () => {
    console.log(`Search term: ${searchTerm}`);

    // Hozzáadja a keresési előzményt a listához
    setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);

    // Ajax kérés küldése vagy további feldolgozás
    const psychologyTheoriesList = document.getElementById('psychology_theories_list');
    if (psychologyTheoriesList && psychologyTheoriesList.options.namedItem(searchTerm)) {
      //send ajax request
      alert(searchTerm);
    }

    // Törli a keresési mező tartalmát
    setSearchTerm('');
  };

  const handleKeyPress = (e) => {
    // Ha a lenyomott billentyű az "Enter", akkor kezeljük le a keresést
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const logoPath = 'logo.png';
  return (
    <nav className="navbar">
     <div className="navbar-left">
     <img src={logoPath} height={50} alt=''/>
    </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <div className="navbar-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search books..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              list="psychology_theories_list"
            />
            {/* Keresési előzmények megjelenítése */}
            {searchHistory.length > 0 && (
              <datalist id="psychology_theories_list">
                {searchHistory.map((item, index) => (
                  <option key={index} value={item} />
                ))}
              </datalist>
            )}
          </div>
          <button className="login-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
