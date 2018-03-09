import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            <p>Text Length: {props.size}. {props.sizeCheck}</p>
        </div>
    );
}

export default validationComponent;