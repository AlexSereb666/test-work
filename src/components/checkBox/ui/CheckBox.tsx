import React, { useState, memo } from 'react';
import * as cls from './CheckBox.module.scss';

interface CheckBoxProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = memo(({ label, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        onChange(event);
    };

    return (
        <label className={cls.checkboxLabel}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className={cls.checkboxLabelInput}
            />
            <span className={cls.checkboxLabelText}>{label}</span>
        </label>
    );
});
