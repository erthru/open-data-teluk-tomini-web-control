import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

type Props = {
    type: "white" | "blue";
};

const CLogo = (props: Props) => (
    <Flex alignItems="center">
        <Image
            src={`images/${props.type === "white" ? "logo-white.png" : "logo-blue.png"}`}
            w={{ base: "42px", md: "52px" }}
            h={{ base: "42px", md: "52px" }}
        />

        <Box w="full" color={props.type === "white" ? "white" : "blue.500"} ml="8px">
            <Text fontWeight="extrabold" fontSize={{ base: "10px", md: "12px" }}>
                Open Data
            </Text>

            <Text fontWeight="semibold" fontSize={{ base: "17px", md: "20px" }} mt={{ base: "-3px", md: "-5px" }}>
                Teluk Tomini
            </Text>
        </Box>
    </Flex>
);

export default CLogo;
