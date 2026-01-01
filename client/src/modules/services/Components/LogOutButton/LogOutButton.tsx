import React from "react";
import { ContainerProvider } from "../../../Container";
import { useContext } from "react";

function LogOutButton(): React.JSX.Element {
    const { provideDATA, setProvideDATA } = useContext(ContainerProvider.Context);

    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setProvideDATA({
            ...provideDATA,
            isLogged: false,
        })
    };

    return (
        <div className="logoutButton">
            <button onClick={handleLogOut}>
                Log out
            </button>
        </div>
    );
};

export default LogOutButton;