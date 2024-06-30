import React, { memo } from 'react';
import * as cls from './NavbarLink.module.scss';

interface MenuItem {
    label: string;
    id: string;
    color?: 'white' | 'gray';
    onClick?: () => void;
}

export const NavbarLink: React.FC<MenuItem> = memo(({ label, id, color = 'white', onClick }) => {
    const handleMenuItemClick = () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (onClick) {
                onClick();
            }
        }
    };

    return (
        <li key={id} className={cls.menuItem}>
            <a
                href={`#${id}`}
                onClick={handleMenuItemClick}
                className={color === 'gray' ? cls.gray : cls.white}
            >
                {label}
            </a>
        </li>
    );
});
