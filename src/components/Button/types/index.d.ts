// imports ================================================== //
import type { PropsButton } from '@/shared/types';
import type { FC, ReactNode } from 'react';

// main ===================================================== //
type LevelButton = "primary" | "secondary" | "tertiary"
interface Props {
    wide?: boolean,
    level?: LevelButton,
    isLoading?: boolean,
    type?: HTMLAttributes<HTMLButtonElement>["itemType"],
    children: ReactNode | ReactNode[]
}

type Button = FC<Readonly<PropsButton & Props>>

// exports ================================================== //
export type { Button, LevelButton };