const pizzas = require('../data/pizzas.json')

function getPizzas(pizzaId){
  if (!pizzaId){
    console.log('Getting all pizzas ...')
    return pizzas;
  }

  const pizza = pizzas.find((pizza) => {
    return pizza.id == pizzaId
  });

  if (pizza){
    console.log('Getting a single pizza: ' + pizzaId)
    return pizza;
  }

  throw new Error("The pizza you suggested was not found")
}

module.exports = getPizzas
