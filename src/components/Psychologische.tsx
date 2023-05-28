import { useMediaQuery } from '@chakra-ui/react';
import MobilePsychologische from './MobilePsychologische';
import DesktopPsychologische from './DesktopPsychologische';

const PsychologischePage = () => {
	const [isMobile] = useMediaQuery('(max-width: 700px)');
	return (
		<>
			{isMobile ? <MobilePsychologische /> : <DesktopPsychologische />}
		</>
	)
};

export default PsychologischePage;