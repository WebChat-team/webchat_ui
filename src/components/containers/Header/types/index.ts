// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
interface Props {
    before: ReactNode | ReactNode[], 
    after: ReactNode | ReactNode[]
}
type HeaderFC = FC<Readonly<Props>>

// exports ================================================== //
export type { HeaderFC };