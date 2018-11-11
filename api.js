'use strict';

const Api = require('claudia-api-builder');
const api = new Api();
const getPizzas = require('./handlers/get-pizzas');

api.get('/', () => 'Welcome to the big, fat pizza API!');

api.get('/pizzas', () => {
  return getPizzas;
});

api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id)
  },{
    error: 404
  });

module.exports = api