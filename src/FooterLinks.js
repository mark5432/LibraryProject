import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch, faYoutube} from '@fortawesome/free-brands-svg-icons';

const FooterLinks = () => {
  const links = [
    { icon: faFacebook, url: 'https://www.facebook.com/kandomiskolc' },
    { icon: faTwitch, url: 'https://www.twitch.tv/kkszki' },
    { icon: faYoutube, url: 'https://www.youtube.com/user/kkszki/videos' },
  
  ];

  return (
    <div className="footer-icons">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
