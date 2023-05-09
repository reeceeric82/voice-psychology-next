import { Flex, Select } from '@chakra-ui/react';

const LanguageSelect = () => {
	return (
			<Flex alignContent={'row'} gap={4}>
				<Select>
					<option value={'de'}>Deutsch</option>
					<option value={'en'}>English</option>
				</Select>
			</Flex>
)
}

export default LanguageSelect;
