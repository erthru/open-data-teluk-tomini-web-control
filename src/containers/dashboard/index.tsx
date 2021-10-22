import { Box } from "@chakra-ui/layout";
import { Helmet } from "react-helmet";
import CStatistics from "../../components/statistics";
import { TITLE } from "../../helpers/environtments";

const XDashboard = () => (
    <Box>
        <Helmet>
            <title>{`Dashboard | ${TITLE}`}</title>
        </Helmet>

        <Box>
            <CStatistics />
        </Box>
    </Box>
);

export default XDashboard;
