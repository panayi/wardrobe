import React from 'react';
import Link from 'next/link';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import config from '../../config';
import theme from '../../styles/theme';

type LayoutProps = {
  children: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props: any) => props.theme.fontFamily};
  }
`;

const Root = styled.div`
  max-width: 50rem;
  padding: 0 1.5rem;
  margin: 3rem auto 3rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  > a > img {
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
  }
`;

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <Header>
          <Link href="/" passHref>
            <a>
              <img src="/images/logo.png" alt={config.SITE_TITLE} />
            </a>
          </Link>
        </Header>
        <main>{children}</main>
      </Root>
    </ThemeProvider>
  );
};

export default Layout;
