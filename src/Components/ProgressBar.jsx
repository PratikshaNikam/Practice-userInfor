// components/ProgressBar.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const steps = [
  { path: '/', label: 'Personal Info' },
  { path: '/contact', label: 'Contact Info' },
  { path: '/address', label: 'Address Info' },
  { path: '/professional', label: 'Professional Info' },
  { path: '/summary', label: 'Summary' }
];

const ProgressBar = () => {
  const location = useLocation();
  const currentStep = steps.findIndex(step => step.path === location.pathname);

  return (
    <div style={styles.progressContainer}>
      {steps.map((step, index) => (
        <div key={step.path} style={styles.stepWrapper}>
          <div
            style={{
              ...styles.circle,
              backgroundColor: index <= currentStep ? '#4CAF50' : '#ccc'
            }}
          >
            {index + 1}
          </div>
          <span style={styles.label}>{step.label}</span>
          {index < steps.length - 1 && (
            <div
              style={{
                ...styles.line,
                backgroundColor: index < currentStep ? '#4CAF50' : '#ccc'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stepWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  label: {
    marginLeft: 8,
    marginRight: 20,
    fontSize: 12,
    whiteSpace: 'nowrap',
  },
  line: {
    height: 2,
    width: 40,
    backgroundColor: '#ccc',
    position: 'absolute',
    top: '50%',
    left: 30,
    zIndex: 0
  }
};

export default ProgressBar;
