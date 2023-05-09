import { ReactNode } from "react";
import Head from 'next/head';
import Nav from "./Nav";
import {
	ChakraProvider,
	Container,
} from '@chakra-ui/react';
import theme from "./theme";
import BackToTopButton from "./BackToTop";

type LayoutProps = {
	children: ReactNode
	title: String
};

const Layout = ({ children, title }: LayoutProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Voice Psychology and Gesangtherapie website" />
				<link rel="icon" href="favicon.ico" />
			</Head>
			<main>
				<Nav />
				<Container maxW={'6xl'}>
					{children}
				</Container>
				<BackToTopButton />
			</main>
		</ChakraProvider>
		);
}

export default Layout;
