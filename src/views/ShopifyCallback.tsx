import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, Alert } from '@mui/material';
import { markShopifyConnected } from '../api/services/articraft';

export const ShopifyCallback: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');

        if (error) {
          throw new Error('Authorization failed');
        }

        if (!code) {
          throw new Error('No authorization code received');
        }

        // Mark as connected (in a real app, you'd exchange the code for an access token)
        markShopifyConnected();
        
        setStatus('success');
        setMessage('Shopify connected successfully!');

        // Redirect back to integrations after 2 seconds
        setTimeout(() => {
          window.location.href = '/integrations';
        }, 2000);

      } catch (err) {
        setStatus('error');
        setMessage('Failed to connect Shopify. Please try again.');

        // Redirect back after 3 seconds
        setTimeout(() => {
          window.location.href = '/integrations';
        }, 3000);
      }
    };

    handleCallback();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 3,
      }}
    >
      {status === 'loading' && (
        <>
          <CircularProgress size={48} sx={{ mb: 3 }} />
          <Typography variant="h6" gutterBottom>
            Connecting to Shopify...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please wait while we complete your integration.
          </Typography>
        </>
      )}

      {status === 'success' && (
        <Alert severity="success" sx={{ maxWidth: 500 }}>
          <Typography variant="h6">{message}</Typography>
          <Typography variant="body2">Redirecting back to integrations...</Typography>
        </Alert>
      )}

      {status === 'error' && (
        <Alert severity="error" sx={{ maxWidth: 500 }}>
          <Typography variant="h6">{message}</Typography>
          <Typography variant="body2">Redirecting back to integrations...</Typography>
        </Alert>
      )}
    </Box>
  );
};