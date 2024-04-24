// imports =================================================== //
import styles from './ui/index.module.css';
import { PropsInput } from '../../../../shared/types';
import type { ChangeEvent, FocusEvent } from 'react';
import React, { forwardRef, useState } from "react";

// main ====================================================== //
const Input = forwardRef<HTMLInputElement, PropsInput>(
    ({ onChange, onFocus, ...props },  ref) => {

        const [value, setValue] = useState("");

        function hanleChange(event: ChangeEvent<HTMLInputElement>) {

            const InputRef = event.target;

            setValue(InputRef.value);

            if (value !== "") {
                InputRef.reportValidity();
            }

            if (onChange) {
                onChange(event);
            }

        }
        function handleFocus(event: FocusEvent<HTMLInputElement>) {

            const InputRef = event.target;

            if (value !== "") {
                InputRef.reportValidity();
            }

            if (onFocus) {
                onFocus(event);
            }

        }

        return (
            <input
                ref={ref}
                value={value}
                className={styles.input}
                onChange={hanleChange}
                onFocus={handleFocus}
                {...props}
            />
        );

    }
);

// exports ================================================== //
export default Input;