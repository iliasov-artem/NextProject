import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Center } from '../components/Center';
import { GlobalStyle, theme } from '../shared/theme';

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<Head>
				<title>Some title</title>
			</Head>
			<Header />
			<main className="main">
				<Center>
					<Component {...pageProps} />
				</Center>
			</main>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
