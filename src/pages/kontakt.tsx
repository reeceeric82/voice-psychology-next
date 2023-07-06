import KontaktPage from "@/components/Kontakt";
import Layout from "@/components/Layout";
import {
	Box,
	Heading,
	Stack,
} from "@chakra-ui/react";


const Kontakt = () => {
  const title = "Voice | Kontakt";
  return (
      <Layout title={title}>
		<Stack
		as={Box}
		textAlign={'center'}
		spacing={{ base: 8, md: 14 }}
		py={{ base: 10, md: 6 }}>
			<Heading>Kontaktiere mich:</Heading>
			<hr />
		</Stack>
        <KontaktPage />
      </Layout>
  );
};

export default Kontakt;
