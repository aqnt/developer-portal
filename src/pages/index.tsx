import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import RocketIcon from '@site/src/components/Icons/RocketIcon';
import LockIcon from '@site/src/components/Icons/LockIcon';
import ShieldIcon from '@site/src/components/Icons/ShieldIcon';
import CheckIcon from '@site/src/components/Icons/CheckIcon';
import StoreIcon from '@site/src/components/Icons/StoreIcon';
import CloudIcon from '@site/src/components/Icons/CloudIcon';
import BuildingIcon from '@site/src/components/Icons/BuildingIcon';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeText}>
              <RocketIcon className={styles.badgeIcon} />
              Trusted by 10,000+ Developers
            </span>
          </div>
          <Heading as="h1" className="hero__title">
            Build Powerful Accounting Apps with AI-Powered APIs
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            Integrate POS, invoicing, payroll, and finance solutions in minutes. 
            Enterprise-grade REST APIs with comprehensive documentation and 99.9% uptime SLA.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Active Integrations</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Uptime SLA</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/getting-started">
              Start Building Free →
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/api-reference"
              style={{marginLeft: '10px'}}>
              View API Docs
            </Link>
          </div>
          <div className={styles.trustIndicators}>
            <span className={styles.trustText}>
              <LockIcon className={styles.trustIcon} />
              PCI-DSS Compliant
            </span>
            <span className={styles.trustText}>
              <CheckIcon className={styles.trustIcon} />
              SOC 2 Certified
            </span>
            <span className={styles.trustText}>
              <ShieldIcon className={styles.trustIcon} />
              Bank-Grade Security
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className="container">
        <p className={styles.socialProofText}>Trusted by leading companies worldwide</p>
        <div className={styles.logoGrid}>
          {/* Placeholder for company logos - replace with actual logos */}
          <div className={styles.logoPlaceholder}>Company 1</div>
          <div className={styles.logoPlaceholder}>Company 2</div>
          <div className={styles.logoPlaceholder}>Company 3</div>
          <div className={styles.logoPlaceholder}>Company 4</div>
          <div className={styles.logoPlaceholder}>Company 5</div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Built for Every Business Type
        </Heading>
        <p className={styles.sectionSubtitle}>
          Whether you're building a SaaS platform, e-commerce store, or fintech app, 
          AQNT APIs integrate seamlessly into your workflow.
        </p>
        <div className="row">
          <div className="col col--4">
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <StoreIcon className={styles.useCaseIconSvg} />
              </div>
              <Heading as="h3">Retail & E-commerce</Heading>
              <p>Accept payments, manage inventory, and automate invoicing for your online store.</p>
              <Link to="/pos/overview" className={styles.useCaseLink}>
                Learn more →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <CloudIcon className={styles.useCaseIconSvg} />
              </div>
              <Heading as="h3">SaaS Platforms</Heading>
              <p>Handle subscriptions, recurring billing, and financial reporting for your SaaS business.</p>
              <Link to="/invoicing/overview" className={styles.useCaseLink}>
                Learn more →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>
                <BuildingIcon className={styles.useCaseIconSvg} />
              </div>
              <Heading as="h3">Enterprise Solutions</Heading>
              <p>Complete accounting automation with payroll, expense management, and compliance.</p>
              <Link to="/payroll/overview" className={styles.useCaseLink}>
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function APIShowcase() {
  return (
    <section className={styles.apiShowcase}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2" className={styles.sectionTitle}>
              Get Started in Minutes
            </Heading>
            <p className={styles.sectionSubtitle}>
              Our RESTful APIs are designed for developers. Clear documentation, 
              comprehensive examples, and enterprise-grade reliability.
            </p>
            <div className={styles.apiFeatures}>
              <div className={styles.apiFeature}>
                <CheckIcon className={styles.checkIcon} />
                <span>RESTful API design with consistent patterns</span>
              </div>
              <div className={styles.apiFeature}>
                <CheckIcon className={styles.checkIcon} />
                <span>Comprehensive error handling and validation</span>
              </div>
              <div className={styles.apiFeature}>
                <CheckIcon className={styles.checkIcon} />
                <span>Webhooks for real-time event notifications</span>
              </div>
              <div className={styles.apiFeature}>
                <CheckIcon className={styles.checkIcon} />
                <span>SDKs available in 10+ programming languages</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/getting-started">
                Get Your API Key
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.codeExample}>
              <pre className={styles.codeBlock}>
                <code>{`// Create an invoice in 3 lines
const invoice = await aqnt.invoices.create({
  customer_id: "cust_123",
  amount: 1000,
  currency: "USD"
});

// That's it! Invoice created and sent.`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className={styles.finalCTA}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Transform Your Accounting Workflow?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Join thousands of developers building with AQNT APIs. 
            Start your free integration today.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/getting-started">
              Start Building Now →
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/api-reference"
              style={{marginLeft: '10px'}}>
              Browse Documentation
            </Link>
          </div>
          <p className={styles.ctaNote}>
            No credit card required • Free tier available • Setup in 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Comprehensive API documentation for AQNT's AI-powered accounting platform. Integrate POS, Invoicing, Estimates, Payroll, and Personal Finance solutions.">
      <HomepageHeader />
      <main>
        <SocialProof />
        <HomepageFeatures />
        <UseCases />
        <APIShowcase />
        <FinalCTA />
      </main>
    </Layout>
  );
}
