import React, { useState } from 'react';
import { Button } from '@sanity/ui';
import { set, unset } from 'sanity';

interface EmailSenderProps {
  value?: any;
  onChange: (value: any) => void;
  type: any;
}

export const EmailSenderInput = React.forwardRef<HTMLDivElement, EmailSenderProps>(
  (props, ref) => {
    const { value, onChange, type } = props;
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<string>('');

    const handleSendEmail = async () => {
      if (!value?.recipients || !value?.subject || !value?.content) {
        setStatus('Please fill in all required fields');
        return;
      }

      setIsSending(true);
      setStatus('Sending email...');

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: value.recipients,
            subject: value.subject,
            content: value.content,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setStatus('Email sent successfully!');
          // Mark as sent
          onChange(set({ ...value, sent: true, sentAt: new Date().toISOString() }));
        } else {
          setStatus(`Failed to send email: ${result.error}`);
        }
      } catch (error) {
        setStatus(`Error: ${error.message}`);
      } finally {
        setIsSending(false);
      }
    };

    const isSent = value?.sent;

    return (
      <div ref={ref} style={{ padding: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Email Sender</strong>
          {isSent && (
            <div style={{ color: 'green', marginTop: '0.5rem' }}>
              ✓ Email sent on {new Date(value.sentAt).toLocaleString()}
            </div>
          )}
        </div>

        {!isSent && (
          <Button
            mode="ghost"
            tone="primary"
            onClick={handleSendEmail}
            disabled={isSending || !value?.recipients || !value?.subject || !value?.content}
            text={isSending ? 'Sending...' : 'Send Email'}
          />
        )}

        {status && (
          <div style={{ 
            marginTop: '0.5rem', 
            padding: '0.5rem', 
            backgroundColor: status.includes('success') ? '#d4edda' : '#f8d7da',
            color: status.includes('success') ? '#155724' : '#721c24',
            borderRadius: '4px'
          }}>
            {status}
          </div>
        )}
      </div>
    );
  }
);

EmailSenderInput.displayName = 'EmailSenderInput';
