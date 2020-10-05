import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import 'normalize.css';
import { useApollo } from '../lib/apolloClient';

const App: React.FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
