import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../components/LogoutButton";

export const ProfilePage = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <div className="container">
            {isAuthenticated && (
                <>
                    <h1>{user.name}</h1>
                    <img src={user.picture} alt="Profile" />
                    <p>{user.email}</p>
                    <LogoutButton />
                </>
            )}
        </div>
    );
};