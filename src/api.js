'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

api.get('/pizzas', () => {
    return [
        'Cappricciosa',
        'Quattro Stagioni',
        'Napoletana',
        'Margherita'
    ]
});

module.exports = api