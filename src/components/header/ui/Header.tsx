import React from 'react';
import * as cls from './Header.module.scss';
import backgraundImg from '@/assets/images/backgraundImg.png';
import {Button} from "@/components/button";

export const Header = () => {
    return (
        <header className={cls.header}>
            <img src={backgraundImg as string} alt="Background" className={cls.backgroundImg} />
            <div className={cls.overlay}></div>
            <div className={cls.centerBlock}>
                <h1 className={cls.largeText}>
                    Говорят, никогда не поздно сменить профессию
                </h1>
                <h2 className={cls.smallText}>
                    Сделай круто тестовое задание и у тебя получится
                </h2>
                <div className={cls.button}>
                    <Button
                        label="Проще простого!"
                        variant="secondary"
                        size="medium"
                    />
                </div>
            </div>
        </header>
    );
};
