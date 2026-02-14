import React from "react";
import { calculateTkz_API } from "../../../API";
import { Nova_2G, Nova_Pge } from "./Components";
import "./style/calculateTkz_style.css"


function CalculateTkz_Module(): React.JSX.Element {
    const [selectTypeMachine, setSelectTypeMachine] = React.useState<undefined | "NOVA_2G" | "NOVA_PGE">(undefined);
    const [selectJSX_Form, set_SelectJSX_Form] = React.useState<React.JSX.Element | null>(null)


    const handleSubmit_calculateTZ = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (selectTypeMachine) {
            case "NOVA_2G":
                set_SelectJSX_Form(Nova_2G)
                break
            case "NOVA_PGE":
                set_SelectJSX_Form(Nova_Pge)
                break
            default:
                set_SelectJSX_Form(null)
        }
    };



    return (
        <div className="calculateTkz">
            <div className="calculate block">
                <form action="#" onSubmit={e => handleSubmit_calculateTZ(e)}>
                    <div className="formCalculate">
                        <div className="type_mashineBlock">
                            <label htmlFor="pet-select">Choose a pet:</label>
                            <select id="pet-select">
                                <option value="">--Please choose an option--</option>
                                <option value="dog">NOVA 2G </option>
                                <option value="dog">NOVA PGE</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div>
                    {selectJSX_Form}
                </div>
            </div>
        </div>
    )
};


export default CalculateTkz_Module;