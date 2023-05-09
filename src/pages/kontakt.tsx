import Nav from '@/components/Nav';
import {
	Box,
	Container,
	ChakraProvider,
	Heading,
	Link,
	Stack,
	StackDivider,
	Text,
} from '@chakra-ui/react';
import theme from './theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { EmailIcon } from '@chakra-ui/icons';
import Head from 'next/head';

const Kontact = () => {
	
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Voice | Kontact</title>
			</Head>
			<main>
				<Nav />
				<Container maxW={'3xl'} alignItems={'center'}>
					<Stack 
						as={Box}
						textAlign={'center'}
						spacing={{ base: 8, md: 14 }}
						py={{ base: 20, md: 6 }}>
						<Heading>Kontaktiere mich:</Heading>
						<Stack divider={<StackDivider />} spacing={4}> 
							<Text fontSize={"3xl"}>Email:</Text>
							<Text fontSize={'2xl'}>
								<EmailIcon mr={2}/>
								<Link href="mailto:carolin@voicepsychology.de">
									carolin@voicepsychology.de
								</Link>
							</Text>
						</Stack>
						<Stack divider={<StackDivider />} spacing={4}> 
							<Text fontSize={'3xl'}>Social Media:</Text>
							<Stack 
								as={Box}
								textAlign={'center'}
								spacing={{ base: 8, md: 14 }}>
								<Text fontSize={'2xl'}>
									<FontAwesomeIcon icon={faInstagram} className='fab instagram' />		
									<Link ml={2} href="https://www.instagram.com/voice.psychology/" target='_blank' rel='noopener noreferer'>
										voice.psychology
									</Link>
								</Text>
								<Text fontSize={'2xl'}>
									<FontAwesomeIcon icon={faTiktok} className='fab tiktok' />		
									<Link ml={2} href="https://www.tiktok.com/@voice.psychology" target='_blank' rel='noopener noreferer'>
										voice.psychology
									</Link>
								</Text>
								<Text fontSize={'2xl'}>
									<FontAwesomeIcon icon={faLinkedinIn} className='fab linkedin' />		
									<Link ml={2} href="https://www.linkedin.com/in/carolin-paul-msc-11a325220/" target='_blank' rel='noopener noreferer'>
										Carolin Paul MSc
									</Link>
								</Text>
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</main>
		</ChakraProvider>
	)
};

export default Kontact;