import { Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavLinks from '@/types/NavLinkType';
import { useRouter } from 'next/router';

const NavLink = ({name, link}: NavLinks) => {
	const router = useRouter();
	const currentPath = router.asPath;

	return(	
	<NextLink href={link}>
		<Link 
			rounded={'md'}
				textDecoration='none'
			_hover={{
				textDecoration: 'none',
			}}
			>
			<Text fontSize={'xl'} px={3}>
				{name}
			</Text>
		</Link>
	</NextLink>
)
}

export default NavLink;
