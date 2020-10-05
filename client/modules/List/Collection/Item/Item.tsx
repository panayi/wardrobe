import React from 'react';
import styled from 'styled-components';
import Text from '../../../../components/Text';
import { ItemType } from '../../typings';

type ItemProps = {
  item: ItemType;
  size: string;
};

const Box = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme.colors.border.light};
  border-radius: 4px;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Item: React.FunctionComponent<ItemProps> = (props) => {
  const { item, size } = props;

  return (
    <div>
      <Box color={item.color} />
      <Info>
        <Text variant="heading">{item.name}</Text>
        <Text>{size}</Text>
      </Info>
    </div>
  );
};

export default Item;
