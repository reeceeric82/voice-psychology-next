import { Box, Stack, Heading, Button, Text, Center, OrderedList, ListItem } from '@chakra-ui/react'; 
import Link from "next/link";
import Layout from "@/components/Layout";
import DatenschutzPage from '@/components/Datenschutz';

const Datenschutz = () => {
	const title = "Voice | Datenschutz";
	return (
		<Layout title={title}>
			<Stack
				as={Box}
				textAlign={'center'}
				spacing={{ base: 10, md: 14 }}
				py={{ base: 10, md: 6 }}>
				<Heading>Datenschutzerklarung & Impressum</Heading>
				<hr />
				<Center textAlign={'left'}>
					<OrderedList>
						<ListItem fontSize={'lg'} p={1}>
							<Link href="#datenshutz-auf-einen-blick">
								Datenschutz auf einen Blick
							</Link>
						</ListItem>

						<ListItem fontSize={'lg'} p={1}>
							<Link href="#allgemeine-hinweise-und-pflichtinformation">
								Allegemeine Hinweise unf Pflichtinformation
							</Link>
						</ListItem>

						<ListItem fontSize={'lg'} p={1}>
							<Link href="#datenerfassung-auf-unserer-website">
								Datenerfassung auf unserer Website
							</Link>
						</ListItem>
					</OrderedList>
				</Center>
				</Stack>
				<DatenschutzPage />	</Layout>
	)
}

export default Datenschutz;
