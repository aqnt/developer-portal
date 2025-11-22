# Expense Categories

Manage expense categories and tax settings.

## List Categories

Retrieve all expense categories.

**Endpoint:** `GET /v1/expenses/categories`

**Response:**

```json
{
  "data": [
    {
      "id": "cat_1234567890",
      "name": "Travel",
      "code": "TRAVEL",
      "subcategories": [
        {
          "id": "subcat_123",
          "name": "Transportation",
          "code": "TRANSPORT"
        },
        {
          "id": "subcat_456",
          "name": "Accommodation",
          "code": "HOTEL"
        }
      ],
      "is_tax_deductible": true,
      "default_tax_rate": 0.00
    }
  ]
}
```

## Get Category

Retrieve details of a specific category.

**Endpoint:** `GET /v1/expenses/categories/{category_id}`

## Create Category

Create a custom expense category.

**Endpoint:** `POST /v1/expenses/categories`

**Request Body:**

```json
{
  "name": "Software Licenses",
  "code": "SOFTWARE",
  "parent_id": null,
  "is_tax_deductible": true,
  "default_tax_rate": 0.00,
  "description": "Software subscriptions and licenses"
}
```

## Update Category

Update category details.

**Endpoint:** `PATCH /v1/expenses/categories/{category_id}`

**Request Body:**

```json
{
  "name": "Updated Category Name",
  "is_tax_deductible": false
}
```

## Delete Category

Delete a custom category.

**Endpoint:** `DELETE /v1/expenses/categories/{category_id}`

## Default Categories

Pre-configured categories:

- **Travel**: Transportation, accommodation, meals while traveling
- **Meals & Entertainment**: Business meals, client entertainment
- **Office Supplies**: Stationery, equipment, supplies
- **Software & Subscriptions**: SaaS tools, software licenses
- **Professional Services**: Legal, consulting, accounting
- **Marketing**: Advertising, events, promotional materials
- **Utilities**: Internet, phone, electricity, water
- **Rent & Facilities**: Office rent, maintenance
- **Insurance**: Business insurance policies
- **Other**: Miscellaneous expenses

## Tax Deductibility

Categories can be marked as tax-deductible:

```json
{
  "is_tax_deductible": true,
  "tax_deduction_type": "business_expense"
}
```

Tax deduction types:
- `business_expense`: Fully deductible business expense
- `partial`: Partially deductible
- `non_deductible`: Not tax-deductible

## Category Hierarchy

Categories can have subcategories:

```json
{
  "name": "Travel",
  "subcategories": [
    {
      "name": "Transportation",
      "code": "TRANSPORT"
    },
    {
      "name": "Accommodation",
      "code": "HOTEL"
    }
  ]
}
```

