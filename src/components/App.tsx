import React, {Suspense} from 'react';
import AppRouter from "@/components/router/ui/AppRouter";

export const App = () => {
    return (
        <div>
            <Suspense fallback="">
                <AppRouter/>
            </Suspense>
        </div>
    );
};
