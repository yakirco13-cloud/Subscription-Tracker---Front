import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.sub-track.me';

// Simple router based on URL path
const getPage = () => {
  const path = window.location.pathname;
  if (path === '/privacy') return 'privacy';
  return 'app';
};

// Fetch wrapper that includes credentials
const apiFetch = async (endpoint, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return res;
};

// ============================================
// PRIVACY POLICY COMPONENT
// ============================================
const PrivacyPolicy = () => {
  const pStyles = {
    wrapper: {
      minHeight: '100vh',
      background: '#ffffff',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#1f2937',
      lineHeight: 1.7,
      background: '#ffffff',
    },
    header: { textAlign: 'center', marginBottom: '40px' },
    title: { fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: '#111827' },
    lastUpdated: { color: '#6b7280', fontSize: '14px' },
    section: { marginBottom: '32px' },
    h2: { fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#111827' },
    p: { marginBottom: '12px', color: '#374151' },
    ul: { marginLeft: '24px', marginBottom: '12px' },
    li: { marginBottom: '8px', color: '#374151' },
    contact: { background: '#f3f4f6', padding: '20px', borderRadius: '8px', marginTop: '40px' },
    backLink: { display: 'inline-block', marginBottom: '20px', color: '#2563eb', textDecoration: 'none' },
  };

  return (
    <div style={pStyles.wrapper}>
    <div style={pStyles.container}>
      <a href="/" style={pStyles.backLink}>← Back to Sub-Track</a>
      
      <header style={pStyles.header}>
        <h1 style={pStyles.title}>Privacy Policy</h1>
        <p style={pStyles.lastUpdated}>Last updated: December 18, 2025</p>
      </header>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Introduction</h2>
        <p style={pStyles.p}>
          Solved ("we," "our," or "us") operates Sub-Track (sub-track.me), a subscription tracking service. 
          This Privacy Policy explains how we collect, use, and protect your information when you use our service.
        </p>
        <p style={pStyles.p}>
          By using Sub-Track, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Information We Collect</h2>
        
        <p style={pStyles.p}><strong>Email Account Access</strong></p>
        <p style={pStyles.p}>
          When you connect your Gmail or Outlook account, we request read-only access to your emails. 
          We specifically search for and analyze emails related to:
        </p>
        <ul style={pStyles.ul}>
          <li style={pStyles.li}>Receipts and payment confirmations</li>
          <li style={pStyles.li}>Subscription notifications</li>
          <li style={pStyles.li}>Billing statements</li>
        </ul>

        <p style={pStyles.p}><strong>Information We Extract</strong></p>
        <p style={pStyles.p}>From your emails, we extract only:</p>
        <ul style={pStyles.ul}>
          <li style={pStyles.li}>Service/company names</li>
          <li style={pStyles.li}>Subscription amounts and currencies</li>
          <li style={pStyles.li}>Billing frequency (monthly, yearly)</li>
          <li style={pStyles.li}>Sender email addresses</li>
        </ul>

        <p style={pStyles.p}><strong>Account Information</strong></p>
        <p style={pStyles.p}>
          We store your email address to identify your account and link your connected email accounts together.
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>How We Use Your Information</h2>
        <p style={pStyles.p}>We use the collected information to:</p>
        <ul style={pStyles.ul}>
          <li style={pStyles.li}>Detect and display your recurring subscriptions</li>
          <li style={pStyles.li}>Calculate your total subscription spending</li>
          <li style={pStyles.li}>Generate PDF reports of your subscriptions</li>
          <li style={pStyles.li}>Maintain your account and preferences</li>
        </ul>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Data Storage and Security</h2>
        <p style={pStyles.p}>
          Your subscription data is stored securely on our servers. We implement appropriate technical 
          and organizational measures to protect your personal information against unauthorized access, 
          alteration, disclosure, or destruction.
        </p>
        <p style={pStyles.p}>
          <strong>Important:</strong> We do not store the full content of your emails. We only store 
          the extracted subscription information (service names, prices, and billing cycles).
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Third-Party Services</h2>
        <p style={pStyles.p}>We use the following third-party services:</p>
        <ul style={pStyles.ul}>
          <li style={pStyles.li}><strong>Google OAuth:</strong> To authenticate Gmail access</li>
          <li style={pStyles.li}><strong>Microsoft OAuth:</strong> To authenticate Outlook access</li>
          <li style={pStyles.li}><strong>Railway:</strong> For hosting our backend services</li>
          <li style={pStyles.li}><strong>Vercel:</strong> For hosting our website</li>
        </ul>
        <p style={pStyles.p}>
          These services have their own privacy policies governing their use of your data.
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Data Sharing</h2>
        <p style={pStyles.p}>
          We do not sell, trade, or otherwise transfer your personal information to third parties. 
          Your subscription data is private and only visible to you.
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Your Rights</h2>
        <p style={pStyles.p}>You have the right to:</p>
        <ul style={pStyles.ul}>
          <li style={pStyles.li}><strong>Access:</strong> View all data we have stored about you</li>
          <li style={pStyles.li}><strong>Disconnect:</strong> Remove connected email accounts at any time</li>
          <li style={pStyles.li}><strong>Delete:</strong> Request complete deletion of your account and data</li>
          <li style={pStyles.li}><strong>Revoke:</strong> Revoke email access through your Google or Microsoft account settings</li>
        </ul>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Cookies and Sessions</h2>
        <p style={pStyles.p}>
          We use session cookies to keep you logged in. These cookies are essential for the 
          service to function and expire after 10 days of inactivity.
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Children's Privacy</h2>
        <p style={pStyles.p}>
          Sub-Track is not intended for use by children under 13 years of age. We do not knowingly 
          collect personal information from children under 13.
        </p>
      </section>

      <section style={pStyles.section}>
        <h2 style={pStyles.h2}>Changes to This Policy</h2>
        <p style={pStyles.p}>
          We may update this Privacy Policy from time to time. We will notify you of any changes 
          by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section style={pStyles.contact}>
        <h2 style={{...pStyles.h2, marginTop: 0}}>Contact Us</h2>
        <p style={pStyles.p}>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p style={pStyles.p}>
          <strong>Solved</strong><br />
          Email: <a href="mailto:yakir@solvedil.com" style={{color: '#2563eb'}}>yakir@solvedil.com</a>
        </p>
      </section>
    </div>
    </div>
  );
};

// ============================================
// MAIN APP STYLES
// ============================================
const styles = {
  landingContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
    padding: '64px 16px',
  },
  landingContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '16px',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#4b5563',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto 48px',
    lineHeight: 1.6,
  },
  connectCard: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    padding: '32px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  connectTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '24px',
    textAlign: 'center',
  },
  connectButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
    padding: '14px 20px',
    background: 'white',
    border: '2px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#374151',
    cursor: 'pointer',
    textDecoration: 'none',
    marginBottom: '12px',
    transition: 'all 0.2s',
  },
  privacyText: {
    marginTop: '24px',
    fontSize: '14px',
    color: '#6b7280',
    textAlign: 'center',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
    marginTop: '64px',
  },
  featureItem: {
    textAlign: 'center',
  },
  featureIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  featureTitle: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px',
  },
  featureDesc: {
    fontSize: '14px',
    color: '#6b7280',
  },
  dashboardContainer: {
    minHeight: '100vh',
    background: '#f9fafb',
  },
  header: {
    background: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
  },
  headerButtons: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  userEmail: {
    fontSize: '14px',
    color: '#6b7280',
    marginRight: '12px',
  },
  btnPrimary: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  btnSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    background: 'white',
    color: '#374151',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  btnLogout: {
    padding: '8px 16px',
    background: 'transparent',
    color: '#6b7280',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '32px',
  },
  statCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '4px',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#111827',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '32px',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '16px 20px',
    borderBottom: '1px solid #e5e7eb',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
  },
  subscriptionItem: {
    padding: '16px 20px',
    borderBottom: '1px solid #f3f4f6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subName: {
    fontWeight: '500',
    color: '#111827',
    marginBottom: '4px',
  },
  subMeta: {
    fontSize: '14px',
    color: '#6b7280',
  },
  subPrice: {
    fontWeight: '600',
    color: '#111827',
    textAlign: 'right',
  },
  subCycle: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  accountItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    background: '#f9fafb',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  accountInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  accountEmail: {
    fontSize: '14px',
    color: '#374151',
  },
  addAccountBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px',
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    cursor: 'pointer',
    textDecoration: 'none',
    marginBottom: '8px',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '4px',
  },
  categoryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
  },
  message: {
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '24px',
  },
  errorMsg: {
    background: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#b91c1c',
  },
  successMsg: {
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    color: '#15803d',
  },
  emptyState: {
    padding: '48px',
    textAlign: 'center',
    color: '#6b7280',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
};

