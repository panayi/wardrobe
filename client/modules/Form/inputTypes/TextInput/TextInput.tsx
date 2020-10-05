import React from 'react';
import styled from 'styled-components';

type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = styled.input<{ ref: any }>`
  padding: 0.8rem 0.5rem;
  font-size: 1.5rem;
`;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return <Input ref={ref} {...props} />;
  },
);

export default TextInput;
