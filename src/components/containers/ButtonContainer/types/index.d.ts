// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
interface Props extends DefaultProps {
    isRow?: boolean,
    children: ReactNode[]
}
type ButtonContainer = FC<Readonly<Props>>

// exports ================================================== //
export type { ButtonContainer };