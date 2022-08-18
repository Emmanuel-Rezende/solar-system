import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <SolarSystem />
        </section>
        <section>
          <Missions />
        </section>
      </div>
    );
  }
}

export default App;
