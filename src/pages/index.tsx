// import { Inter } from 'next/font/google';
import { Box, Stack, Heading, Button, Text, Center, Link, StackDivider, UnorderedList, List, ListItem } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import Head from 'next/head';


export default function Home() {
	const title = "Voice | Home";
	return 	(	
		<Layout title={title}>
			<Stack 
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 6 }}>
				<Heading>Willkommen bei Voice</Heading>
				<Text fontSize={'xl'}>Psychologische Beratunf & Gesangtherapie</Text>
			</Stack>
			<Center>
				<Button>Mehr erfahren</Button>
			</Center>

		</Layout>
	)
}
