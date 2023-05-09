import { 
	Box,
	Button,
	Center,
	ChakraProvider,
	Container,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import Nav from "../components/Nav";
import theme from "./theme";
import Link from "next/link";

const FourOhFour = () => {
	return (
		<ChakraProvider theme={theme}>
			<main>
				<Nav />
				<Container maxW={'3xl'}>
					<Stack 
						as={Box}
						textAlign={'center'}
						spacing={{ base: 8, md: 14 }}
						py={{ base: 20, md: 6 }}>
						<Heading>404</Heading>
						<Text fontSize={'xl'}>Seite nicht gefunden</Text>
						<Center>
						<Button>
								<Link href="/">Home</Link>
							</Button>
						</Center>
					</Stack>
				</Container>
			</main>
		</ChakraProvider>
	)
}

export default FourOhFour;

