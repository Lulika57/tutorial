import { ReactNode } from "react";
import cn from 'clsx';

interface Props {
    children: ReactNode;
    color?: string;
    onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
    return (
        <button className={cn('px-3 py-2 rounded hover:bg-gray-300 bg-pink-500 shadow-4xl text-white', color)} onClick={onClick}>{children}</button>
    )
}

export default Button



