var config          = require('./config');

module.exports = {
    //'url' : 'mongodb://localhost:27017/test'
    'url' : 'mongodb://'+process.env.MONGO_PORT_27017_TCP_ADDR+':'+process.env.MONGO_PORT_27017_TCP_PORT+'/test'
};