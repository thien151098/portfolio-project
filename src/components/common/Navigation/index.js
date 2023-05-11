import "./styles.scss";
import { useRef } from 'react';


function Navigation() {
     // This ref will be connected to the overlay div
  const overlayRef = useRef();

  // This function is called when the "Start Searching" button gets clicked
  const openSearch = () => {
    overlayRef.current.style.height = '100%';
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    overlayRef.current.style.height = '0%';
  };

  return (
    <>
      {/* Main content */}
      <div className='main'>
        <button onClick={openSearch} className='open-button'>&#9776;
          
        </button>
      </div>

      {/* The search overlay */}
      <div ref={overlayRef} className='overlay'>
        <button className='close-button' onClick={closeSearch}>
          &times;
        </button>
        <div className='overlay-content'>
        <a href="#action1">Home</a> 
       <a href="#action2">About</a>          
       <a href="#action2">Portfolio</a>        
       <a href="#action2">Education</a>        
       <a href="#action2">Skills</a>            
       <a href="#action2">Experience</a>     
       <a href="#action2">Blog</a>    
       <a href="#action2">Cover Letter</a>
       <a href="#action2">Testimonial</a>
       <a href="#action2">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
