// imports =================================================== //
import styles from './ui/index.module.css';
import type { AppearanceProviderFC } from './types';
import React from 'react';

// main ====================================================== //
/**
 * Компонент-обёртка для проведения цветовой темы: светлой и 
 * тёмной. Им необходимо обернуть все компоненты библиотеки,
 * кроме компонентов-обёрток (контейнеров), так как они активно
 * используют передаваемые данным компонентом CSS стили.
 * @param {"light" | "dark"} props.theme цветовая тема
*/
const AppearanceProvider: AppearanceProviderFC = ({
    theme = "light",
    children
}) => {

    const className = (
        theme === "light" ?
            styles.webchat_ui_light :
            styles.webchat_ui_dark
    );
    
    return (
        <div className={className}>
            { children }
        </div>
    );

}

// exports ================================================== //
export default AppearanceProvider;