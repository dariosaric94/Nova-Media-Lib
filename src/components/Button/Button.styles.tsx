export const getButtonColor = (color: string) => {
  switch (color) {
    case 'primary':
      return 'button-primary';
    case 'secondary':
      return 'button-secondary';
    case 'info':
      return 'button-info';
    case 'error':
      return 'button-error';
    case 'warning':
      return 'button-warning';
    case 'success':
      return 'button-success';
    default:
      return 'button-primary';
  }
};

export const getButtonVariant = (variant: string) => {
  switch (variant) {
    case 'contained':
      return 'button-contained';
    case 'outlined':
      return 'button-outlined';
    case 'text':
      return 'button-text';
    default:
      return 'button-contained';
  }
};
