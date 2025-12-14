import React from "react";
import { useContext } from "react";
import { ContainerProvider } from "../../../Container";

function WellcomeAdminModule(): React.JSX.Element {
    const { provideDATA } = useContext(ContainerProvider.Context);
    console.log(provideDATA);
    

    return (
        <div className="wellcomeAdminContent">
            <div>
                <div>
                    <h1>Welcome </h1>
                    <p>{provideDATA.loginName}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
};

export default WellcomeAdminModule;