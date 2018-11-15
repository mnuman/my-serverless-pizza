function updateOrder(orderId, order) {
  if (!order || !orderId) {
    throw new Error("To update an order please provide an order object ...")
  }
  return {
    message: `order with id ${orderId} successfully updated`
  }
}

module.exports = updateOrder
