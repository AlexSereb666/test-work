import React, { useState, memo } from 'react';
import * as cls from './Input.module.scss';
import IconNo from '@/assets/images/checkCricleNo.svg';
import IconOk from '@/assets/images/checkCricleOk.svg';

interface InputProps {
    label?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    pattern?: RegExp;
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
    const {
        label,
        value,
        onChange,
        helperText,
        pattern,
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [isChecked, setIsChecked] = useState(null);
    const [isEmpty, setIsEmpty] = useState(value === '');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        setIsFocused(false);
        if (pattern) {
            setIsValid(pattern.test(value));
            setIsChecked(pattern.test(value));
        } else if (value) {
            setIsChecked(true);
        } else {
            setIsChecked(null);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        setIsEmpty(event.target.value === '');
    };

    return (
        <div className={cls.inputContainer}>
            <div className={cls.inputWrapper}>
                {label && (
                    <span
                        className={`${cls.labelInInput} ${
                            isFocused || value ? cls.labelInInputFocused : ''
                        }`}
                    >
                        {label}
                    </span>
                )}
                <input
                    type="text"
                    className={`${cls.input} ${!isValid ? cls.inputError : ''} ${isEmpty ? cls.inputEmpty : ''}`}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <div className={cls.validationIcon}>
                    {isChecked !== null && (
                        isChecked ? (
                            <IconOk />
                        ) : (
                            <IconNo />
                        )
                    )}
                </div>
            </div>

            {helperText && !isValid && (
                <p className={cls.helperText}>{helperText}</p>
            )}
        </div>
    );
});
