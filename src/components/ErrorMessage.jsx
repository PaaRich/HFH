/* eslint-disable react/prop-types */
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div style={styles.errorContainer}>
      <p style={styles.errorText}>Error: {message}</p>
      {onRetry && (
        <button style={styles.retryButton} onClick={onRetry}>
          Back
        </button>
      )}
    </div>
  );
};

// Inline styles for the component
const styles = {
  errorContainer: {
    padding: '16px',
    backgroundColor: '#ffebee',
    border: '1px solid #ffcdd2',
    borderRadius: '4px',
    color: '#c62828',
    textAlign: 'center',
    margin: '16px 0',
  },
  errorText: {
    margin: '0 0 16px 0',
    fontSize: '16px',
  },
  retryButton: {
    padding: '8px 16px',
    backgroundColor: '#c62828',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default ErrorMessage;