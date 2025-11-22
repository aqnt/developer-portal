# POS Locations

The Locations API allows you to manage multiple store locations for your POS system.

## Overview

Locations enable you to:
- Manage multiple store locations
- Track inventory per location
- Generate location-specific reports
- Assign transactions to locations

## Base Endpoint

```
https://api.aqnt.net/v1/pos/locations
```

## Create Location

Create a new store location:

```bash
curl -X POST https://api.aqnt.net/v1/pos/locations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Downtown Store",
    "address": {
      "street": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94102",
      "country": "US"
    },
    "phone": "+1-555-0123",
    "email": "downtown@example.com",
    "timezone": "America/Los_Angeles",
    "currency": "USD"
  }'
```

Response:

```json
{
  "data": {
    "id": "loc_1234567890",
    "name": "Downtown Store",
    "address": {
      "street": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94102",
      "country": "US"
    },
    "phone": "+1-555-0123",
    "email": "downtown@example.com",
    "timezone": "America/Los_Angeles",
    "currency": "USD",
    "active": true,
    "created_at": "2024-01-15T10:30:00Z"
  },
  "meta": {
    "request_id": "req_abc123xyz",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  },
  "links": {
    "self": "https://api.aqnt.net/v1/pos/locations/loc_1234567890",
    "transactions": "https://api.aqnt.net/v1/pos/locations/loc_1234567890/transactions",
    "inventory": "https://api.aqnt.net/v1/pos/locations/loc_1234567890/inventory"
  }
}
```

## List Locations

Get all locations:

```bash
curl -X GET https://api.aqnt.net/v1/pos/locations \
  -H "Authorization: Bearer YOUR_API_KEY"
```

With filters:

```bash
curl -X GET "https://api.aqnt.net/v1/pos/locations?active=true&city=San Francisco" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Location

Retrieve a specific location:

```bash
curl -X GET https://api.aqnt.net/v1/pos/locations/loc_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Update Location

Update an existing location:

```bash
curl -X PATCH https://api.aqnt.net/v1/pos/locations/loc_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Downtown Store - Updated",
    "phone": "+1-555-9999"
  }'
```

## Delete Location

Delete a location:

```bash
curl -X DELETE https://api.aqnt.net/v1/pos/locations/loc_1234567890 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Location Transactions

Get all transactions for a specific location:

```bash
curl -X GET https://api.aqnt.net/v1/pos/locations/loc_1234567890/transactions \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Get Location Inventory

Get inventory for a specific location:

```bash
curl -X GET https://api.aqnt.net/v1/pos/locations/loc_1234567890/inventory \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Location Settings

Configure location-specific settings:

```bash
curl -X PATCH https://api.aqnt.net/v1/pos/locations/loc_1234567890/settings \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "tax_rate": 0.08,
    "receipt_template": "default",
    "print_receipt": true,
    "email_receipt": true
  }'
```

## Location Reports

Get location-specific reports:

```bash
curl -X GET "https://api.aqnt.net/v1/pos/locations/loc_1234567890/reports/sales?start_date=2024-01-01&end_date=2024-01-31" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Next Steps

- [Transactions](/pos/transactions) - Create and manage sales transactions
- [Inventory](/pos/inventory) - Manage product inventory
- [Payments](/pos/payments) - Process payments and refunds

