import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import React from 'react';
import PaymentIcon from '@site/src/components/Icons/PaymentIcon';
import InvoiceIcon from '@site/src/components/Icons/InvoiceIcon';
import ExpenseIcon from '@site/src/components/Icons/ExpenseIcon';
import BankIcon from '@site/src/components/Icons/BankIcon';
import PayrollIcon from '@site/src/components/Icons/PayrollIcon';
import ChartIcon from '@site/src/components/Icons/ChartIcon';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: React.ReactElement;
  benefit: string;
  link: string;
  linkText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Accept Payments',
    Icon: PaymentIcon,
    description: (
      <>
        Process payments instantly with credit cards, digital wallets, and bank transfers. 
        <strong> Reduce payment processing time by 80%</strong> with our secure, PCI-compliant infrastructure.
      </>
    ),
    benefit: 'Increase revenue with faster checkout',
    link: '/payments/overview',
    linkText: 'View Payments API →',
  },
  {
    title: 'Online Invoicing',
    Icon: InvoiceIcon,
    description: (
      <>
        Create professional invoices, automate billing, and track payments in real-time. 
        <strong> Get paid 3x faster</strong> with automated reminders and online payment links.
      </>
    ),
    benefit: 'Get paid faster with automated invoicing',
    link: '/invoicing/overview',
    linkText: 'View Invoicing API →',
  },
  {
    title: 'Expense Tracking & Claims',
    Icon: ExpenseIcon,
    description: (
      <>
        Capture receipts, track expenses, and process reimbursements automatically. 
        <strong> Save 10+ hours per week</strong> on expense management with AI-powered categorization.
      </>
    ),
    benefit: 'Automate expense management',
    link: '/expenses/overview',
    linkText: 'View Expenses API →',
  },
  {
    title: 'Bank Reconciliation',
    Icon: BankIcon,
    description: (
      <>
        AI-powered bank reconciliation matches transactions automatically. 
        <strong> Eliminate manual data entry</strong> and reduce reconciliation time by 95%.
      </>
    ),
    benefit: 'Automate bank reconciliation',
    link: '/bank-reconciliation/overview',
    linkText: 'View Reconciliation API →',
  },
  {
    title: 'Payroll & Compliance',
    Icon: PayrollIcon,
    description: (
      <>
        Process payroll, calculate taxes, and ensure compliance automatically. 
        <strong> Stay compliant</strong> with automated tax calculations and reporting.
      </>
    ),
    benefit: 'Automate payroll processing',
    link: '/payroll/overview',
    linkText: 'View Payroll API →',
  },
  {
    title: 'Financial Reporting',
    Icon: ChartIcon,
    description: (
      <>
        Generate real-time financial reports including P&L, Balance Sheet, and Cash Flow. 
        <strong> Make data-driven decisions</strong> with comprehensive analytics and insights.
      </>
    ),
    benefit: 'Real-time financial insights',
    link: '/reporting/overview',
    linkText: 'View Reporting API →',
  },
];

function Feature({title, Icon, description, benefit, link, linkText}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Icon className={styles.iconSvg} />
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        <div className={styles.featureBenefit}>
          <span className={styles.benefitLabel}>Key Benefit:</span>
          <span className={styles.benefitText}>{benefit}</span>
        </div>
        <Link to={link} className={styles.featureLink}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Everything You Need to Build Accounting Apps
          </Heading>
          <p className={styles.sectionSubtitle}>
            Powerful APIs that integrate seamlessly into your application. 
            Start with one feature or build a complete accounting solution.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.featuresCTA}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started">
            Explore All APIs →
          </Link>
        </div>
      </div>
    </section>
  );
}
