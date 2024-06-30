import {createRoot} from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import {App} from "./components/App";
import './index.module.scss';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </BrowserRouter>
);
