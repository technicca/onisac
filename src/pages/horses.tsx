import React from 'react';
import Player from '~/components/player';

const horses: React.FC = () => {
  return (
    <div>
      <h1>Horse Racing Gambling Game</h1>
      <Player initialMoney={1000} />
    </div>
  );
};

export default horses;
