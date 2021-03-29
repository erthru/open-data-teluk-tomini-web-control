import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { FormEvent, useState } from "react";
import CCard from "../common/card";
import * as authRepo from "../../data/api/repositories/auth-repository";
import * as session from "../../helpers/session";
import { useHistory } from "react-router";

const CLoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const history = useHistory();

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsLoginFailed(false);

        const response = await authRepo.login(username, password);

        if (response.token === null) {
            setIsLoginFailed(true)
            setIsLoading(false)
        }
        else {
            session.create(response.token, response.refreshToken, password);
            history.push("/");
        }
    };

    return (
        <CCard>
            <form onSubmit={submit}>
                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Input Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </FormControl>

                <FormControl mt="16px">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Input Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FormControl>

                {isLoginFailed && (
                    <Alert status="error" mt="16px" rounded="lg">
                        <AlertIcon />
                        <AlertTitle>Kesalahan!</AlertTitle>
                        <AlertDescription>Login gagal, username atau password salah.</AlertDescription>
                    </Alert>
                )}

                <Button type="submit" mt="16px" colorScheme="green" w="full" isLoading={isLoading}>
                    Login
                </Button>
            </form>
        </CCard>
    );
};

export default CLoginForm;
