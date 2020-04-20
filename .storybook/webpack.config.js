module.exports = {
    module: {
        rules: [
            {
                test: /(stories|story)\.js?$/,
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                enforce: 'pre',
            },
        ]
    },
};
