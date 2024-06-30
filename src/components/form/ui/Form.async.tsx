import { lazy } from "react";

export const FormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./Form'))
}))
