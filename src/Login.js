import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = async (e) => {
    e.preventDefault(); // Ne küldjön el automatikusan a form a beépített működés miatt

    try {
      // POST kérés küldése a bejelentkezési adatokkal
      const loginResponse = await axios.post('URL_BEJELENTKEZESI_API', {
        email,
        password,
      });

      // Ellenőrizze, hogy a bejelentkezés sikeres volt-e
      if (loginResponse.status === 200) {
        setLoggedIn(true);
      } else {
        console.error('Bejelentkezés sikertelen');
      }
    } catch (error) {
      console.error('Hiba történt:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // GET kérés a felhasználók listájának lekérdezésére
      axios.get('URL_FELHASZNALOK_LISTAJA_API')
        .then((response) => {
          setUserList(response.data);
        })
        .catch((error) => {
          console.error('Felhasználók lekérése sikertelen', error);
        });
    }
  }, [isLoggedIn]);

  return (
    <div className="login-root">
      <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>LibraryLogin</h1>
        </div>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Sign in to your account</span>
              <form id="stripe-login" onSubmit={login}>
                <div className="field padding-bottom--24">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field padding-bottom--24">
                  <div className="grid--50-50">
                    <label htmlFor="password">Password</label>
                    <div className="reset-pass">
                      <a href="/">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" /> Stay signed in for a week
                  </label>
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue" />
                </div>
              </form>
            </div>
          </div>
          <div className="footer-linkk padding-top--24">
            <span>Don't have an account? <a href="/">Sign up</a></span>
          </div>
        </div>
      </div>

      {isLoggedIn && (
        <div>
          <h2>Felhasználók listája</h2>
          {userList.map((user) => (
            <div key={user.id}>
              <strong>{user.name}</strong>
              <br />
              Email: {user.email}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Login;
