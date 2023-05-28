import Layout from "@/components/Layout";
import PsychologischePage from "@/components/Psychologische";
import {
	Box,
	Button,
	Center,
	Heading,
	Link,
	Stack,
	Text
} from '@chakra-ui/react';



const Psychologische = () => {
	return (
		<Layout title="Voice | Psychologische">
			<Stack
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 10, md: 6 }}>
				<Heading>Psychologische Beratung</Heading>
				<Text fontSize={'xl'}>Alles was du über psychologische Beratung wissen musst</Text>

				<hr />

				<PsychologischePage />
				
				</Stack>
		</Layout>
	)
};


export default Psychologische;
