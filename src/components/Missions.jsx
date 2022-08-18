import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((elemento) => (<MissionCard
          key={ elemento.name }
          name={ elemento.name }
          year={ elemento.year }
          country={ elemento.country }
          destination={ elemento.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
