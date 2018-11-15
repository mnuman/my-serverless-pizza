function createOrder(order) {
  console.log(order);

  if (!order || !order.pizzaId || !order.address) {
    throw new Error("To order pizza please provide pizza type and address to deliver to ...")
  }
  return {}
}

module.exports = createOrder
