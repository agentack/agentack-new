import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agentack.co'),
  title: 'Agentic AI Development Company | Custom AI Agents & Automation | Agentack',
  description:
    'Leading agentic AI development company delivering custom AI agent development services, multi-agent workflows, and business automation across UK, USA, Dubai, and Pakistan.',
  openGraph: {
    title: 'Agentic AI Development Company | Agentack',
    description:
      'Custom AI agent development services, multi-agent workflows, and business process automation.',
    url: 'https://agentack.co',
    siteName: 'Agentack',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Agentack',
    'url': 'https://agentack.co',
    'description':
      'Agentic AI development company offering custom AI agents, business workflow automation, and multi-agent systems.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Karachi',
      'addressCountry': 'PK',
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'Pakistan' },
      { '@type': 'Country', 'name': 'United Arab Emirates' },
    ],
    'priceRange': '$$',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Google Analytics 4 (GA4) Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
