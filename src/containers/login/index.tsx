import { Box, Container, Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import CLogo from "../../components/common/logo";
import CLoginForm from "../../components/login-form";
import { TITLE } from "../../helpers/environtments";
import * as session from "../../helpers/session";

const XLogin = () => {
    const history = useHistory();

    useEffect(() => {
        if (session.isSet()) history.push("/");
    }, []);

    return (
        <Box h="100vh" bg="blue.700">
            <Helmet>
                <title>{`Login | ${TITLE}`}</title>
            </Helmet>

            <Container maxW="1200px">
                <Flex pt={{ base: "32px", md: "62px" }} w="full" justifyContent="center">
                    <Box w={{ base: "90%", md: "50%", lg: "32%" }}>
                        <Flex w="full" justifyContent="center">
                            <CLogo type="white" />
                        </Flex>

                        <Box mt="16px" />
                        <CLoginForm />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default XLogin;
