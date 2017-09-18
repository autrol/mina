const appJSON = require('../src/app.json');
var entries = {};

appJSON.pages.forEach(function (value) {
    entries['./dist/' + value + '.js'] = './src/' + value + '.js';
    entries['./dist/' + value + '.wxss'] = './src/' + value + '.less';
});

module.exports = entries;
