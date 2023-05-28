import { useMediaQuery } from '@chakra-ui/react';
import MobileUber from "./MobileUber";
import DesktopUber from "./DesktopUber";

const UberPage = () => {
	const [isMobile] = useMediaQuery('(max-width: 700px)');

	return (
		<>
			{isMobile ? <MobileUber /> : <DesktopUber />}
		</>
	)
};

export default UberPage
