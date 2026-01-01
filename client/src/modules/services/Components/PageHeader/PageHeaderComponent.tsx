import React from "react";
import "./style/pageHeaderComponent_style";

function PageHeaderComponent(headerTitle: string): React.JSX.Element {
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