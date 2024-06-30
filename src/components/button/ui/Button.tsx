import React, { memo } from 'react';
import * as cls from './Button.module.scss';

interface ButtonProps {
    label: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        label,
        variant = 'primary',
        size = 'medium',
        disabled = false,
        onClick,
    } = props;

    return (
        <button
            className={`${cls.button} ${cls[variant]} ${cls[size]} ${disabled ? cls.disabled : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
});
