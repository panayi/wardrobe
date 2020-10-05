import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import config from '../../config';
import theme from '../../styles/theme';

type LayoutProps = {
  children: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

const Root = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 3rem auto 3rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  > img {
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
        <Head>
          <title>{config.SITE_TITLE}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyle />
        <Header>
          <img src="/images/logo.png" alt={config.SITE_TITLE} />
        </Header>
        <main>{children}</main>
      </Root>
    </ThemeProvider>
  );
};

export default Layout;
