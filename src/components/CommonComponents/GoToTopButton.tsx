import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;
      setIsVisible(scrolledPercentage > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="group fixed bottom-5 right-5 p-3 rounded-full bg-black text-white shadow-lg
         hover:bg-slate-500 hover:scale-90 transition-colors smoothingAnimation  "
      >
        <ArrowUp className="w-6 h-6 group-hover:translate-y-[-5px] group-hover:animate-bounce  " />
      </button>
    )
  );
};

export default GoToTopButton;
