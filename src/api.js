'use strict';

const Api = require('claudia-api-builder');
const api = new Api();
const getPizzas = require('./handlers/get-pizzas');

api.get('/', () => 'Welcome to the big, fat pizza API!');

api.get('/pizzas', (request) => {
  console.log('Argument-less /pizzas invocation')
  return getPizzas(request.pathParams.id);
});

api.get('/pizzas/{id}', (request) => {
  console.log('Invociation of /pizzas with single argument')
  console.log(request);
  return getPizzas(request.pathParams.id)
  },{
    error: 404
  });
