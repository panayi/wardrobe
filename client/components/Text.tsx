import React from 'react';
import styled from 'styled-components';

type TextProps = {
  as?: React.ElementType;
  variant?: 'body' | 'heading' | 'largeHeading';
  className?: string;
  children: React.ReactNode;
};

const Root = styled.span`
  font-size: ${(props) => props.theme.fontSizes[props.variant]};
  color: ${(props) => props.theme.colors.text[props.variant]};
`;

const Text: React.FunctionComponent<TextProps> = (props) => {
  const { as, variant = 'body', className, children } = props;

  return (
    <Root as={as} className={className} variant={variant}>
      {children}
    </Root>
  );
};

export default Text;
