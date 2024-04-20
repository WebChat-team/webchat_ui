// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
interface Props {
    before: ReactNode | ReactNode[], 
    after: ReactNode | ReactNode[]
}
type Header = FC<Readonly<Props>>

// exports ================================================== //
export type { Header };