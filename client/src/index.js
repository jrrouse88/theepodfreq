import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

const App = () => {
  return(
    <div>
      <h1>This is The Home Page</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));