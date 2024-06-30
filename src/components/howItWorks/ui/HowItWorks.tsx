import React from 'react';
import * as cls from './HowItWorks.module.scss';
import waitingImage from '@/assets/images/waiting.png';
import deliveryTruckImage from '@/assets/images/delivery-truck.png';
import secureImage from '@/assets/images/secure.png';
import moneyBagsImage from '@/assets/images/money-bags.png';
import {HowItWorksItem, ListItem} from "./HowItWorksItem";

const listInfo: ListItem[] = [
    {
        id: 1,
        image: waitingImage,
        title: 'Прочитай задание внимательно',
        desc: 'Думаю у тебя не займет это больше двух-трех минут'
    },
    {
        id: 2,
        image: deliveryTruckImage,
        title: 'Изучи весь макет заранее',
        desc: 'Подумай как это будет работать на разных разрешениях и при скролле'
    },
    {
        id: 3,
        image: secureImage,
        title: 'Сделай хорошо',
        desc: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
    },
    {
        id: 4,
        image: moneyBagsImage,
        title: 'Получи предложение',
        desc: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    }
];

export const HowItWorks = () => {
    return (
        <div className={cls.howItWorksContainer} id={'how-it-works'}>
            <div className={cls.howItWorksTitle}>
                Как это работает
            </div>
            <div className={cls.howItWorksList}>
                {listInfo.map(item => (
                    <HowItWorksItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
