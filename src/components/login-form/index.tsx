import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import CCard from "../common/card";

const CLoginForm = () => {
    return (
        <CCard>
            <form>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Input Username" required />
                </FormControl>

                <FormControl mt="16px">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Input Password" required />
                </FormControl>

                <Button mt="16px" colorScheme="green" w="full">
                    Login
                </Button>
            </form>
        </CCard>
    );
};

export default CLoginForm;
