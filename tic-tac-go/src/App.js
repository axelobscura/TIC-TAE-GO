import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import Board and Scoreboard views
import { Board } from './components/board';
import { Scoreboard } from './components/scoreboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path="/" component={Scoreboard}/>
            <Route path="/board" component={Board}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
