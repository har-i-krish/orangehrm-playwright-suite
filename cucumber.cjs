module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: ['features/support/**/*.js'],
        format: ['progress', 'html:cucumber-report.html']
    }
};