import { lazy } from "react";

export const FaqAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./Faq'))
}))
