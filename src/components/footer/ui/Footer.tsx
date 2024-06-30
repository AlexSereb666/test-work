import React from 'react';
import * as cls from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={cls.container}>
            <div className={cls.text}>
                © {new Date().getFullYear()} Лаборатория интернет
            </div>
        </footer>
    );
};
