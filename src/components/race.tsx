import React, { useState, useEffect } from 'react';
import Horse from './horse';

const horses = [
  {
    name: 'Horse 1',
    img1: '/images/horse1.jpg',
    img2: '/images/horse2.jpg',
    img3: '/images/horse3.jpg',
  },
  // Add more horses here
];

const Race: React.FC = () => {
  const [lap, setLap] = useState(1);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLap((prevLap) => prevLap + 1);
    }, 15000); // Increment lap every 15 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (lap > 5) {
      // Race ends after 5 laps
      const randomIndex = Math.floor(Math.random() * horses.length);
      setWinner(horses[randomIndex].name);
    }
  }, [lap]);

  return (
    <div>
      <h2>Race</h2>
      <p>Lap: {lap}</p>
      {horses.map((horse) => (
        <Horse
          key={horse.name}
          name={horse.name}
          img1={horse.img1}
          img2={horse.img2}
          img3={horse.img3}
        />
      ))}
      {winner && <p>The winner is: {winner}</p>}
    </div>
  );
};

export default Race;
