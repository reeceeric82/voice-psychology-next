import Layout from "@/components/Layout";
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
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 6 }}
				>
				<Heading>Uber Mich</Heading>
				<Text fontSize={'xl'}>
					Hello
				</Text>
			</Stack>
		</Layout>
	)
};

export default Uber;
