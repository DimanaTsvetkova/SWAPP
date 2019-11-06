import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter} from 'react-router-dom';

import client from './client';

import './App.scss';
import Home from './components/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
  </ApolloProvider>
  )
}

export default App;
