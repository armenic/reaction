import React from 'react';
import {createRoot } from 'react-dom/client';
import 'shiny';

Shiny.addCustomMessageHandler('ask-alert', (msg) => {
  let response = prompt(msg);
  Shiny.setInputValue('askResponse', response);
});

const title = 'Shiny powered by React!';

createRoot(
  document.getElementById('app')
).render(
  <div>{title}</div>
);
