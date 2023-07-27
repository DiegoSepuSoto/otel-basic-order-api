# Basic Order API

#### This API is intended to use in my OpenTelemetry POC project.

The Order API will return the following JSON:

```json
{
  "orderID": "918237912",
  "orderStatus": "IN TRANSIT",
  "customer": {
    "name": "John",
    "lastName": "Doe",
    "customerID": "abc1234"
  }
}
```

depending on the orderID sent by the query param.

The request can be made like this:

```bash
curl --request GET \
  --url 'http://localhost:8081/order?orderID=918237912'
```