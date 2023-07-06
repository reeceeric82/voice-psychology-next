import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	initialColorMode: 'light',
	useSystemColorMode: true,
	fonts: {
		heading: 'Arapey',
		body: 'Arapey'
	}
});

export default theme;

