import { Img } from "@chakra-ui/image";
import { Box, Flex, Text, Link } from "@chakra-ui/layout";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Auth } from "../../data/api/repositories/auth-repository";
import * as authRepo from "../../data/api/repositories/auth-repository";
import { Link as ReactLink } from "react-router-dom";

const CSidebar = () => {
    const [auth, setAuth] = useState<Auth>({});

    useEffect(() => {
        getAuth();
    }, []);

    const getAuth = async () => {
        const response = await authRepo.me();
        setAuth(response.auth);
    };

    return (
        <Box w="300px" bg="white" rounded="md" px="16px" pt="16px" pb="28px">
            <Flex w="full">
                <Img src="/images/logo-blue.png" w="80px" mx="auto" />
            </Flex>

            <Link as={ReactLink} to="/" _hover={{ textDecor: "none" }} _focus={{ textDecor: "none" }}>
                <Flex w="full" mt="32px" color="blue.500" alignItems="center" fontSize="17px" cursor="pointer">
                    <FontAwesomeIcon icon={faAlignJustify} />

                    <Text ml="12px" fontWeight="semibold">
                        Dashboard
                    </Text>
                </Flex>
            </Link>

            <Box my="16px" h="1px" w="full" bg="gray.200" />

            {auth.level === authRepo.AuthLevel.ORGANIZATION && (
                <Link as={ReactLink} to="/datasets" _hover={{ textDecor: "none" }} _focus={{ textDecor: "none" }}>
                    <Flex w="full" mt="16px" color="gray.500" alignItems="center" fontSize="17px" cursor="pointer">
                        <FontAwesomeIcon icon={faAlignJustify} />

                        <Text ml="12px" fontWeight="semibold">
                            Dataset
                        </Text>
                    </Flex>
                </Link>
            )}

            {auth.level === authRepo.AuthLevel.ORGANIZATION && <Box my="16px" h="1px" w="full" bg="gray.200" />}

            {auth.level === authRepo.AuthLevel.WRITER && (
                <Link as={ReactLink} to="/visualizations" _hover={{ textDecor: "none" }} _focus={{ textDecor: "none" }}>
                    <Flex w="full" mt="16px" color="gray.500" alignItems="center" fontSize="17px" cursor="pointer">
                        <FontAwesomeIcon icon={faAlignJustify} />

                        <Text ml="12px" fontWeight="semibold">
                            Visualisasi
                        </Text>
                    </Flex>
                </Link>
            )}

            {auth.level === authRepo.AuthLevel.WRITER && <Box my="16px" h="1px" w="full" bg="gray.200" />}

            {auth.level === authRepo.AuthLevel.WRITER && (
                <Link as={ReactLink} to="/infographics" _hover={{ textDecor: "none" }} _focus={{ textDecor: "none" }}>
                    <Flex w="full" mt="16px" color="gray.500" alignItems="center" fontSize="17px" cursor="pointer">
                        <FontAwesomeIcon icon={faAlignJustify} />

                        <Text ml="12px" fontWeight="semibold">
                            Infografis
                        </Text>
                    </Flex>
                </Link>
            )}

            {auth.level === authRepo.AuthLevel.WRITER && <Box my="16px" h="1px" w="full" bg="gray.200" />}

            {auth.level === authRepo.AuthLevel.ADMIN && (
                <Link as={ReactLink} to="/organizations" _hover={{ textDecor: "none" }} _focus={{ textDecor: "none" }}>
                    <Flex w="full" mt="16px" color="gray.500" alignItems="center" fontSize="17px" cursor="pointer">
                        <FontAwesomeIcon icon={faAlignJustify} />

                        <Text ml="12px" fontWeight="semibold">
                            Organisasi
                        </Text>
                    </Flex>
                </Link>
            )}

            {auth.level === authRepo.AuthLevel.ADMIN && <Box my="16px" h="1px" w="full" bg="gray.200" />}

            {auth.level === authRepo.AuthLevel.ADMIN && (
                <Link as={ReactLink} to="/writers" _hover={{ textDecor: "none" }} _focus={{ textDecor: "none" }}>
                    <Flex w="full" mt="16px" color="gray.500" alignItems="center" fontSize="17px" cursor="pointer">
                        <FontAwesomeIcon icon={faAlignJustify} />

                        <Text ml="12px" fontWeight="semibold">
                            Penulis
                        </Text>
                    </Flex>
                </Link>
            )}

            {auth.level === authRepo.AuthLevel.ADMIN && <Box my="16px" h="1px" w="full" bg="gray.200" />}
        </Box>
    );
};

export default CSidebar;
