import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'getting-started',
    'authentication',
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference',
        'api-reference/restful-standards',
        'api-reference/enterprise-patterns',
        'api-reference/related-resources',
        'api-reference/code-examples',
      ],
    },
    {
      type: 'category',
      label: 'POS API',
      items: [
        'pos/overview',
        'pos/transactions',
        'pos/inventory',
        'pos/payments',
        'pos/locations',
      ],
    },
    {
      type: 'category',
      label: 'Invoicing API',
      items: [
        'invoicing/overview',
        'invoicing/create-invoice',
        'invoicing/manage-invoices',
        'invoicing/payments',
        'invoicing/recurring',
      ],
    },
    {
      type: 'category',
      label: 'Estimates API',
      items: [
        'estimates/overview',
        'estimates/create-estimate',
        'estimates/manage-estimates',
        'estimates/convert-to-invoice',
      ],
    },
    {
      type: 'category',
      label: 'Payroll API',
      items: [
        'payroll/overview',
        'payroll/employees',
        'payroll/pay-runs',
        'payroll/tax-compliance',
      ],
    },
    {
      type: 'category',
      label: 'Personal Finance API',
      items: [
        'personal-finance/overview',
        'personal-finance/accounts',
        'personal-finance/transactions',
        'personal-finance/budgeting',
        'personal-finance/ai-insights',
      ],
    },
    {
      type: 'category',
      label: 'Payments API',
      items: [
        'payments/overview',
        'payments/process-payment',
        'payments/payment-methods',
        'payments/recurring',
        'payments/payment-links',
        'payments/refunds',
      ],
    },
    {
      type: 'category',
      label: 'Expenses API',
      items: [
        'expenses/overview',
        'expenses/track-expenses',
        'expenses/claims',
        'expenses/receipts',
        'expenses/reimbursements',
        'expenses/categories',
      ],
    },
    {
      type: 'category',
      label: 'Purchase Orders API',
      items: [
        'purchase-orders/overview',
        'purchase-orders/create-po',
        'purchase-orders/manage-po',
        'purchase-orders/receiving',
        'purchase-orders/vendors',
      ],
    },
    {
      type: 'category',
      label: 'Bills API',
      items: [
        'bills/overview',
        'bills/manage-bills',
        'bills/pay-bills',
        'bills/recurring',
        'bills/scheduling',
      ],
    },
    {
      type: 'category',
      label: 'Bank Reconciliation API',
      items: [
        'bank-reconciliation/overview',
        'bank-reconciliation/reconcile',
        'bank-reconciliation/matching',
        'bank-reconciliation/discrepancies',
        'bank-reconciliation/reports',
      ],
    },
    {
      type: 'category',
      label: 'Financial Reporting API',
      items: [
        'reporting/overview',
        'reporting/profit-loss',
        'reporting/balance-sheet',
        'reporting/cash-flow',
        'reporting/custom',
      ],
    },
    {
      type: 'category',
      label: 'Integrations API',
      items: [
        'integrations/overview',
        'integrations/webhooks',
        'integrations/oauth',
        'integrations/events',
      ],
    },
  ],
};

export default sidebars;
