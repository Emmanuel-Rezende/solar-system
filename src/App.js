import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <SolarSystem>
            {' '}
            <Title headline="Planetas" />
          </SolarSystem>
        </section>

      </div>
    );
  }
}

export default App;
