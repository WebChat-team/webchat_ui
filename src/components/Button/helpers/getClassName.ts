// imports ================================================== //
import type { LevelButton } from '../types';
import classNamesByTypeButton from '../constants/classNames';
import styles from '../ui/index.module.css';

// types ==================================================== //
type getClassName = (wide: boolean, level: LevelButton, className?: string) => string

// main ===================================================== //
const getClassName: getClassName = (wide, level, className) => (
    `
        ${className}
        ${styles.button}
        ${classNamesByTypeButton[level]} 
        ${wide && styles.wide}
    `
);

// exports ================================================= //
export default getClassName;