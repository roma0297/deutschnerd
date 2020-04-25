import React from "react";
import FormElement from "./FormElement/FormElement";

const Form = ({inputs, setInputs}) => {
    const updateInputs = (newValue, inputIdentifier) => {
        const updatedInputs = {...inputs};
        const updatedFormElement = {...updatedInputs[inputIdentifier]};
        updatedFormElement.value = newValue;
        updatedInputs[inputIdentifier] = updatedFormElement;
        setInputs(updatedInputs);
    };

    const formElements = Object.keys(inputs)
        .map(key => <FormElement
                key={key}
                {...inputs[key]}
                onChangeHandler={(newValue) => updateInputs(newValue, key)}
            />
        );

    return (
        <>
            {formElements}
        </>
    )
}

export default Form