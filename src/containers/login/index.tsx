import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
import { TITLE } from "../../helpers/environtments";
import * as session from "../../helpers/session";

const XLogin = () => {
    const history = useHistory();

    useEffect(() => {
        if (session.isSet()) history.push("/");
    }, []);

    return (
        <Box>
            <Helmet>
                <title>{`Login | ${TITLE}`}</title>
            </Helmet>

            <Box>大丈夫</Box>
        </Box>
    );
};

export default XLogin;
