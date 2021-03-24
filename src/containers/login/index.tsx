import { Box } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import { TITLE } from "../../helpers/environtments";

const XLogin = () => (
    <Box>
        <Helmet>
            <title>{`Login | ${TITLE}`}</title>
        </Helmet>

        <Box>大丈夫</Box>
    </Box>
);

export default XLogin;
