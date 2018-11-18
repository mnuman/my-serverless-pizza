const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

function createOrder (order) {
  console.log(order)

  if (!order || !order.pizzaId || !order.address) {
    throw new Error('To order pizza please provide pizza type and address to deliver to ...')
  }

  return docClient.put({
    TableName: 'pizza-orders',
    Item: {
      orderId: uuid(),
      pizza: order.pizzaId,
      address: order.addres,
      ordersStatus: 'pending'
    }
  }).promise().then((res) => {
    console.log('Order is saved!', res)
    return res
  }).catch((saveError) => {
    console.log('Oops, order is not saved:', saveError)
    throw saveError
  })
}

module.exports = createOrder
