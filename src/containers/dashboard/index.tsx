import { Box } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import { TITLE } from "../../helpers/environtments";

const XDashboard = () => (
    <Box>
        <Helmet>
            <title>{`Dashboard | ${TITLE}`}</title>
        </Helmet>

        dashborad
    </Box>
);

export default XDashboard;
