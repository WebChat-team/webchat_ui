// imports ================================================== //
import { createContext } from "react";
import type { RefObject } from "react";
import type { PropsInput } from "@shared/types";

// types ==================================================== //
interface InputFormContextValue {
    InputRef: RefObject<HTMLInputElement>,
    setInputProps: (props: Partial<PropsInput>) => void
}

// constants ================================================ //
const initialContext = {
    InputRef: { current: null },
    setInputProps: () => {}
};

// main ===================================================== //
export const getInputFormContext = () => createContext<InputFormContextValue>(initialContext);