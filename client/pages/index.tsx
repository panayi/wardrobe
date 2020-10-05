import React from 'react';
import { GetStaticProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { ALL_DATA } from '../graphql/allData';
import List from '../modules/List/List';
import Layout from '../modules/Layout/Layout';

const Home: React.FunctionComponent<unknown> = () => {
  return (
    <Layout home>
      <List />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;
