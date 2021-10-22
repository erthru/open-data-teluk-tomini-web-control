import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import * as datasetRepo from "../../data/api/repositories/dataset-repository";
import * as visualizationRepo from "../../data/api/repositories/visualization-repository";
import * as infographicRepo from "../../data/api/repositories/infographic-repository";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";

const CStatistics = () => {
    const [datasetsTotal, setDatasetsTotal] = useState(0);
    const [visualizationTotal, setVisualizationTotal] = useState(0);
    const [infographicTotal, setInfographicTotal] = useState(0);

    useEffect(() => {
        getTheTotals();
    }, []);

    const getTheTotals = async () => {
        const response = await datasetRepo.getAll(1, 1);
        setDatasetsTotal(response.total);

        const response1 = await visualizationRepo.getAll(1, 1);
        setVisualizationTotal(response1.total);

        const response2 = await infographicRepo.getAll(1, 1);
        setInfographicTotal(response2.total);
    };

    return (
        <Flex w="full">
            <Stat p="16px" rounded="md" bg="white">
                <StatLabel>Dataset Total</StatLabel>
                <StatNumber>{datasetsTotal}</StatNumber>
            </Stat>

            <Stat p="16px" rounded="md" bg="white" ml="16px">
                <StatLabel>Visualisasi Total</StatLabel>
                <StatNumber>{visualizationTotal}</StatNumber>
            </Stat>

            <Stat p="16px" rounded="md" bg="white" ml="16px">
                <StatLabel>Infografik Total</StatLabel>
                <StatNumber>{infographicTotal}</StatNumber>
            </Stat>
        </Flex>
    );
};

export default CStatistics;
