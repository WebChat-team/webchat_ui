// imports =================================================== //
import React from 'react';
import type { Container } from './types/index.d.ts';
import getClassName from './helpers/getClassName';

// main ====================================================== //
const Container: Container = ({
    wide = false,
    children
 }) => {

    return (
        <div className={getClassName(wide)}>
            {children}
        </div>
    );

};

// exports ================================================== //
export default Container;