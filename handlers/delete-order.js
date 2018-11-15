function deleteOrder(orderId) {
  if (!orderId) {
    throw new Error("To delete an order please provide an orderId ...")
  }
  return {}
}
module.exports = deleteOrder
