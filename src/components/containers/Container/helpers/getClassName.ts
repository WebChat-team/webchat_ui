// imports ================================================== //
import styles from "../ui/index.module.css";

// types ==================================================== //
type getClassName = (wide: boolean) => string

// main ===================================================== //
const getClassName: getClassName = (wide) => (
    `
        ${styles.container}
        ${wide ? styles.wide : styles.default}
    `
);

// exports ================================================= //
export default getClassName;