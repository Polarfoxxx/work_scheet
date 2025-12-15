import React from "react";

function LogOutButton(): React.JSX.Element {

    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => void {

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