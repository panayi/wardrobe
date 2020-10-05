import React from 'react';
import styled from 'styled-components';
import Item from './Item/Item';
import { ListType, ItemType } from '../typings';

type CollectionProps = {
  items: ListType;
  getSize: (item: ItemType) => React.ReactNode;
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 1rem;
`;

const Collection: React.FunctionComponent<CollectionProps> = (props) => {
  const { items, getSize } = props;
  console.log(items);

  return (
    <Root>
      {items.map((item) => (
        <Item key={item.id} {...item} size={getSize(item)} />
      ))}
    </Root>
  );
};

export default Collection;
