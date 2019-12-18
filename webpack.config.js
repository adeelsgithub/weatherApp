const path = require("path");
const htmlwepbackplugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"js/weatherApp.js"
    },
    devServer:{
        contentBase:"./dist"
    },
    plugins:[
        new htmlwepbackplugin({
            filename:"index.html",
            template: "src/app.html"
        })
    ]
    
};