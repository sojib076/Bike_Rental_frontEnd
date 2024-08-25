import {  X } from 'lucide-react';
import React, { useEffect, useState } from 'react';


const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Clear the local storage key on reload
    localStorage.removeItem('popupShown');

    const hasPopupBeenShown = localStorage.getItem('popupShown');

    if (!hasPopupBeenShown) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const scrolledPercentage = ((scrollPosition + windowHeight) / documentHeight) * 100;

        if (scrolledPercentage >= 50) {
          setShouldRender(true);
          setIsVisible(true);
          localStorage.setItem('popupShown', 'true');
          window.removeEventListener('scroll', handleScroll); // Remove the event listener once the popup is shown
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div className={`z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
      <div className="bg-[#FFF5EE] p-6 rounded shadow-lg lg:w-[500px] w-[90%] lg:h-[300px] flex flex-col justify-between relative">
        
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        
        <div className='text-center py-10 lg:py-0'> 
          <h1 className='text-4xl mb-5 font-[Oswald] font-extrabold lg:my-10 animate-bounce  '>Discount !! </h1>
          <p className='  font-[Oswald] text-xl  '>
            New Users Get 10% Off on their first purchase. Use code <span className='font-extrabold text-red-500'>NEW10</span>
          </p>
        </div>

        
      </div>
    </div>

  );
};

export default Popup;
