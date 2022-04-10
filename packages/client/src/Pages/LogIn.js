import {
    Row,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LoginButton } from '../components/LoginButton';
import { LogoutButton } from '../components/LogoutButton';
import { ProfilePage } from './Profile';

import './LogIn.css';

export const LogInPage = () => {
    return (
        <div className="container">
            <Row>
                <LoginButton />
                <LogoutButton />
                <ProfilePage />
            </Row>
        </div>
    );
};
