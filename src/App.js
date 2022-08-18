import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <SolarSystem />
        </section>
        <section />
      </div>
    );
  }
}

export default App;
