import React from "react";
import { calculateTkz_API } from "../../../API";
import { Nova_2G, Nova_Pge } from "./Components";
import "./style/calculateTkz_style.css"


function CalculateTkz_Module(): React.JSX.Element {
    const [selectTypeMachine, setSelectTypeMachine] = React.useState<undefined | "NOVA_2G" | "NOVA_PGE">(undefined);
    const [selectJSX_Form, set_SelectJSX_Form] = React.useState<React.JSX.Element | null>(null)


    const handleChangeMachine = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const selected_Machine = event.target.value



        switch (selected_Machine) {
            case "NOVA_2G":
                set_SelectJSX_Form(<Nova_2G />)
                break
            case "NOVA_PGE":
                set_SelectJSX_Form(<Nova_Pge />)
                break
            default:
                set_SelectJSX_Form(null)
        }
    };

    return (
        <div className="calculateTkz">
            <div className="calculate_block">
                <div className="formCalculate_select">
                    <div className="type_mashineBlock">
                        <label htmlFor="machine-select">Choose a maschine:</label>
                        <select id="machine-select" onChange={e => handleChangeMachine(e)}>
                            <option value="">--Please choose an option--</option>
                            <option value="NOVA_2G">NOVA 2G </option>
                            <option value="NOVA_PGE">NOVA PGE</option>
                        </select>
                    </div>
                </div>
                <div className="displaySelectMachineBlock">
                    {
                        selectJSX_Form
                    }
                </div>
            </div>
        </div>
    )
};


export default CalculateTkz_Module;