import { Box, Stack, Heading, Button, Text, Center, Link } from '@chakra-ui/react';
import Layout from '@/components/Layout';


export default function Preise() {
	const title = "Voice | Preise";

	return 	(	
		<Layout title={title}>
			<Stack 
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 10, md: 6 }}>
				<Heading>Priese</Heading>
			</Stack>
			<Stack>
				
			</Stack>
		</Layout>
	)
}
