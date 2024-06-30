import React, { useState } from 'react';
import * as cls from './Navbar.module.scss';
import Logo from '@/assets/images/logo.svg';
import { NavbarLink } from "@/components/navbarLink";

interface MenuItem {
    label: string;
    id: string;
}

const menuItems: MenuItem[] = [
    { label: 'Как это работает', id: 'how-it-works' },
    { label: '3-й блок', id: 'block-3' },
    { label: 'Вопросы и ответы', id: 'faq' },
    { label: 'Форма', id: 'form' },
];

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={cls.navbar}>
            <div className={cls.logo}>
                <Logo />
            </div>
            <div className={cls.menuToggleClick} onClick={toggleMenu}>
                <div className={cls.menuToggle}>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <ul className={`${cls.menu} ${isMenuOpen ? cls.menuOpen : ''}`}>
                {menuItems.map((item) => (
                    <NavbarLink key={item.id} {...item} color='white'/>
                ))}
            </ul>
            {isMenuOpen && (
                <div className={cls.fullscreenMenu}>
                    <div className={cls.logoAndClose}>
                        <div className={cls.logo}>
                            <Logo className={cls.blackFill} />
                        </div>
                        <div className={cls.closeMenuClick} onClick={toggleMenu}>
                            <div className={cls.closeMenu}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {menuItems.map((item) => (
                            <div className={cls.fullscreenMenuItem} key={item.id}>
                                <li>
                                    <NavbarLink {...item} color='gray' onClick={closeMenu} />
                                    <span>{'>'}</span>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};
