import React, { memo, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/components/router/config/routerConfig";
import { PageLoader } from "@/pages/PageLoader";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);
