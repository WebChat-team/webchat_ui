// imports ================================================== //
import styles from "../ui/index.module.css";

// types ==================================================== //
type getClassName = (isRow: boolean) => string

// main ===================================================== //
const getClassName: getClassName = (isRow) => (
    `
        ${styles.button_container}
        ${isRow ? styles.row : styles.column}
    `
);

// exports ================================================= //
export default getClassName;