// imports ================================================== //
import type { PropsInput } from "../../../shared/types";
import type { FC, ReactNode } from "react";

// main ===================================================== //
interface Props {
    description: string,
    children?: ReactNode | ReactNode[]
}
type InputFormFC = FC<Readonly<PropsInput & Props>>

// exports ================================================== //
export type { InputFormFC };