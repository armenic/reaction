// Added by apply_react

import React from 'react';
import ReactDOM from 'react-dom';
// Added by apply_react

import 'shiny';

Shiny.addCustomMessageHandler('ask-alert', (msg) => {
  let response = prompt(msg);
  Shiny.setInputValue('askResponse', response);
});


const title = 'Shiny powered by React!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
