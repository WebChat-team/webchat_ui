// imports =================================================== //
import React from 'react';
import type { ButtonContainerFC } from './types';
import styles from "./ui/index.module.css";

// main ====================================================== //
const ButtonContainer: ButtonContainerFC = ({
    isRow = false,
    children
}) => {

    const className = `
        ${styles.button_container}
        ${isRow ? styles.row : styles.column}
    `;

    return (
        <div className={className}>
            {children}
        </div>
    );

}

// exports ================================================== //
export default ButtonContainer;