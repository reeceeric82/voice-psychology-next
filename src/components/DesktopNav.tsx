import NavLink from './NavLink';
import DesktopNavProps from '@/types/DesktopNavProps';
import ToggleDarkMode from './ToggleDarkMode';

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

export default DesktopNav;
