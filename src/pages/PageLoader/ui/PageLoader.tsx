import React from "react";
import * as cls from './PageLoader.module.scss';
import { Loader } from "@/components/loader";

export const PageLoader = () => (
    <div className={cls.PageLoader}>
        <Loader />
    </div>
);
