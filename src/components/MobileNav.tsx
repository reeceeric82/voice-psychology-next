import {
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
	Link,
	List,
	ListItem,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';
import ToggleDarkMode from './ToggleDarkMode';
import MobileNavProps from '@/types/MobileNavProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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

export default MobileNav;
