// imports =================================================== //
import React from 'react';
import Loader from '../Loader';
import getClassName from './helpers/getClassName';
import type { ButtonFC } from './types';

// main ====================================================== //
/**
 * Кнопка, которая может настраиваться исходя из передаваемых 
 * свойств.
 * @param {boolean} props.isLoading включение режима ожидания.
 * @param {boolean} props.wide занимает всю ширину блока, в котором находится.
 * @param {"primary" | "secondary" | "tertiary"} props.level уровень "значимости".
 */
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