import { Box, Container, Flex } from "@chakra-ui/layout";
import { Route, Switch } from "react-router";
import XDashboard from "../containers/dashboard";

const Layout = () => (
    <Box bg="#fafafa">
        <Flex flexDir="column" minH="100vh">
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

export default Layout;
