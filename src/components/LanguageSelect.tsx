import { Flex, Select } from '@chakra-ui/react';
import i18n from '../i18n/';
import { useState } from 'react';

const LanguageSelect = () => {
	
	const [selectLanguage, setSelectLanguage] = useState(i18n.language);

	const chooseLanguage = (evnt: any) => {
		evnt.preventDefault();
		i18n.changeLanguage(evnt.target.value);
		setSelectLanguage(evnt.target.value);
		}

	return (
		<Flex alignContent={'row'} gap={4}>
			<Select defaultValue={selectLanguage} onChange={chooseLanguage}>
				<option value={'de'}>Deutsch</option>
				<option value={'en'}>Englisch</option>
			</Select>
		</Flex>
		);
};

export default LanguageSelect;
