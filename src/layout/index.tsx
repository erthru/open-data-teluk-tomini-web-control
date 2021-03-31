import { Box, Container, Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import CHeader from "../components/header";
import XDashboard from "../containers/dashboard";
import * as session from "../helpers/session";

const Layout = () => {
    const history = useHistory();

    useEffect(() => {
        if (!session.isSet()) history.push("/login");
    }, []);

    return (
        <Box bg="#fafafa">
            <Flex flexDir="column" minH="100vh">
                <CHeader />

                <Flex w="full" flex="1">
                    <Container maxW="1200px" p="16px">
                        <Switch>
                            <Route exact path="/" component={XDashboard} />
                        </Switch>
                    </Container>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Layout;
