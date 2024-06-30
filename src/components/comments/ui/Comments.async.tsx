import { lazy } from "react";

export const CommentsAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./Comments'))
}))
