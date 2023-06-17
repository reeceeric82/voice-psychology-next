import {
	Flex,
	Link,
	Text,
  Center,
  Spacer,
  Button,
	ButtonGroup,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Icon,
	List,
	ListItem,
	useColorModeValue,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';

import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons';
import MobileNavProps from '@/types/MobileNavProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import NavLinkType from '@/types/NavLinkType';
import NavLink from './NavLink';
import DesktopNavProps from '@/types/DesktopNavProps';
import ToggleDarkMode from './ToggleDarkMode';


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


const DesktopNav = ({navLinks}: DesktopNavProps) => {
	return (	
	<>
			{navLinks.map((link) => (
				<NavLink key={link.name.toLowerCase()} name={link.name} link={link.link} />
			))}
			<ToggleDarkMode />
			</>
	)
}

const MobileNav = ({navLinks}: MobileNavProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button 
				onClick={onOpen}
				variant='ghost'
				colorScheme={useColorModeValue('orange.50', 'teal.700')}>
				<HamburgerIcon />
			</Button>
			{/*Drawer Menu */}
			<Drawer 
				isOpen={isOpen} 
				onClose={onClose}
				>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						{/* Dynamic links */}
						<List>
							{navLinks.map((link) => (
								<ListItem key={link.name.toLowerCase()} pt={4} pb={4}> 
									<NavLink name={link.name} link={link.link}/>
								</ListItem>
							))}
							{/* Dynamic links end */}
							<ListItem>
								<ToggleDarkMode />
							</ListItem>
 							<ListItem pt={2}>
							</ListItem>
						</List>
					</DrawerBody>
					<DrawerFooter>
						<ButtonGroup gap={4}>
							<Button>
								<Link href="https://www.instagram.com/voice.psychology/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faInstagram} className='fab instagram' />		
								</Link>
							</Button>
							<Button>
								<Link href="https://www.tiktok.com/@voice.psychology" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faTiktok} className='fab tiktok' />		
								</Link>
							</Button>
							<Button>
								<Link href="https://www.linkedin.com/in/carolin-paul-msc-11a325220/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faLinkedinIn} className='fab linkedin' />		
								</Link>
							</Button>
							<Button>
								<Link href="mailto:carolin@voicepsychology.de" target="_blank" rel="noopener noreferrer">
									<Icon as={EmailIcon} />
								</Link>
							</Button>
						</ButtonGroup>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>	
	)
}


export default Nav;
