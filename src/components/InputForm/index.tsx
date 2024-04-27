// imports ================================================== //
import React, { useRef, useState } from "react";
import Input from "./component/Input";
import type { InputFormFC } from "./types";
import styles from "./ui/index.module.css";
import type { PropsInput } from "../../shared/types";
import getInputFormContext from "./constants/getInputFormContext";

// main ===================================================== //
const InputFormContext = getInputFormContext();
/**
 * Компонент-поле для ввода данных пользователя.
 * @param {string} props.description описание поля.
 */
const InputForm: InputFormFC = ({
    description,
    children,
    ...inputProps
}) => {

    const InputRef = useRef<HTMLInputElement>(null);
    const [addInputProps, setAddInputProps] = useState<PropsInput>({});
    const newInputProps = {...inputProps, ...addInputProps};

    function setInputProps(newProps: PropsInput) {
        setAddInputProps({
            ...addInputProps,
            ...newProps
        });
    }

    return (
        <label className={styles.label} >
            <span className={styles.description_input}>
                {description}
            </span>
            <Input ref={InputRef} {...newInputProps} />
            <div className={styles.actions_input}>
                <InputFormContext.Provider value={{ InputRef, setInputProps }} >
                    {children}
                </InputFormContext.Provider>
            </div>
        </label>
    );

};

// exports ================================================== //
export { default as validationInput } from "./constants/validationInput";
export { InputFormContext };
export default InputForm;