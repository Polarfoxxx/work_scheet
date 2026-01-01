import React from "react";
import "./style/pageHeaderComponent_style.css"

type Type_for_PageHeaderComponent = {
    headerTitle: string
}

function PageHeaderComponent({ headerTitle }: Type_for_PageHeaderComponent): React.JSX.Element {
    return (
        <div className="pageHeaderComponent">
            <div className="headerContent">
                <h4>
                    {headerTitle}
                </h4>
            </div>
        </div>
    );
};

export default PageHeaderComponent;