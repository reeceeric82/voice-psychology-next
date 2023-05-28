import { useMediaQuery } from '@chakra-ui/react';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome'

const HomePage = () => {
	const [isMobile] = useMediaQuery('(max-width: 700px)');
	return (
		<>
			{isMobile ? <MobileHome /> : <DesktopHome />}
		</>
	)
};

export default HomePage;

