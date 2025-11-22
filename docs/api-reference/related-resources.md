# Related Resources (HATEOAS)

AQNT APIs follow HATEOAS (Hypermedia as the Engine of Application State) principles by including related resource links in all responses. This allows clients to discover and navigate related resources without hardcoding URLs.

## Links Structure

All API responses include a `links` object with relevant resource URLs:

```json
{
  "data": { ... },
  "links": {
    "self": "https://api.aqnt.net/v1/resource/id",
    "related_resource_name": "https://api.aqnt.net/v1/related-resource/id"
  }
}
```

## Common Link Types

### Self Link
Always present - points to the current resource:
```json
"self": "https://api.aqnt.net/v1/invoices/inv_1234567890"
```

### Related Resource Links
Links to related resources that can be accessed directly:

```json
"customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
"payments": "https://api.aqnt.net/v1/invoices/inv_1234567890/payments",
"pdf": "https://invoices.aqnt.net/inv_1234567890.pdf"
```

### Action Links
Links to actions that can be performed on the resource:

```json
"send": "https://api.aqnt.net/v1/invoices/inv_1234567890/send",
"void": "https://api.aqnt.net/v1/invoices/inv_1234567890/void",
"refund": "https://api.aqnt.net/v1/payments/pay_1234567890/refunds"
```

## Examples by Resource Type

### Invoice Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "payments": "https://api.aqnt.net/v1/invoices/inv_1234567890/payments",
    "pdf": "https://invoices.aqnt.net/inv_1234567890.pdf",
    "send": "https://api.aqnt.net/v1/invoices/inv_1234567890/send",
    "void": "https://api.aqnt.net/v1/invoices/inv_1234567890/void",
    "estimate": "https://api.aqnt.net/v1/estimates/est_1234567890"
  }
}
```

### Payment Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/payments/pay_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "invoice": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "payment_method": "https://api.aqnt.net/v1/payments/payment-methods/pm_1234567890",
    "receipt": "https://receipts.aqnt.net/pay_1234567890",
    "refund": "https://api.aqnt.net/v1/payments/pay_1234567890/refunds",
    "refunds": "https://api.aqnt.net/v1/payments/pay_1234567890/refunds"
  }
}
```

### Expense Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/expenses/exp_1234567890",
    "employee": "https://api.aqnt.net/v1/payroll/employees/emp_1234567890",
    "claim": "https://api.aqnt.net/v1/expenses/claims/claim_1234567890",
    "receipt": "https://api.aqnt.net/v1/expenses/receipts/receipt_1234567890",
    "project": "https://api.aqnt.net/v1/projects/proj_1234567890",
    "category": "https://api.aqnt.net/v1/expenses/categories/cat_1234567890"
  }
}
```

### Purchase Order Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/purchase-orders/po_1234567890",
    "vendor": "https://api.aqnt.net/v1/purchase-orders/vendors/vend_1234567890",
    "items": "https://api.aqnt.net/v1/purchase-orders/po_1234567890/items",
    "receiving": "https://api.aqnt.net/v1/purchase-orders/po_1234567890/receiving",
    "invoice": "https://api.aqnt.net/v1/bills/bill_1234567890",
    "pdf": "https://purchase-orders.aqnt.net/po_1234567890.pdf",
    "approve": "https://api.aqnt.net/v1/purchase-orders/po_1234567890/approve",
    "send": "https://api.aqnt.net/v1/purchase-orders/po_1234567890/send"
  }
}
```

### Bill Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/bills/bill_1234567890",
    "vendor": "https://api.aqnt.net/v1/purchase-orders/vendors/vend_1234567890",
    "payments": "https://api.aqnt.net/v1/bills/bill_1234567890/payments",
    "pay": "https://api.aqnt.net/v1/bills/bill_1234567890/pay",
    "schedule": "https://api.aqnt.net/v1/bills/bill_1234567890/schedule",
    "document": "https://documents.aqnt.net/bill_1234567890.pdf"
  }
}
```

### Employee Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/payroll/employees/emp_1234567890",
    "pay_runs": "https://api.aqnt.net/v1/payroll/pay-runs?employee_id=emp_1234567890",
    "expenses": "https://api.aqnt.net/v1/expenses?employee_id=emp_1234567890",
    "department": "https://api.aqnt.net/v1/departments/dept_1234567890",
    "w2_forms": "https://api.aqnt.net/v1/payroll/tax-forms/w2?employee_id=emp_1234567890",
    "pay_stubs": "https://api.aqnt.net/v1/payroll/pay-stubs?employee_id=emp_1234567890"
  }
}
```

### Expense Claim Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/expenses/claims/claim_1234567890",
    "employee": "https://api.aqnt.net/v1/payroll/employees/emp_1234567890",
    "expenses": "https://api.aqnt.net/v1/expenses?claim_id=claim_1234567890",
    "approve": "https://api.aqnt.net/v1/expenses/claims/claim_1234567890/approve",
    "reject": "https://api.aqnt.net/v1/expenses/claims/claim_1234567890/reject",
    "reimbursement": "https://api.aqnt.net/v1/expenses/reimbursements?claim_id=claim_1234567890"
  }
}
```

### Transaction (POS) Links

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/pos/transactions/txn_1234567890",
    "location": "https://api.aqnt.net/v1/pos/locations/loc_1234567890",
    "customer": "https://api.aqnt.net/v1/customers/cust_1234567890",
    "payments": "https://api.aqnt.net/v1/pos/transactions/txn_1234567890/payments",
    "items": "https://api.aqnt.net/v1/pos/transactions/txn_1234567890/items",
    "receipt": "https://receipts.aqnt.net/txn_1234567890.pdf",
    "refund": "https://api.aqnt.net/v1/pos/transactions/txn_1234567890/refund"
  }
}
```

## Benefits of Related Resources

1. **Discoverability**: Clients can discover available actions and related resources
2. **Flexibility**: API can evolve without breaking clients
3. **Self-documenting**: Links serve as inline documentation
4. **Reduced coupling**: Clients don't need to construct URLs manually
5. **Versioning**: Links can point to versioned endpoints automatically

## Best Practices

1. **Always use links**: Don't construct URLs manually - use provided links
2. **Follow links**: Use `links.self` to verify you have the latest resource
3. **Check availability**: Some links may be `null` if the resource/action isn't available
4. **Cache links**: Links are stable and can be cached
5. **Handle missing links**: Some links may not be present based on resource state

## Conditional Links

Some links may only appear when certain conditions are met:

```json
{
  "links": {
    "self": "https://api.aqnt.net/v1/invoices/inv_1234567890",
    "void": "https://api.aqnt.net/v1/invoices/inv_1234567890/void",  // Only if draft
    "send": null,  // null if already sent
    "refund": "https://api.aqnt.net/v1/invoices/inv_1234567890/refund"  // Only if paid
  }
}
```

## Using Links in Your Application

```javascript
// Good: Use provided links
const invoice = await fetch(response.links.self);
const payments = await fetch(response.links.payments);
const pdf = response.links.pdf; // Direct URL

// Bad: Don't construct URLs manually
const invoice = await fetch(`https://api.aqnt.net/v1/invoices/${invoiceId}`);
```

