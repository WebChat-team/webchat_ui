// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
interface Props {
    wide?: boolean,
    children: ReactNode | ReactNode[]
}
type ContainerFC = FC<Readonly<Props>>

// exports ================================================== //
export type { ContainerFC };