import { useMediaQuery } from '@chakra-ui/react';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome'

const HomePage = () => {
	const [isMobile] = useMediaQuery('(min-width: 700px)');
	return (
		<>
			{isMobile ? <DesktopHome /> : <MobileHome />}
		</>
	)
};

export default HomePage;

