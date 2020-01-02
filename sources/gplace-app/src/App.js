import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from 'app/pages/Home';
import Gallery from 'app/pages/Gallery';
import configuration from 'app/configuration';
import BaseLayout from 'app/components/BaseLayout';

const client = new ApolloClient({
  uri: configuration.crafterGraphQlURL,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <BaseLayout path="/">
          <Home path="/" />
          <Gallery path="/gallery" />
        </BaseLayout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
