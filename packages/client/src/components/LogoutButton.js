import {
    Button,
} from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Button
                className='mt-3'
                color='info'
                onClick={() => logout()}
            >
                Se deconnecter
            </Button>
        )
    );
}