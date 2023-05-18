import { Text } from "@chakra-ui/react"
import ContentBlockType from "@/types/ContentBlockType"

const ContentBlock = ({text}: ContentBlockType) => {
	return (
			<Text fontSize={'xl'}>{text}</Text>
)
}

export default ContentBlock

