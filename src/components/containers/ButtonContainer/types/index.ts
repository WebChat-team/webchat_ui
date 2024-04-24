// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
interface Props {
    isRow?: boolean,
    children: ReactNode[]
}
type ButtonContainerFC = FC<Readonly<Props>>

// exports ================================================== //
export type { ButtonContainerFC };