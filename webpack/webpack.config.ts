import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export type WebpackFnConfig<E = void> = (
    env: Partial<E> | undefined,
    args: { [K: string]: any; env?: Partial<E> }
) => Configuration;

const config: WebpackFnConfig = (env, args) => {
    return {
        context: path.resolve(__dirname, "../"),
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, "../dist"),
            clean: true,
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                    options: {
                        // disable type checker - we will use it in ForkTsCheckerWebpackPlugin
                        transpileOnly: true,
                    },
                },
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new HtmlWebpackPlugin({ template: "./src/index.html" }),
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
    };
};

export default config;
