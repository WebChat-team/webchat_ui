// imports =================================================== //
import React from 'react';
import getClassName from './helpers/getClassName';
import type { ButtonContainer } from './types/index.d.ts';

// main ====================================================== //
const ButtonContainer: ButtonContainer = ({
    isRow = false,
    children
}) => {

    return (
        <div className={getClassName(isRow)}>
            {children}
        </div>
    );

}

// exports ================================================== //
export default ButtonContainer;