# Code Examples & Syntax Highlighting

This guide shows how to use code highlighting in API documentation and provides examples in various programming languages.

## Supported Languages

AQNT documentation supports syntax highlighting for:

- **JSON** - API request/response examples
- **HTTP** - HTTP headers and requests
- **Bash/Shell** - Command-line examples
- **cURL** - cURL command examples
- **JavaScript/TypeScript** - Client SDK examples
- **Python** - Python SDK examples
- **Java** - Java SDK examples
- **Go** - Go SDK examples
- **PHP** - PHP SDK examples
- **Ruby** - Ruby SDK examples
- **C#** - C# SDK examples
- **And more...**

## JSON Examples

### Request Example

```json
{
  "customer_id": "cust_1234567890",
  "invoice_number": "INV-2024-001",
  "issue_date": "2024-01-15",
  "due_date": "2024-02-15",
  "currency": "USD",
  "items": [
    {
      "description": "Web Development Services",
      "quantity": 10,
      "unit_price": 150.00,
      "tax_rate": 0.08
    }
  ]
}
```

### Response Example

```json
{
  "data": {
    "id": "inv_1234567890",
    "invoice_number": "INV-2024-001",
    "status": "sent",
    "total": 1836.00,
    "currency": "USD"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}
```

## HTTP Examples

### Request Headers

```bash
Authorization: Bearer sk_live_1234567890abcdef
Content-Type: application/json
Idempotency-Key: unique-key-12345
X-Request-ID: req_custom_id
```

### Full HTTP Request

```bash
POST /v1/invoices HTTP/1.1
Host: api.aqnt.net
Authorization: Bearer sk_live_1234567890abcdef
Content-Type: application/json
Content-Length: 245

{
  "customer_id": "cust_1234567890",
  "amount": 1000.00,
  "currency": "USD"
}
```

## cURL Examples

### Basic Request

```bash
curl -X POST https://api.aqnt.net/v1/invoices \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cust_1234567890",
    "amount": 1000.00
  }'
```

### With Pretty Print

```bash
curl -X GET https://api.aqnt.net/v1/invoices/inv_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  | jq '.'
```

## JavaScript/TypeScript Examples

### Using Fetch API

```javascript
const response = await fetch('https://api.aqnt.net/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customer_id: 'cust_1234567890',
    amount: 1000.00,
    currency: 'USD'
  })
});

const data = await response.json();
console.log(data);
```

### Using AQNT SDK

```javascript
import { AQNT } from '@aqnt/sdk';

const aqnt = new AQNT({
  apiKey: 'YOUR_API_KEY'
});

const invoice = await aqnt.invoices.create({
  customer_id: 'cust_1234567890',
  amount: 1000.00,
  currency: 'USD'
});
```

## Python Examples

### Using Requests Library

```python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'customer_id': 'cust_1234567890',
    'amount': 1000.00,
    'currency': 'USD'
}

response = requests.post(
    'https://api.aqnt.net/v1/invoices',
    headers=headers,
    json=data
)

invoice = response.json()
print(invoice)
```

### Using AQNT Python SDK

```python
from aqnt import AQNT

aqnt = AQNT(api_key='YOUR_API_KEY')

invoice = aqnt.invoices.create(
    customer_id='cust_1234567890',
    amount=1000.00,
    currency='USD'
)

print(invoice)
```

## Error Response Examples

### Validation Error

```json
{
  "error": {
    "type": "validation_error",
    "code": "INVALID_REQUEST",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "amount",
        "message": "Amount must be greater than 0",
        "code": "AMOUNT_INVALID",
        "value": -100.00
      }
    ],
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}
```

## Code Block Features

### Line Highlighting

You can highlight specific lines in code blocks:

```json
{
  "data": {
    "id": "inv_1234567890",
    "status": "paid"  // highlight-next-line
    "amount": 1000.00
  }
}
```

### Error Lines

Mark lines that show errors:

```json
{
  "amount": -100.00,  // error
  "customer_id": "cust_123"
}
```

## Best Practices

1. **Always specify language**: Use language tags (```json, ```bash, etc.) for proper highlighting
2. **Use appropriate language**: Match the language tag to the content
3. **Keep examples realistic**: Use realistic data that developers can relate to
4. **Include error examples**: Show both success and error responses
5. **Add comments**: Use comments to explain complex parts (where supported)

## Language Tags Reference

| Language | Tag | Use Case |
|----------|-----|----------|
| JSON | `json` | API requests/responses |
| HTTP | `http` | HTTP headers, full requests |
| Bash | `bash` or `shell` | Command-line examples |
| cURL | `bash` | cURL commands |
| JavaScript | `javascript` or `js` | Client-side code |
| TypeScript | `typescript` or `ts` | TypeScript examples |
| Python | `python` or `py` | Python SDK examples |
| Java | `java` | Java SDK examples |
| Go | `go` | Go SDK examples |
| PHP | `php` | PHP SDK examples |
| Ruby | `ruby` | Ruby SDK examples |
| C# | `csharp` or `cs` | C# SDK examples |

