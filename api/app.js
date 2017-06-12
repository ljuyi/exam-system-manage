var redis = require('redis');
var client = redis.createClient();

client.on('ready', () => {
    console.log('redis is ready!')
})