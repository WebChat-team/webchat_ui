// imports =================================================== //
import styles from './ui/index.module.css';
import type { AppearanceProviderFC } from './types';
import React from 'react';

// main ====================================================== //
const AppearanceProvider: AppearanceProviderFC = ({
    theme = "light",
    children
}) => {

    const className = `
        ${styles.webchat_ui_appearance_provider}
        ${
            theme === "light" ?
                styles.webchat_ui_light_theme :
                styles.webchat_ui_dark_theme
        }
    `;

    return (
        <div className={className}>
            { children }
        </div>
    );

}

// exports ================================================== //
export default AppearanceProvider;