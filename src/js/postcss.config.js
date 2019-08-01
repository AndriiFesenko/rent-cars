
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        // Удаляет комментарии в mode prodaction
        require('cssnano')({
            preset: [
                'default', {
                    discardComments:{
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}