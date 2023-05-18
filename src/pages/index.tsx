// import { Inter } from 'next/font/google';
import { Box, Stack, Heading, Button, Text, Center, Link, Image, StackDivider, UnorderedList, List, ListItem, HStack, useMediaQuery } from '@chakra-ui/react';
import Layout from '@/components/Layout';


export default function Home() {
	const [isMobile] = useMediaQuery('(min-width: 700px)');
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
				<Button>Mehr erfahren</Button>
			</Center>
		</Layout>
	)
}
