import React, {memo} from 'react';
import * as cls from './FaqItem.module.scss';

export interface itemFaq {
    theme: string;
    desc: string;
}

interface FaqItemProps {
    item: itemFaq;
    isOpen: boolean;
    toggleItem: () => void;
}

export const FaqItem: React.FC<FaqItemProps> = memo(({ item, isOpen, toggleItem }) => {
    return (
        <div className={cls.item}>
            <div className={cls.theme} onClick={toggleItem}>
                <div className={cls.themeText}>
                    {item.theme}
                </div>
                <div className={cls.themePlus}>
                    {isOpen ? '✖' : '+'}
                </div>
            </div>
            {isOpen && (
                <div className={cls.desc}>
                    {item.desc}
                </div>
            )}
        </div>
    );
});
