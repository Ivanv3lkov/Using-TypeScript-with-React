import React from 'react';
import Recorder from '../Recorder';
import Calendar from '../Calendar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  );
};

export default App;