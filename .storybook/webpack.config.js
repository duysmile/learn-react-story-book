const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/,
                options: {
                    presets: ["@babel/react"],
                    plugins: [
                        ['import', {libraryName: "antd", style: true}]
                    ]
                },
            },
        ]
    }
};
