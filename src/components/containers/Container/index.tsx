// imports =================================================== //
import React from 'react';
import type { ContainerFC } from './types';
import styles from "./ui/index.module.css";

// main ====================================================== //
const Container: ContainerFC = ({
    wide = false,
    children
 }) => {

    const className = `
        ${styles.container}
        ${wide ? styles.wide : styles.default}
    `

    return (
        <div className={className}>
            {children}
        </div>
    );

};

// exports ================================================== //
export default Container;