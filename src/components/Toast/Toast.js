import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { ToastContext } from '../ToastProvider/ToastProvider';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';

// Possible Icons based on variant
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { dismissToast } = React.useContext(ToastContext);
  // Use "variant" prop to look up the right component in the ICONS_BY_VARIANT object, then assign it to a variable, Icon.
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {children}
      </p>
      {/* Wire handleDismiss to the close button */}
      <button className={styles.closeButton} onClick={() => dismissToast(id)} aria-label='Dismiss message' aria-live='off'>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
