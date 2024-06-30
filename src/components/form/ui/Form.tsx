import React from 'react';
import * as cls from './Form.module.scss';
import {Input} from "@/components/Input";
import {CheckBox} from "@/components/checkBox";
import {Button} from "@/components/button";
import { setName, setPhone, setChecked } from '@/store/formSlice';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "@/store/store";

const Form = () => {
    const dispatch = useDispatch();
    const { name, phone, checked, active } = useSelector((state: RootState) => state.form);

    const sumbit = () => {
        console.log('Форма успешно отправлена:', { name, phone, checked });

        dispatch(setName(''));
        dispatch(setPhone(''));
    }

    return (
        <div className={cls.container} id={'form'}>
            <div className={cls.title}>
                Отправь форму
            </div>
            <div className={cls.form}>
                <div className={cls.name}>
                    <Input
                        value={name}
                        onChange={(event) => dispatch(setName(event.target.value))}
                        label={'Имя'}
                        helperText={'Введите имя'}
                    />
                </div>
                <div className={cls.phone}>
                    <Input
                        value={phone}
                        onChange={(event) => dispatch(setPhone(event.target.value))}
                        label={'Телефон'}
                        helperText={'Введите корректный номер телефона'}
                        pattern={/^(?:\+7|8)?(?:\d{10})$/}
                    />
                </div>
                <div className={cls.check}>
                    <CheckBox
                        label="Согласен, отказываюсь"
                        checked={checked}
                        onChange={(event) => dispatch(setChecked(event.target.checked))}
                    />
                </div>
                <div className={cls.btn}>
                    <Button
                        label={'Отправить'}
                        variant={'primary'}
                        size={'medium'}
                        disabled={!active}
                        onClick={sumbit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Form;
