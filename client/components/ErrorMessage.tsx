import React from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  message: string;
};

const Root = styled.div`
  padding: 1.5em;
  font-size: 14px;
  color: white;
  background-color: red;
`;

const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({
  message,
}) => {
  return <Root>{message}</Root>;
};

export default ErrorMessage;
