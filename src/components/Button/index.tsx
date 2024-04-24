// imports =================================================== //
import React from 'react';
import Loader from '../Loader';
import getClassName from './helpers/getClassName';
import type { ButtonFC } from './types';

// main ====================================================== //
const Button: ButtonFC = ({
    isLoading = false,
    wide = false,
    level = "primary",
    className,
    children,
    ...props
}) => {

    return (
        <button
            className={getClassName(wide, level, className)}
            disabled={isLoading}
            {...props}
        >
            {children}
            {isLoading && <Loader />}
        </button>
    );

};

// exports ================================================== //
export default Button;