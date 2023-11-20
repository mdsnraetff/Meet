import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import Event from './components/Event';
import './App.css';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberOfEvents />
    </div>
  );
}

export default App;
