import { Box, Stack, Heading, Button, Text, Center, Link } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import HomePage from '@/components/Home';

export default function Home() {
	const title = "Voice | Home";

	return 	(	
		<Layout title={title}>
			<Stack 
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 10, md: 6 }}>
				<Heading>Willkommen bei Voice</Heading>
				<Text fontSize={'xl'}>Psychologische Beratunf & Gesangtherapie</Text>
			</Stack>
			<Center 
				pb={20}>
				<Button>
					<Link href="#psychologische-beratung">Mehr erfahren</Link>
				</Button>
			</Center>
			<HomePage />
		</Layout>
	)
}
