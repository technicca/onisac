import React, { useState } from 'react';

interface PlayerProps {
  initialMoney: number;
}

const Player: React.FC<PlayerProps> = ({ initialMoney }) => {
  const [money, setMoney] = useState(initialMoney);
  const [betAmount, setBetAmount] = useState(0);
  const [chosenHorse, setChosenHorse] = useState('');

  const handleBetAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(event.target.value);
    setBetAmount(amount);
  };

  const handleHorseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const horse = event.target.value;
    setChosenHorse(horse);
  };
  const handleLapsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const laps = parseInt(event.target.value);
    setLaps(laps);
  };
  
  const handlePlaceBet = () => {
    // Implement the logic for placing the bet
    // Subtract the bet amount from the player's money
    // Update the player's chosen horse and bet amount
    // You can also add validation here to check if the bet amount is valid

    setMoney(money - betAmount);
    setBetAmount(0);
    setChosenHorse('');
  };

  return (
    <div>
      <h2>Player</h2>
      <p>Money: {money}</p>
      <div>
        <label htmlFor="betAmount">Bet Amount:</label>
        <input
          type="number"
          id="betAmount"
          value={betAmount}
          onChange={handleBetAmountChange}
        />
      </div>
      <div>
        <label htmlFor="chosenHorse">Choose a Horse:</label>
        <select id="chosenHorse" value={chosenHorse} onChange={handleHorseChange}>
          <option value="">Select a horse</option>
          <option value="horse1">Horse 1</option>
          <option value="horse2">Horse 2</option>
          <option value="horse3">Horse 3</option>
          <option value="horse4">Horse 4</option>
          <option value="horse5">Horse 5</option>
        </select>
      </div>
      <button onClick={handlePlaceBet}>Place Bet</button>
    </div>
  );
};

export default Player;
