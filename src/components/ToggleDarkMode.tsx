import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleDarkMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	
	return (
		<Button onClick={toggleColorMode} px={4} variant={'ghost'}>
			{colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
		</Button>
	)
}

export default ToggleDarkMode;
