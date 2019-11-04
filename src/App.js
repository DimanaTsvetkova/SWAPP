import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
// import {BrowserRouter} from 'react-router-dom';

import client from "./client";
import Home from './components/Home';

import './App.scss';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <BrowserRouter> */}
        <Home />
      {/* </BrowserRouter> */}
  </ApolloProvider>
  )
}

export default App;
