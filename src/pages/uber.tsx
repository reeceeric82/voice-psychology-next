import Layout from "@/components/Layout";
import UberPage from "@/components/Uber";
import { 
	Box, 
	Heading,
	Link, 
	Stack, 
	Text
} from "@chakra-ui/react";

const Uber = () => {
	const title = "Voice | Uber";
	return (
		<Layout title={title}>
			<Stack 
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 10, md: 6 }}>
				<Heading>&#220;ber mich</Heading>
			</Stack>
			<UberPage />
		</Layout>
	)
};

export default Uber;
