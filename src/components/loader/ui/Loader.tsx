import React from "react";
import * as styles from './Loader.module.scss';

export const Loader = () => (
    <div className={styles['lds-ellipsis']}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
);
