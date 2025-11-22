# Purchase Orders API Overview

The Purchase Orders API allows you to create, manage, and track purchase orders for your business procurement needs.

## Features

- **Create Purchase Orders**: Generate purchase orders for vendors
- **Vendor Management**: Manage vendor information and relationships
- **Approval Workflows**: Set up approval processes for purchase orders
- **Receiving**: Track received items against purchase orders
- **Invoice Matching**: Match vendor invoices to purchase orders
- **Multi-currency**: Support for multiple currencies
- **Status Tracking**: Track purchase order status from creation to completion

## Base Endpoint

```
https://api.aqnt.net/v1/purchase-orders
```

## Key Concepts

### Purchase Orders

A purchase order (PO) represents a formal request to purchase goods or services from a vendor. It includes:
- Vendor information
- Line items (products/services)
- Quantities and prices
- Delivery terms
- Payment terms

### Purchase Order Status

- `draft`: PO is being created
- `pending_approval`: PO submitted for approval
- `approved`: PO approved and sent to vendor
- `sent`: PO sent to vendor
- `partially_received`: Some items received
- `received`: All items received
- `cancelled`: PO cancelled
- `closed`: PO completed and closed

## Quick Start

### Create a Purchase Order

```bash
curl -X POST https://api.aqnt.net/v1/purchase-orders \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "vendor_id": "vend_123",
    "items": [
      {
        "description": "Office Chairs",
        "quantity": 10,
        "unit_price": 150.00
      }
    ],
    "delivery_date": "2024-02-15"
  }'
```

## Common Use Cases

1. **Create PO**: Generate purchase orders for vendors
2. **Approve PO**: Review and approve purchase orders
3. **Track Receiving**: Record received items
4. **Match Invoices**: Link vendor invoices to purchase orders
5. **Vendor Management**: Manage vendor relationships

## Next Steps

- [Create Purchase Order](/purchase-orders/create-po) - Learn how to create purchase orders
- [Manage Purchase Orders](/purchase-orders/manage-po) - Manage existing purchase orders
- [Receiving](/purchase-orders/receiving) - Track received items
- [Vendors](/purchase-orders/vendors) - Manage vendors

