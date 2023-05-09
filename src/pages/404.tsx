import { 
	Box,
	Button,
	Center,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Layout from "@/components/Layout";

const FourOhFour = () => {
	return (
		<Layout title="404">
					<Stack 
						as={Box}
						textAlign={'center'}
						spacing={{ base: 8, md: 5 }}
						py={{ base: 20, md: 6 }}>
						<Heading as={'u'} fontSize={'5xl'}>404</Heading>
						<Text fontSize={'xl'}>Seite nicht gefunden</Text>
						<Center>
						<Button>
								<Link href="/">Home</Link>
							</Button>
						</Center>
					</Stack>
			</Layout>
	)
}

export default FourOhFour;

