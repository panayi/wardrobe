import React from 'react';
import styled from 'styled-components';

type Variant = 'primary' | 'default';
type Size = 'regular' | 'large';

type ButtonProps = {
  as?: React.ElementType;
  variant?: Variant;
  size?: Size;
  type?: string;
  className?: string;
  children: React.ReactNode;
  href?: string;
};

const StyledButton = styled.button<{ variant: Variant; size: Size }>`
  border-radius: 6px;
  box-shadow: none;
  text-decoration: none;
  border: 1px solid
    ${(props) => props.theme.colors.button[props.variant].border};
  padding: ${(props) => props.theme.button[props.size].padding};
  font-size: ${(props) => props.theme.button[props.size].fontSize};
  color: ${(props) => props.theme.colors.button[props.variant].text};
  background-color: ${(props) => props.theme.colors.button[props.variant].bg};
`;

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    as,
    variant = 'default',
    size = 'regular',
    type = 'button',
    className,
    children,
    href,
  } = props;

  return (
    <StyledButton
      as={as}
      type={type}
      href={href}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
