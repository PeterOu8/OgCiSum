import React from "react";

function BarTemplate({text, children}) {
    return (
        <>
            <div className="barsContainer">
            <h4 className="barText">{text}</h4>
            {children}
            </div>
        </>
    );
}

export default BarTemplate;