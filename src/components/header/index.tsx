import { Avatar } from "@chakra-ui/avatar";
import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Auth } from "../../data/api/repositories/auth-repository";

const CHeader = () => {
    const [auth, setAuth] = useState<Auth>({});

    return (
        <Box bg="blue.500" w="full" color="white">
            <Container maxW="1200px" px="16px" py="12px">
                <Flex w="full" h="full" alignItems="center">
                    <Box display={{ base: "block", lg: "none" }}>
                        <FontAwesomeIcon icon={faBars} cursor="pointer" style={{ fontSize: "20px" }} />
                    </Box>

                    <Text ml={{ base: "16px", lg: "0" }} fontWeight="bold" fontSize="17px">
                        Data Kontrol
                    </Text>

                    <Avatar ml="auto" name={auth.username} size="sm" />
                </Flex>
            </Container>
        </Box>
    );
};

export default CHeader;
