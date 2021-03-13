import createCommonConfig, { WebpackFnConfig } from "./webpack.config";

const productionConfig: WebpackFnConfig = (...args) => {
    const commonConfig = createCommonConfig(...args);

    commonConfig.mode = "production";
    commonConfig.devtool = "source-map";

    return commonConfig;
};

export default productionConfig;
