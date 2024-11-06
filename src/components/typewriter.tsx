import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-7xl mb-4">Hello,</h1>
      <h1 className="text-7xl">
        <Typewriter
          words ={['I am Dua Habib']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
    </div>
  );
};

export default TypewriterEffect;
