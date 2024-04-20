// imports =================================================== //
import React from 'react';
import Loader from '@/components/Loader';
import getClassName from './helpers/getClassName';
import type { Button } from './types/index.d.ts';

// main ====================================================== //
const Button: Button = ({
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