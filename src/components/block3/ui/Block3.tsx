import React, {memo} from 'react';
import * as cls from './Block3.module.scss';
import image_1 from '@/assets/images/2_1.png';
import image_2 from '@/assets/images/2_2.png';

export const Block3 = memo(() => {
    return (
        <div className={cls.container} id={'block-3'}>
            <div className={cls.text}>
                <div className={cls.title}>
                    Круто, ты дошел до третьего блока
                </div>
                <div className={cls.desc}>
                    63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше
                    15 000 ₽. <br/><br/> Доступ к заработанным деньгам помогает отказаться от кредитов и экономить
                    деньги на процентах и штрафах.
                </div>
            </div>
            <div className={cls.images}>
                <div className={cls.image_1}>
                    <img src={image_1 as string} alt={'тут изображение'}/>
                </div>
                <div className={cls.image_2}>
                    <img src={image_2 as string} alt={'тут изображение'}/>
                </div>
            </div>
        </div>
    );
});
