import {
	Flex,
	Link,
	Text,
  Center,
  Spacer,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import NavLinkType from '@/types/NavLinkType';

const navLinks: NavLinkType[] = [
	{"name": "Home", "link": "/"},
	{"name": "Über mich", "link": "/uber"},
	{"name": "Psychologische", "link": "/psychologische"},
	{"name": "Preise", "link": "/preise"},
	{"name": "Datenschutz", "link": "/datenschutz"},
	{"name": "Kontakt", "link": "kontakt"}
];

const Nav = () => {
	const [isMobile] = useMediaQuery('(min-width: 700px)');

	return (
		<Flex 
			minWidth={'max-content'}
			alignItems={'center'} 
			gap={2} 
			p={4}
			bg={useColorModeValue('orange.100', 'teal.700')}
			>
			<Center>
				<Text as='b' fontFamily='heading'>
					<Link 
						href="/" 
						fontSize={'xl'} 
						textDecoration={'none'}
						_hover={{
							textDecoration: 'none'
						}}
					>Voice</Link>
					</Text>
			</Center>
			<Spacer />
			{isMobile ? <DesktopNav navLinks={navLinks}/> : <MobileNav navLinks={navLinks}/>}
		</Flex>
	)
}

export default Nav;
