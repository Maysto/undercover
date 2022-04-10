import {
    Button,
} from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <Button
                color='primary'
                onClick={() => loginWithRedirect()}
            >
                Se connecter
            </Button>
        )
    );
}