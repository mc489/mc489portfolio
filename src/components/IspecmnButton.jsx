import React from 'react';
import ispecmn from '../assets/img/ispecmn.png';

const IspecmnButton = () => {
  return (
    <button
      onClick={() => window.open('https://www.facebook.com/profile.php?id=61577425593666','_blank')}

      className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full shadow-xl  hover:scale-105 transition-all duration-300 group"
      aria-label="Floating action button"
    >
      <img
        src={ispecmn}
        alt="Action"
        className="w-14 h-14 rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
    </button>
  );
};

export default IspecmnButton;