import React, { memo } from 'react';
import * as cls from './HowItWorksItem.module.scss';

export interface ListItem {
    id: number;
    image: string;
    title: string;
    desc: string;
}

interface HowItWorksItemProps {
    item: ListItem;
}

export const HowItWorksItem: React.FC<HowItWorksItemProps> = memo(({ item }) => {
    return (
        <div className={cls.howItWorksItem}>
            <img src={item.image} alt={item.title} className={cls.howItWorksImage} />
            <div className={cls.howItWorksItemContent}>
                <div className={cls.howItWorksItemTitle}>{item.title}</div>
                <div className={cls.howItWorksItemDesc}>{item.desc}</div>
            </div>
        </div>
    );
});
