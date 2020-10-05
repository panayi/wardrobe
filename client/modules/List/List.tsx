import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { ALL_DATA } from '../../graphql/allData';
import Text from '../../components/Text';
import ErrorMessage from '../../components/ErrorMessage';
import Collection from './Collection/Collection';

const CollectionTitle = styled.div`
  padding-bottom: 0.5rem;
  margin: 3rem 0 1rem;
  border-bottom: 4px solid ${(props) => props.theme.colors.secondary};
`;

const List: React.FunctionComponent<unknown> = () => {
  const { loading, error, data } = useQuery(ALL_DATA);

  const getShirtSize = React.useCallback((item) => {
    return item.size;
  }, []);

  const getPantSize = React.useCallback((item) => {
    console.log(item);
    return `${item.width}/${item.length} (W/L)`;
  }, []);

  if (error) {
    return <ErrorMessage message="Error loading posts." />;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Text as={CollectionTitle} variant="largeHeading">
        Shirts
      </Text>
      <Collection items={data.allShirts} getSize={getShirtSize} />
      <Text as={CollectionTitle} variant="largeHeading">
        Pants
      </Text>
      <Collection items={data.allPants} getSize={getPantSize} />
    </div>
  );
};

export default List;
