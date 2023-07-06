import Head from 'next/head';
import Nav from "./Nav";
import {
	ChakraProvider,
	Container,
} from '@chakra-ui/react';
import theme from "./theme";
import BackToTopButton from "./BackToTop";
import LayoutProps from '@/types/LayoutProps';
import Footer from './Footer';


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
				<Container maxW={'6xl'} minH={'100vh'}>
					{children}
				</Container>
				<Footer />
				<BackToTopButton />
			</main>
		</ChakraProvider>
		);
}

export default Layout;
