import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { ALL_DATA } from '../../graphql/allData';
import Text from '../../components/Text';
import ErrorMessage from '../../components/ErrorMessage';
import Collection from './Collection/Collection';

const CollectionTitle = styled(Text)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  margin: 3rem 0 1rem;
  border-bottom: 4px solid ${(props) => props.theme.colors.secondary};

  > a {
    color: inherit;
    text-decoration: none;
  }
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
      <CollectionTitle variant="largeHeading">
        Shirts
        <Link href="/new/shirt">+</Link>
      </CollectionTitle>
      <Collection items={data.allShirts} getSize={getShirtSize} />
      <CollectionTitle variant="largeHeading">
        Pants
        <Link href="/new/pant">+</Link>
      </CollectionTitle>
      <Collection items={data.allPants} getSize={getPantSize} />
    </div>
  );
};

export default List;
