aws dynamodb create-table --table-name pizza-orders --attribute-definitions AttributeName=orderId,AttributeType=S --key-schema AttributeName=orderId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region eu-central-1 --query TableDescription.TableArn --output text
 # arn:aws:dynamodb:eu-central-1:612457436284:table/pizza-orders
