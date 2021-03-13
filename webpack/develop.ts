import createCommonConfig, { WebpackFnConfig } from "./webpack.config";

const developConfig: WebpackFnConfig = (...args) => {
    const commonConfig = createCommonConfig(...args);

    commonConfig.mode = "development";
    commonConfig.devtool = "eval-source-map";

    return commonConfig;
};

export default developConfig;
