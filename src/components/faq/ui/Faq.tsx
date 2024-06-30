import React, { useState } from 'react';
import * as cls from './Faq.module.scss';
import {itemFaq, FaqItem} from "./FaqItem";

// бекенда нет, поэтому хардкодим прям в компоненте //
const listFaq: itemFaq[] = [
    {
        theme: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        theme: 'Прототип нового сервиса - это как трубный призыв?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        theme: 'Частокол на границе продолжает удивлять?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        theme: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        theme: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        theme: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
    {
        theme: 'Высококачественный прототип будущего проекта обнадёживает?',
        desc: 'В частности, дальнейшее развитие различных форм деятельности позволяет ' +
            'выполнить важные задания по разработке дальнейших направлений развития. ' +
            'Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
            'дня говорит о возможностях существующих финансовых и административных условий.'
    },
]

const Faq = () => {
    const [openItems, setOpenItems] = useState<boolean[]>(Array(listFaq.length).fill(false));

    const toggleItem = (index: number) => {
        setOpenItems(prev => {
            const newOpenItems = [...prev];
            newOpenItems[index] = !newOpenItems[index];
            return newOpenItems;
        });
    };

    return (
        <div className={cls.container} id={'faq'}>
            <div className={cls.title}>
                Вопросы и ответы
            </div>
            <div className={cls.list}>
                {listFaq.length && listFaq.map((item, index) => (
                    <FaqItem
                        key={index}
                        item={item}
                        isOpen={openItems[index]}
                        toggleItem={() => toggleItem(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
