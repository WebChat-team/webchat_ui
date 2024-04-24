// imports ================================================== //
import { createContext } from "react";
import type { RefObject } from "react";
import type { PropsInput } from "../../../shared/types";

// types ==================================================== //
interface getInputFormContext {
    InputRef: RefObject<HTMLInputElement>,
    setInputProps: (props: Partial<PropsInput>) => void
}

// constants ================================================ //
const initialContext = {
    InputRef: { current: null },
    setInputProps: () => {}
};

// main ===================================================== //
const getInputFormContext = () => (
    createContext<getInputFormContext>(initialContext)
);

// exports ================================================== //
export default getInputFormContext;