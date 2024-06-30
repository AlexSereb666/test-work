import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from 'webpack';
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): Configuration['module']['rules'] {
    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    }

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    ["@babel/preset-react", {
                        runtime: isDev ? 'automatic' : 'classic'
                    }]
                ]
            }
        }
    }

    return [
        assetLoader,
        scssLoader,
        babelLoader,
        svgLoader,
    ]
}
