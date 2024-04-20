// imports ================================================== //
import type {
    FC,
    DetailedHTMLProps,
    InputHTMLAttributes,
    HTMLInputElement,
    ButtonHTMLAttributes,
    FormHTMLAttributes,
    HTMLFormElement,
    HTMLButtonElement,
    ReactNode,
    AnchorHTMLAttributes
} from 'react';

// main ===================================================== //

// form
type PropsForm = DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
>

// input
type PropsInput = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

// button
type PropsButton = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

// logo
type PropsAnchor = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>

// exports ================================================== //
export type {
    PropsForm,
    PropsInput,
    PropsButton,
    PropsAnchor
};