const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()


function getOrders (orderId) {
  if (typeof OrderId === 'undefined') {
    return docClient.scan({
      TableName: 'pizza-orders'
    }).promise().then(result => result.Items)
  } else {
    return docClient.get({
      TableName: 'pizza-orders',
      Key: {
        orderId: orderId
      }
    }).promise().then(result => result.Item)
  }
}

module.exports = getOrders
