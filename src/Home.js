import React from 'react';
import './Home.css'
import WelcomeSection from './WelcomeSection';
import BookGallery from './BookGallery';


const Home = () => {
  return (
      <div>
          <div>
              <div>
                <WelcomeSection />  
      

              </div>
            <BookGallery />
          </div>
        
        
      </div>
    
  );
};

export default Home;
