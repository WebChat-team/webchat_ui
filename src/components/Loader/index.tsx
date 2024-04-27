// imports =================================================== //
import React from 'react';
import type { FC } from 'react';
import styles from "./ui/index.module.css";

// main ====================================================== //
/**
 * Компонент для отображения процесса загрузки.
 */
const Loader: FC = () => {

    return (
        <span
            className={
                `${styles.loader}
                material-symbols-outlined`
            }
        >
            refresh
        </span>
    );

}

// exports ================================================== //
export default Loader;