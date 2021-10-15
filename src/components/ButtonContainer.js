import React from "react";

export default function ButtonContainer({ className, children, small }) {
    return (
        <div className={'button-container ptb-1 ' + className} style={{gap: small ? '8px': '12px' }}>
            {children.map((button) => React.cloneElement(button, { small }))}
        </div>
    );
}