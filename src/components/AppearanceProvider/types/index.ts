// imports ================================================== //
import type { FC, ReactNode } from 'react';

// main ===================================================== //
type Theme = "light" | "dark"
interface Props {
    theme?: Theme,
    children: ReactNode | ReactNode[]
}
type AppearanceProviderFC = FC<Readonly<Props>>

// exports ================================================== //
export type { AppearanceProviderFC };