var config          = require('./config');

module.exports = {
    'url' : config.get('mongoose:uri')
};