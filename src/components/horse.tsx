import React, { useState, useEffect } from 'react';

interface HorseProps {
  name: string;
  img1: string;
  img2: string;
  img3: string;
}

const Horse: React.FC<HorseProps> = ({ name, img1, img2, img3 }) => {
  const [currentImg, setCurrentImg] = useState(img1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select the next image
      const randomImage = Math.floor(Math.random() * 3) + 1;
      switch (randomImage) {
        case 1:
          setCurrentImg(img1);
          break;
        case 2:
          setCurrentImg(img2);
          break;
        case 3:
          setCurrentImg(img3);
          break;
        default:
          setCurrentImg(img1);
          break;
      }
    }, 300); // Change image every 300 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [img1, img2, img3]);

  return (
    <div>
      <h3>{name}</h3>
      <img src={currentImg} alt={name} />
    </div>
  );
};

export default Horse;
