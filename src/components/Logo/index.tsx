// imports =================================================== //
import React from 'react';
import styles from './ui/index.module.css';
import type { LogoFC } from './types';

// main ====================================================== //
const Logo: LogoFC = ({
    hasName,
    ...props
}) => {

    return (
        <a className={styles.logo} {...props} >
            <h1 className={styles.logo_name}>
                {hasName && "WebChat"}
            </h1>
            <img
                width={30}
                height={30}
                alt="WebChat"
                src="/images/webchat_logo.svg"
            />
        </a>
    );

}

// exports ================================================== //
export default Logo;