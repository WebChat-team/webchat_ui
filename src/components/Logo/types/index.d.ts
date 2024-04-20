// imports ================================================== //
import type { PropsAnchor } from "@/shared/types";
import type { FC } from "react";

// main ===================================================== //
interface Props {
    hasName: boolean
}
type Logo = FC<Readonly<PropsAnchor & Props>>

// exports ================================================== //
export type { Logo };