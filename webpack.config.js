const path = require("path");
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = env => {

    const outputDir = "build";
    let config = {
        entry: ["./src/App.tsx"],
        mode: env,
        devtool: "source-map",
        output: {
            filename: "./bundle.js",
            path: path.resolve(__dirname, outputDir),
            publicPath: "/"
        },
        optimization: {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false
        },
        resolve: {
            plugins: [new TsConfigPathsPlugin({ configFile: "./tsconfig.json" })],
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
            mainFields: ["module", "browser", "main"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: "ts-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        }
                    ]
                },
                {
                    test: /\.(ttf|svg|png|jpe?g|gif|mp3)$/i,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: "content", to: "./", force: true },
                ],
            })
        ]
    }

    config.devServer = {
        compress: false,
        host: "localhost",
        port: 5005,
        hot: true,
        https: false,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "content"),
        watchContentBase: false,
        overlay: {
            warnings: true,
            errors: true
        },
    }
    return config;
};