// Icons
const GmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#EA4335">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const OutlookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0078D4">
    <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V12zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54Z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const RefreshIcon = ({ spinning }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    style={spinning ? { animation: 'spin 1s linear infinite' } : {}}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

function App() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    // Check URL params for OAuth callback
    const params = new URLSearchParams(window.location.search);
    const connected = params.get('connected');
    const email = params.get('email');
    const errorParam = params.get('error');

    if (connected && email) {
      setSuccess(`Successfully connected ${email}`);
      window.history.replaceState({}, '', '/');
    } else if (errorParam) {
      setError(`Connection failed: ${errorParam}`);
      window.history.replaceState({}, '', '/');
    }

    // Check if user is logged in
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await apiFetch('/api/me');
      const data = await res.json();
      
      if (data.loggedIn) {
        setUser(data);
        fetchData();
      } else {
        setUser(null);
        setLoading(false);
      }
    } catch (err) {
      console.error('Auth check error:', err);
      setUser(null);
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const [accountsRes, subsRes, statsRes] = await Promise.all([
        apiFetch('/api/accounts'),
        apiFetch('/api/subscriptions'),
        apiFetch('/api/stats'),
      ]);

      if (accountsRes.ok) setAccounts(await accountsRes.json());
      if (subsRes.ok) setSubscriptions(await subsRes.json());
      if (statsRes.ok) setStats(await statsRes.json());
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSyncAndDownload = async () => {
    setSyncing(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/sync-and-report`, { 
        method: 'POST',
        credentials: 'include'
      });
      
      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `subscription-report-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        setSuccess('Report downloaded!');
        fetchData();
      } else {
        const err = await res.json();
        setError(err.error || 'Failed to generate report');
      }
    } catch (err) {
      setError('Failed: ' + err.message);
    } finally {
      setSyncing(false);
    }
  };

  const handleDownloadPdf = async () => {
    try {
      const res = await fetch(`${API_URL}/api/report/pdf`, {
        credentials: 'include'
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `subscription-report-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      setError('Download failed: ' + err.message);
    }
  };

  const handleDisconnect = async (accountId) => {
    if (!window.confirm('Disconnect this account?')) return;
    
    try {
      const res = await apiFetch(`/api/accounts/${accountId}`, { method: 'DELETE' });
      if (res.ok) {
        setSuccess('Account disconnected');
        fetchData();
      }
    } catch (err) {
      setError('Failed to disconnect');
    }
  };

  const handleLogout = async () => {
    try {
      await apiFetch('/api/logout', { method: 'POST' });
      setUser(null);
      setAccounts([]);
      setSubscriptions([]);
      setStats(null);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const formatCurrency = (amount, currency = 'USD') => {
    const symbols = { USD: '$', EUR: '€', GBP: '£', ILS: '₪' };
    return `${symbols[currency] || '$'}${(amount || 0).toFixed(2)}`;
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  // Loading state
  if (loading && !user) {
    return (
      <div style={{...styles.landingContainer, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>Loading...</p>
      </div>
    );
  }

  // Landing page (not logged in)
  if (!user) {
    return (
      <div style={styles.landingContainer}>
        <div style={styles.landingContent}>
          <h1 style={styles.heroTitle}>Subscription Tracker</h1>
          <p style={styles.heroSubtitle}>
            See all your recurring payments in one place. Connect your email to automatically detect subscriptions from receipts.
          </p>

          {error && (
            <div style={{...styles.message, ...styles.errorMsg, textAlign: 'center', maxWidth: '400px', margin: '0 auto 24px'}}>
              {error}
            </div>
          )}

          <div style={styles.connectCard}>
            <h2 style={styles.connectTitle}>Connect Your Email</h2>
            
            <a href={`${API_URL}/auth/google`} style={styles.connectButton}>
              <GmailIcon />
              Connect Gmail
            </a>
            
            <a href={`${API_URL}/auth/microsoft`} style={styles.connectButton}>
              <OutlookIcon />
              Connect Outlook
            </a>

            <p style={styles.privacyText}>
              We only read receipt emails to detect subscriptions. Your data is never shared.
              <br /><a href="/privacy" style={{color: '#2563eb'}}>Privacy Policy</a>
            </p>
          </div>

          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <div style={{...styles.featureIcon, background: '#dbeafe'}}>
                <RefreshIcon />
              </div>
              <h3 style={styles.featureTitle}>Auto-Detect</h3>
              <p style={styles.featureDesc}>Automatically finds subscriptions from your email receipts</p>
            </div>
            <div style={styles.featureItem}>
              <div style={{...styles.featureIcon, background: '#dcfce7'}}>
                <span style={{color: '#16a34a', fontSize: '20px'}}>✓</span>
              </div>
              <h3 style={styles.featureTitle}>Track Spending</h3>
              <p style={styles.featureDesc}>See your total monthly and yearly subscription costs</p>
            </div>
            <div style={styles.featureItem}>
              <div style={{...styles.featureIcon, background: '#f3e8ff'}}>
                <DownloadIcon />
              </div>
              <h3 style={styles.featureTitle}>PDF Report</h3>
              <p style={styles.featureDesc}>Download a detailed report of all your subscriptions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard (logged in)
  return (
    <div style={styles.dashboardContainer}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        button:hover { opacity: 0.9; }
        a:hover { opacity: 0.9; }
      `}</style>
      
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Subscription Tracker</h1>
        <div style={styles.headerButtons}>
          <span style={styles.userEmail}>{user.email}</span>
          {subscriptions.length > 0 && (
            <button onClick={handleDownloadPdf} style={styles.btnSecondary}>
              <DownloadIcon />
              Download PDF
            </button>
          )}
          <button onClick={handleSyncAndDownload} disabled={syncing} style={{...styles.btnPrimary, opacity: syncing ? 0.6 : 1}}>
            <RefreshIcon spinning={syncing} />
            {syncing ? 'Syncing...' : 'Sync & Download'}
          </button>
          <button onClick={handleLogout} style={styles.btnLogout}>
            Logout
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {error && <div style={{...styles.message, ...styles.errorMsg}}>{error}</div>}
        {success && <div style={{...styles.message, ...styles.successMsg}}>{success}</div>}

        {stats && (
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <p style={styles.statLabel}>Monthly Cost</p>
              <p style={styles.statValue}>{formatCurrency(stats.total_monthly)}</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statLabel}>Yearly Cost</p>
              <p style={styles.statValue}>{formatCurrency(stats.total_yearly)}</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statLabel}>Active Subscriptions</p>
              <p style={styles.statValue}>{stats.active_count}</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statLabel}>Connected Accounts</p>
              <p style={styles.statValue}>{stats.accounts_count}</p>
            </div>
          </div>
        )}

        <div style={styles.contentGrid}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Your Subscriptions</h2>
            </div>
            
            {loading ? (
              <div style={styles.emptyState}>Loading...</div>
            ) : subscriptions.length === 0 ? (
              <div style={styles.emptyState}>
                <p>No subscriptions found yet.</p>
                <button onClick={handleSyncAndDownload} style={{...styles.btnPrimary, margin: '16px auto'}}>
                  Sync Now
                </button>
              </div>
            ) : (
              subscriptions.map((sub) => (
                <div key={sub.id} style={styles.subscriptionItem}>
                  <div>
                    <div style={styles.subName}>{sub.name}</div>
                    <div style={styles.subMeta}>{sub.category || 'Other'} • {sub.billing_cycle || 'monthly'}</div>
                  </div>
                  <div>
                    <div style={styles.subPrice}>{formatCurrency(sub.price, sub.currency)}</div>
                    <div style={styles.subCycle}>/{sub.billing_cycle === 'yearly' ? 'year' : 'month'}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div style={styles.sidebar}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h2 style={styles.cardTitle}>Connected Accounts</h2>
              </div>
              <div style={{padding: '16px'}}>
                {accounts.map((account) => (
                  <div key={account.id} style={styles.accountItem}>
                    <div style={styles.accountInfo}>
                      {account.provider === 'google' ? <GmailIcon /> : <OutlookIcon />}
                      <span style={styles.accountEmail}>{account.email}</span>
                    </div>
                    <button onClick={() => handleDisconnect(account.id)} style={styles.deleteBtn}>
                      <TrashIcon />
                    </button>
                  </div>
                ))}
                
                <div style={{borderTop: '1px solid #e5e7eb', marginTop: '12px', paddingTop: '12px'}}>
                  <a href={`${API_URL}/auth/google`} style={styles.addAccountBtn}>
                    <GmailIcon /> Add Gmail
                  </a>
                  <a href={`${API_URL}/auth/microsoft`} style={styles.addAccountBtn}>
                    <OutlookIcon /> Add Outlook
                  </a>
                </div>
              </div>
            </div>

            {stats?.by_category?.length > 0 && (
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h2 style={styles.cardTitle}>By Category</h2>
                </div>
                <div style={{padding: '16px'}}>
                  {stats.by_category.map((cat, idx) => (
                    <div key={idx} style={styles.categoryItem}>
                      <span style={{fontSize: '14px', color: '#374151'}}>{cat.category}</span>
                      <span style={{fontSize: '14px', fontWeight: '500'}}>{formatCurrency(cat.total)}/mo</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer with Privacy link */}
      <footer style={{textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '14px'}}>
        <a href="/privacy" style={{color: '#6b7280'}}>Privacy Policy</a>
      </footer>
    </div>
  );
}

// Router component
function AppRouter() {
  const [page, setPage] = useState(getPage());
  
  useEffect(() => {
    const handlePopState = () => setPage(getPage());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  if (page === 'privacy') {
    return <PrivacyPolicy />;
  }
  
  return <App />;
}

export default AppRouter;
